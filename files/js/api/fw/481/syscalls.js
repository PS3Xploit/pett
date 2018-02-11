/*
   System Calls PS3 DEX
*/

// Thanks to PSDevWiki for info :)
// http://www.psdevwiki.com/ps3/LV2_Functions_and_Syscalls#process_socket_service_syscalls



sys_process_v481D =
{
	sys_process_getpid: 0x001, // sys_pid_t sys_process_getpid(void);
	sys_process_wait_for_child: 0x002, // root / 3 params: sys_pid_t, uint32_t *status, unk=0
	sys_process_exit : 0x003, // int sys_process_exit(int)
	sys_process_get_status : 0x004, // dbg / int sys_process_get_status(sys_pid_t pid)
	sys_process_detach_child : 0x005, // dbg / 1 param
	sys_process_get_number_of_object : 0x00C, // int sys_process_get_number_of_object(uint32_t object_type, uint32_t* count);
	sys_process_get_id : 0x00D, // int sys_process_get_id(uint32_t object, uint32_t * buff, size_t size, size_t * set_size);
	sys_process_is_spu_lock_line_reservation_address : 0x00E, // int sys_process_is_spu_lock_line_reservation_address(sys_addr_t addr, uint64_t flags);
	sys_process_getppid : 0x012, // sys_pid_t sys_process_getppid(void);
	sys_process_kill : 0x013, // int sys_process_kill(sys_pid_t pid);
	_sys_process_spawn : 0x015, // dbg / int sys_process_spawn(int *pid, int prio, uint64_t flags, void *stack, int stack_size, int unk1, int unk2)
	sys_process_exit : 0x016, // void sys_process_exit(int error_code,0,0)
	sys_process_wait_for_child2 : 0x017, // dbg / 6 params
	unk_0x018 : 0x018, // dbg / 8 params, spawns a self
	sys_process_get_sdk_version : 0x019, // 2 params :sys_pid_t pid, uint8_t outbuf[4]
	_sys_process_exit as well : 0x01A, // 4 params (calls sys_process_exit)
	unk_0x01B : 0x01B, // dbg / 8 params, spawns a self
	_sys_process_get_number_of_object : 0x01C, // root / int sys_process_get_number_of_object(uint32_t object)
	sys_process_get_id : 0x01D, // root / same as syscall13 just with root flag check, same input etc.
	
	/*
	00 01 02 03 04 05 06 07 08 09 0A 0B 0C 0D 0E 0F
	00000000 01 < -------Title ID------- > 00 00 00 00 00 00  �BLES80608......
	00000010 < ---ExtraLoadFlag--- > < load HUDRSX libProf >  ................
	00000020 .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..  ................
	00000030 .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..  ................
	@0x18 can load libgpad.sprx from app_home
	*/
	_sys_process_get_paramsfo : 0x01E, // int _sys_process_get_paramsfo(uint8_t buffer[0x40]); (more info: #sys_process_get_paramsfo)
	
	sys_process_get_ppu_guid : 0x01F // sys_addr_t sys_process_get_ppu_guid(void);
}


sys_ppu_thread_v481D =
{
	sys_ppu_thread_exit: 0x029, // int sys_ppu_thread_exit(int errorcode)
	sys_ppu_thread_yield: 0x02B, // void sys_ppu_thread_yield(void);
	sys_ppu_thread_join: 0x02C, // int sys_ppu_thread_join(sys_ppu_thread_t thread_id, uint64_t * vptr);
	sys_ppu_thread_detach: 0x02D, // int sys_ppu_thread_detach(sys_ppu_thread_t thread_id);
	sys_ppu_thread_get_join_state: 0x02E, // void sys_ppu_thread_get_join_state(int *isjoinable);
	
	//Flags are checked when 3071 > prio < 3199
	sys_ppu_thread_set_priority: 0x02F, // dbg / int sys_ppu_thread_set_priority(sys_ppu_thread_t thread_id, int prio);
	
	sys_ppu_thread_get_priority: 0x030, // int sys_ppu_thread_get_priority(sys_ppu_thread_t thread_id, int *prio);
	sys_ppu_thread_get_stack_information: 0x031, // int sys_ppu_thread_get_stack_information(sys_ppu_thread_stack_t * info);
	sys_ppu_thread_stop: 0x032, // root / int sys_ppu_thread_stop(sys_ppu_thread_t thread_id);
	sys_ppu_thread_restart: 0x033, // root / int sys_ppu_thread_restart(void);
	sys_ppu_thread_create: 0x034, // dbg / int sys_ppu_thread_create(sys_ppu_thread_t *thread_id, & void (*entry)(uint64_t), uint64_t arg, 0, int prio, size_t stacksize, uint64_t flags, const char *threadname);
	sys_ppu_thread_start: 0x035, // int sys_ppu_thread_start(sys_ppu_thread_t thread_id);
	unk_0x036: 0x036, // root / syscall(0x036, 0x109/0x111, out: uint8[4]), pu_thread get (kernel) allocation information
	unk_0x037: 0x037, // root / syscall(0x037, 0x111, 0> int <0x100), pu_thread set (kernel) allocation? information
	sys_ppu_thread_rename: 0x038, // int sys_ppu_thread_rename(sys_ppu_thread_t thread_id, const char *name);
	sys_ppu_thread_recover_page_fault: 0x039, // int sys_ppu_thread_recover_page_fault(sys_ppu_thread_t thread_id);
	sys_ppu_thread_get_page_fault_context: 0x03A // int sys_ppu_thread_get_page_fault_context(sys_ppu_thread_t thread_id, sys_ppu_thread_icontext_t * ctxp);
}


sys_trace_v481D =
{
	sys_trace_create: 0x03C, // 
	sys_trace_start: 0x03D, // 
	sys_trace_stop: 0x03E, // 
	sys_trace_update_top_index: 0x03F, // 
	sys_trace_destroy: 0x040, // 
	sys_trace_drain: 0x041, // 
	sys_trace_attach_process: 0x042, // 
	sys_trace_allocate_buffer: 0x043, // 
	sys_trace_free_buffer: 0x044, // 
	sys_trace_create2: 0x045, // 
	sys_trace_create2_in_cbepm: 0x04D, // 
	sys_trace_: 0x04E, // 
}


sys_timer_v481D =
{
	sys_timer_create: 0x046, // int sys_timer_create(sys_timer_t * timer_id);
	sys_timer_destroy: 0x047, // int sys_timer_destroy(sys_timer_t timer_id);
	sys_timer_get_information: 0x048, // int sys_timer_get_information(sys_timer_t timer_id, sys_timer_information_t * info);
	sys_timer_start: 0x049, // int sys_timer_start(sys_timer_t timer_id, system_time_t base_time, usecond_t period);
	sys_timer_stop: 0x04A, // int sys_timer_stop(sys_timer_t timer_id);
	sys_timer_connect_event_queue: 0x04B, // int sys_timer_connect_event_queue(sys_timer_t timer_id, sys_event_queue_t queue_id, uint64_t name, uint64_t data1, uint64_t data2);
	sys_timer_disconnect_event_queue: 0x04C, // int sys_timer_disconnect_event_queue(sys_timer_t timer_id);
	sys_timer_usleep: 0x08D, // int sys_timer_usleep(usecond_t sleep_time);
	sys_timer_sleep: 0x08E, // int sys_timer_sleep(second_t sleep_time);
	aaaaaa: 0x000, // 
}


