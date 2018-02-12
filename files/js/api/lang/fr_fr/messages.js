// PS3 Default Messages [French]
// PS3Xploit Team 2018 / ps3xploit.com

// Translation Credits: @valentinbreiz


var msg_select_vsh_type="Vous utilisez une PS3 CEX?\n\nLa sélection de NON utilisera les offsets DEX";

var msg_detected_fw_1="FW détecté: ";
var msg_detected_fw_2=" ";
//var msg_detected_fw_3=" / MinVer: ";
var msg_detected_fw_4=" | Supporte TOUS les modèles en firmware 4.xx";

var compat_msg_wrong_fw1="Votre PS3 n'est pas compatible! Votre version actuelle est ";
var compat_msg_wrong_fw2=", ce qui n'est pas compatible avec PS3Xploit. Toutes les fonctionnalités ont été désactivées";
var compat_msg_success1="Super! Nous avons détecté que votre PlayStation 3 est en FW ";
var compat_msg_success2=", ce qui est compatible avec PS3Xploit! Profitez-en!";

var msg_option_not_available="Cette option n'est pas encore disponible!";

// Settings
var msg_settings_load="Ceci est expérimental et charge les paramètres à partir des cookies!";
var msg_settings_save="Ceci est expérimental et enregistre les paramètres dans les cookies!";

// MinVer/CFW Compatibility
var msg_minver_loaded_into_mem="Valeur de retour MinVer chargée dans la mémoire!\n\nAppuyez à nouveau sur le bouton Executer pour lire et afficher!";
var msg_minver_start="Votre version de downgrade minimale est ";
var msg_minver_mid=" et est ";
var msg_minver_end=" compatible avec les CFW!";

// CELL/RSX Temperatures
var msg_temps_loaded_into_mem="Les valeurs de retour des températures de CELL/RSX sont chargées dans la mémoire!\n\nAppuyez à nouveau sur le bouton Executer pour les lire et les afficher!";
var msg_temps_cell="Température CELL: ";
var msg_temps_rsx="\n\nTempérature RSX: ";
var msg_temps_celcius=" Celcius";

// MemDump
var msg_memdump_warning="Attention!\n\nCe test va geler si une zone mémoire non allouée est atteinte pendant le processus de vidage!\n\nVous aurez toujours un dump valide, jusqu'au crash!";
var msg_memdump_idps_vsh="Seulement les versions 4.66/4.81/4.82 sont actuellement pris en charge pour le dumping de l'IDPS directement depuis la mémoire VSH!\n\Les Chain d'extraction de l'IDPS depuis la mémoire flash est différent.\n\nToutes les autres versions de FW vont probablement juste dumper des 0s.";
var msg_memdump_size="Valeurs de Raw VSH MemDump\n\nTaille: 0x";
var msg_memdump_start_addr="\nAdresse de départ: 0x";
var msg_memdump_end_addr="\nAdresse de fin: 0x";

// Warnings
var msg_fd_close_warning="Les descripteurs de fichiers ne sont actuellement pas fermés automatiquement!";
var msg_remove_dir_warning="ATTENTION!\n\nSoyez prudent lors de l'utilisation de ce syscall.\n\nVous pouvez supprimer un répertoire nécessaire et devoir réinstaller le firmware!";
var msg_warning_write_protection="Protection en écriture désactivée!\n\nProcédez avec PRUDENCE!!!";

var msg_cobra_only="ALERTE!\n\nCela fonctionne UNIQUEMENT avec COBRA activé sur un CFW!";

var msg_mount_test="** EN PHASE DE TEST **!\n\nCela va monter /dev_hdd1/\n\nUne fois monté, vous pouvez redémarrer le navigateur et utiliser R/W File chain pour dumper de la partition /dev_hdd1/ vers une autre destination!";

// File Operations
var msg_default_size="Utilisation de la taille par défaut 0x140";
var msg_new_size="Nouvelle taille de fichier: ";
var msg_destination_path_set_new="Nouvelle adresse défini sur:\n\n";
var msg_destination_path_incorrect="L'adresse de destination est incorrecte!\n\nIl doit être mit avant de changer le title ID";

// Trigger Messages
var trigger_msg="Triggering de l'exploit...";
var trigger_msg2="Trigger: 0x";

// Search Strings
var msg_search_offsets="<h3><b>Recherche d'Offsets dans la mémoire! S'il vous plaît, patientez....<br>Si vous êtes impatient, fermez le navigateur et réessayez dans environ 60-90 secondes si non trouvé!</b></h3>";
var msg_verify_offsets="<h3><b>Vérification des Offsets en mémoire! S'il vous plaît, attendez.... <br>Ne FERMEZ PAS le navigateur pour l'instant!</b></h3>";

