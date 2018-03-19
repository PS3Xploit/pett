// PS3Xploit Index GUI Messages [Spanish]
// PS3Xploit Team 2018 / ps3xploit.com

// Translation Credits: @Ivoyko


// After complete translate the language file update it to latest revision (same as en-US)
var current_minimum_lang_revision="0000";
var gui_incomplete_lang="Current translation is incomplete, consider updating or just skip it";

var msg_select_vsh_type="¿Usas CEX?\n\nSeleccionar NO acivará el uso de offsets DEX";

var msg_detected_fw_1="Detectado FW: ";
var msg_detected_fw_2=" ";
//var msg_detected_fw_3=" / MinVer: ";
var msg_detected_fw_4=" | Compatible con TODOS los modelos y los firmware 4.xx";

var compat_msg_wrong_fw1="¡Tu PS3 no está en una versión compatible! Tu versión actual es ";
var compat_msg_wrong_fw2=", la cual no es compatible con PS3Xploit. Todas las funciones se desactivarán.";
var compat_msg_success1="¡Enhorabuena! ¡Hemos detectado que tu PlayStation esta en el FW ";
var compat_msg_success2=", el cual es compatible con PS3Xploit! ¡Disfrutalo!";

var msg_option_not_available="¡Esta opción aún no esta disponible!";

// Settings
var msg_settings_load="¡Esto está en prueba y carga la configuracion desde una cookie!";
var msg_settings_save="¡Esto está en prueba y guarda la configuracion a una cookie!";

// MinVer/CFW Compatibility
var msg_minver_loaded_into_mem="¡El valor de MinVer ha sido cargado en la memoria!\n\n¡Pulsa el botón Ejecutar de nuevo para mostrarlo!";
var msg_filesize_loaded_into_mem="File Size Return Value Loaded Into Memory!\n\nPress Execute Button Again To Read and Display!";
var msg_minver_start="¡Tu versión minima para Downgrade es ";
var msg_minver_mid=" y es ";
var msg_minver_end=" compatible con CFW ahora!";
var msg_minver_compat_not="NOT";
var msg_filesize="File Size is: 0x";

// CELL/RSX Temperatures
var msg_temps_loaded_into_mem="¡El valor de temperatura CELL/RSX ha sido cargado en la memoria!\n\n¡Pulsa el botón Ejecutar de nuevo para mostrarla!";
var msg_temps_cell="Temperatura de CELL: ";
var msg_temps_rsx="\n\nTemperatura de RSX: ";
var msg_temps_celcius=" Celcius";

// MemDump
var msg_memdump_warning="¡Precaución!\n\n¡Esta prueba se congelará si se golpea un área de memoria no asignada durante el proceso de volcado! \n\n¡Aún obtendrás un volcado válido, hasta el fallo!";
var msg_memdump_idps_vsh="Solo son actualmente compatibles 4.66/4.81/4.82 para el volcado directo de IDPS desde la memoria VSH!\n\nLa cadena basada en extraer la IDPS desde la Flash es diferente.\n\nCualquier otra versión de FW solo volcará todo en 0s.";
var msg_memdump_size="Raw VSH MemDump Values\n\nSize: 0x";
var msg_memdump_start_addr="\nStart Address: 0x";
var msg_memdump_end_addr="\nEnd Address: 0x";

// Warnings
var msg_fd_close_warning="Los descriptores de archivo no se cierran de forma automática.";
var msg_remove_dir_warning="¡PRECAUCIÓN!\n\nTen cuidado mientras usas las llamadas al sistema.\n\n¡Puedes borrar un directorio necesario y tener que reinstalar el firmware!";
var msg_warning_write_protection="Protección de escritura desactivada!\n\n¡¡¡Proceder con CUIDADO!!!";

var msg_cobra_only="¡ALERTA!\n\n¡Esto SOLO funciona en CFW con COBRA activado!";

var msg_mount_test="¡** EN FASE DE PRUEBA **";
var msg_mount_no_disc="This Will Unmount dev_usb000 as dev_bdvd\n\nThere should be NO DISC in the drive!";
var msg_mount_yes_disc="This Will Unmount dev_bdvd and dev_usb000, then mount dev_usb000 as dev_bdvd\n\nThere should be A DISC present in the drive!";
var msg_mount_ps3_disc="This Will Mount dev_bdvd as a PS3 Disc\n\nThere should be a DISC present in the drive!";
var msg_mount_usb_enable="R9 Pointer Enabled!\n\nValue Is Set To Temp Address";
var msg_mount_usb_disable="R9 Pointer Disabled!\n\nValue Is Set To 0";

