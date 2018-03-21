// PS3Xploit Index GUI Messages [Italian]
// PS3Xploit Team 2018 / ps3xploit.com

// Translation Credits: @Alexandersss and @neno20115


// After complete translate the language file update it to latest revision (same as en-US)
var current_minimum_lang_revision="0012";
var gui_incomplete_lang="La traduzione attuale è incompleta, si consideri questo aggiornamento o semplicemente saltarlo";

var msg_select_vsh_type="Usi CEX?\n\nSelezionando NO verranno utilizzati gli offset DEX";

var msg_detected_fw_1="Rileva FW: ";
var msg_detected_fw_2=" ";
//var msg_detected_fw_3=" / MinVer: ";
var msg_detected_fw_4=" | Supporta TUTTI i Modelli e Firmware 4.xx";

var compat_msg_wrong_fw1="La tua PS3 non e' una versione compatibile! La versione FW attuale e' ";
var compat_msg_wrong_fw2=", la quale non e' compatibile con PS3Xploit. Tutte le funzionalita' sono state disattivate";
var compat_msg_success1="Congratulazioni! Abbiamo rilevato che la tua PS3 sta eseguendo il FW ";
var compat_msg_success2=", il quale e' compatibile con PS3Xploit! Divertiti!";

var msg_option_not_available="Questa opzione non è ancora disponibile!";

// Settings
var msg_settings_load="Questo e' sperimentale e carica impostazioni dai cookie!";
var msg_settings_save="Questo e' sperimentale e salva impostazioni nei cookie!";

// MinVer/CFW Compatibility
var msg_minver_loaded_into_mem="Valore di ritorno di MinVer caricato in Memoria!\n\nPremi Esegui un'altra volta per leggerlo e visualizzarlo!";
var msg_filesize_loaded_into_mem="Dimensione del file Valore restituito Caricato In Memoria!\n\nPremi nuovamente il pulsante Esegui per leggerlo e visualizzarlo!!";
var msg_minver_start="La tua Versione minima di Downgrade e' ";
var msg_minver_mid=" ed e' ";
var msg_minver_end=" compatibile con CFW in questo momento!";
var msg_minver_compat_not="NOT";
var msg_filesize="File Size is: 0x";

// CELL/RSX Temperatures
var msg_temps_loaded_into_mem="Valore di ritorno di CELL/RSX Temp caricato in Memoria!\n\nPremi Esegui un'altra volta per leggerlo e visualizzarlo!";
var msg_temps_cell="Temperatura CELL: ";
var msg_temps_rsx="\n\nTemperatura RSX: ";
var msg_temps_celcius=" Celsius";

// MemDump
var msg_memdump_warning="Attenzione!\n\nQuesto test si blocchera' se sara' selezionata un'area di memoria non allocata durante il processo di Dump!\n\nIl Dump precedente al crash sara' comunque valido!";
var msg_memdump_idps_vsh="Solo 4.66/4.81/4.82 e' correntemente supportato per effettuare il Dump IDPS direttamente dalla memoria VSH!\n\nFlash Extract IDPS Based Chain e'differente.\n\nTutti gli altri firmware probabilmente effettuerebbero un dump con tutti 0.";
var msg_memdump_size="Raw VSH MemDump Values\n\nSize: 0x";
var msg_memdump_start_addr="\nIndirizzo Iniziale: 0x";
var msg_memdump_end_addr="\nIndirizzo Finale: 0x";

// Warnings
var msg_fd_close_warning="I descrittori dei file al momento non sono chiusi automaticamente!";
var msg_remove_dir_warning="ATTENZIONE!\n\nPrestare Cautela usando questa chiamata di sistema!\n\nPotresti rimuovere una directory di sistema e dover reinstallare il FW!";
var msg_warning_write_protection="Protezione Scrittura Disabilitata!\n\nProcedi con CAUTELA!!!!";

var msg_cobra_only="ATTENZIONE!\n\nFunziona SOLO con COBRA abilitato su CFW!";

var msg_mount_test="** IN FASE DI TEST **";
var msg_mount_no_disc="This Will Unmount dev_usb000 as dev_bdvd\n\nThere should be NO DISC in the drive!";
var msg_mount_yes_disc="This Will Unmount dev_bdvd and dev_usb000, then mount dev_usb000 as dev_bdvd\n\nThere should be A DISC present in the drive!";
var msg_mount_ps3_disc="This Will Mount dev_bdvd as a PS3 Disc\n\nThere should be a DISC present in the drive!";
var msg_mount_usb_enable="R9 Puntatore abilitato!\n\nIl valore è impostato su Indirizzo temp";
var msg_mount_usb_disable="R9 Puntatore disabilitato!\n\nIl valore è impostato su 0";

