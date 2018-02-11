/*
   Memory Map PS3 DEX While Browser Is Running
*/


// Memory Locations
// unk_vsh_data = unknown data
// unk_vsh_invalid = invalid data (all FF's)
// unk_vsh_empty = unallocated area (all DD's)
var fullmem_v481D = [

	{ comment: 'unk_vsh_invalid_00719C20', memsize: '0x000013CB', start: '0x00719C20', stop: '0x0071AFEB' },
	{ comment: 'unk_vsh_data_00719BEC', memsize: '0x00000033', start: '0x00719BEC', stop: '0x00719C1F' },
	{ comment: 'unk_vsh_data_00718668', memsize: '0x00001184', start: '0x00718668', stop: '0x007197EC' },
	{ comment: 'unk_vsh_data_00718388', memsize: '0x000002DF', start: '0x00718388', stop: '0x00718667' },
	{ comment: 'vsh_elf', memsize: '0x00708387', start: '0x00010000', stop: '0x00718387' },
	{ comment: 'unk_vsh_data_00000000', memsize: '0x0000FFFF', start: '0x00000000', stop: '0x0000FFFF' }


]


// IDPS Locations
var idps_v481D = [

	{ memsize: '0x10', start: '0x00735F98', stop: '0x00735FA7' }

]



// Module Segments Info .data