// File Operations
var msg_default_size="Usando tamaño por defecto 0x140";
var msg_new_size="Nuevo tamaño de archivo: ";
var msg_destination_path_set_new="New Path Set To:\n\n";
var msg_destination_path_incorrect="¡La ruta de destino es incorrecta!\n\n¡Debes colocarla antes de cambiar el Titulo ID!";

// Trigger Messages
var trigger_msg="Desencadenando exploit...";
var trigger_msg2="Desencadenado: 0x";

// Ready To Search
var msg_search_ready="<h3><b>Ready To Begin! <br>Select Chain and Options From Above, Then Press Initialize ROP Chain button!</b></h3>";

// Shows After Initial Exec Button Click
var msg_exec_init="<h3><b>Executing Chain! <br>Please Wait Until The Execution Has Finished....</b></h3>";

// Search Strings
var msg_search_offsets="<h3><b>¡Buscando Offsets en la memoria! Por favor espera.... <br>¡Si eres impaciente, cierra el navegador e intentalo de nuevo tras 60-90 segundos!</b></h3>";
var msg_verify_offsets="<h3><b>¡Verificando Offsets en la memoria! Por favor espera.... <br>¡NO cierres el navegador aún!</b></h3>";

// Fail Search Messages
var msg_string_search_fail="<h3><b><font color='#7700DA'>¡No se han encontrado TODOS los Offsets!</font><font color='#7700DA'> ¡Si la busqueda falla de nuevo, ajusta la configuración o REINICIA el navegador!</font></b></h3>";
var msg_string_search_fail_max="<h3><b><font color='#7700DA'>¡No se han encontrado TODOS los Offsets!</font><font color='#7700DA'> ¡Numero de intentos superado! ¡Por favor REINICIA el navegador!</font></b></h3>";

// Verify Strings Fail
var msg_string_verify_fail="<h3><b><font color='#7700DA'>¡No se han verificado TODOS los Offsets!</font><font color='#7700DA'> ¡Si la verificación falla de nuevo, REINICIA el navegador!</font></b></h3>";
var msg_string_verify_fail_max="<h3><b><font color='#7700DA'>¡No se han verificado TODOS los Offsets!!</font><font color='#7700DA'> ¡Numero de intentos superados! ¡Por favor REINICIA el navegador!</font></b></h3>";

// Init Success
var msg_success_init="<h3><b><font color='#386E38'>¡CONSEGUIDO!</font><br><font color='#7700DA'>¡Ahora puedes ejecutar tu cadena!</font></b></h3>";

// Exec Success
var success_chain_exec="<h3><b><font color='#386E38'>¡Cadena ejecutada con éxito!</font></b><br> &nbsp;</h3>";
var success_chain_exec_press_again="<h3><b><font color='#386E38'>¡Pulsa el boton Ejecutar de nuevo!</font></b></h3>";
var success_chain_exec_psid="<h3><b><font color='#386E38'>¡PSID volcado con éxito!</font></b></h3>";
var success_chain_exec_idps="<h3><b><font color='#386E38'>¡IDPS volcado con éxito!</font></b></h3>";
var success_chain_exec_syscall_dump="<h3><b><font color='#386E38'>Syscall Return Value Dumped Successfully!</font></b></h3>";
var success_chain_exec_memdump="<h3><b><font color='#386E38'>¡Memoria volcada con éxito!</font></b></h3>";
var success_chain_exec_read_write_file="<h3><b><font color='#386E38'>¡Tranferido origen a destino con éxito!</font></b></h3>";
var success_mount_device="<h3><b><font color='#386E38'>Successfully Mounted Device!</font></b></h3>";

// Compatibility/Offset Messages
var ua_msg="<hr><h3>Info de navegador de el sistema PS3: "+navigator.userAgent+ "</h3>";
var compat_msg_nops3="¡No estás en un sistema PlayStation! Todas las funciones se desactivarán.";
var compat_msg_devs="¡Esto es SOLO para desarolladores!\n\nLos offsets CEX necesitarán ser añadidos manualmente al archivo /js/chains/offsets.js, basado en tus offsets DEX en uso para cada cadena.";
var experimental="¡Coloca esta página como página de inicio´!\n\n¡USALO BAJO TU PROPIO RIESGO!\n¡Podría tener fallos y algunas cosas no funcionar!\n\n¡TODOS los modelos 4.xx CEX y 4.81 DEX son compatibles";