// File Operations
var msg_default_size="Usando dimensione predefinita 0x140";
var msg_new_size="Nuova dimensione file: ";
var msg_destination_path_set_new="Nuovo percorso impostato su:\n\n";
var msg_destination_path_incorrect="Il percorso di destinazione non è corretto!\n\nDeve essere impostato prima di modificare l'ID del titolo.";

// Trigger Messages
var trigger_msg="Attivazione exploit...";
var trigger_msg2="Attivato: 0x";

// Ready To Search
var msg_search_ready="<h3><b>Pronto per iniziare! <br>Seleziona Chain e Opzioni dall'alto, quindi premi il pulsante Inizializza chain ROP!</b></h3>";

// Shows After Initial Exec Button Click
var msg_exec_init="<h3><b>Ecuzione Chain! <br>Attendere fino al termine dell'esecuzione....</b></h3>";

// Search Strings
var msg_search_offsets="<h3><b>Ricerca di Offset In Memoria! Prego attendere.... <br>Se sei impaziente, chiudi il browser e riprova tra circa 60-90 secondi se non viene trovato nulla!</b></h3>";
var msg_verify_offsets="<h3><b>Verifica Offset in Memoria! Prego attendere.... <br>NON CHIUDERE ASSOLUTAMENTE il Browser!</b></h3>";

// Fail Search Messages
var msg_string_search_fail="<h3><b><font color='#7700DA'>Non sono stati trovato tutti gli Offset!</font><font color='#7700DA'> Se la ricerca fallisce ancora, perfeziona le impostazioni di ricerca o RIAPRI il browser!</font></b></h3>";
var msg_string_search_fail_max="<h3><b><font color='#7700DA'>Non sono stati trovato tutti gli Offset!</font><font color='#7700DA'> Tentativi massimi raggiunti! RIAPRI il BROWSER!</font></b></h3>";

// Verify Strings Fail
var msg_string_verify_fail="<h3><b><font color='#7700DA'>Non ho potuto verificare tutti gli offset!</font><font color='#7700DA'> Se la Verifica fallisce ancora, prova a riaprire il Browser</font></b></h3>";
var msg_string_verify_fail_max="<h3><b><font color='#7700DA'>Non ho potuto verificare tutti gli offset!!</font><font color='#7700DA'> Sottoposti Massimi Tentativi! Si prega di riavviare il browser!</font></b></h3>";

// Init Success
var msg_success_init="<h3><b><font color='#386E38'>SUCCESSO!</font><br><font color='#7700DA'>Ora puoi eseguire il CHAIN!</font></b></h3>";

// Exec Success
var success_chain_exec="<h3><b><font color='#386E38'>Chain eseguita correttamente!</font></b><br> &nbsp;</h3>";
var success_chain_exec_press_again="<h3><b><font color='#386E38'>Premi Esegui un'altra volta!</font></b></h3>";
var success_chain_exec_psid="<h3><b><font color='#386E38'>PSID Dump eseguito!</font></b></h3>";
var success_chain_exec_idps="<h3><b><font color='#386E38'>IDPS Dump eseguito!</font></b></h3>";
var success_chain_exec_syscall_dump="<h3><b><font color='#386E38'>Syscall Return Value Dumpato con successo!</font></b></h3>";
var success_chain_exec_memdump="<h3><b><font color='#386E38'>Dump memoria eseguito!</font></b></h3>";
var success_chain_exec_read_write_file="<h3><b><font color='#386E38'>Trasferimento sorgente-destinazione completato!</font></b></h3>";
var success_mount_device="<h3><b><font color='#386E38'>Dispositivo montato con successo!</font></b></h3>";

// Compatibility/Offset Messages
var ua_msg="<hr><h3>PS3 System Browser Info: "+navigator.userAgent+ "</h3>";
var compat_msg_nops3="Non sei su un sistema PlayStation! Tutte le funzionalita' sono state disabilitate!";
var compat_msg_devs="Solo per Sviluppatori!\n\nCEX offset e' richiesto di essere aggiunta al file /js/chains/offsets.js, in base agli offset DEX in uso in ogni chain.";
var experimental="Imposta la tua homepage su questa pagina!\n\nUSARE A PROPRIO RISCHIO E PERICOLO!\nCi possono essere alcuni bug o altro non ancora funzionante!\n\nTutti i modelli con 4.xx e 4.81 DEX sono supportati";

