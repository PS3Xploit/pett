// PS3 Default Syscall Arguments
// PS3Xploit Team 2018 / ps3xploit.com

		
// Test Arguments
//var test_arg1=0xDEADBEEF
//var test_arg2=0xDEADBABE
//var test_arg3=0xDEADCAFE
//var test_arg4=0xBABECAFE
//var test_arg5=0xBEEFCAFE
//var test_arg6=0xCAFEBABE

// sys_sm_ring_buzzer Parameters
var sc_sys_sm_ring_buzzer=0x00000188
var sc_buzzer_arg1=0x00001004
var sc_buzzer_arg2=0x0000000A
var sc_buzzer_arg3=0x000001B6
var sc_buzzer_1_beep=0x000001B6
var sc_buzzer_2_beeps=0x000001B0
var sc_buzzer_3_beeps=0x000001B6
var sc_buzzer_no_of_beeps=0x000001B6

// sm_shutdown Parameters
var sc_shutdown=0x0000017B
var sc_shutdown_off=0x00001100 // Power Off
var sc_shutdown_hard=0x00001200 // LV2 Hard Reboot
var sc_shutdown_soft=0x00000200 // LV2 Soft Reboot

// sys_fs_mkdir Parameters
var sc_sys_fs_mkdir=0x0000032B;
var sc_fs_mode=0x00000100;// CELL_FS_O_CREAT

// sys_ss_get_open_psid Parameters
var sc_sys_ss_get_open_psid=0x00000368;


var sc_sys_fs_open=0x00000321;
var open_path=0x8A000000;
var open_flag_read=0x00000000;
var open_flag_create=0x00000241;
var open_flag_create_append=0x441;
var open_fd=0x00000000;
var open_size_default=0x00000140;
var open_mode=0x8A0000D0;
var open_arg=0x00000000;

var sc_sys_fs_read=0x00000322;
var read_fd=0x00000000;
var read_buf=0x8A000100;
var read_nbytes=0x00000140;
var read_nread=0x8A000000;

var sc_sys_fs_write=0x00000323;
var write_fd=0x00000000;
var write_buf=0x8A000100;
var write_nbytes=0x00000140;
var write_nwrite=0x8A000100;

var sc_sys_fs_close=0x00000324;

var sys_fs_opendir=0x00000325;
var sc_opendir_path;
var sc_opendir_fd;

var sys_fs_readdir=0x00000326;
var sc_readdir_fd;
var sc_readdir_path;
var sc_readdir_nread;

var sys_fs_closedir=0x00000327;
var sc_closedir_fd;

// sys_fs_chmod Parameters
var sc_sys_fs_chmod=0x00000342;
var sc_chmod_arg=0x00000FFF;
//var sc_chmod_400=0x00000F00;
//var sc_chmod_640=0x00000FA0;
//var sc_chmod_660=0x00000FB0;
var sc_chmod_700=0x00000FC0;
var sc_chmod_701=0x00000FC1;
var sc_chmod_755=0x00000FED;
var sc_chmod_777=0x00000FFF;

// sys_fs_chown Parameters
var sc_sys_fs_chown=0x00000343;
var sc_chown_arg=0x00000000;
var sc_chown_0=0x00000000;

// sys_fs_rename Parameters
var sc_sys_fs_rename=0x0000032C;

// sys_fs_rmdir Parameters
var sc_sys_fs_rmdir=0x0000032D;

// sys_fs_symbolic_link Parameters
var sc_sys_fs_symbolic_link=0x00000341;

// sys_fs_link Parameters
var sc_sys_fs_link=0x0000032A;

// sys_fs_unlink Parameters
var sc_sys_fs_unlink=0x0000032E;

// sys_fs_mapped_allocate Parameters
var sc_sys_fs_mapped_allocate=0x0000034D;
var fs_mapped_allocate_arg1=0x00000000;
var fs_mapped_allocate_arg2=0x00000000;
var fs_mapped_allocate_arg3=0x8A000000;

// sys_fs_mapped_free Parameters
var sc_sys_fs_mapped_free=0x0000034E;
var fs_mapped_free_arg1=0x00000000;
var fs_mapped_free_arg2=0x8A000500;

// sys_fs_get_fs_info Parameters
var sc_sys_fs_get_fs_info=0x0000034C;
var fs_get_fs_info_arg1=0x8A000000;
var fs_get_fs_info_arg2=0x8A001000;
var fs_get_fs_info_buffer=0x8A002000;
var fs_get_fs_info_dump_size=0x10000;

