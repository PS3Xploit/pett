// PS3 missatges predefinits [Català Espanya]
// PS3Xploit Team 2018 / ps3xploit.com

// Translation Credits: @minicm94123


// After complete translate the language file update it to latest revision (same as en_us)
var current_minimum_lang_revision="0000";
var gui_incomplete_lang="Current translation is incomplete, consider updating or just skip it";

var msg_select_vsh_type="¿Fas servir CEX?\n\nSeleccionar NO acivará l'ús de offsets DEX";
		
var msg_detected_fw_1="Detectat FW: ";
var msg_detected_fw_2=" ";
//var msg_detected_fw_3=" / MinVer: ";
var msg_detected_fw_4=" | Compatible amb TOTS els models i els firmware 4.xx";

var compat_msg_wrong_fw1="¡El teu PS3 no està en una versió compatible! La teva versió actual és ";
var compat_msg_wrong_fw2=", la qual no és compatible amb PS3Xploit. Totes les funcions es desactivaran.";
var compat_msg_success1="¡Enhorabona! Hem detectat que el teu PlayStation aquesta al FW ";
var compat_msg_success2=", el qual és compatible amb PS3Xploit! Gaudeix-ne!";

var msg_option_not_available="¡Aquesta opció encara no està disponible!";

// Settings
var msg_settings_load="¡Això està en prova i carrega la configuració des d'una galeta!";
var msg_settings_save="¡Això està en prova i guarda la configuració a una galeta!";

// MinVer/CFW Compatibility
var msg_minver_loaded_into_mem="¡El valor de MinVer ha estat carregat a la memòria!\n\n¡Prem el botó Executar de nou per mostrar-!";
var msg_minver_start="¡La teva versió mínima per Downgrade és ";
var msg_minver_mid=" i és ";
var msg_minver_end=" compatible amb CFW ara!";
var msg_minver_compat_not="NOT";

// CELL/RSX Temperatures
var msg_temps_loaded_into_mem="¡El valor de temperatura CELL / RSX ha estat carregat a la memòria!\n\n¡Prem el botó Executar de nou per mostrar-la!";
var msg_temps_cell="Temperatura de CELL: ";
var msg_temps_rsx="\n\nTemperatura de RSX: ";
var msg_temps_celcius=" Celcius";

// MemDump
var msg_memdump_warning="¡Precaució!\n\n¡Aquesta prova es congelarà si es colpeja una àrea de memòria no assignada durant el procés de bolcat! \n\n¡Encara obtindràs un bolcat vàlid, fins a la resolució!";
var msg_memdump_idps_vsh="Només són actualment compatibles 4.66 / 4.81 / 4.82 per al bolcat directe de IDPs des de la memòria VSH!\n\nLa cadena basada en extreure la IDPs des de la Flash és diferent.\n\nQualsevol altra versió de FW només bolcarà tot en 0s.";
var msg_memdump_size="Raw VSH MemDump Values\n\nSize: 0x";
var msg_memdump_start_addr="\nStart Address: 0x";
var msg_memdump_end_addr="\nEnd Address: 0x";

// Warnings
var msg_fd_close_warning="Els descriptors de fitxer no es tanquen de forma automàtica.";
var msg_remove_dir_warning="¡PRECAUCIÓ!\n\nVés amb compte mentre fas servir les crides al sistema.\n\n¡Pots esborrar un directori necessari i haver de reinstal·lar el microprogramari!";
var msg_warning_write_protection="Protecció d'escriptura desactivada!\n\n¡¡¡Procedir amb CURA!!!";

var msg_cobra_only="¡ALERTA!\n\n¡Això NOMÉS funciona en CFW amb COBRA activat!";

var msg_mount_test="¡** EN FASE DE PROVA **!\n\nAixò muntarà / dev_hdd1 /\n\n¡Un cop muntada, pots reiniciar el navegador i utilitzar la cadena L / E arxiu per bolcar des de la partició / dev_hdd1 / a una destinació!";

// File Operations
var msg_default_size="Usant mida per defecte 0x140";
var msg_new_size="Nou mida del fitxer: ";
var msg_destination_path_set_new="Camí nou establert a:\n\n";
var msg_destination_path_incorrect="¡La ruta de destinació és incorrecta!\n\n¡Has col·locar-la abans de canviar el títol ID!";

// Trigger Messages
var trigger_msg="desencadenant exploit...";
var trigger_msg2="desencadenat: 0x";