// Other Messages
var msg_prerelease="QUESTA E' UNA VERSIONE PREVIEW PREMATURA!\n\nIL SUPPORTO SU FIRMWARE DATATI E' STATO IMPLEMENTATO SOLO IN PARTE!\n\nSOLO 4.81/4.82  PRIMA DELLA PROSSIMA RELEASE!";
var msg_anti_piracy="AVVERTIMENTO\n\nNon perdoniamo ne' approviamo qualsiasi tipo di PIRATERIA!\n\nUsando questo tutorial, e selezionando SI, accetti di usarlo SOLO per scopi didattici!";
var msg_anti_piracy_edat="AVVERTIMENTO ANTI-PIRATERIA!\n\nQuesta opzione è destinata esclusivamente a scopi di test e sviluppo e non deve essere utilizzata in modo abusivo!\n\nSe fai clic su SÌ, accetti di utilizzare SOLO questo per i titoli che sono stati acquistati!";

// Devices
var msg_device_loaded_into_mem="Valore dispositivo restituito e caricato in memoria!\n\nPremere nuovamente il pulsante Esegui per leggerlo e visualizzarlo!";
var msg_get_device_info1="Dispositivo restituito: ";
var msg_get_device_info2="\n\nUsa questo per il chain sys_storage_report_devices";

// Debugging

var msg_stackframe_check="Questo controllerà lo stackframe predefinito per i problemi.\n\nSe si blocca o non visualizza un messaggio di successo, allora c'è un problema!";

// String Matching
var verify_fail="<font color='#7700DA'>FALLITO: Le stringhe non corrispondono in memoria!</font>";
var verify_success="<font color='#2a1003'>SUCCESSO: Le stringhe corrispondono in memoria!</font>";
var verify_skip="<font color='#2a1003'>SUCCESSO: SENZA VERIFICA DELLE STRINGHE IN MEMORIA!</font>";

var msg_search_flash_type_start="Ricerca Params Set For ";
var msg_search_flash_type_end=" Tipo di flash!";

var msg_chk_mem_arg_error="Errore argomento funzione checkMemory! size=0x";
var msg_malformed_html="HTML buggato!";
var msg_string_located=" Trovato all'offset: 0x";
var msg_string_not_located="Impossibile localizzarlo nel range";

// Found Offsets
var msg_found_offsets="<h4><b>Trovati Offset: ";
var msg_verified_offsets="<h4><b>Verificati Offsets: ";

var msg_page_args_not_set="Argomento Pagina non Impostato!\n\nClicca il pulsante Imposta Argomenti e Riprova!";
var msg_no_chain_selected="Nessuna ROP Chain Hex Selezionatan\nUsa la tendina per selezionarne una";
var msg_media_not_supported="Questo media non e' al momento implementato!";
var msg_cannot_continue="Impossibile continuare, uscendo....!";

var msg_invalid_title_id="ALERTA!\n\nL'ID del titolo inserito ha una dimensione non valida!\n\nUsare il suo ID predefinito.";

// index GUI text
var gui_title="PS3 Exploitation Tutorial Template ";
var guy_by="by ";
var gui_credits="Mille grazie a xerpi per la perdita di memoria userland ps3 port, zecoxao e Joonie per il loro supporto iniziale e continuato, mysis per la documentazione di esportazioni e plug-in vsh, i contributori di psdevwiki, STLcardsWS per il suo contributo di lunga data e tutti gli hacker / sviluppatori della community di ps3 passato e presente, sai chi sei. Grazie anche a littlebalup per aver fornito l'idea e la relativa implementazione di js, abbiamo usato l'edizione HDD di Dumpers e Flasher. Anche grazie a B7U3 C50SS, Endless e 0x1991337 per il test tutorial syscall e altro aiuto! <font color='yellow'>aMaggiori dettagli e news su <a href='http://www.psx-place.com'>http://www.psx-place.com</a>. Sito Ufficiale su <a href='http://ps3xploit.com'>http://ps3xploit.com</a></font>";

// Checkboxes First Section
var gui_chk_default_settings="Impostazioni predefinite:";
var gui_chk_disable_trigger="Disabilita Trigger:";
var gui_chk_write_protect="Protezione da Scrittura:";
var gui_chk_usb_mount="USB:";