// sys_fs_get_mount_info Parameters
var sc_sys_fs_get_mount_info=0x0000034A;
var fs_get_mount_info_arg1=0x8A001000;
var fs_get_mount_info_arg2=0x00000000;
var fs_get_mount_info_arg3=0x8A002000;

// sys_fs_mount Parameters
// r3 = CELL_FS_UTILITY:HDD1
// r4 = CELL_FS_SIMPLEFS
// r5 = /dev_hdd1
// r6-r10 = 0
var sc_sys_fs_mount=0x00000345;
var fs_mount_device_name=0x00000004;
var fs_mount_filesystem=0x00000000;
var fs_mount_device_path="/dev_blind/";
var fs_mount_arg4=0x00000000;
var fs_mount_write_protection=0x00000001;
var fs_mount_write_protection_off=0x00000000;
var fs_mount_write_protection_on=0x00000001;
var fs_mount_arg6=0x00000000;
var fs_mount_arg7=0x00000000;
var fs_mount_arg8=0x00000000;

// sys_fs_unmount Parameters
var sc_sys_fs_unmount=0x00000346;
var fs_unmount_path=0x8A001000;
var fs_unmount_arg2=0x00000000;
var fs_unmount_arg3=0x00000000;

// sys_fs_newfs Parameters
var sc_sys_fs_newfs=0x00000344;
var fs_newfs_device_name=0x8A0000000;
var fs_newfs_arg2=0x8A0000100;
var fs_newfs_arg3=0x8A000200;

// sys_storage_get_device_info Parameters
// int sys_storage_get_device_info(uint64_t device, uint8_t *buffer)
// buffer[40]=total sectors,buffer[48]=sector size,buffer[53]=writable
var sc_sys_storage_get_device_info=0x00000261;
var storage_get_device_info_device=0x00000007;// hdd default
var storage_get_device_info_buffer_ptr=0x8A0000000;// returns id
var storage_get_device_info_arg3=0x00000000;// unk
var storage_get_device_info_arg4=0x00000000;// unk

// sys_storage_report_devices  Parameters
var sc_sys_storage_report_devices=0x00000263;
var storage_report_devices_arg1_ptr=0x8C000000;// contains 0
var storage_report_devices_arg2=0x00000000;
var storage_report_devices_arg3_ptr=0x8A0000000;// uses return id from sys_storage_get_device_info
var storage_report_devices_arg4=0x8A000100;

// sys_storage_open Parameters
var sc_sys_storage_open=0x00000258;
var sc_sso_mode=0x00000000;
var sc_sso_flags=0x00000000;

// sys_storage_close Parameters
var sc_sys_storage_close=0x00000259;

// sys_storage_read Parameters
var sc_sys_storage_read=0x0000025A;
var sc_ssr_mode=0x00000000;
var sc_ssr_flags=0x00000000;

// sys_storage_write Parameters
var sc_sys_storage_write=0x0000025B;

// sys_fs_stat Parameters
var sc_sys_fs_stat=0x00000328;
var sys_fs_stat_path=0x00000000;
var sys_fs_stat_sb=0x8A000000;

// sys_fs_fstat  Parameters
var sc_sys_fs_fstat =0x00000329;
var sys_fs_fstat_path=0x00000000;
var sys_fs_fstat_sb=0x00000000;

// sys_update_manager Parameters
var update_manager_if=0x0000035F;

// sys_console_write Parameters
var sc_sys_console_write=0x0000018E;
var console_write_ptr=0x80000000;
var console_write_len=0x00100000;

// sys_tty_write Parameters
var sc_sys_tty_write=0x00000193;
var tty_write_char=0x00000000;// pointer
var tty_write_buf=0x00000000;// pointer
var tty_write_size=0x00100000;
var tty_write_pwritelen=0x00000000;// pointer

// sys_tty_read Parameters
var sc_sys_tty_read=0x00000192;
var tty_read_char=0x00000000;// pointer
var tty_read_buf=0x00000000;// pointer
var tty_read_size=0x00100000;
var tty_read_preadlen=0x00000000;// pointer

// sys_process_exit Parameters
var sc_sys_process_exit=0x00000016;
var process_exit_pid=0x01000300;// default VSH

