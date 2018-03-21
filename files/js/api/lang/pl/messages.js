// PS3Xploit Index GUI Messages [Polish]
// PS3Xploit Team 2018 / ps3xploit.com

// Translation Credits: NiHuShu (@Roxu14)


// After complete translate the language file update it to latest revision (same as en-US)
var current_minimum_lang_revision="0000";
var gui_incomplete_lang="Current translation is incomplete, consider updating or just skip it";

var msg_select_vsh_type="Użyć CEX?\n\nWybranie NIE spowoduje użycie offsetów DEX";

var msg_detected_fw_1="Wykryte FW: ";
var msg_detected_fw_2=" ";
//var msg_detected_fw_3=" / MinVer: ";
var msg_detected_fw_4=" | Wspiera Wszystkie Modele i Firmware 4.xx";

var compat_msg_wrong_fw1="Twoje PS3 nie używa kompatybilnej wersji FW! Twoja aktualna wersja FW to: ";
var compat_msg_wrong_fw2=", która nie jest kompatybilna z PS3Xploit. Wszystkie funkcje zostały wyłączone";
var compat_msg_success1="Gratulacje! Wykryliśmy, że twoje PlayStation 3 posiada FW: ";
var compat_msg_success2=", które jest kompatybilne z PS3Xploit! Baw się dobrze!";

var msg_option_not_available="Ta opcja nie jest jeszcze dostępna!";

// Settings
var msg_settings_load="To experymentalna funkcja która ładuje ustawienia z ciasteczek!";
var msg_settings_save="To experymentalna funkcja która zapisuje ustawienia do ciasteczek!";

// MinVer/CFW Compatibility
var msg_minver_loaded_into_mem="MinVer Zwraca Wartość Zapisaną w Pamięci!\n\nNaciśnij Ponownie Wykonaj aby Odczytać i Wyświetlić!";
var msg_filesize_loaded_into_mem="File Size Return Value Loaded Into Memory!\n\nPress Execute Button Again To Read and Display!";
var msg_minver_start="Minimalna Wersja Systemu Twojego PS3 to: ";
var msg_minver_mid=" i jest ona ";
var msg_minver_end=" kompatybilna z CFW na ten moment!";
var msg_minver_compat_not="NOT";
var msg_filesize="File Size is: 0x";

// CELL/RSX Temperatures
var msg_temps_loaded_into_mem="Temperatury Procesora/Karty Graficznej (CELL/RSX) Zwracają Wartości Zapisane w Pamięci!\n\nNaciśnij Ponownie Wykonaj aby Odczytać i Wyświetlić!";
var msg_temps_cell="Temperatura Procesora (CELL): ";
var msg_temps_rsx="\n\nTemperatura Karty Graficznej (RSX): ";
var msg_temps_celcius=" Stopni";

// MemDump
var msg_memdump_warning="Uwaga!\n\nTen test zawiesi się jeżeli nieprzydielona pamięć zostanie naruszona podczas procesu zrzucania!\n\nMimo to otrzymasz prawidłowy zrzut, aż do momentu zawieszenia!";
var msg_memdump_idps_vsh="Tylko Wersje 4.66/4.81/4.82 Wspierają Zrzucanie IDPS Bezpośrednio z Pamięci VSH!\n\nFlash Extract IDPS Based Chain to co innego.\n\nWszystkie inne wersje najprawdopodobniej zrzucą same zera";
var msg_memdump_size="Raw VSH MemDump Values\n\nSize: 0x";
var msg_memdump_start_addr="\nStart Address: 0x";
var msg_memdump_end_addr="\nEnd Address: 0x";

// Warnings
var msg_fd_close_warning="Deskryptory Plików Nie Zamykają Się Automatycznie!";
var msg_remove_dir_warning="UWAGA!\n\nBądź ostrożny używając tego syscall-a.\n\nMożesz przez przypadek usunąć ważny folder i będziesz musiał reinstalować system!";
var msg_warning_write_protection="Ochrona Przed Zapisem WYŁĄCZONA!\n\nUważaj Co Robisz!!!!";

