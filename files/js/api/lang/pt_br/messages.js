// Mensagens Padrões do PS3Xploit [Portuguese BR]
// PS3Xploit Team 2018 / ps3xploit.com

// Translation Credits: @HollowChris and @Caio99BR


var msg_select_vsh_type="Usar a CEX?\n\nSelecionando NÃO, será usado os offsets da DEX";

var msg_detected_fw_1="Firmware Detectado: ";
var msg_detected_fw_2=" ";
//var msg_detected_fw_3=" / Versão Mínima: ";
var msg_detected_fw_4=" | Suporta TODOS os modelos e o firmware 4.xx";

var compat_msg_wrong_fw1="O seu PS3 não é uma versão compativel! A versão do firmware atual é ";
var compat_msg_wrong_fw2=", e não é compativel com o PS3Xploit. Todas as funções foram desativadas";
var compat_msg_success1="Parabéns! Nós detectamos que o seu PlayStation 3 está no firmware ";
var compat_msg_success2=", e é compatível com o PS3Xploit! Aproveite!";

var msg_option_not_available="Esta opção ainda não está disponível!";

// Settings
var msg_settings_load="Isto é experimental e carrega configurações de um cookie!";
var msg_settings_save="Isto é experimental e salva configurações em um cookie!";

// MinVer/CFW Compatibility
var msg_minver_loaded_into_mem="A versão mínima retorna um valor carregado na memória!\n\nPressione o botão Executar novamente para carregar e exibir este valor!";
var msg_minver_start="Sua versão mínima para Downgrade é ";
var msg_minver_mid=" e é ";
var msg_minver_end=" compatível com CFW!";

// CELL/RSX Temperatures
var msg_temps_loaded_into_mem="A temperatura do CELL/RSX (CPU/GPU) retorna um valor carregado na memória!\n\nPressione o botão Executar novamente para carregar e exibir este valor!";
var msg_temps_cell="Temperatura do CELL (CPU): ";
var msg_temps_rsx="\n\nTemperatura do RSX (GPU): ";
var msg_temps_celcius=" ºC";

// MemDump
var msg_memdump_warning="Atenção!\n\nEste teste irá travar se uma área não alocada da memória for atingida durante o processo de dump!\n\nVocê terá um dump válido, até o momento que o teste travar!";
var msg_memdump_idps_vsh="Somente os firmwares 4.66/4.81/4.82 suportam Dump IDPS direto da Memória VSH!\n\nO IDPS Dump direto da Memória VSH é diferente das demais cadeias.\n\nTodos os outros firmwares provavelmente irão fazer um dump só com 0s.";
var msg_memdump_size="Valores do Dump Raw direto da memória VSH\n\nTamanho: 0x";
var msg_memdump_start_addr="\nEndereço inícial: 0x";
var msg_memdump_end_addr="\nEnderenço final: 0x";

// Warnings
var msg_fd_close_warning="Os descritores de arquivos (FDs) atualmente não são fechados automaticamente!";
var msg_remove_dir_warning="ATENÇÃO!\n\nTome cuidado ao usar este chamada do sistema (syscall).\n\nVocê pode remover uma pasta essencial e ter que reinstalar todo o firmware!";
var msg_warning_write_protection="A proteção contra escrita foi desativada!\n\nCONTINUE COM CUIDADO!!!!";

var msg_cobra_only="ALERTA!\n\nIsto só FUNCIONA com o COBRA ativado na CFW!";

var msg_mount_test="** EM FASE DE TESTE **!\n\nIsto irá montar a partição /dev_hdd1/\n\nAssim que montado você poderá reiniciar o navegador e utilizar a cadeia de Leitura/Escrita de Arquivos para fazer o dump da partição /dev_hdd1/ para o destino!";

// File Operations
var msg_default_size="Usando o tamanho padrão 0x140";
var msg_new_size="Novo Tamanho de Arquivo: 0x";
var msg_destination_path_set_new="Novo caminho definido para:\n\n";
var msg_destination_path_incorrect="O caminho de destino está incorreto!\n\nIsto deve ser alterado antes de trocar o Title ID.";

// Trigger Messages
var trigger_msg="Engatilhando exploit...";
var trigger_msg2="Gatilho: 0x";

// Search Strings
var msg_search_offsets="<h3><b>Procurando por offsets na memória! Por favor espere.... <br>Se você é impaciente, feche o navegador e tente novamente em 60-90 segundos</b></h3>";
var msg_verify_offsets="<h3><b>Verificando os offsets na memória! Por favor espere.... <br>NÃO FECHE o navegador agora!!</b></h3>";

