// PS3Xploit Index GUI Messages [Turkish]
// PS3Xploit Team 2018 / ps3xploit.com

// Translation Credits: @yanealaka [Metinfield]


// After complete translate the language file update it to latest revision (same as en-US)
var current_minimum_lang_revision="0003";
var gui_incomplete_lang="Mevcut çeviri eksik, güncellenmeyi düşünün veya atlayın.";

var msg_select_vsh_type="Use CEX?\n\nSelecting NO will use DEX offsets";

var msg_detected_fw_1="Algılanan Sürüm: ";
var msg_detected_fw_2=" ";
//var msg_detected_fw_3=" / MinVer: ";
var msg_detected_fw_4=" | TÜM Modelleri ve 4.xx Yazılımları Destekler";

var compat_msg_wrong_fw1="PS3'ünüz uyumlu bir sürümde değil! Hali hazırda çalışan Yazılım sürümünüz ";
var compat_msg_wrong_fw2=", PS3Xploit ile uyumlu değildir. Tüm özellikler devre dışı bırakıldı";
var compat_msg_success1="Tebrikler! PlayStation 3'ünüzün Yazılım  kullandığını tespit ettik. ";
var compat_msg_success2=", PS3Xploit ile uyumlu! Keyfini çıkarın!";

var msg_option_not_available="Bu Seçenek Henüz Mevcut Değil!";

// Settings
var msg_settings_load="Bu deneysel ve ayarları bir çerezden yükler!";
var msg_settings_save="Bu deneysel ve ayarları bir tanımlama bilgisine kaydeder!";

// MinVer/CFW Compatibility
var msg_minver_loaded_into_mem="Dönüş Değeri Bellekte Yüklendi!\n\nOku ve Göstermek İçin Yürüt düğmesine tekrar basın!";
var msg_filesize_loaded_into_mem="File Size Return Value Loaded Into Memory!\n\nPress Execute Button Again To Read and Display!";
var msg_minver_start="Minimum İndirme Sürümünüz: ";
var msg_minver_mid=" Ve Bir ";
var msg_minver_end=" şu anda CFW ile uyumlu!";
var msg_minver_compat_not="Değil";
var msg_filesize="File Size is: 0x";

// CELL/RSX Temperatures
var msg_temps_loaded_into_mem="CELL/RSX Temp Return Values Loaded Into Memory!\n\nPress Execute Button Again To Read and Display!";
var msg_temps_cell="CELL Sıcaklığı: ";
var msg_temps_rsx="\n\nRSX Sıcaklığı: ";
var msg_temps_celcius=" Celcius";

// MemDump
var msg_memdump_warning="UYARI!\n\nBoşaltma işlemi sırasında boş alana isabet ederseniz bu test donacak!\n\nKaza öncesinde geçerli bir dökümü almaya devam edersiniz.!";
var msg_memdump_idps_vsh="Sadece 4.66 / 4.81 / 4.82 Şu Anda VSH Belleğinden IDPS Doğrudan Döndermek İçin Destekleniyor!\n\nFlash Extract IDPS Tabanlı Zincir Farklıdır.\n\nDiğer tüm FW versiyonları muhtemelen hepsini boşa çıkaracaktır 0s.";
var msg_memdump_size="Raw VSH MemDump Values\n\nSize: 0x";
var msg_memdump_start_addr="\nBaşlatma Addresiniz: 0x";
var msg_memdump_end_addr="\nBitiş Adresiniz: 0x";

// Warnings
var msg_fd_close_warning="Dosya Açıklayıcıları Şu anda Kapalı Değil!";
var msg_remove_dir_warning="UYARI!\n\nBe bu sistem kullanırken Dikkatli Olun.\n\nGerekli bir dizini kaldırıp Yazılımı yeniden yüklemeniz gerekiyor!";
var msg_warning_write_protection="Yazma Koruması Devre dışı!\n\n Dikkatle ilerle!!!";

var msg_cobra_only="ALARIM!\n\nSADECE COBRA'yla Çalışır CFW'de Etkindir!";

var msg_mount_test="** Daha Fazla TEST **";
var msg_mount_no_disc="This Will Unmount dev_usb000 as dev_bdvd\n\nThere should be NO DISC in the drive!";
var msg_mount_yes_disc="This Will Unmount dev_bdvd and dev_usb000, then mount dev_usb000 as dev_bdvd\n\nThere should be A DISC present in the drive!";
var msg_mount_ps3_disc="This Will Mount dev_bdvd as a PS3 Disc\n\nThere should be a DISC present in the drive!";
var msg_mount_usb_enable="R9 Pointer Enabled!\n\nValue Is Set To Temp Address";
var msg_mount_usb_disable="R9 Pointer Disabled!\n\nValue Is Set To 0";

