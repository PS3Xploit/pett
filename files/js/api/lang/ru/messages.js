// PS3Xploit Index GUI Messages [Russian]
// PS3Xploit Team 2018 / ps3xploit.com

// Translation Credits: @ErikPshat


// After complete translate the language file update it to latest revision (same as en-US)
var current_minimum_lang_revision="0007";
var gui_incomplete_lang="Текущий перевод не полный, проверьте обновление или пропустите это предупреждение";

var msg_select_vsh_type="Использовать CEX?\n\nПри выборе Нет, будут использоваться смещения DEX";

var msg_detected_fw_1="Обнаружена FW: ";
var msg_detected_fw_2=" ";
//var msg_detected_fw_3=" / MinVer: ";
var msg_detected_fw_4=" | Поддержка ВСЕХ моделей и 4.xx прошивок";

var compat_msg_wrong_fw1="Ваша версия PS3 не совместима! Текущая версия вашей FW ";
var compat_msg_wrong_fw2=", которая несовместима с PS3Xploit. Все функции отключены";
var compat_msg_success1="Поздравляем! Мы обнаружили, что у вашей PlayStation 3 подходящая прошивка ";
var compat_msg_success2=", которая совместима с PS3Xploit! Пользуйтесь!";

var msg_option_not_available="Этот параметр пока недоступен!";

// Settings
var msg_settings_load="Это экспериментально и загружает настройки из куки!";
var msg_settings_save="Это экспериментально и сохраняет настройки в куки!";

// MinVer/CFW Compatibility
var msg_minver_loaded_into_mem="Возвращённое значение MinVer загружено в память!\n\nНажмите снова кнопку «Выполнить цепочку» для чтения и отображения!";
var msg_filesize_loaded_into_mem="File Size Return Value Loaded Into Memory!\n\nPress Execute Button Again To Read and Display!";
var msg_minver_start="Ваша минимальная версия  понижения ";
var msg_minver_mid=" является ";
var msg_minver_end=" совместимой с CFW в данное время!";
var msg_minver_compat_not="НЕ";
var msg_filesize="File Size is: 0x";

// CELL/RSX Temperatures
var msg_temps_loaded_into_mem="Возвращённые значения CELL/RSX температуры загружены в память!\n\nНажмите снова кнопку «Выполнить цепочку» для чтения и отображения!";
var msg_temps_cell="CELL температура: ";
var msg_temps_rsx="\n\nRSX температура: ";
var msg_temps_celcius=" по Цельсию";

// MemDump
var msg_memdump_warning="Предупреждение!\n\nЭтот тест зависнет, если во время процесса сброса будет удалена нераспределенная область памяти!\n\nВы все равно получите валидный дамп, вплоть до момента сбоя!";
var msg_memdump_idps_vsh="Только 4.66/4.81/4.82 поддерживаются на данный момент для дампа IDPS напрямую из VSH памяти!\n\nИзвлечение IDPS из памяти основано различными методами.\n\nВсе остальные версии прошивок просто сбросят всё за 0 сек.";
var msg_memdump_size="Значение дампа памяти Raw VSH\n\nРазмер: 0x";
var msg_memdump_start_addr="\nНачальный адрес: 0x";
var msg_memdump_end_addr="\nКонечный адрес: 0x";

// Warnings
var msg_fd_close_warning="Дескрипторы файлов в настоящее время не закрываются автоматически!";
var msg_remove_dir_warning="Предупреждение!\n\nБудьте внимательны при использовании этого системного вызова.\n\nВы можете удалить необходимый каталог и переустановить прошивку!";
var msg_warning_write_protection="Защита от записи отключена!\n\nДействуйте с осторожностью!!!";

var msg_cobra_only="ВНИМАНИЕ!\n\nЭто работает ТОЛЬКО с включённой COBRA на CFW!";

var msg_mount_test="** В ФАЗЕ ТЕСТИРОВАНИЯ **";
var msg_mount_no_disc="This Will Unmount dev_usb000 as dev_bdvd\n\nThere should be NO DISC in the drive!";
var msg_mount_yes_disc="This Will Unmount dev_bdvd and dev_usb000, then mount dev_usb000 as dev_bdvd\n\nThere should be A DISC present in the drive!";
var msg_mount_ps3_disc="This Will Mount dev_bdvd as a PS3 Disc\n\nThere should be a DISC present in the drive!";
var msg_mount_usb_enable="R9 Pointer Enabled!\n\nValue Is Set To Temp Address";
var msg_mount_usb_disable="R9 Pointer Disabled!\n\nValue Is Set To 0";

