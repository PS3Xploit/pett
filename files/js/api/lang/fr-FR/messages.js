// PS3Xploit Index GUI Messages [French]
// PS3Xploit Team 2018 / ps3xploit.com

// Translation Credits: @humanshield85 and @valentinbreiz


// After complete translate the language file update it to latest revision (same as en-US)
var current_minimum_lang_revision="0000";
var gui_incomplete_lang="Current translation is incomplete, consider updating or just skip it";

var msg_select_vsh_type="utiliser CEX?\n\nSi vous choisissez non les offset DEX seront utilisé";

var msg_detected_fw_1="FW détecté: ";
var msg_detected_fw_2=" ";
//var msg_detected_fw_3=" / MinVer: ";
var msg_detected_fw_4=" | Prend en charge tous les modèles et les firmwares 4.xx";

var compat_msg_wrong_fw1="Votre PS3 n'est pas sur une version compatible! Votre version FW actuelle est ";
var compat_msg_wrong_fw2=", elle n'est pas compatible avec PS3Xploit. Toutes les fonctionnalités ont été désactivées";
var compat_msg_success1="félicitations! Nous avons détecté que votre PlayStation 3 est sous FW ";
var compat_msg_success2=", qui est compatible avec PS3Xploit! Amusez vous!";

var msg_option_not_available="Cette option n'est pas encore disponible!";

// Settings
var msg_settings_load="Ceci est expérimental et charge les paramètres d'un cookie!";
var msg_settings_save="Ceci est expérimental et enregistre les paramètres dans un cookie!";

// MinVer/CFW Compatibility
var msg_minver_loaded_into_mem="Valeur de retour MinVer chargée dans la mémoire!\n\nAppuyez de nouveau sur le bouton Executer pour lire et afficher!";
var msg_filesize_loaded_into_mem="File Size Return Value Loaded Into Memory!\n\nPress Execute Button Again To Read and Display!";
var msg_minver_start="Votre version de downgrade minimale est ";
var msg_minver_mid=" et elle est ";
var msg_minver_end=" compatible avec CFW en ce moment!";
var msg_minver_compat_not="NOT";
var msg_filesize="File Size is: 0x";

// CELL/RSX Temperatures
var msg_temps_loaded_into_mem="Valeurs de retour CELL/RSX Temp chargées dans la mémoire!\n\nAppuyez de nouveau sur le bouton Executer pour lire et afficher!";
var msg_temps_cell="CELL Température: ";
var msg_temps_rsx="\n\nRSX Température: ";
var msg_temps_celcius=" Celcius";

// MemDump
var msg_memdump_warning="Attention!\n\nCe test va freezer si une zone mémoire non allouée est atteinte pendant le processus de dump!\n\nVous aurez toujours une dump valide, jusqu'à le freeze!";
var msg_memdump_idps_vsh="Seulement 4.66 / 4.81 / 4.82 Actuellement pris en charge pour le IDPS dumping Directement de mémoire VSH!\n\nExtrait du IDPS de la memoire Flash est différent.\n\nToutes les autres versions de FW ,vont probablement tous dumper des 0s.";
var msg_memdump_size="Valeurs MemDump VSH brutes\n\nTaille: 0x";
var msg_memdump_start_addr="\nAdresse de départ: 0x";
var msg_memdump_end_addr="\nAdresse de fin: 0x";

// Warnings
var msg_fd_close_warning="Les descripteurs de fichiers ne sont actuellement pas fermés automatiquement!";
var msg_remove_dir_warning="Attention!\n\nSoyez prudent lors de l'utilisation de ce syscall.\n\nVous pouvez supprimer un répertoire nécessaire et serez obliger de réinstaller le firmware!";
var msg_warning_write_protection="Protection en écriture désactivée!\n\nProcéder avec PRUDENCE!!!";

var msg_cobra_only="ALERT!\n\nCela fonctionne UNIQUEMENT avec COBRA activé sur CFW!";

var msg_mount_test="** DANS LA PHASE DE TEST **";
var msg_mount_no_disc="This Will Unmount dev_usb000 as dev_bdvd\n\nThere should be NO DISC in the drive!";
var msg_mount_yes_disc="This Will Unmount dev_bdvd and dev_usb000, then mount dev_usb000 as dev_bdvd\n\nThere should be A DISC present in the drive!";
var msg_mount_ps3_disc="This Will Mount dev_bdvd as a PS3 Disc\n\nThere should be a DISC present in the drive!";
var msg_mount_usb_enable="R9 Pointer Enabled!\n\nValue Is Set To Temp Address";
var msg_mount_usb_disable="R9 Pointer Disabled!\n\nValue Is Set To 0";

