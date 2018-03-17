// PS3 Default Variables
// PS3Xploit Team 2018 / ps3xploit.com


function setDefaults()
{
	// Check User Agent For Info
	ps3chk();
	
	// Enable Stuff
	toggleDisableButtons(false);
	
	showGuiText();// display all text on GUI
	
	hideElement("debug-alert", true);
	disableElement("debug-alert", false);
	
	// Disable Stuff
	disableElement("load_rop", true);
	disableElement("marked_chmod", true);
	disableElement("marked_chown", true);
	
	disableElement("marked_memdump_addr", true);
	disableElement("marked_memdump_size", true);
	disableElement("marked_memdump_addr_edit", true);
	disableElement("marked_memdump_size_edit", true);
	disableElement("memdump_save_new_values", true);
	
	// Reset Paths
	setValueToHTML("path_src","");
	setValueToHTML("path_src_type","");
	setValueToHTML("path_dest","");
	setValueToHTML("path_dest_type","");
	
	setValueToHTML("file_size_edit","0x00000140");// default file size
	
	if(debug_mode){writeEnvInfo(document.getElementById('footer'));}
	
	//default_settings.focus();
	document.getElementById("default_settings").focus();

}

function initRopDefaults()
{
	// Store Selected Flash Type Backup For Searching
	ftype=type;
	
	// Reset Flag
	allOffsetsFound=false;
	
	// Set some values from web page
	setPathNames();
	
	// Check For Default Page Settings
	if(default_settings){setArgsFromPage();}
	
	// Check For Input Values
	if(chain_stackframe===""){alert(msg_no_chain_selected);marked_hex.focus();return;}
	
	toggleDisableButtons(true);
	hideElement("debug-alert", true);// hide debug output button by default
	
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
	
	// Log Entry
	if(debug_mode){log_div = logEntry();}
	
	// Reset Timeout Value
	t_out=0;
	
	total_loops++;
}

function toggleAutoReload()
{
	if(auto_reload)
	{
		auto_reload=false;
	}
	else{
		auto_reload=true;
	}
}

function toggleTrigger()
{
	if(disable_trigger)
	{
		disable_trigger=false;
	}
	else{
		disable_trigger=true;
	}
}

function reloadPage(){window.location.reload();}

function logForGC()
{
	console.log(s2hex(base_fp), log_div);
	console.log(s2hex(stack_frame), log_div);
	console.log(s2hex(jump_2), log_div);
	console.log(s2hex(jump_1), log_div);
	
	if(debug_mode){writeEnvInfo(document.getElementById('footer'));}
}

function getDate()
{
	//return y+"/"+m+"/"+d+"/";
	return str2u(y+"/"+m+"/"+d+"/");
}

function setInnerHTML(elem,str)
{
	if(elem)elem.innerHTML=str;
}

function addInnerHTML(elem,str)
{
	if(elem)elem.innerHTML+=str;
}

function setVisible(elem)
{
	if(elem)elem.style.visibility='visible';
}

function setInvisible(elem)
{
	if(elem)elem.style.visibility='hidden';
}

function enable_element(elem)
{
	if(elem)elem.disabled=false;
}

function disable_element(elem)
{
	if(elem)elem.disabled=true;
}

function cbcheck(elem)
{
	if(elem)elem.checked=true;
}

function cbuncheck(elem)
{
	if(elem)elem.checked=false;
}

function chainSucceed(msg)
{
	document.getElementById('result').innerHTML=msg;
	if(debug_mode){logAdd(msg, log_div);}
}

function logFoundOffsets()
{
	logAdd("search_max_threshold: "+search_max_threshold+"\nsearch_max_threshold_backup: "+search_max_threshold_backup+"\nsearch_base_offset: "+search_base_offset+"\nsearch_base_offset_min: "+search_base_offset_min+"\nsearch_base_offset_max: "+search_base_offset_max+"\nsearch_base_offset_adjust: "+search_base_offset_adjust+"\nsearch_base_offset_adjust_jump2: "+search_base_offset_adjust_jump2+"\nsearch_base_offset_adjust_jump1: "+search_range_size+"\nsearch_max_threshold: "+search_range_size);
}

function logFlashType()
{
	logAdd(msg_search_flash_type_start+flash_type_text+msg_search_flash_type_end);
}

function showWaitMessage(msg)
{
	if(msg===""){result_msg=msg_exec_init;}else{result_msg=msg;}
	document.getElementById('result').innerHTML=result_msg;
}

function enableActiveTrigger()
{
	disableElement("load_rop", false);
}

function verifyOffsetsToggle()
{
	if(verify_offsets)
	{
		verify_offsets=false;
	}
	else{
		verify_offsets=true;
	}
}

function verifyStackframeToggle()
{
	if(verify_stackframe)
	{
		verify_stackframe=false;
	}
	else{
		verify_stackframe=true;
	}
}

function disableElement(elem, state)
{
	document.getElementById(elem).disabled=state;
}

function checkBox(elem, state)
{
	document.getElementById(elem).checked=state;
}

function hideElement(elem, state)
{
	if(state)
	{
		return document.getElementById(elem).style.visibility='hidden';
	}
	else{
		return document.getElementById(elem).style.visibility='visible';
	}
}

function removeElement(elem, state)
{
	if(state)
	{
		return document.getElementById(elem).style.display='none';
	}
	else{
		return document.getElementById(elem).style.display='block';
	}
}

function setValueToHTML(elem, v)
{
	document.getElementById(elem).value=v;
}

function getValueFromHTML(elem)
{
	return document.getElementById(elem).value;
}

function loadSettings(data)
{
	getCookie(data);
	alert(msg_settings_load);
}

function saveSettings(data)
{
	setCookie(data);
	alert(msg_settings_save);
}

function compatCheck(version)
{
	if(version<"3.56"){isFW356=false;isCompatCFW=true;return "";}// compatible
	if(version==="3.56"){isFW356=true;isCompatCFW=true;return "";}// compatible
	if(version>"3.56"){isFW356=false;isCompatCFW=false;return msg_minver_compat_not;}// not compatible
}

function showReturnValue(addr)
{
	if(rtn_val_seen)
	{
		rtn_val=checkMemory(storage_get_device_info_buffer_ptr-0x10,0x100,0x100,10);
		rtn_val=s2hex(rtn_val).toString().slice(3, 12);
		alert(msg_get_device_info1+rtn_val+msg_get_device_info2);
	}
	else
	{
		rtn_val_seen=true;
		rtn_val=msg_device_loaded_into_mem;
		alert(rtn_val.toString());
	}
}

function showMinVersion()
{
	if(minver_seen)
	{
		minver=checkMemory(temp_addr_8C-0x8,0x100,0x100,10);
		minver=s2hex(minver).toString().slice(3, 8).replace("00",".");
		alert(msg_minver_start+minver.toString()+msg_minver_mid+compatCheck(minver.toString())+msg_minver_end);
	}
	else
	{
		minver_seen=true;
		minver=msg_minver_loaded_into_mem;
		alert(minver.toString());
	}
}

function showFilesize()
{
	if(filesize_seen)
	{
		filesize=checkMemory(filesize_addr-0x8+0x28,0x100,0x100,10);
		filesize=s2hex(filesize).toString().slice(0, 8);
		alert(msg_filesize+filesize.toString());
	}
	else
	{
		filesize_seen=true;
		filesize=msg_filesize_loaded_into_mem;
		alert(filesize.toString());
	}
}

function showTemps()
{
	if(temps_both_seen)
	{
		temp_cell=checkMemory(get_temperature_temp_cell_ptr-0x8,0x100,0x100,10);
		temp_cell=s2hex(temp_cell).slice(0,4);
		temp_cell_hex=temp_cell.slice(0,2);
		temp_cell_hexf=temp_cell.slice(2,4);
		temp_cell_hexc=parseInt(temp_cell_hexf,16)/256;
		temp_cell_hex_final=parseInt(temp_cell_hex,16).toString()+"."+temp_cell_hexc.toString();
		
		temp_rsx=checkMemory(get_temperature_temp_rsx_ptr-0x8,0x100,0x100,10);
		temp_rsx=s2hex(temp_rsx).slice(0,4);
		temp_rsx_hex=temp_rsx.slice(0,2);
		temp_rsx_hexf=temp_rsx.slice(2,4);
		temp_rsx_hexc=parseInt(temp_rsx_hexf,16)/256;
		temp_rsx_hex_final=parseInt(temp_rsx_hex,16).toString()+"."+temp_rsx_hexc.toString();
		
		alert(msg_temps_cell+temp_cell_hex_final+msg_temps_celcius+msg_temps_rsx+temp_rsx_hex_final+msg_temps_celcius);
	}
	else
	{
		temps_both_seen=true;
		alert(msg_temps_loaded_into_mem);
	}
}

// Enable and Disable Stuff
function toggleDisableButtons(state)
{	
	disableElement("init_rop", state);
	disableElement("load_rop", state);
	disableElement("reset-options", state);
	disableElement("debug-alert", state);
	
	disableElement("load_settings", state);
	disableElement("save_settings", state);
	
	disableElement("number_of_beeps_edit", state);
	
	disableElement("marked_memdump_addr", state);
	disableElement("marked_memdump_size", state);
	disableElement("marked_memdump_addr_edit", state);
	disableElement("marked_memdump_size_edit", state);
	disableElement("memdump_save_new_values", state);
	disableElement("marked_memdump_range", state);
	
	disableElement("disable_trigger", state);
	disableElement("marked_hex", state);
	disableElement("marked_hex_dump", state);
	disableElement("marked_hex_file_system", state);
	disableElement("marked_hex_fun", state);
	disableElement("marked_hex_debugging", state);
	disableElement("marked_hex_memory", state);
	disableElement("marked_hex_process", state);
	disableElement("marked_hex_process_id", state);
	disableElement("marked_hex_storage", state);
	disableElement("write_protection_toggle", state);
	disableElement("marked_hex_threads", state);
	disableElement("marked_hex_threads_id", state);
	
	disableElement("marked_hex_network", state);
	disableElement("network_url_edit", state);
	
	disableElement("marked_hex_system", state);
	disableElement("marked_hex_system_led", state);
	disableElement("marked_hex_system_led_color", state);
	disableElement("marked_hex_system_led_action", state);
	//disableElement("marked_hex_system_fan_speed", state);
	//disableElement("marked_hex_system_fan_settings", state);
	
	disableElement("mounting_device", state);
	disableElement("mounting_fs", state);
	disableElement("mounting_path", state);
	disableElement("usb_mount_toggle", state);
	
	disableElement("marked_reboot", state);
	disableElement("default_settings", state);
	disableElement("marked_user_id", state);
	disableElement("marked_chmod", state);
	
	disableElement("file_size_edit", state);
	disableElement("btn_file_size_edit", state);
	
	disableElement("title_id_edit", state);
	disableElement("btn_title_id_edit", state);
	
	disableElement("path_src", state);
	disableElement("path_dest", state);
	disableElement("path_src_type", state);
	disableElement("path_dest_type", state);
	disableElement("marked_xmb_select", state);
	disableElement("flash_type_nand", state);
	disableElement("flash_type_nor", state);
	disableElement("flash_type_emmc", state);
	disableElement("debug_option", state);
	disableElement("verify_offsets", state);
	disableElement("verify_stackframe", state);
	disableElement("marked_search_size", state);
	disableElement("marked_search_base_offset", state);
	disableElement("marked_search_stack_adjust", state);
	disableElement("marked_search_range_size", state);
	disableElement("marked_search_max_loops", state);
}

// Setup all Stack Frame Parameters
// Called From loader.js