sys_interrupt_v481D =
{
	sys_interrupt_tag_create: 0x050, // int sys_interrupt_tag_create(sys_interrupt_tag_t * intrtag, sys_irqoutlet_id_t irq, sys_hw_thread_t hwthread);
	sys_interrupt_tag_destroy: 0x051, // int sys_interrupt_tag_destroy(sys_interrupt_tag_t intrtag);
	sys_interrupt_thread_establish: 0x054, // int sys_interrupt_thread_establish(sys_interrupt_thread_handle_t * ih, sys_interrupt_tag_t intrtag, uint64_t intrthread, uint64_t arg1, uint64_t arg2);
	sys_interrupt_thread_eoi: 0x058, // void sys_interrupt_thread_eoi(void);
	sys_interrupt_thread_disestablish: 0x059, // int sys_interrupt_thread_disestablish(sys_interrupt_thread_handle_t ih);
}


sys_event_v481D =
{
	sys_event_flag_create: 0x052, // int sys_event_flag_create(sys_event_flag_t * id, sys_event_flag_attribute_t * attr, uint64_t init);
	sys_event_flag_destroy: 0x053, // int sys_event_flag_destroy(sys_event_flag_t id);
	sys_event_flag_wait: 0x055, // int sys_event_flag_wait(sys_event_flag_t id, uint64_t bitptn, uint32_t mode, uint64_t * result, usecond_t timeout);
	sys_event_flag_trywait: 0x056, // int sys_event_flag_trywait(sys_event_flag_t id, uint64_t bitptn, uint32_t mode, uint64_t * result);
	sys_event_flag_set: 0x057, // int sys_event_flag_set(sys_event_flag_t id, uint64_t bitptn);
	sys_event_flag_clear: 0x076, // int sys_event_flag_clear(sys_event_flag_t id, uint64_t bitptn);
	unk_0x077: 0x077, // root / int syscall(119, uint64_t *real_time_clock);
	sys_event_queue_create: 0x080, // int sys_event_queue_create(sys_event_queue_t * equeue_id, sys_event_queue_attribute_t * attr, sys_ipc_key_t event_queue_key, int size);
	sys_event_queue_destroy: 0x081, // int sys_event_queue_destroy(sys_event_queue_t equeue_id, int mode);
	sys_event_queue_receive: 0x082, // int sys_event_queue_receive(sys_event_queue_t equeue_id, sys_event_t * event, usecond_t timeout);
	sys_event_queue_tryreceive: 0x083, // int sys_event_queue_tryreceive(sys_event_queue_t equeue_id, sys_event_t * event_array, int size, int *number);
	sys_event_flag_cancel: 0x084, // int sys_event_flag_cancel(sys_event_flag_t id, int *num);
	sys_event_queue_drain: 0x085, // int sys_event_queue_drain(sys_event_queue_t equeue_id);
	sys_event_port_create: 0x086, // int sys_event_port_create(sys_event_port_t * eport_id, int port_type, uint64_t name);
	sys_event_port_destroy: 0x087, // int sys_event_port_destroy(sys_event_port_t eport_id);
	sys_event_port_connect_local: 0x088, // int sys_event_port_connect_local(sys_event_port_t event_port_id, sys_event_queue_t event_queue_id);
	sys_event_port_disconnect: 0x089, // int sys_event_port_disconnect(sys_event_port_t event_port_id);
	sys_event_port_send: 0x08A, // int sys_event_port_send(sys_event_port_t eport_id, unint64_t data1, uint64_t data2, uint64_t data3);
	sys_event_flag_get: 0x08B, // int sys_event_flag_get(sys_event_flag_t id, uint64_t * bitptn);
	sys_event_port_connect_ipc: 0x08C, // int sys_event_port_connect_ipc(sys_event_port_t eport_id, sys_ipc_key_t event_queue_key);
}


sys_semaphore_v481D =
{
	sys_semaphore_create: 0x05A, // int sys_semaphore_create(sys_semaphore_t * sem, sys_semaphore_attribute_t * attr, sys_semaphore_value_t initial_val, sys_semaphore_value_t max_val);
	sys_semaphore_destroy: 0x05B, // int sys_semaphore_destroy(sys_semaphore_t sem);
	sys_semaphore_wait: 0x05C, // int sys_semaphore_wait(sys_semaphore_t sem, usecond_t timeout);
	sys_semaphore_trywait: 0x05D, // int sys_semaphore_trywait(sys_semaphore_t sem);
	sys_semaphore_post: 0x05E, // int sys_semaphore_post(sys_semaphore_t sem, sys_semaphore_value_t val);
	sys_semaphore_get_value: 0x072, // int sys_semaphore_get_value(sys_semaphore_t sem, sys_semaphore_value_t * val);
	unk_0x073: 0x073, // 4 params
	unk_0x074: 0x074, // 3 params
	unk_0x075: 0x075, // 1 params : sys_lwmutex_t *lwmutex
}


sys_lwmutex_v481D =
{
	sys_lwmutex_create: 0x05F, // int sys_lwmutex_create(sys_lwmutex_t *lwmutex, sys_lwmutex_attribute_t *attr)
	sys_lwmutex_destroy: 0x060, // int sys_lwmutex_destroy(sys_lwmutex_t *lwmutex)
	sys_lwmutex_lock: 0x061, // int sys_lwmutex_lock(sys_lwmutex_t *lwmutex, usecond_t timeout)
	sys_lwmutex_trylock: 0x062, // int sys_lwmutex_trylock(sys_lwmutex_t *lwmutex)
	sys_lwmutex_unlock: 0x063, // int sys_lwmutex_unlock(sys_lwmutex_t *lwmutex)
}


sys_mutex_v481D =
{
	sys_mutex_create: 0x064, // int sys_mutex_create(sys_mutex_t * mutex_id, sys_mutex_attribute_t * attr);
	sys_mutex_destroy: 0x065, // int sys_mutex_destroy(sys_mutex_t mutex_id);
	sys_mutex_lock: 0x066, // int sys_mutex_lock(sys_mutex_t mutex_id, usecond_t timeout);
	sys_mutex_trylock: 0x067, // int sys_mutex_trylock(sys_mutex_t mutex_id);
	sys_mutex_unlock: 0x068, // int sys_mutex_unlock(sys_mutex_t mutex_id);
}


sys_cond_v481D =
{
	sys_cond_create: 0x069, // int sys_cond_create(sys_cond_t * cond_id, sys_mutex_t mutex_id, sys_cond_attribute_t * attr);
	sys_cond_destroy: 0x06A, // int sys_cond_destroy(sys_cond_t cond_id);
	sys_cond_wait: 0x06B, // int sys_cond_wait(sys_cond_t cond_id, usecond_t timeout);
	sys_cond_signal: 0x06C, // int sys_cond_signal(sys_cond_t cond_id);
	sys_cond_signal_all: 0x06D, // int sys_cond_signal_all(sys_cond_t cond_id);
	sys_cond_signal_to: 0x06E, // int sys_cond_signal_to(sys_cond_t cond_id, sys_ppu_thread_t thread);
}


sys_lwcond_v481D =
{
	sys_lwcond_create: 0x06F, // int sys_lwcond_create(sys_lwcond_t *lwcond, sys_lwmutex_t *lwmutex, sys_lwcond_attribute_t *attr)
	sys_lwcond_destroy: 0x070, // int sys_lwcond_destroy(sys_lwcond_t *lwcond)
	sys_lwcond_queue_wait: 0x071, // 3 params
}