// Flags
// 0x400005: PPU (EXEC|READ) SPU (READ)
// 0x400007: PPU (EXEC|WRITE|READ) SPU (READ)
// 0x600006: PPU (WRITE|READ) SPU (WRITE|READ)
var segments_data_v481D = [
	{ name: 'basic_plugins_module', memsize: '0x619C', filesize: '0x2714', start: '0xAD0000', end: '0xAD619C', flags: '0x600006', alignment: '16' },
	{ name: 'cat_setting_plugin_module', memsize: '0x79C', filesize: '0x734', start: '0x11D0000', end: '0x11D079C', flags: '0x600006', alignment: '16' },
	{ name: 'cell_libac3dec_lib', memsize: '0x150', filesize: '0x144', start: '0x900000', end: '0x900150', flags: '0x600006', alignment: '16' },
	{ name: 'cellAdec_Library', memsize: '0x3F0', filesize: '0x3EC', start: '0x8B0000', end: '0x8B03F0', flags: '0x600006', alignment: '16' },
	{ name: 'cellAsfParser2_Library', memsize: '0x970', filesize: '0x964', start: '0xF90000', end: '0xF90970', flags: '0x600006', alignment: '16' },
	{ name: 'cellAtrac_Library', memsize: '0x210', filesize: '0x20C', start: '0xF10000', end: '0xF10210', flags: '0x600006', alignment: '16' },
	{ name: 'cellAtrac3dec_Library', memsize: '0x480', filesize: '0x474', start: '0xD30000', end: '0xD30480', flags: '0x600006', alignment: '16' },
	{ name: 'cellAtracXdec_Library', memsize: '0x600', filesize: '0x5F4', start: '0xD10000', end: '0xD10600', flags: '0x600006', alignment: '16' },
	{ name: 'cellDmux_Library', memsize: '0x140', filesize: '0x134', start: '0xBF0000', end: '0xBF0140', flags: '0x600006', alignment: '16' },
	{ name: 'cellDmuxPamf_Library', memsize: '0x2E0', filesize: '0x2E0', start: '0xC10000', end: '0xC102E0', flags: '0x600006', alignment: '16' },
	{ name: 'cellGifDec_Library', memsize: '0x630', filesize: '0x224', start: '0x1450000', end: '0x1450630', flags: '0x600006', alignment: '16' },
	{ name: 'cellJpgDec_Library', memsize: '0xC80', filesize: '0xC7C', start: '0xAE0000', end: '0xAE0C80', flags: '0x600006', alignment: '16' },
	{ name: 'cellM4AacDec_Library', memsize: '0x84E0', filesize: '0x84DC', start: '0x1720000', end: '0x17284E0', flags: '0x600006', alignment: '128' },
	{ name: 'cellMP3dec_Library', memsize: '0x4B0', filesize: '0x4A4', start: '0x1760000', end: '0x17604B0', flags: '0x600006', alignment: '16' },
	{ name: 'cellMtp_Library', memsize: '0x1904', filesize: '0xB44', start: '0x12B0000', end: '0x12B1904', flags: '0x600006', alignment: '16' },
	{ name: 'cellPamf_Library', memsize: '0x294', filesize: '0x290', start: '0xCD0000', end: '0xCD0294', flags: '0x600006', alignment: '16' },
	{ name: 'cellSre_Library', memsize: '0x4340', filesize: '0x3FE0', start: '0x890000', end: '0x894340', flags: '0x600006', alignment: '128' },
	{ name: 'cellTiffDec_Library', memsize: '0x3F20', filesize: '0x3B58', start: '0x14E0000', end: '0x14E3F20', flags: '0x600006', alignment: '16' },
	{ name: 'custom_render_module', memsize: '0x6A40', filesize: '0x3D84', start: '0xB60000', end: '0xB66A40', flags: '0x600006', alignment: '16' },
	{ name: 'eseidle_module', memsize: '0x5218', filesize: '0xD4', start: '0x11B0000', end: '0x11B5218', flags: '0x600006', alignment: '16' },
	{ name: 'explore_plugin_module', memsize: '0x66E50', filesize: '0x4FCD8', start: '0x19F0000', end: '0x1A56E50', flags: '0x600006', alignment: '16' },
	{ name: 'fs_utililty_full', memsize: '0x23DC', filesize: '0x1F74', start: '0xA30000', end: '0xA323DC', flags: '0x600006', alignment: '16' },
	{ name: 'libavcdec_Library', memsize: '0x1138', filesize: '0x1118', start: '0xEF0000', end: '0xEF1138', flags: '0x600006', alignment: '16' },
	{ name: 'libsmvd4_Library', memsize: '0x380', filesize: '0x380', start: '0xF60000', end: '0xF60380', flags: '0x600006', alignment: '128' },
	{ name: 'libvdec_Library', memsize: '0xE50', filesize: '0xE4C', start: '0xAF0000', end: '0xAF0E50', flags: '0x600006', alignment: '16' },
	{ name: 'mms_db_full_module', memsize: '0xAC0', filesize: '0xA04', start: '0x1390000', end: '0x1390AC0', flags: '0x600006', alignment: '16' },
	{ name: 'mms_ext_full_module', memsize: '0x1000', filesize: '0xFD4', start: '0x1510000', end: '0x1511000', flags: '0x600006', alignment: '16' },
	{ name: 'mms_module', memsize: '0xAC40', filesize: '0x9314', start: '0x1370000', end: '0x137AC40', flags: '0x600006', alignment: '16' },
	{ name: 'msmw1_module', memsize: '0x1354', filesize: '0xC84', start: '0x1000000', end: '0x1001354', flags: '0x600006', alignment: '16' },
	{ name: 'msmw2_module', memsize: '0x4BD54', filesize: '0xA690', start: '0x1150000', end: '0x119BD54', flags: '0x600006', alignment: '16' },
	{ name: 'paf_ext_module', memsize: '0x5C34', filesize: '0x5B04', start: '0x960000', end: '0x965C34', flags: '0x600006', alignment: '16' },
	{ name: 'paf_web_module', memsize: '0x1CD4', filesize: '0x1B54', start: '0xA70000', end: '0xA71CD4', flags: '0x600006', alignment: '16' },
	{ name: 'qgl_base_module', memsize: '0xAF48', filesize: '0x2C44', start: '0x9E0000', end: '0x9EAF48', flags: '0x600006', alignment: '128' },
	{ name: 'sacd_module', memsize: '0x1AD00', filesize: '0x518', start: '0x1230000', end: '0x124AD00', flags: '0x600006', alignment: '128' },
	{ name: 'silk_base_module', memsize: '0x37BD0', filesize: '0x14B34', start: '0x1250000', end: '0x1287BD0', flags: '0x600006', alignment: '16' },
	{ name: 'silk_e_module', memsize: '0x868', filesize: '0x80C', start: '0x1200000', end: '0x1200868', flags: '0x600006', alignment: '16' }, // shared name
	{ name: 'silk_e_module_', memsize: '0x9AC', filesize: '0x950', start: '0x1710000', end: '0x17109AC', flags: '0x600006', alignment: '16' }, // added "_" to name
	{ name: 'silk_npflashplayer9_module', memsize: '0x9D810', filesize: '0x537B0', start: '0x2BF0000', end: '0x2C8D810', flags: '0x600006', alignment: '128' },
	{ name: 'silk_webkit_module', memsize: '0x113924', filesize: '0xFFF10', start: '0x2C90000', end: '0x2DA3924', flags: '0x600006', alignment: '16' },
	{ name: 'silk_wk_module', memsize: '0x54920', filesize: '0x4EF5C', start: '0x2DB0000', end: '0x2E04920', flags: '0x600006', alignment: '16' },
	{ name: 'soundvisualizer_module', memsize: '0x401B8', filesize: '0x4B4', start: '0x13B0000', end: '0x13F01B8', flags: '0x600006', alignment: '16' },
	{ name: 'sys_audio_Library', memsize: '0x3E2E8', filesize: '0x4574', start: '0x820000', end: '0x85E2E8', flags: '0x600006', alignment: '128' },
	{ name: 'vshmain_ext_module', memsize: '0x17C0', filesize: '0x574', start: '0xA00000', end: '0xA017C0', flags: '0x600006', alignment: '128' },
	{ name: 'webrender_plugin_module', memsize: '0xD0D8', filesize: '0xA328', start: '0x11E0000', end: '0x11ED0D8', flags: '0x600006', alignment: '16' },
	{ name: 'x3_amgsdk_module', memsize: '0x570', filesize: '0x224', start: '0x16E0000', end: '0x16E0570', flags: '0x600006', alignment: '16' },
	{ name: 'x3_mdimp1_module', memsize: '0x1BD4', filesize: '0x1944', start: '0x16A0000', end: '0x16A1BD4', flags: '0x600006', alignment: '16' },
	{ name: 'x3_mdimp2_module', memsize: '0xC50', filesize: '0xBC4', start: '0x16C0000', end: '0x16C0C50', flags: '0x600006', alignment: '16' },
	{ name: 'x3_mdimp3_module', memsize: '0x113C', filesize: '0xA04', start: '0x1540000', end: '0x154113C', flags: '0x600006', alignment: '16' },
	{ name: 'x3_mdimp4_module', memsize: '0x1CCC', filesize: '0x1734', start: '0x1570000', end: '0x1571CCC', flags: '0x600006', alignment: '16' },
	{ name: 'x3_mdimp6_module', memsize: '0x26E08', filesize: '0x8040', start: '0x1600000', end: '0x1626E08', flags: '0x600006', alignment: '16' },
	{ name: 'x3_mdimp8_module', memsize: '0x6F4', filesize: '0x494', start: '0x1700000', end: '0x17006F4', flags: '0x600006', alignment: '16' },
	{ name: 'x3_mdimp9_module', memsize: '0x3D8C', filesize: '0x23E4', start: '0x1670000', end: '0x1673D8C', flags: '0x600006', alignment: '16' },
	{ name: 'xmb_plugin_module', memsize: '0x2630', filesize: '0x1B5C', start: '0x1420000', end: '0x1422630', flags: '0x600006', alignment: '16' }
];