function stackFrameTest()
{
	a1_r3=sc_buzzer_arg1;
	a1_r4=sc_buzzer_arg2;
	a1_r5=sc_buzzer_arg3;
	a1_r11=sc_sys_sm_ring_buzzer;
	a1_jumpto=g_set_r4_thru_r11;
	a2_jumpto=g_set_r3_from_r29;
	a3_jumpto=g_sc_A0;
	a4_r3=sc_buzzer_arg1;
	a4_r4=sc_buzzer_arg2;
	a4_r5=sc_buzzer_arg3;
	a4_r11=sc_sys_sm_ring_buzzer;
	a4_jumpto=g_set_r4_thru_r11;
	a5_jumpto=g_set_r3_from_r29;
	a6_jumpto=g_sc_A0;
	a7_r3=sc_buzzer_arg1;
	a7_r4=sc_buzzer_arg2;
	a7_r5=sc_buzzer_arg3;
	a7_r11=sc_sys_sm_ring_buzzer;
	a7_jumpto=g_set_r4_thru_r11;
	a8_jumpto=g_set_r3_from_r29;
	a9_jumpto=g_sc_A0;
	a10_r3=sc_buzzer_arg1;
	a10_r4=sc_buzzer_arg2;
	a10_r5=sc_buzzer_arg3;
	a10_r11=sc_sys_sm_ring_buzzer;
	a10_jumpto=g_set_r4_thru_r11;
	a11_jumpto=g_set_r3_from_r29;
	a12_jumpto=g_sc_A0;
	a13_r3=sc_buzzer_arg1;
	a13_r4=sc_buzzer_arg2;
	a13_r5=sc_buzzer_arg3;
	a13_r11=sc_sys_sm_ring_buzzer;
	a13_jumpto=g_set_r4_thru_r11;
	a14_jumpto=g_set_r3_from_r29;
	a15_jumpto=g_sc_A0;
	a16_r3=sc_buzzer_arg1;
	a16_r4=sc_buzzer_arg2;
	a16_r5=sc_buzzer_arg3;
	a16_r11=sc_sys_sm_ring_buzzer;
	a16_jumpto=g_set_r4_thru_r11;
	a17_jumpto=g_set_r3_from_r29;
	a18_jumpto=g_sc_A0;
	a19_r3=sc_buzzer_arg1;
	a19_r4=sc_buzzer_arg2;
	a19_r5=sc_buzzer_arg3;
	a19_r11=sc_sys_sm_ring_buzzer;
	a19_jumpto=g_set_r4_thru_r11;
	a20_jumpto=g_set_r3_from_r29;
	a21_jumpto=g_sc_A0;
	a22_r3=sc_buzzer_arg1;
	a22_r4=sc_buzzer_arg2;
	a22_r5=sc_buzzer_arg3;
	a22_r11=sc_sys_sm_ring_buzzer;
	a22_jumpto=g_set_r4_thru_r11;
	a23_jumpto=g_set_r3_from_r29;
	a24_jumpto=g_sc_A0;
	a25_r3=sc_buzzer_arg1;
	a25_r4=sc_buzzer_arg2;
	a25_r5=sc_buzzer_arg3;
	a25_r11=sc_sys_sm_ring_buzzer;
	a25_jumpto=g_set_r4_thru_r11;
	a26_jumpto=g_set_r3_from_r29;
	a27_jumpto=g_sc_A0;
	a28_r3=sc_buzzer_arg1;
	a28_r4=sc_buzzer_arg2;
	a28_r5=sc_buzzer_arg3;
	a28_r11=sc_sys_sm_ring_buzzer;
	a28_jumpto=g_set_r4_thru_r11;
	a29_jumpto=g_set_r3_from_r29;
	a30_jumpto=g_sc_A0;
	a31_r11=restore_stack;
	a31_jumpto=g_set_r4_thru_r11;
	a32_jumpto=g_exit_chain;
	//a33_jumpto=g_exit_chain;
}

function syscallAndExit(r3,r4,r5,r6,r7,r8,r9,r10,r11,r30,r31)
{
	a1_r3=r3;
	a1_r4=r4;
	a1_r5=r5;
	a1_r6=r6;
	a1_r7=r7;
	a1_r8=r8;
	a1_r9=r9;
	a1_r10=r10;
	a1_r11=r11;
	a1_r29=r29;
	a1_r30=r30;
	a1_r31=r31;
	a1_jumpto=g_set_r4_thru_r11;
	a2_jumpto=g_set_r3_from_r29;
	a3_jumpto=g_sc_A0;
	a4_r11=restore_stack;
	a4_jumpto=g_set_r4_thru_r11;
	a5_jumpto=g_exit_chain;
}

function syscallTwoAndExit(r3a,r4a,r5a,r6a,r7a,r8a,r9a,r10a,r11a,r30a,r31a,r3b,r4b,r5b,r6b,r7b,r8b,r9b,r10b,r11b,r30b,r31b)
{
	a1_r3=r3a;
	a1_r4=r4a;
	a1_r5=r5a;
	a1_r6=r6a;
	a1_r7=r7a;
	a1_r8=r8a;
	a1_r9=r9a;
	a1_r10=r10a;
	a1_r11=r11a;
	a1_r29=r3a;
	a1_r30=r30a;
	a1_r31=r31a;
	a1_jumpto=g_set_r4_thru_r11;
	a2_jumpto=g_set_r3_from_r29;
	a3_jumpto=g_sc_A0;
	a4_r3=r3b;
	a4_r4=r4b;
	a4_r5=r5b;
	a4_r6=r6b;
	a4_r7=r7b;
	a4_r8=r8b;
	a4_r9=r9b;
	a4_r10=r10b;
	a4_r11=r11b;
	a4_r29=r3b;
	a4_r30=r30b;
	a4_r31=r31b;
	a4_jumpto=g_set_r4_thru_r11;
	a5_jumpto=g_set_r3_from_r29;
	a6_jumpto=g_sc_A0;
	a7_r11=restore_stack;
	a7_jumpto=g_set_r4_thru_r11;
	a8_jumpto=g_exit_chain;
}

function syscallThreeAndExit(r3a,r4a,r5a,r6a,r7a,r8a,r9a,r10a,r11a,r30a,r31a,r3b,r4b,r5b,r6b,r7b,r8b,r9b,r10b,r11b,r30b,r31b,r3c,r4c,r5c,r6c,r7c,r8c,r9c,r10c,r11c,r30c,r31c)
{
	a1_r3=r3a;
	a1_r4=r4a;
	a1_r5=r5a;
	a1_r6=r6a;
	a1_r7=r7a;
	a1_r8=r8a;
	a1_r9=r9a;
	a1_r10=r10a;
	a1_r11=r11a;
	a1_r30=r30a;
	a1_r31=r31a;
	a1_jumpto=g_set_r4_thru_r11;
	a2_jumpto=g_set_r3_from_r29;
	a3_jumpto=g_sc_A0;
	a4_r3=r3b;
	a4_r4=r4b;
	a4_r5=r5b;
	a4_r6=r6b;
	a4_r7=r7b;
	a4_r8=r8b;
	a4_r9=r9b;
	a4_r10=r10b;
	a4_r11=r11b;
	a4_r30=r30b;
	a4_r31=r31b;
	a4_jumpto=g_set_r4_thru_r11;
	a5_jumpto=g_set_r3_from_r29;
	a6_jumpto=g_sc_A0;
	a7_r3=r3c;
	a7_r4=r4c;
	a7_r5=r5c;
	a7_r6=r6c;
	a7_r7=r7c;
	a7_r8=r8c;
	a7_r9=r9c;
	a7_r10=r10c;
	a7_r11=r11c;
	a7_r30=r30c;
	a7_r31=r31c;
	a7_jumpto=g_set_r4_thru_r11;
	a8_jumpto=g_set_r3_from_r29;
	a9_jumpto=g_sc_A0;
	extra5=restore_stack;
	a10_jumpto=g_exit_chain;
}

function syscallAndReboot(r3,r4,r5,r6,r7,r8,r9,r10,r11,r30,r31,mode,lpar_param,lpar_size)
{
	a1_r3=r3;
	a1_r4=r4;
	a1_r5=r5;
	a1_r6=r6;
	a1_r7=r7;
	a1_r8=r8;
	a1_r9=r9;
	a1_r10=r10;
	a1_r11=r11;
	a1_r29=r29;
	a1_r30=r30;
	a1_r31=r31;
	a1_jumpto=g_set_r4_thru_r11;
	a2_jumpto=g_set_r3_from_r29;
	a3_jumpto=g_sc_A0;
	a4_r3=mode;
	a4_r4=lpar_param;
	a4_r5=lpar_size;
	a4_r11=sc_shutdown;
	a4_jumpto=g_set_r4_thru_r11;
	a5_jumpto=g_set_r3_from_r29;
	a6_jumpto=g_sc_A0;
}

function syscallFwriteAndExit(r3,r4,r5,r6,r7,r8,r9,r10,r11,r30,r31,dest,size,start_addr)
{
	a1_r3=r3;
	a1_r4=r4;
	a1_r5=r5;
	a1_r6=r6;
	a1_r7=r7;
	a1_r8=r8;
	a1_r9=r9;
	a1_r10=r10;
	a1_r11=r11;
	a1_r29=r29;
	a1_r30=r30;
	a1_r31=r31;
	a1_jumpto=g_set_r4_thru_r11;
	a2_jumpto=g_set_r3_from_r29;
	a3_jumpto=g_sc_A0;
	a4_r3=dest;
	a4_r4=file_mode_fp_addr;
	a4_r5=size;
	a4_r30=start_addr;
	a4_jumpto=g_set_r4_thru_r11;
	a5_jumpto=g_set_r3_from_r29;
	a6_r29=size;
	a6_jumpto=e_fopen_write_close;
	extra1=size;
	a7_jumpto=restore_stack;
	extra2=g_exit_chain;
}

function syscallFwriteAndReboot(dest,size,start_addr,mode,lpar_param,lpar_size)
{
	a1_r3=dest;
	a1_r4=file_mode_fp_addr;// address of file mode [wb]
	a1_r5=size;
	a1_r30=start_addr;
	a1_jumpto=g_set_r4_thru_r11;
	a2_jumpto=g_set_r3_from_r29;
	padding1=pad4ext;// fix for extsw instruction
	a3_r31=mode;// is r3 but uses r31 place in chain
	a3_jumpto=e_fopen_write_close;
	a4_r6=sc_shutdown;// is r11 but uses r6 place in chain
	a4_r9=0x00000000;// is r4 but uses r9 place in chain
	a4_r29=size;// size;
	a4_jumpto=g_set_r4_thru_r11;
	a5_r5=lpar_param;// reboot flag
	a5_r6=lpar_size;// reboot flag
	a5_r31=g_sc_A0;// using r31 spot in chain to set jump
}

function syscallReadWriteFile(src,dest,size)
{
	a1_r3=src;// path
	a1_r4=open_flag_read;// flags
	a1_r5=usb_fp_addr;// source fd
	//a1_r6=open_size_default;// size
	a1_r6=size;// size
	a1_r7=open_mode;// mode
	a1_r8=0x0;// mode
	a1_r11=sc_sys_fs_open;
	a1_jumpto=g_set_r4_thru_r11;
	a2_jumpto=g_set_r3_from_r29;
	a3_jumpto=g_sc_A0;
	a4_r3=dest;// path
	a4_r4=open_flag_create;// flags [create new empty file]
	a4_r5=hdd_fp_addr;// destination fd
	a4_r6=0x0;// size
	a4_r7=0x0;// mode
	a4_r8=0x0;// mode
	a4_r11=sc_sys_fs_open;
	a4_jumpto=g_set_r4_thru_r11;
	a5_jumpto=g_set_r3_from_r29;
	a6_jumpto=g_sc_A0;
	a7_r3=usb_fp_addr;// read fd
	a7_r4=read_buf;// pointer
	//a7_r5=read_nbytes;// # of bytes to read
	a7_r5=size;// # of bytes to read
	a7_r6=read_nread;// pointer
	a7_r9=usb_fp_addr;// sets fd for read
	a7_r11=sc_sys_fs_read;
	a7_jumpto=g_set_r4_thru_r11;
	a8_jumpto=g_set_r3_from_r29;
	a9_jumpto=g_sc_set_r3_from_r9;// put fd into r3
	a10_r3=hdd_fp_addr;// write fd
	a10_r8=write_buf;// register is r4 pointer
	a10_r10=size;// register is r5 # of bytes to read
	extra2=write_nwrite;// register is r6 pointer
	a10_r6=hdd_fp_addr;// register is r9 sets fd for write
	extra5=g_set_r4_thru_r11;
	extra1=g_set_r3_from_r29;
	extra3=g_sc_set_r3_from_r9;
	extra4=sc_sys_fs_write;// register is r11
	a13_r30=g_set_r31_F8;// must change r31 to not get base_fp overwritten
	a15_r10=usb_fp_addr;// put fd into r3 to close source
	a15_r11=sc_sys_fs_close;
	a16_jumpto=g_set_r4_thru_r11;// setup params now for closing file descriptors
	a15_jumpto=g_sc_set_r3_from_r10;// using gadget 15 spot in chain
	a17_jumpto=g_set_r4_thru_r11;
	a18_jumpto=g_sc_A0
	a19_jumpto=g_set_r31_108;
	a20_r10=sc_sys_fs_close;// register is r11
	a21_r10=hdd_fp_addr;// put fd into r3 to close destination
	a20_jumpto=g_set_r4_thru_r11;
	a22_jumpto=g_sc_set_r3_from_r10;
	
	// both fd closed at this point successfully. need to exit chain now
	
	a21_jumpto=g_set_r4_thru_r11;
	a23_jumpto=g_set_r4_thru_r11;
	a24_r11=restore_stack;
	a24_jumpto=g_exit_chain;
	a25_r11=restore_stack;
}

