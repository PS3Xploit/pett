// डिफ़ॉल्ट संदेश PS3 [Hindi IN]
// PS3Xploit Team 2018 / ps3xploit.com

// Translation Credits: @minicm94123


// After complete translate the language file update it to latest revision (same as en_us)
var current_minimum_lang_revision="0000";
var gui_incomplete_lang="Current translation is incomplete, consider updating or just skip it";

var msg_select_vsh_type="कंसोल सीएक्स?\n\nOFF चयन DEX के लिए ऑफसेट नहीं ले जाएगा";
		
var msg_detected_fw_1="एफडब्ल्यू पता लगाया: ";
var msg_detected_fw_2=" ";
//var msg_detected_fw_3=" / MinVer: ";
var msg_detected_fw_4=" | फर्मवेयर 4.xx के साथ सभी मॉडल का समर्थन करता है";

var compat_msg_wrong_fw1="आपका PS3 संगत नहीं है! एफडब्ल्यू का आपका संस्करण वास्तविक है:";
var compat_msg_wrong_fw2=", जो PS3Xploit के साथ संगत नहीं है सभी फ़ंक्शंस अक्षम";
var compat_msg_success1="बधाई! हम जानते हैं कि आपके प्लेस्टेशन 3 में एफडब्ल्यू है ";
var compat_msg_success2=", जो PS3Xploit के साथ संगत है! का आनंद लें!";

var msg_option_not_available="यह विकल्प अभी तक उपलब्ध नहीं है!";

// Settings
var msg_settings_load="यह एक कुकी से प्रायोगिक और लोड विकल्प है!";
var msg_settings_save="यह प्रयोगात्मक है और कुकी को विकल्प सहेजता है!";

// MinVer/CFW Compatibility
var msg_minver_loaded_into_mem="MinVer मेमोरी में भरी हुई मान देता है!\n\nमूल्य दिखाने के लिए फिर से निष्पादित बटन दबाएं!";
var msg_minver_start="डाउनग्रेड के लिए आपका न्यूनतम संस्करण है  ";
var msg_minver_mid="और यह, आज तक ";
var msg_minver_end=" यह CFW के साथ संगत है!";

// CELL/RSX Temperatures
var msg_temps_loaded_into_mem="CELL/RSX Temp मेमोरी में भरी हुई मान देता है!\n\nमूल्य दिखाने के लिए फिर से निष्पादित बटन दबाएं!";
var msg_temps_cell="प्रोसेसर तापमान (CELL):";
var msg_temps_rsx="\n\nतापमान GPU (RSX):  ";
var msg_temps_celcius=" सेल्सीयस";

// MemDump
var msg_memdump_warning="चेतावनी!\n\nयह टेस्ट लटकाएगा यदि आप डंप प्रक्रिया के दौरान एक असाइनमेंट मेमोरी एरिया को स्पर्श करते हैं!\n\nयहां तक कि जब तक आप लटका तक एक मान्य डंप प्राप्त करेंगे!";
var msg_memdump_idps_vsh="केवल एफडब्ल्यू 4.66/4.81/4.82 डंप आईडीपीएस डायरेक्ट मेमोरी वीएसएच के लिए समर्थित है!\n\nफ्लैश आईडीपीएस निष्कर्षण के आधार पर चेन अलग है.\n\nएफडब्ल्यू के अन्य सभी संस्करण शायद केवल 0 देते हैं.";
var msg_memdump_size="Raw VSH MemDump Values\n\nSize: 0x";
var msg_memdump_start_addr="\nहोम पता: 0x";
var msg_memdump_end_addr="\nअंतिम पता: 0x";

// Warnings
var msg_fd_close_warning=" फ़ाइल विवरणक स्वचालित रूप से बंद नहीं करें!";
var msg_remove_dir_warning="चेतावनी!\n\nइस के साथ सावधान रहें syscall.\n\nआप एक महत्वपूर्ण निर्देशिका को हटा सकते हैं और आपको फ़र्मवेयर पुनर्स्थापित करना होगा !";
var msg_warning_write_protection="विकलांग लेखन सुरक्षा!\n\nदेखभाल के साथ आगे बढ़ें!!!";

var msg_cobra_only="चेतावनी!\n\nयह केवल साथ काम करता है COBRA में सक्रिय CFW!";

var msg_mount_test="** टेस्ट चरण में **!\n\nयह माउंट होगा /dev_hdd1/\n\nजब राइडिंग, आप नेविगेटर को पुनः आरंभ कर सकते हैं और लेक्ट / Esc के लिए चेन का उपयोग कर सकते हैं। विभाजन डंप बनाने के लिए फ़ाइलों की /dev_hdd1/ गंतव्य के लिए!";