// Fail Search Messages
var msg_string_search_fail="<h3><b><font color='#7700DA'>Toutes les Offsets n'ont pas été trouvés!</font><font color='#7700DA'> Si la recherche échoue à nouveau, ajustez les paramètres de recherche ou REDÉMARREZ le navigateur!</font></b></h3>";
var msg_string_search_fail_max="<h3><b><font color='#7700DA'>Toutes les Offsets n'ont pas été trouvés!</font><font color='#7700DA'> Maximum de tentatives atteintes! Veuillez redémarrer le navigateur!</font></b></h3>";

// Verify Strings Fail
var msg_string_verify_fail="<h3><b><font color='#7700DA'>Toutes les Offsets n'ont pas été verifiés!</font><font color='#7700DA'> Si la vérification échoue à nouveau, REDÉMARREZ le navigateur!</font></b></h3>";
var msg_string_verify_fail_max="<h3><b><font color='#7700DA'>Toutes les Offsets n'ont pas été verifiés!</font><font color='#7700DA'> Maximum de tentatives atteintes! Veuillez redémarrer le navigateur!</font></b></h3>";

// Init Success
var msg_success_init="<h3><b><font color='#386E38'>SUCCESS!</font><font color='#7700DA'> <br>Vous pouvez maintenant exécuter votre Chain!</font></b></h3>";

// Exec Success
var success_chain_exec="<h3><b><font color='#386E38'>Chain exécutée avec succès!</font></b></h3>";
var success_chain_exec_press_again="<h3><b><font color='#386E38'>Appuyez sur le bouton d'exécution une fois de plus!</font></b></h3>";
var success_chain_exec_psid="<h3><b><font color='#386E38'>PSID dumpé avec succès!</font></b></h3>";
var success_chain_exec_idps="<h3><b><font color='#386E38'>IDPS dumpé avec succès!</font></b></h3>";
var success_chain_exec_memdump="<h3><b><font color='#386E38'>Mémoire dumpé avec succès!</font></b></h3>";
var success_chain_exec_read_write_file="<h3><b><font color='#386E38'>Source transférée avec succès vers la destination!</font></b></h3>";
var success_mount_device="<h3><b><font color='#386E38'>/dev_hdd1/ monté avec succès! Redémarrez le navigateur et exécutez R/W File Chain pour dumper.</font></b></h3>";

// Compatibility/Offset Messages
var ua_msg="<hr><h3>Informations sur le navigateur système PS3: "+navigator.userAgent+ "</h3>";
var compat_msg_nops3="Vous n'êtes pas sur un système PlayStation! Toutes les fonctionnalités ont été désactivées";
var compat_msg_devs="Ceci est pour les développeurs seulement!\n\nLes offsets CEX devront être ajoutés manuellement au fichier /js/chains/offsets.js, en fonction de vos Offsets DEX utilisés pour chaque Chain.";
var experimental="Réglez votre page d'accueil sur cette page!\n\nÀ UTILISER À VOS RISQUES ET PÉRILS!\nIl pourrait y avoir des bugs et certaines choses peuvent ne pas fonctionner!\n\nTous les modèles en 4.xx CEX et 4.81 DEX sont pris en charge";

// Other Messages
var msg_prerelease="CECI EST UNE RELEASE EN PREVIEW!\n\nLE SUPPORT DES FIRMWARES ANCIENS N'A ÉTÉ QUE PARTIELLEMENT MIS EN OEUVRE!\n\n4.81/4.82 UNIQUEMENT JUSQU'À LA PROCHAINE RELEASE!";
var msg_anti_piracy="DISCLAIMER\n\nNous NE TOLÉRONS ni n'approuvons le PIRATAGE d'aucune sorte!\n\nEn utilisant ce tutoriel, et en cliquant sur OUI, vous acceptez de l'utiliser à des fins éducatives UNIQUEMENT!";
var msg_anti_piracy_edat="DISCLAIMER ANTI-PIRATAGE!\n\nCette option est uniquement destinée à des fins de test et de développement, et ne doit pas être utilisée abusivement!\n\nEn cliquant sur OUI, vous acceptez d'utiliser UNIQUEMENT ceci pour les titres qui ont été achetés!";

var msg_thread_name="Bonjour_De_PS3Xploit";