sys_rwlock_v481D =
{
	sys_rwlock_create: 0x078, // int sys_rwlock_create(sys_rwlock_t * rw_lock_id, sys_rwlock_attribute_t * attr);
	sys_rwlock_destroy: 0x079, // int sys_rwlock_destroy(sys_rwlock_t rw_lock_id);
	sys_rwlock_rlock: 0x07A, // int sys_rwlock_rlock(sys_rwlock_t rw_lock_id, usecond_t timeout);
	sys_rwlock_tryrlock: 0x07B, // int sys_rwlock_tryrlock(sys_rwlock_t rw_lock_id);
	sys_rwlock_runlock: 0x07C, // int sys_rwlock_runlock(sys_rwlock_t rw_lock_id);
	sys_rwlock_wlock: 0x07D, // int sys_rwlock_wlock(sys_rwlock_t rw_lock_id, usecond_t timeout);
	sys_rwlock_trywlock: 0x07E, // int sys_rwlock_trywlock(sys_rwlock_t rw_lock_id);
	sys_rwlock_wunlock: 0x07F, // int sys_rwlock_wunlock(sys_rwlock_t rw_lock_id);
	sys_rwlock_trywlock: 0x094, // int sys_rwlock_trywlock(sys_rwlock_t rw_lock_id);
}


sys_time_v481D =
{
	sys_time_set_timezone: 0x08F, // int sys_time_set_timezone(int timezone, int summertime)
	sys_time_get_timezone: 0x090, // int sys_time_get_timezone(int *timezone, int *summertime)
	sys_time_get_current_time: 0x091, // int sys_time_get_current_time(sys_time_sec_t * sec, sys_time_nsec_t * nsec);
	sys_time_set_current_time: 0x092, // int sys_time_set_current_time(uint64_t sec, uint64_t nsec);
	sys_time_get_timebase_frequency: 0x093, // uint64_t sys_time_get_timebase_frequency(void);
}


