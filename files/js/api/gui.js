// Default GUI For HTML
// PS3Xploit Team 2018 / ps3xploit.com


/*
 SelectNav.js (v. 0.1)
 Converts your <ul>/<ol> navigation into a dropdown list for small screens
 https://github.com/lukaszfiszer/selectnav.js
*/
// window.selectnav=function(){"use strict";var e=function(e,t){function c(e){var t;if(!e)e=window.event;if(e.target)t=e.target;else if(e.srcElement)t=e.srcElement;if(t.nodeType===3)t=t.parentNode;if(t.value)window.location.href=t.value}function h(e){var t=e.nodeName.toLowerCase();return t==="ul"||t==="ol"}function p(e){for(var t=1;document.getElementById("selectnav"+t);t++);return e?"selectnav"+t:"selectnav"+(t-1)}function d(e){a++;var t=e.children.length,n="",l="",c=a-1;if(!t){return}if(c){while(c--){l+=o}l+=" "}for(var v=0;v<t;v++){var m=e.children[v].children[0];if(typeof m!=="undefined"){var g=m.innerText||m.textContent;var y="";if(r){y=m.className.search(r)!==-1||m.parentNode.className.search(r)!==-1?f:""}if(i&&!y){y=m.href===document.URL?f:""}n+='<option value="'+m.href+'" '+y+">"+l+g+"</option>";if(s){var b=e.children[v].children[1];if(b&&h(b)){n+=d(b)}}}}if(a===1&&u){n='<option value="">'+u+"</option>"+n}if(a===1){n='<select class="selectnav" id="'+p(true)+'">'+n+"</select>"}a--;return n}e=document.getElementById(e);if(!e){return}if(!h(e)){return}if(!("insertAdjacentHTML"in window.document.documentElement)){return}document.documentElement.className+=" js";var n=t||{},r=n.activeclass||"active",i=typeof n.autoselect==="boolean"?n.autoselect:true,s=typeof n.nested==="boolean"?n.nested:true,o=n.indent||"→",u=n.label||"- Navigation -",a=0,f=" selected ";e.insertAdjacentHTML("afterend",d(e));var l=document.getElementById(p());if(l.addEventListener){l.addEventListener("change",c)}if(l.attachEvent){l.attachEvent("onchange",c)}return l};return function(t,n){e(t,n)}}()