// Fail Search Messages
var msg_string_search_fail="<h3><b><font color='#7700DA'>Não encontrou todos os offsets!</font><font color='#7700DA'> Se a busca falhar novamente, ajuste as configurações de busca ou REINICIE o navegador!</font></b></h3>";
var msg_string_search_fail_max="<h3><b><font color='#7700DA'>Não encontrou todos os offsets!</font><font color='#7700DA'> Máximo de tentativas alcançado! Por favor, REINICIEo o navegador!</font></b></h3>";

// Verify Strings Fail
var msg_string_verify_fail="<h3><b><font color='#7700DA'>Não verificou todos os offsets!</font><font color='#7700DA'> Se a verificação falhar novamente, REINICIE o navegador!</font></b></h3>";
var msg_string_verify_fail_max="<h3><b><font color='#7700DA'>Não verificou todos os offsets!</font><font color='#7700DA'> Máximo de tentativas alcançada! Por favor, REINICIE o navegador!</font></b></h3>";

// Init Success
var msg_success_init="<h3><b><font color='#386E38'>SUCESSO!</font><font color='#7700DA'> <br>Agora você pode executar sua cadeia!</font></b></h3>";

// Exec Success
var success_chain_exec="<h3><b><font color='#386E38'>Cadeia executada com sucesso!</font></b></h3>";
var success_chain_exec_press_again="<h3><b><font color='#386E38'>Pressione o botão de Executar mais uma vez!</font></b></h3>";
var success_chain_exec_psid="<h3><b><font color='#386E38'>PSID Dump feito com sucesso!</font></b></h3>";
var success_chain_exec_idps="<h3><b><font color='#386E38'>IDPS Dump feito com sucesso!</font></b></h3>";
var success_chain_exec_memdump="<h3><b><font color='#386E38'>Dump da Memória feito com sucesso!</font></b></h3>";
var success_chain_exec_read_write_file="<h3><b><font color='#386E38'>Transferido da Origem para o Destino com sucesso!</font></b></h3>";
var success_mount_device="<h3><b><font color='#386E38'>Partição /dev_hdd1/ montada com sucesso! Reinicie o navegador e utilize a cadeia de Leitura/Escrita de Arquivos para usar o dump.</font></b></h3>";

// Compatibility/Offset Messages
var ua_msg="<hr><h3>Informações do Navegador do Sistema PS3: "+navigator.userAgent+ "</h3>";
var compat_msg_nops3="Você não está em um Sistema PlayStation! Todos os recursos foram desativados.";
var compat_msg_devs="Isto é destinado apenas para DESENVOLVEDORES!\n\nOffsets CEX precisam ser manualmente adicionados no arquivo /js/chains/offsets.js, baseado em seus offsets DEX em uso para cada cadeia.";
var experimental="Configure sua página principal para ser essa página!\n\nUSE POR SUA CONTA E RISCO!\nPode conter bugs e algumas coisas que não funcionam!\n\nTodos os modelos em 4.xx CEX e 4.81 DEX são suportados";

// Other Messages
var msg_prerelease="ESTE É UM LANÇAMENTO PRÉVIO INICIAL!\n\nSUPORTE A FIRMWARES MAIS ANTIGOS ESTÁ FUNCIONANDO APENAS PARCIALMENTE!\n\nAPENAS FIRMWARES 4.81/4.82 ATÉ O PRÓXIMO LANÇAMENTO!";
var msg_anti_piracy="AVISO LEGAL\n\nNós NÃO toleramos ou aprovamos PIRATARIA de qualquer tipo!\n\nAo usar este tutorial, e clicando em SIM, você concorda em usá-lo APENAS para fins educacionais!";
var msg_anti_piracy_edat="AVISO LEGAL ANTI-PIRATARIA!\n\nEsta opção destina-se apenas a fins de teste e desenvolvimento, e não deve ser abusada!\n\nAo clicar em SIM, você aceita usar isso apenas com títulos que foram comprados!";

var msg_thread_name="Hello_From_PS3Xploit"; // DON'T NEED TO BE TRANSLATED

// Devices
var msg_device_loaded_into_mem="Dispositivo retornado na memória!\n\nPressione o botão Executar novamente para carregar e exibir este valor!";
var msg_get_device_info1="Dispositivo Retornado: ";
var msg_get_device_info2="\n\nUse ito para a cadeia sys_storage_report_devices";

