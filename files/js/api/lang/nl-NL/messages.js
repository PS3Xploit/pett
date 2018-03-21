// PS3Xploit Index GUI Messages [Dutch]
// PS3Xploit Team 2018 / ps3xploit.com

// Translation Credits: @CompanyFart


// After complete translate the language file update it to latest revision (same as en-US)
var current_minimum_lang_revision="0000";
var gui_incomplete_lang="Current translation is incomplete, consider updating or just skip it";

var msg_select_vsh_type="CEX gebruiken? nee selecteren zal DEX offsets gebruiken";

var msg_detected_fw_1="gedetecteerde FW: ";
var msg_detected_fw_2=" ";
//var msg_detected_fw_3=" / MinVer: ";
var msg_detected_fw_4=" | ondersteund ALLE Modellen en 4.xx Firmware";

var compat_msg_wrong_fw1="Je PS3 heeft geen compatibele versie! Uw huidige FW-versie is: ";
var compat_msg_wrong_fw2=",wat niet compatibel is met PS3Xploit. Alle functies zijn uitgeschakeld";
var compat_msg_success1="Hartelijk gefeliciteerd! We hebben gedetecteerd dat je PlayStation 3 FW draait op ";
var compat_msg_success2=", wat compatibel is met PS3Xploit! Genieten maar!";

var msg_option_not_available="Deze optie is nog niet beschikbaar!";

// Settings
var msg_settings_load="Dit is experimenteel en laadt instellingen van een cookie!";
var msg_settings_save="Dit is experimenteel en slaat instellingen op naar een cookie!";

// MinVer/CFW Compatibility
var msg_minver_loaded_into_mem="MinVer Retourwaarde geladen in het geheugen!\n\nDruk nogmaals op Execute-knop om te lezen en laten zien";
var msg_filesize_loaded_into_mem="File Size Return Value Loaded Into Memory!\n\nPress Execute Button Again To Read and Display!";
var msg_minver_start="Uw minimale downgrade-versie is ";
var msg_minver_mid=" en is ";
var msg_minver_end=" compatibel met CFW op dit moment!";
var msg_minver_compat_not="NOT";
var msg_filesize="File Size is: 0x";

// CELL/RSX Temperatures
var msg_temps_loaded_into_mem="CELL / RSX Temp. Retourwaarden worden in het geheugen geladen!\n\nDruk nogmaals op Execute-knop om te lezen en te laten zien";
var msg_temps_cell="CELL Temperatuur: ";
var msg_temps_rsx="\n\nRSX Temperaturr: ";
var msg_temps_celcius=" Celcius";

// MemDump
var msg_memdump_warning="Waarschuwing!\n\nDeze test zal bevriezen als tijdens het stortproces een niet-toegewezen geheugengebied wordt geraakt!\n\nJe krijgt nog steeds een geldige dump tot de crash!";
var msg_memdump_idps_vsh="Alleen 4.66 / 4.81 / 4.82 Wordt momenteel ondersteund voor het dumpen van IDPS Direct vanuit VSH-geheugen!\n\nFlash-extract IDPS-gebaseerde keten is anders.\n\nAlle andere FW-versies zullen waarschijnlijk in  0secs dumpen.";
var msg_memdump_size="Raw VSH MemDump Values\n\nSize: 0x";
var msg_memdump_start_addr="\nStart Address: 0x";
var msg_memdump_end_addr="\nEnd Address: 0x";

// Warnings
var msg_fd_close_warning="Bestandsdescriptors worden momenteel niet automatisch gesloten!";
var msg_remove_dir_warning="WAARSCHUWING!\n\nWees voorzichtig tijdens het gebruik van deze syscall.\n\nU kunt een map verwijderen en de firmware opnieuw installeren!";
var msg_warning_write_protection="Schrijfbeveiliging uitgeschakeld!\n\nVolg met Voorzichtigheid LET OP !!!!";

var msg_cobra_only="ATTENTIE!\n\nDit werkt ALLEEN met COBRA ingeschakeld op CFW!";

var msg_mount_test="** IN TESTFASE **";
var msg_mount_no_disc="This Will Unmount dev_usb000 as dev_bdvd\n\nThere should be NO DISC in the drive!";
var msg_mount_yes_disc="This Will Unmount dev_bdvd and dev_usb000, then mount dev_usb000 as dev_bdvd\n\nThere should be A DISC present in the drive!";
var msg_mount_ps3_disc="This Will Mount dev_bdvd as a PS3 Disc\n\nThere should be a DISC present in the drive!";
var msg_mount_usb_enable="R9 Pointer Enabled!\n\nValue Is Set To Temp Address";
var msg_mount_usb_disable="R9 Pointer Disabled!\n\nValue Is Set To 0";