sys_spu_sys_raw_spu_v481D =
{
	sys_raw_spu_create_interrupt_tag: 0x096, // int sys_raw_spu_create_interrupt_tag(sys_raw_spu_t id,sys_class_id_t class_id, sys_hw_thread_t hwthread, sys_interrupt_tag_t *intrtag)
	sys_raw_spu_set_int_mask: 0x097, // int sys_raw_spu_set_int_mask(sys_raw_spu_t id, sys_class_id_t class_id, uint64_t mask)
	sys_raw_spu_get_int_mask: 0x098, // int sys_raw_spu_get_int_mask(sys_raw_spu_t id, sys_class_id_t class_id, uint64_t *mask)
	sys_raw_spu_set_int_stat: 0x099, // int sys_raw_spu_set_int_stat(sys_raw_spu_t id, sys_class_id_t class_id, uint64_t stat)
	sys_raw_spu_get_int_stat: 0x09A, // int sys_raw_spu_get_int_stat(sys_raw_spu_t id, sys_class_id_t class_id, uint64_t *stat)
	sys_spu_image_get_information: 0x09B, // int sys_spu_image_get_information?(sys_spu_image_t *img, out:uint[4],out:uint[4])
	sys_spu_image_open: 0x09C, // int sys_spu_image_open(sys_spu_image_t *img, const char *path)
	sys_spu_image_import: 0x09D, // int sys_spu_image_import(sys_spu_image_t *img, const void *src, uint32_t type)
	sys_spu_image_close: 0x09E, // int sys_spu_image_close(sys_spu_image_t *img);
	sys_raw_spu_load: 0x09F, // 3 Params ( sys_spu_image_t * img, sys_addr_t alloc_addr, int size? ), needs much more proper information
	sys_raw_spu_create: 0x0A0, // int sys_raw_spu_create(sys_raw_spu_t *id, sys_raw_spu_attribute_t *attr)
	sys_raw_spu_destroy: 0x0A1, // int sys_raw_spu_destroy(sys_raw_spu_t id)
	sys_raw_spu_read_puint_mb: 0x0A3, // int sys_raw_spu_read_puint_mb(sys_raw_spu_t id, uint32_t *value)
	sys_spu_thread_get_exit_status: 0x0A5, // int sys_spu_thread_get_exit_status(sys_spu_thread_t id, int *status)
	sys_spu_thread_set_argument: 0x0A6, // int sys_spu_thread_set_argument(sys_spu_thread_t id, sys_spu_thread_argument_t *arg)
	sys_spu_thread_group_start_on_exit: 0x0A7, // 
	sys_spu_initialize: 0x0A9, // int sys_spu_initialize(unsigned int max_usable_spu, unsigned int max_raw_spu)
	sys_spu_thread_group_create: 0x0AA, // int sys_spu_thread_group_create(sys_spu_thread_group_t *id, unsigned int num, int prio, sys_spu_thread_group_attribute_t *attr)
	sys_spu_thread_group_destroy: 0x0AB, // int sys_spu_thread_group_destroy(sys_spu_thread_group_t id)
	sys_spu_thread_initialize: 0x0AC, // int sys_spu_thread_initialize(sys_spu_thread_t *thread,sys_spu_thread_group_t group,uint spu_num,sys_spu_image_t *img,sys_spu_thread_attribute_t *attr,sys_spu_thread_argument_t *arg)
	sys_spu_thread_group_start: 0x0AD, // int sys_spu_thread_group_start(sys_spu_thread_group_t id)
	sys_spu_thread_group_suspend: 0x0AE, // int sys_spu_thread_group_suspend(sys_spu_thread_group_t id)
	sys_spu_thread_group_resume: 0x0AF, // int sys_spu_thread_group_resume(sys_spu_thread_group_t id)
	sys_spu_thread_group_yield: 0x0B0, // int sys_spu_thread_group_yield(sys_spu_thread_group_t id)
	sys_spu_thread_group_terminate: 0x0B1, // int sys_spu_thread_group_terminate(sys_spu_thread_group_t id, int value)
	sys_spu_thread_group_join: 0x0B2, // int sys_spu_thread_group_join(sys_spu_thread_group_t gid, int *cause, int *status)
	sys_spu_thread_group_set_priority: 0x0B3, // int sys_spu_thread_group_set_priority(sys_spu_thread_group_t id, int priority)
	sys_spu_thread_group_get_priority: 0x0B4, // int sys_spu_thread_group_get_priority(sys_spu_thread_group_t id, int *priority)
	sys_spu_thread_write_ls: 0x0B5, // int sys_spu_thread_write_ls(sys_spu_thread_t id, uint32_t address, uint64_t value, size_t type)
	sys_spu_thread_read_ls: 0x0B6, // int sys_spu_thread_read_ls(sys_spu_thread_t id, uint32_t address, uint64_t *value, size_t type)
	sys_spu_thread_write_snr: 0x0B8, // int sys_spu_thread_write_snr(sys_spu_thread_t id, int number, uint32_t value)
	sys_spu_thread_group_connect_event: 0x0B9, // int sys_spu_thread_group_connect_event(sys_spu_thread_group_t id, sys_event_queue_t eq, sys_event_type_t et)
	sys_spu_thread_group_disconnect_event: 0x0BA, // int sys_spu_thread_group_disconnect_event(sys_spu_thread_group_t id, sys_event_type_t et)
	sys_spu_thread_set_spu_cfg: 0x0BB, // int sys_spu_thread_set_spu_cfg(sys_spu_thread_t id, uint64_t value)
	sys_spu_thread_get_spu_cfg: 0x0BC, // int sys_spu_thread_get_spu_cfg(sys_spu_thread_t id, uint64_t *value)
	sys_spu_thread_write_spu_mb: 0x0BE, // int sys_spu_thread_write_spu_mb(sys_spu_thread_t id, uint32_t value);
	sys_spu_thread_connect_event: 0x0BF, // int sys_spu_thread_connect_event(sys_spu_thread_t id, sys_event_queue_t eq, sys_event_type_t et, uint8_t spup)
	sys_spu_thread_disconnect_event: 0x0C0, // int sys_spu_thread_disconnect_event(sys_spu_thread_t id, sys_event_type_t et, uint8_t spup)
	sys_spu_thread_bind_queue: 0x0C1, // int sys_spu_thread_bind_queue(sys_spu_thread_t id,sys_event_queue_t spuq,uint32_t spuq_num)
	sys_spu_thread_unbind_queue: 0x0C2, // int sys_spu_thread_unbind_queue(sys_spu_thread_t id, uint32_t spuq_num)
	sys_raw_spu_set_spu_cfg: 0x0C4, // int sys_raw_spu_set_spu_cfg(sys_raw_spu_t id, uint32_t value)
	sys_raw_spu_get_spu_cfg: 0x0C5, // int sys_raw_spu_get_spu_cfg(sys_raw_spu_t id, uint32_t *value)
	sys_spu_thread_recover_page_fault: 0x0C6, // int sys_spu_thread_recover_page_fault(sys_spu_thread_t id)
	sys_raw_spu_recover_page_fault: 0x0C7, // int sys_raw_spu_recover_page_fault(sys_raw_spu_t id)
	unk_0x0C8: 0x0C8, // 
	unk_0x0C9: 0x0C9, // 
	unk_0x0CA: 0x0CA, // 
	unk_0x0CB: 0x0CB, // 
	unk_0x0D1: 0x0D1, // 
	unk_0x0D2: 0x0D2, // 
	unk_0x0D3: 0x0D3, // 
	unk_0x0D4: 0x0D4, // 
	unk_0x0D5: 0x0D5, // 
	unk_0x0D6: 0x0D6, // 
	sys_dbg_mat_set_condition: 0x0D7, // int sys_dbg_mat_set_condition(sys_addr_t,int)
	sys_dbg_mat_get_condition: 0x0D8, // int sys_dbg_mat_get_condition(sys_addr_t,int*)
	unk_0x0D9: 0x0D9, // 
	unk_0x0DA: 0x0DA, // 
	unk_0x0DB: 0x0DB, // 
	unk_0x0E2: 0x0E2, // 
	sys_isolated_spu_create: 0x0E6, // int sys_isolated_spu_create(sys_raw_spu_t *id, uint8_t *source_spe, in?: args?,0,0,0)
	sys_isolated_spu_destroy: 0x0E7, // int sys_isolated_spu_destroy(sys_raw_spu_t id)
	sys_isolated_spu_start: 0x0E8, // int sys_isolated_spu_start(sys_raw_spu_t id)
	sys_isolated_spu_create_interrupt_tag: 0x0E9, // int sys_isolated_spu_create_interrupt_tag(sys_raw_spu_t id, uint32_t class_id, uint32_t hwthread, sys_interrupt_tag_t *intrtag)
	sys_isolated_spu_set_int_mask: 0x0EA, // int sys_isolated_spu_set_int_mask(sys_raw_spu_t id, uint32_t class_id, uint64_t mask)
	sys_isolated_spu_get_int_mask: 0x0EB, // int sys_isolated_spu_get_int_mask(sys_raw_spu_t id, uint32_t class_id, uint64_t *mask)
	sys_isolated_spu_set_int_stat: 0x0EC, // int sys_isolated_spu_set_int_stat(sys_raw_spu_t id, uint32_t class_id, uint64_t stat)
	sys_isolated_spu_get_int_stat: 0x0ED, // int sys_isolated_spu_get_int_stat(sys_raw_spu_t id, uint32_t class_id, uint64_t * stat)
	sys_isolated_spu_set_spu_cfg: 0x0EE, // int sys_isolated_spu_set_spu_cfg(sys_spu_thread_t id, uint64_t value)
	sys_isolated_spu_get_spu_cfg: 0x0EF, // int sys_isolated_spu_get_spu_cfg(sys_spu_thread_t id, uint64_t * value)
	sys_isolated_spu_read_puint_mb: 0x0F0, // int sys_isolated_spu_read_puint_mb(sys_raw_spu_t id, uint32_t * value)
	sys_spu_thread_group_system_set_next_group: 0x0F4, // int sys_spu_thread_group_system_set_next_group(void)
	sys_spu_thread_group_system_unset_next_group: 0x0F5, // int sys_spu_thread_group_system_unset_next_group(void)
	sys_spu_thread_group_system_set_switch_group: 0x0F6, // int sys_spu_thread_group_system_set_switch_group(void)
	sys_spu_thread_group_system_unset_switch_group: 0x0F7, // int sys_spu_thread_group_system_unset_switch_group(void)
	sys_spu_thread_group_1: 0x0F8, // 5 Params
	sys_spu_thread_group_2: 0x0F9, // int sc249(sys_spu_thread_group_t group)
	sys_spu_thread_group_set_cooperative_victims: 0x0FA, // 2 Params
	sys_spu_thread_group_connect_event_all_threads: 0x0FB, // int sys_spu_thread_group_connect_event_all_threads(sys_spu_thread_group_t id, sys_event_queue_t eq, uint64_t req, uint8_t *spup)
	sys_spu_thread_group_disconnect_event_all_threads: 0x0FC, // int sys_spu_thread_group_disconnect_event_all_threads(sys_spu_thread_group_t id, uint8_t spup)
	sys_spu_thread_group: 0x0FD, // 2 Params( sys_spu_thread_group_t id, out:uint8[0x40])
	sys_spu_thread_group_log: 0x0FE, // int sys_spu_thread_group_log(int command, int *stat)
	sys_spu_image_open_by_fd: 0x104, // int sys_spu_image_open_by_fd(sys_spu_image_t *img, int fd, off64_t offset)
}