// Devices
var msg_device_loaded_into_mem="La valeur de retour du périphérique est chargée dans la mémoire!\n\nAppuyez à nouveau sur le bouton Executer pour le lire et l'afficher!";
var msg_get_device_info1="Dispositif retourné: ";
var msg_get_device_info2="\n\nUtilisez ceci pour la Chain sys_storage_report_devices";

// Debugging
var msg_debug_placeholder="Lazy XP +1";

var msg_stackframe_check="Cela vérifiera le stackframe par défaut pour des problèmes.\n\nS'il plante ou n'affiche pas un message de réussite, c'est qu'il y a un problème!";

// String Matching
var verify_fail="<font color='#7700DA'>FAIL: les textes ne correspondent pas en mémoire!</font>";
var verify_success="<font color='#2a1003'>SUCCÈS: Les textes correspondent en mémoire!</font>";
var verify_skip="<font color='#2a1003'>SUCCÈS: Textes en mémoire non verifiés!</font>";

var msg_search_flash_type_start="Recherche de params mis en place pour ";
var msg_search_flash_type_end=" type de Flash !";

var msg_check_memory="checkMemory: ";
var msg_chk_mem_arg_error="checkMemory fonction erreur d'arguments! taille=0x";
var msg_malformed_html="HTML mal formé!";
var msg_string_located=" Trouvé à l'offset: 0x";
var msg_string_not_located="n'a pas pu être situé à portée";

// Found Offsets
var msg_found_offsets="Offsets trouvées: ";
var msg_verified_offsets="Offsets verifées: ";
var offset_find_success="succès";
var offset_find_base_fp="base_fp";
var offset_find_stack_frame="stack_frame";
var offset_find_jump2="jump2";
var offset_find_jump1="jump1";

var msg_page_args_not_set="Arguments de page non définis!\n\nCliquez sur le bouton Définir les arguments et réessayez!";
var msg_no_chain_selected="Pas de ROP Chain Hex sélectionnée\n\nUtilisez la liste déroulante pour en sélectionner une";
var msg_media_not_supported="Ce choix de média n'est pas encore implémenté!";
var msg_cannot_continue="Impossible de continuer.... Retour!";

var msg_invalid_title_id="ALERTE!\n\nLe Title ID entré a une taille non valide!\n\nUtilisation de l'ID par défaut.";

// index GUI text
var gui_title="PS3 Exploitation Tutorial Template <font color='#FFF' size='3'>v0.1.3</font>";
var gui_team="par la team PS3Xploit: <b><font color='#7700DA'>W</font><font color='#FFF'> | </font><font color='#7700DA'>esc0rtd3w</font><font color='#FFF'> | </font><font color='#7700DA'>habib</font><font color='#FFF'> | </font><font color='#7700DA'>bguerville</font></b>";
var gui_credits="Un grand merci à xerpi pour le port de la faille "userland memory leak", zecoxao & Joonie pour leur support continu, mysis pour documenter les exports et plugins vsh, les contributeurs de psdevwiki bien sûr, STLcardsWS pour sa contribution de longue date et tous les hackers/devs de la communauté ps3 passé et présent. Merci aussi à littlebalup pour avoir fourni l'idée et la mise en œuvre de l'implémentation js que nous avions l'habitude de faire pour l'édition HDD des Dumpers et Flasher. Aussi grâce à B7U3 C50SS, Endless, et 0x1991337 pour le test du tutoriel syscall et d'autres aide!<font color='yellow'>Plus de détails et de nouvelles sur <a href='http://www.psx-place.com'>http://www.psx-place.com</a>. Site officiel à <a href='http://ps3xploit.com'>http://ps3xploit.com</a></font>";

// Checkboxes First Section
var gui_chk_default_settings="Paramètres par défaut:";
var gui_chk_disable_trigger="Désactiver le Trigger:";
var gui_chk_write_protect="Protection en écriture:";
var gui_chk_flash_type_nand="NAND:";
var gui_chk_flash_type_nor=" NOR:";
var gui_chk_flash_type_emmc=" eMMC:";

// Reboot Mode
var gui_chk_reboot_mode="Mode Reboot:";
var gui_chk_reboot_mode_select="* Sélectionner le mode *";
var gui_chk_reboot_mode_soft="Soft Reboot";
var gui_chk_reboot_mode_hard="Hard Reboot";
var gui_chk_reboot_mode_off="Éteindre";

// ROP Chain Text