// File Operations
var msg_default_size="Standaardgrootte 0x140 gebruiken";
var msg_new_size="Nieuwe bestandsgrootte: ";
var msg_destination_path_set_new="Nieuw pad ingesteld op:\n\n";
var msg_destination_path_incorrect="Bestemmingspad is onjuist!\n\nHet moet worden ingesteld voordat het titel-ID wordt gewijzigd.";

// Trigger Messages
var trigger_msg="Triggering exploit...";
var trigger_msg2="Trigger: 0x";

// Ready To Search
var msg_search_ready="<h3><b>Ready To Begin! <br>Select Chain and Options From Above, Then Press Initialize ROP Chain button!</b></h3>";

// Shows After Initial Exec Button Click
var msg_exec_init="<h3><b>Executing Chain! <br>Please Wait Until The Execution Has Finished....</b></h3>";

// Search Strings
var msg_search_offsets="<h3><b> Zoeken naar offsets in het geheugen! Even geduld ... <br>Als u ongeduldig bent, sluit u de browser en probeert u het opnieuw in ongeveer 60-90 seconden als het niet wordt gevonden!</b></h3>";
var msg_verify_offsets="<h3><b>Offsets in het geheugen verifiëren! Even geduld ... <br> Sluit de browser nog NIET! </b></h3>";

// Fail Search Messages
var msg_string_search_fail="<h3><b><font color='#7700DA'>Niet alle offsets gevonden!</font><font color='#7700DA'> Als Zoeken opnieuw mislukt, pas dan de zoekinstellingen of de RESTART-browser aan!</font></b></h3>";
var msg_string_search_fail_max="<h3><b><font color='#7700DA'>Niet alle offsets gevonden!</font><font color='#7700DA'> Max opnieuw geprobeerd pogingen! Gelieve de browser opnieuw te starten!</font></b></h3>";

// Verify Strings Fail
var msg_string_verify_fail="<h3><b><font color='#7700DA'>heeft niet alle offsets gecontroleerd!</font><font color='#7700DA'> Als Verifiëren opnieuw mislukt, browser RESTART!</font></b></h3>";
var msg_string_verify_fail_max="<h3><b><font color='#7700DA'>heeft niet alle offsets gecontroleerd!</font><font color='#7700DA'> Max opnieuw geprobeerd pogingen! Gelieve de browser opnieuw te starten!</font></b></h3>";

// Init Success
var msg_success_init="<h3><b><font color='#386E38'>SUCCESS!</font><br><font color='#7700DA'>U kunt nu uw keten uitvoeren!</font></b></h3>";

// Exec Success
var success_chain_exec="<h3><b><font color='#386E38'>Chain met succes uitgevoerd!</font></b><br> &nbsp;</h3>";
var success_chain_exec_press_again="<h3><b><font color='#386E38'>Druk nogmaals op de knop Execute!</font></b></h3>";
var success_chain_exec_psid="<h3><b><font color='#386E38'>PSID is met succes gedumpt!</font></b></h3>";
var success_chain_exec_idps="<h3><b><font color='#386E38'>IDPS met succes gedumpt!</font></b></h3>";
var success_chain_exec_syscall_dump="<h3><b><font color='#386E38'>Syscall Return Value Dumped Successfully!</font></b></h3>";
var success_chain_exec_memdump="<h3><b><font color='#386E38'>Geheugen gedumpt met succes!</font></b></h3>";
var success_chain_exec_read_write_file="<h3><b><font color='#386E38'>bron naar bestemming geslaagd!</font></b></h3>";
var success_mount_device="<h3><b><font color='#386E38'>Successfully Mounted Device!</font></b></h3>";

// Compatibility/Offset Messages
var ua_msg="<hr><h3>PS3-systeembrowserinfo: "+navigator.userAgent+ "</h3>";
var compat_msg_nops3="Je bent niet op een PlayStation-systeem Alle functies zijn uitgeschakeld!";
var compat_msg_devs="Dit is alleen voor ontwikkelaars!\n\nCEX-offsets moeten handmatig worden toegevoegd aan het bestand /js/chains/offsets.js, op basis van de DEX-offsets die voor elke keten worden gebruikt.";
var experimental="Stel uw startpagina op deze pagina in!\n\nUIT OP EIGEN RISICO!\nEr kunnen bugs optreden en sommige dingen werken mogelijk niet!\n\nAlle modellen op 4.xx CEX en 4.81 DEX zijn ondersteund";

