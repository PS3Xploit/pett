// PS3Xploit Index GUI Messages [German]
// PS3Xploit Team 2018 / ps3xploit.com

// Translation Credits: @FlatracerMOD [Flatracer]


// After complete translate the language file update it to latest revision (same as en-US)
var current_minimum_lang_revision="0015";
var gui_incomplete_lang="Aktuelle Übersetzung ist unvollständig, ziehe in Betracht es zu übersetzen oder überspringe es einfach";

var msg_select_vsh_type="Nutzt du CEX?\n\nWenn du NEIN auswählst, werden automatisch DEX Offsets genutzt";

var msg_detected_fw_1="Festgestellte FW: ";
var msg_detected_fw_2=" ";
//var msg_detected_fw_3=" / MinVer: ";
var msg_detected_fw_4=" | Unterstützt alle Modelle und 4.xx Firmware";

var compat_msg_wrong_fw1="Deine PS3 ist nicht kompatibel! Wir haben festgestellt, dass deine PS3 mit Firmware ";
var compat_msg_wrong_fw2="betrieben wird, welche nicht mit PS3Xploit kompatibel ist. Alle Funktionen wurden deaktiviert";
var compat_msg_success1="Glückwunsch! Wir haben festgestellt, dass deine PS3 mit Firmware ";
var compat_msg_success2="betrieben wird, welche mit PS3Xploit kompatibel ist! Genieße es!";

var msg_option_not_available="Diese Option ist noch nicht verfügbar!";

// Settings
var msg_settings_load="Diese Option ist experimentel und lädt Einstellungen aus den Cookies!";
var msg_settings_save="Diese Option ist experimentel und speichert Einstellungen in den Cookies!";

// MinVer/CFW Compatibility
var msg_minver_loaded_into_mem="MinVer in den Arbeitsspeicher geladen!\n\nKlicke erneut auf 'Ausführen' um es auszulesen und anzuzeigen!";
var msg_filesize_loaded_into_mem="Dateigrößen-Rückgabewert in den Arbeitsspeicher geladen!\n\nKlicke erneut auf 'Ausführen' um es auszulesen und anzuzeigen!";
var msg_minver_start="Deine minimale Downgrade Version ist ";
var msg_minver_mid=" und ist ";
var msg_minver_end=" kompatibel mit einer CFW!";
var msg_minver_compat_not="NEIN";
var msg_filesize="File Size is: 0x";

// CELL/RSX Temperatures
var msg_temps_loaded_into_mem="CELL/RSX Temperaturen in den Arbeitsspeicher geladen!\n\nKlicke erneut auf Ausführen um es auszulesen und anzuzeigen!";
var msg_temps_cell="CELL Temperatur: ";
var msg_temps_rsx="\n\nRSX Temperatur: ";
var msg_temps_celcius=" Celsius";

// MemDump
var msg_memdump_warning="Warnung!\n\nDieser Test wird einfrieren, wenn ein nicht zugewiesener Speicherbereich während dem auslesen des Speichers getroffen wird.!\n\nDu wirst trotzdem eine gültige auslese erhalten, bis es abstürzt!";
var msg_memdump_idps_vsh="Nur 4.66/4.81/4.82 werden aktuell für das auslesen der IDPS, direkt aus dem VSH Speicher, unterstützt!\n\nDie IDPS aus dem Speicher extrahierende Kette ist anders.\n\nAlle anderen Firmwares werden vermutlich nur Nuller auslesen.";
var msg_memdump_size="Rohe VSH Speicherauslese Werte\n\nGröße: 0x";
var msg_memdump_start_addr="\nStart Addresse: 0x";
var msg_memdump_end_addr="\nEnd Addresse: 0x";

// Warnings
var msg_fd_close_warning="Dateideskriptoren werden aktuell nicht selbstständig geschlossen!";
var msg_remove_dir_warning="WARNING!\n\nSei vorsichtig beim verwenden dieses syscalls.\n\nDu könntest benötigte Ordner löschen und wärst gezwungen die Firmware erneut zu installieren!";
var msg_warning_write_protection="Schreibschutz deaktiviert!\n\nMit Vorsicht fortfahren!!!";