// Preset Chains
var gui_txt_preset_chains="Preset Chains: ";
var gui_txt_preset_chains_default="Defaut/Testing";
var gui_txt_option_stackframe_test="Test de Stackframe";
var gui_txt_option_beep_test="Test de Beep";
var gui_txt_option_power_test="Test d'Alimentation";
var gui_txt_option_minver_check="Vérification de version minimale";
var gui_txt_option_sys_game_get_temperature="Montrer la température de CELL/RSX";
var gui_txt_option_game_debug_pafjob_test="Test du Game Debug PafJob";
var gui_txt_option_console_write_test="Test d'écriture de la console";
var gui_txt_option_sys_tty_read="Test de lecture de TTY";
var gui_txt_option_sys_tty_write="Test d'écriture de TTY";

// Dumping
var gui_txt_preset_chains_dumping="Dumping";
var gui_txt_option_system_info_multi_dump="Informations système Multi Dump";
var gui_txt_option_dump_lv2_syscall_table="Dump du tableau Syscall LV2";
var gui_txt_option_mem_dump_test="Dump de la mémoire Raw du VSH";
var gui_txt_option_get_open_psid="Dump du PSID";
var gui_txt_option_dump_idps_from_mem="Dump de l'IDPS à partir du VSH";
var gui_txt_option_sys_net_dump="Dump de SysNet";
var gui_txt_option_dump_idps_from_flash="Dump de l'IDPS à partir de la mémoire Flash";

// File System
var gui_txt_preset_chains_file_system="Système de fichier";
var gui_txt_option_db_rebuild="Reconstruction de la base de données";
var gui_txt_option_file_read_write_test="Test de lecture/écriture de fichier";
var gui_txt_option_dir_read_write_test="Test de lecture/écriture de dossier";

// Fun
var gui_txt_preset_chains_fun="Fun";
var gui_txt_option_fun_test="Test de Beep";

// Other Syscall Chains

// Memory/Syatem
var gui_txt_syscall_group_mem_sys="Mémoire/Système: ";
var gui_txt_syscall_chains_mem_sys="Mémoire";
var gui_txt_option_sys_rsx_memory_free="sys_rsx_memory_free";

// Storage
var gui_txt_syscall_chains_storage="Stockage";
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
var gui_txt_syscall_chains_system="Système";
var gui_txt_option_sys_ss_utoken_if="sys_ss_utoken_if";

// Process/Thread

// Process
var gui_txt_syscall_group_proc_thread="Processus/Thread: ";
var gui_txt_syscall_chains_proc_thread="Processus";
var gui_txt_option_sys_process_exit="sys_process_exit";
var gui_txt_option_sys_process_kill="sys_process_kill";

var gui_txt_syscall_chains_process="ID du processus";

// Threads
var gui_txt_syscall_chains_threads="Threads";
var gui_txt_option_ppu_thread_get_priority="thread_get_priority";
var gui_txt_option_ppu_thread_get_stack_info="thread_get_stack_info";
var gui_txt_option_sys_ppu_thread_create="sys_ppu_thread_create";
var gui_txt_option_sys_ppu_thread_exit="sys_ppu_thread_exit";
var gui_txt_option_sys_ppu_thread_restart="sys_ppu_thread_restart";
var gui_txt_option_sys_ppu_thread_start="sys_ppu_thread_start";
var gui_txt_option_sys_ppu_thread_stop="sys_ppu_thread_stop";

// Thread ID
var gui_txt_syscall_chains_thread_id="ID du Thread";

// Network
var gui_txt_syscall_group_network="Réseau: ";
var gui_txt_syscall_chains_sys_net="sys_net";
var gui_txt_option_sys_net_open_dump="sys_net_open_dump";
var gui_txt_option_sys_net_read_dump="sys_net_read_dump";
var gui_txt_option_sys_net_write_dump="sys_net_write_dump";
var gui_txt_option_sys_net_close_dump="sys_net_close_dump";

var gui_txt_option_url="URL: ";

// Debugging
var gui_txt_syscall_group_debugging="Debugging: ";
var gui_txt_syscall_chains_debug_sc="System Calls";
var gui_txt_option_debug_placeholder="beep_test";

// LED Control
var gui_txt_syscall_group_led="Control LED:";
var gui_txt_syscall_chains_led="* Sélectionner Chain *";
var gui_txt_option_sys_sm_request_led="sys_sm_request_led";
var gui_txt_option_sys_sm_control_led="sys_sm_control_led";

