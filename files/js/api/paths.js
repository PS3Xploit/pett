// PS3 Default Path Variables
// PS3Xploit Team 2018 / ps3xploit.com


var path_name;

var path_name_test="/dev_hdd0/test/";// 15 bytes
var path_name_test_new="/dev_hdd0/testnew/";// 15 bytes

var path_ps3xploit="/dev_hdd0/ps3xploit/";// 20 bytes

var hdd_dir_ps3xploit="/dev_hdd0/PS3Xploit/";
var hdd_dir_ps3xploit_new="/dev_hdd0/PS3XploitNew/";
var usb_dir_ps3xploit="/dev_usb000/PS3Xploit/";

var hdd_file_ps3xploit="/dev_hdd0/PS3Xploit/hello.txt";
var usb_file_ps3xploit="/dev_usb000/PS3Xploit/hello.txt";

// Disc Paths
var dev_bdvd="/dev_bdvd/";
var dev_bdvd_usrdir="/dev_bdvd/PS3_GAME/USRDIR";
var dev_bdvd_eboot="/dev_bdvd/PS3_GAME/USRDIR/EBOOT.BIN";

// Default PS3 HDD Root Paths
var dev_hdd0="/dev_hdd0/";
var dev_hdd0_crash_report="/dev_hdd0/crash_report/";
var dev_hdd0_data="/dev_hdd0/data/";
var dev_hdd0_drm="/dev_hdd0/drm/";
var dev_hdd0_game="/dev_hdd0/game/";
var dev_hdd0_game_debug="/dev_hdd0/game_debug/";
var dev_hdd0_home="/dev_hdd0/home/";
var dev_hdd0_mms="/dev_hdd0/mms/";
var dev_hdd0_music="/dev_hdd0/music/";
var dev_hdd0_photo="/dev_hdd0/photo/";
var dev_hdd0_tmp="/dev_hdd0/tmp/";
var dev_hdd0_video="/dev_hdd0/video/";
var dev_hdd0_vm="/dev_hdd0/vm/";
var dev_hdd0_vsh="/dev_hdd0/vsh/";
var dev_hdd0_xmlhost="/dev_hdd0/xmlhost/";


var path_db_rebuild="/dev_hdd0/mms/db.err";

var path_hdd_symlink_src="/dev_hdd0/game/";
var path_usb_symlink_dest="/dev_usb000/game/";

var path_usb_default="/dev_usb000/";

var rename_test_src="/dev_hdd0/test/";
var rename_test_dest="/dev_hdd0/PS3Xploit/";

var payload_test_bin="/dev_hdd0/game/PS3XPLOIT/USRDIR/payloads/default.bin";


// File Names
var path_usb_test_bin="/dev_usb000/PS3Xploit.bin";
var path_usb_test_txt="/dev_usb000/PS3Xploit.txt";

var path_hdd_test_bin="/dev_hdd0/PS3Xploit.bin";
var path_hdd_test_txt="/dev_hdd0/PS3Xploit.txt";

var path_usb_idps_bin="/dev_usb000/idps.bin";
var path_usb_psid_bin="/dev_usb000/psid.bin";

var path_usb_flash_hex="/dev_usb000/flsh.hex";
var path_usb_dump_bin="/dev_usb000/dump.bin";

var path_memdump_start="/dev_usb000/dump_0x";
var path_memdump_mid="-0x";
var path_memdump_end=".bin";

var console_write_dump="/dev_hdd0/console_write_dump.bin";

var fs_stat_dump="/dev_usb000/sys_fs_stat_dump.bin";
var ppu_thread_get_stack_info_dump="/dev_usb000/ppu_thread_get_stack_info.bin";
var ppu_thread_get_priority_dump="/dev_usb000/ppu_thread_get_priority.bin";
var sys_fs_get_fs_info_dump="/dev_usb000/sys_fs_get_fs_info.bin";
var sys_fs_get_mount_info_dump="/dev_usb000/sys_fs_get_mount_info.bin";
var path_sys_net_dump="/dev_usb000/sys_net_dump.bin";
var path_storage_get_device_info_dump="/dev_usb000/sys_storage_get_device_info.bin";
var path_storage_report_devices_dump="/dev_usb000/sys_storage_report_devices.bin";
var sys_ss_utoken_lv2_sc_table_dump="/dev_usb000/sys_ss_utoken_lv2_sc_table_dump.bin";
var sys_sm_get_platform_info_dump="/dev_usb000/sys_sm_get_platform_info.bin";