var msg_cobra_only="OSTRZEŻENIE!\n\nTo Działa Tylko i WYŁĄCZNIE na CFW z Włączoną COBRA!";

var msg_mount_test="** W FAZIE TESTÓW **";
var msg_mount_no_disc="This Will Unmount dev_usb000 as dev_bdvd\n\nThere should be NO DISC in the drive!";
var msg_mount_yes_disc="This Will Unmount dev_bdvd and dev_usb000, then mount dev_usb000 as dev_bdvd\n\nThere should be A DISC present in the drive!";
var msg_mount_ps3_disc="This Will Mount dev_bdvd as a PS3 Disc\n\nThere should be a DISC present in the drive!";
var msg_mount_usb_enable="R9 Pointer Enabled!\n\nValue Is Set To Temp Address";
var msg_mount_usb_disable="R9 Pointer Disabled!\n\nValue Is Set To 0";

// File Operations
var msg_default_size="Używam Domyślnego Rozmiaru Pliku 0x140";
var msg_new_size="Nowy Rozmiar Pliku: ";
var msg_destination_path_set_new="New Path Set To:\n\n";
var msg_destination_path_incorrect="Ścieżka Docelowa Jest Nieprawidłowa!\n\nMusisz Ją Ustalić przed Ustawieniem TitleID.";

// Trigger Messages
var trigger_msg="Wykonywanie Exploitu...";
var trigger_msg2="Wykonywanie: 0x";

// Ready To Search
var msg_search_ready="<h3><b>Ready To Begin! <br>Select Chain and Options From Above, Then Press Initialize ROP Chain button!</b></h3>";

// Shows After Initial Exec Button Click
var msg_exec_init="<h3><b>Executing Chain! <br>Please Wait Until The Execution Has Finished....</b></h3>";

// Search Strings
var msg_search_offsets="<h3><b>Poszukiwanie Offsetów w Pamięci! Proszę Czekać.... <br>Jeżeli Jesteś Niecierpliwy, Zamknij Przeglądarkę i Spróbuj Ponownie za Około 60-90 Sekund Jeżeli Nic Nie Znaleziono!</b></h3>";
var msg_verify_offsets="<h3><b>Weryfikowanie Offsetów w Pamięci! Proszę Czekać.... <br>NIE ZAMYKAJ NARAZIE PRZEGLĄDARKI!</b></h3>";

// Fail Search Messages
var msg_string_search_fail="<h3><b><font color='#7700DA'>Nie Znaleziono Odpowiedniej Ilości Offsetów!</font><font color='#7700DA'> Jeżeli Wyszukiwanie Nie Powiedzie Się Ponownie, Dostosuj Ustawienia Wyszukiwania lub ZRESETUJ Przeglądarkę!</font></b></h3>";
var msg_string_search_fail_max="<h3><b><font color='#7700DA'>Nie Znaleziono Odpowiedniej Ilości Offsetów!</font><font color='#7700DA'> Maxymalna Ilość Prób Osiągnięta! Zresetuj Przeglądarkę!</font></b></h3>";

// Verify Strings Fail
var msg_string_verify_fail="<h3><b><font color='#7700DA'>Nie Zweryfikowano Odpowiedniej Ilości Offsetów!</font><font color='#7700DA'> Jeżeli Weryfikacja Nie Powiedzie Się Ponownie To Zresetuj Przeglądarkę!</font></b></h3>";
var msg_string_verify_fail_max="<h3><b><font color='#7700DA'>Nie Zweryfikowano Odpowiedniej Ilości Offsetów!</font><font color='#7700DA'> Maxymalna Ilość Prób Osiągnięta! Zresetuj Przeglądarkę!</font></b></h3>";