// File Operations
var msg_default_size="Utilisation de la taille par défaut 0x140";
var msg_new_size="Nouvelle taille de fichier: ";
var msg_destination_path_set_new="Nouveau chemin défini :\n\n";
var msg_destination_path_incorrect="Le chemin de destination est incorrect!\n\nIl doit être réglé avant de changer l'ID titre.";

// Trigger Messages
var trigger_msg="Déclenchement de l'exploit...";
var trigger_msg2="Déclencheur: 0x";

// Ready To Search
var msg_search_ready="<h3><b>Ready To Begin! <br>Select Chain and Options From Above, Then Press Initialize ROP Chain button!</b></h3>";

// Shows After Initial Exec Button Click
var msg_exec_init="<h3><b>Executing Chain! <br>Please Wait Until The Execution Has Finished....</b></h3>";

// Search Strings
var msg_search_offsets="<h3><b>Recherche de Offset dans la mémoire! S'il vous plaît, attendez.... <br>Si vous êtes impatient, fermez le navigateur et réessayez dans environ 60-90 secondes si rien n'est trouvé!</b></h3>";
var msg_verify_offsets="<h3><b>Vérification des Offsets en mémoire! S'il vous plaît, attendez.... <br>Ne fermez pas le navigateur !</b></h3>";

// Fail Search Messages
var msg_string_search_fail="<h3><b><font color='#7700DA'>Nous n'avons pas trouvé tous les Offsets!</font><font color='#7700DA'> Si la recherche échoue à nouveau, ajustez les paramètres de recherche ou redémarrez le navigateur!</font></b></h3>";
var msg_string_search_fail_max="<h3><b><font color='#7700DA'>Nous n'avons pas trouvé tous les Offsets!</font><font color='#7700DA'> Max Tentatives essayer! Veuillez redémarrer le navigateur!</font></b></h3>";

// Verify Strings Fail
var msg_string_verify_fail="<h3><b><font color='#7700DA'>N'a pas vérifié tous les Offsets!</font><font color='#7700DA'> Si la vérification échoue à nouveau, redémarrez le navigateur!</font></b></h3>";
var msg_string_verify_fail_max="<h3><b><font color='#7700DA'>N'a pas vérifié tous les Offsets!</font><font color='#7700DA'> Max Tentatives essayer! Veuillez redémarrer le navigateur!</font></b></h3>";

// Init Success
var msg_success_init="<h3><b><font color='#386E38'>SUCCÈS!</font><br><font color='#7700DA'>Vous pouvez maintenant exécuter votre chaîne!</font></b></h3>";

// Exec Success
var success_chain_exec="<h3><b><font color='#386E38'>Chaîne exécutée avec succès!</font></b><br> &nbsp;</h3>";
var success_chain_exec_press_again="<h3><b><font color='#386E38'>Appuyez sur le bouton Exécuter une fois de plus!</font></b></h3>";
var success_chain_exec_psid="<h3><b><font color='#386E38'>PSID Dumpé avec succès!</font></b></h3>";
var success_chain_exec_idps="<h3><b><font color='#386E38'>IDPS Dumpé avec succès!</font></b></h3>";
var success_chain_exec_syscall_dump="<h3><b><font color='#386E38'>Syscall Return Value Dumped Successfully!</font></b></h3>";
var success_chain_exec_memdump="<h3><b><font color='#386E38'>Mémoire Dumpé avec succès!</font></b></h3>";
var success_chain_exec_read_write_file="<h3><b><font color='#386E38'>Source transférée avec succès vers la destination!</font></b></h3>";
var success_mount_device="<h3><b><font color='#386E38'>Successfully Mounted Device!</font></b></h3>";

// Compatibility/Offset Messages
var ua_msg="<hr><h3>PS3 System Browser Info: "+navigator.userAgent+ "</h3>";
var compat_msg_nops3="Vous n'êtes pas sur un système PlayStation! Toutes les fonctionnalités ont été désactivées";
var compat_msg_devs="Ceci est pour les développeurs seulement!\n\nLes Offsets CEX devront être ajoutés manuellement au fichier /js/chains/offsets.js, en fonction de vos Offsets DEX utilisés pour chaque chaîne.";
var experimental="Définissez votre page d'accueil sur cette page!\n\nÀ UTILISER À VOS RISQUES!\nIl pourrait y avoir des bugs et certaines choses peuvent ne pas fonctionner!\n\nTous les modèles sur 4.xx CEX et 4.81 DEX sont pris en charge";