// Other Messages
var msg_prerelease="DIT IS EEN VROEGE VOORBEELDVERKLARING!\n\nDE ONDERSTEUNING VAN FIRMWARE IS ALLEEN GEDEELTELIJK KLAAR!!\n\n4.81/4.82 ALLEEN TOT VOLGENDE PUBLICATIE!";
var msg_anti_piracy="DISCLAIMER\n\nWIJ keuren PIRACY van welke aard dan ook NIET goed!\n\nDoor deze tutorial te gebruiken en op YES te klikken, gaat u ermee akkoord om het ALLEEN voor educatieve doeleinden te gebruiken!";
var msg_anti_piracy_edat="ANTI-PIRACY DISCLAIMER!\n\nDeze optie is alleen bedoeld voor test- en ontwikkelingsdoeleinden en mag niet worden misbruikt!\n\nDoor op YES te klikken, gaat u ermee akkoord dit ALLEEN voor titels te gebruiken die u hebt gekocht!";

// Devices
var msg_device_loaded_into_mem="Apparaatretourwaarde geladen in geheugen!\n\nDruk nogmaals op Execute-knop om te lezen en weer te geven!";
var msg_get_device_info1="Geretourneerd apparaat: ";
var msg_get_device_info2="\n\nGebruik dit voor sys_storage_report_devices Chain";

// Debugging

var msg_stackframe_check="Hiermee wordt het standaard stackframe op problemen gecontroleerd.\n\nAls het vastloopt of geen succesbericht weergeeft, is er een probleem!";

// String Matching
var verify_fail="<font color='#7700DA'>FAAL: Strings komen niet overeen in het geheugen!</font>";
var verify_success="<font color='#2a1003'>SUCCESS: Strings Match in Memory!</font>";
var verify_skip="<font color='#2a1003'>SUCCESS: Geen strings in het geheugen!</font>";

var msg_search_flash_type_start="Zoek naar Params Set voor";
var msg_search_flash_type_end=" Flash Type!";

var msg_chk_mem_arg_error="vink Geheugenfunctie argumenten fout aan! size=0x";
var msg_malformed_html="Onjuiste HTML!";
var msg_string_located=" Gevonden bij offset: 0x";
var msg_string_not_located="kan niet binnen bereik zijn";

// Found Offsets
var msg_found_offsets="<h4><b>Gevonden offsets: ";
var msg_verified_offsets="<h4><b>Gecontroleerde offsets: ";

var msg_page_args_not_set="Pagina argumenten niet ingesteld!\n\nKlik op de knop Argumenten instellen en probeer het opnieuw!";
var msg_no_chain_selected="No ROP Chain Hex Geselecteerd!\n\nUse The Drop-Down Box To Select One";
var msg_media_not_supported="Deze mediakeuze is nog niet geïmplementeerd!";
var msg_cannot_continue="Kan niet doorgaan .... Terugkeren!";

var msg_invalid_title_id="ALERT!\n\nDe ingevoerde titel ID heeft een ongeldige grootte!\n\nGebruik standaard ID.";

// index GUI text
var gui_title="PS3 Exploitation Tutorial Template ";
var guy_by="by ";
var gui_credits="Veel dank aan xerpi voor de userland geheugenlek exploit ps3 port, zecoxao & Joonie voor hun vroege & voortdurende steun, mysis voor het documenteren van vsh exports & plug-ins, de psdevwiki-bijdragers natuurlijk, STLcardsWS voor zijn langdurige bijdrage & alle ps3 community hackers/devs verleden & heden, je weet wie je bent. Dankzij littlebalup en het idee en de bijbehorende js-implementatie die we gebruikten om de HDD-editie van de Dumpers en Flasher te maken. Ook dankzij B7U3 C50SS, Endless en 0x1991337 voor tutorial syscall testen en andere hulp! <font color='yellow'>Meer details & nieuws over <a href='http://www.psx-place.com'>http://www.psx-place.com</a>. Officiële website op <a href='http://ps3xploit.com'>http://ps3xploit.com</a></font>";