// File Operations
var msg_default_size="डिफ़ॉल्ट वजन का उपयोग करना. 0x140";
var msg_new_size="नया वजन: ";
var msg_destination_path_set_new="नई निर्देशिका के लिए तय:\n\n";
var msg_destination_path_incorrect="गलत गंतव्य निर्देशिका!\n\nबदलने से पहले आपको इसे ठीक करना होगा ID गेम का.";

// Trigger Messages
var trigger_msg="सक्रियण शोषण...";
var trigger_msg2="सक्रिय: 0x";

// Search Strings
var msg_search_offsets="<h3><b>मेमोरी में ऑफ़सेट की तलाश! प्रतीक्षा.... <br>यदि आप अधीर हो, ब्राउज़र बंद करें और इसमें पुन: प्रयास करें 60-90 सेकंड यदि आप उन्हें नहीं मिल सकता है!</b></h3>";
var msg_verify_offsets="<h3><b>मेमोरी में ऑफसेट जांचना! प्रतीक्षा.... <br>अभी तक ब्राउज़र बंद नहीं करें!</b></h3>";

// Fail Search Messages
var msg_string_search_fail="<h3><b><font color='#7700DA'>असंभव सभी ऑफसेट खोजें!</font><font color='#7700DA'> यदि खोज फिर से विफल हो जाती है,खोज विकल्पों को समायोजित करें या ब्राउज़र पुनः आरंभ करें!</font></b></h3>";
var msg_string_search_fail_max="<h3><b><font color='#7700DA'>असंभव सभी को खोजें Offsets!</font><font color='#7700DA'> अधिकतम रिट्रीज! ब्राउज़र को पुनरारंभ करें</font></b></h3>";

// Verify Strings Fail
var msg_string_verify_fail="<h3><b><font color='#7700DA'>सभी ऑफसेट को सत्यापित करने के लिए असंभव!</font><font color='#7700DA'>यदि सत्यापन फिर से विफल हो जाता है, ब्राउज़र को पुनरारंभ करें!</font></b></h3>";
var msg_string_verify_fail_max="<h3><b><font color='#7700DA'>सभी ऑफसेट को सत्यापित करने के लिए असंभव!</font><font color='#7700DA'>अधिकतम रिट्रीज! ब्राउज़र को पुनरारंभ करें!</font></b></h3>";

// Init Success
var msg_success_init="<h3><b><font color='#386E38'>सफलता!</font><br><font color='#7700DA'>अब आप अपने चेन को चला सकते हैं ROP!</font></b></h3>";

// Exec Success
var success_chain_exec="<h3><b><font color='#386E38'>चेन को सफलतापूर्वक सफलता मिली!</font></b></h3>";
var success_chain_exec_press_again="<h3><b><font color='#386E38'>एक बार एक्जिक्यूट बटन दबाएं!</font></b></h3>";
var success_chain_exec_psid="<h3><b><font color='#386E38'>PSID Dump सफल!</font></b></h3>";
var success_chain_exec_idps="<h3><b><font color='#386E38'>IDPS Dump सफल!</font></b></h3>";
var success_chain_exec_syscall_dump="<h3><b><font color='#386E38'>Syscall Return Value Dumped Successfully!</font></b></h3>";
var success_chain_exec_memdump="<h3><b><font color='#386E38'>DUMP सफल मेमोरी का!</font></b></h3>";
var success_chain_exec_read_write_file="<h3><b><font color='#386E38'>सफल फ़ाइल स्थानांतरण !</font></b></h3>";
var success_mount_device="<h3><b><font color='#386E38'>विभाजन /dev_hdd1/ सफलतापूर्वक घुड़सवार! ब्राउज़र को पुनरारंभ करें और चेन को चलाएं पढ़ना./लेखन. फ़ाइलों का.</font></b></h3>";

// Compatibility/Offset Messages
var ua_msg="<hr><h3>Info Navegador PS3: "+navigator.userAgent+ "</h3>";
var compat_msg_nops3="आप एक PS3 प्रणाली पर नहीं हैं!सभी अक्षम फ़ंक्शंस";
var compat_msg_devs="यह केवल डेवलपर्स के लिए है!\n\noffsets CEX फ़ाइल में मैन्युअल रूप से जोड़ना होगा /js/chains/offsets.js, आपके आधार पर offsets DEX प्रत्येक श्रृंखला के लिए उपयोग में.";
var experimental="इस पृष्ठ को अपने मुख्य में चालू करें!\n\nअपने जोखिम पर उपयोग करें!\nआप कीड़े और चीजें हैं जो अभी तक काम नहीं कर सकती हैं!\n\nसाथ सभी मॉडलों का समर्थन किया FW  4.xx CEX और 4.81 DEX";