// Init Success
var msg_success_init="<h3><b><font color='#386E38'>SUKCES!</font><br><font color='#7700DA'>Możesz Teraz Wykonać Swój Chain!</font></b></h3>";

// Exec Success
var success_chain_exec="<h3><b><font color='#386E38'>Chain Wykonany Prawidłowo!</font></b><br> &nbsp;</h3>";
var success_chain_exec_press_again="<h3><b><font color='#386E38'>Naciśnij Przycisk WYKONAJ Ponownie!</font></b></h3>";
var success_chain_exec_psid="<h3><b><font color='#386E38'>Zrzut PSID Powiódł Się!</font></b></h3>";
var success_chain_exec_idps="<h3><b><font color='#386E38'>Zrzut IDPS Powiódł Się!</font></b></h3>";
var success_chain_exec_syscall_dump="<h3><b><font color='#386E38'>Syscall Return Value Dumped Successfully!</font></b></h3>";
var success_chain_exec_memdump="<h3><b><font color='#386E38'>Zrzut Pamięci Powiódł Się!!</font></b></h3>";
var success_chain_exec_read_write_file="<h3><b><font color='#386E38'>Udało Się Zrzucić Plik/Folder Źródłowy Do Folderu Docelowego!</font></b></h3>";
var success_mount_device="<h3><b><font color='#386E38'>Successfully Mounted Device!</font></b></h3>";

// Compatibility/Offset Messages
var ua_msg="<hr><h3>Informacje o Przeglądarce Systemu PS3: "+navigator.userAgent+ "</h3>";
var compat_msg_nops3="Nie używasz Systemu PS3! Wszystkie Opcje Zostały Wyłączone";
var compat_msg_devs="To jest Tylko dla Developerów!\n\nOffsety CEX muszą być dodane manualnie do pliku /js/chains/offsets.js , Bazując na Twoim DEX dla każdego  chain.";
var experimental="Set Your Home Page To This Page!\n\nUŻYWASZ NA WŁASNĄ ODPOWIEDZIALNOŚĆ!\nMogą Wystepować Błędy i Nie Wszystko Działą Prawidłowo!\n\nWszystkie modele mające 4.xx CEX i 4.81 DEX są wspierane";

// Other Messages
var msg_prerelease="TO JEST WCZESNA WERSJA TESTOWA!\n\nSTARSZE FW JEST WSPIERANE CZĘŚCIOWO!\n\nTYLKO WERSJE 4.81/4.82 DO NASTĘPNEJ WYDANIA!";
var msg_anti_piracy="OSTRZEŻENIE\n\nNie wspieramy w PIRACTWA!\n\nużywając tego tutorialu, i naciskając TAK, Zgadzasz się używać go TYLKO w celach edukacyjnych!";
var msg_anti_piracy_edat="OSTRZEŻENIE ANTY-PIRACKIE!\n\nTa opcja jest stworzona TYLKO do testów i nie powinna być nadużywana!\n\nNaciskając TAK zgadzasz się używać tego tylko na tytułach które zakupiłeś!";

// Devices
var msg_device_loaded_into_mem="Urządzenie Zwróciło Wartość do Pamięci!\n\nNacjiśnij Ponownie Przycisk Wykonaj aby Odczytać i Wyświetlić!";
var msg_get_device_info1="Urządzenie Zwracające: ";
var msg_get_device_info2="\n\nUżyj Tego Dla sys_storage_report_devices Chain";

// Debugging

var msg_stackframe_check="To sprawdzi domyślną stackframe pod względem problemów.\n\nJeżeli się zawiesi lub nie wyświetli wiadomości to oznacza, że jest problem.";

// String Matching
var verify_fail="<font color='#7700DA'>NIEPOWODZENIE: Obiekty String nie są Takie Same Jak Te w Pamięci!</font>";
var verify_success="<font color='#2a1003'>SUKCES: Obiekty String są Takie Same Jak w Pamięci!</font>";
var verify_skip="<font color='#2a1003'>SUKCES: Nie Sprawdzam Obiektów String w Pamięci!</font>";