// sys_process_kill Parameters
var sc_sys_process_kill=0x00000013;
var process_kill_pid=0x01000300;// default VSH

// sys_ppu_thread_get_stack_information Parameters
var sc_ppu_thread_get_stack_info=0x00000031;

// sys_ppu_thread_create Parameters
// int sys_ppu_thread_create(sys_ppu_thread_t *thread_id, & void (*entry)(uint64_t), uint64_t arg, 0, int prio, size_t stacksize, uint64_t flags, const char *threadname); 
var sys_ppu_thread_create=0x00000034;
var thread_create_id_ptr=0x89001000;
var thread_create_bin_ptr=0x89001100;// /dev_hdd0/game/PS3XPLOIT/USRDIR/payloads/default.bin
var thread_create_bin_arg=0x00000000;
var thread_create_prio=0x00000000;
var thread_create_stk_size=0x00000000;
var thread_create_flags=0x00000000;
var thread_create_name=0x89001200;// Hello_From_PS3Xploit;

// sys_ppu_thread_exit Parameters
// int sys_ppu_thread_exit(int errorcode)
var sys_ppu_thread_exit=0x00000029;
var thread_exit_arg1=0x00000000;

// sys_ppu_thread_restart Parameters
// int sys_ppu_thread_restart(void); 
var sys_ppu_thread_restart=0x00000033;
var thread_restart_arg1=0x89010000;

// sys_ppu_thread_start Parameters
// int sys_ppu_thread_start(sys_ppu_thread_t thread_id); 
var sys_ppu_thread_start=0x00000035;
var thread_start_arg1=0x0100002A;// VSH Default

// sys_ppu_thread_stop Parameters
// int sys_ppu_thread_stop(sys_ppu_thread_t thread_id); 
var sys_ppu_thread_stop=0x00000032;
var thread_stop_arg1=0x0100002A;// VSH Default

// sys_ppu_thread_get_priority Parameters
var sys_sys_ppu_thread_get_priority=0x00000030;

// sys_sm_ Parameters
var sc_sys_sm_=0x0000017E;

// sys_sm_request_error_log Parameters
var sc_sys_sm_request_error_log=0x00000186;

// sys_sm_request_led Parameters
var sc_sys_sm_request_led=0x00000181;
var request_led_id=0x8C000000;
var request_led_action=0x8C000010;
var request_led_return=0x8C000020;

// sys_sm_control_led Parameters
var sc_sys_sm_control_led =0x00000182;
var control_led_id=0x00000000;
var control_led_id_off=0x00000000;
var control_led_id_green=0x00000001;
var control_led_id_red=0x00000002;
var control_led_id_yellow=0x00000003;
var control_led_action=0x00000000;
var control_led_action_off=0x00000000;
var control_led_action_on=0x00000001;
var control_led_action_blink_fast=0x00000002;
var control_led_action_blink_slow=0x00000003;

// sys_game_get_temperature Parameters
var sc_sys_game_get_temperature =0x0000017F;
var get_temperature=0x00000000;
var get_temperature_cell=0x00000000;
var get_temperature_rsx=0x00000001;
var get_temperature_temp_cell_ptr=0x8C000100;
var get_temperature_temp_rsx_ptr=0x8C000200;

// sys_sm_get_fan_policy Parameters
// sys_sm_get_fan_policy(0, &st, &mode, &fan_speed8, &unknown);
var sc_sys_sm_get_fan_policy=0x00000199;
var get_fan_policy_status=0x8C000000;
var get_fan_policy_state=0x8C000010;
var get_fan_policy_return=0x8C000020;

// sys_sm_set_fan_policy Parameters
// sys_sm_set_fan_policy(0, 2, fan_speed);
var sc_sys_sm_set_fan_policy=0x00000185;
var set_fan_speed=0x000000FF;
var set_fan_speed_30=0x000000FF;
var set_fan_speed_40=0x000000FF;
var set_fan_speed_50=0x000000FF;
var set_fan_speed_60=0x000000FF;
var set_fan_speed_70=0x000000FF;
var set_fan_speed_80=0x000000FF;
var set_fan_speed_90=0x000000FF;
var set_fan_speed_99=0x000000FF;

var set_fan_arg2=0x000000FF;
var set_fan_arg3=0x000000FF;