// Other Messages
var msg_prerelease="¡ESTO ES UN PRE LANZAMIENTO!!\n\n¡EL SOPORTE CON LOS FIRMWARE ANTERIORES SOLO HA SIDO PARCIALMENTE IMPLEMENTADO!!\n\nSOLO 4.81/4.82 HASTA EL PRÓXIMO LANZAMIENTO!";
var msg_anti_piracy="¡ADVERTENCÍA!\n\n¡NO aprobamos ni apoyamos la PIRATERÍA de ningún tipo!\n\nAl usar este tutorial, y al hacer clic en SÍ, ¡aceptas usarlo ÚNICAMENTE con fines educativos!";
var msg_anti_piracy_edat="¡ADVERTENCÍA ANTI-PIRATERIA!\n\n¡Esta opción está diseñada solo para fines de prueba y desarrollo, y no se debe abusar!\n\nAl hacer clic en SÍ, ¡aceptas usarlo ÚNICAMENTE con titulos COMPRADOS!";

// Devices
var msg_device_loaded_into_mem="¡El valor de dispositivo ha sido cargado en la memoria!\n\n¡Pulsa el botón Ejecutar de nuevo para mostrarlo!";
var msg_get_device_info1="Dispositivo devuelto: ";
var msg_get_device_info2="\n\nUsa esto para la cadena sys_storage_report_devices";

// Debugging

var msg_stackframe_check="Esto buscará problemas en el armazón por defecto.\n\n¡Si falla o no aparece un mensaje de éxito, entonces hay un problema!";

// String Matching
var verify_fail="<font color='#7700DA'>FALLO: ¡Las cadenas no coinciden en la memoria!</font>";
var verify_success="<font color='#2a1003'>CONSEGUIDO: ¡Las cadenas coinciden en la memoria!</font>";
var verify_skip="<font color='#2a1003'>CONSEGUIDO: ¡Las cadenas no han sido verificadas en la memoria!</font>";

var msg_search_flash_type_start="Buscar parametros colocados para ";
var msg_search_flash_type_end=" ¡Tipo de Flash!";

var msg_chk_mem_arg_error="¡Error de función de argumentos al comprobar memoria! tamaño=0x";
var msg_malformed_html="¡HTML malformado!";
var msg_string_located=" Encontrado en el offset: 0x";
var msg_string_not_located="no puede ser localizado en el rango";

// Found Offsets
var msg_found_offsets="<h4><b>Offsets encontrados: ";
var msg_verified_offsets="<h4><b>Offsets verificados: ";

var msg_page_args_not_set="¡No se han colocado argumentos en la página!\n\nHaga clic en el botón Establecer argumentos y vuelva a intentarlo.";
var msg_no_chain_selected="¡No se ha seleccionado Hex de cadena ROP!\n\nUsa el cuadro desplegable para seleccionar uno.";
var msg_media_not_supported="¡Esta opción aún no ha sido implementada!";
var msg_cannot_continue="No se puede continuar....¡Regresando!";

var msg_invalid_title_id="¡ALERTA!\n\n¡El ID de título introducido tiene un tamaño invalido!\n\nUsando ID por defecto.";

// index GUI text
var gui_title="Plantilla del tutorial para el Exploit de PS3 ";
var guy_by="por ";
var gui_credits="Muchas gracias a xerpi por portar a PS3 el exploit de pérdida de memoria en modo usuario, zecoxao & Joonie por su soporte rápido y continuo, mysis por documentar la exportación vsh y complementos, por supuesto a los contribuidores de psdevwiki, STLcardsWS por su contribución de larga duración y a toda la comunidad de hackers y desarrolladores de PS3 pasados y actuales, vosotros sabeis quienes sois. Gracias a littlebalup también por darme la idea e implementar el js relacionado que usamos para hacer la edición HDD de las herramientas de volcado y flasheo... ¡Gracias a B7U3 C50SS, Endless, y 0x1991337 por probar las llamadas al sistema de este tutorial! <font color='yellow'>Mas detalles y noticias en <a href='http://www.psx-place.com'>http://www.psx-place.com</a>. Pagina oficial: <a href='http://ps3xploit.com'>http://ps3xploit.com</a></font>";