// File Operations
var msg_default_size="Используется размер по умолчанию 0x140";
var msg_new_size="Новый размер файла: ";
var msg_destination_path_set_new="Установлен новый путь на:\n\n";
var msg_destination_path_incorrect="Путь назначения некорректен!\n\nОн должен быть выставлен перед изменением Title ID.";

// Trigger Messages
var trigger_msg="Запуск эксплоита...";
var trigger_msg2="Триггер: 0x";

// Ready To Search
var msg_search_ready="<h3><b>Ready To Begin! <br>Select Chain and Options From Above, Then Press Initialize ROP Chain button!</b></h3>";

// Shows After Initial Exec Button Click
var msg_exec_init="<h3><b>Executing Chain! <br>Please Wait Until The Execution Has Finished....</b></h3>";

// Search Strings
var msg_search_offsets="<h3><b>Поиск смещений в памяти! Пожалуйста подождите... <br>Если вы не терпеливы, закройте браузер и повторите попытку через 60-90 секунд!</b></h3>";
var msg_verify_offsets="<h3><b>Проверка смещений в памяти! Пожалуйста подождите... <br>Не закрывайте браузер!</b></h3>";

// Fail Search Messages
var msg_string_search_fail="<h3><b><font color='#210003'>Не найдены все смещения!</font><font color='#7700DA'> Если поиск снова не срабатывает, настройте параметры поиска или перезапустите браузер!</font></b></h3>";
var msg_string_search_fail_max="<h3><b><font color='#210003'>Не найдены все смещения!</font><font color='#7700DA'> Последняя повторная попытка! Пожалуйста перезагрузите браузер!</font></b></h3>";

// Verify Strings Fail
var msg_string_verify_fail="<h3><b><font color='#210003'>Не проверены все смещения!</font><font color='#7700DA'> Если проверка снова не срабатывает, перезапустите браузер!</font></b></h3>";
var msg_string_verify_fail_max="<h3><b><font color='#210003'>Не проверены все смещения!</font><font color='#7700DA'> Последняя повторная попытка! Пожалуйста перезагрузите браузер!</font></b></h3>";

// Init Success
var msg_success_init="<h3><b><font color='#386E38'>УСПЕШНО!</font><br><font color='#7700DA'>Теперь вы можете выполнить вашу цепочку!</font></b></h3>";

// Exec Success
var success_chain_exec="<h3><b><font color='#386E38'>Цепочка выполнена успешно!</font></b><br> &nbsp;</h3>";
var success_chain_exec_press_again="<h3><b><font color='#386E38'>Нажмите кнопку «Выполнить цепочку» еще раз!</font></b></h3>";
var success_chain_exec_psid="<h3><b><font color='#386E38'>PSID сдамплен успешно!</font></b></h3>";
var success_chain_exec_idps="<h3><b><font color='#386E38'>IDPS сдамплен успешно!</font></b></h3>";
var success_chain_exec_syscall_dump="<h3><b><font color='#386E38'>Системный вызов вернул значение - Дамп выполнен успешно!</font></b></h3>";
var success_chain_exec_memdump="<h3><b><font color='#386E38'>Память сдамплена успешно!</font></b></h3>";
var success_chain_exec_read_write_file="<h3><b><font color='#386E38'>Успешно передан источник в пункт назначения!</font></b></h3>";
var success_mount_device="<h3><b><font color='#386E38'>Устройство успешно смонтрировано!</font></b></h3>";

// Compatibility/Offset Messages
var ua_msg="<hr><h3>Информация о браузере системы PS3: "+navigator.userAgent+ "</h3>";
var compat_msg_nops3="Это не система PlayStation! Все функции отключены";
var compat_msg_devs="Это только для разработчиков!\n\nCEX смещения необходимо будет добавить вручную в файл /js/chains/offsets.js, на основе ваших смещений DEX, используемых для каждой цепочки.";
var experimental="Задайте свою 'Домашнюю страницу' на эту страницу!\n\nИСПОЛЬЗОВАТЬ НА СВОЙ СТРАХ И РИСК!\nЗдесь могут быть ошибки, и некоторые вещи могут не работать!\n\nПоддерживаются все модели 4.xx CEX и 4.81 DEX";