// Other Messages
var msg_prerelease="यह एक अल्फा संस्करण है!\n\nप्राचीन फर्मों के लिए समर्थन आंशिक रूप से लागू होता है I!\n\n4.81/4.82 केवल अगले रिलीज तक!";
var msg_anti_piracy="त्याग\n\nहम किसी भी प्रकार की चोरी को समर्थन या समर्थन नहीं करते हैं!\n\nइस ट्यूटोरियल का उपयोग करते समय, और स्वीकार करते हैं, आप इसे शैक्षणिक उद्देश्यों के लिए उपयोग करने के लिए सहमत हैं!";
var msg_anti_piracy_edat="अस्वीकरण ANTIPIRACY!\n\nयह विकल्प केवल परीक्षण और विकास के लिए है, और आपको इसका दुरुपयोग नहीं करना चाहिए!\n\nहाँ स्वीकार करने पर क्लिक करके इसे केवल उन खिताबों में प्रयोग करें जिन्हें आपने पहले ही खरीदा है!";

var msg_thread_name="Hello_From_PS3Xploit";

// Devices
var msg_device_loaded_into_mem="डिवाइस वापसी मूल्य मेमोरी में भरी हुई है!\n\nस्क्रीन पर पढ़ने और दिखाने के लिए फिर से निष्पादित करें बटन दबाएं!";
var msg_get_device_info1="डिवाइस की वापसी: ";
var msg_get_device_info2="\n\nश्रृंखला के लिए उपयोग करें sys_storage_report_devices";

// Debugging
var msg_debug_placeholder="Lazy XP +1";

var msg_stackframe_check="यह समस्याओं के लिए डिफ़ॉल्ट स्टैकफ्रेम की जांच करेगा.\n\nयदि यह क्रैश हो या सफलता संदेश प्रदर्शित नहीं करता है, तो एक समस्या है!";

// String Matching
var verify_fail="<font color='#7700DA'>सत्तारूढ़:चेन स्मृति में मेल नहीं खाते!</font>";
var verify_success="<font color='#2a1003'>सफलता: मेमोरी में मिली चेन!</font>";
var verify_skip="<font color='#2a1003'>सफलता:मेमोरी में अनचेक स्ट्रिंग!</font>";

var msg_search_flash_type_start="के लिए खोजें पैरामीटर";
var msg_search_flash_type_end=" फ्लैश प्रकार!";

var msg_check_memory="मेमोरी चेक: ";
var msg_chk_mem_arg_error="मेमोरी चैक के लिए तर्क त्रुटि! peso=0x";
var msg_malformed_html="HTML विकृत!";
var msg_string_located=" में पाया offset: 0x";
var msg_string_not_located="रैंक में यह संभव नहीं है";

// Found Offsets
var msg_found_offsets="Offsets पाया: ";
var msg_verified_offsets="Offsets सत्यापित: ";
var offset_find_success="सफलता";
var offset_find_base_fp="base_fp";
var offset_find_stack_frame="stack_frame";
var offset_find_jump2="jump2";
var offset_find_jump1="jump1";

var msg_page_args_not_set="पृष्ठ तर्क स्थापित नहीं!\n\nसेट तर्क पर क्लिक करें और पुनः प्रयास करें!";
var msg_no_chain_selected="चेन के बिना ROP Chain चुना गया\n\nएक का चयन करने के लिए ड्रॉप-डाउन विंडो का उपयोग करें";
var msg_media_not_supported="यह भंडारण माध्यम अभी तक लागू नहीं हुआ है!";
var msg_cannot_continue="जारी रखने में असमर्थ....लौटने!";

var msg_invalid_title_id="चेतावनी!\n\nID परिचय गेम गलत है!\n\nका उपयोग करते हुए ID चूक.";