// Other Messages
var msg_prerelease="CECI EST UNE VERSION D'APERÇU!\n\nLE SUPPORT DU FIRMWARE ANCIEN N'A ÉTÉ QUE PARTIELLEMENT MIS EN OEUVRE!\n\n4.81/4.82 SEULEMENT JUSQU'À LA PROCHAINE VERSION!";
var msg_anti_piracy="AVERTISSEMENT\n\nNous ne tolérons ni n'approuvons le PIRATAGE d'aucune sorte!\n\nEn utilisant ce tutoriel, et en cliquant sur OUI, vous acceptez de l'utiliser à des fins éducatives SEULEMENT!";
var msg_anti_piracy_edat="DÉNI DE L'ANTI-PIRATAGE!\n\nCette option est uniquement destinée à des fins de test et de développement, et ne doit pas être utilisée abusivement!\n\nEn cliquant sur OUI, vous acceptez d'utiliser UNIQUEMENT ceci pour les titres que vous avez achetés!";

// Devices
var msg_device_loaded_into_mem="La valeur de retour du périphérique est chargée dans la mémoire!\n\nAppuyez à nouveau sur le bouton Executer pour lire et afficher!";
var msg_get_device_info1="Dispositif retourné: ";
var msg_get_device_info2="\n\nUtilisez ceci pour Chaîne sys_storage_report_devices";

// Debugging

var msg_stackframe_check="Cela vérifiera le stackframe par défaut des problèmes.\n\nS'il plante ou n'affiche pas un message de réussite, il y a un problème!";

// String Matching
var verify_fail="<font color='#7700DA'>ÉCHOUER: les Strings ne correspondent pas en mémoire!</font>";
var verify_success="<font color='#2a1003'>Succès: Les String correspondent en mémoire!</font>";
var verify_skip="<font color='#2a1003'>Succès: ne vérifie pas les Strings en mémoire!</font>";

var msg_search_flash_type_start="Param. de rech. définis pour ";
var msg_search_flash_type_end=" Type Flash!";

var msg_chk_mem_arg_error="checkMemory erreur des arguments de la fonction ! size=0x";
var msg_malformed_html="HTML mal formé!";
var msg_string_located=" Trouvé à l'offset: 0x";
var msg_string_not_located="n'a pas pu être situé à la portée";

// Found Offsets
var msg_found_offsets="<h4><b>Offsets Trouvé: ";
var msg_verified_offsets="<h4><b>Offsets Vérifié: ";

var msg_page_args_not_set="Arguments de page non définis!\n\nCliquez sur le bouton Définir les arguments et réessayez!";
var msg_no_chain_selected="Pas de chaîne ROP Hex sélectionné\n\nUtilisez la liste déroulante pour en sélectionner une";
var msg_media_not_supported="Ce choix de médias n'est pas encore implémenté!";
var msg_cannot_continue="Ne peut pas continuer .... Retour!";

var msg_invalid_title_id="ALERTE!\n\nL'ID de titre entré a une taille non valide!\n\nUtilisation de l'ID par défaut";

// index GUI text
var gui_title="Modèle de tutoriel d'exploitation PS3 ";
var guy_by="par ";
var gui_credits="Many thanks to xerpi for the userland memory leak exploit ps3 port, zecoxao & Joonie for their early & continued support, mysis for documenting vsh exports & plugins, the psdevwiki contributors of course, STLcardsWS for his long standing contribution & all ps3 community hackers/devs past & present, you know who you are. Thanks to littlebalup as well for providing the idea & the related js implementation we used to make the HDD edition of the Dumpers and Flasher. Also thanks to B7U3 C50SS, Endless, and 0x1991337 for tutorial syscall testing and other help! <font color='yellow'>More details & news on <a href='http://www.psx-place.com'>http://www.psx-place.com</a>. Official website at <a href='http://ps3xploit.com'>http://ps3xploit.com</a></font>";

// Checkboxes First Section
var gui_chk_default_settings="Paramètres par défaut:";
var gui_chk_disable_trigger="Désactiver le déclencheur:";
var gui_chk_write_protect="Protéger en écriture:";
var gui_chk_usb_mount="USB:";