function syscallReadWriteFileAuto(src,dest)
{
	a1_r3=src;
	a1_r4=sys_fs_stat_sb;
	a1_r11=sc_sys_fs_stat;
	a1_jumpto=g_set_r4_thru_r11;
	a2_jumpto=g_set_r3_from_r29;
	a3_jumpto=g_sc_A0;
	
	file_size_input_addr=sys_fs_stat_sb+0x24;// Size addr will be sys_fs_stat_sb+0x28
	
	a4_9=usb_fp_addr;
	a4_r31=file_size_input_addr;
	a4_jumpto=g_set_r4_thru_r11;
	a5_jumpto=g_set_r6_from_r31;// move size into r6
	a6_jumpto=g_set_r3_from_r29;
	a7_jumpto=g_sc_A0;
	// a8_jumpto=g_set_r3_from_r29;
	// a9_jumpto=g_sc_A0;
	// a10_r3=sc_buzzer_arg1;
	// a10_r4=sc_buzzer_arg2;
	// a10_r5=sc_buzzer_arg3;
	// a10_r11=sc_sys_sm_ring_buzzer;
	// a10_jumpto=g_set_r4_thru_r11;
	// a11_jumpto=g_set_r3_from_r29;
	// a12_jumpto=g_sc_A0;
	// a13_r3=sc_buzzer_arg1;
	// a13_r4=sc_buzzer_arg2;
	// a13_r5=sc_buzzer_arg3;
	// a13_r11=sc_sys_sm_ring_buzzer;
	// a13_jumpto=g_set_r4_thru_r11;
	// a14_jumpto=g_set_r3_from_r29;
	// a15_jumpto=g_sc_A0;
	// a16_r3=sc_buzzer_arg1;
	// a16_r4=sc_buzzer_arg2;
	// a16_r5=sc_buzzer_arg3;
	// a16_r11=sc_sys_sm_ring_buzzer;
	// a16_jumpto=g_set_r4_thru_r11;
	// a17_jumpto=g_set_r3_from_r29;
	// a18_jumpto=g_sc_A0;
	// a19_r3=sc_buzzer_arg1;
	// a19_r4=sc_buzzer_arg2;
	// a19_r5=sc_buzzer_arg3;
	// a19_r11=sc_sys_sm_ring_buzzer;
	// a19_jumpto=g_set_r4_thru_r11;
	// a20_jumpto=g_set_r3_from_r29;
	// a21_jumpto=g_sc_A0;
	// a22_r3=sc_buzzer_arg1;
	// a22_r4=sc_buzzer_arg2;
	// a22_r5=sc_buzzer_arg3;
	// a22_r11=sc_sys_sm_ring_buzzer;
	// a22_jumpto=g_set_r4_thru_r11;
	// a23_jumpto=g_set_r3_from_r29;
	// a24_jumpto=g_sc_A0;
	// a25_r3=sc_buzzer_arg1;
	// a25_r4=sc_buzzer_arg2;
	// a25_r5=sc_buzzer_arg3;
	// a25_r11=sc_sys_sm_ring_buzzer;
	// a25_jumpto=g_set_r4_thru_r11;
	// a26_jumpto=g_set_r3_from_r29;
	// a27_jumpto=g_sc_A0;
	// a28_r3=sc_buzzer_arg1;
	// a28_r4=sc_buzzer_arg2;
	// a28_r5=sc_buzzer_arg3;
	// a28_r11=sc_sys_sm_ring_buzzer;
	// a28_jumpto=g_set_r4_thru_r11;
	// a29_jumpto=g_set_r3_from_r29;
	// a30_jumpto=g_sc_A0;
	// a31_r11=restore_stack;
	// a31_jumpto=g_set_r4_thru_r11;
	// a32_jumpto=g_exit_chain;
	//a33_jumpto=g_exit_chain;
}

function syscallReadWriteDirectory(src,dest)
{
	// Open Source Directory
	a1_r3=src;
	a1_r4=sc_opendir_fd;
	a1_r11=sys_fs_opendir;
	a1_r29=src;
	a1_jumpto=g_set_r4_thru_r11;
	a2_jumpto=g_set_r3_from_r29;
	a3_jumpto=g_sc_A0;
	
	// Create Target Directory
	a4_r3=dest;
	a4_r4=sc_fs_mode;
	a4_r11=sc_sys_fs_mkdir;
	a4_r29=dest;
	a4_jumpto=g_set_r4_thru_r11;
	a5_jumpto=g_set_r3_from_r29;
	a6_jumpto=g_sc_A0;
	
	// Read Source Directory From File Descriptor
	a7_r3=sc_opendir_fd;
	a7_r4=sc_readdir_path;
	a7_r5=sc_readdir_nread;
	a7_r9=sc_opendir_fd;
	a7_r11=sys_fs_readdir;
	a7_r29=sc_opendir_fd;
	a7_jumpto=g_set_r4_thru_r11;
	a8_jumpto=g_set_r3_from_r29;
	a9_jumpto=g_sc_set_r3_from_r9;
	
	a10_r3=sc_opendir_fd;
	a10_r8=write_buf;// register is r4
	a10_r10=0;// register is r5
	extra2=write_nwrite;// register is r6
	a10_r6=sc_opendir_fd;// register is r9
	extra5=g_set_r4_thru_r11;
	extra1=g_set_r3_from_r29;
	extra3=g_sc_set_r3_from_r9;
	
	extra4=sc_sys_fs_write;// register is r11
	a13_r30=g_set_r31_F8;// must change r31 to not get base_fp overwritten
	a15_r10=usb_fp_addr;
	a15_r11=sc_sys_fs_close;
	a16_jumpto=g_set_r4_thru_r11;
	a15_jumpto=g_sc_set_r3_from_r10;// using gadget 15 spot in chain
	a17_jumpto=g_set_r4_thru_r11;
	a18_jumpto=g_sc_A0
	a19_jumpto=g_set_r31_108;
	a20_r10=sc_sys_fs_close;// register is r11
	a21_r10=hdd_fp_addr;
	a20_jumpto=g_set_r4_thru_r11;
	a22_jumpto=g_sc_set_r3_from_r10;
	
	a21_jumpto=g_set_r4_thru_r11;
	a23_jumpto=g_set_r4_thru_r11;
	a24_r11=restore_stack;
	a24_jumpto=g_exit_chain;
	a25_r11=restore_stack;
}

function exportStdcOpenReadCloseDir(src)
{
	a1_r3=src;
	a1_r4=4;
	a1_r5=5;
	a1_r6=6;
	a1_r7=7;
	a1_r8=8;
	a1_r9=9;
	a1_r10=10;
	a1_r11=11;
	a1_r29=29;
	a1_r30=30;
	a1_r31=31;
	a1_jumpto=g_set_r4_thru_r11;
	a2_jumpto=g_set_r3_from_r29;
	a3_jumpto=e_stdc_opendir;
	a4_r3=3;
	a4_r4=4;
	a4_r5=5;
	a4_r6=6;
	a4_r7=7;
	a4_r8=8;
	a4_r9=9;
	a4_r10=10;
	a4_r29=29;
	a4_r30=30;
	a4_r31=31;
	a4_jumpto=g_set_r4_thru_r11;
	a5_jumpto=g_set_r3_from_r29;
	a6_r29=0x00000420;
	a6_jumpto=g_sc_A0;
	extra1=0x00000420;
	a7_jumpto=restore_stack;
	extra2=g_exit_chain;
}

function syscallRebootOnly(mode,lpar_param,lpar_size)
{
	a1_r3=mode;
	a1_r4=lpar_param;
	a1_r5=lpar_size;
	a1_r11=sc_shutdown;
	a1_jumpto=g_set_r4_thru_r11;
	a2_jumpto=g_set_r3_from_r29;
	a3_jumpto=g_sc_A0;
}

function callExportAndExit(r3,r4,r5,r6,r7,r8,r9,r10,r11,r30,r31,export_addr)
{
	a1_r3=r3;
	a1_r4=r4;
	a1_r5=r5;
	a1_r6=r6;
	a1_r7=r7;
	a1_r8=r8;
	a1_r9=r9;
	a1_r10=r10;
	a1_r11=r11;
	a1_r29=r29;
	a1_r30=r30;
	a1_r31=r31;
	a1_jumpto=g_set_r4_thru_r11;
	a2_jumpto=g_set_r3_from_r29;
	a3_jumpto=export_addr;
	a4_r11=restore_stack;
	a4_jumpto=g_set_r4_thru_r11;
	a5_jumpto=g_exit_chain;
}

function openReadDeviceAndExit(device_id,src,dest)
{
	a1_r4=sc_sso_mode;
	a1_r5=fd_addr;
	a1_r6=sc_sso_flags;
	a1_r9=magic_addr;// pointer to load next gadget into r0
	a1_r11=sc_sys_storage_open;
	a1_jumpto=g_set_r4_thru_r11;
	extra2=device_flag;
	extra3=device_id;
	a2_jumpto=g_set_r3_with_ld;
	a3_jumpto=g_set_r4_thru_r11;
	a3_r30=g_set_r3_from_r29;
	a4_r3=fd_addr;
	a4_r4=sc_ssr_mode;
	a4_r5=st_sec;
	a4_r6=step_sector;
	a4_r7=temp_addr_8C;
	a4_r8=fd2_addr;
	a4_r9=sc_ssr_flags;
	a4_r11=sc_sys_storage_read;
	a5_jumpto=g_set_r3_from_r29;
	a6_r3=fd_addr;
	a6_r11=sc_sys_storage_close;
	a6_jumpto=g_set_r4_thru_r11;
	a7_jumpto=g_set_r3_from_r29;
	a8_r31=sc_shutdown_soft;
	a8_jumpto=e_fopen_write_close;
	a8_r6=sc_shutdown;
	a8_r29=0x10;
	a8_r30=temp_addr_8C;
	a8_jumpto=g_set_r4_thru_r11;
	a9_r5=0x00000000;
	a9_r6=0x00000000;
	a10_r31=g_sc_A0;
}