// Checkboxes First Section
var gui_chk_default_settings="Opciones por defecto:";
var gui_chk_disable_trigger="Desactivar desencadenante:";
var gui_chk_write_protect="Protección de escritura:";
var gui_chk_usb_mount="USB:";

// Reboot Mode
var gui_chk_reboot_mode="Modo de reinicio:";
var gui_chk_reboot_mode_select="* Selecciona modo *";
var gui_chk_reboot_mode_soft="Reinicio Soft";
var gui_chk_reboot_mode_hard="Reinicio Hard";
var gui_chk_reboot_mode_off="Apagar";

// ROP Chain Text

// Preset Chains
var gui_txt_preset_chains="Cadena predefinida: ";
var gui_txt_preset_chains_default="Defecto/Probando";
var gui_txt_option_stackframe_test="Prueba de armazón";
var gui_txt_option_beep_test="Prueba de pitido";
var gui_txt_option_power_test="Prueba de energía";
var gui_txt_option_minver_check="Mirar versión minima";
var gui_txt_option_sys_game_get_temperature="Enseñar temp. de CELL/RSX";
var gui_txt_option_game_debug_pafjob_test="Game Debug PafJob Test";
var gui_txt_option_console_write_test="Prueba de escritura en la consola";
var gui_txt_option_sys_tty_read="Prueba de lectura TTY";
var gui_txt_option_sys_tty_write="Prueba de escritura TTY";

// Dumping
var gui_txt_preset_chains_dumping="Volcado";
var gui_txt_option_webkit_search_area="Dump WebKit Search Area";
var gui_txt_option_system_info_multi_dump="Multi volcado de info de sistema";
var gui_txt_option_dump_lv2_syscall_table="Volcar tabla de llamadas al sistema LV2";
var gui_txt_option_mem_dump_test="Volcar memoria Raw VSH";
var gui_txt_option_get_open_psid="Volcar PSID";
var gui_txt_option_dump_idps_from_mem="Volcar IDPS desde VSH";
var gui_txt_option_sys_net_dump="Volcar SysNet";
var gui_txt_sys_sm_get_platform_info="Get Platform Info";
var gui_txt_option_dump_idps_from_flash="Volcar IDPS desde Flash";

// File System
var gui_txt_preset_chains_file_system="Sistema de archivos";
var gui_txt_option_create_new_user="Create New User";
var gui_txt_option_mount_usb_as_bdvd="Mount USB000 as BDVD";
var gui_txt_option_mount_usb_as_bdvd_no_disc="Mount USB000 as BDVD No Disc";
var gui_txt_option_mount_other_as_bdvd="Mount Other Device as BDVD";
var gui_txt_option_mount_bdvd_as_ps3_disc="Mount BDVD as PS3 Disc";
var gui_txt_option_db_rebuild="Reconstruir sistema de datos";
var gui_txt_option_get_filesize="Get Filesize";
var gui_txt_option_file_read_write_test="Prueba de Lectura/Escritura de archivos";
var gui_txt_option_dir_read_write_test="Prueba de Lectura/Escritura de directorio";

// Fun
var gui_txt_preset_chains_fun="Divertido";
var gui_txt_option_fun_test="Prueba de pitido";
var gui_txt_option_test_only="Chain Test For Devs";
var gui_txt_option_xmb_plugin_test="XMB Plugin Test";
var gui_txt_option_busy_icon_test="Busy Icon Test";
var gui_txt_option_vsh_printf_test="VSH printf Test";
var vsh_printf_arg1="MESSAGE: ";
var vsh_printf_arg2="HELLO FROM TEAM PS3XPLOIT!";

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
var gui_txt_syscall_chains_process="ID de Proceso";

// Threads
var gui_txt_syscall_chains_threads="Hilos";

// Thread ID
var gui_txt_syscall_chains_thread_id="ID de Hilo";

// Network
var gui_txt_syscall_group_network="Red: ";

// Debugging
var gui_txt_syscall_group_debugging="Desarrollo: ";
var gui_txt_syscall_chains_debug_sc="Llamadas al sistema";

// LED Control
var gui_txt_syscall_group_led="Control de LED:";
var gui_txt_syscall_chains_led="* Seleccionar cadena *";