// Module Segments Info .text

// Flags
// 0x400005: PPU (EXEC|READ) SPU (READ)
// 0x400007: PPU (EXEC|WRITE|READ) SPU (READ)
// 0x600006: PPU (WRITE|READ) SPU (WRITE|READ)
var segments_text_v481D = [
	{ name: 'basic_plugins_module', memsize: '0x4E898', filesize: '0x4E898', start: '0xA80000', end: '0xACE898', flags: '0x400005', alignment: '16' },
	{ name: 'cat_setting_plugin_module', memsize: '0x8CC0', filesize: '0x8CC0', start: '0x11C0000', end: '0x11C8CC0', flags: '0x400005', alignment: '16' },
	{ name: 'cell_libac3dec_lib', memsize: '0x40000', filesize: '0x1D180', start: '0x8C0000', end: '0x900000', flags: '0x400007', alignment: '128' }, // RWX
	{ name: 'cellAdec_Library', memsize: '0xC400', filesize: '0xC400', start: '0x8A0000', end: '0x8AC400', flags: '0x400007', alignment: '128' }, // RWX
	{ name: 'cellAsfParser2_Library', memsize: '0x1986C', filesize: '0x1986C', start: '0xF70000', end: '0xF8986C', flags: '0x400005', alignment: '16' },
	{ name: 'cellAtrac_Library', memsize: '0x3CE0', filesize: '0x3CE0', start: '0xF00000', end: '0xF03CE0', flags: '0x400005', alignment: '16' },
	{ name: 'cellAtrac3dec_Library', memsize: '0xA580', filesize: '0xA580', start: '0xD20000', end: '0xD2A580', flags: '0x400005', alignment: '128' },
	{ name: 'cellAtracXdec_Library', memsize: '0x29C00', filesize: '0x29C00', start: '0xCE0000', end: '0xD09C00', flags: '0x400005', alignment: '128' },
	{ name: 'cellDmux_Library', memsize: '0x25D0', filesize: '0x25D0', start: '0xB00000', end: '0xB025D0', flags: '0x400005', alignment: '16' },
	{ name: 'cellDmuxPamf_Library', memsize: '0xB880', filesize: '0xB880', start: '0xC00000', end: '0xC0B880', flags: '0x400005', alignment: '128' },
	{ name: 'cellGifDec_Library', memsize: '0x17E00', filesize: '0x17E00', start: '0x1430000', end: '0x1447E00', flags: '0x400007', alignment: '128' }, // RWX
	{ name: 'cellJpgDec_Library', memsize: '0x4B780', filesize: '0x4B780', start: '0xB70000', end: '0xBBB780', flags: '0x400007', alignment: '128' }, // RWX
	{ name: 'cellM4AacDec_Library', memsize: '0x80000', filesize: '0x68300', start: '0x2B70000', end: '0x2BF0000', flags: '0x400007', alignment: '128' }, // RWX
	{ name: 'cellMP3dec_Library', memsize: '0x21700', filesize: '0x21700', start: '0x1730000', end: '0x1751700', flags: '0x400007', alignment: '128' }, // RWX
	{ name: 'cellMtp_Library', memsize: '0x17BC4', filesize: '0x17BC4', start: '0x1290000', end: '0x12A7BC4', flags: '0x400005', alignment: '16' },
	{ name: 'cellPamf_Library', memsize: '0x3C40', filesize: '0x3C40', start: '0xCC0000', end: '0xCC3C40', flags: '0x400005', alignment: '16' },
	{ name: 'cellSre_Library', memsize: '0x30000', filesize: '0x2E000', start: '0x860000', end: '0x890000', flags: '0x400005', alignment: '128' },
	{ name: 'cellTiffDec_Library', memsize: '0x79500', filesize: '0x79500', start: '0x1460000', end: '0x14D9500', flags: '0x400007', alignment: '128' }, // RWX
	{ name: 'custom_render_module', memsize: '0x9C010', filesize: '0x9C010', start: '0xC20000', end: '0xCBC010', flags: '0x400005', alignment: '16' },
	{ name: 'eseidle_module', memsize: '0xD5C', filesize: '0xD5C', start: '0x11A0000', end: '0x11A0D5C', flags: '0x400005', alignment: '16' },
	{ name: 'explore_plugin_module', memsize: '0x279F69', filesize: '0x279F69', start: '0x1770000', end: '0x19E9F69', flags: '0x400005', alignment: '16' },
	{ name: 'fs_utililty_full', memsize: '0x150D0', filesize: '0x150D0', start: '0xA10000', end: '0xA250D0', flags: '0x400005', alignment: '16' },
	{ name: 'libavcdec_Library', memsize: '0x1B0000', filesize: '0x195180', start: '0xD40000', end: '0xEF0000', flags: '0x400007', alignment: '128' }, // RWX
	{ name: 'libsmvd4_Library', memsize: '0x40000', filesize: '0x32B80', start: '0xF20000', end: '0xF60000', flags: '0x400007', alignment: '128' }, // RWX
	{ name: 'libvdec_Library', memsize: '0x30000', filesize: '0x2A500', start: '0xBC0000', end: '0xBF0000', flags: '0x400005', alignment: '128' },
	{ name: 'mms_db_full_module', memsize: '0xABD8', filesize: '0xABD8', start: '0x1380000', end: '0x138ABD8', flags: '0x400005', alignment: '16' },
	{ name: 'mms_ext_full_module', memsize: '0x15AE0', filesize: '0x15AE0', start: '0x14F0000', end: '0x1505AE0', flags: '0x400005', alignment: '16' },
	{ name: 'mms_module', memsize: '0xA9F58', filesize: '0xA9F58', start: '0x12C0000', end: '0x1369F58', flags: '0x400005', alignment: '16' },
	{ name: 'msmw1_module', memsize: '0x5C3D8', filesize: '0x5C3D8', start: '0xFA0000', end: '0xFFC3D8', flags: '0x400005', alignment: '16' },
	{ name: 'msmw2_module', memsize: '0x13B278', filesize: '0x13B278', start: '0x1010000', end: '0x114B278', flags: '0x400005', alignment: '16' },
	{ name: 'paf_ext_module', memsize: '0x42F88', filesize: '0x42F88', start: '0x910000', end: '0x952F88', flags: '0x400005', alignment: '16' },
	{ name: 'paf_web_module', memsize: '0x25908', filesize: '0x25908', start: '0xA40000', end: '0xA65908', flags: '0x400005', alignment: '16' },
	{ name: 'qgl_base_module', memsize: '0x6BBC4', filesize: '0x6BBC4', start: '0x970000', end: '0x9DBBC4', flags: '0x400005', alignment: '16' },
	{ name: 'sacd_module', memsize: '0xA498', filesize: '0xA498', start: '0x1220000', end: '0x122A498', flags: '0x400005', alignment: '16' },
	{ name: 'silk_base_module', memsize: '0xFE1350', filesize: '0xFE1350', start: '0x1B70000', end: '0x2B51350', flags: '0x400005', alignment: '256' },
	{ name: 'silk_e_module', memsize: '0xDEE8', filesize: '0xDEE8', start: '0x11F0000', end: '0x11FDEE8', flags: '0x400005', alignment: '16' }, // shared name
	{ name: 'silk_e_module_', memsize: '0x90C8', filesize: '0x90C8', start: '0x1210000', end: '0x12190C8', flags: '0x400005', alignment: '16' }, // added "_" to name
	{ name: 'silk_npflashplayer9_module', memsize: '0x52FF00', filesize: '0x52FF00', start: '0x2F70000', end: '0x349FF00', flags: '0x400007', alignment: '128' }, // RWX
	{ name: 'silk_webkit_module', memsize: '0xDA1468', filesize: '0xDA1468', start: '0x3770000', end: '0x4511468', flags: '0x400005', alignment: '16' },
	{ name: 'silk_wk_module', memsize: '0x5E6230', filesize: '0x5E6230', start: '0x4770000', end: '0x4D56230', flags: '0x400005', alignment: '16' },
	{ name: 'soundvisualizer_module', memsize: '0x3C90', filesize: '0x3C90', start: '0x13A0000', end: '0x13A3C90', flags: '0x400005', alignment: '16' },
	{ name: 'sys_audio_Library', memsize: '0xAA080', filesize: '0xAA080', start: '0x770000', end: '0x81A080', flags: '0x400005', alignment: '128' },
	{ name: 'vshmain_ext_module', memsize: '0xF520', filesize: '0xF520', start: '0x9F0000', end: '0x9FF520', flags: '0x400005', alignment: '16' },
	{ name: 'webrender_plugin_module', memsize: '0x10AD80', filesize: '0x10AD80', start: '0x1A60000', end: '0x1B6AD80', flags: '0x400007', alignment: '' }, // RWX
	{ name: 'x3_amgsdk_module', memsize: '0xD8B0', filesize: '0xD8B0', start: '0x16D0000', end: '0x16DD8B0', flags: '0x400005', alignment: '16' },
	{ name: 'x3_mdimp1_module', memsize: '0x16C58', filesize: '0x16C58', start: '0x1680000', end: '0x1696C58', flags: '0x400005', alignment: '16' },
	{ name: 'x3_mdimp2_module', memsize: '0xECA4', filesize: '0xECA4', start: '0x16B0000', end: '0x16BECA4', flags: '0x400005', alignment: '16' },
	{ name: 'x3_mdimp3_module', memsize: '0x1A180', filesize: '0x1A180', start: '0x1520000', end: '0x153A180', flags: '0x400005', alignment: '16' },
	{ name: 'x3_mdimp4_module', memsize: '0x1F850', filesize: '0x1F850', start: '0x1550000', end: '0x156F850', flags: '0x400005', alignment: '16' },
	{ name: 'x3_mdimp6_module', memsize: '0x73068', filesize: '0x73068', start: '0x1580000', end: '0x15F3068', flags: '0x400005', alignment: '16' },
	{ name: 'x3_mdimp8_module', memsize: '0x6590', filesize: '0x6590', start: '0x16F0000', end: '0x16F6590', flags: '0x400005', alignment: '16' },
	{ name: 'x3_mdimp9_module', memsize: '0x36B24', filesize: '0x36B24', start: '0x1630000', end: '0x1666B24', flags: '0x400005', alignment: '16' },
	{ name: 'xmb_plugin_module', memsize: '0x1BB34', filesize: '0x1BB34', start: '0x1400000', end: '0x141BB34', flags: '0x400005', alignment: '16' }
];