var sc_sys_ss_utoken_if=0x0000036D;
var sys_ss_utoken_if_packetid=0x00025006;// default value
var sys_ss_utoken_if_packetid_enc=0x00025001;// Encrypt User Token
var sys_ss_utoken_if_packetid_dec=0x00025002;// Decrypt User Token
var sys_ss_utoken_if_packetid_dec_lv2=0x00025003;// (LV2) Decrypt User Token uint8_t out[0xC50], uint64_t size (0xC50)
var sys_ss_utoken_if_packetid_unk_lv2=0x00025004;// (LV2) 
var sys_ss_utoken_if_packetid_enc_lv2=0x00025005;// (LV2) Encrypt User Token uint8 out[0xC50], uint64_t size (0xC50)
var sys_ss_utoken_if_packetid_table_lv2=0x00025006;// (LV2) Retrieve Level 2 Syscall Table 0, uint8 out[size], uint64_t size (0x2000) 
var sys_ss_utoken_if_tokenptr=0x8C000000;
var sys_ss_utoken_if_size=0x00000C50;
var sys_ss_utoken_if_size_lv2=0x00002000;


var sc_sys_rsx_memory_free=0x0000029D;
var sys_rsx_memory_free_mem_ctx_id=0x00000001;

var sc_sys_dbg_get_process_memory_container_information=0x000003BD;
var sys_dbg_gpmci_proc_id=0x00000000;
var sys_dbg_gpmci_dbg_mc_info=0x00000000;
var sys_dbg_gpmci_count=0x00000000;
var sys_dbg_gpmci_proc_id=0x00000000;

var sc_sys_dbg_get_lwcond_information=0x000003B7;
var sys_dbg_get_lwcond_information_pid=0x00000000;
var sys_dbg_get_lwcond_information_id=0x00000000;
var sys_dbg_get_lwcond_information_info_ptr=0x00000000;

var sc_sys_dbg_get_event_flag_information=0x000003CB;
var sys_dbg_get_event_flag_information_pid=0x00000000;
var sys_dbg_get_event_flag_information_event_flag=0x00000000;
var sys_dbg_get_event_flag_information_info_ptr=0x00000000;

var sc_sys_dbg_send_event_flags=0x000003BF;
var sys_dbg_send_event_flags_id=0x00000000;
var sys_dbg_send_event_flags_arg2=0x00000000;
var sys_dbg_send_event_flags_arg3=0x00000000;
var sys_dbg_send_event_flags_arg4=0x00000000;

var sc_sys_dbg_send_event_flags2=0x000003CC;
var sys_dbg_send_event_flags2_id=0x00000000;

var sc_sys_crypto_engine_create=0x000003D0;
var sys_crypto_engine_create_pid=0x00000000;

var sc_sys_crypto_engine_destroy=0x000003D0;
var sys_crypto_engine_destroy_pid=0x00000000;

/* 
int sys_crypto_engine_hasher_prepare(sys_pid_t id, int32_t hash_key_index); 
uses HMAC-SHA1 with key size of 0x14 bytes
keys are generated by VTRM (master)
*/ 
var sc_sys_crypto_engine_hasher_prepare=0x000003D2;
var sys_crypto_engine_hasher_prepare_pid=0x00000000;
var sys_crypto_engine_hasher_prepare_hash_key_index=0x00000000;

/* 
int sys_crypto_engine_hasher_run(sys_pid_t id, const void* data, uint32_t data size);
splits data by chunks of 0x400 bytes max
*/ 
var sc_sys_crypto_engine_hasher_run=0x000003D3;
var sys_crypto_engine_hasher_run_pid=0x00000000;
var sys_crypto_engine_hasher_run_data_ptr=0x8A000100;
var sys_crypto_engine_hasher_run_size=0x00000000;

/* 
int sys_crypto_engine_hasher_get_hash(sys_pid_t id, void* buffer, uint32_t max_buffer_size >= 0x14); 
*/ 
var sc_sys_crypto_engine_hasher_get_hash=0x000003D4;
var sys_crypto_engine_hasher_run_pid=0x00000000;
var sys_crypto_engine_hasher_run_buffer_ptr=0x8A000200;
var sys_crypto_engine_hasher_run_max_buffer_size=0x00000000;