// Debugging
var msg_debug_placeholder="Lazy XP +1"; // DON'T NEED TO BE TRANSLATED

var msg_stackframe_check="Isto vai checar o stackframe padrão procurando por problemas.\n\nSe isso travar ou não mostrar uma mensagem de sucesso, então existe um problema!";

// String Matching
var verify_fail="<font color='#7700DA'>FALHA: Sequência não encontrada na memória!</font>";
var verify_success="<font color='#2a1003'>SUCESSO: Sequência encontrada na memória!</font>";
var verify_skip="<font color='#2a1003'>SUCCESS: Sequência não verificada na memória!</font>";

var msg_search_flash_type_start="Procurar parâmetros definidos para ";
var msg_search_flash_type_end=" Flash!";

var msg_check_memory="checkMemory: "; // DON'T NEED TO BE TRANSLATED
var msg_chk_mem_arg_error="Erro nos argumentos da função checkMemory! size=0x";
var msg_malformed_html="HTML Inválido!";
var msg_string_located=" Encontrado no offset: 0x";
var msg_string_not_located="não pode ser encontrado no intervalo";

// Found Offsets
var msg_found_offsets="Offsets Encontrados: ";
var msg_verified_offsets="Offsets Verificados: ";
var offset_find_success="success"; // DON'T NEED TO BE TRANSLATED
var offset_find_base_fp="base_fp"; // DON'T NEED TO BE TRANSLATED
var offset_find_stack_frame="stack_frame"; // DON'T NEED TO BE TRANSLATED
var offset_find_jump2="jump2"; // DON'T NEED TO BE TRANSLATED
var offset_find_jump1="jump1"; // DON'T NEED TO BE TRANSLATED

var msg_page_args_not_set="Argumentos da pagina não definidos!\n\nClique no botão de Argumentos e tente novamente!";
var msg_no_chain_selected="Nenhuma Cadeia HEX ROP selecionada\n\nUtilize a Caixa de Seleção para escolher uma cadeia";
var msg_media_not_supported="Esta mídia ainda não foi implementada.";
var msg_cannot_continue="Não foi possível continuar... Retornando!";

var msg_invalid_title_id="ALERTA!\n\nO Title ID inserido tem um tamanho invalido!\n\nUsando ID padrão.";

// index GUI text
var gui_title="PS3 Exploitation Tutorial Template <font color='#FFF' size='3'>v0.1.3</font>"; // DON'T NEED TO BE TRANSLATED
var gui_team="by PS3Xploit Team: <b><font color='#7700DA'>W</font><font color='#FFF'> | </font><font color='#7700DA'>esc0rtd3w</font><font color='#FFF'> | </font><font color='#7700DA'>habib</font><font color='#FFF'> | </font><font color='#7700DA'>bguerville</font></b>"; // DON'T NEED TO BE TRANSLATED
var gui_credits="Agradeço à @xerpi pelo port para o PS3 do exploit de vazamento de memória no ambiente de usuário, à @zecoxao e @Joonie pelo suporte inicial e contínuo, à @mysis por documentar os plugins e exports VSH, aos contribuidores da #psdevwiki claro, à @STLcardsWS pelo sua contribuição ao longo do tempo e toda a comunidade PS3 de hacker/devs do passado e do presente, vocês sabem quem são vocês. Obrigado também à @littlebalup pela ideia e a implementação js que nós usamos para fazer a edição HDD dos Dumpers e Flasher. Obrigrado também à @B7U3 C50SS, @Endless, e @0x1991337 pelo tutorial de teste da syscall e outras ajudas! <font color='yellow'>Mais detalhes e notícias: <a href='http://www.psx-place.com'>psx-place.com</a>. Site Oficial: <a href='http://ps3xploit.com'>ps3xploit.com</a></font>";

// Checkboxes First Section
var gui_chk_default_settings="Configurações padrão:";
var gui_chk_disable_trigger="Desabilitar o gatilho:";
var gui_chk_write_protect="Proteção contra escrita:";
var gui_chk_flash_type_nand="NAND:"; // DON'T NEED TO BE TRANSLATED
var gui_chk_flash_type_nor="NOR:"; // DON'T NEED TO BE TRANSLATED
var gui_chk_flash_type_emmc="eMMC:"; // DON'T NEED TO BE TRANSLATED