// Module Segments Info .data
// Not Loaded By Default In Web Browser But Can Be Loaded From Web Browser
var segments_other_data_v481D = [
	{ name: 'cellFt2d', memsize: '0x0', filesize: '0x0', start: '0x0', end: '0x0', flags: '0x0', alignment: '00' }, // Loaded From download_plugin_module on media copy
	{ name: 'cellJpgEnc_Library', memsize: '0x0', filesize: '0x0', start: '0x0', end: '0x0', flags: '0x0', alignment: '00' }, // Loaded From download_plugin_module on media copy
	{ name: 'cellPngEnc_Library', memsize: '0x0', filesize: '0x0', start: '0x0', end: '0x0', flags: '0x0', alignment: '00' }, // Loaded From download_plugin_module on media copy
	{ name: 'download_plugin_module', memsize: '0x101BC', filesize: '0x7328', start: '0x1750000', end: '0x17601BC', flags: '0x600006', alignment: '16' }, // Loaded from browser on media file click
	{ name: 'x3_xcbplugin1_module', memsize: '0x0', filesize: '0x0', start: '0x0', end: '0x0', flags: '0x0', alignment: '00' }, // Loaded From download_plugin_module on media copy
];


// Module Segments Info .text
// Not Loaded By Default In Web Browser But Can Be Loaded From Web Browser
var segments_other_text_v481D = [
	{ name: 'cellFt2d', memsize: '0x0', filesize: '0x0', start: '0x0', end: '0x0', flags: '0x0', alignment: '00' }, // Loaded From download_plugin_module on media copy
	{ name: 'cellJpgEnc_Library', memsize: '0x0', filesize: '0x0', start: '0x0', end: '0x0', flags: '0x0', alignment: '00' }, // Loaded From download_plugin_module on media copy
	{ name: 'cellPngEnc_Library', memsize: '0x0', filesize: '0x0', start: '0x0', end: '0x0', flags: '0x0', alignment: '00' }, // Loaded From download_plugin_module on media copy
	{ name: 'download_plugin_module', memsize: '0x51168', filesize: '0x51168', start: '0x2E40000', end: '0x2E91168', flags: '0x400005', alignment: '16' }, // Loaded from browser on media file click
	{ name: 'x3_xcbplugin1_module', memsize: '0x0', filesize: '0x0', start: '0x0', end: '0x0', flags: '0x0', alignment: '00' }, // Loaded From download_plugin_module on media copy
];


