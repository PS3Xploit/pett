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
				g_fopen_write_close=0x416AE8;
				g_mount_hdd1=0x61F9FC;
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
				g_fopen_write_close=0x418F20;
				g_mount_hdd1=0x622084;
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
				g_fopen_write_close=0x418F58;
				g_mount_hdd1=0x6220C0;
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
				g_fopen_write_close=0x41F70C;
				g_mount_hdd1=0x62B248;
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
				g_fopen_write_close=0x41F43C;
				g_mount_hdd1=0x62AF7C;
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
				g_fopen_write_close=0x41F4A4;
				g_mount_hdd1=0x62AFF0;
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
				g_fopen_write_close=0x420A78;
				g_mount_hdd1=0x62CA38;
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
				g_fopen_write_close=0x420A7C;
				g_mount_hdd1=0x62CA40;
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
				g_fopen_write_close=0x422B08;
				g_mount_hdd1=0x62EE00;
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
				g_fopen_write_close=0x422B0C;
				g_mount_hdd1=0x62EE08;
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
				g_fopen_write_close=0x423714;
				g_mount_hdd1=0x62FA20;
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
				g_fopen_write_close=0x423714;
				g_mount_hdd1=0x62FA20;
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
				g_fopen_write_close=0x42291C;
				g_mount_hdd1=0x62EF44;
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
				g_fopen_write_close=0x422CA0;
				g_mount_hdd1=0x62F32C;
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
				g_fopen_write_close=0x423A8C;
				g_mount_hdd1=0x630118;
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
				g_fopen_write_close=0x425708;
				g_mount_hdd1=0x633C58;
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
				g_fopen_write_close=0x425764;
				g_mount_hdd1=0x633CB8;
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
				g_fopen_write_close=0x425764;
				g_mount_hdd1=0x633FD8;
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
				g_fopen_write_close=0x425F6C;
				g_mount_hdd1=0x634B48;
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
				g_fopen_write_close=0x426528;
				g_mount_hdd1=0x6333A8;
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
				g_fopen_write_close=0x426528;
				g_mount_hdd1=0x6333A8;
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
				g_fopen_write_close=0x423798;
				g_mount_hdd1=0x6306A4;
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
				g_sc_80=0x0D9684;
				g_sc_90=0x42C780;
				g_sc_A0=0x1705D8;
				g_sc_set_r3_from_r9=g_1-0x4;
				g_sc_set_r3_from_r10=0x31FA94;
				g_fopen_write_close=0x423B20;
				g_mount_hdd1=0x63114C;
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
						g_fopen_write_close=0x423B14;
						g_mount_hdd1=0x631160;
						g_unk_game_debug_pafjob=0x0D103C;
						g_mount_flash=0x602B88;
						g_init_reboot=0x0C526C;
						g_init_shutdown=0x0C5234;
						g_exit_chain=0x2BACB4;
						//showOffsets();
					} else {
						// DEX
						vshType="DEX";
						addr_idps=0x735F98;
						g_toc=0x705610;
						g_1=0x0DEBD8;
						g_2=0x0976BC;
						g_set_r4_thru_r11=0x6161B8;
						g_set_high_only=g_set_r4_thru_r11+0x7C;
						g_set_r3_from_r29=0x43552C;
						g_set_r3_with_ld=0x1A43FC;
						g_set_r5_from_r29=0x4C7EF0;
						//g_set_r31_E8=0x62ABD8;
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
						g_fopen_write_close=0x42B708;
						//g_fsopen_write_close=0x280450;
						//g_fsopen_write_close=0x25E850;
						//g_fsopen_write_close=0x0E11EC;
						g_mount_hdd1=0x638D7C;
						g_unk_game_debug_pafjob=0x0D64DC;
						//g_tty_write=0x0AD31C;
						g_init_reboot=0x0C6768;
						g_init_shutdown=0x0C6730;
						//g_exit_chain=0x30FD38;
						g_exit_chain=0x2C24DC;
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
					g_set_r31_F8=0x6275CC;
					g_set_r31_108=0x628794;
					g_sc_80=0x0D9684;
					g_sc_90=0x42C778;
					g_sc_A0=0x1705D8;
					g_sc_set_r3_from_r9=g_1-0x4;
					g_sc_set_r3_from_r10=0x31FA8C;
					g_fopen_write_close=0x423B18;
					g_mount_hdd1=0x631AFC;
					g_unk_game_debug_pafjob=0x0D103C;
					g_init_reboot=0x0C526C;
					g_init_shutdown=0x0C5234;
					g_exit_chain=0x2BACB8;
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