// Search Strings
var msg_search_offsets="<h3><b>¡Buscant Offsets en la memòria! Si us plau espera.... <br>¡Si ets impacient, tanca el navegador i torna-ho de nou després 60-90 segons!</b></h3>";
var msg_verify_offsets="<h3><b>¡Verificant Offsets en la memòria! Si us plau espera.... <br>¡NO tancaments el navegador encara!</b></h3>";

// Fail Search Messages
var msg_string_search_fail="<h3><b><font color='#7700DA'>¡No s'han trobat TOTS els Offsets!</font><font color='#7700DA'> ¡Si la recerca falla de nou, s'ajusta la configuració o REINICIA el navegador!</font></b></h3>";
var msg_string_search_fail_max="<h3><b><font color='#7700DA'>¡No s'han trobat TOTS els Offsets!</font><font color='#7700DA'> ¡Nombre d'intents superat! ¡Si us plau REINICIA el navegador!</font></b></h3>";

// Verify Strings Fail
var msg_string_verify_fail="<h3><b><font color='#7700DA'>¡No s'han verificat TOTS els Offsets!</font><font color='#7700DA'> ¡Si la verificació falla de nou, REINICIA el navegador!</font></b></h3>";
var msg_string_verify_fail_max="<h3><b><font color='#7700DA'>¡No s'han verificat TOTS els Offsets!!</font><font color='#7700DA'> ¡Nombre d'intents superats! Si us plau REINICIA el navegador!</font></b></h3>";

// Init Success
var msg_success_init="<h3><b><font color='#386E38'>¡ACONSEGUIT!</font><font color='#7700DA'> <br>¡Ara pots executar la teva cadena!</font></b></h3>";

// Exec Success
var success_chain_exec="<h3><b><font color='#386E38'>¡Cadena executada amb èxit!</font></b></h3>";
var success_chain_exec_press_again="<h3><b><font color='#386E38'>¡Prem el botó Executar de nou!</font></b></h3>";
var success_chain_exec_psid="<h3><b><font color='#386E38'>¡PSID bolcat amb èxit!</font></b></h3>";
var success_chain_exec_idps="<h3><b><font color='#386E38'>¡IDPs bolcat amb èxit!</font></b></h3>";
var success_chain_exec_memdump="<h3><b><font color='#386E38'>¡Memòria bolcada amb èxit!</font></b></h3>";
var success_chain_exec_read_write_file="<h3><b><font color='#386E38'>¡Tranferido origen a destinació amb èxit!</font></b></h3>";
var success_mount_device="<h3><b><font color='#386E38'>¡Muntat /dev_hdd1/ amb èxit! Reinicieu el navegador i inicia la cadena L / E per bolcar.</font></b></h3>";

// Compatibility/Offset Messages
var ua_msg="<hr><h3>Informació de navegador de sistema PS3: "+navigator.userAgent+ "</h3>";
var compat_msg_nops3="¡No estàs en un sistema PlayStation! Totes les funcions es desactivaran.";
var compat_msg_devs="¡Això és NOMÉS per a desenvolupadors!\n\nEls offsets CEX necessitaran ser afegits manualment l'arxiu /js/chains/offsets.js, basat en els teus offsets DEX en ús per a cada cadena.";
var experimental="¡Col·loca aquesta pàgina com a pàgina d'inici´!\n\n¡Fes-lo servir SOTA EL TEU PROPI RISC!\n¡Podria tenir fallades i algunes coses no funcionar!\n\n¡TOTS els models 4.xx CEX i 4.81 DEX són compatibles";

// Other Messages
var msg_prerelease="¡AIXÒ ÉS UN PRE LLANÇAMENT!!\n\n¡EL SUPORT AMB ELS FIRMWARE ANTERIORS SOL HA ESTAT PARCIALMENT IMPLEMENTAT!!\n\nNOMÉS 4.81 / 4.82 FINS AL PROPER LLANÇAMENT!";
var msg_anti_piracy="¡aDVERTÈNCIA!\n\n¡NO vam aprovar ni donem suport a la PIRATERIA de cap tipus!\n\nEn utilitzar aquest tutorial, i en fer clic a SÍ, acceptes usar-lo ÚNICAMENT amb fins educatius!";
var msg_anti_piracy_edat="¡Notes ANTI-PIRATERIA!\n\n¡Aquesta opció està dissenyada només per a fins de prova i desenvolupament, i no s'ha d'abusar!\n\nEn fer clic a SÍ, acceptes usar-lo ÚNICAMENT amb títols COMPRATS!";

var msg_thread_name="Hola_DESDE_PS3Xploit";