function useCustomStackFrame()
{
	switch(chain_stackframe)
	{
		case "stackframe_test":
		stackFrameTest();
		break;
		
		// uses restore_stack1
		case "beep_test":
		syscallAndExit(sc_buzzer_arg1,sc_buzzer_arg2,sc_buzzer_no_of_beeps,0,0,0,0,0,sc_sys_sm_ring_buzzer,temp_addr_8A,temp_addr_8B);
		break;
		
		// uses restore_stack1
		case "power_test":
		syscallRebootOnly(reboot_mode,0x00000000,0x00000000);
		break;
		
		case "db_rebuild":
		syscallFwriteAndReboot(path_dest_fp_addr,0x4,write_bytes_addr,reboot_mode,0,0);
		break;
		
		// does not use embedded restore_stack
		case "mem_dump_test":
		syscallFwriteAndExit(sc_buzzer_arg1,sc_buzzer_arg2,sc_buzzer_arg3,0,0,0,0,0,sc_sys_sm_ring_buzzer,temp_addr_8A,temp_addr_8B,path_dest_fp_addr,memdump_size,memdump_addr);
		break;
		
		// does not use embedded restore_stack
		case "minver_check":
		syscallAndExit(0x00006011,0x00000001,temp_addr_8C,0,0,0,0,0,update_manager_if,temp_addr_8A,temp_addr_8B);
		break;
		
		case "get_filesize":
		syscallAndExit(path_src_fp_addr,filesize_addr,0,0,0,0,0,0,sc_sys_fs_stat,temp_addr_8A,temp_addr_8B);
		break;
		
		// uses restore_stack1
		// thread stopped at 000D7430 48299C99 bl         0x003710C8 
		// 000D6544 4829AD45 bl         0x00371288
		// 000D6644 48008C7D bl         0x000DF2C0
		// 000D6728 480092FD bl         0x000DFA24
		// 000D6A20 48558651 bl         0x0062F070
		// 000D6F90 485321F5 bl         0x00609184
		// memcontainer?? 000D6604 4BFF0591 bl         0x000C6B94 
		// 000D6644 48008C7D bl         0x000DF2C0
		// dev game_debug 000D671C 4855A27D bl         0x00630998 
		// bdp_plugin 000D72C0 482826C9 bl         0x00359988
		// 000D6644 48008C7D bl         0x000DF2C0
		case "game_debug_pafjob_test":
		callExportAndExit(sc_buzzer_arg1,sc_buzzer_arg2,sc_buzzer_no_of_beeps,0,0,0,0,0,sc_sys_sm_ring_buzzer,temp_addr_8A,temp_addr_8B,s_unk_game_debug_pafjob)
		break;
		
		// does not use embedded restore_stack
		case "get_open_psid":
		syscallFwriteAndExit(temp_addr_8D,0,0,0,0,0,0,0,sc_sys_ss_get_open_psid,temp_addr_8A,temp_addr_8B,path_dest_fp_addr,0x10,temp_addr_8D);
		break;
		
		case "console_write_test":
		syscallAndExit(path_src_fp_addr,console_write_len,0,0,0,0,0,0,sc_sys_console_write,temp_addr_8A,temp_addr_8B);
		break;
		
		case "sys_tty_read":
		syscallAndExit(path_src_fp_addr,temp_addr_8C,tty_read_size,tty_read_size,0,0,0,0,sc_sys_tty_read,temp_addr_8A,temp_addr_8B);
		break;
		
		case "sys_tty_write":
		syscallAndExit(path_src_fp_addr,temp_addr_8C,path_src_fp_addr.length,path_src_fp_addr.length,0,0,0,0,sc_sys_tty_write,temp_addr_8A,temp_addr_8B);
		break;
		
		// does not use embedded restore_stack
		case "dump_idps_from_mem":
		syscallFwriteAndExit(sc_buzzer_arg1,sc_buzzer_arg2,sc_buzzer_arg3,0,0,0,0,0,sc_sys_sm_ring_buzzer,temp_addr_8A,temp_addr_8B,path_dest_fp_addr,0x10,addr_idps);
		break;
		
		case "sys_sm_get_platform_info":
		syscallFwriteAndExit(sys_sm_get_platform_info_ptr,0,0,0,0,0,0,0,sc_sys_sm_get_platform_info,temp_addr_8A,temp_addr_8B,path_dest_fp_addr,sys_sm_get_platform_info_size,sys_sm_get_platform_info_ptr);
		break;
		
		case "webkit_search_area":
		syscallFwriteAndExit(sc_buzzer_arg1,sc_buzzer_arg2,sc_buzzer_arg3,0,0,0,0,0,sc_sys_sm_ring_buzzer,temp_addr_8A,temp_addr_8B,path_dest_fp_addr,0x5FFFFF,0x80100000);
		break;
		
		/*
		case "dump_idps_from_flash":
		openReadDeviceAndExit(0x4,path_src_fp_addr,path_dest_fp_addr);
		break;
		*/
		
		case "file_read_write_test":
		if(useAutoSize)
		{
			syscallReadWriteFileAuto(path_src_fp_addr,path_dest_fp_addr);
			//callExportAndExit(path_src_fp_addr,path_dest_fp_addr,temp_addr_8A+0x100,0,0,0,0,0,0,temp_addr_8A,temp_addr_8B,s_cellfs_rw);
		}
		else
		{
			syscallReadWriteFile(path_src_fp_addr,path_dest_fp_addr,file_size);
		}
		break;
		
		case "dir_read_write_test":
		syscallReadWriteDirectory(path_src_fp_addr,path_dest_fp_addr);
		break;
		
		case "sys_net_dump":
		a1_r3=sys_net_open_dump_len;
		a1_r4=sys_net_open_dump_flags;
		a1_r11=sc_sys_net_open_dump;
		a1_jumpto=g_set_r4_thru_r11;
		a2_jumpto=g_set_r3_from_r29;
		a3_jumpto=g_sc_A0;
		a4_r3=sys_net_read_dump_id;
		a4_r4=sys_net_read_dump_buf_ptr;
		a4_r5=sys_net_read_dump_id_len;
		a4_r6=sys_net_read_dump_id_pflags_ptr;
		a4_r11=sc_sys_net_read_dump;
		a4_jumpto=g_set_r4_thru_r11;
		a5_jumpto=g_set_r3_from_r29;
		a6_jumpto=g_sc_A0;
		a7_r3=sys_net_write_dump_buf_ptr;
		a7_r11=sc_sys_net_write_dump;
		a7_jumpto=g_set_r4_thru_r11;
		a8_jumpto=g_set_r3_from_r29;
		a9_jumpto=g_sc_set_r3_from_r9;
		a10_r3=sys_net_close_dump_id;
		a10_r8=sys_net_close_dump_pflags_ptr;// register is r4
		a10_r6=sys_net_close_dump_id;// register is r9
		extra5=g_set_r4_thru_r11;
		extra1=g_set_r3_from_r29;
		extra3=g_sc_set_r3_from_r9;
		extra4=sc_sys_net_close_dump;// register is r11
		a13_r30=g_set_r31_F8;
		a16_jumpto=e_fopen_write_close;
		a15_jumpto=g_sc_set_r3_from_r10;
		a17_jumpto=g_set_r4_thru_r11;
		a18_jumpto=g_sc_A0
		a19_jumpto=g_set_r31_108;
		a20_r10=sc_sys_fs_close;
		a21_r10=hdd_fp_addr;
		a20_jumpto=g_set_r4_thru_r11;
		a22_jumpto=g_sc_set_r3_from_r10;
		a21_jumpto=g_set_r4_thru_r11;
		a23_jumpto=g_set_r4_thru_r11;
		a24_r11=restore_stack;
		a24_jumpto=g_exit_chain;
		a25_r11=restore_stack;
		break;
		
		// uses restore_stack1
		case "sys_fs_chmod":
		syscallAndExit(path_dest_fp_addr,sc_chmod_arg,0,0,0,0,0,0,sc_sys_fs_chmod,temp_addr_8A,temp_addr_8B);
		break;
		
		// uses restore_stack1
		case "sys_fs_chown":
		syscallAndExit(path_dest_fp_addr,sc_chown_arg,sc_chown_arg,0,0,0,0,0,sc_sys_fs_chown,temp_addr_8A,temp_addr_8B);
		break;
		
		case "sys_fs_get_fs_info":
		syscallFwriteAndExit(fs_get_fs_info_arg1,fs_get_fs_info_arg2,fs_get_fs_info_buffer,0,0,0,0,0,sc_sys_fs_get_fs_info,temp_addr_8A,temp_addr_8B,path_dest_fp_addr,fs_get_fs_info_dump_size,temp_addr_8C);
		break;
		
		case "sys_fs_get_mount_info":
		syscallFwriteAndExit(fs_get_mount_info_arg1,fs_get_mount_info_arg2,fs_get_mount_info_arg3,0,0,0,0,0,sc_sys_fs_get_mount_info,temp_addr_8A,temp_addr_8B,path_dest_fp_addr,fs_get_fs_info_dump_size,temp_addr_8C);
		break;
		
		// uses restore_stack1
		case "sys_fs_mapped_allocate":
		syscallAndExit(fs_mapped_allocate_arg1,fs_mapped_allocate_arg2,fs_mapped_allocate_arg3,0,0,0,0,0,sc_sys_fs_mapped_allocate,temp_addr_8A,temp_addr_8B);
		break;
		
		// uses restore_stack1
		case "sys_fs_mapped_free":
		syscallAndExit(fs_mapped_free_arg1,fs_mapped_free_arg2,0,0,0,0,0,0,sc_sys_fs_mapped_free,temp_addr_8A,temp_addr_8B);
		break;
		
		// uses restore_stack1
		case "sys_fs_mkdir":
		syscallAndExit(path_dest_fp_addr,sc_fs_mode,0,0,0,0,0,0,sc_sys_fs_mkdir,temp_addr_8A,temp_addr_8B);
		break;
		
		// uses restore_stack1
		case "sys_fs_newfs":
		syscallAndExit(fs_newfs_device_name,fs_newfs_arg2,fs_newfs_arg3,0,0,0,0,0,sc_sys_fs_newfs,temp_addr_8A,temp_addr_8B);
		break;
		
		// uses restore_stack1
		case "sys_fs_rename":
		syscallAndExit(path_src_fp_addr,path_dest_fp_addr,0,0,0,0,0,0,sc_sys_fs_rename,temp_addr_8A,temp_addr_8B);
		break;
		
		// uses restore_stack1
		case "sys_fs_rmdir":
		syscallAndExit(path_dest_fp_addr,0,0,0,0,0,0,0,sc_sys_fs_rmdir,temp_addr_8A,temp_addr_8B);
		break;
		
		case "sys_fs_stat":
		syscallFwriteAndExit(path_src_fp_addr,temp_addr_8C,0,0,0,0,0,0,sc_sys_fs_stat,temp_addr_8A,temp_addr_8B,path_dest_fp_addr,0x34,temp_addr_8C);
		break;
		
		// uses restore_stack1
		// EXDEV         -2147418064	/* 0x80010030 */
		case "sys_fs_link":
		syscallAndExit(path_src_fp_addr,path_dest_fp_addr,0,0,0,0,0,0,sc_sys_fs_link,temp_addr_8A,temp_addr_8B);
		break;
		
		// uses restore_stack1
		case "sys_fs_symbolic_link":
		syscallAndExit(path_src_fp_addr,path_dest_fp_addr,0,0,0,0,0,0,sc_sys_fs_symbolic_link,temp_addr_8A,temp_addr_8B);
		break;
		
		// uses restore_stack1
		case "sys_fs_unlink":
		syscallAndExit(path_dest_fp_addr,0,0,0,0,0,0,0,sc_sys_fs_unlink,temp_addr_8A,temp_addr_8B);
		break;
		
		case "sys_fs_mount":
		if(usb_mount)
		{
			syscallAndExit(path_fp_addr,path_fp2_addr,path_src_fp_addr,fs_mount_arg4,fs_mount_write_protection,fs_mount_arg6,fs_mount_arg7_usbptr,fs_mount_arg8,sc_sys_fs_mount,temp_addr_8A,temp_addr_8B);
		}
		else
		{
			syscallAndExit(path_fp_addr,path_fp2_addr,path_src_fp_addr,fs_mount_arg4,fs_mount_write_protection,fs_mount_arg6,fs_mount_arg7,fs_mount_arg8,sc_sys_fs_mount,temp_addr_8A,temp_addr_8B);
		}
		
		break;
		
		// uses restore_stack1
		case "sys_fs_unmount":
		syscallAndExit(path_fp_addr,fs_unmount_arg2,fs_unmount_arg3,0,0,0,0,0,sc_sys_fs_unmount,temp_addr_8A,temp_addr_8B);
		break;
		
		// uses restore_stack1
		case "mount_usb_as_bdvd_no_disc":
		usb_mount=true;
		syscallTwoAndExit(path_dest_fp_addr,fs_unmount_arg2,fs_unmount_arg3,0,0,0,0,0,sc_sys_fs_unmount,temp_addr_8A,temp_addr_8B,path_fp_addr,path_fp2_addr,path_src_fp_addr,fs_mount_arg4,fs_mount_write_protection,fs_mount_arg6,fs_mount_arg7_usbptr,fs_mount_arg8,sc_sys_fs_mount,temp_addr_8A,temp_addr_8B);
		break;
		
		// uses restore_stack1
		case "mount_usb_as_bdvd":
		usb_mount=true;
		syscallThreeAndExit(path_src_fp_addr,fs_unmount_arg2,fs_unmount_arg3,0,0,0,0,0,sc_sys_fs_unmount,temp_addr_8A,temp_addr_8B,path_dest_fp_addr,fs_unmount_arg2,fs_unmount_arg3,0,0,0,0,0,sc_sys_fs_unmount,temp_addr_8A,temp_addr_8B,path_fp_addr,path_fp2_addr,path_src_fp_addr,fs_mount_arg4,fs_mount_write_protection,fs_mount_arg6,fs_mount_arg7_usbptr,fs_mount_arg8,sc_sys_fs_mount,temp_addr_8A,temp_addr_8B);
		break;
		
		// uses restore_stack1
		case "mount_other_as_bdvd":
		if(usb_mount)
		{
			syscallThreeAndExit(path_src_fp_addr,fs_unmount_arg2,fs_unmount_arg3,0,0,0,0,0,sc_sys_fs_unmount,temp_addr_8A,temp_addr_8B,path_dest_fp_addr,fs_unmount_arg2,fs_unmount_arg3,0,0,0,0,0,sc_sys_fs_unmount,temp_addr_8A,temp_addr_8B,path_fp_addr,path_fp2_addr,path_src_fp_addr,fs_mount_arg4,fs_mount_write_protection,fs_mount_arg6,fs_mount_arg7_usbptr,fs_mount_arg8,sc_sys_fs_mount,temp_addr_8A,temp_addr_8B);
		}
		else
		{
			syscallThreeAndExit(path_src_fp_addr,fs_unmount_arg2,fs_unmount_arg3,0,0,0,0,0,sc_sys_fs_unmount,temp_addr_8A,temp_addr_8B,path_dest_fp_addr,fs_unmount_arg2,fs_unmount_arg3,0,0,0,0,0,sc_sys_fs_unmount,temp_addr_8A,temp_addr_8B,path_fp_addr,path_fp2_addr,path_src_fp_addr,fs_mount_arg4,fs_mount_write_protection,fs_mount_arg6,fs_mount_arg7,fs_mount_arg8,sc_sys_fs_mount,temp_addr_8A,temp_addr_8B);
		}
		break;
		
		// uses restore_stack1
		case "mount_bdvd_as_ps3_disc":
		// Disc Allocation 0xD008100F
		/*
		Sub 0x6396C4 r3=ptr (-PLAYSTATION3)  r4=ptr (CELL_FS_ISO9660)  r5=ptr (/dev_bdvd)  r6=0 r7=1 r8=0 r9=ptr back to r3 address  r10=ptr back to r4 (CELL_FS_ISO9660)
		*/
		// Dex Params (r3-r10): 0x6A63B8,0x6A37C0,0x6A3478,0,1,0,0xD00D5B30,0x6A37C0
		//callExportAndExit(path_fp_addr,path_fp2_addr,path_src_fp_addr,0,1,0,0,path_fp2_addr,0,temp_addr_8A,temp_addr_8B,s_disc_load_check_type3);
		callExportAndExit(0x6A63B8,0x6A37C0,0x6A3478,0,1,0,0xD00D5B30,0x6A37C0,0,temp_addr_8A,temp_addr_8B,s_disc_load_check_type3);
		break;
		
		// does not use restore_stack1 restore_stack
		case "sys_storage_get_device_info":
		syscallAndExit(storage_get_device_info_device,storage_get_device_info_buffer_ptr,storage_get_device_info_arg3,storage_get_device_info_arg4,0,0,0,0,sc_sys_storage_get_device_info,temp_addr_8A,temp_addr_8B);
		break;
		
		// does not use embedded restore_stack
		case "sys_storage_report_devices":
		syscallFwriteAndExit(storage_report_devices_arg1_ptr,storage_report_devices_arg2,storage_report_devices_arg3_ptr,storage_report_devices_arg4,0,0,0,0,sc_sys_storage_report_devices,temp_addr_8A,temp_addr_8B,path_dest_fp_addr,0x40,temp_addr_8C);
		break;
		
		// uses restore_stack1
		case "sys_process_exit":
		getProcessIDFromHTML();
		syscallAndExit(process_exit_pid,0,0,0,0,0,0,0,sys_ppu_thread_exit,temp_addr_8A,temp_addr_8B);
		break;
		
		// uses restore_stack1
		case "sys_process_kill":
		getProcessIDFromHTML();
		syscallAndExit(process_kill_pid,0,0,0,0,0,0,0,sc_sys_process_kill,temp_addr_8A,temp_addr_8B);
		break;
		
		// uses restore_stack1
		case "sys_ppu_thread_create":
		getThreadIDFromHTML();
		syscallAndExit(thread_create_id,thread_create_bin,thread_create_bin_arg,thread_create_prio,thread_create_stk_size,thread_create_flags,thread_create_name,0,sys_ppu_thread_create,temp_addr_8A,temp_addr_8B);
		break;
		
		// uses restore_stack1
		case "sys_ppu_thread_exit":
		getThreadIDFromHTML();
		syscallAndExit(thread_exit_arg1,0,0,0,0,0,0,0,sys_ppu_thread_exit,temp_addr_8A,temp_addr_8B);
		break;
		
		// uses restore_stack1
		case "sys_ppu_thread_restart":
		getThreadIDFromHTML();
		syscallAndExit(thread_restart_arg1,0,0,0,0,0,0,0,sys_ppu_thread_restart,temp_addr_8A,temp_addr_8B);
		break;
		
		// uses restore_stack1
		case "sys_ppu_thread_start":
		getThreadIDFromHTML();
		syscallAndExit(thread_start_arg1,0,0,0,0,0,0,0,sys_ppu_thread_start,temp_addr_8A,temp_addr_8B);
		break;
		
		// uses restore_stack1
		case "sys_ppu_thread_stop":
		getThreadIDFromHTML();
		syscallAndExit(thread_stop_arg1,0,0,0,0,0,0,0,sys_ppu_thread_stop,temp_addr_8A,temp_addr_8B);
		break;
		
		case "ppu_thread_get_stack_info":
		syscallFwriteAndExit(temp_addr_8C,0,0,0,0,0,0,0,sc_ppu_thread_get_stack_info,temp_addr_8A,temp_addr_8B,path_dest_fp_addr,0x8,temp_addr_8C);
		break;
		
		case "ppu_thread_get_priority":
		syscallFwriteAndExit(temp_addr_8C,0,0,0,0,0,0,0,sys_sys_ppu_thread_get_priority,temp_addr_8A,temp_addr_8B,path_dest_fp_addr,0x10,temp_addr_8C);
		break;
		
		case "sys_sm_request_led":
		syscallFwriteAndExit(request_led_id,request_led_action,0,0,0,0,0,0,sc_sys_sm_request_led,temp_addr_8A,temp_addr_8B,path_dest_fp_addr,0x20,temp_addr_8D);
		break;
		
		// uses restore_stack1
		case "sys_sm_control_led":
		syscallAndExit(control_led_id,control_led_action,0,0,0,0,0,0,sc_sys_sm_control_led,temp_addr_8A,temp_addr_8B);
		break;
		
		// uses restore_stack2
		case "sys_game_get_temperature":
		syscallTwoAndExit(get_temperature_cell,get_temperature_temp_cell_ptr,0,0,0,0,0,0,sc_sys_game_get_temperature,temp_addr_8A,temp_addr_8B,get_temperature_rsx,get_temperature_temp_rsx_ptr,0,0,0,0,0,0,sc_sys_game_get_temperature,temp_addr_8A,temp_addr_8B);
		break;
		
		case "sys_sm_get_fan_policy":
		// a1_r3=sys_sm_request_led_id;
		// a1_r4=sys_sm_request_led_action;
		// a1_r11=sc_sys_sm_get_fan_policy;
		// a1_jumpto=g_set_r4_thru_r11;
		// a2_jumpto=g_set_r3_from_r29;
		// a3_jumpto=g_sc_A0;
		// a4_r3=path_dest_fp_addr;
		// a4_r4=file_mode_fp_addr;
		// a4_r5=0x20;
		// a4_r30=request_led_return;
		// a4_jumpto=g_set_r4_thru_r11;
		// a5_jumpto=g_set_r3_from_r29;
		// a6_r29=0x20;
		// a6_jumpto=e_fopen_write_close;
		// extra1=0x20;
		// a7_jumpto=restore_stack;
		// extra2=g_exit_chain;
		break;
		
		/*
		value 	mode 	notes
		0 		0x5f 	sm_shutdown / manual mode 	
		1 		0x4d 	< temp_control0 	
		2 		0x54 	temp_control0 => temp_control1 	
		3 		0x60 	temp_control0 <= temp_control1 	
		4 		0x68 	>= temp_control1 	
		5 		0x70 	>= temp_control2 	
		6 		0x78 	>= temp_control3 	
		7 		0xA0 	>= temp_control4 
		*/
		/*
		case "sys_sm_set_fan_policy":
		a1_r3=0x0;
		a1_r4=0x2;
		a1_r5=set_fan_speed;
		a1_r11=sc_sys_sm_set_fan_policy;
		a1_jumpto=g_set_r4_thru_r11;
		a2_jumpto=g_set_r3_from_r29;
		a3_jumpto=g_sc_A0;
		a4_r11=restore_stack;
		a4_jumpto=g_set_r4_thru_r11;
		a5_jumpto=g_exit_chain;
		break;
		*/
		
		case "sys_ss_utoken_if":
		syscallFwriteAndExit(sys_ss_utoken_if_packetid,sys_ss_utoken_if_tokenptr,sys_ss_utoken_if_size,0,0,0,0,0,sc_sys_ss_utoken_if,temp_addr_8A,temp_addr_8B,path_dest_fp_addr,sys_ss_utoken_if_size,temp_addr_8D);
		break;
		
		case "dump_lv2_syscall_table":
		syscallFwriteAndExit(sys_ss_utoken_if_packetid,sys_ss_utoken_if_tokenptr,sys_ss_utoken_if_size_lv2,0,0,0,0,0,sc_sys_ss_utoken_if,temp_addr_8A,temp_addr_8B,path_dest_fp_addr,sys_ss_utoken_if_size_lv2,temp_addr_8D);
		break;
		
		// uses restore_stack1
		case "sys_rsx_memory_free":
		syscallAndExit(sys_rsx_memory_free_mem_ctx_id,0,0,0,0,0,0,0,sys_rsx_memory_free,temp_addr_8A,temp_addr_8B);
		break;
		
		// uses restore_stack1
		case "sys_net_open_dump":
		syscallAndExit(sys_net_open_dump_len,sys_net_open_dump_flags,0,0,0,0,0,0,sc_sys_net_open_dump,temp_addr_8A,temp_addr_8B);
		break;
		
		// uses restore_stack1
		case "sys_net_read_dump":
		syscallAndExit(sys_net_read_dump_id,sys_net_read_dump_buf_ptr,sys_net_read_dump_id_len,sys_net_read_dump_id_pflags_ptr,0,0,0,0,sc_sys_net_read_dump,temp_addr_8A,temp_addr_8B);
		break;
		
		// uses restore_stack1
		case "sys_net_write_dump":
		syscallAndExit(sys_net_write_dump_buf_ptr,0,0,0,0,0,0,0,sc_sys_net_write_dump,temp_addr_8A,temp_addr_8B);
		break;
		
		// uses restore_stack1
		case "sys_net_close_dump":
		syscallAndExit(sys_net_close_dump_id,sys_net_close_dump_pflags_ptr,0,0,0,0,0,0,sc_sys_net_close_dump,temp_addr_8A,temp_addr_8B);
		break;
		
		case "xmb_plugin_test":
		callExportAndExit(0,0,0,0,0,0,0,0,0,temp_addr_8A,temp_addr_8B,e_unk_xmb_plugin);
		break;
		
		case "busy_icon_test":
		callExportAndExit(0,0,0,0,0,0,0,0,0,temp_addr_8A,temp_addr_8B,s_start_busy_icon);
		break;
		
		case "vsh_printf_test":
		callExportAndExit(path_fp_addr,path_fp2_addr,0,0,0,0,0,0,0,temp_addr_8A,temp_addr_8B,g_printf);
		break;
		
		case "create_new_user":
		callExportAndExit(0,0,0,0,0,0,0,0,0,temp_addr_8A,temp_addr_8B,s_create_new_user);
		break;
		
		case "test_only":
		//callExportAndExit(path_fp_addr,path_fp2_addr,0,0,0,0,0,0,0,temp_addr_8A,temp_addr_8B,s_unk_black_screen);
		//callExportAndExit(path_fp_addr,path_fp2_addr,0,0,0,0,0,0,0,temp_addr_8A,temp_addr_8B,s_unk_thread_exit);
		//callExportAndExit(0,0,0,0,0,0,0,0,0,temp_addr_8A,temp_addr_8B,s_unk_sys_trace);
		//callExportAndExit(0,0,0,0,0,0,0,0,0,temp_addr_8A,temp_addr_8B,0x51E6B0);
		callExportAndExit(temp_addr_8A,0x80000000,0x200,0,0,0,0,0,0,temp_addr_8B,temp_addr_8C,e_memset);
		//callExportAndExit(2,0,0,0,0,0,0,0,0,temp_addr_8A,temp_addr_8B,s_disc_load_check_type);
		//callExportAndExit(temp_addr_8A,0,0,0,0,0,0,0,0,temp_addr_8A,temp_addr_8B,s_unk_rsx_device_map);
		
		//syscallAndExit(set_disc_access_control,sys_ss_media_id_arg2_ptr,0,0,0,0,0,0,sc_sys_ss_disc_access_control,temp_addr_8A,temp_addr_8B);
		//syscallAndExit(sys_ss_get_boot_device_ptr,0,0,0,0,0,0,0,sc_sys_ss_get_boot_device,temp_addr_8A,temp_addr_8B);
		//syscallAndExit(sys_ss_get_cache_of_product_mode_ptr,0,0,0,0,0,0,0,sc_sys_ss_get_cache_of_product_mode,temp_addr_8A,temp_addr_8B);
		//syscallAndExit(sys_ss_get_cache_of_flash_ext_flag_ptr,0,0,0,0,0,0,0,sc_sys_ss_get_cache_of_flash_ext_flag,temp_addr_8A,temp_addr_8B);
		//syscallAndExit(sc_unk_986_ptr,0,0,0,0,0,0,0,sc_unk_986,temp_addr_8A,temp_addr_8B);
		break;
		
		default:
		alert(msg_cannot_continue);
		return;
		break;
	}
}