var msg_search_flash_type_start="Parametry Wyszukiwania Ustawione Na ";
var msg_search_flash_type_end=" Typ Pamięci!";

var msg_chk_mem_arg_error="checkMemory funkcja zwraca błąd! size=0x";
var msg_malformed_html="Malformed HTML!";
var msg_string_located=" Znaleziono w offsecie: 0x";
var msg_string_not_located="nie można znaleźć w zakresie";

// Found Offsets
var msg_found_offsets="<h4><b>Znalezione Offsety: ";
var msg_verified_offsets="<h4><b>Zweryfikowane Offsety: ";

var msg_page_args_not_set="Page Arguments Not Set!\n\nClick The Set Arguments Button and Retry!";
var msg_no_chain_selected="No ROP Chain Hex Selected\n\nUse The Drop-Down Box To Select One";
var msg_media_not_supported="This Media Choice Is Not Implemented Yet!";
var msg_cannot_continue="Cannot Continue....Returning!";

var msg_invalid_title_id="UWAGA!\n\nThe Title ID Entered Has An Invalid Size!\n\nUsing Default ID.";

// index GUI text
var gui_title="PS3 Exploitation Tutorial Template ";
var guy_by="by ";
var gui_credits="Podziękowania dla xerpi za userland memory exploit, zecoxao i Joonie za ich długotrwałe wsparcie, mysis za dokumentowanie zrzutów vsh i wtyczki, twórców psdevwiki bez których projekt by nie powstał, STLcardsWS za jego długotrwałe wsparcie i dla całej społeczności ps3 a zwłaszcza dla hakerów i programistów. Dzięki littlebalup za podrzucenie pomysłu i implementacje js dzięki której zrobiliśmy wersję HDD Dumperów i Flasherów. Dziękuję również B7U3 C50SS, Endless i 0x1991337 za tutorial, testowanie syscall i inną pomoc! <font color='yellow'>Więcej szczegółów i informacji na <a href='http://www.psx-place.com'>http://www.psx-place.com</a>. Oficjalna Strona Projektu <a href='http://ps3xploit.com'>http://ps3xploit.com</a></font>";

// Checkboxes First Section
var gui_chk_default_settings="Domyślne Ustawienia:";
var gui_chk_disable_trigger="Wyłącz Trigger:";
var gui_chk_write_protect="Zabezpiecz Przed Zapisem:";
var gui_chk_usb_mount="USB:";

// Reboot Mode
var gui_chk_reboot_mode="Tryb Restartu:";
var gui_chk_reboot_mode_select="* Wybierz Tryb *";
var gui_chk_reboot_mode_soft="Miękki Restart";
var gui_chk_reboot_mode_hard="Twardy Restart";
var gui_chk_reboot_mode_off="Wyłącz Zasilanie";

// ROP Chain Text

// Preset Chains
var gui_txt_preset_chains="Preset Chains: ";
var gui_txt_preset_chains_default="Domyślny/Testowanie";
var gui_txt_option_stackframe_test="Test Stackframe";
var gui_txt_option_beep_test="Test Brzęczyka";
var gui_txt_option_power_test="Test Zasilania";
var gui_txt_option_minver_check="Sprawdzenie Minimalnej Wersji Oprogramowania";
var gui_txt_option_sys_game_get_temperature="Pokaż Temperatury Procesora/Karty Graficznej (CELL/RSX)";
var gui_txt_option_game_debug_pafjob_test="Game Debug PafJob Test";
var gui_txt_option_console_write_test="Test Zapisu Konsoli";
var gui_txt_option_sys_tty_read="TTY Test Odczytu";
var gui_txt_option_sys_tty_write="TTY Test Zapisu";