// File Operations
var msg_default_size="Varsayılanı Kullanma Size 0x140";
var msg_new_size="Yeni Dosya Boyutu: ";
var msg_destination_path_set_new="Yeni Yol Ayarla:\n\n";
var msg_destination_path_incorrect="Hedef Yolu Yanlış!\n\nIt Must Be Set Before Changing Title ID.";

// Trigger Messages
var trigger_msg="Triggering exploit...";
var trigger_msg2="Trigger: 0x";

// Ready To Search
var msg_search_ready="<h3><b>Ready To Begin! <br>Select Chain and Options From Above, Then Press Initialize ROP Chain button!</b></h3>";

// Shows After Initial Exec Button Click
var msg_exec_init="<h3><b>Executing Chain! <br>Please Wait Until The Execution Has Finished....</b></h3>";

// Search Strings
var msg_search_offsets="<h3><b>Bellekte Ofset Aranıyor! Lütfen bekleyin.... <br>If Sabırsızsın, Tarayıcıyı Kapat ve Bulunmazsa Yaklaşık 60-90 Saniye Sonra Yeniden Dene.!</b></h3>";
var msg_verify_offsets="<h3><b>Verifying Offsets In Memory! Please Wait.... <br>Tarayıcınızı  kapatmayın!</b></h3>";

// Fail Search Messages
var msg_string_search_fail="<h3><b><font color='#7700DA'>Tüm Uzaklıkları Bulmadınız!</font><font color='#7700DA'> If Arama Tekrarı Hatalar, Arama Ayarlarını Düzenle veya Tarayıcıyı YENİDEN BAŞLAT!</font></b></h3>";
var msg_string_search_fail_max="<h3><b><font color='#7700DA'>Tüm Ofsetleri Bulunamadı!</font><font color='#7700DA'> Maksimum Denemeye Denendi! Lütfen tarayıcıyı  Yeniden Başlatınız!</font></b></h3>";

// Verify Strings Fail
var msg_string_verify_fail="<h3><b><font color='#7700DA'>Tüm Ofsetleri Doğrulamıyor!</font><font color='#7700DA'> Doğrulama Tekrar Hatalıysa, tarayıcıyı  Yeniden Başlat!</font></b></h3>";
var msg_string_verify_fail_max="<h3><b><font color='#7700DA'>Tüm Ofsetleri Doğrulamıyor!</font><font color='#7700DA'> Maksimum Denemeye Denendi! Lütfen tarayıcıyı  Yeniden Başlatınız!</font></b></h3>";

// Init Success
var msg_success_init="<h3><b><font color='#386E38'>TAMAMLANDI!</font><br><font color='#7700DA'>Şimdi Dosyaları Çalıştırabilirsiniz!</font></b></h3>";

// Exec Success
var success_chain_exec="<h3><b><font color='#386E38'>İşlemler Başarıyla Tamamlandı!</font></b><br> &nbsp;</h3>";
var success_chain_exec_press_again="<h3><b><font color='#386E38'>Bir Kez Daha Devam Etme Düğmesine Bas!</font></b></h3>";
var success_chain_exec_psid="<h3><b><font color='#386E38'>PSID Dumped Tamamlandı!</font></b></h3>";
var success_chain_exec_idps="<h3><b><font color='#386E38'>IDPS Dumped Tamamlandı!</font></b></h3>";
var success_chain_exec_syscall_dump="<h3><b><font color='#386E38'>Syscall Return Value Dumped Tamamlandı!</font></b></h3>";
var success_chain_exec_memdump="<h3><b><font color='#386E38'>Memory Dumped Tamamlandı!</font></b></h3>";
var success_chain_exec_read_write_file="<h3><b><font color='#386E38'>Tamamlandı Transferred Source To Destination!</font></b></h3>";
var success_mount_device="<h3><b><font color='#386E38'>Successfully Mounted Device!</font></b></h3>";