// Checkboxes First Section
var gui_chk_default_settings="Standaard instellingen:";
var gui_chk_disable_trigger="Schakel Trigger uit:";
var gui_chk_write_protect="Schrijfbeveiliging:";
var gui_chk_usb_mount="USB:";

// Reboot Mode
var gui_chk_reboot_mode="Herstartmodus:";
var gui_chk_reboot_mode_select="* Selecteer Mode *";
var gui_chk_reboot_mode_soft="Soft Reboot";
var gui_chk_reboot_mode_hard="Hard Reboot";
var gui_chk_reboot_mode_off="Power Down";

// ROP Chain Text

// Preset Chains
var gui_txt_preset_chains="Preset Chains: ";
var gui_txt_preset_chains_default="Default/Testing";
var gui_txt_option_stackframe_test="Stackframe Test";
var gui_txt_option_beep_test="Beep Test";
var gui_txt_option_power_test="Power Test";
var gui_txt_option_minver_check="Minimum Versie Check";
var gui_txt_option_sys_game_get_temperature="Laat CELL/RSX Temps zien";
var gui_txt_option_game_debug_pafjob_test="Game Debug PafJob Test";
var gui_txt_option_console_write_test="Console Schrijf Test";
var gui_txt_option_sys_tty_read="TTY Lees Test";
var gui_txt_option_sys_tty_write="TTY Schrijf Test";

// Dumping
var gui_txt_preset_chains_dumping="Dumping";
var gui_txt_option_webkit_search_area="Dump WebKit Search Area";
var gui_txt_option_system_info_multi_dump="System Info Multi Dump";
var gui_txt_option_dump_lv2_syscall_table="Dump LV2 Syscall Table";
var gui_txt_option_mem_dump_test="Dump Raw VSH-geheugen";
var gui_txt_option_get_open_psid="Dump PSID";
var gui_txt_option_dump_idps_from_mem="Dump IDPS Van VSH";
var gui_txt_option_sys_net_dump="SysNet Dump";
var gui_txt_sys_sm_get_platform_info="Get Platform Info";
var gui_txt_option_dump_idps_from_flash="Dump IDPS vanuit Flash";

// File System
var gui_txt_preset_chains_file_system="Bestandssysteem";
var gui_txt_option_create_new_user="Create New User";
var gui_txt_option_mount_usb_as_bdvd="Mount USB000 as BDVD";
var gui_txt_option_mount_usb_as_bdvd_no_disc="Mount USB000 as BDVD No Disc";
var gui_txt_option_mount_other_as_bdvd="Mount Other Device as BDVD";
var gui_txt_option_mount_bdvd_as_ps3_disc="Mount BDVD as PS3 Disc";
var gui_txt_option_db_rebuild="Database Herbouw";
var gui_txt_option_get_filesize="Get Filesize";
var gui_txt_option_file_read_write_test="Lees/Schrijf File Test";
var gui_txt_option_dir_read_write_test="Lees/Schrijf directory Test";

// Fun
var gui_txt_preset_chains_fun="Fun";
var gui_txt_option_fun_test="Beep Test";
var gui_txt_option_test_only="Chain Test For Devs";
var gui_txt_option_xmb_plugin_test="XMB Plugin Test";
var gui_txt_option_busy_icon_test="Busy Icon Test";
var gui_txt_option_vsh_printf_test="VSH printf Test";
var vsh_printf_arg1="MESSAGE: ";
var vsh_printf_arg2="HELLO FROM TEAM PS3XPLOIT!";

// Other Syscall Chains

// Memory/System
var gui_txt_syscall_group_mem_sys="Geheugen/System: ";
var gui_txt_syscall_chains_mem_sys="Geheugen";

// Storage
var gui_txt_syscall_chains_storage="opslagruimte";

// System
var gui_txt_syscall_chains_system="Systeem";

// Process/Thread

// Process
var gui_txt_syscall_group_proc_thread="Process/Thread: ";
var gui_txt_syscall_chains_proc_thread="Process";

// Process ID
var gui_txt_syscall_chains_process="Proc ID";

// Threads
var gui_txt_syscall_chains_threads="Threads";

// Thread ID
var gui_txt_syscall_chains_thread_id="Thread ID";

// Network
var gui_txt_syscall_group_network="Netwerk: ";

// Debugging
var gui_txt_syscall_group_debugging="Debugging: ";
var gui_txt_syscall_chains_debug_sc="System Calls";

// LED Control
var gui_txt_syscall_group_led="LED Control:";
var gui_txt_syscall_chains_led="* Select Chain *";