// Dumping
var gui_txt_preset_chains_dumping="Zrzucanie";
var gui_txt_option_webkit_search_area="Dump WebKit Search Area";
var gui_txt_option_system_info_multi_dump="Zrzuć Informacje o Systemie";
var gui_txt_option_dump_lv2_syscall_table="Zrzuć Tabelę LV2 Syscall";
var gui_txt_option_mem_dump_test="Zrzuć Zawartość Pamięci VSH";
var gui_txt_option_get_open_psid="Zrzuć PSID";
var gui_txt_option_dump_idps_from_mem="Zrzuć IDPS z VSH";
var gui_txt_option_sys_net_dump="Zrzuć SysNet";
var gui_txt_sys_sm_get_platform_info="Get Platform Info";
var gui_txt_option_dump_idps_from_flash="Zrzuć IDPS Z Pamięci Flash";

// File System
var gui_txt_preset_chains_file_system="System Plików";
var gui_txt_option_create_new_user="Create New User";
var gui_txt_option_mount_usb_as_bdvd="Mount USB000 as BDVD";
var gui_txt_option_mount_usb_as_bdvd_no_disc="Mount USB000 as BDVD No Disc";
var gui_txt_option_mount_other_as_bdvd="Mount Other Device as BDVD";
var gui_txt_option_mount_bdvd_as_ps3_disc="Mount BDVD as PS3 Disc";
var gui_txt_option_db_rebuild="Odbudowanie Bazy Danych";
var gui_txt_option_get_filesize="Get Filesize";
var gui_txt_option_file_read_write_test="Test Odczytu/Zapisu Plików";
var gui_txt_option_dir_read_write_test="Test Odczytu/Zapisu Folderów";

// Fun
var gui_txt_preset_chains_fun="Zabawa";
var gui_txt_option_fun_test="Test Brzęczyka";
var gui_txt_option_test_only="Chain Test For Devs";
var gui_txt_option_xmb_plugin_test="XMB Plugin Test";
var gui_txt_option_busy_icon_test="Busy Icon Test";
var gui_txt_option_vsh_printf_test="VSH printf Test";
var vsh_printf_arg1="MESSAGE: ";
var vsh_printf_arg2="HELLO FROM TEAM PS3XPLOIT!";

// Other Syscall Chains

// Memory/System
var gui_txt_syscall_group_mem_sys="Pamięć/System: ";
var gui_txt_syscall_chains_mem_sys="Pamięć";

// Storage
var gui_txt_syscall_chains_storage="Magazyn Danych";

// System
var gui_txt_syscall_chains_system="System";

// Process/Thread

// Process
var gui_txt_syscall_group_proc_thread="Proces/Wątek: ";
var gui_txt_syscall_chains_proc_thread="Proces";

// Process ID
var gui_txt_syscall_chains_process="ID Procesu";

// Threads
var gui_txt_syscall_chains_threads="Wątki";

// Thread ID
var gui_txt_syscall_chains_thread_id="ID Wątku";

// Network
var gui_txt_syscall_group_network="Sieć: ";

// Debugging
var gui_txt_syscall_group_debugging="Debugowanie: ";
var gui_txt_syscall_chains_debug_sc="System Calls";

// LED Control
var gui_txt_syscall_group_led="Kontrola LED:";
var gui_txt_syscall_chains_led="* Wybierz Chain *";

var gui_txt_syscall_chains_led_color="Kolor";
var gui_txt_option_led_color_green="Zielony";
var gui_txt_option_led_color_yellow_red="Żółty/Czerwony";
var gui_txt_option_led_color_off="Wyłącz";

var gui_txt_syscall_chains_led_action="Zachowanie";
var gui_txt_option_led_action_on="Włączona";
var gui_txt_option_led_action_off="Wyłączona";
var gui_txt_option_led_action_blink_fast="Mruga Szybko";
var gui_txt_option_led_action_blink_slow="Mruga Wolno";