function setChainOptions(chain)
{
	switch(chain)
	{
		case "stackframe_test":
		setValueToHTML("path_src","");
		setValueToHTML("path_dest","");
		alert(msg_stackframe_check);
		init_rop.focus();
		break;
		
		case "beep_test":
		setValueToHTML("path_src","");
		setValueToHTML("path_dest","");
		number_of_beeps_edit.focus();
		break;
		
		case "power_test":
		setValueToHTML("path_src","");
		setValueToHTML("path_dest","");
		disableElement("marked_reboot", false);
		marked_reboot.focus();
		break;
		
		case "db_rebuild":
		setValueToHTML("path_dest",path_db_rebuild);
		disableElement("path_src",true);// do not allow changing path
		disableElement("path_src_type",true);
		disableElement("path_dest",true);// do not allow changing path
		disableElement("path_dest_type",true);
		disableElement("marked_xmb_select",true);
		init_rop.focus();
		break;
		
		case "minver_check":
		setDefaultGuiParams();
		break;
		
		case "get_filesize":
		setValueToHTML("path_src",path_usb_test_bin);
		setValueToHTML("path_dest","");
		init_after_select=true;
		path_src_type.focus();
		break;
		
		case "game_debug_pafjob_test":
		setDefaultGuiParams();
		break;
		
		case "mem_dump_test":
		setValueToHTML("path_src","");
		disableElement("path_src",true);
		disableElement("path_src_type",true);
		disableElement("marked_memdump_addr", false);
		disableElement("marked_memdump_size", false);
		disableElement("marked_memdump_range", false);
		disableElement("marked_memdump_addr_edit", false);
		disableElement("marked_memdump_size_edit", false);
		disableElement("memdump_save_new_values", false);
		setValueToHTML("path_dest",path_usb_memdump8);
		alert(msg_memdump_warning);
		marked_memdump_addr.focus();
		//marked_memdump_range.focus();
		break;
		
		case "file_read_write_test":
		setValueToHTML("path_src",path_usb_test_bin);
		setValueToHTML("path_dest",path_hdd_test_bin);
		if(useAutoSize){alert(msg_option_not_available);init_rop.focus();}else{file_size_edit.focus();}
		break;
		
		case "dir_read_write_test":
		setValueToHTML("path_src",usb_dir_ps3xploit);
		setValueToHTML("path_dest",hdd_dir_ps3xploit);
		alert(msg_option_not_available);
		//init_rop.focus();
		break;
		
		case "sys_net_dump":
		//setValueToHTML("path_src","");
		setValueToHTML("path_dest",path_sys_net_dump);
		init_rop.focus();
		break;
		
		case "get_open_psid":
		setValueToHTML("path_src","");
		disableElement("path_src",true);
		disableElement("path_src_type",true);
		setValueToHTML("path_dest",path_usb_psid_bin);
		init_rop.focus();
		break;
		
		case "sys_fs_get_fs_info":
		setValueToHTML("path_src","");
		disableElement("path_src",true);
		disableElement("path_src_type",true);
		setValueToHTML("path_dest",sys_fs_get_fs_info_dump);
		init_rop.focus();
		
		case "sys_fs_get_mount_info":
		setValueToHTML("path_src","");
		disableElement("path_src",true);
		disableElement("path_src_type",true);
		setValueToHTML("path_dest",sys_fs_get_mount_info_dump);
		init_rop.focus();
		break;
		
		case "sys_fs_mapped_allocate":
		setDefaultGuiParams();
		break;
		
		case "sys_fs_mapped_free":
		setDefaultGuiParams();
		break;
		
		case "console_write_test":
		setValueToHTML("path_src","");
		disableElement("path_src",true);
		disableElement("path_src_type",true);
		setValueToHTML("path_dest",console_write_dump);
		init_rop.focus();
		break;
		
		case "sys_tty_read":
		setValueToHTML("path_src","");
		setValueToHTML("path_dest","");
		alert(msg_cobra_only);
		init_rop.focus();
		break;
		
		case "sys_tty_write":
		setValueToHTML("path_src","");
		setValueToHTML("path_dest","");
		alert(msg_cobra_only);
		init_rop.focus();
		break;
		
		case "dump_idps_from_mem":
		setValueToHTML("path_src","");
		disableElement("path_src",true);
		disableElement("path_src_type",true);
		setValueToHTML("path_dest",path_usb_idps_bin);
		alert(msg_memdump_idps_vsh);
		init_rop.focus();
		break;
		
		case "dump_idps_from_flash":
		setValueToHTML("path_src","");
		disableElement("path_src",true);
		disableElement("path_src_type",true);
		setValueToHTML("path_dest",path_usb_idps_bin);
		init_rop.focus();
		break;
		
		case "sys_fs_chmod":
		setValueToHTML("path_src","");
		disableElement("path_src",true);
		disableElement("path_src_type",true);
		disableElement("marked_chmod",false);// enable dropdown
		setValueToHTML("path_dest",hdd_dir_ps3xploit);
		init_rop.focus();
		break;
		
		case "sys_fs_chown":
		setValueToHTML("path_src","");
		disableElement("path_src",true);
		disableElement("path_src_type",true);
		disableElement("marked_chown",false);// enable dropdown
		setValueToHTML("path_dest",hdd_dir_ps3xploit);
		init_rop.focus();
		break;
		
		case "sys_fs_mkdir":
		setValueToHTML("path_src","");
		disableElement("path_src",true);
		disableElement("path_src_type",true);
		setValueToHTML("path_dest",hdd_dir_ps3xploit);
		init_rop.focus();
		break;
		
		case "sys_fs_mount":
		setValueToHTML("path_src","");
		setValueToHTML("path_dest","");
		//alert(msg_mount_test);
		mounting_device.focus();
		break;
		
		case "sys_fs_unmount":
		setValueToHTML("path_src","");
		setValueToHTML("path_dest","");
		mounting_path.focus();
		break;
		
		case "mount_usb_as_bdvd_no_disc":
		setValueToHTML("path_src","");
		setValueToHTML("path_dest","");
		alert(msg_mount_no_disc);
		init_rop.focus();
		break;
		
		case "mount_usb_as_bdvd":
		setValueToHTML("path_src","");
		setValueToHTML("path_dest","");
		alert(msg_mount_yes_disc);
		init_rop.focus();
		break;
		
		case "mount_other_as_bdvd":
		setValueToHTML("path_src","");
		setValueToHTML("path_dest","");
		alert(msg_mount_test);
		mounting_path.focus();
		break;
		
		case "mount_bdvd_as_ps3_disc":
		setValueToHTML("path_src","");
		setValueToHTML("path_dest","");
		alert(msg_mount_ps3_disc);
		init_rop.focus();
		break;
		
		case "sys_fs_rename":
		setValueToHTML("path_src",hdd_dir_ps3xploit);
		setValueToHTML("path_dest",hdd_dir_ps3xploit_new);
		init_rop.focus();
		break;
		
		case "sys_fs_rmdir":
		setValueToHTML("path_src","");
		disableElement("path_src",true);
		disableElement("path_src_type",true);
		setValueToHTML("path_dest",hdd_dir_ps3xploit);
		alert(msg_remove_dir_warning);
		init_rop.focus();
		break;
		
		case "sys_fs_stat":
		setValueToHTML("path_src",dev_hdd0);
		setValueToHTML("path_dest",fs_stat_dump);
		path_src_type.focus();
		break;
		
		case "sys_fs_link":
		setValueToHTML("path_src",path_hdd_symlink_src);
		setValueToHTML("path_dest",path_usb_symlink_dest);
		init_rop.focus();
		break;
		
		case "sys_fs_symbolic_link":
		setValueToHTML("path_src",path_hdd_symlink_src);
		setValueToHTML("path_dest",path_usb_symlink_dest);
		init_rop.focus();
		break;
		
		case "sys_fs_unlink":
		setValueToHTML("path_src","");
		setValueToHTML("path_dest",path_usb_symlink_dest);
		init_rop.focus();
		break;
		
		case "sys_storage_get_device_info":
		setValueToHTML("path_src","");
		setValueToHTML("path_dest",path_storage_get_device_info_dump);
		init_rop.focus();
		break;
		
		case "sys_storage_report_devices":
		setValueToHTML("path_src","");
		setValueToHTML("path_dest",path_storage_report_devices_dump);
		init_rop.focus();
		break;
		
		case "sys_sm_get_platform_info":
		setValueToHTML("path_src","");
		setValueToHTML("path_dest",sys_sm_get_platform_info_dump);
		init_rop.focus();
		break;
		
		case "webkit_search_area":
		setValueToHTML("path_src","");
		setValueToHTML("path_dest",webkit_search_area_dump);
		init_rop.focus();
		break;
		
		case "sys_storage_open":
		setDefaultGuiParams();
		break;
		
		case "sys_storage_read":
		setDefaultGuiParams();
		break;
		
		case "sys_process_exit":
		setValueToHTML("path_src","");
		setValueToHTML("path_dest","");
		marked_hex_process_id.focus();
		break;
		
		case "sys_process_kill":
		setValueToHTML("path_src","");
		setValueToHTML("path_dest","");
		marked_hex_process_id.focus();
		break;
		
		case "sys_ppu_thread_create":
		setValueToHTML("path_src","");
		setValueToHTML("path_dest","");
		marked_hex_threads_id.focus();
		break;
		
		case "sys_ppu_thread_exit":
		setValueToHTML("path_src","");
		setValueToHTML("path_dest","");
		marked_hex_threads_id.focus();
		break;
		
		case "sys_ppu_thread_restart":
		setValueToHTML("path_src","");
		setValueToHTML("path_dest","");
		marked_hex_threads_id.focus();
		break;
		
		case "sys_ppu_thread_start":
		setValueToHTML("path_src","");
		setValueToHTML("path_dest","");
		marked_hex_threads_id.focus();
		break;
		
		case "sys_ppu_thread_stop":
		setValueToHTML("path_src","");
		setValueToHTML("path_dest","");
		marked_hex_threads_id.focus();
		break;
		
		case "ppu_thread_get_priority":
		setValueToHTML("path_src","");
		setValueToHTML("path_dest",ppu_thread_get_priority_dump);
		marked_hex_threads_id.focus();
		break;
		
		case "ppu_thread_get_stack_info":
		setValueToHTML("path_src","");
		setValueToHTML("path_dest",ppu_thread_get_stack_info_dump);
		marked_hex_threads_id.focus();
		break;
		
		case "sys_sm_request_led":
		setDefaultGuiParams();
		break;
		
		case "sys_sm_control_led":
		setValueToHTML("path_src","");
		setValueToHTML("path_dest","");
		marked_hex_system_led_color.focus();
		break;
		
		case "sys_game_get_temperature":
		setDefaultGuiParams();
		break;
		
		case "sys_sm_get_fan_policy":
		setDefaultGuiParams();
		break;
		
		/*
		case "sys_sm_set_fan_policy":
		setValueToHTML("path_src","");
		setValueToHTML("path_dest","");
		alert("ALERT!\n\nThis ONLY Currently Works With CFW!");
		marked_hex_system_fan_speed.focus();
		break;
		*/
		
		case "sys_ss_utoken_if":
		setDefaultGuiParams();
		break;
		
		case "sys_rsx_memory_free":
		setDefaultGuiParams();
		break;
		
		case "sys_net_open_dump":
		setDefaultGuiParams();
		break;
		
		case "sys_net_read_dump":
		setDefaultGuiParams();
		break;
		
		case "sys_net_write_dump":
		setDefaultGuiParams();
		break;
		
		case "sys_net_close_dump":
		setDefaultGuiParams();
		break;
		
		case "dump_lv2_syscall_table":
		setValueToHTML("path_src","");
		setValueToHTML("path_dest",sys_ss_utoken_lv2_sc_table_dump);
		init_rop.focus();
		break;
		
		case "xmb_plugin_test":
		alert("DEX 4.81 ONLY");
		setDefaultGuiParams();
		break;
		
		case "busy_icon_test":
		alert("DEX 4.81 ONLY");
		setDefaultGuiParams();
		break;
		
		case "vsh_printf_test":
		alert("DEX 4.81 ONLY");
		setValueToHTML("path_src",vsh_printf_arg1);
		setValueToHTML("path_dest",vsh_printf_arg2);
		init_rop.focus();
		break;
		
		case "create_new_user":
		alert("DEX 4.81 ONLY");
		setDefaultGuiParams();
		break;
		
		case "test_only":
		alert("DEX 4.81 ONLY");
		setValueToHTML("path_src",vsh_printf_arg1);
		setValueToHTML("path_dest",vsh_printf_arg2);
		init_rop.focus();
		break;
	}
	
}