// Devices
var msg_device_loaded_into_mem="¡El valor de dispositiu ha estat carregat a la memòria!\n\n¡Prem el botó Executar de nou per mostrar!";
var msg_get_device_info1="dispositiu retornat: ";
var msg_get_device_info2="\n\nFes servir això per a la cadena sys_storage_report_devices";

// Debugging
var msg_debug_placeholder="Vague XP +1";

var msg_stackframe_check="Això buscarà problemes en l'armadura per defecte.\n\n¡Si falla o no apareix un missatge d'èxit, llavors hi ha un problema!";

// String Matching
var verify_fail="<font color='#7700DA'>FALLO: ¡Les cadenes no coincideixen en la memòria!</font>";
var verify_success="<font color='#2a1003'>ACONSEGUIT: ¡Les cadenes coincideixen en la memòria!</font>";
var verify_skip="<font color='#2a1003'>ACONSEGUIT: ¡Les cadenes no han estat verificades en la memòria!</font>";

var msg_search_flash_type_start="Cercar paràmetres col·locats per ";
var msg_search_flash_type_end=" ¡Tipus de Flash!";

var msg_check_memory="comprovar memòria: ";
var msg_chk_mem_arg_error="¡Error de funció d'arguments en comprovar memòria! tamaño=0x";
var msg_malformed_html="¡HTML mal format!";
var msg_string_located=" Trobat a l'offset: 0x";
var msg_string_not_located="no pot ser localitzat en el rang";

// Found Offsets
var msg_found_offsets="offsets trobats: ";
var msg_verified_offsets="offsets verificats: ";
var offset_find_success="ACONSEGUIT";
var offset_find_base_fp="base_fp";
var offset_find_stack_frame="armadura";
var offset_find_jump2="salto2";
var offset_find_jump1="salto1";

var msg_page_args_not_set="¡No s'han col·locat arguments a la pàgina!\n\nFeu clic al botó Establir arguments i torneu a provar.";
var msg_no_chain_selected="¡No s'ha seleccionat Hex de cadena ROP!\n\nUtilitza el quadre desplegable per seleccionar un.";
var msg_media_not_supported="¡Aquesta opció encara no ha estat implementada!";
var msg_cannot_continue="No es pot continuar .... ¡Tornant!";

var msg_invalid_title_id="¡ALERTA!\n\n¡La identificació de títol introduït té una mida invàlid!\n\nUsant ID per defecte.";

// index GUI text
var gui_title="Plantilla del tutorial per al Exploit de PS3 ";
var gui_team="per PS3Xploit Team: <b><font color='#7700DA'>W</font><font color='#FFF'> | </font><font color='#7700DA'>esc0rtd3w</font><font color='#FFF'> | </font><font color='#7700DA'>habib</font><font color='#FFF'> | </font><font color='#7700DA'>bguerville</font></b>";
var gui_credits="Moltes gràcies a xerpi per portar a PS3 l'exploit de pèrdua de memòria en mode usuari, zecoxao & Joonie per la seva suport ràpid i continu, mysis per documentar l'exportació VSH i complements, per descomptat als contribuïdors de psdevwiki, STLcardsWS, NereidaDev per la seva contribució llarga durada ia tota la comunitat de hackers i desenvolupadors de PS3 passats i actuals, vosaltres sabeu qui sou. Gràcies a littlebalup també per donar-me la idea i implementar el js relacionat que fem servir per fer l'edició HDD de les eines de bolcat i flasheo ... Gràcies a B7U3 C50SS, Endless, i 0x1991337 per provar les crides al sistema d'aquest tutorial! <font color='yellow'>Mas detalls i notícies en <a href='http://www.psx-place.com'>http://www.psx-place.com</a>. pàgina oficial: <a href='http://ps3xploit.com'>http://ps3xploit.com</a></font>";

// Checkboxes First Section
var gui_chk_default_settings="Opcions per defecte:";
var gui_chk_disable_trigger="desactivar desencadenant:";
var gui_chk_write_protect="Protecció de escriptura:";
var gui_chk_flash_type_nand="NAND:";
var gui_chk_flash_type_nor=" NOR:";
var gui_chk_flash_type_emmc=" eMMC:";

// Reboot Mode
var gui_chk_reboot_mode="Mode de reinici:";
var gui_chk_reboot_mode_select="* Selecciona manera *";
var gui_chk_reboot_mode_soft="reinici Soft";
var gui_chk_reboot_mode_hard="reinici Hard";
var gui_chk_reboot_mode_off="Apagar";

// ROP Chain Text