// index GUI text
var gui_title="ट्यूटोरियल के लिए टेम्पलेट PS3Xploit ";
var gui_team="द्वारा PS3Xploit Team: <b><font color='#7700DA'>W</font><font color='#FFF'> | </font><font color='#7700DA'>esc0rtd3w</font><font color='#FFF'> | </font><font color='#7700DA'>habib</font><font color='#FFF'> | </font><font color='#7700DA'>bguerville</font></b>";
var gui_credits="उपयोगकर्ता मेमोरी के बंदरगाह के लिए एक्सर के लिए धन्यवाद PS3, को zecoxao, Nereidadev और Joonie इसकी प्रारंभिक और निरंतर सहायता के लिए, mysis दस्तावेजीकरण के लिए vsh exports y plugins, निश्चित रूप से के योगदानकर्ताओं के लिए psdevwiki, a STLcardsWS इसके प्रस्तावना और प्रभावी योगदान के लिए और पूरे समुदाय के लिए PS3 पिछले और वर्तमान में हैकर्स / डेवलपर्स का, आप जानते हैं कि आप कौन हैं. धन्यवाद करने के लिए भी littlebalup विचार और कार्यान्वयन देने के लिए js कि हम इस संस्करण को तैयार करने के लिए उपयोग करते हैं डंपर्स और फ्लैशर के एचडीडी इसके अतिरिक्त धन्यवाद B7U3 C50SS, Endless, y 0x1991337 परीक्षण करने के लिए syscall ट्यूटोरियल और अन्य मदद! <font color='yellow'>अधिक विवरण और समाचार में <a href='http://www.psx-place.com'>http://www.psx-place.com</a>.आधिकारिक वेबसाइट <a href='http://ps3xploit.com'>http://ps3xploit.com</a></font>";

// Checkboxes First Section
var gui_chk_default_settings="डिफ़ॉल्ट सेटिंग्स.:";
var gui_chk_disable_trigger="लॉन्चर अक्षम करें:";
var gui_chk_write_protect="लेखन संरक्षण";
var gui_chk_flash_type_nand="NAND:";
var gui_chk_flash_type_nor=" NOR:";
var gui_chk_flash_type_emmc=" eMMC:";

// Reboot Mode
var gui_chk_reboot_mode="रीस्टार्ट मोड:";
var gui_chk_reboot_mode_select="* मोड का चयन करें *";
var gui_chk_reboot_mode_soft="सॉफ्ट पुनरारंभ करें (XMB)";
var gui_chk_reboot_mode_hard="पूर्ण पुनरारंभ करें";
var gui_chk_reboot_mode_off="बंद करें";

// ROP Chain Text

// Preset Chains
var gui_txt_preset_chains="डिफ़ॉल्ट चेन.: ";
var gui_txt_preset_chains_default="टेस्ट / डिफॉल्ट";
var gui_txt_option_stackframe_test="स्टैक फ़्रेम टेस्ट";
var gui_txt_option_beep_test="कसौटी Bips";
var gui_txt_option_power_test="ऊर्जा परीक्षण";
var gui_txt_option_minver_check="फैब्रिका का न्यूनतम संस्करण";
var gui_txt_option_sys_game_get_temperature="तापमान दिखाएं";
var gui_txt_option_game_debug_pafjob_test="Game Debug PafJob Test";
var gui_txt_option_console_write_test="कंसोल में टेस्ट लेखन";
var gui_txt_option_sys_tty_read="टेस्ट पढ़ना TTY";
var gui_txt_option_sys_tty_write="टेस्ट लेखन TTY";

// Dumping
var gui_txt_preset_chains_dumping="Dumping";
var gui_txt_option_system_info_multi_dump="की जानकारी Multi Dump";
var gui_txt_option_dump_lv2_syscall_table="Dump तालिका Syscall LV2";
var gui_txt_option_mem_dump_test="Dump (Raw) स्मृति का VSH";
var gui_txt_option_get_open_psid="Dump PSID";
var gui_txt_option_dump_idps_from_mem="Dump IDPS की VSH";
var gui_txt_option_sys_net_dump="SysNet Dump";
var gui_txt_sys_sm_get_platform_info="Get Platform Info";
var gui_txt_option_dump_idps_from_flash="Dump IDPS की Flash";

// File System
var gui_txt_preset_chains_file_system="फ़ाइल सिस्टम";
var gui_txt_option_db_rebuild="फिर से बनाना BD";
var gui_txt_option_file_read_write_test="पढ़ना / लेखन टेस्ट (फ़ाइलें)";
var gui_txt_option_dir_read_write_test="पढ़ना / लेखन टेस्ट (निर्देशिकाएं)";

// Fun
var gui_txt_preset_chains_fun="Fun";
var gui_txt_option_fun_test="कसौटी Bips";

// Other Syscall Chains