sys_vm_sys_memory_sys_mmapper_v481D =
{
	sys_vm_memory_map: 0x12C, // int sys_vm_memory_map(size_t vsize, size_t psize, sys_memory_container_t container, uint64_t flag, uint64_t policy, sys_addr_t * addr);
	sys_vm_unmap: 0x12D, // int sys_vm_unmap(sys_addr_t addr);
	sys_vm_append_memory: 0x12E, // int sys_vm_append_memory(sys_addr_t addr, size_t size);
	sys_vm_return_memory: 0x12F, // int sys_vm_return_memory(sys_addr_t addr, size_t size);
	sys_vm_lock: 0x130, // int sys_vm_lock(sys_addr_t addr, size_t size);
	sys_vm_unlock: 0x131, // int sys_vm_unlock(sys_addr_t addr, size_t size);
	sys_vm_touch: 0x132, // int sys_vm_touch(sys_addr_t addr, size_t size);
	sys_vm_flush: 0x133, // int sys_vm_flush(sys_addr_t addr, size_t size);
	sys_vm_invalidate: 0x134, // int sys_vm_invalidate(sys_addr_t addr, size_t size);
	sys_vm_store: 0x135, // int sys_vm_store(sys_addr_t addr, size_t size);
	sys_vm_sync: 0x136, // int sys_vm_sync(sys_addr_t addr, size_t size);
	sys_vm_test: 0x137, // int sys_vm_test(sys_addr_t addr, size_t size, uint64_t * result);
	sys_vm_get_statistics: 0x138, // int sys_vm_get_statistics(sys_addr_t addr, sys_vm_statistics_t * stat);
	sys_vm_memory_map: 0x139, // same Params (size_t vsize, size_t psize, sys_memory_container_t container, uint64_t flag, uint64_t policy, sys_addr_t * addr); apperently maps different vm memory area
	unk_0x13A: 0x13A, // 2 Params
	unk_0x13B: 0x13B, // 1 Param
	sys_memory_container_create: 0x144, // int sys_memory_container_create(sys_memory_container_t * cid, size_t yield_size);
	sys_memory_container_destroy: 0x145, // int sys_memory_container_destroy(sys_memory_container_t cid);
	sys_mmapper_allocate_fixed_address: 0x146, // int sys_mmapper_allocate_fixed_address(void);
	sys_mmapper_enable_page_fault_notification: 0x147, // int sys_mmapper_enable_page_fault_notification(sys_addr_t start_addr, sys_event_queue_t queue_id);
	unk_0x148: 0x148, // 7 Params
	sys_mmapper_free_shared_memory: 0x149, // int sys_mmapper_free_shared_memory(sys_addr_t start_addr);
	sys_mmapper_allocate_address: 0x14A, // int sys_mmapper_allocate_address(size_t size, uint64_t flags, size_t alignment, sys_addr_t * alloc_addr);
	sys_mmapper_free_address: 0x14B, // int sys_mmapper_free_address(sys_addr_t start_addr);
	sys_mmapper_allocate_shared_memory: 0x14C, // 4 Params: (uint32_t id? ('UMEM'), size_t size, size_t alignment, sys_memory_t * mem_id)
	sys_mmapper_set_shared_memory_flag: 0x14D, // int sys_mmapper_set_shared_memory_flag(sys_addr_t, flags) ?;
	sys_mmapper_map_shared_memory: 0x14E, // 3 Params: (sys_addr_t start_addr, sys_memory_t mem_id, uint64_t flags) ?
	sys_mmapper_unmap_shared_memory: 0x14F, // 2 Params: (sys_addr_t start_addr,sys_memory_t *mem_id ) ?
	sys_mmapper_change_address_access_right: 0x150, // int sys_mmapper_change_address_access_right(sys_addr_t start_addr, uint64_t flags);
	sys_mmapper_search_and_map: 0x151, // int sys_mmapper_search_and_map(sys_addr_t start_addr, sys_memory_t mem_id, uint64_t flags, sys_addr_t * alloc_addr);
	sys_mmapper_get_shared_memory_attribute: 0x152, // 2 Params
	unk_0x153: 0x153, // 5 Params
	unk_0x154: 0x154, // 2 Params
	_sys_memory_container_create2: 0x155, // int _sys_memory_container_create2(sys_memory_container_t * cid, size_t yield_size);
	sys_memory_container_destroy: 0x156, // int sys_memory_container_destroy? (sys_memory_container_t cid);
	sys_memory_container_get_size: 0x157, // int sys_memory_container_get_size(sys_memory_info_t * mem_info, sys_memory_container_t cid);
	sys_memory_budget_set: 0x158, // 
	unk_0x159: 0x159, // 3 Params, a variation of sys_memory_container_destroy (sys_memory_container_t cid, int, &out)
	unk_0x15A: 0x15A, // 
	sys_memory_allocate: 0x15C, // int sys_memory_allocate(size_t size, uint64_t flags, sys_addr_t * alloc_addr);
	sys_memory_free: 0x15D, // int sys_memory_free(sys_addr_t start_addr);
	sys_memory_allocate_from_container: 0x15E, // int sys_memory_allocate_from_container(size_t size, sys_memory_container_t container, uint64_t flags, sys_addr_t * alloc_addr);
	sys_memory_get_page_attribute: 0x15F, // int sys_memory_get_page_attribute(sys_addr_t addr, sys_page_attr_t * attr);
	sys_memory_get_user_memory_size: 0x160, // int sys_memory_get_user_memory_size(sys_memory_info_t * mem_info);
	sys_memory_get_user_memory_stat: 0x161, // int sys_memory_get_user_memory_stat(out:uint8[0x1C])
	unk_0x162: 0x162, // 3 Params
	unk_0x163: 0x163, // 2 Params: uint32_t *, uint32_t * (set 0, reset memory stats?)
	sys_memory_allocate_colored: 0x164, // 4 Params
	unk_0x165: 0x165, // 2 Params
	unk_0x166: 0x166, // 5 Params
	unk_0x167: 0x167, // 2 Params
	unk_0x168: 0x168, // 7 Params
	sys_memory_allocate_from_container_colored: 0x169, // 5 Params
	sys_mmapper_allocate_memory_from_container: 0x16A, // sys_mmapper_allocate_memory_from_container(size_t size, sys_memory_container_t container, uint64_t flags, sys_memory_t *mem_id)
	unk_0x16B: 0x16B, // 6 Params
	unk_0x16C: 0x16C, // 
}


sys_uart_v481D =
{
	sys_uart_initialize: 0x16F, // syscall(367, void)
	sys_uart_receive: 0x170, // sys_uart_receive(out: uint8_t buffer[SizeToReceive], int SizeToReceive (0x400/0x800), 0/1)
	sys_uart_send: 0x171, // sys_uart_send(const void *buf, uint64_t size, uint64_t flags)
	sys_uart_get_params: 0x172, // int sys_uart_get_params(out:buffer[0x10])
}


sys_game_v481D =
{
	sys_game_watchdog_start: 0x174, // 1 param: int time(r)
	sys_game_watchdog_stop: 0x175, // int sys_game_watchdog_stop(void)
	sys_game_watchdog_clear: 0x176, // int sys_game_watchdog_clear(void)
	sys_game_set_system_sw_version: 0x177, // int sys_game_set_system_sw_version(uint64_t version)
	sys_game_get_system_sw_version2: 0x178, // int sys_game_get_system_sw_version(void)
	sys_game_board_storage_read: 0x19A, // 2 Params,out:uint8_t[0x10], uint8_t[1], HV System Manager access - ServiceID 54
	sys_game_board_storage_write: 0x19B, // 2 Params,in:uint8_t[0x10],uint8_t[1], HV System Manager access - ServiceID 52
	sys_game_get_rtc_status: 0x19C, // 
	unk_0x19D: 0x19D, // 3 Params, HV System Manager access - ServiceID 56: out:uint8_t[1],out:uint8_t[1],out:uint8_t[1]
	unk_0x19E: 0x19E, // 3 Params,in:packetid ,in:uint8_t[0x20],out:uint8_t[1], HV System Manager access - ServiceID 58
	unk_0x19F: 0x19F, // 3 Params,in:packetid,out:uint8_t[0x20],out:uint8_t[1], HV System Manager access - ServiceID 60
}