// Preset Chains
var gui_txt_preset_chains="cadena per omissió: ";
var gui_txt_preset_chains_default="Defecte / Provant";
var gui_txt_option_stackframe_test="prova d'armadura";
var gui_txt_option_beep_test="Prova de xiulet";
var gui_txt_option_power_test="Prova d'energia";
var gui_txt_option_minver_check="Mirar versió mínima";
var gui_txt_option_sys_game_get_temperature="Ensenyar temp. de CELL / RSX";
var gui_txt_option_game_debug_pafjob_test="Game Debug PafJob Test";
var gui_txt_option_console_write_test="Prova d'escriptura a la consola";
var gui_txt_option_sys_tty_read="Prova de lectura TTY";
var gui_txt_option_sys_tty_write="Prova d'escriptura TTY";

// Dumping
var gui_txt_preset_chains_dumping="bolcat";
var gui_txt_option_system_info_multi_dump="Multi bolcat d'info de sistema";
var gui_txt_option_dump_lv2_syscall_table="Bolcar taula de crides al sistema LV2";
var gui_txt_option_mem_dump_test="Bolcar memòria Raw VSH";
var gui_txt_option_get_open_psid="bolcar PSID";
var gui_txt_option_dump_idps_from_mem="Bolcar IDPs des VSH";
var gui_txt_option_sys_net_dump="bolcar Sysnet";
var gui_txt_option_dump_idps_from_flash="Bolcar IDPs des Flash";

// File System
var gui_txt_preset_chains_file_system="Sistema d'arxius";
var gui_txt_option_db_rebuild="Reconstruir sistema de dades";
var gui_txt_option_file_read_write_test="Prova de Lectura / Escriptura d'arxius";
var gui_txt_option_dir_read_write_test="Prova de Lectura / Escriptura de directori";

// Fun
var gui_txt_preset_chains_fun="divertit";
var gui_txt_option_fun_test="Prova de xiulet";

// Other Syscall Chains

// Memory/Syatem
var gui_txt_syscall_group_mem_sys="Memòria / Sistema: ";
var gui_txt_syscall_chains_mem_sys="memòria";
var gui_txt_option_sys_rsx_memory_free="sys_rsx_memory_free";

// Storage
var gui_txt_syscall_chains_storage="emmagatzematge";
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
var gui_txt_syscall_chains_system="Sistema";
var gui_txt_option_sys_ss_utoken_if="sys_ss_utoken_if";

// Process/Thread

// Process
var gui_txt_syscall_group_proc_thread="Processos / Fils: ";
var gui_txt_syscall_chains_proc_thread="Processos";
var gui_txt_option_sys_process_exit="sys_process_exit";
var gui_txt_option_sys_process_kill="sys_process_kill";

var gui_txt_syscall_chains_process="ID de Procés";

// Threads
var gui_txt_syscall_chains_threads="fils";
var gui_txt_option_ppu_thread_get_priority="thread_get_priority";
var gui_txt_option_ppu_thread_get_stack_info="thread_get_stack_info";
var gui_txt_option_sys_ppu_thread_create="sys_ppu_thread_create";
var gui_txt_option_sys_ppu_thread_exit="sys_ppu_thread_exit";
var gui_txt_option_sys_ppu_thread_restart="sys_ppu_thread_restart";
var gui_txt_option_sys_ppu_thread_start="sys_ppu_thread_start";
var gui_txt_option_sys_ppu_thread_stop="sys_ppu_thread_stop";

// Thread ID
var gui_txt_syscall_chains_thread_id="ID de Fil";

// Network
var gui_txt_syscall_group_network="Red: ";
var gui_txt_syscall_chains_sys_net="sys_net";
var gui_txt_option_sys_net_open_dump="sys_net_open_dump";
var gui_txt_option_sys_net_read_dump="sys_net_read_dump";
var gui_txt_option_sys_net_write_dump="sys_net_write_dump";
var gui_txt_option_sys_net_close_dump="sys_net_close_dump";

var gui_txt_option_url="URL: ";

// Debugging
var gui_txt_syscall_group_debugging="desenvolupament: ";
var gui_txt_syscall_chains_debug_sc="Crides al sistema";
var gui_txt_option_debug_placeholder="Prueba_de_pitido";

// LED Control
var gui_txt_syscall_group_led="Control de LED:";
var gui_txt_syscall_chains_led="* Seleccionar cadena *";
var gui_txt_option_sys_sm_request_led="sys_sm_request_led";
var gui_txt_option_sys_sm_control_led="sys_sm_control_led";