// Other Messages
var msg_prerelease="ЭТО ПРЕДВАРИТЕЛЬНЫЙ РЕЛИЗ!\n\nПОДДЕРЖКА СТАРЫХ ПРОШИВОК ТОЛЬКО ЧАСТИЧНО ВЫПОЛНЕНА!\n\n4.81/4.82 ТОЛЬКО В СЛЕДУЮЩИХ РЕЛИЗАХ!";
var msg_anti_piracy="ОТКАЗ ОТ ОТВЕТСТВЕННОСТИ\n\nМы НЕ предусматриваем и не одобряем ПИРАТСТВО в любом виде!\n\nИспользуя этот учебник и нажав «ДА», вы соглашаетесь использовать его ТОЛЬКО для образовательных целей!";
var msg_anti_piracy_edat="АНТИ-ПИРАТСКИЙ ОТКАЗ ОТ ОТВЕТСТВЕННОСТИ!\n\nЭтот вариант предназначен только для целей тестирования и разработки и не должен подвергаться насилию!\n\nНажимая «ДА», вы соглашаетесь использовать это ТОЛЬКО в целях сохранения флоры и фауны! Поклянитесь, что, при выполнении последующих действий, не пострадает ни одно дерево и не погибнет ни одно животное!";

// Devices
var msg_device_loaded_into_mem="Значение кода возврата устройства загружено в память!\n\nНажмите снова кнопку «Выполнить цепочку», чтобы прочитать и отобразить!";
var msg_get_device_info1="Код возврата устройства: ";
var msg_get_device_info2="\n\nИспользуйте это для цепочки sys_storage_report_devices";

// Debugging

var msg_stackframe_check="Это проверит стековый фрейм по умолчанию для выявления возможных проблем.\n\nЕсли произошёл крах системы или не отображается сообщение об успешном завершении, то значит возникла проблема!";

// String Matching
var verify_fail="<font color='#7700DA'>НЕУДАЧА: Строки не совпадают с памятью!</font>";
var verify_success="<font color='#2a1003'>УСПЕШНО: Строки совпадают с памятью!</font>";
var verify_skip="<font color='#2a1003'>УСПЕШНО: Не проверять строки в памяти!</font>";

var msg_search_flash_type_start="Поиск настроек параметров для ";
var msg_search_flash_type_end=" Тип памяти!";

var msg_chk_mem_arg_error="Ошибка аргуметнов в функции проверки памяти! размер=0x";
var msg_malformed_html="Неверный формат HTML!";
var msg_string_located=" найден в позиции: 0x";
var msg_string_not_located="не может находиться в диапазоне";

// Found Offsets
var msg_found_offsets="<h4><b>Найдены смещения: ";
var msg_verified_offsets="<h4><b>Проверенные смещения: ";

var msg_page_args_not_set="Аргументы страницы не заданы!\n\nНажмите кнопку «Установить аргументы» и повторите попытку!";
var msg_no_chain_selected="Не выбрана цепочка ROP в хекс\n\nИспользуйте раскрывающийся список для выбора";
var msg_media_not_supported="Этот выбор Медиа еще не реализован!";
var msg_cannot_continue="Не удаётся продолжить... Возвращаемся!";

var msg_invalid_title_id="ВНИМАНИЕ!\n\nНе верный размер введённого Title ID!\n\nИспользуется ID по умолчанию.";

// index GUI text
var gui_title="PS3 Exploitation Tutorial Template ";
var guy_by="от ";
var gui_credits="Большое спасибо xerpi за порт эксплоита утечки памяти на PS3, zecoxao & Joonie за поддержку, mysis за документацию по vsh экспортам и плагинам, авторов psdevwiki, STLcardsWS за постоянный вклад, всё PS3 сообщество хакеров/разработчиков. Благодарим littlebalup за идеи с реализацией js для создания HDD-версии Дамперов и Флешера. Так же благодарим B7U3 C50SS, Endless и 0x1991337 за инструктаж по тестированию системных вызовов и другую помощь! <font color='yellow'>Больше деталей и новостей на <a href='http://www.psx-place.com'>http://www.psx-place.com</a>. Официальный сайт: <a href='http://ps3xploit.com'>http://ps3xploit.com</a></font>";

// Checkboxes First Section
var gui_chk_default_settings="Стандартные настройки:";
var gui_chk_disable_trigger="Отключить триггер:";
var gui_chk_write_protect="Защита от записи:";
var gui_chk_usb_mount="USB:";

