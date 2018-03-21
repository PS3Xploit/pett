// PS3Xploit Index GUI Messages [Spanish (Latin American)]
// PS3Xploit Team 2018 / ps3xploit.com

// Translation Credits: @Ripp3RkoS


// After complete translate the language file update it to latest revision (same as en-US)
var current_minimum_lang_revision="0013";
var gui_incomplete_lang="Traduccion Actual Incompleta, considera Actualizarla o solo ignorale";

var msg_select_vsh_type="Consola CEX?\n\nal Seleccionar NO se tomaran los offsets para DEX";

var msg_detected_fw_1="FW Detectado: ";
var msg_detected_fw_2=" ";
//var msg_detected_fw_3=" / MinVer: ";
var msg_detected_fw_4=" | Soporta Todos los Modelos con Firmware 4.xx";

var compat_msg_wrong_fw1="Tu PS3 no es Compatible! Tu version de FW Actual es:";
var compat_msg_wrong_fw2=", el cual no es compatible con PS3Xploit. Todas las Funciones deshabilitadas";
var compat_msg_success1="Felicidades! Detectamos que tu PlayStation 3 Tiene FW ";
var compat_msg_success2=", el cual es Compatible con PS3Xploit! Disfruta!";

var msg_option_not_available="Esta Opcion Aun no esta Disponible!";

// Settings
var msg_settings_load="Esto es experimental y carga opciones desde una cookie!";
var msg_settings_save="Esto es experimental y guarda opciones a una cookie!";

// MinVer/CFW Compatibility
var msg_minver_loaded_into_mem="MinVer Devuelve el valor cargado en memoria!\n\nPresiona nuevamente el Boton Ejecutar para Mostrar el Valor!";
var msg_filesize_loaded_into_mem="Peso Archivo Devuelve el valor cargado en memoria!\n\nPresiona nuevamente el Boton Ejecutar para Mostrar el Valor!";
var msg_minver_start="Tu Version Minima para Downgrade es  ";
var msg_minver_mid="y este, a la Fecha ";
var msg_minver_end=" es compatible con CFW!";
var msg_minver_compat_not="NO";
var msg_filesize="Peso de Archivo es: 0x";

// CELL/RSX Temperatures
var msg_temps_loaded_into_mem="CELL/RSX Temp Devuelve el valor cargado en memoria!\n\nPresiona nuevamente el Boton Ejecutar para Mostrar el Valor!";
var msg_temps_cell="Temperatura Procesador (CELL):";
var msg_temps_rsx="\n\nTemperatura GPU (RSX):  ";
var msg_temps_celcius=" Celcius";

// MemDump
var msg_memdump_warning="Advertencia!\n\nEsta Prueba se colgara si toca un area de memoria sin asignar durante el proceso Dump!\n\nAun asi obtendras un dump valido hasta el cuelgue!";
var msg_memdump_idps_vsh="Solo FW 4.66/4.81/4.82 esta soportado para el Dump  IDPS Directo de Memoria VSH!\n\nLas Cadenas Basadas en la extraccion Flash IDPS es Diferente.\n\nTodas las Demas Versiones de FW probalemente solo den 0.";
var msg_memdump_size="Valores Raw del MemDump VSH\n\nPeso: 0x";
var msg_memdump_start_addr="\nDireccion Inicio: 0x";
var msg_memdump_end_addr="\nDireccion Fin: 0x";

// Warnings
var msg_fd_close_warning=" Los Descriptores de Archivos No se cierran Automaticamente!";
var msg_remove_dir_warning="ADVERTENCIA!\n\nSe cuidadoso con esta syscall.\n\nPodrias eliminar un Directorio Importante y deberas Reinstalar Firmware !";
var msg_warning_write_protection="Proteccion contra Escritura Deshabilitada!\n\nProcede con Cuidado!!!";

var msg_cobra_only="ALERTA!\n\nEsto solo Funciona con COBRA ACTIVADO EN CFW!";

var msg_mount_test="** En Fase de Prueba **";
var msg_mount_no_disc="This Will Unmount dev_usb000 as dev_bdvd\n\nThere should be NO DISC in the drive!";
var msg_mount_yes_disc="This Will Unmount dev_bdvd and dev_usb000, then mount dev_usb000 as dev_bdvd\n\nThere should be A DISC present in the drive!";
var msg_mount_ps3_disc="This Will Mount dev_bdvd as a PS3 Disc\n\nThere should be a DISC present in the drive!";
var msg_mount_usb_enable="R9 Pointer Enabled!\n\nValue Is Set To Temp Address";
var msg_mount_usb_disable="R9 Pointer Disabled!\n\nValue Is Set To 0";