// Memory/System
var gui_txt_syscall_group_mem_sys="मेमोरी / सिस्टम: ";
var gui_txt_syscall_chains_mem_sys="स्मृति";
var gui_txt_option_sys_rsx_memory_free="sys_rsx_memory_free";

// Storage
var gui_txt_syscall_chains_storage="भंडारण";
var gui_txt_option_sys_storage_report_devices="sys_storage_report_devices";
var gui_txt_option_sys_storage_open="sys_storage_open";
var gui_txt_option_sys_storage_read="sys_storage_read";
var gui_txt_option_sys_fs_chmod="sys_fs_chmod";
var gui_txt_option_sys_fs_chown="sys_fs_chown";
var gui_txt_option_sys_fs_get_fs_info="sys_fs_get_fs_info";
var gui_txt_option_sys_fs_get_mount_info="sys_fs_get_mount_info";
var gui_txt_option_sys_fs_link="sys_fs_link";
var gui_txt_option_sys_fs_mapped_allocate="sys_fs_mapped_allocate";
var gui_txt_option_sys_fs_mapped_free="sys_fs_mapped_free";
var gui_txt_option_sys_fs_mkdir="sys_fs_mkdir";
var gui_txt_option_sys_fs_mount="sys_fs_mount";
var gui_txt_option_sys_fs_rename="sys_fs_rename";
var gui_txt_option_sys_fs_rmdir="sys_fs_rmdir";
var gui_txt_option_sys_fs_stat="sys_fs_stat";
var gui_txt_option_sys_fs_symbolic_link="sys_fs_symbolic_link";
var gui_txt_option_sys_fs_unlink="sys_fs_unlink";
var gui_txt_option_sys_fs_unmount="sys_fs_unmount";

// System
var gui_txt_syscall_chains_system="प्रणाली";
var gui_txt_option_sys_ss_utoken_if="sys_ss_utoken_if";

// Process/Thread

// Process
var gui_txt_syscall_group_proc_thread="प्रक्रियाओं / थ्रेड्स: ";
var gui_txt_syscall_chains_proc_thread="प्रक्रियाओं";
var gui_txt_option_sys_process_exit="sys_process_exit";
var gui_txt_option_sys_process_kill="sys_process_kill";

var gui_txt_syscall_chains_process="ID की प्रक्रिया.";

// Threads
var gui_txt_syscall_chains_threads="सूत्र";
var gui_txt_option_ppu_thread_get_priority="thread_get_priority";
var gui_txt_option_ppu_thread_get_stack_info="thread_get_stack_info";
var gui_txt_option_sys_ppu_thread_create="sys_ppu_thread_create";
var gui_txt_option_sys_ppu_thread_exit="sys_ppu_thread_exit";
var gui_txt_option_sys_ppu_thread_restart="sys_ppu_thread_restart";
var gui_txt_option_sys_ppu_thread_start="sys_ppu_thread_start";
var gui_txt_option_sys_ppu_thread_stop="sys_ppu_thread_stop";

// Thread ID
var gui_txt_syscall_chains_thread_id="ID सूत्र";

// Network
var gui_txt_syscall_group_network="RED: ";
var gui_txt_syscall_chains_sys_net="sys_net";
var gui_txt_option_sys_net_open_dump="sys_net_open_dump";
var gui_txt_option_sys_net_read_dump="sys_net_read_dump";
var gui_txt_option_sys_net_write_dump="sys_net_write_dump";
var gui_txt_option_sys_net_close_dump="sys_net_close_dump";

var gui_txt_option_url="URL: ";

// Debugging
var gui_txt_syscall_group_debugging="घाव साफ़ करना: ";
var gui_txt_syscall_chains_debug_sc="System Calls";
var gui_txt_option_debug_placeholder="beep_test";

// LED Control
var gui_txt_syscall_group_led="एलईडी नियंत्रण:";
var gui_txt_syscall_chains_led="* चेन का चयन करें *";
var gui_txt_option_sys_sm_request_led="sys_sm_request_led";
var gui_txt_option_sys_sm_control_led="sys_sm_control_led";

var gui_txt_syscall_chains_led_color="रंग बदलें";
var gui_txt_option_led_color_green="ग्रीन";
var gui_txt_option_led_color_yellow_red="पीला / लाल";
var gui_txt_option_led_color_off="बंद";

var gui_txt_syscall_chains_led_action="कार्रवाई बदलें";
var gui_txt_option_led_action_on="निकाल दिया";
var gui_txt_option_led_action_off="बंद";
var gui_txt_option_led_action_blink_fast="त्वरित स्थापना";
var gui_txt_option_led_action_blink_slow="धीमी स्थापना";