// Default GUI Params
function setDefaultGuiParams(){
	setValueToHTML("path_src","");
	setValueToHTML("path_dest","");
	init_rop.focus();
} 

// Set Mounting Device
function mountSetDevice(device){
	mount_device = device.value;
	mounting_fs.focus();
} 

// Set Mounting File System
function mountSetFS(fs){
	mount_fs = fs.value;
	mounting_path.focus();
} 

// Set Mounting File System
function mountSetPath(path){
	mount_path = path.value;
	if(chain_stackframe==="sys_fs_mount"){write_protection_toggle.focus();}
	if(chain_stackframe==="sys_fs_unmount"){init_rop.focus();}
} 

// Get Process ID
function getProcessID(id){
	process_kill_pid = id.value;
	init_rop.focus();
	return process_kill_pid;
} 

function getProcessIDFromHTML(){
	process_kill_pid = getValueFromHTML("marked_hex_process_id");
	//alert(process_kill_pid);
} 

// Toggle Write Protect
function toggleWriteProtect(){
	if(write_protect)
	{
		fs_mount_write_protection=0x00000000;
		write_protect=false;
		alert(msg_warning_write_protection);
	}
	else
	{
		fs_mount_write_protection=0x00000001;
		write_protect=true;
	}
	
	init_rop.focus();
} 