// File Operations
var msg_default_size="Usando Peso Predet. 0x140";
var msg_new_size="Nuevo Peso: ";
var msg_destination_path_set_new="Nuevo Directorio Fijado a:\n\n";
var msg_destination_path_incorrect="Directorio Destino Incorrecto!\n\nDebes Fijarlo antes de cambiar la ID del Juego.";

// Trigger Messages
var trigger_msg="Activando Exploit...";
var trigger_msg2="Activado: 0x";

// Ready To Search
var msg_search_ready="<h3><b>Listo para empezar! <br>Selecciona Cadenas y Opciones desde Arriba , Luego Presiona el Boton Iniciar Cadena Rop!</b></h3>";

// Shows After Initial Exec Button Click
var msg_exec_init="<h3><b>Ejecutando Cadena! <br>Por Favor Espera hasta que termine....</b></h3>";

// Search Strings
var msg_search_offsets="<h3><b>Buscando Offsets En Memoria! Espera.... <br>Si te Impacientas, Cierra el Navegador y reintenta en 60-90 Segundos si no los halla!</b></h3>";
var msg_verify_offsets="<h3><b>Verificando Offsets En Memoria! Espera.... <br>Aun NO CIERRES el navegador!</b></h3>";

// Fail Search Messages
var msg_string_search_fail="<h3><b><font color='#7700DA'>Imposible Hallar todos los Offsets!</font><font color='#7700DA'> Si la busqueda falla nuevamente, Ajusta opciones de busqueda o Reinicia el Navegador!</font></b></h3>";
var msg_string_search_fail_max="<h3><b><font color='#7700DA'>Imposible Hallar todos los Offsets!</font><font color='#7700DA'> Reintentos maximos! Reinicia el Navegador</font></b></h3>";

// Verify Strings Fail
var msg_string_verify_fail="<h3><b><font color='#7700DA'>Imposible Verificar todos los Offsets!</font><font color='#7700DA'> si la verificacion falla nuevamente, Reinicia el Navegador!</font></b></h3>";
var msg_string_verify_fail_max="<h3><b><font color='#7700DA'>Imposible Verificar todos los Offsets!</font><font color='#7700DA'> Reintentos maximos! Reinicia el Navegador!</font></b></h3>";

// Init Success
var msg_success_init="<h3><b><font color='#386E38'>EXITO!</font><br><font color='#7700DA'>Ahora Puedes ejecutar tu Cadena ROP!</font></b></h3>";

// Exec Success
var success_chain_exec="<h3><b><font color='#386E38'>Cadena Ejecutada Exitosamente!</font></b><br> &nbsp;</h3>";
var success_chain_exec_press_again="<h3><b><font color='#386E38'>Presione el Boton Ejecutar una vez mas!</font></b></h3>";
var success_chain_exec_psid="<h3><b><font color='#386E38'>PSID Dump Exitoso!</font></b></h3>";
var success_chain_exec_idps="<h3><b><font color='#386E38'>IDPS Dump Exitoso!</font></b></h3>";
var success_chain_exec_syscall_dump="<h3><b><font color='#386E38'>Dump Exitoso del Valor de retorno de la Syscall!</font></b></h3>";
var success_chain_exec_memdump="<h3><b><font color='#386E38'>DUMP de Memoria Exitoso!</font></b></h3>";
var success_chain_exec_read_write_file="<h3><b><font color='#386E38'>Transferencia de Archivos Exitosa !</font></b></h3>";
var success_mount_device="<h3><b><font color='#386E38'>Dispositivo/Medio Montado Exitosamente!</font></b></h3>";

// Compatibility/Offset Messages
var ua_msg="<hr><h3>Info Navegador PS3: "+navigator.userAgent+ "</h3>";
var compat_msg_nops3="No estas en un sistema PS3! Todas las Funciones Deshabilitadas";
var compat_msg_devs="Esto es solo para desarrolladores!\n\nlos offsets CEX deben agregarse manualmente al archivo /js/chains/offsets.js, basados en tu offsets DEX en uso por cada cadena.";
var experimental="Convierte esta pagina en tu principal!\n\nUsa bajo tu responsabilidad!\nPuede tener Bugs y cosas que no funcionen aun!\n\nSoportados Todos los Modelos con FW  4.xx CEX y 4.81 DEX";