var gui_txt_syscall_chains_led_color="Verander Kleur";
var gui_txt_option_led_color_green="Groen";
var gui_txt_option_led_color_yellow_red="Geel/Rood";
var gui_txt_option_led_color_off="Uit";

var gui_txt_syscall_chains_led_action="Verander actie";
var gui_txt_option_led_action_on="Aan";
var gui_txt_option_led_action_off="Uit";
var gui_txt_option_led_action_blink_fast="Knippert Snel";
var gui_txt_option_led_action_blink_slow="Knipper Langzaam";

// Beep Parameters
var gui_txt_syscall_group_beep_params="Beep Parameters: ";
var gui_txt_syscall_chains_beeps="# of Beeps";
var gui_txt_option_beep_off="Zet UIT";
var gui_txt_option_beep_3="3 Beeps";
var gui_txt_option_beep_2="2 Beeps";
var gui_txt_option_beep_2f="2 Beept Snel";
var gui_txt_option_beep_1="1 Beep";
var gui_txt_option_beep_1f="1 Beep Snel";
var gui_txt_option_beep_flatline="Flatline";

// Memory Dump
var gui_txt_syscall_group_memdump="Geheugen dump:";
var gui_txt_memdump_addresses="MemDump Address";
var gui_txt_memdump_size="MemDump Size";
var gui_txt_memdump_range_presets="Presets:";
var gui_txt_option_memdump_presets_default="* Geen preset geselecteerd *";

var gui_txt_memdump_address_start="Start:";
var gui_txt_memdump_address_end="Eind:";
var gui_txt_btn_memdump_set_values="Zet Nieuwe waardens";

var gui_txt_mounting_setup="Mounting: ";
var gui_txt_option_mount_device="Device Name";
var gui_txt_option_mount_fs="File System";
var gui_txt_option_mount_path="Mount Path";

var gui_txt_group_user_id="Gebruiker ID:";
var gui_txt_option_user_id_default="* Standaard *";
var gui_txt_user_id_new="User ID Set To: ";
var gui_txt_home_path_new="\n\nNew Home Path Is: \n\n";

var gui_txt_group_permissions="Premissies";

var gui_txt_group_filesize="Bestandsgrootte:";
var gui_txt_group_titleid="Titel:";

var gui_txt_btn_set_filesize="Set";
var gui_txt_btn_set_titleid="Set";

var gui_txt_group_path_source="Bron:";
var gui_txt_group_path_destination="Bestemming: ";

// XMB Transfer
var gui_txt_syscall_group_xmb_transfer="XMB-overdrachtsoptie ";
var gui_txt_option_xmb_photo="Foto";
var gui_txt_option_xmb_music="Muziek";
var gui_txt_option_xmb_video="Video";
var gui_txt_option_xmb_jpg_btn="Druk op &#x25B3 voor JPG";
var gui_txt_option_xmb_mp3_btn="Druk op &#x25B3 voor MP3";
var gui_txt_option_xmb_mp4_btn="Druk op &#x25B3 voor MP4";
var gui_txt_option_xmb_save_msg="&#x2192 Bestand &#x2192 Doel opslaan &#x2192 Systeemopslag";

var gui_txt_group_payload_type="Payload Type ";
var gui_txt_group_payload_type_help="Vervang standaardpayloads door uw eigen bestanden met dezelfde namen en plaats ze in TEMPLATE/payloads/map onder HTML-bron";

// String Search
var gui_txt_group_string_search="Zoek:";
var gui_txt_option_search_size="Groote";
var gui_txt_option_search_base="Base";
var gui_txt_option_search_stack="Stack";
var gui_txt_option_search_range="Range";
var gui_txt_option_search_loops="Loops";

var gui_chk_search_verify_jumps="Verify Jumps:";
var gui_chk_search_verify_stackframe="Stackframe:";
var gui_chk_search_debug_output="Debug:";

// Buttons
var gui_txt_option_init_rop_btn="initialiseer ROP Chain";
var gui_txt_option_exec_rop_btn="uitvoeren Chain";
var gui_txt_option_reload_page_btn="Herlaad de pagina";
var gui_txt_option_reset_btn="Reset opties";
var gui_txt_option_load_settings_btn="Laad instellingen";
var gui_txt_option_save_settings_btn="Instellingen opslaan";
var gui_txt_option_debug_show_var_btn="Toon alle variabelen";