// Compatibility/Offset Messages
var ua_msg="<hr><h3>PS3 Sistem Tarayıcı Bilgisi: "+navigator.userAgent+ "</h3>";
var compat_msg_nops3="PlayStation System'de değilsin! Tüm özellikler devre dışı bırakıldı";
var compat_msg_devs="This Is For Developers Only!\n\nCEX offsets will need to be added manually to /js/chains/offsets.js file, based on your DEX offsets in use for each chain.";
var experimental="Set Your Home Page To This Page!\n\nUSE AT YOUR OWN RISK!\nThere could be bugs and some things may not work!\n\nAll Models On 4.xx CEX and 4.81 DEX Are Supported";

// Other Messages
var msg_prerelease="THIS IS AN EARLY PREVIEW RELEASE!\n\nOLDER FIRMWARE SUPPORT HAS ONLY BEEN PARTIALLY IMPLEMENTED!\n\n4.81/4.82 ONLY UNTIL NEXT RELEASE!";
var msg_anti_piracy="DISCLAIMER\n\nWe DO NOT condone or endorse PIRACY of any kind!\n\nBy using this tutorial, and clicking YES, you agree to use it for educational purposes ONLY!";
var msg_anti_piracy_edat="ANTI-PIRACY DISCLAIMER!\n\nThis option is intended for testing and development purposes only, and should not be abused!\n\nBy clicking YES you agree to ONLY use this for titles that have been purchased!";

// Devices
var msg_device_loaded_into_mem="Device Return Value Loaded Into Memory!\n\nPress Execute Button Again To Read and Display!";
var msg_get_device_info1="Returned Device: ";
var msg_get_device_info2="\n\nUse This For sys_storage_report_devices Chain";

// Debugging

var msg_stackframe_check="This will check the default stackframe for problems.\n\nIf it crashes or does not display a success message, then there is an issue!";

// String Matching
var verify_fail="<font color='#7700DA'>BAŞARISIZ: Strings Do Not Match In Memory!</font>";
var verify_success="<font color='#2a1003'>TAMAMLANDI: Strings Match In Memory!</font>";
var verify_skip="<font color='#2a1003'>TAMAMLANDI: Not Verifying Strings In Memory!</font>";

var msg_search_flash_type_start="Params Set İçin Ara ";
var msg_search_flash_type_end=" Flash Tipi!";

var msg_chk_mem_arg_error="checkMemory function arguments error! size=0x";
var msg_malformed_html="Kusurlu HTML!";
var msg_string_located=" Found at offset: 0x";
var msg_string_not_located="could not be located in range";

// Found Offsets
var msg_found_offsets="<h4><b>Bulunan Ofsetleri Bulundu: ";
var msg_verified_offsets="<h4><b>Doğrulanmış Ofsetler: ";

var msg_page_args_not_set="Sayfa Argümanları Ayarlanmadı!\n\nClick The Set Arguments Button and Retry!";
var msg_no_chain_selected="Seçilen ROP Zinciri Seçimi Yok\n\nUse The Drop-Down Box To Select One";
var msg_media_not_supported="Bu Medya Seçimi Henüz Yürütülmedi!";
var msg_cannot_continue="Devam Edilemiyor .... Geri Dönülüyor!";

var msg_invalid_title_id="UYARI!\n\nGirilen Başlık Kimliğinin Geçersiz Bir Boyutu Var!\n\nUsing Default ID.";

// index GUI text
var gui_title="PS3 Eğitim Şablonu ";
var guy_by="by ";
var gui_credits="Many thanks to xerpi for the userland memory leak exploit B7U3 port, zecoxao & Joonie for their early & continued support, mysis for documenting vsh exports & plugins, the psdevwiki contributors of course, STLcardsWS for his long standing contribution & all ps3 community hackers/devs past & present, you know who you are. Thanks to littlebalup as well for providing the idea & the related js implementation we used to make the HDD edition of the Dumpers and Flasher. Also thanks to B7U3 C50SS, Endless, and 0x1991337 for tutorial syscall testing and other help! <font color='yellow'>Hakkında Ve daha fazla bilgi ve haberler <a href='http://www.psx-place.com'>http://www.psx-place.com</a>. Resmi Site <a href='http://ps3xploit.com'>http://ps3xploit.com</a></font>";

// Checkboxes First Section
var gui_chk_default_settings="Varsayılan Ayarlar:";
var gui_chk_disable_trigger="Başlatmayı Devredışı Bırak:";
var gui_chk_write_protect="Yazmaya Karşı Korumalı:";
var gui_chk_usb_mount="USB:";

// Reboot Mode
var gui_chk_reboot_mode="Yeniden Başlatma Modu:";
var gui_chk_reboot_mode_select="* Mod seç *";
var gui_chk_reboot_mode_soft="Normal Mod";
var gui_chk_reboot_mode_hard="Hard Reboot";
var gui_chk_reboot_mode_off="Gücü Kapat";