// Reboot Mode
var gui_chk_reboot_mode="Modalita' Riavvio:";
var gui_chk_reboot_mode_select="* Seleziona Modalita' *";
var gui_chk_reboot_mode_soft="Soft Reboot";
var gui_chk_reboot_mode_hard="Hard Reboot";
var gui_chk_reboot_mode_off="Spegni";

// ROP Chain Text

// Preset Chains
var gui_txt_preset_chains="Chains Predefinite: ";
var gui_txt_preset_chains_default="Predefinite/Testing";
var gui_txt_option_stackframe_test="Stackframe Test";
var gui_txt_option_beep_test="Beep Test";
var gui_txt_option_power_test="Power Test";
var gui_txt_option_minver_check="Minimum Version Check";
var gui_txt_option_sys_game_get_temperature="Visualizza CELL/RSX Temps";
var gui_txt_option_game_debug_pafjob_test="Game Debug PafJob Test";
var gui_txt_option_console_write_test="Test di scrittura della console";
var gui_txt_option_sys_tty_read="TTY Test di lettura";
var gui_txt_option_sys_tty_write="TTY Test di scrittura";

// Dumping
var gui_txt_preset_chains_dumping="Dumping";
var gui_txt_option_webkit_search_area="Scarica l'area di ricerca di WebKit";
var gui_txt_option_system_info_multi_dump="Informazioni di sistema Multi Dump";
var gui_txt_option_dump_lv2_syscall_table="Dump LV2 Syscall Table";
var gui_txt_option_mem_dump_test="Dump Raw VSH Memory";
var gui_txt_option_get_open_psid="Dump PSID";
var gui_txt_option_dump_idps_from_mem="Dump IDPS From VSH";
var gui_txt_option_sys_net_dump="SysNet Dump";
var gui_txt_sys_sm_get_platform_info="Ottieni informazioni sulla piattaforma";
var gui_txt_option_dump_idps_from_flash="Dump IDPS Dalla Flash";

// File System
var gui_txt_preset_chains_file_system="File System";
var gui_txt_option_create_new_user="Crea un nuovo utente";
var gui_txt_option_mount_usb_as_bdvd="Mount USB000 as BDVD";
var gui_txt_option_mount_usb_as_bdvd_no_disc="Mount USB000 as BDVD No Disc";
var gui_txt_option_mount_other_as_bdvd="Mount Other Device as BDVD";
var gui_txt_option_mount_bdvd_as_ps3_disc="Mount BDVD as PS3 Disc";
var gui_txt_option_db_rebuild="Ricostruzione Database";
var gui_txt_option_get_filesize="Get Filesize";
var gui_txt_option_file_read_write_test="Lettura/Scrittura File Test";
var gui_txt_option_dir_read_write_test="Lettura/Scrittura Directory Test";

// Fun
var gui_txt_preset_chains_fun="Fun";
var gui_txt_option_fun_test="Beep Test";
var gui_txt_option_test_only="Chain Test Per Sviluppatori";
var gui_txt_option_xmb_plugin_test="XMB Plugin Test";
var gui_txt_option_busy_icon_test="Test delle icone occupato";
var gui_txt_option_vsh_printf_test="VSH printf Test";
var vsh_printf_arg1="MESSAGGIO: ";
var vsh_printf_arg2="CIAO DAL TEAM PS3XPLOIT";

// Other Syscall Chains

// Memory/System
var gui_txt_syscall_group_mem_sys="Memoria/Sistema: ";
var gui_txt_syscall_chains_mem_sys="Memoria";

// Storage
var gui_txt_syscall_chains_storage="Storage";

// System
var gui_txt_syscall_chains_system="Sistema";

// Process/Thread

// Process
var gui_txt_syscall_group_proc_thread="Processo/Thread: ";
var gui_txt_syscall_chains_proc_thread="Processo";

// Process ID
var gui_txt_syscall_chains_process="Proc ID";

// Threads
var gui_txt_syscall_chains_threads="Threads";

// Thread ID
var gui_txt_syscall_chains_thread_id="Thread ID";

// Network
var gui_txt_syscall_group_network="Rete: ";

// Debugging
var gui_txt_syscall_group_debugging="Debugging: ";
var gui_txt_syscall_chains_debug_sc="System Calls";

// LED Control
var gui_txt_syscall_group_led="LED Control:";
var gui_txt_syscall_chains_led="* Seleziona Chain *";