// Toggle USB Mounting R9 Pointer Arg
function toggleUsbMount(){
	if(usb_mount)
	{
		usb_mount=false;
		alert(msg_mount_usb_disable);
	}
	else
	{
		usb_mount=true;
		alert(msg_mount_usb_enable);
	}
	
	init_rop.focus();
} 

// Get Thread ID
function getThreadID(id){
	thread_id = id.value;
	init_rop.focus();
	return thread_id;
} 

function getThreadIDFromHTML(){
	thread_id = getValueFromHTML("marked_hex_threads_id");
} 

// Get LED Color
function getLedColor(id){
	control_led_id = id.value;
	marked_hex_system_led_action.focus();
	return thread_id;
} 

// Get LED Action
function getLedAction(id){
	control_led_action = id.value;
	init_rop.focus();
	return thread_id;
} 

// Get Fan Speed
function getFanSpeed(id){
	set_fan_speed = id.value;
	//marked_hex_system_fan_settings.focus();
	init_rop.focus();
	return thread_id;
} 

// Get Fan Settings
function getFanSettings(id){
	set_fan_arg2 = id.value;
	set_fan_arg3 = id.value;
	init_rop.focus();
	return thread_id;
} 

// Beep Magic
function setNumberOfBeeps(beeps){
	sc_buzzer_no_of_beeps = parseInt(number_of_beeps_edit.value);
	init_rop.focus();
} 

// Chain Selector
function chainSelection(hex){
	chain_stackframe = hex.value;
	
	// Set Which Searches Need To Happen To Find Pointers
	setChainOptions(chain_stackframe);
	
	return chain_stackframe;
} 

// Search Size Selector
function searchSizeSelection(marked_search_size){
	search_max_threshold = parseInt(marked_search_size.value*0x100000);
} 

// Search Base Offset Selector
function searchBaseSelection(marked_search_base_offset){
	search_base_offset = parseInt(marked_search_base_offset.value);
	//alert(search_base_offset);
} 

// SearchStack Adjust
function searchStackAdjust(marked_search_stack_adjust){
	search_base_offset_adjust=parseInt(marked_search_stack_adjust.value);
	//return search_base_offset_adjust=parseInt(marked_search_stack_adjust.value);
} 

// Search Range Size Selector
function searchRangeSelection(marked_search_range_size){
	search_range_size = parseInt(marked_search_range_size.value);
	//alert(search_range_size);
} 

// Loop Number Selector
function searchMaxLoops(marked_search_max_loops){
	max_loops = parseInt(marked_search_max_loops.value);
} 

// Search Range Size Selector
function chmodSet(marked_chmod){
	sc_chmod_arg = marked_chmod.value;
	//alert(sc_chmod_arg);
} 

// Search Range Size Selector
function chownSet(marked_chown){
	sc_chmod_arg = marked_chown.value;
	//alert(sc_chown_arg);
} 

// Debug Selector
//var debug_mode_new=false;
function debugToggle(){
	if(debug_mode)
	{
		debug_mode=false;
		hideElement("debug-alert", true);
		disableElement("debug-alert", false);
	}
	else{
		debug_mode=true;
		hideElement("debug-alert", false);
		disableElement("debug-alert", false);
	}
} 

function setPathType(pt){
	switch(pt)
	{
		case 0:
		path_type="file";
		break;
		case 1:
		path_type="dir";
		break;
	}
} 

function setTitleID(id){
	var x=title_id_edit.value;
	title_id=x;
	if(x.length!=9){alert(msg_invalid_title_id);x="PS3XPLOIT";}// check size for 9 chars
	setValueToHTML("title_id_edit","");
	setValueToHTML("title_id_edit",x);
	var v=getValueFromHTML("path_dest");
	
	var game_path = "/dev_hdd0/game/";
	var path_len=v.length;
	var y=v.substring(0,15);
	var z=v.substring(24,path_len);
	var path_display=y+title_id.toUpperCase()+z

	if (y===game_path) {
		setValueToHTML("path_dest","");
		setValueToHTML("path_dest",y+title_id.toUpperCase()+z);
		alert(msg_destination_path_set_new+path_display);
	} else {
		alert(msg_destination_path_incorrect);
		path_dest_type.focus();
	}
} 

function setFileSize(size){
	var x=file_size_edit.value;
	x=x.toString(16);
	file_size_display=x;// set filesize display to be hex by default
	setValueToHTML("file_size_edit","");
	setValueToHTML("file_size_edit",file_size_display);
	if(x===""){alert(msg_default_size);}else{alert(msg_new_size+x);}
	if(x===""){file_size=0x00000140;}else{file_size=x;}// set filesize using hex value
	//if(file_size===0x7FFFF000){setValueToHTML("path_src","/dev_hdd1");setValueToHTML("path_dest","/dev_usb000/hdd1.bin");}//testing hdd1 mount
	init_rop.focus();
} 

function setPathNameSrc(path){
	var x=path.value;
	path_src=x;
	setValueToHTML("path_src",x);
	if((x==="/dev_usb000/LIC.EDAT")||(x==="/dev_hdd0/game/PS3XPLOIT/LICDIR/LIC.EDAT"))
	{
		file_size=0x10190;
		file_size_display="0x"+file_size.toString(16);
		setValueToHTML("file_size_edit",file_size_display);
		if (confirm(msg_anti_piracy_edat)){setValueToHTML("path_src",x);}else{reloadPage();}
	}
	
	if(init_after_select){init_after_select=false;init_rop.focus();}
} 

function setPathNameDest(path){
	var x=path.value;
	if(x==="httpcache"){
		path_dest=user_home_path+"webbrowser/silk/httpcache/";
	}
	else{
		path_dest=x;
	}
	setValueToHTML("path_dest",path_dest);
	
	if((x==="/dev_usb000/LIC.EDAT")||(x==="/dev_hdd0/game/PS3XPLOIT/LICDIR/LIC.EDAT"))
	{
		file_size=0x10190;
		file_size_display="0x"+file_size.toString(16);
		setValueToHTML("file_size_edit",file_size_display);
		if (confirm(msg_anti_piracy_edat)){setValueToHTML("path_dest",x);}else{reloadPage();}
	}
	
	if(init_after_select){init_after_select=false;init_rop.focus();}
} 

function setUserID(path){
	if(path.value===""){user_id="00000001";}else{user_id=path.value;}
	user_home_path=dev_hdd0_home+path.value+"/";
	setValueToHTML("path_dest",user_home_path);
	alert(gui_txt_user_id_new+user_id+gui_txt_home_path_new+user_home_path);
} 

// Reboot Selector
var reboot_mode=0x00000200;// LV2 Soft Reboot
function rebootSelection(marked_reboot){
	reboot_mode_temp =  marked_reboot.value;
	switch(reboot_mode_temp)
	{
		case "":
		reboot_mode=sc_shutdown_soft;
		disable_reboot=false;
		if(chain_stackframe===""){marked_hex.focus();}else{init_rop.focus();}
		break;
		case "reboot_shutdown_soft":
		reboot_mode=sc_shutdown_soft;
		disable_reboot=false;
		if(chain_stackframe===""){marked_hex.focus();}else{init_rop.focus();}
		break;
		case "reboot_shutdown_hard":
		reboot_mode=sc_shutdown_hard;
		disable_reboot=false;
		if(chain_stackframe===""){marked_hex.focus();}else{init_rop.focus();}
		break;
		case "reboot_shutdown_off":
		reboot_mode=sc_shutdown_off;
		disable_reboot=false;
		if(chain_stackframe===""){marked_hex.focus();}else{init_rop.focus();}
		break;
		case "exit_chain":
		reboot_mode=sc_shutdown_none;
		disable_reboot=true;
		if(chain_stackframe===""){marked_hex.focus();}else{init_rop.focus();}
		break;
	}
} 

// Set File Mode
var wb=0x00007762;
var rb=0x00007262;
var file_mode;
function setFileMode(mode){
	switch(mode)
	{
		case "rb":
		file_mode=rb;
		break;
		case "wb":
		file_mode=wb;
		break;
	}
	
	return file_mode;
} 

// Flash Type Selector
function setFlashType(type)
{
	switch(type)
	{
		case 0:
		flash_type_select=0;
		type=flash_type_select;
		flash_type_text="NAND";
		checkBox("flash_type_nand",true);
		checkBox("flash_type_nor",false);
		checkBox("flash_type_emmc",false);
		setDefaultSearchParams();
		break;
		case 1:
		flash_type_select=1;
		type=flash_type_select;
		flash_type_text="NOR";
		checkBox("flash_type_nand",false);
		checkBox("flash_type_nor",true);
		checkBox("flash_type_emmc",false);
		setDefaultSearchParams();
		break;
		case 2:
		flash_type_select=2;
		type=flash_type_select;
		flash_type_text="EMMC";
		checkBox("flash_type_nand",false);
		checkBox("flash_type_nor",false);
		checkBox("flash_type_emmc",true);
		setDefaultSearchParams();
		break;
	}
} 

function getFlashType(){
	return flash_type_select;
} 


function setMemDumpAddress(marked_memdump_addr)
{
	var x="";
	memdump_addr=parseInt(marked_memdump_addr.value);
	memdump_addr_temp=memdump_addr;
	addr_start=memdump_addr;
	if(memdump_addr_text==="0x0"){memdump_addr_text="0x00000000";}else{memdump_addr_text=addr_start.toString(16).toUpperCase();}
	x=path_memdump_start+memdump_addr_text+path_memdump_mid+memdump_size_text+path_memdump_end;
	
	setValueToHTML("marked_memdump_addr_edit","0x"+memdump_addr_text);
	setValueToHTML("path_dest",x);
	marked_memdump_size.focus();
	
	//a1_r5=0x00FFFFFF;
	//a1_r29=0x00FFFFFF;
	//a1_r30=0x00000000;
	
	//a1_r5=0x04D5FFF9;
	//a1_r29=0x04D5FFF9;
	//a1_r30=0x00000000;
	
	//a1_r5=0x01FFFFFF;
	//a1_r29=0x01FFFFFF;
	//a1_r30=0x70000000;
	
	//a1_r5=0xFDFFFE3;// 253mb
	//a1_r29=0xFDFFFE3;// 253mb
	//a1_r30=0xC0000000;
} 

function setMemDumpSize(marked_memdump_size)
{
	var x="";
	memdump_size=parseInt(marked_memdump_size.value);
	memdump_size_temp=memdump_size;// actually start_addr+size [fix later]
	addr_end=memdump_addr_temp+memdump_size;
	memdump_size_text=addr_end.toString(16).toUpperCase();
	x=path_memdump_start+memdump_addr_text+path_memdump_mid+memdump_size_text+path_memdump_end;
	
	setValueToHTML("marked_memdump_size_edit","0x"+memdump_size_text);
	setValueToHTML("path_dest",x);
	memdump_save_new_values.focus();
} 