// Reboot Mode
var gui_chk_reboot_mode="<br>Modo de reiniciar:";
var gui_chk_reboot_mode_select="* Selecione o modo *";
var gui_chk_reboot_mode_soft="Reiniciar via software";
var gui_chk_reboot_mode_hard="Reiniciar";
var gui_chk_reboot_mode_off="Desligar";

// ROP Chain Text

// Preset Chains
var gui_txt_preset_chains="Cadeias Predefinidas: ";
var gui_txt_preset_chains_default="* Padrão/Teste *";
var gui_txt_option_stackframe_test="Teste do Stackframe";
var gui_txt_option_beep_test="Teste do Beep";
var gui_txt_option_power_test="Teste de Reinicio";
var gui_txt_option_minver_check="Checar a Versão Mínima";
var gui_txt_option_sys_game_get_temperature="Mostrar Temp CELL/RSX";
var gui_txt_option_console_write_test="Teste de Escrita do Console";
var gui_txt_option_sys_tty_read="Teste de Leitura TTY";
var gui_txt_option_sys_tty_write="Teste de Escrita TTY";

// Dumping
var gui_txt_preset_chains_dumping="* Fazer Dump *";
var gui_txt_option_system_info_multi_dump="System Info Multi Dump";
var gui_txt_option_dump_lv2_syscall_table="Dump da Tabela Syscall LV2";
var gui_txt_option_mem_dump_test="Raw Dump pela Memória VSH";
var gui_txt_option_get_open_psid="PSID Dump";
var gui_txt_option_dump_idps_from_mem="IDPS Dump pela Memória VSH";
var gui_txt_option_sys_net_dump="SysNet Dump";
var gui_txt_option_dump_idps_from_flash="IDPS Dump pelo Flash";

// File System
var gui_txt_preset_chains_file_system="* Sistema de Arquivos *";
var gui_txt_option_db_rebuild="Reconstriur a Base de Dados";
var gui_txt_option_file_read_write_test="Teste de Leitura/Escrita de Arquivos";
var gui_txt_option_dir_read_write_test="Teste de Leitura/Escrita de Pastas";

// Fun
var gui_txt_preset_chains_fun="* Diversão *";
var gui_txt_option_fun_test="Teste do Beep";

// Other Syscall Chains

// Memory/Syatem
var gui_txt_syscall_group_mem_sys="Memória/Sistema: ";
var gui_txt_syscall_chains_mem_sys="* Memória *";
var gui_txt_option_sys_rsx_memory_free="sys_rsx_memory_free"; // DON'T NEED TO BE TRANSLATED

// Storage
var gui_txt_syscall_chains_storage="* Armazenamento *";
var gui_txt_option_sys_storage_report_devices="sys_storage_report_devices"; // DON'T NEED TO BE TRANSLATED
var gui_txt_option_sys_storage_open="sys_storage_open"; // DON'T NEED TO BE TRANSLATED
var gui_txt_option_sys_storage_read="sys_storage_read"; // DON'T NEED TO BE TRANSLATED
var gui_txt_option_sys_fs_chmod="sys_fs_chmod"; // DON'T NEED TO BE TRANSLATED
var gui_txt_option_sys_fs_chown="sys_fs_chown"; // DON'T NEED TO BE TRANSLATED
var gui_txt_option_sys_fs_get_fs_info="sys_fs_get_fs_info"; // DON'T NEED TO BE TRANSLATED
var gui_txt_option_sys_fs_get_mount_info="sys_fs_get_mount_info"; // DON'T NEED TO BE TRANSLATED
var gui_txt_option_sys_fs_link="sys_fs_link"; // DON'T NEED TO BE TRANSLATED
var gui_txt_option_sys_fs_mapped_allocate="sys_fs_mapped_allocate"; // DON'T NEED TO BE TRANSLATED
var gui_txt_option_sys_fs_mapped_free="sys_fs_mapped_free"; // DON'T NEED TO BE TRANSLATED
var gui_txt_option_sys_fs_mkdir="sys_fs_mkdir"; // DON'T NEED TO BE TRANSLATED
var gui_txt_option_sys_fs_mount="sys_fs_mount"; // DON'T NEED TO BE TRANSLATED
var gui_txt_option_sys_fs_rename="sys_fs_rename"; // DON'T NEED TO BE TRANSLATED
var gui_txt_option_sys_fs_rmdir="sys_fs_rmdir"; // DON'T NEED TO BE TRANSLATED
var gui_txt_option_sys_fs_stat="sys_fs_stat"; // DON'T NEED TO BE TRANSLATED
var gui_txt_option_sys_fs_symbolic_link="sys_fs_symbolic_link"; // DON'T NEED TO BE TRANSLATED
var gui_txt_option_sys_fs_unlink="sys_fs_unlink"; // DON'T NEED TO BE TRANSLATED
var gui_txt_option_sys_fs_unmount="sys_fs_unmount"; // DON'T NEED TO BE TRANSLATED