// Reboot Mode
var gui_chk_reboot_mode="Режим перезагрузки:";
var gui_chk_reboot_mode_select="* Выбор режима *";
var gui_chk_reboot_mode_soft="Мягкая перезагрузка";
var gui_chk_reboot_mode_hard="Жёсткая перезагрузка";
var gui_chk_reboot_mode_off="Выключить питание";

// ROP Chain Text

// Preset Chains
var gui_txt_preset_chains="Пресеты цепочек: ";
var gui_txt_preset_chains_default="Стандартные тесты";
var gui_txt_option_stackframe_test="Тест фрейма стека";
var gui_txt_option_beep_test="Тест сигнала";
var gui_txt_option_power_test="Тест питания";
var gui_txt_option_minver_check="Тест мин. версии";
var gui_txt_option_sys_game_get_temperature="CELL/RSX температура";
var gui_txt_option_game_debug_pafjob_test="Тест отладки игры PafJob";
var gui_txt_option_console_write_test="Тест записи консоли";
var gui_txt_option_sys_tty_read="Тест чтения TTY";
var gui_txt_option_sys_tty_write="Тест записи TTY";

// Dumping
var gui_txt_preset_chains_dumping="Дампинг";
var gui_txt_option_webkit_search_area="Dump WebKit Search Area";
var gui_txt_option_system_info_multi_dump="Мультидамп сисинфо";
var gui_txt_option_dump_lv2_syscall_table="Дамп LV2 системных вызовов";
var gui_txt_option_mem_dump_test="Дамп Raw памяти VSH";
var gui_txt_option_get_open_psid="Дамп PSID";
var gui_txt_option_dump_idps_from_mem="Дамп IDPS из VSH";
var gui_txt_option_sys_net_dump="Дамп SysNet";
var gui_txt_sys_sm_get_platform_info="Дамп инфо о платформе";
var gui_txt_option_dump_idps_from_flash="Дамп IDPS из флеш";

// File System
var gui_txt_preset_chains_file_system="Файловая система";
var gui_txt_option_create_new_user="Create New User";
var gui_txt_option_mount_usb_as_bdvd="Mount USB000 as BDVD";
var gui_txt_option_mount_usb_as_bdvd_no_disc="Mount USB000 as BDVD No Disc";
var gui_txt_option_mount_other_as_bdvd="Mount Other Device as BDVD";
var gui_txt_option_mount_bdvd_as_ps3_disc="Mount BDVD as PS3 Disc";
var gui_txt_option_db_rebuild="Реконструкция базы данных";
var gui_txt_option_get_filesize="Get Filesize";
var gui_txt_option_file_read_write_test="Тест Чтения/Записи файла";
var gui_txt_option_dir_read_write_test="Тест Чтения/Записи каталога";

// Fun
var gui_txt_preset_chains_fun="Развлечение";
var gui_txt_option_fun_test="Тест сигнала";
var gui_txt_option_test_only="Chain Test For Devs";
var gui_txt_option_xmb_plugin_test="XMB Plugin Test";
var gui_txt_option_busy_icon_test="Busy Icon Test";
var gui_txt_option_vsh_printf_test="VSH printf Test";
var vsh_printf_arg1="MESSAGE: ";
var vsh_printf_arg2="HELLO FROM TEAM PS3XPLOIT!";

// Other Syscall Chains

// Memory/System
var gui_txt_syscall_group_mem_sys="Память/Система: ";
var gui_txt_syscall_chains_mem_sys="Память";

// Storage
var gui_txt_syscall_chains_storage="Хранилище";

// System
var gui_txt_syscall_chains_system="Система";

// Process/Thread

// Process
var gui_txt_syscall_group_proc_thread="Процесс/Поток: ";
var gui_txt_syscall_chains_proc_thread="Процесс";

// Process ID
var gui_txt_syscall_chains_process="ID процесса";

// Threads
var gui_txt_syscall_chains_threads="Потоки";

// Thread ID
var gui_txt_syscall_chains_thread_id="ID потока";

// Network
var gui_txt_syscall_group_network="Сеть: ";

// Debugging
var gui_txt_syscall_group_debugging="Отладка: ";
var gui_txt_syscall_chains_debug_sc="Системные вызовы";

// LED Control
var gui_txt_syscall_group_led="Управление светодиодами:";
var gui_txt_syscall_chains_led="* Выбор цепочки *";