sys_sm_sys_ctrl_v481D =
{
	sys_sm_set_shop_mode: 0x179, // int sys_sm_set_shop_mode(int mode (0/1)) ( HV System Manager access - ServiceID 39 (SET_SHOP_DEMO_MODE))
	sys_sm_get_ext_event2: 0x17A, // 4 Param, sc378(uint64_t * v1,uint64_t * v2, uint64_t * v3, 0=receive buffer/1=get queuing events), v1==7 -> yesHOT
	
	/*
	0x1100/0x100 = turn off,
	0x1200 = Lv2 Hard Reboot, 
	0x200 = Lv2 Soft Reboot,
	0x8201 = load lpar id 1
	0x8202 = load lpar id 2
	0x8204 = load lpar id 3 (PS2_NETEMU)
	HV System Manager access - ServiceID 1 (REQUEST)+ 10 (DELIVER INTER LPAR PARAMETER)
	*/
	sys_sm_shutdown: 0x17B, // int sys_sm_shutdown(uint16_t op, const void * lpar_parameter, uint64_t parameter_size )
	
	sys_sm_get_params: 0x17C, // Params alias sys_get_system_parameter, 4 Params: uint64_t * unknown1, uint64_t * unknown2, uint64_t * unknown3, uint64_t * bootparam? (more info: #Boot_Parameter)
	sys_sm_get_inter_lpar_parameter: 0x17D, // 2 Params: syscall(381,uint8_t lpar_parameter[param_size], int param_size (0x600));
	sys_sm_: 0x17E, // int syscall(382, void); - prevents ps3 lpar shutdown ?
	
	/*
	HV System Manager access - ServiceID 13 (TEMPERATURE))
	2nd Byte conversion: r.shift (second_byte * 0x64 ) by 8
	Example: 195 = 0xC3 -> 0xC3 * 0x64 -> 0x4C2C ->> shift -> 0x4C -> XX.76°C
	*/
	sys_game_get_temperature: 0x17F, // int sys_game_get_temperature(0=CELL/1=RSX,uint32_t *temperature)
	
	// HV System Manager access - ServiceID 15
	sys_sm_get_tzpb: 0x180, // 1 Param: syscall(384,uint64_t *tzpb); (uint8_t [0x20]) Get TimeZone Presence
	
	// HV System Manager access - ServiceID 17
	sys_sm_request_led: 0x181, // int sys_sm_request_led( int led_id(1=power,2=status or 3=disk), out:uint8_t led_action[1] )
	
	/*
	led_id = 0,1 (STATUS),2 (POWER)(red, green, red+green combined: looks like yellow);
	led_action = 0,1,2,3 (off,on,blink fast, blink slow)
	*/
	sys_sm_control_led: 0x182, // int sys_sm_control_led(uint8_t led_id, uint8_t led_action)
	
	sys_sm_get_platform_info: 0x183, // syscall(387, uint8_t platform_info[0x18]) / OS Version, Revision, System Software Version?
	
	// HV System Manager access - ServiceID 21 (RING_BUZZER)
	sys_sm_ring_buzzer_too: 0x184, // 2 Params
	
	sys_sm_set_fan_policy: 0x185, // int sys_sm_set_fan_policy (in:uint8, in:uint8, in:uint8)
	
	// HV System Manager access - ServiceID 26 (REQUEST_ERROR_LOG)
	sys_sm_request_error_log: 0x186, // 4 Params, uint8_t offset (0-0x20), uint8_t *, uint32_t *, uint32_t *)
	
	// HV System Manager access - ServiceID 28 (REQUEST_BE_COUNT)
	sys_sm_request_be_count: 0x187, // 4 Params (uint8_t *,uint32_t* total_time_in_seconds,uint32_t* power_on_counter,uint32_t* power_off_counter)
	
	sys_sm_ring_buzzer: 0x188, // 3 Params: PacketID=0x1004, field2, field4 Hypervisor_Reverse_Engineering#Parameters_6 Parameters
	
	// gets hardware configuration
	sys_sm_get_hw_config: 0x189, // syscall(393,uint8_t * res, uint64_t * hw_config)
	
	// HV System Manager access - ServiceID 30 (REQUEST_SC_VERSION) System_Controller_Firmware#.27info0.27 SC Firmware
	sys_sm_request_scversion: 0x18A, // uint8_t SoftID[8],old_PatchID[8],new_PatchID[8]; lv2syscall3(394, (uint64_t)SoftID, (uint64_t)old_PatchID, (uint64_t)new_PatchID);
	
	// HV System Manager access - ServiceID 32 (REQUEST_SYSTEM_EVENT_LOG)
	sys_sm_request_system_event_log: 0x18B, // int sys_sm_request_system_event_log(int offset(0 - 5),uint64_t *out,uint64_t *out,uint64_t *out,uint8_t buf[0x20], int flag ), 6 Params
	
	// HV System Manager access - ServiceID 34+38 (RTC_ALARM)
	sys_sm_set_rtc_alarm: 0x18C, // int sys_sm_set_rtc_alarm(CellRtcTick *pTick)
	
	sys_sm_get_rtc_alarm: 0x18D, // 1 Param, HV System Manager access - ServiceID 36
	sys_console_write: 0x18E, // int sys_console_write(const char *s, unsigned int len)(lv2,lv1::console::write_async
	
	// HV System Manager access - ServiceID 32 (REQUEST_SYSTEM_EVENT_LOG)
	sys_request_system_event_log: 0x190, // int sys_request_system_event_log(int offset(0 - 5),uint64_t *out, int flag )
	
	// HV System Manager access - ServiceID 40 (BOOT_PARAMETER) also sends the param to syscon. related to 404
	unk_0x191: 0x191, // 2 Params: uint64_t param,uint8_t * st (status?/state?)
}


sys_tty_v481D =
{
	sys_tty_read: 0x192, // int sys_tty_read(unsigned int ch, void *buf, unsigned int len, unsigned int *preadlen);
	sys_tty_write: 0x193, // int sys_tty_write(unsigned int ch, const void *buf, unsigned int len, unsigned int *pwritelen);
	
	// HV System Manager access - ServiceID 42 (BOOT_PARAMETER) [Network Settings for Debug] related, returns single/dual setting flag?
	unk_0x194: 0x194, // 2 Params: uint64_t * param, uint8_t * st
	
	// HV System Manager access - ServiceID 44  factory_process_comp (0,0),  dbg_printf comp value
	unk_0x195: 0x195, // 2 Params: uint16_t * comp?, uint8_t * st (status?/state?)
	
	/*
	HV System Manager access - ServiceID 46 
	comp? = 0x01,0x02,0x04,0x08,0x10,0x20,0x40,0x80,0x100
	factory_process_comp (1,x) -> OR-Operation with comp
	*/
	unk_0x196: 0x196, // 2 Params: uint32_t comp? ,uint8_t * st
	
	/*
	// HV System Manager access - ServiceID 48
	factory_process_comp (2,0) -> ANDC-Operation with comp=0
	*/
	unk_0x197: 0x197, // 1 Param: uint8_t * st
	
	sys_sm_get_tzpb: 0x198, // 1 Param: out:uint8_t [0x20]  same as 384 just requires PM
	sys_sm_get_fan_policy: 0x199, // int sys_sm_get_fan_policy(uint8_t id, uint8_t *st (status? state?), uint8_t *policy (mode), uint8_t * mode (speed), uint8_t *duty)
}