// Beep Parameters
var gui_txt_syscall_group_beep_params="बिप्स के पैरामीटर: ";
var gui_txt_syscall_chains_beeps="बीप की संख्याs";
var gui_txt_option_beep_off="बंद करें";
var gui_txt_option_beep_3="3 बीप";
var gui_txt_option_beep_2="2 बीप";
var gui_txt_option_beep_2f="2 तेज बीप";
var gui_txt_option_beep_1="1 बीप";
var gui_txt_option_beep_1f="1 तेजी से बीप";
var gui_txt_option_beep_flatline="निरंतर";

// Memory Dump
var gui_txt_syscall_group_memdump="Dump मेमोरी का:";
var gui_txt_memdump_addresses="पता MemDump";
var gui_txt_memdump_size="भार MemDump";
var gui_txt_memdump_range_presets="Presets:";
var gui_txt_option_memdump_presets_default="* बिना Preset चुना गया *";

var gui_txt_memdump_address_start="दीक्षा:";
var gui_txt_memdump_address_end="अंत:";
var gui_txt_btn_memdump_set_values="Fijar Nuevos Valores";

var gui_txt_group_user_id="ID उपयोगकर्ता:";
var gui_txt_option_user_id_default="* पूर्व निर्धारित *";
var gui_txt_user_id_new="ID उपयोगकर्ता के सेट के लिए: ";
var gui_txt_home_path_new="\n\nनया पथ होम है: \n\n";

var gui_txt_group_permissions="अनुमतियाँ:";
var gui_txt_option_chmod="chmod";
var gui_txt_option_chown="chown";

var gui_txt_group_filesize="वजन फ़ाइल:";
var gui_txt_group_titleid="ID गेम का:";

var gui_txt_btn_set_filesize="स्थापित करना";
var gui_txt_set_titleid="PS3XPLOIT";
var gui_txt_btn_set_titleid="स्थापित करना";

var gui_txt_group_path_source="स्रोत:";
var gui_txt_group_path_destination="गंतव्य: ";

// XMB Transfer
var gui_txt_syscall_group_xmb_transfer="स्थानांतरण विकल्प XMB ";
var gui_txt_option_xmb_photo="फ़ोटो";
var gui_txt_option_xmb_music="संगीत";
var gui_txt_option_xmb_video="वीडियो";
var gui_txt_option_xmb_jpg_btn="प्रेस &#x25B3 को JPG";
var gui_txt_option_xmb_mp3_btn="प्रेस &#x25B3 को MP3";
var gui_txt_option_xmb_mp4_btn="प्रेस &#x25B3 को MP4";
var gui_txt_option_xmb_save_msg="&#x2192 पुरालेख &#x2192 सहेजे गए गंतव्य &#x2192 सिस्टम संग्रहण";

var gui_txt_group_payload_type="टाइप Payload ";
var gui_txt_group_payload_type_help="की जगह payloads अपने स्वयं के साथ, समान नामों का उपयोग कर, और उन्हें फ़ोल्डर में रखकर TEMPLATE/payloads/ अपने सेHTML";

// String Search
var gui_txt_group_string_search="खोज:";
var gui_txt_option_search_size="भार";
var gui_txt_option_search_base="आधार";
var gui_txt_option_search_stack="बैटरी (Stack)";
var gui_txt_option_search_range="पद";
var gui_txt_option_search_loops="बातचीत";

var gui_chk_search_verify_jumps="सत्यापित करें:";
var gui_chk_search_verify_stackframe="ढेर फ्रेम:";
var gui_chk_search_debug_output="डिबग:";

var gui_txt_search_found_offsets="Offsets पाया: base_fp: 0x0 | stack_frame_addr: 0x0 | jump_2_addr: 0x0 | jump_1_addr: 0x0";

// Buttons
var gui_txt_option_init_rop_btn="चेन शुरू करें ROP";
var gui_txt_option_exec_rop_btn="भागो चेन ROP";
var gui_txt_option_reload_page_btn="पृष्ठ पुनः लोड करें";
var gui_txt_option_reset_btn="विकल्प पुनरारंभ करें";
var gui_txt_option_load_settings_btn="लोड कॉन्फ़िगरेशन";
var gui_txt_option_save_settings_btn="सेटिंग्स सहेजें";
var gui_txt_option_debug_show_var_btn="सभी चर दिखाएँ";