var gui_txt_syscall_chains_led_color="Изменение цвета";
var gui_txt_option_led_color_green="Зелёный";
var gui_txt_option_led_color_yellow_red="Жёлтый/Красный";
var gui_txt_option_led_color_off="Выключить";

var gui_txt_syscall_chains_led_action="Изменение действия";
var gui_txt_option_led_action_on="Включить";
var gui_txt_option_led_action_off="Выключить";
var gui_txt_option_led_action_blink_fast="Мигать быстро";
var gui_txt_option_led_action_blink_slow="Мигать медленно";

// Beep Parameters
var gui_txt_syscall_group_beep_params="Параметры: ";
var gui_txt_syscall_chains_beeps="# сигналов";
var gui_txt_option_beep_off="Выключить";
var gui_txt_option_beep_3="3 сигнала";
var gui_txt_option_beep_2="2 сигнала";
var gui_txt_option_beep_2f="2 коротких сигнала";
var gui_txt_option_beep_1="1 сигнал";
var gui_txt_option_beep_1f="1 короткий сигнал";
var gui_txt_option_beep_flatline="Постоянный";

// Memory Dump
var gui_txt_syscall_group_memdump="Дамп памяти:";
var gui_txt_memdump_addresses="Адрес дампа";
var gui_txt_memdump_size="Размер дампа";
var gui_txt_memdump_range_presets="Пресеты:";
var gui_txt_option_memdump_presets_default="* Не выбраны пресеты *";

var gui_txt_memdump_address_start="Начало:";
var gui_txt_memdump_address_end="Конец:";
var gui_txt_btn_memdump_set_values="Применить";

var gui_txt_mounting_setup="монтирования: ";
var gui_txt_option_mount_device="Наименование устройства";
var gui_txt_option_mount_fs="Файловая система";
var gui_txt_option_mount_path="Путь монтирования";

var gui_txt_group_user_id="ID пользователя:";
var gui_txt_option_user_id_default="* По умолчанию *";
var gui_txt_user_id_new="ID пользователя установлено на: ";
var gui_txt_home_path_new="\n\nНовый домашний каталог пользователя: \n\n";

var gui_txt_group_permissions="Права:";

var gui_txt_group_filesize="Размер файла:";
var gui_txt_group_titleid="TitleID:";

var gui_txt_btn_set_filesize="Применить";
var gui_txt_btn_set_titleid="Применить";

var gui_txt_group_path_source="Источник:";
var gui_txt_group_path_destination="Назначение: ";

// XMB Transfer
var gui_txt_syscall_group_xmb_transfer="Передачи в XMB ";
var gui_txt_option_xmb_photo="Фото";
var gui_txt_option_xmb_music="Музыка";
var gui_txt_option_xmb_video="Видео";
var gui_txt_option_xmb_jpg_btn="Нажмите &#x25B3 для JPG";
var gui_txt_option_xmb_mp3_btn="Нажмите &#x25B3 для MP3";
var gui_txt_option_xmb_mp4_btn="Нажмите &#x25B3 для MP4";
var gui_txt_option_xmb_save_msg="&#x2192 Файл &#x2192 Сохранить цель &#x2192 Хранилище";

var gui_txt_group_payload_type="Тип Payload ";
var gui_txt_group_payload_type_help="Замение payloads по умолчанию своими файлами, используя такие же названия, и положите в папку TEMPLATE/payloads/ из-под HTML источника";

// String Search
var gui_txt_group_string_search="Поиск:";
var gui_txt_option_search_size="Размер";
var gui_txt_option_search_base="Базовое смещение";
var gui_txt_option_search_stack="Стек";
var gui_txt_option_search_range="Диапазон";
var gui_txt_option_search_loops="Циклов";

var gui_chk_search_verify_jumps="Проверка цепочек:";
var gui_chk_search_verify_stackframe="Фрейм стека:";
var gui_chk_search_debug_output="Отладка:";

// Buttons
var gui_txt_option_init_rop_btn="Инициировать ROP";
var gui_txt_option_exec_rop_btn="Выполнить цепочку";
var gui_txt_option_reload_page_btn="Обновить страницу";
var gui_txt_option_reset_btn="Сбросить значения";
var gui_txt_option_load_settings_btn="Загрузить настройки";
var gui_txt_option_save_settings_btn="Сохранить настройки";
var gui_txt_option_debug_show_var_btn="Показать все переменные";