// Beep Parameters
var gui_txt_syscall_group_beep_params="Ustawienia Brzęczyka: ";
var gui_txt_syscall_chains_beeps="Ilość Sygnałów";
var gui_txt_option_beep_off="Wyłącz";
var gui_txt_option_beep_3="3 Sygnały";
var gui_txt_option_beep_2="2 Sygnały";
var gui_txt_option_beep_2f="2 Szybkie Sygnały";
var gui_txt_option_beep_1="1 Sygnał";
var gui_txt_option_beep_1f="1 Szybki Sygnał";
var gui_txt_option_beep_flatline="Linia Życia";

// Memory Dump
var gui_txt_syscall_group_memdump="Zrzut Pamięci:";
var gui_txt_memdump_addresses="Adress MemDump";
var gui_txt_memdump_size="Rozmiar MemDump";
var gui_txt_memdump_range_presets="Ustawienia Predefiniowane:";
var gui_txt_option_memdump_presets_default="* Nie Wybrano Ustawienia *";

var gui_txt_memdump_address_start="początek:";
var gui_txt_memdump_address_end="Koniec:";
var gui_txt_btn_memdump_set_values="Ustaw Nowe Wartości";

var gui_txt_mounting_setup="Mounting: ";
var gui_txt_option_mount_device="Device Name";
var gui_txt_option_mount_fs="File System";
var gui_txt_option_mount_path="Mount Path";

var gui_txt_group_user_id="ID Użytkownika:";
var gui_txt_option_user_id_default="* Domyślne *";
var gui_txt_user_id_new="User ID Set To: ";
var gui_txt_home_path_new="\n\nNew Home Path Is: \n\n";

var gui_txt_group_permissions="Uprawnienia:";

var gui_txt_group_filesize="Rozmiar Pliku:";
var gui_txt_group_titleid="TitleID:";

var gui_txt_btn_set_filesize="Ustaw";
var gui_txt_btn_set_titleid="Ustaw";

var gui_txt_group_path_source="Źródło:";
var gui_txt_group_path_destination="Miejsce Docelowe: ";

// XMB Transfer
var gui_txt_syscall_group_xmb_transfer="Transfer XMB ";
var gui_txt_option_xmb_photo="Zdjęcie";
var gui_txt_option_xmb_music="Muzyka";
var gui_txt_option_xmb_video="Wideo";
var gui_txt_option_xmb_jpg_btn="Press &#x25B3 For JPG";
var gui_txt_option_xmb_mp3_btn="Press &#x25B3 For MP3";
var gui_txt_option_xmb_mp4_btn="Press &#x25B3 For MP4";
var gui_txt_option_xmb_save_msg="&#x2192 Plik &#x2192 Zapisz &#x2192 Pamięć Wewnętrzna";

var gui_txt_group_payload_type="Typ Ładunku (payload) ";
var gui_txt_group_payload_type_help="Zamień domyślne ładunki z własnymi plikami, używając tych samych nazw, i umieść w folderze TEMPLATE/payloads/";

// String Search
var gui_txt_group_string_search="Szukaj:";
var gui_txt_option_search_size="Rozmiar";
var gui_txt_option_search_base="Base";
var gui_txt_option_search_stack="Stack";
var gui_txt_option_search_range="Zakres";
var gui_txt_option_search_loops="Pętli";

var gui_chk_search_verify_jumps="Verify Jumps:";
var gui_chk_search_verify_stackframe="Stackframe:";
var gui_chk_search_debug_output="Debgowanie:";

// Buttons
var gui_txt_option_init_rop_btn="Zainicjuj ROP Chain";
var gui_txt_option_exec_rop_btn="Wykonaj  Chain";
var gui_txt_option_reload_page_btn="Odśwież Stronę";
var gui_txt_option_reset_btn="Zresetuj Ustawienia";
var gui_txt_option_load_settings_btn="Wczytaj Ustawienia";
var gui_txt_option_save_settings_btn="Zapisz Ustawienia";
var gui_txt_option_debug_show_var_btn="Pokaż Wszystkie Zmienne";