// Reboot Mode
var gui_chk_reboot_mode="Mode de Redémarrage:";
var gui_chk_reboot_mode_select="* Sélectionnez le mode *";
var gui_chk_reboot_mode_soft="Redémarrage Soft";
var gui_chk_reboot_mode_hard="Redémarrage Hard";
var gui_chk_reboot_mode_off="Éteindre";

// ROP Chain Text

// Preset Chains
var gui_txt_preset_chains="Chaînes préréglées: ";
var gui_txt_preset_chains_default="Par défaut/Test";
var gui_txt_option_stackframe_test="Test de Stackframe";
var gui_txt_option_beep_test="Test de Beep";
var gui_txt_option_power_test="Power Test";
var gui_txt_option_minver_check="Vérification de version minimale";
var gui_txt_option_sys_game_get_temperature="Afficher les Temps CELL/RSX ";
var gui_txt_option_game_debug_pafjob_test="Test Debug PafJob de Jeu ";
var gui_txt_option_console_write_test="Test d'écriture de la console";
var gui_txt_option_sys_tty_read="Test de lecture TTY";
var gui_txt_option_sys_tty_write="Test d'écriture TTY";

// Dumping
var gui_txt_preset_chains_dumping="Dumping";
var gui_txt_option_webkit_search_area="Dump WebKit Search Area";
var gui_txt_option_system_info_multi_dump="Multi Dump des Informations système";
var gui_txt_option_dump_lv2_syscall_table="Dump du Tableau des LV2 Syscall";
var gui_txt_option_mem_dump_test="dump de mémoire VSH brute";
var gui_txt_option_get_open_psid="Dump PSID";
var gui_txt_option_dump_idps_from_mem="Dump IDPS de VSH";
var gui_txt_option_sys_net_dump="Dump SysNet";
var gui_txt_sys_sm_get_platform_info="Get Platform Info";
var gui_txt_option_dump_idps_from_flash="Dump IDPS de Flash";

// File System
var gui_txt_preset_chains_file_system="Système de fichiers";
var gui_txt_option_create_new_user="Create New User";
var gui_txt_option_mount_usb_as_bdvd="Mount USB000 as BDVD";
var gui_txt_option_mount_usb_as_bdvd_no_disc="Mount USB000 as BDVD No Disc";
var gui_txt_option_mount_other_as_bdvd="Mount Other Device as BDVD";
var gui_txt_option_mount_bdvd_as_ps3_disc="Mount BDVD as PS3 Disc";
var gui_txt_option_db_rebuild="Reconstruire la Base de données";
var gui_txt_option_get_filesize="Get Filesize";
var gui_txt_option_file_read_write_test="Test de lecture/écriture de fichier";
var gui_txt_option_dir_read_write_test="Test lecture/écriture de répertoire";

// Fun
var gui_txt_preset_chains_fun="Amusement";
var gui_txt_option_fun_test="Test Beep";
var gui_txt_option_test_only="Chain Test For Devs";
var gui_txt_option_xmb_plugin_test="XMB Plugin Test";
var gui_txt_option_busy_icon_test="Busy Icon Test";
var gui_txt_option_vsh_printf_test="VSH printf Test";
var vsh_printf_arg1="MESSAGE: ";
var vsh_printf_arg2="HELLO FROM TEAM PS3XPLOIT!";

// Other Syscall Chains

// Memory/System
var gui_txt_syscall_group_mem_sys="Mémoire/Système: ";
var gui_txt_syscall_chains_mem_sys="Mémoire";

// Storage
var gui_txt_syscall_chains_storage="stockage";

// System
var gui_txt_syscall_chains_system="Système";

// Process/Thread

// Process
var gui_txt_syscall_group_proc_thread="Processus/Thread: ";
var gui_txt_syscall_chains_proc_thread="Processus";

// Process ID
var gui_txt_syscall_chains_process="Proc ID";

// Threads
var gui_txt_syscall_chains_threads="Threads";

// Thread ID
var gui_txt_syscall_chains_thread_id="Thread ID";

// Network
var gui_txt_syscall_group_network="Réseau: ";

// Debugging
var gui_txt_syscall_group_debugging="Débogage: ";
var gui_txt_syscall_chains_debug_sc="System Calls";

// LED Control
var gui_txt_syscall_group_led="Contrôle LED:";
var gui_txt_syscall_chains_led="* Sélectionnez la chaîne *";