// Kernel Modules Loaded
// Not Loaded By Default In Web Browser But Can Be Loaded From Web Browser
var modules_other_v481D = [
	
	{ name: 'cellFt2d', memsize: '0x278D0', start: '0x0', stop: '0x0', prx: '' }, // Loaded From download_plugin_module on media copy
	{ name: 'cellJpgEnc_Library', memsize: '0x3D910', start: '0x0', stop: '0x0', prx: '' }, // Loaded From download_plugin_module on media copy
	{ name: 'cellPngEnc_Library', memsize: '0x3A090', start: '0x0', stop: '0x0', prx: '' }, // Loaded From download_plugin_module on media copy
	{ name: 'download_plugin_module', memsize: '0x61324', start: '0x01751090', stop: '0x017510C0', prx: '/dev_flash/vsh/module/download_plugin.sprx' }, // Loaded from browser on media file click
	{ name: 'x3_xcbplugin1_module', memsize: '0x1D86CC', start: '0x0', stop: '0x0', prx: '' }, // Loaded From download_plugin_module on media copy
];


// Kernel Modules Loaded
var modules_v481D = [
	{ name: 'basic_plugins_module', memsize: '0x54A34', start: '0x00AD1724', stop: '0x00AD171C', prx: '/dev_flash/vsh/module/basic_plugins.sprx' },
	{ name: 'cat_setting_plugin_module', memsize: '0x945C', start: '0x00B40584', stop: '0x00B4057C', prx: '/dev_flash/vsh/module/category_setting_plugin.sprx' },
	{ name: 'cell_libac3dec_lib', memsize: '0x40150', start: '0x00900098', stop: '0x009000A0', prx: '/dev_flash/sys/external/libac3dec.sprx' },
	{ name: 'cellAdec_Library', memsize: '0xC7F0', start: '0x008B0160', stop: '0x008B0168', prx: '/dev_flash/sys/external/libadec.sprx' },
	{ name: 'cellAsfParser2_Library', memsize: '0x1A1DC', start: '0x011F0140', stop: '0x011F0148', prx: '/dev_flash/sys/internal/libasfparser2.sprx' },
	{ name: 'cellAtrac_Library', memsize: '0x3EF0', start: '0x01170020', stop: '0x01170028', prx: '/dev_flash/sys/external/libatrac3plus.sprx' },
	{ name: 'cellAtrac3dec_Library', memsize: '0xAA00', start: '0x00F90090', stop: '0x00F90098', prx: '/dev_flash/sys/external/libat3dec.sprx' },
	{ name: 'cellAtracXdec_Library', memsize: '0x2A200', start: '0x00F70120', stop: '0x00F70128', prx: '/dev_flash/sys/external/libatxdec.sprx' },
	{ name: 'cellDmux_Library', memsize: '0x2710', start: '0x00EF0010', stop: '0x00EF0018', prx: '/dev_flash/sys/external/libdmux.sprx' },
	{ name: 'cellDmuxPamf_Library', memsize: '0xBB60', start: '0x00F100C8', stop: '0x00F100D0', prx: '/dev_flash/sys/external/libdmuxpamf.sprx' },
	{ name: 'cellGifDec_Library', memsize: '0x18430', start: '0x00B50068', stop: '0x00B50070', prx: '/dev_flash/sys/external/libgifdec.sprx' },
	{ name: 'cellJpgDec_Library', memsize: '0x4C400', start: '0x00E902B8', stop: '0x00E902C0', prx: '/dev_flash/sys/external/libjpgdec.sprx' },
	{ name: 'cellM4AacDec_Library', memsize: '0x884E0', start: '0x02B68180', stop: '0x02B68188', prx: '/dev_flash/sys/external/libm4aacdec.sprx' },
	{ name: 'cellMP3dec_Library', memsize: '0x21BB0', start: '0x02C2008C', stop: '0x02C20094', prx: '/dev_flash/sys/external/libmp3dec.sprx' },
	{ name: 'cellMtp_Library', memsize: '0x194C8', start: '0x01310734', stop: '0x0131072C', prx: '/dev_flash/vsh/module/libmtp.sprx' },
	{ name: 'cellPamf_Library', memsize: '0x3ED4', start: '0xFFFFFFFF', stop: '0xFFFFFFFF', prx: '/dev_flash/sys/external/libpamf.sprx' },
	{ name: 'cellSre_Library', memsize: '0x34340', start: '0xFFFFFFFF', stop: '0xFFFFFFFF', prx: '/dev_flash/sys/external/libsre.sprx' },
	{ name: 'cellTiffDec_Library', memsize: '0x7D420', start: '0x00C11828', stop: '0x00C11830', prx: '/dev_flash/sys/internal/libtiffdec.sprx' },
	{ name: 'custom_render_module', memsize: '0xA2A50', start: '0x00B12B98', stop: '0x00B12BA0', prx: '/dev_flash/vsh/module/custom_render_plugin.sprx' },
	{ name: 'eseidle_module', memsize: '0x5F74', start: '0x00B2008C', stop: '0x00B20094', prx: '/dev_flash/vsh/module/eseidle.sprx' },
	{ name: 'explore_plugin_module', memsize: '0x2E0DB9', start: '0x00D6654C', stop: '0x00D6657C', prx: '/dev_flash/vsh/module/explore_plugin.sprx' },
	{ name: 'fs_utililty_full', memsize: '0x174AC', start: '0x00DF192C', stop: '0x00DF1934', prx: '/dev_flash/sys/internal/libfs_utility_full.sprx' },
	{ name: 'libavcdec_Library', memsize: '0x1B1138', start: '0x011507F0', stop: '0x011507E8', prx: '/dev_flash/sys/external/libavcdec.sprx' },
	{ name: 'libsmvd4_Library', memsize: '0x40380', start: '0x011C0108', stop: '0x011C0100', prx: '/dev_flash/sys/external/libsmvd4.sprx' },
	{ name: 'libvdec_Library', memsize: '0x30E50', start: '0x00ED048C', stop: '0x00ED0484', prx: '/dev_flash/sys/external/libvdec.sprx' },
	{ name: 'mms_db_full_module', memsize: '0xB698', start: '0x0134067C', stop: '0x01340674', prx: '/dev_flash/vsh/module/mms_db_full.sprx' },
	{ name: 'mms_ext_full_module', memsize: '0x16AE0', start: '0x015609E4', stop: '0x015609DC', prx: '/dev_flash/vsh/module/mms_ext_full.sprx' },
	{ name: 'mms_module', memsize: '0xB4B98', start: '0x01327904', stop: '0x013278FC', prx: '/dev_flash/vsh/module/mms.sprx' },
	{ name: 'msmw1_module', memsize: '0x5D72C', start: '0x012602E8', stop: '0x012602E0', prx: '/dev_flash/vsh/module/msmw1.sprx' },
	{ name: 'msmw2_module', memsize: '0x186FCC', start: '0x012774C8', stop: '0x012774C0', prx: '/dev_flash/vsh/module/msmw2.sprx' },
	{ name: 'paf_ext_module', memsize: '0x48BBC', start: '0x00964B1C', stop: '0x00964B14', prx: '/dev_flash/vsh/module/paf_ext.sprx' },
	{ name: 'paf_web_module', memsize: '0x275DC', start: '0x00E30D68', stop: '0x00E30D60', prx: '/dev_flash/vsh/module/paf_web.sprx' },
	{ name: 'qgl_base_module', memsize: '0x76B0C', start: '0x009E1A04', stop: '0x009E1A0C', prx: '/dev_flash/vsh/module/qglbase.sprx' },
	{ name: 'sacd_module', memsize: '0x25198', start: '0x012D01C4', stop: '0x012D01CC', prx: '/dev_flash/vsh/module/sacd.sprx' },
	{ name: 'silk_base_module', memsize: '0x1018F20', start: '0x01B0A464', stop: '0x01B0A4CC', prx: '/dev_flash/vsh/module/silk_base.sprx' },
	{ name: 'silk_e_module', memsize: '0xE750', start: '0x01B40350', stop: '0x01B40380', prx: '/dev_flash/vsh/module/silk_mrcommon.sprx' },
	{ name: 'silk_e_module', memsize: '0xE750', start: '0x01B60318', stop: '0x01B60368', prx: '/dev_flash/vsh/module/silk_mrserver.sprx' },
	{ name: 'silk_npflashplayer9_module', memsize: '0x5CD710', start: '0x02C6C7A0', stop: '0x02C6C790', bytes: 'F821FF917C0802A6F8010080480000BD', prx: '/dev_flash/vsh/module/silk_npflashplayer9.sprx' },
	{ name: 'silk_webkit_module', memsize: '0xEB4D8C', start: '0x02D644F4', stop: '0x02D644EC', prx: '/dev_flash/vsh/module/silk_webkit.sprx' },
	{ name: 'silk_wk_module', memsize: '0x63AB50', start: '0x02E13D88', stop: '0x02E13DE8', prx: '/dev_flash/vsh/module/silk_wk.sprx' },
	{ name: 'soundvisualizer_module', memsize: '0x43E48', start: '0x00A202B8', stop: '0x00A202B0', prx: '/dev_flash/vsh/module/soundvisualizer_plugin.sprx' },
	{ name: 'sys_audio_Library', memsize: '0xE8368', start: '0x00821340', stop: '0x00821338', prx: '/dev_flash/sys/internal/sys_audio.sprx' },
	{ name: 'vshmain_ext_module', memsize: '0x10CE0', start: '0x00A00348', stop: '0x00A00340', prx: '/dev_flash/vsh/module/vshmain_ext.sprx' },
	{ name: 'webrender_plugin_module', memsize: '0x117E58', start: '0x00DC6400', stop: '0x00DC6408', prx: '/dev_flash/vsh/module/webrender_plugin.sprx' },
	{ name: 'x3_amgsdk_module', memsize: '0xDE20', start: '0x01730164', stop: '0x0173015C', prx: '/dev_flash/vsh/module/x3_amgsdk.sprx' },
	{ name: 'x3_mdimp1_module', memsize: '0x1882C', start: '0x016F177C', stop: '0x016F1774', prx: '/dev_flash/vsh/module/x3_mdimp1.sprx' },
	{ name: 'x3_mdimp2_module', memsize: '0xF8F4', start: '0x01710AC4', stop: '0x01710ABC', prx: '/dev_flash/vsh/module/x3_mdimp2.sprx' },
	{ name: 'x3_mdimp3_module', memsize: '0x1B2BC', start: '0x015905AC', stop: '0x015905A4', prx: '/dev_flash/vsh/module/x3_mdimp3.sprx' },
	{ name: 'x3_mdimp4_module', memsize: '0x2151C', start: '0x015C1124', stop: '0x015C111C', prx: '/dev_flash/vsh/module/x3_mdimp4.sprx' },
	{ name: 'x3_mdimp6_module', memsize: '0x99E70', start: '0x0165759C', stop: '0x01657594', prx: '/dev_flash/vsh/module/x3_mdimp6.sprx' },
	{ name: 'x3_mdimp8_module', memsize: '0x6C84', start: '0x017503DC', stop: '0x017503D4', prx: '/dev_flash/vsh/module/x3_mdimp8.sprx' },
	{ name: 'x3_mdimp9_module', memsize: '0x3A8B0', start: '0x016C1CF4', stop: '0x016C1CEC', prx: '/dev_flash/vsh/module/x3_mdimp9.sprx' },
	{ name: 'xmb_plugin_module', memsize: '0x1E164', start: '0x00A714FC', stop: '0x00A714F4', prx: '/dev_flash/vsh/module/xmb_plugin.sprx' }
];
//console.table(fullmem_v481D);
//console.table(idps_v481D);
//console.table(modules_v481D);