function saveMemdumpValues()
{	
	var x;
	memdump_addr=parseInt(marked_memdump_addr_edit.value);
	memdump_size=parseInt(marked_memdump_size_edit.value);
	memdump_addr_text=memdump_addr.toString(16).toUpperCase();
	memdump_size_text=memdump_size.toString(16).toUpperCase();
	x=path_memdump_start+memdump_addr_text+path_memdump_mid+memdump_size_text+path_memdump_end;
	setValueToHTML("marked_memdump_addr",memdump_addr_text);
	setValueToHTML("marked_memdump_size",memdump_size_text);
	setValueToHTML("path_dest",x);
	
	memdump_end=memdump_size-memdump_addr;// this is size [fix later]
	memdump_end_text=memdump_end.toString(16).toUpperCase();// this is size [fix later]
	
	alert(msg_memdump_size+memdump_end_text+msg_memdump_start_addr+memdump_addr_text+msg_memdump_end_addr+memdump_size_text);
	memdump_size=memdump_end;
	
	init_rop.focus();
}

function saveMemdumpRangeValues(start,end)
{	
	var x;
	memdump_addr=parseInt(start);
	memdump_size=parseInt(end);
	memdump_addr_text=memdump_addr.toString(16).toUpperCase();
	memdump_size_text=memdump_size.toString(16).toUpperCase();
	x=path_memdump_start+memdump_addr_text+path_memdump_mid+memdump_size_text+path_memdump_end;
	setValueToHTML("marked_memdump_addr_edit",memdump_addr_text);
	setValueToHTML("marked_memdump_size_edit",memdump_size_text);
	setValueToHTML("path_dest",x);
	
	memdump_end=memdump_size-memdump_addr;// this is size [fix later]
	memdump_end_text=memdump_end.toString(16).toUpperCase();// this is size [fix later]
	
	alert(msg_memdump_size+memdump_end_text+msg_memdump_start_addr+memdump_addr_text+msg_memdump_end_addr+memdump_size_text);
}


function setMemDumpRange(marked_memdump_range)
{	
	var selection=marked_memdump_range.value;
	
	if(selection===0)
	{
		//memdump_addr=0x00010000;
		//memdump_size=0x01BEFFF3;
		memdump_addr=mem_preset_0_start;
		memdump_size=mem_preset_0_size;
	}
	
	if(selection===1)
	{
		//memdump_addr=0x10000000;
		//memdump_size=0x0010FFF0;
		memdump_addr=mem_preset_1_start;
		memdump_size=mem_preset_1_size;
	}
	
	if(selection===2)
	{
		//memdump_addr=0x20000000;
		//memdump_size=0x009FFFFF;
		memdump_addr=mem_preset_2_start;
		memdump_size=mem_preset_2_size;
	}
	
	if(selection===3)
	{
		//memdump_addr=0x30000000;
		//memdump_size=0x0003FFE6;
		memdump_addr=mem_preset_3_start;
		memdump_size=mem_preset_3_size;
	}
	
	if(selection===4)
	{
		//memdump_addr=0x40000000;
		//memdump_size=0x0000FFEF;
		memdump_addr=mem_preset_4_start;
		memdump_size=mem_preset_4_size;
	}
	
	if(selection===5)
	{
		//memdump_addr=0x50000000;
		//memdump_size=0x0000FFEF;
		memdump_addr=mem_preset_5_start;
		memdump_size=mem_preset_5_size;
	}
	
	if(selection===6)
	{
		//memdump_addr=0x60000000;
		//memdump_size=0x00000FFE;
		memdump_addr=mem_preset_6_start;
		memdump_size=mem_preset_6_size;
	}
	
	if(selection===7)
	{
		//memdump_addr=0x70000000;
		//memdump_size=0x01FFFFFF;
		memdump_addr=mem_preset_7_start;
		memdump_size=mem_preset_7_size;
	}
	
	if(selection===8)
	{
		//memdump_addr=0x80000000;
		//memdump_size=0x0FFFFFFF;
		memdump_addr=mem_preset_8_start;
		memdump_size=mem_preset_8_size;
	}
	
	if(selection===9)
	{
		//memdump_addr=0xC0000000;
		//memdump_size=0x0FDFFFE9;
		memdump_addr=mem_preset_9_start;
		memdump_size=mem_preset_9_size;
	}
	
	// alert(memdump_addr.toString(16)+"\n"+memdump_size.toString(16));
	// setMemDumpAddress(memdump_addr.toString(16));
	// setMemDumpSize(memdump_size.toString(16));
	// saveMemdumpRangeValues(memdump_addr.toString(16),memdump_size.toString(16));

	var x;
	addr_end=memdump_addr+memdump_size;
	addr_end=parseInt(memdump_addr)+parseInt(memdump_size);
	memdump_addr_text=memdump_addr.toString(16).toUpperCase();
	memdump_size_text=addr_end.toString(16).toUpperCase();
	alert(memdump_addr_text);
	alert(memdump_size_text);
	x=path_memdump_start+memdump_addr_text+path_memdump_mid+memdump_size_text+path_memdump_end;
	setValueToHTML("marked_memdump_addr",memdump_addr_text);
	setValueToHTML("marked_memdump_size",memdump_size_text);
	setValueToHTML("path_dest",x);
	saveMemdumpValues();
}


// Disable Memory Options in GUI  bug!?!?
function disableMemDumpOptions()
{	
	disableElement("marked_memdump_addr", true);
	disableElement("marked_memdump_size", true);
}

// Default Page Args If Not Set
function setArgsFromPage()
{
	if((typeof(path_src))||(path_src===""))
	{
		//path_src="/dev_usb000/PS3Xploit.bin";
		path_src="/dev_usb000/PS3Xploit/";
	}
	else{
		path_src=getValueFromHTML("path_src");
	}
	
	if((typeof(path_dest))||(path_src===""))
	{
		//path_dest="/dev_hdd0/PS3Xploit.bin";
		path_dest="/dev_hdd0/PS3Xploit";
	}
	else{
		path_dest=getValueFromHTML("path_dest");
	}
	
	page_args_set=true;
}


// Default Settings Selector
var default_settings=true;
function toggle_default_settings(){
	if(default_settings)
	{
		default_settings=false;
	}
	else{
		default_settings=true;
	}
} 

/*
function setPayloadMediaType(type)
{
	var x=marked_xmb_select_alt.value;
	if(x===""){payload_hex_ext="jpg"}else{payload_hex_ext=x;}
}
*/

function setPayloadMedia(marked_xmb_select)
{
	var media_dest="";
	switch(marked_xmb_select.value)
	{
		case "":
		setValueToHTML("path_src","");
		disableElement("path_src",false);
		disableElement("path_src_type",false);
		setValueToHTML("path_dest","");
		disableElement("path_dest",false);
		disableElement("path_dest_type",false);
		disableElement("copy_payload_media_photo",true);
		disableElement("copy_payload_media_music",true);
		disableElement("copy_payload_media_video",true);
		break;
		
		case "music":
		payload_hex_ext=".mp3";
		media_dest=dev_hdd0_music+media_random+payload_hex+payload_hex_ext;
		//setValueToHTML("path_src","");
		//disableElement("path_src",true);
		//disableElement("path_src_type",true);
		setValueToHTML("path_dest",media_dest);
		disableElement("copy_payload_media_photo",true);
		disableElement("copy_payload_media_music",false);
		disableElement("copy_payload_media_video",true);
		//return media_dest.convert();
		alert(msg_media_not_supported);
		break;
		
		case "photo":
		payload_hex_ext=".jpg";
		media_dest=dev_hdd0_photo+y+"/"+m+"/"+d+"/"+payload_hex+payload_hex_ext;
		//setValueToHTML("path_src","");
		//disableElement("path_src",true);
		//disableElement("path_src_type",true);
		setValueToHTML("path_dest",media_dest);
		disableElement("copy_payload_media_photo",false);
		disableElement("copy_payload_media_music",true);
		disableElement("copy_payload_media_video",true);
		//return media_dest.convert();
		break;
		
		case "video":
		payload_hex_ext=".mp4";
		media_dest=dev_hdd0_video+media_random+payload_hex+payload_hex_ext;
		//setValueToHTML("path_src","");
		//disableElement("path_src",true);
		//disableElement("path_src_type",true);
		setValueToHTML("path_dest",media_dest);
		disableElement("copy_payload_media_photo",true);
		disableElement("copy_payload_media_music",true);
		disableElement("copy_payload_media_video",false);
		//return media_dest.convert();
		alert(msg_media_not_supported);
		break;
		
		default:
		break;
	}
}

function copyPayloadMedia()
{
    //
}

function execSuccessMessage(chain)
{
	if(!msg_override_seen)
	{
		switch(chain)
		{
			case "mem_dump_test":
			msg_success_text=success_chain_exec_memdump;
			reload_page.focus();
			break;
			
			case "get_open_psid":
			msg_success_text=success_chain_exec_psid;
			reload_page.focus();
			break;
			
			case "dump_idps_from_mem":
			msg_success_text=success_chain_exec_idps;
			reload_page.focus();
			break;
			
			case "sys_sm_get_platform_info":
			msg_success_text=success_chain_exec_syscall_dump;
			reload_page.focus();
			break;
			
			case "webkit_search_area":
			msg_success_text=success_chain_exec_memdump;
			reload_page.focus();
			break;
			
			case "minver_check":
			msg_success_text=success_chain_exec_press_again;
			break;
			
			case "get_filesize":
			msg_success_text=success_chain_exec_press_again;
			break;
			
			case "sys_game_get_temperature":
			msg_success_text=success_chain_exec_press_again;
			break;
			
			case "sys_storage_get_device_info":
			msg_success_text=success_chain_exec_press_again;
			break;
			
			case "sys_fs_mount":
			msg_success_text=success_mount_device;
			break;
			
			case "file_read_write_test":
			msg_success_text=success_chain_exec_read_write_file;
			break;
			
			default:
			msg_success_text=success_chain_exec;
			break;
		}
	}
	
	// Check other chains
	switch(chain)
	{
		case "file_read_write_test":
		msg_success_text=success_chain_exec_read_write_file;
		break;
	}
	
	msg_override_seen=true;
}

function postExecTasks(chain)
{
	// bug?!?! for 2nd execute
	switch(chain)
	{
		case "minver_check":
		setTimeout(showMinVersion(),2000);
		break;
		
		case "get_filesize":
		setTimeout(showFilesize(),2000);
		break;
		
		case "sys_game_get_temperature":
		setTimeout(showTemps(),2000);
		break;
		
		case "sys_storage_get_device_info":
		setTimeout(showReturnValue(),2000);
		break;
		
		case "mem_dump_test":
		setTimeout(disableElement("load_rop",true));
		break;
		
		case "get_open_psid":
		setTimeout(disableElement("load_rop",true));
		break;
		
		case "dump_idps_from_mem":
		setTimeout(disableElement("load_rop",true));
		break;
		
		case "ppu_thread_get_stack_info":
		setTimeout(disableElement("load_rop",true));
		break;
		
		default:
		msg_success_text=success_chain_exec;
		break;
	}
}

function showAllDebugOutput()
{
	var sample="sampleX";
	
    //alert("Page X of X"+"\n"+"sample: "+sample+"\n"+"sample: "+sample+"\n"+"sample: "+sample+"\n"+"sample: "+sample+"\n"+"sample: "+sample+"\n");
    alert("Page 1 of X"+"\n"+"flash_type_text: "+flash_type_text+"\n"+"chain_stackframe: "+chain_stackframe);
    alert("Page 2 of X"+"\n"+"max_loops: "+max_loops+"\n"+"failCount: "+failCount+"\n"+"failCountMax: "+failCountMax+"\n"+"search_max_threshold: "+search_max_threshold.toString(16)+"\n"+"search_max_threshold_backup: "+search_max_threshold_backup.toString(16)+"\n");
    alert("Page 3 of X"+"\n"+"search_base_offset: "+search_base_offset.toString(16)+"\n"+"search_base_offset_min: "+search_base_offset_min.toString(16)+"\n"+"search_base_offset_max: "+search_base_offset_max.toString(16)+"\n"+"search_base_offset_adjust: "+search_base_offset_adjust.toString(16)+"\n"+"search_base_offset_adjust_jump2: "+search_base_offset_adjust_jump2+"\n");
    alert("Page 4 of X"+"\n"+"search_base_offset_adjust_jump1: "+search_base_offset_adjust_jump1.toString(16)+"\n"+"search_range_size: "+search_range_size.toString(16));
    alert("Page 5 of X"+"\n"+"path_src: "+path_src+"\n"+"path_dest: "+path_dest+"\n"+"user_id: "+user_id+"\n"+"user_home_path: "+user_home_path);
    alert("Page 6 of X"+"\n"+"memdump_addr: "+memdump_addr.toString(16)+"\n"+"memdump_size: "+memdump_size.toString(16)+"\n"+"sample: "+sample+"\n"+"sample: "+sample+"\n"+"sample: "+sample+"\n");
	//alert(msg_debug_placeholder);
}