var gui_txt_syscall_chains_led_color="Changer la couleur";
var gui_txt_option_led_color_green="vert";
var gui_txt_option_led_color_yellow_red="Jaune/Rouge";
var gui_txt_option_led_color_off="Off";

var gui_txt_syscall_chains_led_action="Changer l'action";
var gui_txt_option_led_action_on="On";
var gui_txt_option_led_action_off="Off";
var gui_txt_option_led_action_blink_fast="Clignotement rapide";
var gui_txt_option_led_action_blink_slow="Clignotement lent";

// Beep Parameters
var gui_txt_syscall_group_beep_params="Paramètres de Bip: ";
var gui_txt_syscall_chains_beeps="# de Beeps";
var gui_txt_option_beep_off="Éteindre";
var gui_txt_option_beep_3="3 Bips";
var gui_txt_option_beep_2="2 Bips";
var gui_txt_option_beep_2f="2 Bips Rapide";
var gui_txt_option_beep_1="1 Bip";
var gui_txt_option_beep_1f="1 bip rapide";
var gui_txt_option_beep_flatline="En continue";

// Memory Dump
var gui_txt_syscall_group_memdump="Dump Mémoire:";
var gui_txt_memdump_addresses="Address MemDump";
var gui_txt_memdump_size="Taille MemDump";
var gui_txt_memdump_range_presets="préréglage:";
var gui_txt_option_memdump_presets_default="* Aucun préréglage sélectionné *";

var gui_txt_memdump_address_start="Début:";
var gui_txt_memdump_address_end="Fin:";
var gui_txt_btn_memdump_set_values="Définir les nouvelles valeurs";

var gui_txt_mounting_setup="Mounting: ";
var gui_txt_option_mount_device="Device Name";
var gui_txt_option_mount_fs="File System";
var gui_txt_option_mount_path="Mount Path";

var gui_txt_group_user_id="Identifiant d'utilisateur:";
var gui_txt_option_user_id_default="* Défaut *";
var gui_txt_user_id_new="ID utilisateur défini : ";
var gui_txt_home_path_new="\n\nNouveau chemin d'accès home: \n\n";

var gui_txt_group_permissions="Autorisations:";

var gui_txt_group_filesize="Taille du fichier:";
var gui_txt_group_titleid="ID de Titre:";

var gui_txt_btn_set_filesize="Définir";
var gui_txt_btn_set_titleid="Définir";

var gui_txt_group_path_source="Source:";
var gui_txt_group_path_destination="Destination: ";

// XMB Transfer
var gui_txt_syscall_group_xmb_transfer="Option de transfert XMB ";
var gui_txt_option_xmb_photo="Photo";
var gui_txt_option_xmb_music="Musique";
var gui_txt_option_xmb_video="Video";
var gui_txt_option_xmb_jpg_btn="appuyez &#x25B3 pour JPG";
var gui_txt_option_xmb_mp3_btn="appuyez &#x25B3 For MP3";
var gui_txt_option_xmb_mp4_btn="appuyez &#x25B3 For MP4";
var gui_txt_option_xmb_save_msg="&#x2192 Fichier &#x2192 Enregistrer la cible &#x2192 stockage du Système";

var gui_txt_group_payload_type="Type de Payload";
var gui_txt_group_payload_type_help="Remplacer les payloads par défaut avec vos propres fichiers, en utilisant les mêmes noms, et placer les dans TEMPLATE/payloads/ sous les sources HTML";

// String Search
var gui_txt_group_string_search="Cherche:";
var gui_txt_option_search_size="Taille";
var gui_txt_option_search_base="Base";
var gui_txt_option_search_stack="Stack";
var gui_txt_option_search_range="portée";
var gui_txt_option_search_loops="Loops";

var gui_chk_search_verify_jumps="Vérifier les Jumps:";
var gui_chk_search_verify_stackframe="Stackframe:";
var gui_chk_search_debug_output="Debug:";

// Buttons
var gui_txt_option_init_rop_btn="Initialiser la chaîne ROP";
var gui_txt_option_exec_rop_btn="Executer la chaîne";
var gui_txt_option_reload_page_btn="Rafraîchir la page";
var gui_txt_option_reset_btn="Réinitialiser les options";
var gui_txt_option_load_settings_btn="Charger les paramètres";
var gui_txt_option_save_settings_btn="Enregistrer les paramètres";
var gui_txt_option_debug_show_var_btn="Afficher toutes les variables";