var msg_cobra_only="VORSICHT!\n\Das funktioniert nur mit aktiviertem COBRA auf CFW!";

var msg_mount_test="** IN TEST PHASE **";
var msg_mount_no_disc="Diese Option wird 'dev_usb000' als 'dev_bdvd' ausbinden\n\nEs darf sich keine Disc im Laufwerk befinden!";
var msg_mount_yes_disc="Diese Option wird 'dev_bdvd' und 'dev_usb000' ausbinden und anschließend 'dev_usb000' als 'dev_bdvd' einbinden\n\nEs muss sich eine Disc im Laufwerk befinden!";
var msg_mount_ps3_disc="Diese Option wird 'dev_bdvd' als eine PS3 Disc ausbinden\n\nEs muss sich eine Disc im Laufwerk befinden!";
var msg_mount_usb_enable="R9 Zeiger aktiviert!\n\nDer Wert ist auf die temporäre Adresse gesetzt";
var msg_mount_usb_disable="R9 Zeiger deaktiviert!\n\nDer Wert ist auf 0 gesetzt";

// File Operations
var msg_default_size="Nutze Standardgröße 0x140";
var msg_new_size="Neue Dateigröße: ";
var msg_destination_path_set_new="Neuer Pfad ist gesetzt zu:\n\n";
var msg_destination_path_incorrect="Der Ziel Pfad ist inkorrekt!\n\nDer Pfad muss gesetzt sein, bevor die Titel-ID geändert wird.";

// Trigger Messages
var trigger_msg="Löse den exploit aus...";
var trigger_msg2="Auslöser: 0x";

// Ready To Search
var msg_search_ready="<h3><b>Startbereit! <br>Wähle eine Kette und Option von oben aus. Drücke dann auf das 'ROP-Kette initialisieren' Feld!</b></h3>";

// Shows After Initial Exec Button Click
var msg_exec_init="<h3><b>Kette wird ausgeführt! <br>Bitte warte bis die Ausführung abgeschlossen ist....</b></h3>";

// Search Strings
var msg_search_offsets="<h3><b>Suche nach Offsets im Arbeitsspeicher! Bitte Warten.... <br>Falls du ungeduldig bist, schließe den Browser und versuche es in ca. 60-90 Sekunden erneut, sollte es nichts finden!</b></h3>";
var msg_verify_offsets="<h3><b>Verifiziere Offsets im Arbeitsspeicher! Bitte Warten.... <br>Den Browser NICHT SCHLIEẞEN!</b></h3>";

// Fail Search Messages
var msg_string_search_fail="<h3><b><font color='#7700DA'>Nicht alle Offsets wurden gefunden!</font><font color='#7700DA'> Sollte die Suche erneut fehlschlagen, passe die Sucheinstellungen an oder starte den Browser NEU!</font></b></h3>";
var msg_string_search_fail_max="<h3><b><font color='#7700DA'>Nicht alle Offsets wurden gefunden!</font><font color='#7700DA'> Maximale Versuche genutzt! Bitte starte den Browser NEU!</font></b></h3>";

// Verify Strings Fail
var msg_string_verify_fail="<h3><b><font color='#7700DA'>Nicht alle Offsets wurden verifiziert!</font><font color='#7700DA'> Sollte die Verifizierung erneut fehlschlagen, starte den Browser NEU!</font></b></h3>";
var msg_string_verify_fail_max="<h3><b><font color='#7700DA'>Nicht alle Offsets wurden verifiziert!</font><font color='#7700DA'> Maximale Versuche genutzt! Bitte starte den Browser NEU!</font></b></h3>";

// Init Success
var msg_success_init="<h3><b><font color='#386E38'>ERFOLG!</font><br><font color='#7700DA'>Du kannst nun deine Kette ausführen!</font></b></h3>";