// GUI Text Display
function showGuiText()
{
	// Top Text
	document.getElementById('fwVerText').innerHTML=msg_detected_fw_1 + vshType + msg_detected_fw_2 + fwVersion + msg_detected_fw_4;
	document.getElementById('gui_title').innerHTML=gui_title + gui_version;
	document.getElementById('gui_team').innerHTML=gui_team;
	document.getElementById('gui_credits').innerHTML=gui_credits;
	
	// Checkboxes First Section
	document.getElementById('gui_chk_default_settings').innerHTML=gui_chk_default_settings;
	document.getElementById('gui_chk_disable_trigger').innerHTML=gui_chk_disable_trigger;
	document.getElementById('gui_chk_write_protect').innerHTML=gui_chk_write_protect;
	document.getElementById('gui_chk_flash_type_nand').innerHTML=gui_chk_flash_type_nand;
	document.getElementById('gui_chk_flash_type_nor').innerHTML=gui_chk_flash_type_nor;
	document.getElementById('gui_chk_flash_type_emmc').innerHTML=gui_chk_flash_type_emmc;
	
	// Reboot Mode
	document.getElementById('gui_chk_reboot_mode').innerHTML=gui_chk_reboot_mode;
	document.getElementById('gui_chk_reboot_mode_select').innerHTML=gui_chk_reboot_mode_select;
	document.getElementById('gui_chk_reboot_mode_soft').innerHTML=gui_chk_reboot_mode_soft;
	document.getElementById('gui_chk_reboot_mode_hard').innerHTML=gui_chk_reboot_mode_hard;
	document.getElementById('gui_chk_reboot_mode_off').innerHTML=gui_chk_reboot_mode_off;
	
	// ROP Chain Text

	// Preset Chains
	document.getElementById('gui_txt_preset_chains').innerHTML=gui_txt_preset_chains;
	document.getElementById('gui_txt_preset_chains_default').innerHTML=gui_txt_preset_chains_default;
	// document.getElementById('gui_txt_option_stackframe_test').innerHTML=gui_txt_option_stackframe_test;
	document.getElementById('gui_txt_option_beep_test').innerHTML=gui_txt_option_beep_test;
	document.getElementById('gui_txt_option_power_test').innerHTML=gui_txt_option_power_test;
	document.getElementById('gui_txt_option_minver_check').innerHTML=gui_txt_option_minver_check;
	document.getElementById('gui_txt_option_sys_game_get_temperature').innerHTML=gui_txt_option_sys_game_get_temperature;
	//document.getElementById('gui_txt_option_game_debug_pafjob_test').innerHTML=gui_txt_option_game_debug_pafjob_test;
	// document.getElementById('gui_txt_option_console_write_test').innerHTML=gui_txt_option_console_write_test;
	// document.getElementById('gui_txt_option_sys_tty_read').innerHTML=gui_txt_option_sys_tty_read;
	// document.getElementById('gui_txt_option_sys_tty_write').innerHTML=gui_txt_option_sys_tty_write;
	
	// Dumping
	document.getElementById('gui_txt_preset_chains_dumping').innerHTML=gui_txt_preset_chains_dumping;
	document.getElementById('gui_txt_option_system_info_multi_dump').innerHTML=gui_txt_option_system_info_multi_dump;
	document.getElementById('gui_txt_option_dump_lv2_syscall_table').innerHTML=gui_txt_option_dump_lv2_syscall_table;
	document.getElementById('gui_txt_option_mem_dump_test').innerHTML=gui_txt_option_mem_dump_test;
	document.getElementById('gui_txt_option_get_open_psid').innerHTML=gui_txt_option_get_open_psid;
	document.getElementById('gui_txt_option_dump_idps_from_mem').innerHTML=gui_txt_option_dump_idps_from_mem;
	document.getElementById('gui_txt_option_sys_net_dump').innerHTML=gui_txt_option_sys_net_dump;
	document.getElementById('gui_txt_sys_sm_get_platform_info').innerHTML=gui_txt_sys_sm_get_platform_info;
	// document.getElementById('gui_txt_option_dump_idps_from_flash').innerHTML=gui_txt_option_dump_idps_from_flash;
	
	// File System
	document.getElementById('gui_txt_preset_chains_file_system').innerHTML=gui_txt_preset_chains_file_system;
	document.getElementById('gui_txt_option_db_rebuild').innerHTML=gui_txt_option_db_rebuild;
	document.getElementById('gui_txt_option_file_read_write_test').innerHTML=gui_txt_option_file_read_write_test;
	document.getElementById('gui_txt_option_dir_read_write_test').innerHTML=gui_txt_option_dir_read_write_test;
	
	// Fun
	document.getElementById('gui_txt_preset_chains_fun').innerHTML=gui_txt_preset_chains_fun;
	document.getElementById('gui_txt_option_fun_test').innerHTML=gui_txt_option_fun_test;
	
	
	// Other Syscall Chains

	// Memory/System
	document.getElementById('gui_txt_syscall_group_mem_sys').innerHTML=gui_txt_syscall_group_mem_sys;
	document.getElementById('gui_txt_syscall_chains_mem_sys').innerHTML=gui_txt_syscall_chains_mem_sys;
	document.getElementById('gui_txt_option_sys_rsx_memory_free').innerHTML=gui_txt_option_sys_rsx_memory_free;
	
	// Storage
	document.getElementById('gui_txt_syscall_chains_storage').innerHTML=gui_txt_syscall_chains_storage;
	document.getElementById('gui_txt_option_sys_storage_report_devices').innerHTML=gui_txt_option_sys_storage_report_devices;
	// document.getElementById('gui_txt_option_sys_storage_open').innerHTML=gui_txt_option_sys_storage_open;
	// document.getElementById('gui_txt_option_sys_storage_read').innerHTML=gui_txt_option_sys_storage_read;
	document.getElementById('gui_txt_option_sys_fs_chmod').innerHTML=gui_txt_option_sys_fs_chmod;
	document.getElementById('gui_txt_option_sys_fs_chown').innerHTML=gui_txt_option_sys_fs_chown;
	document.getElementById('gui_txt_option_sys_fs_get_fs_info').innerHTML=gui_txt_option_sys_fs_get_fs_info;
	document.getElementById('gui_txt_option_sys_fs_get_mount_info').innerHTML=gui_txt_option_sys_fs_get_mount_info;
	document.getElementById('gui_txt_option_sys_fs_link').innerHTML=gui_txt_option_sys_fs_link;
	document.getElementById('gui_txt_option_sys_fs_mapped_allocate').innerHTML=gui_txt_option_sys_fs_mapped_allocate;
	document.getElementById('gui_txt_option_sys_fs_mapped_free').innerHTML=gui_txt_option_sys_fs_mapped_free;
	document.getElementById('gui_txt_option_sys_fs_mkdir').innerHTML=gui_txt_option_sys_fs_mkdir;
	document.getElementById('gui_txt_option_sys_fs_mount').innerHTML=gui_txt_option_sys_fs_mount;
	document.getElementById('gui_txt_option_sys_fs_rename').innerHTML=gui_txt_option_sys_fs_rename;
	document.getElementById('gui_txt_option_sys_fs_rmdir').innerHTML=gui_txt_option_sys_fs_rmdir;
	document.getElementById('gui_txt_option_sys_fs_stat').innerHTML=gui_txt_option_sys_fs_stat;
	document.getElementById('gui_txt_option_sys_fs_symbolic_link').innerHTML=gui_txt_option_sys_fs_symbolic_link;
	document.getElementById('gui_txt_option_sys_fs_unlink').innerHTML=gui_txt_option_sys_fs_unlink;
	document.getElementById('gui_txt_option_sys_fs_unmount').innerHTML=gui_txt_option_sys_fs_unmount;
	
	// System
	document.getElementById('gui_txt_syscall_chains_system').innerHTML=gui_txt_syscall_chains_system;
	document.getElementById('gui_txt_option_sys_ss_utoken_if').innerHTML=gui_txt_option_sys_ss_utoken_if;
	
	
	// Process/Thread
	
	// Process
	document.getElementById('gui_txt_syscall_group_proc_thread').innerHTML=gui_txt_syscall_group_proc_thread;
	document.getElementById('gui_txt_syscall_chains_proc_thread').innerHTML=gui_txt_syscall_chains_proc_thread;
	document.getElementById('gui_txt_option_sys_process_exit').innerHTML=gui_txt_option_sys_process_exit;
	document.getElementById('gui_txt_option_sys_process_kill').innerHTML=gui_txt_option_sys_process_kill;
	
	document.getElementById('gui_txt_syscall_chains_process').innerHTML=gui_txt_syscall_chains_process;
	
	// Threads
	document.getElementById('gui_txt_syscall_chains_threads').innerHTML=gui_txt_syscall_chains_threads;
	document.getElementById('gui_txt_option_ppu_thread_get_priority').innerHTML=gui_txt_option_ppu_thread_get_priority;
	document.getElementById('gui_txt_option_ppu_thread_get_stack_info').innerHTML=gui_txt_option_ppu_thread_get_stack_info;
	document.getElementById('gui_txt_option_sys_ppu_thread_create').innerHTML=gui_txt_option_sys_ppu_thread_create;
	document.getElementById('gui_txt_option_sys_ppu_thread_exit').innerHTML=gui_txt_option_sys_ppu_thread_exit;
	document.getElementById('gui_txt_option_sys_ppu_thread_restart').innerHTML=gui_txt_option_sys_ppu_thread_restart;
	document.getElementById('gui_txt_option_sys_ppu_thread_start').innerHTML=gui_txt_option_sys_ppu_thread_start;
	document.getElementById('gui_txt_option_sys_ppu_thread_stop').innerHTML=gui_txt_option_sys_ppu_thread_stop;
	
	// Thread ID
	document.getElementById('gui_txt_syscall_chains_thread_id').innerHTML=gui_txt_syscall_chains_thread_id;
	
	
	// Network
	document.getElementById('gui_txt_syscall_group_network').innerHTML=gui_txt_syscall_group_network;
	document.getElementById('gui_txt_syscall_chains_sys_net').innerHTML=gui_txt_syscall_chains_sys_net;
	document.getElementById('gui_txt_option_sys_net_open_dump').innerHTML=gui_txt_option_sys_net_open_dump;
	document.getElementById('gui_txt_option_sys_net_read_dump').innerHTML=gui_txt_option_sys_net_read_dump;
	document.getElementById('gui_txt_option_sys_net_write_dump').innerHTML=gui_txt_option_sys_net_write_dump;
	document.getElementById('gui_txt_option_sys_net_close_dump').innerHTML=gui_txt_option_sys_net_close_dump;
	
	document.getElementById('gui_txt_option_url').innerHTML=gui_txt_option_url;
	
	
	// Debugging
	document.getElementById('gui_txt_syscall_group_debugging').innerHTML=gui_txt_syscall_group_debugging;
	document.getElementById('gui_txt_syscall_chains_debug_sc').innerHTML=gui_txt_syscall_chains_debug_sc;
	document.getElementById('gui_txt_option_debug_placeholder').innerHTML=gui_txt_option_debug_placeholder;
	
	// LED Control
	document.getElementById('gui_txt_syscall_group_led').innerHTML=gui_txt_syscall_group_led;
	document.getElementById('gui_txt_syscall_chains_led').innerHTML=gui_txt_syscall_chains_led;
	document.getElementById('gui_txt_option_sys_sm_request_led').innerHTML=gui_txt_option_sys_sm_request_led;
	document.getElementById('gui_txt_option_sys_sm_control_led').innerHTML=gui_txt_option_sys_sm_control_led;
	
	document.getElementById('gui_txt_syscall_chains_led_color').innerHTML=gui_txt_syscall_chains_led_color;
	document.getElementById('gui_txt_option_led_color_green').innerHTML=gui_txt_option_led_color_green;
	document.getElementById('gui_txt_option_led_color_yellow_red').innerHTML=gui_txt_option_led_color_yellow_red;
	document.getElementById('gui_txt_option_led_color_off').innerHTML=gui_txt_option_led_color_off;
	
	document.getElementById('gui_txt_syscall_chains_led_action').innerHTML=gui_txt_syscall_chains_led_action;
	document.getElementById('gui_txt_option_led_action_on').innerHTML=gui_txt_option_led_action_on;
	document.getElementById('gui_txt_option_led_action_off').innerHTML=gui_txt_option_led_action_off;
	document.getElementById('gui_txt_option_led_action_blink_fast').innerHTML=gui_txt_option_led_action_blink_fast;
	document.getElementById('gui_txt_option_led_action_blink_slow').innerHTML=gui_txt_option_led_action_blink_slow;
	
	
	// Beep parameters
	document.getElementById('gui_txt_syscall_group_beep_params').innerHTML=gui_txt_syscall_group_beep_params;
	document.getElementById('gui_txt_syscall_chains_beeps').innerHTML=gui_txt_syscall_chains_beeps;
	document.getElementById('gui_txt_option_beep_off').innerHTML=gui_txt_option_beep_off;
	document.getElementById('gui_txt_option_beep_3').innerHTML=gui_txt_option_beep_3;
	document.getElementById('gui_txt_option_beep_2').innerHTML=gui_txt_option_beep_2;
	document.getElementById('gui_txt_option_beep_2f').innerHTML=gui_txt_option_beep_2f;
	document.getElementById('gui_txt_option_beep_1').innerHTML=gui_txt_option_beep_1;
	document.getElementById('gui_txt_option_beep_1f').innerHTML=gui_txt_option_beep_1f;
	document.getElementById('gui_txt_option_beep_flatline').innerHTML=gui_txt_option_beep_flatline;
	
	// Memory Dump
	document.getElementById('gui_txt_syscall_group_memdump').innerHTML=gui_txt_syscall_group_memdump;
	document.getElementById('gui_txt_memdump_addresses').innerHTML=gui_txt_memdump_addresses;
	document.getElementById('gui_txt_memdump_size').innerHTML=gui_txt_memdump_size;
	// document.getElementById('gui_txt_memdump_range_presets').innerHTML=gui_txt_memdump_range_presets;
	// document.getElementById('gui_txt_option_memdump_presets_default').innerHTML=gui_txt_option_memdump_presets_default;
	
	document.getElementById('gui_txt_memdump_address_start').innerHTML=gui_txt_memdump_address_start;
	document.getElementById('gui_txt_memdump_address_end').innerHTML=gui_txt_memdump_address_end;
	document.getElementById('gui_txt_btn_memdump_set_values').innerHTML=gui_txt_btn_memdump_set_values;
	
	
	document.getElementById('gui_txt_group_user_id').innerHTML=gui_txt_group_user_id;
	document.getElementById('gui_txt_option_user_id_default').innerHTML=gui_txt_option_user_id_default;
	
	
	document.getElementById('gui_txt_group_permissions').innerHTML=gui_txt_group_permissions;
	document.getElementById('gui_txt_option_chmod').innerHTML=gui_txt_option_chmod;
	document.getElementById('gui_txt_option_chown').innerHTML=gui_txt_option_chown;
	
	document.getElementById('gui_txt_group_filesize').innerHTML=gui_txt_group_filesize;
	document.getElementById('gui_txt_group_titleid').innerHTML=gui_txt_group_titleid;
	
	document.getElementById('gui_txt_btn_set_filesize').innerHTML=gui_txt_btn_set_filesize;
	document.getElementById('gui_txt_btn_set_titleid').innerHTML=gui_txt_btn_set_titleid;
	
	document.getElementById('gui_txt_group_path_source').innerHTML=gui_txt_group_path_source;
	document.getElementById('gui_txt_group_path_destination').innerHTML=gui_txt_group_path_destination;
	
	
	// XMB Transfer
	document.getElementById('gui_txt_syscall_group_xmb_transfer').innerHTML=gui_txt_syscall_group_xmb_transfer;
	document.getElementById('gui_txt_option_xmb_photo').innerHTML=gui_txt_option_xmb_photo;
	document.getElementById('gui_txt_option_xmb_music').innerHTML=gui_txt_option_xmb_music;
	document.getElementById('gui_txt_option_xmb_video').innerHTML=gui_txt_option_xmb_video;
	document.getElementById('gui_txt_option_xmb_jpg_btn').innerHTML=gui_txt_option_xmb_jpg_btn;
	document.getElementById('gui_txt_option_xmb_mp3_btn').innerHTML=gui_txt_option_xmb_mp3_btn;
	document.getElementById('gui_txt_option_xmb_mp4_btn').innerHTML=gui_txt_option_xmb_mp4_btn;
	document.getElementById('gui_txt_option_xmb_save_msg').innerHTML=gui_txt_option_xmb_save_msg;
	
	// document.getElementById('gui_txt_group_payload_type').innerHTML=gui_txt_group_payload_type;
	// document.getElementById('gui_txt_group_payload_type_help').innerHTML=gui_txt_group_payload_type_help;
	
	
	// String Search
	document.getElementById('gui_txt_group_string_search').innerHTML=gui_txt_group_string_search;
	document.getElementById('gui_txt_option_search_size').innerHTML=gui_txt_option_search_size;
	document.getElementById('gui_txt_option_search_base').innerHTML=gui_txt_option_search_base;
	document.getElementById('gui_txt_option_search_stack').innerHTML=gui_txt_option_search_stack;
	document.getElementById('gui_txt_option_search_range').innerHTML=gui_txt_option_search_range;
	document.getElementById('gui_txt_option_search_loops').innerHTML=gui_txt_option_search_loops;
	
	document.getElementById('gui_chk_search_verify_jumps').innerHTML=gui_chk_search_verify_jumps;
	document.getElementById('gui_chk_search_verify_stackframe').innerHTML=gui_chk_search_verify_stackframe;
	document.getElementById('gui_chk_search_debug_output').innerHTML=gui_chk_search_debug_output;
	
	document.getElementById('gui_txt_search_found_offsets').innerHTML=gui_txt_search_found_offsets;
	
	document.getElementById('gui_txt_option_init_rop_btn').innerHTML=gui_txt_option_init_rop_btn;
	document.getElementById('gui_txt_option_exec_rop_btn').innerHTML=gui_txt_option_exec_rop_btn;
	document.getElementById('gui_txt_option_reload_page_btn').innerHTML=gui_txt_option_reload_page_btn;
	document.getElementById('gui_txt_option_reset_btn').innerHTML=gui_txt_option_reset_btn;
	document.getElementById('gui_txt_option_load_settings_btn').innerHTML=gui_txt_option_load_settings_btn;
	document.getElementById('gui_txt_option_save_settings_btn').innerHTML=gui_txt_option_save_settings_btn;
	document.getElementById('gui_txt_option_debug_show_var_btn').innerHTML=gui_txt_option_debug_show_var_btn;
}