/* 
int sys_crypto_engine_cipher_prepare(sys_pid_t id, int32_t hash_key_index, int32_t mode, int32_t cipher_key_index, const void* iv, uint32_t iv_size);  
Mode: 1:encrypt, 2:decrypt
uses AES-CBC-128, keys are generated by VTRM (master)
*/ 
var sc_sys_crypto_engine_cipher_prepare=0x000003D5;
var sys_crypto_engine_cipher_prepare_pid=0x00000000;
var sys_crypto_engine_cipher_prepare_hash_key_index=0x00000000;
var sys_crypto_engine_cipher_prepare_mode=0x00000000;
var sys_crypto_engine_cipher_prepare_cipher_key_index=0x00000000;
var sys_crypto_engine_cipher_prepare_iv_ptr=0x8A000300;
var sys_crypto_engine_cipher_prepare_iv_size=0x00000000;

/* 
int sys_crypto_engine_cipher_run(sys_pid_t id, const void* input, void* output, uint32_t data_size);
splits data by chunks of 0x400 bytes max
*/ 
var sc_sys_crypto_engine_cipher_run=0x000003D6;
var sys_crypto_engine_cipher_run_pid=0x00000000;
var sys_crypto_engine_cipher_run_input_ptr=0x8A000400;
var sys_crypto_engine_cipher_run_output_ptr=0x8C000400;
var sys_crypto_engine_cipher_run_data_size=0x00000000;

/* 
int sys_crypto_engine_cipher_get_hash(sys_pid_t id, void* buffer, uint32_t max_buffer_size >= 0x14); 
*/ 
var sc_sys_crypto_engine_cipher_get_hash=0x000003D7;
var sys_crypto_engine_cipher_get_hash_pid=0x00000000;
var sys_crypto_engine_cipher_get_hash_buffer_ptr=0x8A000800;
var sys_crypto_engine_cipher_get_hash_max_buffer_size=0x00000000;

/* 
int sys_crypto_engine_random_generate(void* buffer, uint32_t max_buffer_size >= 0x10
*/ 
var sc_sys_crypto_engine_random_generate=0x000003D8;
var sys_crypto_engine_random_generate_buffer_ptr=0x00000000;
var sys_crypto_engine_random_generate_max_buffer_size=0x00000000;

/* 
returns Console Type, syscall(985,uint64_t * type)
1=CEX  2=DEX  3=TOOL
*/ 
var sc_sys_dbg_get_console_type=0x000003D9;
var sys_dbg_get_console_type_ptr=0x8A000100;

/* 
syscall(988,int i,0) , i <0x10 (1 or 2 or 4 or 8 or 0x10) 
*/ 
var sc_sys_dbg_ppu_exception_handler=0x000003DC;
var sys_dbg_ppu_exception_handler_arg1=0x00000001;
//var sys_dbg_ppu_exception_handler_arg1=0x00000002;
//var sys_dbg_ppu_exception_handler_arg1=0x00000004;
//var sys_dbg_ppu_exception_handler_arg1=0x00000008;
//var sys_dbg_ppu_exception_handler_arg1=0x00000010;
var sys_dbg_ppu_exception_handler_arg2=0x00000000;

/* 
syscall(989, (spu) thread_id ,out:uint8[0x20])
*/ 
var sc_sys_dbg_spu_unk1=0x000003DD;
var sys_dbg_spu_unk1_thread_id=0x00000000;
var sys_dbg_spu_unk1_out=0x00000000;


// int sys_net_open_dump ( int len, int flags )
var sc_sys_net_open_dump=0x000002CD;
var sys_net_open_dump_len=0x01000000;
var sys_net_open_dump_flags=0x00000000;

// int sys_net_read_dump ( int id, void *buf, int len, int *pflags )
var sc_sys_net_read_dump=0x000002CE;
var sys_net_read_dump_id=0x00000001;
var sys_net_read_dump_buf_ptr=0x8A000100;
var sys_net_read_dump_id_len=0x01000000;
var sys_net_read_dump_id_pflags_ptr=0x8A000000;

// int sys_net_write_dump ( char *buf )
var sc_sys_net_write_dump=0x000002D0;
var sys_net_write_dump_buf_ptr=0x8B000000;

// int sys_net_close_dump ( int id, int *pflags )
var sc_sys_net_close_dump=0x000002CF;
var sys_net_close_dump_id=0x00000001;
var sys_net_close_dump_pflags_ptr=0x8A000020;

// syscall(387, uint8_t platform_info[0x18])
var sc_sys_sm_get_platform_info=0x00000183;
var sys_sm_get_platform_info_ptr=0x8A000000;
var sys_sm_get_platform_info_size=0x00000020;