var gui_txt_syscall_chains_led_color="Changer la couleur";
var gui_txt_option_led_color_green="Vert";
var gui_txt_option_led_color_yellow_red="Jaune/Rouge";
var gui_txt_option_led_color_off="Off";

var gui_txt_syscall_chains_led_action="Changer l'Action";
var gui_txt_option_led_action_on="On";
var gui_txt_option_led_action_off="Off";
var gui_txt_option_led_action_blink_fast="Clignoter rapidement";
var gui_txt_option_led_action_blink_slow="Clignoter lentement";

// Beep Parameters
var gui_txt_syscall_group_beep_params="Paramètres du Beep: ";
var gui_txt_syscall_chains_beeps="# de Beeps";
var gui_txt_option_beep_off="Éteindre";
var gui_txt_option_beep_3="3 Beeps";
var gui_txt_option_beep_2="2 Beeps";
var gui_txt_option_beep_2f="2 Beeps Rapide";
var gui_txt_option_beep_1="1 Beep";
var gui_txt_option_beep_1f="1 Beep Rapide";
var gui_txt_option_beep_flatline="Flatline";

// Memory Dump
var gui_txt_syscall_group_memdump="Dump de la mémoire:";
var gui_txt_memdump_addresses="Adresse MemDump";
var gui_txt_memdump_size="Taille MemDump";
var gui_txt_memdump_range_presets="Presets:";
var gui_txt_option_memdump_presets_default="* Pas de Preset selectionné *";

var gui_txt_memdump_address_start="Début:";
var gui_txt_memdump_address_end="Fin:";
var gui_txt_btn_memdump_set_values="Définir de nouvelles valeurs";

var gui_txt_group_user_id="ID de l'utilisateur:";
var gui_txt_option_user_id_default="* Défaut *";
var gui_txt_user_id_new="ID de l'utilisateur défini sur: ";
var gui_txt_home_path_new="\n\nLa nouvelle adresse est: \n\n";

var gui_txt_group_permissions="Permissions:";
var gui_txt_option_chmod="chmod";
var gui_txt_option_chown="chown";

var gui_txt_group_filesize="Taille du fichier:";
var gui_txt_group_titleid="TitleID:";

var gui_txt_btn_set_filesize="Mettre";
var gui_txt_set_titleid="PS3XPLOIT";
var gui_txt_btn_set_titleid="Mettre";

var gui_txt_group_path_source="Source:";
var gui_txt_group_path_destination="Destination: ";

// XMB Transfer
var gui_txt_syscall_group_xmb_transfer="Option de transfert XMB ";
var gui_txt_option_xmb_photo="Photo";
var gui_txt_option_xmb_music="Musique";
var gui_txt_option_xmb_video="Vidéo";
var gui_txt_option_xmb_jpg_btn="Pressez &#x25B3 pour JPG";
var gui_txt_option_xmb_mp3_btn="Pressez &#x25B3 pour MP3";
var gui_txt_option_xmb_mp4_btn="Pressez &#x25B3 pour MP4";
var gui_txt_option_xmb_save_msg="&#x2192 fichier &#x2192 cible de sauvegarde &#x2192 stockage système";

var gui_txt_group_payload_type="Type de Payload ";
var gui_txt_group_payload_type_help="Remplacez les payloads par défaut avec vos propres fichiers, en utilisant les mêmes noms, et placez dans le dossier TEMPLATE/payloads/ dans la source HTML";

// String Search
var gui_txt_group_string_search="Rechercher:";
var gui_txt_option_search_size="Taille";
var gui_txt_option_search_base="Base";
var gui_txt_option_search_stack="Stack";
var gui_txt_option_search_range="Range";
var gui_txt_option_search_loops="Loops";

var gui_chk_search_verify_jumps="Verifier les Jumps:";
var gui_chk_search_verify_stackframe="Stackframe:";
var gui_chk_search_debug_output="Debug:";

var gui_txt_search_found_offsets="Offsets trouvées: base_fp: 0x0 | stack_frame_addr: 0x0 | jump_2_addr: 0x0 | jump_1_addr: 0x0";

// Buttons
var gui_txt_option_init_rop_btn="Initialisation de la chaîne ROP";
var gui_txt_option_exec_rop_btn="Exécution de la Chain";
var gui_txt_option_reload_page_btn="Rafraîchir la page";
var gui_txt_option_reset_btn="Réinitialiser les options";
var gui_txt_option_load_settings_btn="Charger les paramètres";
var gui_txt_option_save_settings_btn="Enregistrer les paramètres";
var gui_txt_option_debug_show_var_btn="Afficher toutes les variables";