// Exec Success
var success_chain_exec="<h3><b><font color='#386E38'>Kette erfolgreich ausgeführt!</font></b><br> &nbsp;</h3>";
var success_chain_exec_press_again="<h3><b><font color='#386E38'>Klicke ein weiteres mal auf Ausführen!</font></b></h3>";
var success_chain_exec_psid="<h3><b><font color='#386E38'>PSID erfolgreich ausgelesen!</font></b></h3>";
var success_chain_exec_idps="<h3><b><font color='#386E38'>IDPS erfolgreich ausgelesen!</font></b></h3>";
var success_chain_exec_syscall_dump="<h3><b><font color='#386E38'>Syscall Rückgabewert erfolgreich ausgelesen!</font></b></h3>";
var success_chain_exec_memdump="<h3><b><font color='#386E38'>Arbeitsspeicher erfolgreich ausgelesen!</font></b></h3>";
var success_chain_exec_read_write_file="<h3><b><font color='#386E38'>Quelle erfolgreich ins Ziel übertragen!</font></b></h3>";
var success_mount_device="<h3><b><font color='#386E38'>Geräte erfolgreich eingehangen!</font></b></h3>";

// Compatibility/Offset Messages
var ua_msg="<hr><h3>PS3 System Browser Info: "+navigator.userAgent+ "</h3>";
var compat_msg_nops3="Du nutzt kein Playstation System! Alle Funktionen wurden deaktiviert";
var compat_msg_devs="Das ist nur für Entwickler gedacht!\n\nDie CEX Offsets müssen manuell zur /js/chains/offsets.js Datei hinzugefügt werden, basierend auf die DEX Offsets welche in jeder Kette verwendet werden.";
var experimental="Stelle diese Seite als Startseite ein!\n\nVERWENDUNG AUF EIGENE GEFAHR!\nEs könnten Fehler existieren und möglicherweiße funktioniert nicht alles!\n\nAlle Modelle mit Firmware 4.xx CEX und 4.81 DEX werden unterstützt";

// Other Messages
var msg_prerelease="DAS IST EINE FRÜHE VORSCHAU!\n\nUNTERSTÜTZUNG ÄLTERER FIRMWARES WURDE NUR TEILWEISE IMPLEMENTIERT!\n\nNUR 4.81/4.82, BIS ZUR NÄCHSTEN VERÖFFENTLICHUNG!";
var msg_anti_piracy="HAFTUNGSAUSSCHLUSS\n\nWir billigen oder befürworten Piraterie jeglicher Art NICHT!\n\nDurch die Verwendung dieser Anleitung und den Klick auf JA stimmst du zu diese AUSSCHLIEẞLICH für Gründe der Bildung zu verwenden!";
var msg_anti_piracy_edat="ANTI-PIRATERIE HAFTUNGSAUSSCHLUSS!\n\nDiese Option ist ausschließlich für Test/Entwicklungs-Zwecke gedacht und sollten nicht anderweitig missbraucht werden!\n\nDurch den Klick auf JA stimmst du zu diese AUSSCHLIEẞLICH für gekaufte Titel zu verwenden!";

// Devices
var msg_device_loaded_into_mem="Geräte in den Arbeitsspeicher geladen!\n\nKlicke erneut auf Ausführen um es auszulesen und anzuzeigen!";
var msg_get_device_info1="Geräte: ";
var msg_get_device_info2="\n\nNutze das für 'sys_storage_report_devices' Ketten";

// Debugging

var msg_stackframe_check="Das wird den standard Datensatz auf Probleme untersuchen.\n\nSollte es abstürzen oder keine Erfolg-Nachricht anzeigen gibt es ein Problem!";

// String Matching
var verify_fail="<font color='#7700DA'>FEHLGESCHLAGEN: Zeichenfolgen stimmen im Arbeitsspeicher nicht überein!</font>";
var verify_success="<font color='#2a1003'>ERFOLG: Zeichenfolgen stimmen im Arbeitsspeicher überein!</font>";
var verify_skip="<font color='#2a1003'>ERFOLG: Verifiziere Zeichenfolgen nicht im Arbeitsspeicher!</font>";