// System
var gui_txt_syscall_chains_system="* Sistema *";
var gui_txt_option_sys_ss_utoken_if="sys_ss_utoken_if"; // DON'T NEED TO BE TRANSLATED

// Process/Thread

// Process
var gui_txt_syscall_group_proc_thread="Processo/Tarefas: ";
var gui_txt_syscall_chains_proc_thread="* Processos *";
var gui_txt_option_sys_process_exit="sys_process_exit"; // DON'T NEED TO BE TRANSLATED
var gui_txt_option_sys_process_kill="sys_process_kill"; // DON'T NEED TO BE TRANSLATED

var gui_txt_syscall_chains_process="* ID do Processo *";

// Threads
var gui_txt_syscall_chains_threads="* Tarefas *";
var gui_txt_option_ppu_thread_get_priority="thread_get_priority"; // DON'T NEED TO BE TRANSLATED
var gui_txt_option_ppu_thread_get_stack_info="thread_get_stack_info"; // DON'T NEED TO BE TRANSLATED
var gui_txt_option_sys_ppu_thread_create="sys_ppu_thread_create"; // DON'T NEED TO BE TRANSLATED
var gui_txt_option_sys_ppu_thread_exit="sys_ppu_thread_exit"; // DON'T NEED TO BE TRANSLATED
var gui_txt_option_sys_ppu_thread_restart="sys_ppu_thread_restart"; // DON'T NEED TO BE TRANSLATED
var gui_txt_option_sys_ppu_thread_start="sys_ppu_thread_start"; // DON'T NEED TO BE TRANSLATED
var gui_txt_option_sys_ppu_thread_stop="sys_ppu_thread_stop"; // DON'T NEED TO BE TRANSLATED

// Thread ID
var gui_txt_syscall_chains_thread_id="* ID da Tarefa *";

// Network
var gui_txt_syscall_group_network="Rede: ";
var gui_txt_syscall_chains_sys_net="* Ação pela Rede *"; // DON'T NEED TO BE TRANSLATED
var gui_txt_option_sys_net_open_dump="sys_net_open_dump"; // DON'T NEED TO BE TRANSLATED
var gui_txt_option_sys_net_read_dump="sys_net_read_dump"; // DON'T NEED TO BE TRANSLATED
var gui_txt_option_sys_net_write_dump="sys_net_write_dump"; // DON'T NEED TO BE TRANSLATED
var gui_txt_option_sys_net_close_dump="sys_net_close_dump"; // DON'T NEED TO BE TRANSLATED

var gui_txt_option_url="URL: "; // DON'T NEED TO BE TRANSLATED

// Debugging
var gui_txt_syscall_group_debugging="Depuração: ";
var gui_txt_syscall_chains_debug_sc="* Chamadas do Sistema (syscalls) *";
var gui_txt_option_debug_placeholder="beep_test"; // DON'T NEED TO BE TRANSLATED

// LED Control
var gui_txt_syscall_group_led="LED Control:";
var gui_txt_syscall_chains_led="* Selecione a cadeia *";
var gui_txt_option_sys_sm_request_led="sys_sm_request_led"; // DON'T NEED TO BE TRANSLATED
var gui_txt_option_sys_sm_control_led="sys_sm_control_led"; // DON'T NEED TO BE TRANSLATED

var gui_txt_syscall_chains_led_color="* Mudar a cor *";
var gui_txt_option_led_color_green="Verde";
var gui_txt_option_led_color_yellow_red="Amarelo/Vermelho";
var gui_txt_option_led_color_off="Desligado";

var gui_txt_syscall_chains_led_action="* Mudar a ação *";
var gui_txt_option_led_action_on="Ligado";
var gui_txt_option_led_action_off="Desligado";
var gui_txt_option_led_action_blink_fast="Piscar rápido";
var gui_txt_option_led_action_blink_slow="Piscar devagar";