// Other Messages
var msg_prerelease="ESTO ES UNA VERSION ALFA!\n\nSOPORTE PARA FIRMWARES ANTIGUOS ESTA PARCIALMENTE IMPLEMENTADO!\n\n4.81/4.82 SOLO HASTA EL PROXIMO RELEASE!";
var msg_anti_piracy="Descargo de Responsabilidad\n\nNo Aprobamos Ni Apoyamos la pirateria de ningun tipo!\n\nal Usar este Tutorial, y aceptar, Acuerdas usarlo con fines didacticos!";
var msg_anti_piracy_edat="Descargo de Responsabilidad ANTIPIRATERIA!\n\nEsta Opcion esta pensada solo para pruebas y desarrollo, Y no debe abusar de ella!\n\nAl clicar en SI Aceptas Usarlo solo en Titulos que ya compraste!";

// Devices
var msg_device_loaded_into_mem="Valor de Retorno de dispositivo Cargado en memoria!\n\nPresiona nuevamente el boton ejecutar para leer y mostrar en pantalla!";
var msg_get_device_info1="Retorno de Dispositivo: ";
var msg_get_device_info2="\n\nUsa para cadena sys_storage_report_devices";

// Debugging

var msg_stackframe_check="Esto Verificara los Marcos de pila por Errores.\n\nSi se cuelga o no muestra el Mensaje Exito, Entonces hay Problemas!";

// String Matching
var verify_fail="<font color='#7700DA'>FALLO: Cadenas No coinciden en memoria!</font>";
var verify_success="<font color='#2a1003'>EXITO: Cadenas Halladas en Memoria!</font>";
var verify_skip="<font color='#2a1003'>EXITO: Cadenas sin verificar en Memoria!</font>";

var msg_search_flash_type_start="Parametros de Busqueda para";
var msg_search_flash_type_end=" tipo de Flash!";

var msg_chk_mem_arg_error="Error de Argumentos para Chequeo de Memoria! peso=0x";
var msg_malformed_html="HTML Malformado!";
var msg_string_located=" Hallado en offset: 0x";
var msg_string_not_located="no es posible encontrar en Rango";

// Found Offsets
var msg_found_offsets="<h4><b>Offsets Hallados: ";
var msg_verified_offsets="<h4><b>Offsets Verificados: ";

var msg_page_args_not_set="Argumentos de Pagina no establecidos!\n\nClic en Establecer argumentos y reintenta!";
var msg_no_chain_selected="sin Cadena ROP Seleccionada\n\nUsa la ventana desplegable para seleccionar una";
var msg_media_not_supported="Este medio de almacenamiento aun no esta implementado!";
var msg_cannot_continue="No se puede Continuar....Regresando!";

var msg_invalid_title_id="ALERTA!\n\nLa ID del Juego Introducido es Incorrecto!\n\nUsando ID Predeterminada.";

// index GUI text
var gui_title="Plantilla para Tutorial PS3Xploit ";
var guy_by="por ";
var gui_credits="Agradecimientos a xerpi por el port del exploit de memoria de usuario del PS3, a zecoxao y Joonie por su soporte temprano y continuo, mysis por documentar vsh exports y plugins, desde luego a los contribuidores del psdevwiki, a STLcardsWS por su prologada y efectiva contribucion y a toda la Comunidad PS3 de Hackers/Desarrolladores pasados y presentes, Tu sabes quien eres. Gracias tambien a littlebalup por dar la idea y la implementacion js que usamos para elaborar la edicion HDD de Dumpers y Flasher. gracias ademas a B7U3 C50SS, Endless, y 0x1991337 por testear los syscall del tutorial  y otra ayuda! <font color='yellow'>Mas Detalles y Noticias en <a href='http://www.psx-place.com'>http://www.psx-place.com</a>. Sitio Oficial <a href='http://ps3xploit.com'>http://ps3xploit.com</a></font>";

// Checkboxes First Section
var gui_chk_default_settings="Configuracion Predet.:";
var gui_chk_disable_trigger="Deshabilitar Lanzador:";
var gui_chk_write_protect="Protec. Escritura";
var gui_chk_usb_mount="USB:";

// Reboot Mode
var gui_chk_reboot_mode="Modo de Reinicio:";
var gui_chk_reboot_mode_select="* Seleccione Modo *";
var gui_chk_reboot_mode_soft="Reinicio Suave (XMB)";
var gui_chk_reboot_mode_hard="Reinicio Completo";
var gui_chk_reboot_mode_off="Apagar";