var msg_search_flash_type_start="Suchparameter gesetzt auf ";
var msg_search_flash_type_end=" Speicher Typ!";

var msg_chk_mem_arg_error="checkMemory Funktion - Argumente Fehler! Größe=0x";
var msg_malformed_html="Fehlerhaftes HTML!";
var msg_string_located=" Gefunden an Offset: 0x";
var msg_string_not_located="Konnte in der Reichweite nicht gefunden werden";

// Found Offsets
var msg_found_offsets="<h4><b>Gefundene Offsets: ";
var msg_verified_offsets="<h4><b>Verifizierte Offsets: ";

var msg_page_args_not_set="Seiten Argumente nicht gesetzt!\n\nClick The Set Arguments Button and Retry!";
var msg_no_chain_selected="Keine ROP Kette Hex gewählt\n\nNutze die Drop-Down Liste um eine auszuwählen";
var msg_media_not_supported="Diese Mediumauswahl ist noch nicht implementiert!";
var msg_cannot_continue="Fortsetzen nicht möglich....Kehre zurück!";

var msg_invalid_title_id="VORSICHT!\n\Die angegebene Titel-ID hat eine ungültige Größe!\n\Nutze Standard ID.";

// index GUI text
var gui_title="PS3 Exploitation Tutorial Vorlage ";
var guy_by="vom ";
var gui_credits="Vielen Dank an xerpi für den Userland Speicherleck Exploit PS3 Port, zecoxao & Joonie für ihre frühe und fortgesetzte Hilfe, mysis für die Dokumentation der vsh Exporte & plugins, natürlich die PSDevWiki Mitwirkende, STLcardsWS für sein langanhaltendes Mitwirken & alle PS3 Community Hacker/Entwickler frühere & heutige, ihr wisst wer ihr seid. Danke an littlebalup für die Idee und auch für die benötigten JavaScript Implementation, welche wir genutzt haben um die HDD Versionen der 'Dumper' und 'Flasher' zu erstellen. Ebenfalls Dank an B7U3 C50SS, Endless und 0x1991337 für syscall Tests und anderweitige Hilfe! <font color='yellow'>Mehr Infos und Neues auf <a href='http://www.psx-place.com'>http://www.psx-place.com</a>. Offizielle Webseite auf <a href='http://ps3xploit.com'>http://ps3xploit.com</a></font>";

// Checkboxes First Section
var gui_chk_default_settings="Standard Einstellungen:";
var gui_chk_disable_trigger="Auslöser deaktivieren:";
var gui_chk_write_protect="Schreibschutz:";
var gui_chk_usb_mount="USB:";

// Reboot Mode
var gui_chk_reboot_mode="Neustart Modus:";
var gui_chk_reboot_mode_select="* Modus auswählen *";
var gui_chk_reboot_mode_soft="Software neustart";
var gui_chk_reboot_mode_hard="Hardware neustart";
var gui_chk_reboot_mode_off="Ausschalten";

// ROP Chain Text

// Preset Chains
var gui_txt_preset_chains="Voreingestellte Ketten: ";
var gui_txt_preset_chains_default="Standard/Tests";
var gui_txt_option_stackframe_test="Datensatz Test";
var gui_txt_option_beep_test="Signalton Test";
var gui_txt_option_power_test="Power Test";
var gui_txt_option_minver_check="Minimum Version Check";
var gui_txt_option_sys_game_get_temperature="CELL/RSX Temperaturen anzeigen";
var gui_txt_option_game_debug_pafjob_test="Spiel Debug PafJob Test";
var gui_txt_option_console_write_test="Konsole-Schreib Test";
var gui_txt_option_sys_tty_read="TTY Lese Test";
var gui_txt_option_sys_tty_write="TTY Schreib Test";