var gui_txt_syscall_chains_led_color="Cambiar color";
var gui_txt_option_led_color_green="Verde";
var gui_txt_option_led_color_yellow_red="Amarillo/Rojo";
var gui_txt_option_led_color_off="Apagado";

var gui_txt_syscall_chains_led_action="Cambiar acción";
var gui_txt_option_led_action_on="Encendido";
var gui_txt_option_led_action_off="Apagado";
var gui_txt_option_led_action_blink_fast="Parpadeo rápido";
var gui_txt_option_led_action_blink_slow="Parpadeo lento";

// Beep Parameters
var gui_txt_syscall_group_beep_params="Parámetro de pitido: ";
var gui_txt_syscall_chains_beeps="# de pitidos";
var gui_txt_option_beep_off="Apagar";
var gui_txt_option_beep_3="3 pitidos";
var gui_txt_option_beep_2="2 pitidos";
var gui_txt_option_beep_2f="2 pitidos rápidos";
var gui_txt_option_beep_1="1 pitido";
var gui_txt_option_beep_1f="1 pitido rápido";
var gui_txt_option_beep_flatline="Línea plana";

// Memory Dump
var gui_txt_syscall_group_memdump="Volcar memoria:";
var gui_txt_memdump_addresses="Dirección de volcado de memoria";
var gui_txt_memdump_size="Tamaño de volcado de memoria";
var gui_txt_memdump_range_presets="Predefinido:";
var gui_txt_option_memdump_presets_default="* Sin selección predefinida *";

var gui_txt_memdump_address_start="Empezar:";
var gui_txt_memdump_address_end="Terminar:";
var gui_txt_btn_memdump_set_values="Colocar nuevos valores";

var gui_txt_mounting_setup="Mounting: ";
var gui_txt_option_mount_device="Device Name";
var gui_txt_option_mount_fs="File System";
var gui_txt_option_mount_path="Mount Path";

var gui_txt_group_user_id="ID de Usuario:";
var gui_txt_option_user_id_default="* Defecto *";
var gui_txt_user_id_new="User ID Set To: ";
var gui_txt_home_path_new="\n\nNew Home Path Is: \n\n";

var gui_txt_group_permissions="Permisos:";

var gui_txt_group_filesize="Tamaño de archivo:";
var gui_txt_group_titleid="ID de título:";

var gui_txt_btn_set_filesize="Colocar";
var gui_txt_btn_set_titleid="Colocar";

var gui_txt_group_path_source="Origen:";
var gui_txt_group_path_destination="Destino: ";

// XMB Transfer
var gui_txt_syscall_group_xmb_transfer="Opción de transferencia XMB";
var gui_txt_option_xmb_photo="Foto";
var gui_txt_option_xmb_music="Musica";
var gui_txt_option_xmb_video="Video";
var gui_txt_option_xmb_jpg_btn="Pulsa &#x25B3 para JPG";
var gui_txt_option_xmb_mp3_btn="Pulsa &#x25B3 para MP3";
var gui_txt_option_xmb_mp4_btn="Pulsa &#x25B3 para MP4";
var gui_txt_option_xmb_save_msg="&#x2192 Archivo &#x2192 Guardar destino &#x2192 Almacenamiento de sistema";

var gui_txt_group_payload_type="Payload Type ";
var gui_txt_group_payload_type_help="Reemplaza los payloads por defecto con tus propios archivos, usando los mismos nombres, y colocalos en la carpeta TEMPLATE/payloads/ folder under HTML source";

// String Search
var gui_txt_group_string_search="Buscar:";
var gui_txt_option_search_size="Tamaño";
var gui_txt_option_search_base="Base";
var gui_txt_option_search_stack="Apilar";
var gui_txt_option_search_range="Rango";
var gui_txt_option_search_loops="Bucles";

var gui_chk_search_verify_jumps="Verificar Saltos:";
var gui_chk_search_verify_stackframe="Armazón:";
var gui_chk_search_debug_output="Depurar:";

// Buttons
var gui_txt_option_init_rop_btn="Iniciar Cadena ROP";
var gui_txt_option_exec_rop_btn="Ejecutar Cadena";
var gui_txt_option_reload_page_btn="Recargar Pagina";
var gui_txt_option_reset_btn="Reiniciar Opciones";
var gui_txt_option_load_settings_btn="Cargar Configuración";
var gui_txt_option_save_settings_btn="Guardar Configuración";
var gui_txt_option_debug_show_var_btn="Enseñar Variables";