// Beep Parameters
var gui_txt_syscall_group_beep_params="Parâmetros do Beep: ";
var gui_txt_syscall_chains_beeps="* Número de Beeps *";
var gui_txt_option_beep_off="Turn Off";
var gui_txt_option_beep_3="3 Beeps";
var gui_txt_option_beep_2="2 Beeps";
var gui_txt_option_beep_2f="2 Beeps Rápido";
var gui_txt_option_beep_1="1 Beep";
var gui_txt_option_beep_1f="1 Beep Rápido";
var gui_txt_option_beep_flatline="Zumbido Agudo";

// Memory Dump
var gui_txt_syscall_group_memdump="Dump da Memória:";
var gui_txt_memdump_addresses="* Endereço do Dump da Memória *";
var gui_txt_memdump_size="* Tamanho do Dump da Memória *";
var gui_txt_memdump_range_presets="Predefinições:";
var gui_txt_option_memdump_presets_default="* Nenhuma predifinição selecionada *";

var gui_txt_memdump_address_start="<br>Início:";
var gui_txt_memdump_address_end="Fim:";
var gui_txt_btn_memdump_set_values="Definir novos valores";

var gui_txt_group_user_id="ID do Usuário:";
var gui_txt_option_user_id_default="* Padrão *";
var gui_txt_user_id_new="ID do Usuário definido para: ";
var gui_txt_home_path_new="\n\nO novo caminho para a pagina inicial é: \n\n";

var gui_txt_group_permissions="Permissões:";
var gui_txt_option_chmod="chmod"; // DON'T NEED TO BE TRANSLATED
var gui_txt_option_chown="chown"; // DON'T NEED TO BE TRANSLATED

var gui_txt_group_filesize="Tamanho do Arquivo:";
var gui_txt_group_titleid="<br>TitleID:"; // DON'T NEED TO BE TRANSLATED

var gui_txt_btn_set_filesize="Definir";
var gui_txt_set_titleid="PS3XPLOIT"; // DON'T NEED TO BE TRANSLATED
var gui_txt_btn_set_titleid="Definir";

var gui_txt_group_path_source="Origem:";
var gui_txt_group_path_destination="Destino:";

// XMB Transfer
var gui_txt_syscall_group_xmb_transfer="* Opções de Transferência pela XMB *";
var gui_txt_option_xmb_photo="Foto";
var gui_txt_option_xmb_music="Música";
var gui_txt_option_xmb_video="Vídeo";
var gui_txt_option_xmb_jpg_btn="Pressione &#x25B3 Para JPG";
var gui_txt_option_xmb_mp3_btn="Pressione &#x25B3 Para MP3";
var gui_txt_option_xmb_mp4_btn="Pressione &#x25B3 Para MP4";
var gui_txt_option_xmb_save_msg="<br>&#x2192 Arquivo &#x2192 Destino a Salvar &#x2192 Armazenamento do Sistema";

var gui_txt_group_payload_type="Tipo de Payload ";
var gui_txt_group_payload_type_help="Troque o payload padrão com os seus arquivos, usando os mesmos nomes, e coloque na pasta TEMPLATE/payloads/ do site HTML";

// String Search
var gui_txt_group_string_search="Procurar:";
var gui_txt_option_search_size="Size"; // DON'T NEED TO BE TRANSLATED
var gui_txt_option_search_base="Base"; // DON'T NEED TO BE TRANSLATED
var gui_txt_option_search_stack="Stack"; // DON'T NEED TO BE TRANSLATED
var gui_txt_option_search_range="Range"; // DON'T NEED TO BE TRANSLATED
var gui_txt_option_search_loops="Loops"; // DON'T NEED TO BE TRANSLATED

var gui_chk_search_verify_jumps="<br>Vericar Jumps:";
var gui_chk_search_verify_stackframe="Stackframe:"; // DON'T NEED TO BE TRANSLATED
var gui_chk_search_debug_output="Debug:"; // DON'T NEED TO BE TRANSLATED

var gui_txt_search_found_offsets="Offsets encontrados: base_fp: 0x0 | stack_frame_addr: 0x0 | jump_2_addr: 0x0 | jump_1_addr: 0x0";

// Buttons
var gui_txt_option_init_rop_btn="Iniciar a Cadeia ROP";
var gui_txt_option_exec_rop_btn="Executar a Cadeia";
var gui_txt_option_reload_page_btn="Recarregar a Pagina";
var gui_txt_option_reset_btn="Resetar as Opções";
var gui_txt_option_load_settings_btn="Carregar as Configurações";
var gui_txt_option_save_settings_btn="Salvar as Configurações";
var gui_txt_option_debug_show_var_btn="Mostrar Todas as Variáveis";