// Dumping
var gui_txt_preset_chains_dumping="Auslesen";
var gui_txt_option_webkit_search_area="WebKit-Suchgebiet auslesen";
var gui_txt_option_system_info_multi_dump="Mehrere Systeminformationen auslesen";
var gui_txt_option_dump_lv2_syscall_table="LV2 Syscall Tabelle auslesen";
var gui_txt_option_mem_dump_test="Rohen VSH Speicher auslesen";
var gui_txt_option_get_open_psid="PSID auslesen";
var gui_txt_option_dump_idps_from_mem="IDPS aus der VSH auslesen";
var gui_txt_option_sys_net_dump="SysNet auslesen";
var gui_txt_sys_sm_get_platform_info="Plattforminformationen erhalten";
var gui_txt_option_dump_idps_from_flash="IDPS aus dem Speicher auslesen";

// File System
var gui_txt_preset_chains_file_system="Dateisystem";
var gui_txt_option_create_new_user="Neuen Benutzer erstellen";
var gui_txt_option_mount_usb_as_bdvd="Binde 'USB000' als 'BDVD' ein";
var gui_txt_option_mount_usb_as_bdvd_no_disc="Binde 'USB000' als 'BDVD Keine Disc' ein";
var gui_txt_option_mount_other_as_bdvd="Binde Andere Geräte als 'BDVD' ein";
var gui_txt_option_mount_bdvd_as_ps3_disc="Binde 'BDVD' als 'PS3 Disc' ein";
var gui_txt_option_db_rebuild="Datenbank neu aufbauen";
var gui_txt_option_get_filesize="Dateigröße erhalten";
var gui_txt_option_file_read_write_test="Lese/Schreib Test - Datei";
var gui_txt_option_dir_read_write_test="Lese/Schreib Test - Ordner";

// Fun
var gui_txt_preset_chains_fun="Spaß";
var gui_txt_option_fun_test="Signalton Test";
var gui_txt_option_test_only="Ketten Test für Entwickler";
var gui_txt_option_xmb_plugin_test="XMB Plugin Test";
var gui_txt_option_busy_icon_test="'Beschäftigt'-Symbol Test";
var gui_txt_option_vsh_printf_test="VSH 'printf' Test";
var vsh_printf_arg1="Nachricht: ";
var vsh_printf_arg2="HALLO VOM TEAM PS3XPLOIT!";

// Other Syscall Chains

// Memory/System
var gui_txt_syscall_group_mem_sys="Arbeitsspeicher/System: ";
var gui_txt_syscall_chains_mem_sys="Arbeitsspeicher";

// Storage
var gui_txt_syscall_chains_storage="Speicher";

// System
var gui_txt_syscall_chains_system="System";

// Process/Thread

// Process
var gui_txt_syscall_group_proc_thread="Prozess/Thread: ";
var gui_txt_syscall_chains_proc_thread="Prozess";

// Process ID
var gui_txt_syscall_chains_process="Prozess ID";

// Threads
var gui_txt_syscall_chains_threads="Threads";

// Thread ID
var gui_txt_syscall_chains_thread_id="Thread ID";

// Network
var gui_txt_syscall_group_network="Netzwerk: ";

// Debugging
var gui_txt_syscall_group_debugging="Debuggen: ";
var gui_txt_syscall_chains_debug_sc="Systmeaufrufe";

// LED Control
var gui_txt_syscall_group_led="LED Kontrolle:";
var gui_txt_syscall_chains_led="* Kette auswählen *";

var gui_txt_syscall_chains_led_color="Farbe ändern";
var gui_txt_option_led_color_green="Grün";
var gui_txt_option_led_color_yellow_red="Gelb/Rot";
var gui_txt_option_led_color_off="Aus";

var gui_txt_syscall_chains_led_action="Aktion ändern";
var gui_txt_option_led_action_on="An";
var gui_txt_option_led_action_off="Aus";
var gui_txt_option_led_action_blink_fast="Schnell blinken";
var gui_txt_option_led_action_blink_slow="Langsam blinken";