sys_overlay_v481D =
{
	sys_overlay_load_module: 0x1C2, // int sys_overlay_load_module(sys_overlay_t * ovlmid, const char *path, uint64_t flags, sys_addr_t * entry)
	sys_overlay_unload_module: 0x1C3, // int sys_overlay_unload_module(sys_overlay_t ovlmid)
	sys_overlay_get_module_list: 0x1C4, // int sys_overlay_get_module_list(sys_pid_t pid, size_t ovlmids_num, sys_overlay_t * ovlmids, size_t * num_of_modules)
	sys_overlay_get_module_info: 0x1C5, // int sys_overlay_get_module_info(sys_pid_t pid,sys_overlay_t ovlmid, sys_overlay_module_info_t * info)
	sys_overlay_load_module_by_fd: 0x1C6, // int sys_overlay_load_module_by_fd(sys_overlay_t * ovlmid, int fd, off64_t offset, uint64_t flags, sys_addr_t * entry)
	sys_overlay_get_module_info2: 0x1C7, // int sys_overlay_get_module_info2(sys_pid_t pid, sys_overlay_t ovlmid, sys_overlay_module_info2_t * info)
	sys_overlay_get_sdk_version: 0x1C8, // 2 Params
	sys_overlay_get_module_dbg_info: 0x1C9, // 3 Params: (sys_pid_t pid, sys_overlay_t ovlmid, sys_overlay_module_dbg_t * info) ?
	sys_overlay_get_module_dbg_info_too: 0x1CA, // 3 Params
}


sys_prx_v481D =
{
	sys_prx_dbg_get_module_id_list: 0x1CC, // sys_prx_dbg_get_module_id_list(sys_pid_t pid, sys_prx_dbg_get_module_list_t *pInfo)
	sys_prx_get_module_id_by_address: 0x1CD, // sys_prx_id_t sys_prx_get_module_id_by_address(void* addr)
	unk_0x1CE: 0x1CE, // 1 Param: uint8_t [0x50]
	sys_prx_load_module_by_fd: 0x1CF, // sys_prx_id_t sys_prx_load_module_by_fd(int fd, off64_t offset, sys_prx_flags_t flags, sys_prx_load_module_option_t pOpt)
	sys_prx_load_module_on_memcontainer_by_fd: 0x1D0, // sys_prx_id_t sys_prx_load_module_on_memcontainer_by_fd(int fd,off64_t offset,sys_memory_container_t mem_container,sys_prx_flags_t flags,sys_prx_load_module_option_t pOpt)
	sys_prx_load_module_list: 0x1D1, // int sys_prx_load_module_list(int n, const char **path_list, uint64_t flags, sys_prx_load_module_list_option_t * pOpt, sys_prx_id_t * idlist)
	sys_prx_load_module_list_on_memcontainer: 0x1D2, // sys_prx_id_t sys_prx_load_module_by_fd(int fd, off64_t offset, uint64_t flags, sys_prx_load_module_option_t * pOpt)
	sys_prx_get_ppu_guid: 0x1D3, // sys_addr_t sys_prx_get_ppu_guid(sys_prx_id_t id)
	unk_0x1D4: 0x1D4, // 
	unk_0x1D6: 0x1D6, // int syscall 470 (uint32_t type?, void* npd? [0x60])
	unk_0x1D7: 0x1D7, // int syscall_471(uint32_t type, char* titleID, void* klicensee, uint8_t* actdat, uint8_t* rif, int32_t licenseType, uint8_t* magicVersion);
	unk_0x1D8: 0x1D8, // 2 Params
	unk_0x1D9: 0x1D9, // 
	unk_0x1DA: 0x1DA, // 
	unk_0x1DB: 0x1DB, // int syscall_475(uint32_t type, void* npd?, void* klicensee, uint8_t* actdat, uint8_t* rif, uint8_t magicVersion)
	unk_0x1DC: 0x1DC, // can only be either syscall476 (1,0) or syscall476 (0,1)
	sys_prx_load_module: 0x1E0, // sys_prx_id_t sys_prx_load_module(const char* path, sys_prx_flags_t flags, sys_prx_load_module_option_t* pOpt)
	sys_prx_start_module: 0x1E1, // int sys_prx_start_module(sys_prx_id_t id, sys_prx_flags_t flags, sys_prx_start_t* pOpt)
	sys_prx_stop_module: 0x1E2, // int sys_prx_stop_module(sys_prx_id_t id, size_t args, void *argp, int *modres, sys_prx_flags_t flags, sys_prx_stop_module_option_t pOpt)
	sys_prx_unload_module: 0x1E3, // int sys_prx_unload_module(sys_prx_id_t id, sys_prx_flags_t flags, sys_prx_unload_module_option_t pOpt);
	sys_prx_register_module: 0x1E4, // int sys_prx_register_module(char * name, const sys_prx_register_module_option_t * pOpt)
	sys_prx_query_module: 0x1E5, // int sys_prx_query_module(void) // only returns 0
	sys_prx_register_library: 0x1E6, // int sys_prx_register_library(void* library)
	sys_prx_unregister_library: 0x1E7, // int sys_prx_unregister_library(void* library) // only returns 0
	sys_prx_link_library: 0x1E8, // int sys_prx_link_library(void) // only returns 0
	sys_prx_unlink_library: 0x1E9, // int sys_prx_unlink_library(void) // only returns 0
	sys_prx_query_library: 0x1EA, // int sys_prx_query_library(void) // only returns 0
	unk_0x1EC: 0x1EC, // 4 Params
	sys_prx_dbg_get_module_info: 0x1ED, // int sys_prx_dbg_get_module_info(sys_pid_t pid, sys_prx_id_t id, sys_prx_dbg_module_info* info)
	sys_prx_get_module_list: 0x1EE, // int sys_prx_get_module_list(sys_prx_flags_t flags, sys_prx_get_module_list_t *pInfo);
	sys_prx_get_module_info: 0x1EF, // int sys_prx_get_module_info(sys_prx_id_t id, sys_prx_flags_t flags, sys_prx_module_info_t *pInfo)
	sys_prx_get_module_id_by_name: 0x1F0, // sys_prx_id_t sys_prx_get_module_id_by_name(const char* name, sys_prx_flags_t flags, sys_prx_get_module_id_by_name_option_t *pOpt)
	sys_prx_load_module_on_memcontainer: 0x1F1, // sys_prx_id_t sys_prx_load_module_on_memcontainer(const char* path, sys_memory_container_t mem_container, sys_prx_flags_t flags, sys_prx_load_module_option_t pOpt)
	sys_prx_start: 0x1F2, // int sys_prx_start (void) // only returns 0
	sys_prx_stop: 0x1F3, // int sys_prx_stop(void)
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
}