// ROP Chain Text

// Preset Chains
var gui_txt_preset_chains="Ayar İşlemleri: ";
var gui_txt_preset_chains_default="Varsayılan/Test";
var gui_txt_option_stackframe_test="Stackframe Test";
var gui_txt_option_beep_test="Bip Test";
var gui_txt_option_power_test="Güç Test";
var gui_txt_option_minver_check="Minimum Version Kontrol";
var gui_txt_option_sys_game_get_temperature="Show CELL/RSX Göster";
var gui_txt_option_game_debug_pafjob_test="Oyun Hata Ayıklama PafJob Testi";
var gui_txt_option_console_write_test="Konsol Yazma Testi";
var gui_txt_option_sys_tty_read="TTY Okuma Testi";
var gui_txt_option_sys_tty_write="TTY Yazma Test";

// Dumping
var gui_txt_preset_chains_dumping="Dumping";
var gui_txt_option_webkit_search_area="Dump WebKit Search Area";
var gui_txt_option_system_info_multi_dump="System Info Multi Dump";
var gui_txt_option_dump_lv2_syscall_table="Dump LV2 Syscall Table";
var gui_txt_option_mem_dump_test="Dump Raw VSH Memory";
var gui_txt_option_get_open_psid="Dump PSID";
var gui_txt_option_dump_idps_from_mem="Dump IDPS From VSH";
var gui_txt_option_sys_net_dump="SysNet Dump";
var gui_txt_sys_sm_get_platform_info="Get Platform Info";
var gui_txt_option_dump_idps_from_flash="Dump IDPS From Flash";

// File System
var gui_txt_preset_chains_file_system="Dosya sistemi";
var gui_txt_option_create_new_user="Create New User";
var gui_txt_option_mount_usb_as_bdvd="Mount USB000 as BDVD";
var gui_txt_option_mount_usb_as_bdvd_no_disc="Mount USB000 as BDVD No Disc";
var gui_txt_option_mount_other_as_bdvd="Mount Other Device as BDVD";
var gui_txt_option_mount_bdvd_as_ps3_disc="Mount BDVD as PS3 Disc";
var gui_txt_option_db_rebuild="Veritabanı Yeniden Oluştur";
var gui_txt_option_get_filesize="Get Filesize";
var gui_txt_option_file_read_write_test="Okuma/Yazma Dosyası Testi";
var gui_txt_option_dir_read_write_test="Dizin Testi Okuma/Yazma";

// Fun
var gui_txt_preset_chains_fun="Eğlence";
var gui_txt_option_fun_test="Bip Test";
var gui_txt_option_test_only="Chain Test For Devs";
var gui_txt_option_xmb_plugin_test="XMB Plugin Test";
var gui_txt_option_busy_icon_test="Busy Icon Test";
var gui_txt_option_vsh_printf_test="VSH printf Test";
var vsh_printf_arg1="MESSAGE: ";
var vsh_printf_arg2="HELLO FROM TEAM PS3XPLOIT!";

// Other Syscall Chains

// Memory/System
var gui_txt_syscall_group_mem_sys="Hafıza/Sistem: ";
var gui_txt_syscall_chains_mem_sys="Hafıza";

// Storage
var gui_txt_syscall_chains_storage="Depolama";

// System
var gui_txt_syscall_chains_system="Sistem";

// Process/Thread

// Process
var gui_txt_syscall_group_proc_thread="Süreci/Konu: ";
var gui_txt_syscall_chains_proc_thread="Sürec";

// Process ID
var gui_txt_syscall_chains_process="Proc ID";

// Threads
var gui_txt_syscall_chains_threads="Çekirdek Parçacıkları";

// Thread ID
var gui_txt_syscall_chains_thread_id="Thread ID";

// Network
var gui_txt_syscall_group_network="Ağ: ";

// Debugging
var gui_txt_syscall_group_debugging="Debug Hata Ayıklama: ";
var gui_txt_syscall_chains_debug_sc="Sistem Çağrıları";

// LED Control
var gui_txt_syscall_group_led="LED Kontrol:";
var gui_txt_syscall_chains_led="* Zincir Seçimi *";

var gui_txt_syscall_chains_led_color="Rengi Değiştir";
var gui_txt_option_led_color_green="Yeşil";
var gui_txt_option_led_color_yellow_red="Sarı/Kırmızı";
var gui_txt_option_led_color_off="Kapalı";