var gui_txt_syscall_chains_led_color="Cambia Colori";
var gui_txt_option_led_color_green="Verde";
var gui_txt_option_led_color_yellow_red="Giallo/Rosso";
var gui_txt_option_led_color_off="Spento";

var gui_txt_syscall_chains_led_action="Cambia Azioni";
var gui_txt_option_led_action_on="Acceso";
var gui_txt_option_led_action_off="Spento";
var gui_txt_option_led_action_blink_fast="Lampeggia veloce";
var gui_txt_option_led_action_blink_slow="Lampeggia spento";

// Beep Parameters
var gui_txt_syscall_group_beep_params="Beep Parametri: ";
var gui_txt_syscall_chains_beeps="# di Beeps";
var gui_txt_option_beep_off="Spegni";
var gui_txt_option_beep_3="3 Beeps";
var gui_txt_option_beep_2="2 Beeps";
var gui_txt_option_beep_2f="2 Beeps Veloci";
var gui_txt_option_beep_1="1 Beep";
var gui_txt_option_beep_1f="1 Beep Veloci";
var gui_txt_option_beep_flatline="Linea Piatta";

// Memory Dump
var gui_txt_syscall_group_memdump="Memory Dump:";
var gui_txt_memdump_addresses="Indirizzo MemDump";
var gui_txt_memdump_size="Dimensione MemDump";
var gui_txt_memdump_range_presets="Preimpostazione:";
var gui_txt_option_memdump_presets_default="* Nessuna preimpostazione selezionata *";

var gui_txt_memdump_address_start="Inizio:";
var gui_txt_memdump_address_end="Fine:";
var gui_txt_btn_memdump_set_values="Imposta nuovi valori";

var gui_txt_mounting_setup="Mounting: ";
var gui_txt_option_mount_device="Nome Dispositivo";
var gui_txt_option_mount_fs="File System";
var gui_txt_option_mount_path="Mount Path";

var gui_txt_group_user_id="User ID:";
var gui_txt_option_user_id_default="* Predefinito *";
var gui_txt_user_id_new="ID utente impostato su: ";
var gui_txt_home_path_new="\n\nIl nuovo percorso HOME è: \n\n";

var gui_txt_group_permissions="Permessi:";

var gui_txt_group_filesize="Dimensione File:";
var gui_txt_group_titleid="TitleID:";

var gui_txt_btn_set_filesize="Imposta";
var gui_txt_btn_set_titleid="Imposta";

var gui_txt_group_path_source="Sorgente:";
var gui_txt_group_path_destination="Destinazione: ";

// XMB Transfer
var gui_txt_syscall_group_xmb_transfer="Opzione di trasferimento XMB ";
var gui_txt_option_xmb_photo="Foto";
var gui_txt_option_xmb_music="Musica";
var gui_txt_option_xmb_video="Video";
var gui_txt_option_xmb_jpg_btn="Premi &#x25B3 da JPG";
var gui_txt_option_xmb_mp3_btn="Premi &#x25B3 da MP3";
var gui_txt_option_xmb_mp4_btn="Premi &#x25B3 da MP4";
var gui_txt_option_xmb_save_msg="&#x2192 File &#x2192 Salva Target &#x2192 in Archivio di Sistema";

var gui_txt_group_payload_type="Tipo di Payload ";
var gui_txt_group_payload_type_help="Sostituisci i payload predefiniti con i tuoi file, usando gli stessi nomi, e posizionali in TEMPLATE/payloads/folder sotto l'origine HTML";

// String Search
var gui_txt_group_string_search="Cerca:";
var gui_txt_option_search_size="Dimensione";
var gui_txt_option_search_base="Base";
var gui_txt_option_search_stack="Stack";
var gui_txt_option_search_range="Range";
var gui_txt_option_search_loops="Loops";

var gui_chk_search_verify_jumps="Verifica Jumps:";
var gui_chk_search_verify_stackframe="Stackframe:";
var gui_chk_search_debug_output="Debug:";

// Buttons
var gui_txt_option_init_rop_btn="Inizializza ROP Chain";
var gui_txt_option_exec_rop_btn="Esegui Chain";
var gui_txt_option_reload_page_btn="Ricarica Pagina";
var gui_txt_option_reset_btn="Resetta Opzioni";
var gui_txt_option_load_settings_btn="Carica Impostazioni";
var gui_txt_option_save_settings_btn="Salva Impostazioni";
var gui_txt_option_debug_show_var_btn="Visualizza tutte le variabili";