var path_usb_memdump0="/dev_usb000/dump_0x00000000-0x04D5FFF9.bin";
var path_usb_memdump1="/dev_usb000/dump_0x10000000-0x1FFFFFFF.bin";
var path_usb_memdump2="/dev_usb000/dump_0x20000000-0x2FFFFFFF.bin";
var path_usb_memdump3="/dev_usb000/dump_0x30000000-0x3FFFFFFF.bin";
var path_usb_memdump4="/dev_usb000/dump_0x40000000-0x4FFFFFFF.bin";
var path_usb_memdump5="/dev_usb000/dump_0x50000000-0x5FFFFFFF.bin";
var path_usb_memdump6="/dev_usb000/dump_0x60000000-0x6FFFFFFF.bin";
//var path_usb_memdump7="/dev_usb000/dump_0x70000000-0x7FFFFFFF.bin";
var path_usb_memdump7="/dev_usb000/dump_0x70000000-0x71FFFFFF.bin";
var path_usb_memdump8="/dev_usb000/dump_0x80000000-0x8FFFFFFF.bin";
var path_usb_memdump9="/dev_usb000/dump_0x90000000-0x9FFFFFFF.bin";
var path_usb_memdumpA="/dev_usb000/dump_0xA0000000-0xAFFFFFFF.bin";
var path_usb_memdumpB="/dev_usb000/dump_0xB0000000-0xBFFFFFFF.bin";
var path_usb_memdumpC="/dev_usb000/dump_0xC0000000-0xCFFFFFFF.bin";
var path_usb_memdumpD="/dev_usb000/dump_0xD0000000-0xDFFFFFFF.bin";
var path_usb_memdumpE="/dev_usb000/dump_0xE0000000-0xEFFFFFFF.bin";
var path_usb_memdumpF="/dev_usb000/dump_0xF0000000-0xFFFFFFFF.bin";

var path_hdd_memdump0="/dev_hdd0/dump_0x00000000-0x0FFFFFFF.bin";
var path_hdd_memdump1="/dev_hdd0/dump_0x10000000-0x1FFFFFFF.bin";
var path_hdd_memdump2="/dev_hdd0/dump_0x20000000-0x2FFFFFFF.bin";
var path_hdd_memdump3="/dev_hdd0/dump_0x30000000-0x3FFFFFFF.bin";
var path_hdd_memdump4="/dev_hdd0/dump_0x40000000-0x4FFFFFFF.bin";
var path_hdd_memdump5="/dev_hdd0/dump_0x50000000-0x5FFFFFFF.bin";
var path_hdd_memdump6="/dev_hdd0/dump_0x60000000-0x6FFFFFFF.bin";
var path_hdd_memdump7="/dev_hdd0/dump_0x70000000-0x7FFFFFFF.bin";
var path_hdd_memdump8="/dev_hdd0/dump_0x80000000-0x8FFFFFFF.bin";
var path_hdd_memdump9="/dev_hdd0/dump_0x90000000-0x9FFFFFFF.bin";
var path_hdd_memdumpA="/dev_hdd0/dump_0xA0000000-0xAFFFFFFF.bin";
var path_hdd_memdumpB="/dev_hdd0/dump_0xB0000000-0xBFFFFFFF.bin";
var path_hdd_memdumpC="/dev_hdd0/dump_0xC0000000-0xCFFFFFFF.bin";
var path_hdd_memdumpD="/dev_hdd0/dump_0xD0000000-0xDFFFFFFF.bin";
var path_hdd_memdumpE="/dev_hdd0/dump_0xE0000000-0xEFFFFFFF.bin";
var path_hdd_memdumpF="/dev_hdd0/dump_0xF0000000-0xFFFFFFFF.bin";


function setPathNames()
{
	path_src=document.getElementById("path_src").value;
	path_dest=document.getElementById("path_dest").value;
	
	path_src_fp=path_src;
	path_dest_fp=path_dest;
	
	path_fp="/dev_usb000/test.bin";
	path_fp2="/dev_hdd0/test.bin";
	
	//path_name=str2u(path);
	//return path_name;
}