var gui_txt_syscall_chains_led_action="İşlemi Değiştir";
var gui_txt_option_led_action_on="Açık";
var gui_txt_option_led_action_off="Kapalı";
var gui_txt_option_led_action_blink_fast="Hızlı İşlem";
var gui_txt_option_led_action_blink_slow="Yavaş İşlem";

// Beep Parameters
var gui_txt_syscall_group_beep_params="Sesli Uyarı Parametreleri: ";
var gui_txt_syscall_chains_beeps="# Bip Sesi";
var gui_txt_option_beep_off="Kapat";
var gui_txt_option_beep_3="3 Bip";
var gui_txt_option_beep_2="2 Bip";
var gui_txt_option_beep_2f="2 Bip Hızlı";
var gui_txt_option_beep_1="1 Bip";
var gui_txt_option_beep_1f="1 Bip Hızlı";
var gui_txt_option_beep_flatline="Düz Çizgi";

// Memory Dump
var gui_txt_syscall_group_memdump="Bellek Dump:";
var gui_txt_memdump_addresses="BellekDump Adresi,";
var gui_txt_memdump_size="BellekDump Boyutu";
var gui_txt_memdump_range_presets="Hazır Ayarlar:";
var gui_txt_option_memdump_presets_default="* Hazır Ayarlar Seçilmedi *";

var gui_txt_memdump_address_start="Başlat:";
var gui_txt_memdump_address_end="Bitti:";
var gui_txt_btn_memdump_set_values="Yeni Değerleri Ayarla";

var gui_txt_mounting_setup="Mounting: ";
var gui_txt_option_mount_device="Device Name";
var gui_txt_option_mount_fs="File System";
var gui_txt_option_mount_path="Mount Path";

var gui_txt_group_user_id="Kullanıcı ID:";
var gui_txt_option_user_id_default="* Varsayılan *";
var gui_txt_user_id_new="Kullanıcı Kimliği Belirle: ";
var gui_txt_home_path_new="\n\nYeni Dosya Yolu: \n\n";

var gui_txt_group_permissions="İzinler:";

var gui_txt_group_filesize="Dosya boyutu:";
var gui_txt_group_titleid="TitleID:";

var gui_txt_btn_set_filesize="Set";
var gui_txt_btn_set_titleid="Set";

var gui_txt_group_path_source="Kaynak:";
var gui_txt_group_path_destination="Hedef: ";

// XMB Transfer
var gui_txt_syscall_group_xmb_transfer="XMB Transfer Seçeneği ";
var gui_txt_option_xmb_photo="Resim";
var gui_txt_option_xmb_music="Müzik";
var gui_txt_option_xmb_video="Video";
var gui_txt_option_xmb_jpg_btn="Basın &#x25B3 For JPG";
var gui_txt_option_xmb_mp3_btn="Basın &#x25B3 For MP3";
var gui_txt_option_xmb_mp4_btn="Basın &#x25B3 For MP4";
var gui_txt_option_xmb_save_msg="&#x2192 File &#x2192 Hedefi Kaydet &#x2192 Sistem Depolama";

var gui_txt_group_payload_type="Payload Taşıma Türü ";
var gui_txt_group_payload_type_help="Varsayılan Payloads dosyalarınızla değiştirin, aynı adları kullanın ve TEMPLATE/payloads/klasöründe HTML kaynağı altına yerleştirin";

// String Search
var gui_txt_group_string_search="Arama:";
var gui_txt_option_search_size="Boyut";
var gui_txt_option_search_base="Temel";
var gui_txt_option_search_stack="Yığın";
var gui_txt_option_search_range="Menzil";
var gui_txt_option_search_loops="Döngü";

var gui_chk_search_verify_jumps="Atlamaları Doğrulayın:";
var gui_chk_search_verify_stackframe="Yığın :";
var gui_chk_search_debug_output="Debug Hata Ayıklama:";

// Buttons
var gui_txt_option_init_rop_btn="ROP İşlemini Başlat";
var gui_txt_option_exec_rop_btn="İşlemi Başlat";
var gui_txt_option_reload_page_btn="Sayfayı Yeniden Yükle";
var gui_txt_option_reset_btn="Ayarları Resetle";
var gui_txt_option_load_settings_btn="Ayarları Yükle";
var gui_txt_option_save_settings_btn="Ayatları Kaydet";
var gui_txt_option_debug_show_var_btn="Tüm Değişkenleri Göster";