var gui_txt_syscall_chains_led_color="canviar color";
var gui_txt_option_led_color_green="Verd";
var gui_txt_option_led_color_yellow_red="Groc / Vermell";
var gui_txt_option_led_color_off="apagat";

var gui_txt_syscall_chains_led_action="canviar acció";
var gui_txt_option_led_action_on="encesa";
var gui_txt_option_led_action_off="apagat";
var gui_txt_option_led_action_blink_fast="parpelleig ràpid";
var gui_txt_option_led_action_blink_slow="parpelleig lent";

// Beep Parameters
var gui_txt_syscall_group_beep_params="Paràmetre de xiulet: ";
var gui_txt_syscall_chains_beeps="# de xiulets";
var gui_txt_option_beep_off="Apagat";
var gui_txt_option_beep_3="3 xiulets";
var gui_txt_option_beep_2="2 xiulets";
var gui_txt_option_beep_2f="2 xiulets ràpids";
var gui_txt_option_beep_1="1 xiulets";
var gui_txt_option_beep_1f="1 xiulets ràpids";
var gui_txt_option_beep_flatline="línia plana";

// Memory Dump
var gui_txt_syscall_group_memdump="bolcar memòria:";
var gui_txt_memdump_addresses="Direcció de bolcat de memòria";
var gui_txt_memdump_size="Mida de bolcat de memòria";
var gui_txt_memdump_range_presets="Per omissió:";
var gui_txt_option_memdump_presets_default="* Sense selecció per omissió *";

var gui_txt_memdump_address_start="començar:";
var gui_txt_memdump_address_end="acabar:";
var gui_txt_btn_memdump_set_values="Posar Nous valors";

var gui_txt_group_user_id="ID d'usuari:";
var gui_txt_option_user_id_default="* defecte *";
var gui_txt_user_id_new="ID d'usuari establert a: ";
var gui_txt_home_path_new="\n\nEl camí d'inici nou és: \n\n";

var gui_txt_group_permissions="Permisos:";
var gui_txt_option_chmod="chmod";
var gui_txt_option_chown="chown";

var gui_txt_group_filesize="Mida d'arxiu:";
var gui_txt_group_titleid="ID de títol:";

var gui_txt_btn_set_filesize="Col locar";
var gui_txt_set_titleid="PS3XPLOIT";
var gui_txt_btn_set_titleid="Col locar";

var gui_txt_group_path_source="Origen:";
var gui_txt_group_path_destination="destinació: ";

// XMB Transfer
var gui_txt_syscall_group_xmb_transfer="Opció de transferència XMB";
var gui_txt_option_xmb_photo="Foto";
var gui_txt_option_xmb_music="Musica";
var gui_txt_option_xmb_video="Video";
var gui_txt_option_xmb_jpg_btn="Prem &#x25B3 para JPG";
var gui_txt_option_xmb_mp3_btn="Prem &#x25B3 para MP3";
var gui_txt_option_xmb_mp4_btn="Prem &#x25B3 para MP4";
var gui_txt_option_xmb_save_msg="&#x2192 arxiu &#x2192 Guardar destino &#x2192 Emmagatzematge de sistema";

var gui_txt_group_payload_type="tipus de payload ";
var gui_txt_group_payload_type_help="Reemplaça els payloads per defecte amb els teus propis arxius, usant els mateixos noms, i col·loca'ls a la carpeta TEMPLATE/payloads/ carpeta sota la font HTML";

// String Search
var gui_txt_group_string_search="Cercar:";
var gui_txt_option_search_size="mida";
var gui_txt_option_search_base="Base";
var gui_txt_option_search_stack="Apilar";
var gui_txt_option_search_range="rang";
var gui_txt_option_search_loops="Bucles";

var gui_chk_search_verify_jumps="verificar Salts:";
var gui_chk_search_verify_stackframe="armadura:";
var gui_chk_search_debug_output="Depurar:";

var gui_txt_search_found_offsets="offsets trobats: base_fp: 0x0 | stack_frame_addr: 0x0 | jump_2_addr: 0x0 | jump_1_addr: 0x0";

// Buttons
var gui_txt_option_init_rop_btn="Iniciar Cadena ROP";
var gui_txt_option_exec_rop_btn="executar Cadena";
var gui_txt_option_reload_page_btn="recarregar Pàgina";
var gui_txt_option_reset_btn="reiniciar Opcions";
var gui_txt_option_load_settings_btn="carregar Configuració";
var gui_txt_option_save_settings_btn="Guardar Configuració";
var gui_txt_option_debug_show_var_btn="ensenyar Variables";