sys_hid_manager_v481D =
{
	sys_hid_manager_open: 0x1F4, // 2 Params
	sys_hid_manager_close: 0x1F5, // 1 Param: uint32_t port_no
	sys_hid_manager_read: 0x1F6, // 4 Params: uint32_t port_no,uint32_t packet_id, uint8_t[size], uint32_t size
	sys_hid_manager_ioctl: 0x1F7, // 4 Params: uint32_t port_no,uint32_t packet_id, uint8_t[size], uint32_t size
	
	// param 1: device_type, 1 = pad, 2 = kb, 3 = mouse
	sys_hid_manager_map_logical_id_to_port_id: 0x1F8, // int sc(int device_type, int device_no, int port_no)
	sys_hid_manager_unmap_logical_id_to_port_id: 0x1F9, // int sc(int device_type, int device_no, int port_no)
	
	sys_hid_manager_add_hot_key_observer: 0x1FA, // 2 Params
	sys_hid_manager_remove_hot_key_observer: 0x1FB, // 2 Params
	sys_hid_manager_grab_focus: 0x1FC, // 1 Param: sys_pid_t pid (for example current pid)
	sys_hid_manager_release_focus: 0x1FD, // 1 Param
	sys_hid_manager_1: 0x1FE, // int syscall(510, void);
	sys_hid_manager_set_: 0x1FF, // 1 Param
	unk_0x200: 0x200, // 1 Param : int syscall(512,sys_pid_t pid), simple root-flag check?;
	sys_hid_manager_2: 0x201, // 4 Params
	sys_hid_manager_3: 0x202, // 3 Params
}


sys_config_v481D =
{
	sys_config_open: 0x204, // 2 Params : (sys_event_queue_t * equeue_id, uint64_t *out)
	sys_config_close: 0x205, // sys_config_close(sys_event_queue_t * equeue_id);
	sys_config_get_service_event: 0x206, // 4 Params
	sys_config_add_service_listener: 0x207, // 6 Params
	sys_config_remove_service_listener: 0x208, // 2 Params
	sys_config_register_service: 0x209, // 7 Params
	sys_config_unregister_service: 0x20A, // 2 Params
	sys_config_io_event: 0x20B, // 
	sys_config_1: 0x20C, // 
	sys_config_2: 0x20D, // 
}


sys_usbd_v481D =
{
	sys_usbd_initialize: 0x212, // 1 Param, out: *uint32_t
	sys_usbd_finalize: 0x213, // 1 Param, in: handle/id
	sys_usbd_get_device_list: 0x214, // 3 Params
	sys_usbd_get_descriptor_size: 0x215, // 2 Params
	sys_usbd_get_descriptor: 0x216, // 3 Params
	sys_usbd_register_ldd: 0x217, // 3 Params
	sys_usbd_unregister_ldd: 0x218, // 3 Params
	sys_usbd_open_pipe: 0x219, // 7 Params
	sys_usbd_open_default_pipe: 0x21A, // 2 Params
	sys_usbd_close_pipe: 0x21B, // 2 Params
	sys_usbd_receive_event: 0x21C, // 4 Params
	sys_usbd_detect_event: 0x21D, // void
	sys_usbd_attach: 0x21E, // 4 Params
	sys_usbd_transfer_data: 0x21F, // 6 Params
	sys_usbd_isochronous_transfer_data: 0x220, // 3 Params
	sys_usbd_get_transfer_status: 0x221, // 5 Params
	sys_usbd_get_isochronous_transfer_status: 0x222, // 5 Params
	sys_usbd_get_device_location: 0x223, // 3 Params
	sys_usbd_send_event: 0x224, // 2 Params
	unk_0x225: 0x225, // 4 Params
	sys_usbd_allocate_memory: 0x226, // 3 Params
	sys_usbd_free_memory: 0x227, // 2 Params
	unk_0x228: 0x228, // 1 Param
	unk_0x229: 0x229, // void
	unk_0x22A: 0x22A, // void
	unk_0x22B: 0x22B, // void
	sys_usbd_get_device_speed: 0x22C, // 3 Params, , , out:uint8_t[1]
	unk_0x22D: 0x22D, // 5 Params
	unk_0x22E: 0x22E, // 3 Params
	sys_usbd_register_extra_ldd: 0x22F, // 6 Params
}


// Card Controller cf/sd/mmc/sm/ms
sys_gl819_v481D =
{
	unk_0x230: 0x230, // 
	unk_0x231: 0x231, // 1 Param: out:uint8_t [4] (cf/sd/mmc/sm/ms flag availability from hw config)
	unk_0x232: 0x232, // gets MultiCardReader Firmware Version: syscall(0x232, out:uint8_t [2])
	unk_0x233: 0x233, // 
	unk_0x234: 0x234, // 
	unk_0x235: 0x235, // 
	unk_0x236: 0x236, // 
	unk_0x237: 0x237, // 
	unk_0x238: 0x238, // 
	unk_0x239: 0x239, // 
}


sys_pad_manager_v481D =
{
	unk_0x23A: 0x23A, // 
	sys_pad_ldd_unregister_controller: 0x23B, // int sys_pad_ldd_unregister_controller ( int32_t handle)
	sys_pad_ldd_data_insert: 0x23C, // int sys_pad_ldd_data_insert (int32_t handle, cellpaddata* data /* uint8_t[0x84] */)
	sys_pad_dbg_ldd_set_data_insert_mode: 0x23D, // int sys_pad_dbg_ldd_set_data_insert_mode ( int32_t handle, 0x100, uint32_t* mode , 4)
	sys_pad_ldd_register_controller: 0x23E, // int sys_pad_ldd_register_controller/sys_pad_dbg_ldd_register_controller ( uint8_t[0x114] /* struct */, int32_t* out, 5, uint32_t device_capability<<1)
	sys_pad_ldd_get_port_no: 0x23F, // int sys_pad_ldd_get_port_no (int32_t handle)
	sys_pad_manager_1: 0x241, // int sys_pad_manager_.... (int8_t device_number?)
}


sys_bluetooth_v481D =
{
	unk_0x242: 0x242, // 
	unk_0x243: 0x243, // 
	unk_0x244: 0x244, // 
	unk_0x245: 0x245, // 
	unk_0x246: 0x246, // 
	unk_0x247: 0x247, // gets Bluetooth Firmware Version: syscall(0x247, out:uint8_t [2])
	unk_0x248: 0x248, // 
	unk_0x249: 0x249, // 
	unk_0x24A: 0x24A, // return 0x80010003
	unk_0x24B: 0x24B, // 
	unk_0x24C: 0x24C, // return 0x80010003
	unk_0x24D: 0x24D, // return 0x80010003
	unk_0x24E: 0x24E, // bt_set_device_info()
	unk_0x24F: 0x24F, // return 0
	unk_0x250: 0x250, // return 0
	unk_0x251: 0x251, // getting bluetooth address
	unk_0x252: 0x252, // return 0x80010003
	unk_0x253: 0x253, // return 0x80010003
	unk_0x254: 0x254, // return 0x80010003
	unk_0x255: 0x255, // bt_cancel_connect_accept_controller(),deprecated
	unk_0x256: 0x256, // 0 Param
	unk_0x257: 0x257, // 2 Params: out:uint8_t[2], out:uint8_t[2]
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
}


sys_bluetooth_usb_v481D =
{
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
}


sys_bluetooth_usb_audio_v481D =
{
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
}


sys_storage_v481D =
{
	aaaaaa: 0x258, // 
	aaaaaa: 0x259, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
}


sys_io_v481D =
{
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
}


sys_gpio_v481D =
{
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
}


sys_fsw_v481D =
{
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
}


sys_rsx_audio_v481D =
{
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
}


sys_rsx_v481D =
{
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
}


sys_bdemu_v481D =
{
	aaaaaa: 0x000, // 
}


sys_net_v481D =
{
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
}


lv2_fs_v481D =
{
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
}


sys_process_socket_service_v481D =
{
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
}


sys_ss_sys_get_v481D =
{
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
}


sys_deci3_v481D =
{
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
}


sys_dbg_v481D =
{
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
}

