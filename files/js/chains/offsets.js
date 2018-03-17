// PS3 Compatibility Check and Gadget Offsets
// PS3Xploit Team 2018 / ps3xploit.com


// Check User Agent Against Firmware Version
function ps3chk(){
	compat_msg_wrong_fw=compat_msg_wrong_fw1 + fwVersion + compat_msg_wrong_fw2;
	compat_msg_success=compat_msg_success1 + fwVersion + compat_msg_success2;

	if (current_minimum_lang_revision != global_minimum_lang_revision)
		alert(gui_incomplete_lang);

	switch (uaStringCheck) {
		case "PLAYSTATION":
			isPlaystation = true;
			break;

		default:
			alert(compat_msg_nops3);
			disableFeatures = true;
			isPlaystation = false;
			document.getElementById("load_rop").disabled=true;
			break;
	}

	if (isPlaystation) {
		
		//alert(experimental);
		
		if (confirm(msg_anti_piracy))
		{
			switch (fwVersion) 
			{
					
				// 4.00 CEX
				case fwCompat[0]:
				vshType="CEX";
				addr_idps=0x000000;
				g_toc=0x6E4C20;
				g_1=0x0D8644;
				g_2=0x096EC0;
				g_set_r4_thru_r11=0x5FE0A0;
				g_set_high_only=g_set_r4_thru_r11+0x7C;
				g_set_r3_from_r29=0x4208A0;
				g_set_r3_with_ld=0x196310;
				g_sc_80=0x0D8644;
				g_sc_90=0x41F6E0;
				g_sc_A0=0x1697BC;
				g_sc_set_r3_from_r9=g_1-0x4;
				g_sc_set_r3_from_r10=0x3113F4;
				e_fopen_write_close=0x416AE8;
				s_mount_hdd1=0x61F9FC;
				g_init_reboot=0x0C4830;
				g_init_shutdown=0x0C47F8;
				g_exit_chain=0x2AA664;
				//showOffsets();
				break;
					
				// 4.10 CEX
				case fwCompat[1]:
				vshType="CEX";
				addr_idps=0x000000;
				g_toc=0x6E4D50;
				g_1=0x0D8634;
				g_2=0x096EC0;
				g_set_r4_thru_r11=0x600728;
				g_set_high_only=g_set_r4_thru_r11+0x7C;
				g_set_r3_from_r29=0x422CD8;
				g_set_r3_with_ld=0x196994;
				g_sc_80=0x0D8634;
				g_sc_90=0x421B18;
				g_sc_A0=0x169E40;
				g_sc_set_r3_from_r9=g_1-0x4;
				g_sc_set_r3_from_r10=0x313824;
				e_fopen_write_close=0x418F20;
				s_mount_hdd1=0x622084;
				g_init_reboot=0x0C4830;
				g_init_shutdown=0x0C47F8;
				g_exit_chain=0x2ACAE0;
				//showOffsets();
				break;
					
				// 4.11 CEX
				case fwCompat[2]:
				vshType="CEX";
				addr_idps=0x000000;
				g_toc=0x6E4D50;
				g_1=0x0D8668;
				g_2=0x096EC0;
				g_set_r4_thru_r11=0x600764;
				g_set_high_only=g_set_r4_thru_r11+0x7C;
				g_set_r3_from_r29=0x422D10;
				g_set_r3_with_ld=0x1969C8;
				g_sc_80=0x0D8668;
				g_sc_90=0x421B50;
				g_sc_A0=0x169E74;
				g_sc_set_r3_from_r9=g_1-0x4;
				g_sc_set_r3_from_r10=0x31385C;
				e_fopen_write_close=0x418F58;
				s_mount_hdd1=0x6220C0;
				g_init_reboot=0x0C4830;
				g_init_shutdown=0x0C47F8;
				g_exit_chain=0x2ACB18;
				//showOffsets();
				break;
					
				// 4.20 CEX
				case fwCompat[3]:
				vshType="CEX";
				addr_idps=0x000000;
				g_toc=0x6F5120;
				g_1=0x0D8FB8;
				g_2=0x0970DC;
				g_set_r4_thru_r11=0x608764;
				g_set_high_only=g_set_r4_thru_r11+0x7C;
				g_set_r3_from_r29=0x4294C4;
				g_set_r3_with_ld=0x19B4C4;
				g_sc_80=0x0D8FB8;
				g_sc_90=0x428304;
				g_sc_A0=0x16E6D8;
				g_sc_set_r3_from_r9=g_1-0x4;
				g_sc_set_r3_from_r10=0x319D48;
				e_fopen_write_close=0x41F70C;
				s_mount_hdd1=0x62B248;
				g_init_reboot=0x0C4D34;
				g_init_shutdown=0x0C4CFC;
				g_exit_chain=0x2B2F8C;
				//showOffsets();
				break;
					
				// 4.21 CEX
				case fwCompat[4]:
				vshType="CEX";
				addr_idps=0x000000;
				g_toc=0x6F5120;
				g_1=0x0D8F68;
				g_2=0x0970DC;
				g_set_r4_thru_r11=0x608498;
				g_set_high_only=g_set_r4_thru_r11+0x7C;
				g_set_r3_from_r29=0x4291F4;
				g_set_r3_with_ld=0x19B4C4;
				g_sc_80=0x0D8F68;
				g_sc_90=0x428034;
				g_sc_A0=0x16E6D8;
				g_sc_set_r3_from_r9=g_1-0x4;
				g_sc_set_r3_from_r10=0x319D4C;
				e_fopen_write_close=0x41F43C;
				s_mount_hdd1=0x62AF7C;
				g_init_reboot=0x0C4D34;
				g_init_shutdown=0x0C4CFC;
				g_exit_chain=0x2B2F90;
				//showOffsets();
				break;
					
				// 4.25 CEX
				case fwCompat[5]:
				vshType="CEX";
				addr_idps=0x000000;
				g_toc=0x6F5128;
				g_1=0x0D8FC0;
				g_2=0x0970DC;
				g_set_r4_thru_r11=0x60850C;
				g_set_high_only=g_set_r4_thru_r11+0x7C;
				g_set_r3_from_r29=0x42925C;
				g_set_r3_with_ld=0x19B4B4;
				g_sc_80=0x0D8FC0;
				g_sc_90=0x42809C;
				g_sc_A0=0x16E6C8;
				g_sc_set_r3_from_r9=g_1-0x4;
				g_sc_set_r3_from_r10=0x319DB4;
				e_fopen_write_close=0x41F4A4;
				s_mount_hdd1=0x62AFF0;
				g_init_reboot=0x0C4D34;
				g_init_shutdown=0x0C4CFC;
				g_exit_chain=0x2B2FF8;
				//showOffsets();
				break;
					
				// 4.30 CEX
				case fwCompat[6]:
				vshType="CEX";
				addr_idps=0x000000;
				g_toc=0x6F5220;
				g_1=0x0D95A0;
				g_2=0x09728C;
				g_set_r4_thru_r11=0x609F54;
				g_set_high_only=g_set_r4_thru_r11+0x7C;
				g_set_r3_from_r29=0x42A830;
				g_set_r3_with_ld=0x19BF94;
				g_sc_80=0x0D95A0;
				g_sc_90=0x429670;
				g_sc_A0=0x16F1A8;
				g_sc_set_r3_from_r9=g_1-0x4;
				g_sc_set_r3_from_r10=0x31AFF0;
				e_fopen_write_close=0x420A78;
				s_mount_hdd1=0x62CA38;
				g_init_reboot=0x0C4EE4;
				g_init_shutdown=0x0C4EAC;
				g_exit_chain=0x2B3AA4;
				//showOffsets();
				break;
					
				// 4.31 CEX
				case fwCompat[7]:
				vshType="CEX";
				addr_idps=0x000000;
				g_toc=0x6F5220;
				g_1=0x0D95A0;
				g_2=0x09728C;
				g_set_r4_thru_r11=0x609F5C;
				g_set_high_only=g_set_r4_thru_r11+0x7C;
				g_set_r3_from_r29=0x42A834;
				g_set_r3_with_ld=0x19BF94;
				g_sc_80=0x0D95A0;
				g_sc_90=0x429674;
				g_sc_A0=0x16F1A8;
				g_sc_set_r3_from_r9=g_1-0x4;
				g_sc_set_r3_from_r10=0x31AFF4;
				e_fopen_write_close=0x420A7C;
				s_mount_hdd1=0x62CA40;
				g_init_reboot=0x0C4EE4;
				g_init_shutdown=0x0C4EAC;
				g_exit_chain=0x2B3AA8;
				//showOffsets();
				break;
					
				// 4.40 CEX
				case fwCompat[8]:
				vshType="CEX";
				addr_idps=0x000000;
				g_toc=0x6F5368;
				g_1=0x0D95A8;
				g_2=0x09728C;
				g_set_r4_thru_r11=0x60C31C;
				g_set_high_only=g_set_r4_thru_r11+0x7C;
				g_set_r3_from_r29=0x42C8C0;
				g_set_r3_with_ld=0x19C09C;
				g_sc_80=0x0D95A8;
				g_sc_90=0x42B700;
				g_sc_A0=0x16F2A4;
				g_sc_set_r3_from_r9=g_1-0x4;
				g_sc_set_r3_from_r10=0x31CA94;
				e_fopen_write_close=0x422B08;
				s_mount_hdd1=0x62EE00;
				g_init_reboot=0x0C4EE4;
				g_init_shutdown=0x0C4EAC;
				g_exit_chain=0x2B4A40;
				//showOffsets();
				break;
					
				// 4.41 CEX
				case fwCompat[9]:
				vshType="CEX";
				addr_idps=0x000000;
				g_toc=0x6F5368;
				g_1=0x0D95A8;
				g_2=0x09728C;
				g_set_r4_thru_r11=0x60C324;
				g_set_high_only=g_set_r4_thru_r11+0x7C;
				g_set_r3_from_r29=0x42C8C4;
				g_set_r3_with_ld=0x19C09C;
				g_sc_80=0x0D95A8;
				g_sc_90=0x42B704;
				g_sc_A0=0x16F2A4;
				g_sc_set_r3_from_r9=g_1-0x4;
				g_sc_set_r3_from_r10=0x31CA98;
				e_fopen_write_close=0x422B0C;
				s_mount_hdd1=0x62EE08;
				g_init_reboot=0x0C4EE4;
				g_init_shutdown=0x0C4EAC;
				g_exit_chain=0x2B4A44;
				//showOffsets();
				break;
					
				// 4.45 CEX
				case fwCompat[10]:
				vshType="CEX";
				addr_idps=0x000000;
				g_toc=0x6F5630;
				g_1=0x0D95A8;
				g_2=0x09728C;
				g_set_r4_thru_r11=0x60CF3C;
				g_set_high_only=g_set_r4_thru_r11+0x7C;
				g_set_r3_from_r29=0x42D4CC;
				g_set_r3_with_ld=0x19C09C;
				g_sc_80=0x0D95A8;
				g_sc_90=0x42C30C;
				g_sc_A0=0x16F2A4;
				g_sc_set_r3_from_r9=g_1-0x4;
				g_sc_set_r3_from_r10=0x31D51C;
				e_fopen_write_close=0x423714;
				s_mount_hdd1=0x62FA20;
				g_init_reboot=0x0C4EE4;
				g_init_shutdown=0x0C4EAC;
				g_exit_chain=0x2B5720;
				//showOffsets();
				break;
					
				// 4.46 CEX
				case fwCompat[11]:
				vshType="CEX";
				addr_idps=0x000000;
				g_toc=0x6F5630;
				g_1=0x0D95A8;
				g_2=0x09728C;
				g_set_r4_thru_r11=0x60CF3C;
				g_set_high_only=g_set_r4_thru_r11+0x7C;
				g_set_r3_from_r29=0x42D4CC;
				g_set_r3_with_ld=0x19C09C;
				g_sc_80=0x0D95A8;
				g_sc_90=0x42C30C;
				g_sc_A0=0x16F2A4;
				g_sc_set_r3_from_r9=g_1-0x4;
				g_sc_set_r3_from_r10=0x31D51C;
				e_fopen_write_close=0x423714;
				s_mount_hdd1=0x62FA20;
				g_init_reboot=0x0C4EE4;
				g_init_shutdown=0x0C4EAC;
				g_exit_chain=0x2B5720;
				//showOffsets();
				break;
					
				// 4.50 CEX
				case fwCompat[12]:
				vshType="CEX";
				addr_idps=0x000000;
				g_toc=0x6F5CB0;
				g_1=0x0D9484;
				g_2=0x09732C;
				g_set_r4_thru_r11=0x60C380;
				g_set_high_only=g_set_r4_thru_r11+0x7C;
				g_set_r3_from_r29=0x42C6D8;
				g_set_r3_with_ld=0x19C2D0;
				g_sc_80=0x0D9484;
				g_sc_90=0x42B514;
				g_sc_A0=0x16F4AC;
				g_sc_set_r3_from_r9=g_1-0x4;
				g_sc_set_r3_from_r10=0x31E94C;
				e_fopen_write_close=0x42291C;
				s_mount_hdd1=0x62EF44;
				g_init_reboot=0x0C4F84;
				g_init_shutdown=0x0C4F4C;
				g_exit_chain=0x2B6E84;
				//showOffsets();
				break;
					
				// 4.53 CEX
				case fwCompat[13]:
				vshType="CEX";
				addr_idps=0x000000;
				g_toc=0x6F5CC8;
				g_1=0x0D94A0;
				g_2=0x09732C;
				g_set_r4_thru_r11=0x60C768;
				g_set_high_only=g_set_r4_thru_r11+0x7C;
				g_set_r3_from_r29=0x42CA5C;
				g_set_r3_with_ld=0x19C300;
				g_sc_80=0x0D94A0;
				g_sc_90=0x42B898;
				g_sc_A0=0x16F4DC;
				g_sc_set_r3_from_r9=g_1-0x4;
				g_sc_set_r3_from_r10=0x31EC40;
				e_fopen_write_close=0x422CA0;
				s_mount_hdd1=0x62F32C;
				g_init_reboot=0x0C4F84;
				g_init_shutdown=0x0C4F4C;
				g_exit_chain=0x2B7160;
				//showOffsets();
				break;
					
				// 4.55 CEX
				case fwCompat[14]:
				vshType="CEX";
				addr_idps=0x000000;
				g_toc=0x6F5CC8;
				g_1=0x0D9450;
				g_2=0x09732C;
				g_set_r4_thru_r11=0x60D554;
				g_set_high_only=g_set_r4_thru_r11+0x7C;
				g_set_r3_from_r29=0x42D848;
				g_set_r3_with_ld=0x19C300;
				g_sc_80=0x0D9450;
				g_sc_90=0x42C684;
				g_sc_A0=0x16F4DC;
				g_sc_set_r3_from_r9=g_1-0x4;
				g_sc_set_r3_from_r10=0x31FA2C;
				e_fopen_write_close=0x423A8C;
				s_mount_hdd1=0x630118;
				g_init_reboot=0x0C4F84;
				g_init_shutdown=0x0C4F4C;
				g_exit_chain=0x2B7F4C;
				//showOffsets();
				break;
					
				// 4.60 CEX
				case fwCompat[15]:
				vshType="CEX";
				addr_idps=0x000000;
				g_toc=0x6F5DA8;
				g_1=0x0D9468;
				g_2=0x0972E4;
				g_set_r4_thru_r11=0x611094;
				g_set_high_only=g_set_r4_thru_r11+0x7C;
				g_set_r3_from_r29=0x42F52C;
				g_set_r3_with_ld=0x19D0BC;
				g_sc_80=0x0D9468;
				g_sc_90=0x42E368;
				g_sc_A0=0x170294;
				g_sc_set_r3_from_r9=g_1-0x4;
				g_sc_set_r3_from_r10=0x3216BC;
				e_fopen_write_close=0x425708;
				s_mount_hdd1=0x633C58;
				g_init_reboot=0x0C4F4C;
				g_init_shutdown=0x0C4F14;
				g_exit_chain=0x2B9680;
				//showOffsets();
				break;
					
				// 4.65 CEX
				case fwCompat[16]:
				vshType="CEX";
				addr_idps=0x000000;
				g_toc=0x6F5DB0;
				g_1=0x0D9468;
				g_2=0x0972E4;
				g_set_r4_thru_r11=0x6110F4;
				g_set_high_only=g_set_r4_thru_r11+0x7C;
				g_set_r3_from_r29=0x42F588;
				g_set_r3_with_ld=0x19D114;
				g_sc_80=0x0D9468;
				g_sc_90=0x42E3C4;
				g_sc_A0=0x1702EC;
				g_sc_set_r3_from_r9=g_1-0x4;
				g_sc_set_r3_from_r10=0x321718;
				e_fopen_write_close=0x425764;
				s_mount_hdd1=0x633CB8;
				g_init_reboot=0x0C4F4C;
				g_init_shutdown=0x0C4F14;
				g_exit_chain=0x2B96DC;
				//showOffsets();
				break;
					
				// 4.66 CEX
				case fwCompat[17]:
				vshType="CEX";
				addr_idps=0x715BB8;
				g_toc=0x6F5DC0;
				g_1=0x0D9468;
				g_2=0x0972E4;
				g_set_r4_thru_r11=0x611414;
				g_set_high_only=g_set_r4_thru_r11+0x7C;
				g_set_r3_from_r29=0x42F588;
				g_set_r3_with_ld=0x19D114;
				g_sc_80=0x0D9468;
				g_sc_90=0x42E3C4;
				g_sc_A0=0x1702EC;
				g_sc_set_r3_from_r9=g_1-0x4;
				g_sc_set_r3_from_r10=0x321718;
				e_fopen_write_close=0x425764;
				s_mount_hdd1=0x633FD8;
				g_init_reboot=0x0C4F4C;
				g_init_shutdown=0x0C4F14;
				g_exit_chain=0x2B96DC;
				//showOffsets();
				break;
					
				// 4.70 CEX
				case fwCompat[18]:
				vshType="CEX";
				addr_idps=0x000000;
				g_toc=0x6F5E30;
				g_1=0x0D9364;
				g_2=0x0972E4;
				g_set_r4_thru_r11=0x611F84;
				g_set_high_only=g_set_r4_thru_r11+0x7C;
				g_set_r3_from_r29=0x42FD90;
				g_set_r3_with_ld=0x19D07C;
				g_sc_80=0x0D9364;
				g_sc_90=0x42EBCC;
				g_sc_A0=0x1702A4;
				g_sc_set_r3_from_r9=g_1-0x4;
				g_sc_set_r3_from_r10=0x321EE0;
				e_fopen_write_close=0x425F6C;
				s_mount_hdd1=0x634B48;
				g_init_reboot=0x0C4F4C;
				g_init_shutdown=0x0C4F14;
				g_exit_chain=0x2B9EB4;
				//showOffsets();
				break;
					
				// 4.75 CEX
				case fwCompat[19]:
				vshType="CEX";
				addr_idps=0x000000;
				g_toc=0x6F57E8;
				g_1=0x0D9364;
				g_2=0x0972E4;
				g_set_r4_thru_r11=0x6107E4;
				g_set_high_only=g_set_r4_thru_r11+0x7C;
				g_set_r3_from_r29=0x43034C;
				g_set_r3_with_ld=0x19D078;
				g_sc_80=0x0D9364;
				g_sc_90=0x42F188;
				g_sc_A0=0x1702A0;
				g_sc_set_r3_from_r9=g_1-0x4;
				g_sc_set_r3_from_r10=0x32249C;
				e_fopen_write_close=0x426528;
				s_mount_hdd1=0x6333A8;
				g_init_reboot=0x0C4F4C;
				g_init_shutdown=0x0C4F14;
				g_exit_chain=0x2BA470;
				//showOffsets();
				break;
					
				// 4.76 CEX
				case fwCompat[20]:
				vshType="CEX";
				addr_idps=0x000000;
				g_toc=0x6F57E8;
				g_1=0x0D9364;
				g_2=0x0972E4;
				g_set_r4_thru_r11=0x6107E4;
				g_set_high_only=g_set_r4_thru_r11+0x7C;
				g_set_r3_from_r29=0x43034C;
				g_set_r3_with_ld=0x19D078;
				g_sc_80=0x0D9364;
				g_sc_90=0x42F188;
				g_sc_A0=0x1702A0;
				g_sc_set_r3_from_r9=g_1-0x4;
				g_sc_set_r3_from_r10=0x32249C;
				e_fopen_write_close=0x426528;
				s_mount_hdd1=0x6333A8;
				g_init_reboot=0x0C4F4C;
				g_init_shutdown=0x0C4F14;
				g_exit_chain=0x2BA470;
				//showOffsets();
				break;
					
				// 4.78 CEX
				case fwCompat[21]:
				vshType="CEX";
				addr_idps=0x000000;
				g_toc=0x6F5780;
				g_1=0x0D9364;
				g_2=0x0972E4;
				g_set_r4_thru_r11=0x60DAE0;
				g_set_high_only=g_set_r4_thru_r11+0x7C;
				g_set_r3_from_r29=0x42D5BC;
				g_set_r3_with_ld=0x19D078;
				g_sc_80=0x0D9364;
				g_sc_90=0x42C3F8;
				g_sc_A0=0x1702A0;
				g_sc_set_r3_from_r9=g_1-0x4;
				g_sc_set_r3_from_r10=0x31F70C;
				e_fopen_write_close=0x423798;
				s_mount_hdd1=0x6306A4;
				g_init_reboot=0x0C4F4C;
				g_init_shutdown=0x0C4F14;
				g_exit_chain=0x2BA968;
				//showOffsets();
				break;
					
				// 4.80 CEX
				case fwCompat[22]:
				vshType="CEX";
				addr_idps=0x000000;
				g_toc=0x6F5520;
				g_1=0x0D9684;
				g_2=0x097604;
				g_set_r4_thru_r11=0x60E588;
				g_set_high_only=g_set_r4_thru_r11+0x7C;
				g_set_r3_from_r29=0x42D944;
				g_set_r3_with_ld=0x19D3B0;
				g_set_r5_from_r29=0x054AF0;
				g_sc_80=0x0D9684;
				g_sc_90=0x42C780;
				g_sc_A0=0x1705D8;
				g_sc_set_r3_from_r9=g_1-0x4;
				g_sc_set_r3_from_r10=0x31FA94;
				e_fopen_write_close=0x423B20;
				s_mount_hdd1=0x63114C;
				g_init_reboot=0x0C526C;
				g_init_shutdown=0x0C5234;
				g_exit_chain=0x2BACB0;
				//showOffsets();
				break;
				
				// 4.81
				case fwCompat[23]:
				   //alert(compat_msg_success);
					
					if (confirm(msg_select_vsh_type)) {
						
						// CEX
						vshType="CEX";
						addr_idps=0x725608;
						g_toc=0x6F5520;
						g_1=0x0D9684;
						g_2=0x097604;
						g_set_r4_thru_r11=0x60E59C;
						g_set_high_only=g_set_r4_thru_r11+0x7C;
						g_set_r3_from_r29=0x42D938;
						g_set_r3_with_ld=0x19D3B0;
						g_set_r31_F8=0x626C30;
						g_set_r31_108=0x627DF8;
						g_sc_80=0x0D9684;
						g_sc_90=0x42C774;
						g_sc_A0=0x1705D8;
						g_sc_set_r3_from_r9=g_1-0x4;
						g_sc_set_r3_from_r10=0x31FA88;
						e_fopen_write_close=0x423B14;
						s_mount_hdd1=0x631160;
						s_unk_game_debug_pafjob=0x0D103C;
						g_mount_flash=0x602B88;
						g_init_reboot=0x0C526C;
						g_init_shutdown=0x0C5234;
						g_exit_chain=0x2BACB4;
					
						g_printf=0x59A0AC;
						//showOffsets();
					} else {
						// DEX
						vshType="DEX";
						addr_idps=0x735F98;
						
						// TOC
						g_toc=0x705610;
						t_disc_load_alloc=0xD008100F;
						
						g_1=0x0DEBD8;
						g_2=0x0976BC;
						g_set_r4_thru_r11=0x6161B8;
						g_set_high_only=g_set_r4_thru_r11+0x7C;
						g_set_r0_from_r31=0x34D400;
						g_set_r3_from_r29=0x43552C;
						g_set_r3_with_ld=0x1A43FC;
						g_set_r3_with_lwz_from_r31=0x37F0CC;
						g_set_r5_from_r29=0x054BA8;
						g_set_r5_from_r29_alt=0x4C7EF0;
						g_set_r5_from_r31=0x1BD760;
						g_set_r5_from_r31_alt1=0x136EB0;
						g_set_r5_from_r31_alt2=0x045190;
						g_set_r6_from_r31=0x428DD4;
						g_set_r7_from_r31=0x428DCC;
						//g_set_r31_E8=0x62ABD8;
						g_set_r12_110=0x029F8C;
						g_set_r31_F8=0x62E84C;
						g_set_r31_108=0x62FA14;
						//g_set_r3_with_ld=0x7A00CC;
						//g_set_r3_and_clear=0x09F604;
						//g_set_r3_and_sc=0x208500;
						//g_set_r20_thru_r31=0x208538;
						//g_set_r31_from_r23=0x5D7940;
						//g_store_r3_into_r31=0x616204;
						g_sc_80=0x0DEBD8;
						g_sc_90=0x434368;
						g_sc_A0=0x177684;
						g_sc_set_r3_from_r9=g_1-0x4;
						g_sc_set_r3_from_r10=0x327298;
						g_sc_set_r3_with_lwz_from_r31=0x1BAC30;// alternate 0x3A4C28
						g_disc_load_cmp_stackframe=0xD010BC14;
						
						g_default_user_login_id=0x491574;
						g_printf=0x5A1CA0;
						//g_printf2=0x536CF0;
						//g_printf3=0x1C23C8;
						//g_unk_lwmutex_lock=0x0ACF30;
						//g_unk_r11_compare=0x18BDB4;
						
						// Exits
						g_init_reboot=0x0C6768;
						g_init_shutdown=0x0C6730;
						//g_exit_chain=0x30FD38;
						g_exit_chain=0x2C24DC;
						
						// Subs
						s_cellfs_rw=0x24BB3C;// 0x24BAF8;
						//s_cellfs_read=0x580EA8;
						//s_cellfs_write=0x524984;
						s_create_new_user=0x0D27E8;
						s_disc_load_check_type1=0x519C00;
						s_disc_load_check_type2=0x51E5E0;
						s_disc_load_check_type3=0x6396C4;
						s_disc_load_check=0x51E6B0;
						//s_unk_bg_download1=0x32A6F4;
						//s_unk_bg_download2=0x32A77C;
						//s_unk_download_exec_kind=0x0F8544;
						s_mount_hdd1=0x638D7C;
						//s_ps_button_bp=0x12FB14;
						s_remove_act_dat=0x259120;
						s_remove_exdata=0x25A638;
						s_start_busy_icon=0x0DD944;
						//s_sys_ppu_thread_detach=0x51A0B4;
						//s_sys_ppu_thread_detach_sleep=0x51A150;
						//s_sys_rwlock_wlock_unlock=0x635F38;
						//s_sys_spu_image_close=0x612610;
						//s_sys_spu_image_get_information=0x612100;
						//s_sys_spu_image_import=0x612A28;
						//s_sys_spu_initialize=0x0CEE2C;
						//s_sys_spu_thread_group_create=0x443BF8;
						//s_sys_spu_thread_initialize=0x443B58;
						//s_sys_spu_thread_group_join=0x443C18;
						//s_sys_spu_thread_group_start=0x444C6C;
						s_unk_act_dat=0x25D710;// 0x25872C;
						//s_unk_bdvd_ps3_hdd_cache=0x544374;
						s_unk_black_screen=0x0D7458;
						s_unk_blue_screen=0x0DA588;
						//s_unk_create_new_user2=0x0DA588;
						//s_unk_create_new_user3=0x0D28D4;
						//s_unk_flash2_post_update=0x0DFDD4;
						//s_unk_game_exec=0x1316E4;
						s_unk_game_application=0x60D8F4;
						s_unk_game_debug_pafjob=0x0D64DC;
						//s_unk_manager_signout=0x0FC354;
						s_unk_mount_hdd=0x0DF64C;
						//s_unk_network=0x3333E4;
						//s_unk_network_printf=0x0CB6CC;
						//s_unk_np_debug=0x1C2308;
						//s_unk_npmt=0x0FDFA8;
						//s_unk_npmt2=0x0FDF7C;
						//s_unk_r9_fix=0x443C38;
						//s_sys_event_queue_drain=0x287E5C;
						//s_unk_sys_util=0x146E70;// screws with network connection
						//s_unk_port_send_destroy=0x0AD258;
						//s_unk_port_timer_send_destroy=0x14C448;
						//s_unk_premo_plugin=0x0D2160;
						//s_unk_psx_ps2=0x544788;
						s_unk_rsx_device_map=0x03EB6C;
						s_unk_sys_trace=0x0C6614;// 0x0C37A8
						s_unk_thread_exit=0x43448C;// 0x434454
						//s_unk_thread_sc37=0x0CEE4C;
						//s_unk_tty_write=0x0AD31C;
						//s_unk_upload_util=0x16EB30;
						//s_unk_widget=0x36743C;
						
						// Exports
						e_cellfs_closedir=0x62C22C;
						e_cellfs_opendir=0x62C0FC;
						e_cellfs_readdir=0x62C1D4;
						e_fopen_write_close=0x42B708;
						e_memset=0x03FF78;// 0x61AB58
						//e_fs_open_write_close=0x25D1B8;
						e_stdc_opendir=0x0ADEDC;
						e_stdc_readdir=0x0ADC58;
						e_sys_free=0x6125F0;
						//e_sys_spu_image_close=0x6125C8;
						//e_unk_boot2=0x516FF4;
						//e_unk_game_plugin=0x357BB0;
						e_unk_vsh_printf=0x0CB72C;// 0x0A14B8
						e_unk_xmb_plugin=0x0DE748;
						e_turnoff=0x0CD764;// 0x0D673C
						//e_turnoff2=0x0CD62C;
						e_update_mgr_get_status=0x5FCAEC;
						
						// Unsorted/New
						//g_fsopen_write_close=0x280450;
						//g_fsopen_write_close=0x25E850;
						//g_fsopen_write_close=0x0E11EC;
						//g_cellfs_open_write_close1=0x27F8A4;
						//g_unk_user_id1=0x0FB340;
						//g_unk_user_id2=0x1981D4;
						//g_unk_registry1=0x536D70;
						//g_unk_registry_backup=0x5379CC;
						//g_unk_registry_restore=0x537AE0;
						//g_unk_explore_plugin_bin=0x15E524;
						//g_unk_psp_rif=0x256BE0;
						//g_unk_login_xmb=0x0DD7C0;
						//g_xmb_restore=0x0DE27C;
						//g_unk_pkg1=0x327F1C;
						//g_unk_sync=0x3296A8;
						//g_unk_post_update1=0x0CFDE4;
						//g_unk_post_update2=0x0D8BB8;
						//g_unk_crash_report1=0x0DFA24;
						//g_unk_http_client=0x1BC6E4;
						//g_unk_fsck=0x0DF2C0;
						//g_unk_debug1=0x0CA978;
						//g_tty_write=0x0AD31C;
						//g_unk_alpha_numeric=0x544F64;
						//g_unk_act_dat1=0x258D58;
						//g_unk_act_dat2=0x25938C;
						//g_unk_rif1=0x25A728;
						//g_unk_rif2=0x25A820;
						//g_unk_rif3=0x25AB60;
						//g_unk_exdata_edat1=0x25ACBC;
						//g_unk_thread1=0x11B8AC;
						//g_unk_prx1=0x61EA18;
						//g_unk_mount_bdvd=0x544998;
						//g_unk_mount_fat=0x544BD4;
						//g_unk_display_res1=0x0C88F8;
						//g_unk_display_res2=0x1508A8;
						//g_unk_game_res=0x0CA1BC;
						//g_unk_update_game_data=0x1300B4;
						
						//showOffsets();
					}
					
					break;
					
				// 4.82 CEX
				case fwCompat[24]:
					vshType="CEX";
					addr_idps=0x725A38;
					g_toc=0x6F5550;
					g_1=0x0D9684;
					g_2=0x097604;
					g_set_r4_thru_r11=0x60EF38;
					g_set_high_only=g_set_r4_thru_r11+0x7C;
					g_set_r3_from_r29=0x42D93C;
					g_set_r3_with_ld=0x19D3B0;
					g_set_r5_from_r29=0x054AF0;
					g_set_r31_F8=0x6275CC;
					g_set_r31_108=0x628794;
					g_sc_80=0x0D9684;
					g_sc_90=0x42C778;
					g_sc_A0=0x1705D8;
					g_sc_set_r3_from_r9=g_1-0x4;
					g_sc_set_r3_from_r10=0x31FA8C;
					e_fopen_write_close=0x423B18;
					s_mount_hdd1=0x631AFC;
					s_unk_game_debug_pafjob=0x0D103C;
					g_init_reboot=0x0C526C;
					g_init_shutdown=0x0C5234;
					g_exit_chain=0x2BACB8;
					
					g_printf=0x59A4B0;
					//showOffsets();
					break;
					
				default:
				alert(compat_msg_wrong_fw);
				disableFeatures = true;
				document.getElementById("load_rop").disabled=true;
				break;
			}
		}
		else
		{
			disableFeatures = true;
			toggleDisableButtons(true);
			document.getElementById("load_rop").disabled=true;
			//break;
		}
		
	}
}

function showOffsets()
{
	alert("Loaded Offsets (1 of 2)\n\n" + "g_toc: 0x" + g_toc.toString(16).toUpperCase() + "\ng_1: 0x" + g_1.toString(16).toUpperCase() + "\ng_2: 0x" + g_2.toString(16).toUpperCase() + "\ng_set_r4_thru_r11: 0x" + g_set_r4_thru_r11.toString(16).toUpperCase() + "\ng_set_r3_from_r29: 0x" + g_set_r3_from_r29.toString(16).toUpperCase());
	alert("Loaded Offsets (2 of 2)\n\n" + "g_sc_80: 0x" + g_sc_80.toString(16).toUpperCase() + "\ng_sc_90: 0x" + g_sc_90.toString(16).toUpperCase() + "\ng_sc_A0: 0x" + g_sc_A0.toString(16).toUpperCase() + "\ng_init_shutdown: 0x" + g_init_shutdown.toString(16).toUpperCase());
}