// Beep Parameters
var gui_txt_syscall_group_beep_params="Signalton Parameter: ";
var gui_txt_syscall_chains_beeps="# Signaltöne";
var gui_txt_option_beep_off="Ausschalten";
var gui_txt_option_beep_3="3 Signaltöne";
var gui_txt_option_beep_2="2 Signaltöne";
var gui_txt_option_beep_2f="2 Signaltöne - Schnell";
var gui_txt_option_beep_1="1 Signalton";
var gui_txt_option_beep_1f="1 Signalton - Schnell";
var gui_txt_option_beep_flatline="Nulllinie";

// Memory Dump
var gui_txt_syscall_group_memdump="Arbeitsspeicher auslesen:";
var gui_txt_memdump_addresses="Speicherauslese Addresse";
var gui_txt_memdump_size="Speicherauslese Größe";
var gui_txt_memdump_range_presets="Voreinstellungen:";
var gui_txt_option_memdump_presets_default="* Keine Voreinstellungen ausgewählt *";

var gui_txt_memdump_address_start="Start:";
var gui_txt_memdump_address_end="Ende:";
var gui_txt_btn_memdump_set_values="Neuen Wert festlegen";

var gui_txt_mounting_setup="Einhängen: ";
var gui_txt_option_mount_device="Geräte Name";
var gui_txt_option_mount_fs="Dateisystem";
var gui_txt_option_mount_path="Einhänge Pfad";

var gui_txt_group_user_id="Benutzer ID:";
var gui_txt_option_user_id_default="* Standard *";
var gui_txt_user_id_new="Benutzer ID gesetzt zu: ";
var gui_txt_home_path_new="\n\nNeuer 'HOME' Pfad ist: \n\n";

var gui_txt_group_permissions="Berechtigungen:";

var gui_txt_group_filesize="Dateigröße:";
var gui_txt_group_titleid="Titel-ID:";

var gui_txt_btn_set_filesize="Festlegen";
var gui_txt_btn_set_titleid="Festlegen";

var gui_txt_group_path_source="Quelle:";
var gui_txt_group_path_destination="Ziel: ";

// XMB Transfer
var gui_txt_syscall_group_xmb_transfer="XMB Transfer Option ";
var gui_txt_option_xmb_photo="Foto";
var gui_txt_option_xmb_music="Musik";
var gui_txt_option_xmb_video="Video";
var gui_txt_option_xmb_jpg_btn="Drücke &#x25B3 für JPG";
var gui_txt_option_xmb_mp3_btn="Drücke &#x25B3 für MP3";
var gui_txt_option_xmb_mp4_btn="Drücke &#x25B3 für MP4";
var gui_txt_option_xmb_save_msg="&#x2192 Datei &#x2192 Ziel Speichern &#x2192 Systemspeicher";

var gui_txt_group_payload_type="Payload Typ ";
var gui_txt_group_payload_type_help="Ersetze standard PayLoads mit deinen eigenen Dateien, indem du den selben Namen verwendest und es im TEMPLATE/payloads/ Ordner unter HTML source platzierst";

// String Search
var gui_txt_group_string_search="Suche:";
var gui_txt_option_search_size="Größe";
var gui_txt_option_search_base="Basis";
var gui_txt_option_search_stack="Stapel";
var gui_txt_option_search_range="Reichweite";
var gui_txt_option_search_loops="Wiederholungen";

var gui_chk_search_verify_jumps="Jumps verifizieren:";
var gui_chk_search_verify_stackframe="Datensatz:";
var gui_chk_search_debug_output="Debug:";

// Buttons
var gui_txt_option_init_rop_btn="ROP-Kette initialisieren";
var gui_txt_option_exec_rop_btn="Kette ausführen";
var gui_txt_option_reload_page_btn="Seite neu laden";
var gui_txt_option_reset_btn="Optionen zurücksetzen";
var gui_txt_option_load_settings_btn="Einstellungen laden";
var gui_txt_option_save_settings_btn="Einstellungen speichern";
var gui_txt_option_debug_show_var_btn="Alle Variablen anzeigen";