// ROP Chain Text

// Preset Chains
var gui_txt_preset_chains="Cadenas Predet.: ";
var gui_txt_preset_chains_default="Prueba/Predet";
var gui_txt_option_stackframe_test="Prueba de Marco de Pila";
var gui_txt_option_beep_test="Prueba Bips";
var gui_txt_option_power_test="Prueba de Energia";
var gui_txt_option_minver_check="Version Minima de Fabrica";
var gui_txt_option_sys_game_get_temperature="Mostrar Temperatura";
var gui_txt_option_game_debug_pafjob_test="Prueba de Depuracion PafJob";
var gui_txt_option_console_write_test="Prueba de Escritura en Consola";
var gui_txt_option_sys_tty_read="Prueba de Lectura TTY";
var gui_txt_option_sys_tty_write="Prueba de Escritura TTY";

// Dumping
var gui_txt_preset_chains_dumping="Dumping";
var gui_txt_option_webkit_search_area="Area de Busqueda del WebKit Dump";
var gui_txt_option_system_info_multi_dump="Informacion de Multi Dump";
var gui_txt_option_dump_lv2_syscall_table="Dump Tabla Syscall LV2";
var gui_txt_option_mem_dump_test="Dump (Raw) de memoria VSH";
var gui_txt_option_get_open_psid="Dump PSID";
var gui_txt_option_dump_idps_from_mem="Dump IDPS de VSH";
var gui_txt_option_sys_net_dump="SysNet Dump";
var gui_txt_sys_sm_get_platform_info="Capturar Info de Plataforma";
var gui_txt_option_dump_idps_from_flash="Dump IDPS de Flash";

// File System
var gui_txt_preset_chains_file_system="Sistema de Archivos";
var gui_txt_option_create_new_user="Crear Nuevo Usuario ";
var gui_txt_option_mount_usb_as_bdvd="Mount USB000 as BDVD";
var gui_txt_option_mount_usb_as_bdvd_no_disc="Mount USB000 as BDVD No Disc";
var gui_txt_option_mount_other_as_bdvd="Mount Other Device as BDVD";
var gui_txt_option_mount_bdvd_as_ps3_disc="Mount BDVD as PS3 Disc";
var gui_txt_option_db_rebuild="Reconstruir BD";
var gui_txt_option_get_filesize="Capturar Peso Archivo";
var gui_txt_option_file_read_write_test="Prueba de Lectura/Escritura (Archivos)";
var gui_txt_option_dir_read_write_test="Prueba de Lectura/Escritura (Directorios)";

// Fun
var gui_txt_preset_chains_fun="Entretenimiento";
var gui_txt_option_fun_test="Prueba Bips";
var gui_txt_option_test_only="Cadena de Pruebas para Desarrolladores";
var gui_txt_option_xmb_plugin_test="Prueba Plugin XMB";
var gui_txt_option_busy_icon_test="Prueba Icono Ocupado";
var gui_txt_option_vsh_printf_test="Prueba printf VSH";
var vsh_printf_arg1="MENSAJE: ";
var vsh_printf_arg2="HOLA DE PARTE DEL TEAM PS3XPLOIT!";

// Other Syscall Chains

// Memory/System
var gui_txt_syscall_group_mem_sys="Memoria/Sistema: ";
var gui_txt_syscall_chains_mem_sys="Memoria";

// Storage
var gui_txt_syscall_chains_storage="Almacenamiento";

// System
var gui_txt_syscall_chains_system="Sistema";

// Process/Thread

// Process
var gui_txt_syscall_group_proc_thread="Procesos/Hilos: ";
var gui_txt_syscall_chains_proc_thread="Procesos";

// Process ID
var gui_txt_syscall_chains_process="ID de Proc.";

// Threads
var gui_txt_syscall_chains_threads="Hilos";

// Thread ID
var gui_txt_syscall_chains_thread_id="ID Hilos";

// Network
var gui_txt_syscall_group_network="RED: ";

// Debugging
var gui_txt_syscall_group_debugging="Depuracion: ";
var gui_txt_syscall_chains_debug_sc="System Calls";

// LED Control
var gui_txt_syscall_group_led="Control de LEDS:";
var gui_txt_syscall_chains_led="* Selecciona Cadena *";

var gui_txt_syscall_chains_led_color="Cambiar Color";
var gui_txt_option_led_color_green="Verde";
var gui_txt_option_led_color_yellow_red="Amarillo/Rojo";
var gui_txt_option_led_color_off="Apagado";

var gui_txt_syscall_chains_led_action="Cambiar Accion";
var gui_txt_option_led_action_on="Encendido";
var gui_txt_option_led_action_off="Apagado";
var gui_txt_option_led_action_blink_fast="Parpadeo Rapido";
var gui_txt_option_led_action_blink_slow="Parpadeo Lento";

// Beep Parameters
var gui_txt_syscall_group_beep_params="Parametros de Bips: ";
var gui_txt_syscall_chains_beeps="# de Bips";
var gui_txt_option_beep_off="Apagar";
var gui_txt_option_beep_3="3 Bips";
var gui_txt_option_beep_2="2 Bips";
var gui_txt_option_beep_2f="2 Bips Rapidos";
var gui_txt_option_beep_1="1 Bip";
var gui_txt_option_beep_1f="1 Bip Rapido";
var gui_txt_option_beep_flatline="Continuos";

// Memory Dump
var gui_txt_syscall_group_memdump="Dump de Memoria:";
var gui_txt_memdump_addresses="Direccion MemDump";
var gui_txt_memdump_size="Peso MemDump";
var gui_txt_memdump_range_presets="Presets:";
var gui_txt_option_memdump_presets_default="* Sin Preset Seleccionados *";

var gui_txt_memdump_address_start="Inicio:";
var gui_txt_memdump_address_end="Fin:";
var gui_txt_btn_memdump_set_values="Fijar Nuevos Valores";

var gui_txt_mounting_setup="Montaje: ";
var gui_txt_option_mount_device="Nombre Dispositivo/Medio";
var gui_txt_option_mount_fs="Sistema de Archivos";
var gui_txt_option_mount_path="Ruta Montaje";

var gui_txt_group_user_id="ID Usuario:";
var gui_txt_option_user_id_default="* Predeterminado *";
var gui_txt_user_id_new="ID de Usuario Fijado a: ";
var gui_txt_home_path_new="\n\nLa nueva Ruta Home es: \n\n";

var gui_txt_group_permissions="Permisos:";

var gui_txt_group_filesize="Peso Archivo:";
var gui_txt_group_titleid="ID del Juego:";

var gui_txt_btn_set_filesize="Establecer";
var gui_txt_btn_set_titleid="Establecer";

var gui_txt_group_path_source="Origen:";
var gui_txt_group_path_destination="Destino: ";

// XMB Transfer
var gui_txt_syscall_group_xmb_transfer="Opciones Transferencia XMB ";
var gui_txt_option_xmb_photo="Foto";
var gui_txt_option_xmb_music="Musica";
var gui_txt_option_xmb_video="Video";
var gui_txt_option_xmb_jpg_btn="Presiona &#x25B3 Para JPG";
var gui_txt_option_xmb_mp3_btn="Presiona &#x25B3 Para MP3";
var gui_txt_option_xmb_mp4_btn="Presiona &#x25B3 Para MP4";
var gui_txt_option_xmb_save_msg="&#x2192 Archivo &#x2192 Destino Guardado &#x2192 Almacenamiento de Sistema";

var gui_txt_group_payload_type="Tipo Payload ";
var gui_txt_group_payload_type_help="reemplaza los payloads predeterminados con los tuyos, usando los mismos nombres, y ubicandolos en la carpeta TEMPLATE/payloads/ de tu HTML";

// String Search
var gui_txt_group_string_search="Busqueda:";
var gui_txt_option_search_size="Peso";
var gui_txt_option_search_base="Base";
var gui_txt_option_search_stack="Pila (Stack)";
var gui_txt_option_search_range="Rango";
var gui_txt_option_search_loops="Iteraciones";

var gui_chk_search_verify_jumps="Verificar Jumps:";
var gui_chk_search_verify_stackframe="Marco de Pila:";
var gui_chk_search_debug_output="Depurar:";

// Buttons
var gui_txt_option_init_rop_btn="Iniciar Cadena ROP";
var gui_txt_option_exec_rop_btn="Ejecutar Cadena ROP";
var gui_txt_option_reload_page_btn="Recargar Pagina";
var gui_txt_option_reset_btn="Reiniciar Opciones";
var gui_txt_option_load_settings_btn="Cargar Configuracion";
var gui_txt_option_save_settings_btn="Guardar Configuracion";
var gui_txt_option_debug_show_var_btn="Mostrar Todas las Variables";
