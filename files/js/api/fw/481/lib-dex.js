/*
   Resolved library functions PS3 DEX
*/

//push to stack
//stw r3, -4(r1)
//subi r1, r1, 4

//stwu r3, -4(r1)


//pop from stack
//lwz r3, 0(r1)
//addi r1, 4

//sthu r3, -2(r1)
//lhz r4, 0(r1)
//addi r1, r1, 2


//push pop
//stbu r4, -1(r1)
//lbz r3, 0(r1)
//addi r1, r1, 1




// Allocator Functions
allocator_v481D =
{
	allocator_lib_fnid_ptr: 0x006404B0, // ExportFNIDTable_allocator
	allocator_lib_func_ptr: 0x00640530, // ExportStubTable_allocator
	
	// mapped fnid 0x045E124A
	ZdaPv : 0x006FB970,

	// mapped fnid 0x0871FFB0
	malloc_usable_size : 0x006FBCE0,

	// mapped fnid 0x2356EF16
	ZnajRKSt9nothrow_t : 0x006FB990,

	// mapped fnid 0x58B43627
	unk_58B43627 : 0x006FB9B0,

	// mapped fnid 0x6137D196
	memalign : 0x006FB9E8,

	// mapped fnid 0x679E8CAF
	unk_D2B978F5 : 0x006FB9C0,

	// mapped fnid 0x6997B837
	unk_6997B837 : 0x006FBA00,

	// mapped fnid 0x759E0635
	malloc : 0x006FB9C8,

	// mapped fnid 0x77A602DD
	free : 0x006FB9F8,

	// mapped fnid 0x799473AE
	unk_799473AE : 0x006FB9F0,

	// mapped fnid 0x79EADF05
	malloc_usable_size : 0x006FBCE0,

	// mapped fnid 0x83B2CC6F
	Znwj : 0x006FB9A8,

	// mapped fnid 0x96BC2578
	Znajj : 0x006FB980,

	// mapped fnid 0x97C02090
	unk_97C02090 : 0x006FBA10,

	// mapped fnid 0xA72A7595
	calloc : 0x006FB9D8,

	// mapped fnid 0xA830FDD8
	unk_A830FDD8 : 0x006FB9E0,

	// mapped fnid 0xAD382A99
	ZdlPvRKSt9nothrow_t : 0x006FB968,

	// mapped fnid 0xBB712718
	ZnwjRKSt9nothrow_t : 0x006FB998,

	// mapped fnid 0xD2B978F5
	unk_D2B978F5 : 0x006FBA08,

	// mapped fnid 0xD84B3689
	ZdlPv : 0x006FB978,

	// mapped fnid 0xE27B3C01
	unk_E27B3C01 : 0x006FB9D0,

	// mapped fnid 0xED3DA02B
	Znwjj : 0x006FB988,

	// mapped fnid 0xF58E83A5
	Znaj : 0x006FB9A0,

	// mapped fnid 0xF7A14A22
	realloc : 0x006FB9B8
}

// ESE (ESE XML Schema) Cron Functions -> esecron.sprx
// Superseded by esehttp.sprx, eseibrd.sprx, eseidle.sprx, eselock.sprx
esecron_v481D =
{
	lib_fnid_ptr: 0x006459D8, // ExportFNIDTable_esecron
	lib_func_ptr: 0x00645AB4, // ExportStubTable_esecron
	
	// mapped fnid 0x0C8D7A60
	unk_C8D7A60 : 0x006EDC00,

	// mapped fnid 0x179B1B1B
	unk_179B1B1B : 0x006EDB58,

	// mapped fnid 0x2411334A
	unk_2411334A : 0x006EDCA0,

	// mapped fnid 0x25F41731
	unk_25F41731 : 0x006EDB88,

	// mapped fnid 0x2A4D7ACD
	unk_2A4D7ACD : 0x006E6470,

	// mapped fnid 0x3297D3EE
	unk_3297D3EE : 0x006EDB20,

	// mapped fnid 0x40B72ADD
	unk_40B72ADD : 0x006EDBF8,

	// mapped fnid 0x46A581DA
	unk_46A581DA : 0x006EDB98,

	// mapped fnid 0x4CF6B054
	unk_4CF6B054 : 0x006EDB48,

	// mapped fnid 0x4D01506A
	unk_4D01506A : 0x006EDBE0,

	// mapped fnid 0x4FE85D6C
	unk_4FE85D6C : 0x006EDC08,

	// mapped fnid 0x5E01A32F
	unk_5E01A32F : 0x006EDC48,

	// mapped fnid 0x74F5CB82
	unk_74F5CB82 : 0x006EDBC8,

	// mapped fnid 0x79CEFBE1
	unk_79CEFBE1 : 0x006EDB80,

	// mapped fnid 0x7E73AD5B
	unk_7E73AD5B : 0x006EDC30,

	// mapped fnid 0x82183B24
	unk_82183B24 : 0x006EDC50,

	// mapped fnid 0x868B4979
	unk_868B4979 : 0x006EDC98,

	// mapped fnid 0x86B82D21
	unk_86B82D21 : 0x006E64A0,

	// mapped fnid 0x8820FFEB
	unk_8820FFEB : 0x006EDBD0,

	// mapped fnid 0x93598687
	unk_93598687 : 0x006EDB68,

	// mapped fnid 0x950B21DC
	unk_950B21DC : 0x006EDB78,

	// mapped fnid 0x98A9685A
	unk_98A9685A : 0x006EDC20,

	// mapped fnid 0x9D696106
	unk_9D696106 : 0x006EDC58,

	// mapped fnid 0xA6C8D0D6
	unk_A6C8D0D6 : 0x006EDBA8,

	// mapped fnid 0xA99A0363
	unk_A99A0363 : 0x006EDBB0,

	// mapped fnid 0xA9B445F4
	unk_A9B445F4 : 0x006EDC80,

	// mapped fnid 0xAC8A12F4
	unk_AC8A12F4 : 0x006E6488,

	// mapped fnid 0xB2C821A2
	unk_B2C821A2 : 0x006EDB40,

	// mapped fnid 0xB54ACCB4
	unk_B54ACCB4 : 0x006E64A8,

	// mapped fnid 0xB73D973D
	unk_B73D973D : 0x006EDB38,

	// mapped fnid 0xBA3A7D13
	unk_BA3A7D13 : 0x006EDC68,

	// mapped fnid 0xBE665143
	unk_BE665143 : 0x006EDBA0,

	// mapped fnid 0xC1ADE32A
	unk_C1ADE32A : 0x006EDB90,

	// mapped fnid 0xC27118D2
	unk_C27118D2 : 0x006EDC78,

	// mapped fnid 0xC4F2B89E
	unk_C4F2B89E : 0x006EDC88,

	// mapped fnid 0xCCB98541
	unk_CCB98541 : 0x006EDB70,

	// mapped fnid 0xCD29668B
	unk_CD29668B : 0x006EDB18,

	// mapped fnid 0xCFE951EB
	unk_CFE951EB : 0x006EDC90,

	// mapped fnid 0xD0FFE42B
	unk_D0FFE42B : 0x006E6490,

	// mapped fnid 0xD3F58A3B
	unk_D3F58A3B : 0x006EDBC0,

	// mapped fnid 0xD82ACF12
	unk_D82ACF12 : 0x006E6498,

	// mapped fnid 0xD9A09BF9
	unk_D9A09BF9 : 0x006EDC40,

	// mapped fnid 0xEA910DC4
	unk_EA910DC4 : 0x006EDC38,

	// mapped fnid 0xED596460
	unk_ED596460 : 0x006EDC70,

	// mapped fnid 0xEDE5DDD1
	unk_EDE5DDD1 : 0x006EDB60,

	// mapped fnid 0xF421B2ED
	unk_F421B2ED : 0x006EDC10,

	// mapped fnid 0xF9889F5B
	unk_F9889F5B : 0x006EDB50
}

// Net Control Main Functions
netctl_main_v481D =
{
	lib_fnid_ptr: 0x006458B8, // ExportFNIDTable_netctl_main
	lib_func_ptr: 0x00645954, // ExportStubTable_netctl_main
	
	// mapped fnid 0x1237870F
	unk_1237870F : 0x006EDD30,

	// mapped fnid 0x13CD17FB
	unk_13CD17FB : 0x006EDD40,

	// mapped fnid 0x218CFBD3
	unk_218CFBD3 : 0x006EDDC8,

	// mapped fnid 0x23C35ECE
	unk_23C35ECE : 0x006EDD68,

	// mapped fnid 0x2DCA4721
	unk_2DCA4721 : 0x006EDD38,

	// mapped fnid 0x352EFDDF
	unk_352EFDDF : 0x006EDDC0,

	// mapped fnid 0x35A1C363
	unk_35A1C363 : 0x006EDCB8,

	// mapped fnid 0x367EFAA8
	unk_367EFAA8 : 0x006EDE48,

	// mapped fnid 0x38479255
	unk_38479255 : 0x006EDCD8,

	// mapped fnid 0x3A5CB886
	unk_FA020C41 : 0x006EDD78,

	// mapped fnid 0x442F0E40
	unk_442F0E40 : 0x006EDE40, // _Export_sys_net_sys_net_if_ctl reference

	// mapped fnid 0x4B1EE41D
	unk_4B1EE41D : 0x006EDCE0,

	// mapped fnid 0x4E4B734D
	unk_4E4B734D : 0x006EDD60,

	// mapped fnid 0x5101A052
	unk_5101A052 : 0x006EDDA8,

	// mapped fnid 0x55D2047A
	unk_55D2047A : 0x006EDD70,

	// mapped fnid 0x5AB91391
	unk_5AB91391 : 0x006EDDA0,

	// mapped fnid 0x5D1D7803
	unk_5D1D7803 : 0x006EDDB8,

	// mapped fnid 0x5ED42691
	unk_5ED42691 : 0x006EDCC0,

	// mapped fnid 0x61E363B0
	unk_61E363B0 : 0x006EDD98,

	// mapped fnid 0x6F2521E0
	unk_6F2521E0 : 0x006EDD90,

	// mapped fnid 0x6F2D52F1
	unk_6F2D52F1 : 0x006EDD28,

	// mapped fnid 0x8DA844E1
	unk_8DA844E1 : 0x006EDCC8,

	// mapped fnid 0x953F1E14
	unk_953F1E14 : 0x006EDD58,

	// mapped fnid 0x974E50F6
	unk_974E50F6 : 0x006EDD50,

	// mapped fnid 0x9A528B81
	unk_9A528B81 : 0x006EDD88,

	// mapped fnid 0xA111D8FB
	unk_A111D8FB : 0x006EDD48,

	// mapped fnid 0xB7618526
	unk_B7618526 : 0x006EDCD0,

	// mapped fnid 0xC67D3DB3
	unk_C67D3DB3 : 0x006EDCB0, // _Export_sys_net_sys_net_free_thread_context reference

	// mapped fnid 0xEC73B49D
	unk_EC73B49D : 0x006EDD80,

	// mapped fnid 0xECD37366
	unk_ECD37366 : 0x006EDCE8,

	// mapped fnid 0xFA020C41
	unk_FA020C41 : 0x006EDDB0
}


// PNG Decode PPU Only Functions
pngdec_ppuonly_v481D =
{
	lib_fnid_ptr: 0x0064162C, // ExportFNIDTable_pngdec_ppuonly
	lib_func_ptr: 0x0064165C, //ExportStubTable_pngdec_ppuonly
	
	// mapped fnid 0x0C515302
	cellPngDecExtOpen : 0x006FB478,

	// mapped fnid 0x157D30C5
	cellPngDecCreate : 0x006FB428,

	// mapped fnid 0x2310F155
	cellPngDecDecodeData : 0x006FB448,

	// mapped fnid 0x48436B2D
	cellPngDecExtCreate : 0x006FB420,

	// mapped fnid 0x5B3D1FF1
	cellPngDecClose : 0x006FB438,

	// mapped fnid 0x726FC1D0
	cellPngDecExtDecodeData : 0x006FB440,

	// mapped fnid 0x820DAE1A
	cellPngDecDestroy : 0x006FB430,

	// mapped fnid 0x8B33F863
	cellPngDecExtReadHeader : 0x006FB468,

	// mapped fnid 0x9CCDCC95
	cellPngDecReadHeader : 0x006FB470,

	// mapped fnid 0x9E9D7D42
	cellPngDecExtSetParameter : 0x006FB488,

	// mapped fnid 0xD2BC5BFD
	cellPngDecOpen : 0x006FB480,

	// mapped fnid 0xE97C9BD4
	cellPngDecSetParameter : 0x006FB490
}

// Standard C Functions
stdc_v481D =
{
	lib_fnid_ptr: 0x0063FDE4, // ExportFNIDTable_stdc
	lib_func_ptr: 0x00640184, // ExportStubTable_stdc
	
	// mapped fnid 0x00FDE072
	powf : 0x006FBF00,

	// mapped fnid 0x04A183FC
	strcpy : 0x006FC2C0,

	// mapped fnid 0x05EFC660
	asin : 0x006FBD90,

	// mapped fnid 0x0D2A593B
	srand : 0x006FC148,

	// mapped fnid 0x0F428F0F
	rint : 0x006FBE70,

	// mapped fnid 0x116CDA13
	wcstol : 0x006FC240,

	// mapped fnid 0x12A55FB7
	mbrtowc : 0x006FC0D8,

	// mapped fnid 0x1313A420
	acos : 0x006FBD80,

	// mapped fnid 0x153B364A
	mkdir : 0x006FC3F0,

	// mapped fnid 0x15BDCC00
	rand : 0x006FC128,

	// mapped fnid 0x18668CE3
	exp : 0x006FBDD0,

	// mapped fnid 0x19CCBB81
	mktime : 0x006FC100,

	// mapped fnid 0x1A00F889
	ZNSt9exceptionD2Ev : 0x006FBFC8, // std::exception::~exception()

	// mapped fnid 0x21E6D304
	ceil : 0x006FBDC0,

	// mapped fnid 0x23B985F7
	floorf : 0x006FBDF0,

	// mapped fnid 0x24C9E021
	abs : 0x006FBFF0,

	// mapped fnid 0x24F6CBDD
	clock : 0x006FC380,

	// mapped fnid 0x266311A0
	localtime : 0x006FC0D0,

	// mapped fnid 0x2677568C
	putchar : 0x006FC110,

	// mapped fnid 0x26F023D5
	ftell : 0x006FC098,

	// mapped fnid 0x273B9711
	sprintf : 0x006FC330,

	// mapped fnid 0x2B81FB7F
	readdir : 0x006FC430,

	// mapped fnid 0x2D8BE7E8
	ZNKSt9exception6_RaiseEv : 0x006FBFB0, // std::exception::_Raise() const

	// mapped fnid 0x2F45D39C
	strlen : 0x006FC170,

	// mapped fnid 0x31DB8C89
	atan2 : 0x006FBDA8,

	// mapped fnid 0x33D6AE54
	ferror : 0x006FC030,

	// mapped fnid 0x36C067C1
	Stoll : 0x006FC288,

	// mapped fnid 0x38E69F09
	pow : 0x006FBE60,

	// mapped fnid 0x3A210C93
	swscanf : 0x006FC1B8,

	// mapped fnid 0x3A840AE3
	snprintf : 0x006FC320,

	// mapped fnid 0x3AD203FA
	lrint : 0x006FBE20,

	// mapped fnid 0x3B5489A9
	unk_3B5489A9 : 0x006FBF20,

	// mapped fnid 0x3BD9CE0A
	fsync : 0x006FC410,

	// mapped fnid 0x3C057FBD
	atanf : 0x006FBDB8,

	// mapped fnid 0x3CA81C76
	Iswctype : 0x006FC2A0,

	// mapped fnid 0x3D85D6F8
	strcmp : 0x006FC2B8,

	// mapped fnid 0x3DBC3BEE
	opendir : 0x006FC440,

	// mapped fnid 0x3EEEDB0E
	Dclass : 0x006FBEB0,

	// mapped fnid 0x411434BB
	asinf : 0x006FBD98,

	// mapped fnid 0x418BDFE1
	get_fd : 0x006FC468,

	// mapped fnid 0x4217B4CF
	difftime : 0x006FC008,

	// mapped fnid 0x44115DD0
	Geterrno : 0x006FC010,

	// mapped fnid 0x44796E5C
	strerror : 0x006FC160,

	// mapped fnid 0x45034943
	nan : 0x006FBE48,

	// mapped fnid 0x475D855B
	trunc : 0x006FBEA8,

	// mapped fnid 0x4B6A4010
	vswprintf : 0x006FC1D0,

	// mapped fnid 0x4D348427
	fputs : 0x006FC070,

	// mapped fnid 0x4DDB926B
	powf : 0x006FBE68,

	// mapped fnid 0x4E72F810
	wmemchr : 0x006FC258,

	// mapped fnid 0x4FFBA189
	feof : 0x006FC028,

	// mapped fnid 0x519EBB77
	floor : 0x006FBDE8,

	// mapped fnid 0x526A496A
	write : 0x006FC458,

	// mapped fnid 0x54F57626
	rewind : 0x006FC138,

	// mapped fnid 0x55D4866E
	fgetws : 0x006FC050,

	// mapped fnid 0x589B5314
	strncat : 0x006FC2C8,

	// mapped fnid 0x58EB9E57
	fabs : 0x006FBDE0,

	// mapped fnid 0x5909E3C4
	memset : 0x006FC470,

	// mapped fnid 0x5B162B7F
	memmove : 0x006FC0F8,

	// mapped fnid 0x5E7888F0
	bsearch : 0x006F8B10,

	// mapped fnid 0x62BF1D6C
	swprintf : 0x006FC340,

	// mapped fnid 0x659E011E
	sqrt : 0x006FBE88,

	// mapped fnid 0x65E8D4D0
	wcslen : 0x006FC210,

	// mapped fnid 0x683CA70A
	ZNKSt12_String_base5_XlenEv : 0x006FBFD0, // std::_String_base::_Xlen() const

	// mapped fnid 0x692B497F
	perror : 0x006FC108,

	// mapped fnid 0x69C27C12
	fopen : 0x006FC060,

	// mapped fnid 0x69FF1B9B
	fseek : 0x006FC090,

	// mapped fnid 0x6D5115B0
	wcsncmp : 0x006FC220,

	// mapped fnid 0x703EC767
	setvbuf : 0x006FC140,

	// mapped fnid 0x705D9E24
	acosf : 0x006FBF08,

	// mapped fnid 0x71293B71
	FLog : 0x006FBED0,

	// mapped fnid 0x717B2502
	stat : 0x006FC400,

	// mapped fnid 0x73EAE03D
	strrchr : 0x006FC180,

	// mapped fnid 0x742F12B4
	Sin : 0x006FBEE8,

	// mapped fnid 0x75D4485C
	rename : 0x006FC130,

	// mapped fnid 0x7670FF88
	unk_7670FF88 : 0x006FBF68,

	// mapped fnid 0x772F1E4D
	lround : 0x006FBE30,

	// mapped fnid 0x79819DBF
	fputc : 0x006FC068,

	// mapped fnid 0x7AB679DA
	cosf : 0x006FBEF8,

	// mapped fnid 0x7AE82E0F
	vsprintf : 0x006FC370,

	// mapped fnid 0x7C2EAEB5
	fminf : 0x006FBE00,

	// mapped fnid 0x7E7017B1
	rmdir : 0x006FC3F8,

	// mapped fnid 0x7F381837
	frexp : 0x006FBE18,

	// mapped fnid 0x7F579E03
	atan : 0x006FBDA0,

	// mapped fnid 0x7FDCF73E
	wcscat : 0x006FC1E8,

	// mapped fnid 0x814D8CB0
	fflush : 0x006FC038,

	// mapped fnid 0x82A3CC30
	wcschr : 0x006FC1F0,

	// mapped fnid 0x82A4561A
	put_fd : 0x006FC460,

	// mapped fnid 0x831D70A5
	memcpy : 0x006FC0F0,

	// mapped fnid 0x84378DDC
	wcsncpy : 0x006FC228,

	// mapped fnid 0x8451EDF0
	sqrtf : 0x006FBE90,

	// mapped fnid 0x867275D7
	Stoul : 0x006FC290,

	// mapped fnid 0x88214E8A
	unk_88214E8A : 0x006FBF70,

	// mapped fnid 0x895CDB49
	fmaxf : 0x006FBDF8,

	// mapped fnid 0x89F6F026
	time : 0x006FC388,

	// mapped fnid 0x8A6830E7
	abort : 0x006FBFE8,

	// mapped fnid 0x8AB0ABC6
	strncpy : 0x006FC2D8,

	// mapped fnid 0x8B439438
	clearerr : 0x006FBFF8,

	// mapped fnid 0x8ECAE294
	nextafter : 0x006FBE50,

	// mapped fnid 0x90010029
	gets : 0x006FC0B8,

	// mapped fnid 0x9232BAEA
	FDtest : 0x006FBEC8,

	// mapped fnid 0x9379E36E
	tanf : 0x006FBEA0,

	// mapped fnid 0x9439E4CD
	wcsncat : 0x006FC218,

	// mapped fnid 0x9558ED08
	lrintf : 0x006FBE28,

	// mapped fnid 0x99A72146
	vsnprintf : 0x006FC1C0,

	// mapped fnid 0x99B38CE7
	wmemmove : 0x006FC270,

	// mapped fnid 0x9A81E583
	fmodf : 0x006FBE10,

	// mapped fnid 0x9CB73EE0
	ZSt6_ThrowRKSt9exception : 0x006FBFE0, // std::_Throw(std::exception const&)

	// mapped fnid 0xA30D4797
	wcstoll : 0x006FC248,

	// mapped fnid 0xA3440924
	closedir : 0x006FC438,

	// mapped fnid 0xA5BC0E19
	getchar : 0x006FC0B0,

	// mapped fnid 0xA713F8CF
	modf : 0x006FBE40,

	// mapped fnid 0xA797790F
	wcsstr : 0x006FC238,

	// mapped fnid 0xA8B07F1B
	wmemcpy : 0x006FC268,

	// mapped fnid 0xA9F68EFF
	qsort : 0x006FC120,

	// mapped fnid 0xAA9635D7
	strcat : 0x006FC2A8,

	// mapped fnid 0xAB77019F
	fstat : 0x006FC408,

	// mapped fnid 0xABDCCC7A
	atan2f : 0x006FBF10,

	// mapped fnid 0xAC758D20
	wmemcmp : 0x006FC260,

	// mapped fnid 0xAC893127
	fgetc : 0x006FC040,

	// mapped fnid 0xAD62A342
	ldiv : 0x006FC0C8,

	// mapped fnid 0xAEC7C970
	lseek : 0x006FC448,

	// mapped fnid 0xAF44A615
	fgets : 0x006FC048,

	// mapped fnid 0xAF89FDBD
	Assert : 0x006FC398,

	// mapped fnid 0xB120F6CA
	_close : 0x006FC420, // original name was "close"

	// mapped fnid 0xB1F4779D
	spu_thread_printf : 0x006FC3A0,

	// mapped fnid 0xB2702E15
	wcrtomb : 0x006FC1E0,

	// mapped fnid 0xB54CC9A1
	sinf : 0x006FBEF0,

	// mapped fnid 0xB5E28191
	FSin : 0x006FBED8,

	// mapped fnid 0xB6257E3D
	strncasecmp : 0x006FC2E8,

	// mapped fnid 0xB680E240
	wcstombs : 0x006FC250,

	// mapped fnid 0xB6D92AC3
	strcasecmp : 0x006FC2E0,

	// mapped fnid 0xB738027A
	strtok : 0x006FC198,

	// mapped fnid 0xB7696143
	nextafterf : 0x006FBE58,

	// mapped fnid 0xB7AB5127
	wcsrchr : 0x006FC230,

	// mapped fnid 0xB94B9D13
	Dtest : 0x006FBEC0,

	// mapped fnid 0xBAF11866
	ceilf : 0x006FBDC8,

	// mapped fnid 0xBC7B4B8E
	ctime : 0x006FC000,

	// mapped fnid 0xC01D9F97
	printf : 0x006FC310,

	// mapped fnid 0xC291E698
	exit : 0x006FC018,

	// mapped fnid 0xC3E14CBE
	memcmp : 0x006FC478,

	// mapped fnid 0xC5C09834
	strstr : 0x006FC188,

	// mapped fnid 0xC7931798
	ZNKSt12_String_base5_XranEv : 0x006FBFD8, // std::_String_base::_Xran() const

	// mapped fnid 0xC984BF53
	roundf : 0x006FBE80,

	// mapped fnid 0xCA463458
	Log : 0x006FBEE0,

	// mapped fnid 0xCB9C535B
	strftime : 0x006FC168,

	// mapped fnid 0xCBAC7AD7
	memchr : 0x006FC0E8,

	// mapped fnid 0xD14ECE90
	strtol : 0x006FC1A0,

	// mapped fnid 0xD1D69CB8
	Stod : 0x006FC280,

	// mapped fnid 0xD360DCB4
	fileno : 0x006FC058,

	// mapped fnid 0xD40723D6
	fread : 0x006FC078,

	// mapped fnid 0xD417EEB5
	Stoull : 0x006FC298,

	// mapped fnid 0xD50277AD
	tan : 0x006FBE98,

	// mapped fnid 0xDDC71A75
	SCE_Assert : 0x006FC390,

	// mapped fnid 0xDEBEE2AF
	strchr : 0x006FC2B0,

	// mapped fnid 0xDECE76A6
	acosf : 0x006FBD88,

	// mapped fnid 0xE1BD3587
	fclose : 0x006FC020,

	// mapped fnid 0xE1E83C65
	strncmp : 0x006FC2D0,

	// mapped fnid 0xE3812672
	fdopen : 0x006FC3E8,

	// mapped fnid 0xE3CC73F3
	puts : 0x006FC118,

	// mapped fnid 0xE40BA755
	strtok : 0x006FC190,

	// mapped fnid 0xE48348E9
	vprintf : 0x006FC360,

	// mapped fnid 0xE769E5CF
	fmod : 0x006FBE08,

	// mapped fnid 0xE9137453
	fwprintf : 0x006FC300,

	// mapped fnid 0xE9B560A5
	sscanf : 0x006FC158,

	// mapped fnid 0xEB26298C
	gmtime : 0x006FC0C0,

	// mapped fnid 0xEE303936
	Dsign : 0x006FBEB8,

	// mapped fnid 0xEF110B6B
	unlink : 0x006FC418,

	// mapped fnid 0xF06EED36
	wmemset : 0x006FC278,

	// mapped fnid 0xF0776A44
	wcscmp : 0x006FC1F8,

	// mapped fnid 0xF0E022C6
	getc : 0x006FC0A8,

	// mapped fnid 0xF356418C
	_open : 0x006FC428, // original name was "open"

	// mapped fnid 0xF3EC0258
	round : 0x006FBE78,

	// mapped fnid 0xF3EF3678
	wcscspn : 0x006FC208,

	// mapped fnid 0xF41355F9
	wcscpy : 0x006FC200,

	// mapped fnid 0xF88F26C4
	fwrite : 0x006FC0A0,

	// mapped fnid 0xF89DC648
	strpbrk : 0x006FC178,

	// mapped fnid 0xFA00D211
	read : 0x006FC450,

	// mapped fnid 0xFAEC8C60
	fprintf : 0x006FC2F0,

	// mapped fnid 0xFB2081FD
	vfprintf : 0x006FC350,

	// mapped fnid 0xFB932A56
	atan2f : 0x006FBDB0,

	// mapped fnid 0xFBB4047A
	lroundf : 0x006FBE38,

	// mapped fnid 0xFC0428A6
	strdup : 0x006FC1A8,

	// mapped fnid 0xFCAC2E8E
	mbstowcs : 0x006FC0E0,

	// mapped fnid 0xFCF08193
	expf : 0x006FBDD8,

	// mapped fnid 0xFE88E97E
	fscanf : 0x006FC080
}


// System Console ID Functions
sysConsoleId_v481D =
{
	lib_fnid_ptr: 0x0063F3D0, // ExportFNIDTable_sysConsoleId
	lib_func_ptr: 0x0063F3D4, // ExportStubTable_sysConsoleId
	
	// mapped fnid 0xF220F751
	sysConsoleId : 0x006FC6A0,
}


// System PRX For User Functions
sysPrxForUser_v481D =
{
	lib_fnid_ptr: 0x0063EE1C, // ExportFNIDTable_sysPrxForUser
	lib_func_ptr: 0x0063F114, // ExportStubTable_sysPrxForUser
	
	// mapped fnid 0x2E20EC1
	unk_2E20EC1 : 0x006FC8C0,
	
	// mapped fnid 0x341BB97
	sys_prx_get_module_id_by_address : 0x006FC928,
	
	// mapped fnid 0x4E83D2C
	 _sys_strncmp : 0x006FC888,
	
	// mapped fnid 0x52D29A6
	_sys_strcat : 0x006FC858,
	
	// mapped fnid 0x5C65656
	sys_mempool_try_allocate_block : 0x006FC568,
	
	// mapped fnid 0x618936B
	_sys_vsnprintf : 0x006FC838,
	
	// mapped fnid 0x6574237
	_sys_snprintf : 0x006FC848,
	
	// mapped fnid 0x94FF0D1
	unk_94FF0D1 : 0x006FCA30,
	
	// mapped fnid 0xFB028AF
	unk_FB028AF : 0x006FC740,
	
	// mapped fnid 0x121E5DA5
	unk_121E5DA5 : 0x006FC4D0,
	
	// mapped fnid 0x1573DC3F
	sys_lwmutex_lock : 0x006FC618,
	
	// mapped fnid 0x191F0C4A
	_sys_strrchr : 0x006FC898,
	
	// mapped fnid 0x1AE10B92
	_sys_spu_printf_attach_thread : 0x006FC6E8,
	
	// mapped fnid 0x1BC200F4
	sys_lwmutex_unlock : 0x006FC608,
	
	// mapped fnid 0x1C9A942C
	sys_lwcond_destroy : 0x006FC650,
	
	// mapped fnid 0x1CA525A2
	_sys_strncasecmp : 0x006FC880,
	
	// mapped fnid 0x1ED454CE
	sys_spu_elf_get_information : 0x006FC588,
	
	// mapped fnid 0x24A1EA07
	sys_ppu_thread_create : 0x006FC5E0,
	
	// mapped fnid 0x25062C8E
	unk_25062C8E : 0x006FC530,
	
	// mapped fnid 0x25596F51
	sys_mempool_get_count : 0x006FC558,
	
	// mapped fnid 0x26090058
	sys_prx_load_module : 0x006FC930,
	
	// mapped fnid 0x27427742
	_sys_memmove : 0x006FC808,
	
	// mapped fnid 0x2A6D9D51
	sys_lwcond_wait : 0x006FC660,
	
	// mapped fnid 0x2C847572
	_sys_process_atexitspawn : 0x006FC500,
	
	// mapped fnid 0x2D36462B
	_sys_strlen : 0x006FC878,
	
	// mapped fnid 0x2F256B29
	unk_2F256B29 : 0x006FC9F8,
	
	// mapped fnid 0x2F85C0EF
	sys_lwmutex_create : 0x006FC5F8,
	
	// mapped fnid 0x3172759D
	sys_game_get_temperature : 0x006FC780,
	
	// mapped fnid 0x318F17E1
	_sys_memalign : 0x006FC8B0,
	
	// mapped fnid 0x350D454E
	sys_ppu_thread_get_id : 0x006FC5F0,
	
	// mapped fnid 0x35168520
	_sys_heap_malloc : 0x006FC7B0,
	
	// mapped fnid 0x39E9B068
	unk_39E9B068 : 0x006FCA00,
	
	// mapped fnid 0x3BD53C7B
	_sys_memchr : 0x006FC7F8,
	
	// mapped fnid 0x3DD4A957
	sys_ppu_thread_register_atexit : 0x006FC5C8,
	
	// mapped fnid 0x3EF17F8C
	unk_3EF17F8C : 0x006FC7D8,
	
	// mapped fnid 0x409AD939
	sys_mmapper_free_memory : 0x006FC700,
	
	// mapped fnid 0x4232B0DB
	unk_4232B0DB : 0x006FC818,
	
	// mapped fnid 0x42B23552
	sys_prx_register_library : 0x006FC908,
	
	// mapped fnid 0x44265C08
	_sys_heap_memalign : 0x006FC7C0,
	
	// mapped fnid 0x459B4393
	_sys_strcmp : 0x006FC868,
	
	// mapped fnid 0x45FE2FCE
	_sys_spu_printf_initialize : 0x006FC6C8,
	
	// mapped fnid 0x4643BA6E
	sys_mmapper_unmap_memory : 0x006FC710,
	
	// mapped fnid 0x4A071D98
	sys_interrupt_thread_disestablish : 0x006FC5D8,
	
	// mapped fnid 0x4B2F301A
	_sys_tolower : 0x006FC7E0,
	
	// mapped fnid 0x4BBF59D0
	unk_4BBF59D0 : 0x006FC9E0,
	
	// mapped fnid 0x4F7172C9
	sys_process_is_stack : 0x006FC4A0,
	
	// mapped fnid 0x5267CB35
	sys_spinlock_unlock : 0x006FC6C0,
	
	// mapped fnid 0x52AADADF
	sys_lwcond_signal_to : 0x006FC670,
	
	// mapped fnid 0x5FDFB2FE
	_sys_spu_printf_detach_group : 0x006FC6E0,
	
	// mapped fnid 0x608212FC
	sys_mempool_free_block : 0x006FC570,
	
	// mapped fnid 0x620E35A7
	sys_game_get_system_sw_version : 0x006FC760,
	
	// mapped fnid 0x637BDAAE
	unk_637BDAAE : 0x006FC4B0,
	
	// mapped fnid 0x67F9FEDB
	sys_game_process_exitspawn2 : 0x006FC510,
	
	// mapped fnid 0x68B9B011
	_sys_memset : 0x006FC810,
	
	// mapped fnid 0x6BF66EA7
	_sys_memcpy : 0x006FC800,
	
	// mapped fnid 0x6E05231D
	sys_game_watchdog_stop : 0x006FC750,
	
	// mapped fnid 0x70258515
	sys_mmapper_allocate_memory_from_container : 0x006FC738,
	
	// mapped fnid 0x71A8472A
	sys_get_random_number : 0x006FC698,
	
	// mapped fnid 0x722A0254
	sys_spinlock_trylock : 0x006FC6B8,
	
	// mapped fnid 0x728FD7C3
	unk_728FD7C3 : 0x006FC548,
	
	// mapped fnid 0x74311398
	sys_prx_get_my_module_id : 0x006FC918,
	
	// mapped fnid 0x744680A2
	sys_initialize_tls : 0x006FC5B8,
	
	// mapped fnid 0x7498887B
	_sys_strchr : 0x006FC860,
	
	// mapped fnid 0x750DD5CD
	unk_750DD5CD : 0x006FC528,
	
	// mapped fnid 0x791B9219
	_sys_vsprintf : 0x006FC840,
	
	// mapped fnid 0x7B034C78
	unk_7B034C78 : 0x006FCA18,
	
	// mapped fnid 0x7DAFF8BB
	unk_7DAFF8BB : 0x006FC540,
	
	// mapped fnid 0x80FB0C19
	sys_prx_stop_module : 0x006FC910,
	
	// mapped fnid 0x8461E528
	sys_time_get_system_time : 0x006FC620,
	
	// mapped fnid 0x84BB6774
	sys_prx_get_module_info : 0x006FC8E8,
	
	// mapped fnid 0x87C87495
	unk_87C87495 : 0x006FC9F0,
	
	// mapped fnid 0x893305FA
	sys_raw_spu_load : 0x006FC598,
	
	// mapped fnid 0x8985B5B6
	_sys_heap_stats : 0x006FC790,
	
	// mapped fnid 0x8A2F159B
	console_getc : 0x006FC630,
	
	// mapped fnid 0x8A561D92
	_sys_heap_free : 0x006FC7A8,
	
	// mapped fnid 0x8BB03AB8
	sys_game_board_storage_write : 0x006FC778,
	
	// mapped fnid 0x8C2BB498
	sys_spinlock_initialize : 0x006FC6A8,
	
	// mapped fnid 0x8CFEF376
	unk_8CFEF376 : 0x006FC900,
	
	// mapped fnid 0x92A7EB40
	unk_92A7EB40 : 0x006FC4A8,
	
	// mapped fnid 0x96328741
	_sys_process_at_Exitspawn : 0x006FC508,
	
	// mapped fnid 0x996F7CF8
	_sys_strncat : 0x006FC788,
	
	// mapped fnid 0x99C88692
	_sys_strcpy : 0x006FC870,
	
	// mapped fnid 0x9C9605EE
	unk_9C9605EE : 0x006FCA20,
	
	// mapped fnid 0x9D2EC4FF
	unk_9D2EC4FF : 0x006FC4E8,
	
	// mapped fnid 0x9D3C0F81
	sys_mempool_destroy : 0x006FC578,
	
	// mapped fnid 0x9E0623B5
	sys_game_watchdog_start : 0x006FC748,
	
	// mapped fnid 0x9F04F7AF
	_sys_printf : 0x006FC8E0,
	
	// mapped fnid 0x9F18429D
	sys_prx_start_module : 0x006FC950,
	
	// mapped fnid 0x9F950780
	sys_game_get_rtc_status : 0x006FC768,
	
	// mapped fnid 0x9FB6228E
	unk_9FB6228E : 0x006FC820,
	
	// mapped fnid 0xA146A143
	sys_mempool_allocate_block : 0x006FC560,
	
	// mapped fnid 0xA1F9EAFE
	_sys_sprintf : 0x006FC850,
	
	// mapped fnid 0xA285139D
	sys_spinlock_lock : 0x006FC6B0,
	
	// mapped fnid 0xA2C7BA64
	sys_prx_exitspawn_with_level : 0x006FC940,
	
	// mapped fnid 0xA330AD84
	sys_prx_load_module_on_memcontainer_by_fd : 0x006FC968,
	
	// mapped fnid 0xA3E3BE68
	sys_ppu_thread_once : 0x006FC5D0,
	
	// mapped fnid 0xA5D06BF0
	sys_prx_get_module_list : 0x006FC920,
	
	// mapped fnid 0xA9879A33
	unk_A9879A33 : 0x006FCA08,
	
	// mapped fnid 0xAA6D9BFF
	sys_prx_load_module_on_memcontainer : 0x006FC968,
	
	// mapped fnid 0xAC6FC404
	sys_ppu_thread_unregister_atexit : 0x006FC5C0,
	
	// mapped fnid 0xACAD8FB6
	sys_game_watchdog_clear : 0x006FC758,
	
	// mapped fnid 0xAEB78725
	sys_lwmutex_trylock : 0x006FC600,
	
	// mapped fnid 0xAEDE4B03
	_sys_heap_delete_heap : 0x006FC7D0,
	
	// mapped fnid 0xAFF080A4
	sys_ppu_thread_exit : 0x006FC5E8,
	
	// mapped fnid 0xB1BD7A61
	unk_B1BD7A61 : 0x006FCA10,
	
	// mapped fnid 0xB257540B
	sys_mmapper_allocate_memory : 0x006FC6F8,
	
	// mapped fnid 0xB27C8AE7
	sys_prx_load_module_list : 0x006FC958,
	
	// mapped fnid 0xB2FCF2C8
	_sys_heap_create_heap : 0x006FC7C8,
	
	// mapped fnid 0xB3BBCF2A
	_sys_spu_printf_detach_thread : 0x006FC6F0,
	
	// mapped fnid 0xB5D5F64E
	unk_B5D5F64E : 0x006FC640,
	
	// mapped fnid 0xB6369393
	_sys_heap_get_total_free_size : 0x006FC7A0,
	
	// mapped fnid 0xB995662E
	sys_raw_spu_image_load : 0x006FC590,
	
	// mapped fnid 0xB9BF1078
	_sys_heap_alloc_heap_memory : 0x006FC7B8,
	
	// mapped fnid 0xBAB62B99
	unk_BAB62B99 : 0x006FC520,
	
	// mapped fnid 0xBDB18F83
	_sys_malloc : 0x006FC8B8,
	
	// mapped fnid 0xBF8EE5BB
	unk_BF8EE5BB : 0x006FC4C0,
	
	// mapped fnid 0xC3476D0C
	sys_lwmutex_destroy : 0x006FC610,
	
	// mapped fnid 0xC4FD6121
	_sys_qsort : 0x006FC8A0,
	
	// mapped fnid 0xC839BB4C
	unk_C839BB4C : 0x006FC9E8,
	
	// mapped fnid 0xCA9A60BF
	sys_mempool_create : 0x006FC550,
	
	// mapped fnid 0xD0EA47A7
	sys_prx_unregister_library : 0x006FC938,
	
	// mapped fnid 0xD19688BC
	unk_D19688BC : 0x006FC4D8,
	
	// mapped fnid 0xD1AD4570
	_sys_heap_get_mallinfo : 0x006FC798,
	
	// mapped fnid 0xD3039D4D
	_sys_strncpy : 0x006FC890,
	
	// mapped fnid 0xD66C2D52
	unk_D66C2D52 : 0x006FC728,
	
	// mapped fnid 0xD8A6F882
	unk_D8A6F882 : 0x006FC730,
	
	// mapped fnid 0xDA0EB71A
	sys_lwcond_create : 0x006FC658,
	
	// mapped fnid 0xDB6B3250
	sys_spu_elf_get_segments : 0x006FC580,
	
	// mapped fnid 0xDC578057
	sys_mmapper_map_memory : 0x006FC708,
	
	// mapped fnid 0xDD0C1E09
	_sys_spu_printf_attach_group : 0x006FC6D8,
	
	// mapped fnid 0xDD3B27AC
	_sys_spu_printf_finalize : 0x006FC6D0,
	
	// mapped fnid 0xDE0C682C
	unk_DE0C682C : 0x006FC718,
	
	// mapped fnid 0xDE2F9C85
	unk_DE2F9C85 : 0x006FC4F0,
	
	// mapped fnid 0xE0998DBF
	sys_prx_get_module_id_by_name : 0x006FC8F0,
	
	// mapped fnid 0xE0DA8EFD
	sys_spu_image_close : 0x006FC5A0,
	
	// mapped fnid 0xE66BAC36
	console_putc : 0x006FC638,
	
	// mapped fnid 0xE6F2C1E7
	sys_process_exit : 0x006FC4F8,
	
	// mapped fnid 0xE75C40F2
	unk_E75C40F2 : 0x006FC4C8,
	
	// mapped fnid 0xE76964F5
	sys_game_board_storage_read : 0x006FC770,
	
	// mapped fnid 0xE7EF3A80
	sys_prx_load_module_list_on_memcontainer : 0x006FC958,
	
	// mapped fnid 0xE95FFA0A
	unk_E95FFA0A : 0x006FC538,
	
	// mapped fnid 0xE9A1BD84
	sys_lwcond_signal_all : 0x006FC678,
	
	// mapped fnid 0xEBE5F72F
	sys_spu_image_import : 0x006FC5A8,
	
	// mapped fnid 0xEDEA5F4A
	unk_EDEA5F4A : 0x006FC4E0,
	
	// mapped fnid 0xEEF75113
	_sys_toupper : 0x006FC7E8,
	
	// mapped fnid 0xEF68C17C
	sys_prx_load_module_by_fd : 0x006FC970,
	
	// mapped fnid 0xEF87A695
	sys_lwcond_signal : 0x006FC668,
	
	// mapped fnid 0xF0AECE0D
	sys_prx_unload_module : 0x006FC948,
	
	// mapped fnid 0xF57E1D6F
	console_write : 0x006FC628,
	
	// mapped fnid 0xF7F7FB20
	_sys_free : 0x006FC8A8,
	
	// mapped fnid 0xF82CF400
	unk_F82CF400 : 0x006FC720,
	
	// mapped fnid 0xF923DADA
	unk_F923DADA : 0x006FC4B8,
	
	// mapped fnid 0xFA7F693D
	_sys_vprintf : 0x006FC8D0,
	
	// mapped fnid 0xFB5DB080
	_sys_memcmp : 0x006FC7F0,
	
	// mapped fnid 0xFC52A7A9
	sys_game_process_exitspawn : 0x006FC510,
	
	// mapped fnid 0xFECC05B6
	unk_FECC05B6 : 0x006FC8C8,
	
	// mapped fnid 0xFF34C76C
	unk_FF34C76C : 0x006FCA28
}

// System FileSystem Functions
sys_fs_v481D =
{
	sys_io_lib_fnid_ptr: 0x0063F5D0, // ExportFNIDTable_sys_fs
	sys_io_lib_func_ptr: 0x0063F7C4, // ExportStubTable_sys_fs
	
	// mapped fnid 0x02671310
	cellFsSetDefaultContainer : 0x006FD240,

	// mapped fnid 0x06E681ED
	unk_6E681ED : 0x006FD180,

	// mapped fnid 0x0CDA14BA
	unk_CDA14BA : 0x006FD1B0,

	// mapped fnid 0x0D5B4A14
	cellFsReadWithOffset : 0x006FD278,

	// mapped fnid 0x0E2939E5
	cellFsFtruncate : 0x006FCEB0, // s64 cellFsFtruncate(Lv2FsFile fd, u64 size)

	// mapped fnid 0x103B8632
	cellFsAllocateFileAreaWithInitialData : 0x006FD160,

	// mapped fnid 0x13BF1286
	unk_13BF1286 : 0x006FD468,

	// mapped fnid 0x14D58C7A
	unk_14D58C7A : 0x006FD078,

	// mapped fnid 0x18DD4604
	unk_18DD4604 : 0x006FD210,

	// mapped fnid 0x190912F6
	cellFsStReadGetCurrentAddr : 0x006FD360,

	// mapped fnid 0x1A108AB7
	cellFsGetBlockSize : 0x006FD168,

	// mapped fnid 0x1B0B915E
	unk_1B0B915E : 0x006FCE80,

	// mapped fnid 0x1CAEC657
	unk_1CAEC657 : 0x006FD068,

	// mapped fnid 0x1EA02E2F
	cellFsArcadeHddSerialNumber : 0x006FD310,

	// mapped fnid 0x1FF82B63
	unk_1FF82B63 : 0x006FCE88,

	// mapped fnid 0x226CD693
	unk_226CD693 : 0x006FCE90,

	// mapped fnid 0x24FA3BCC
	unk_24FA3BCC : 0x006FD148,

	// mapped fnid 0x2664C8AE
	cellFsStReadInit : 0x006FD3A0,

	// mapped fnid 0x27800C6B
	cellFsStRead : 0x006FD368,

	// mapped fnid 0x2796FDF3
	cellFsRmdir : 0x006FD208, // s64 cellFsRmdir(const char* path)

	// mapped fnid 0x2CB51F0D
	cellFsClose : 0x006FCDE8, // s64 cellFsClose(Lv2FsFile fd)

	// mapped fnid 0x2CF1296B
	cellFsAllocateFileAreaByFdWithoutZeroFill : 0x006FD020,

	// mapped fnid 0x3140F6E1
	cellFsSetIoBuffer : 0x006FD250,

	// mapped fnid 0x3394F037
	cellFsAllocateFileAreaByFdWithInitialData : 0x006FCEA0,

	// mapped fnid 0x37907F9F
	unk_37907F9F : 0x006FD1B8,

	// mapped fnid 0x384C65CF
	unk_384C65CF : 0x006FD048,

	// mapped fnid 0x3A1C8393
	cellFsTruncate2 : 0x006FCEA8,

	// mapped fnid 0x3AAA1BD0
	unk_3AAA1BD0 : 0x006FD150,

	// mapped fnid 0x3F61245C
	cellFsOpendir : 0x006FCDF0, // s64 cellFsOpenDir(const char* path, Lv2FsFile* fd)

	// mapped fnid 0x445C878F
	unk_445C878F : 0x006FD2D0,

	// mapped fnid 0x4BD5073A
	unk_4BD5073A : 0x006FD1D8,

	// mapped fnid 0x4CEF342E
	cellFsAioWrite : 0x006FD3C8,

	// mapped fnid 0x4D5FF8E2
	cellFsRead : 0x006FCDD8, // s64 cellFsRead(Lv2FsFile fd, void* buf, u64 size, u64* read)

	// mapped fnid 0x5731DF45
	unk_5731DF45 : 0x006FD320,

	// mapped fnid 0x5C74903D
	cellFsReaddir : 0x006FCDF8, // s64 cellFsReadDir(Lv2FsFile fd, Lv2FsDirent* entry, u64* read)

	// mapped fnid 0x606F9F42
	cellFsChangeFileSizeWithoutAllocation : 0x006FD218,

	// mapped fnid 0x6A4B95C1
	unk_6A4B95C1 : 0x006FD050,

	// mapped fnid 0x6AE0BA7F
	unk_6AE0BA7F : 0x006FCE30,

	// mapped fnid 0x6C815943
	unk_6C815943 : 0x006FCE78,

	// mapped fnid 0x6D3BB15B
	cellFsSdataOpenByFd : 0x006FD2C0,

	// mapped fnid 0x718BF5F8
	cellFsOpen : 0x006FD1F0, // s64 cellFsOpen(const char* path, s32 oflags, Lv2FsFile* fd, u32 mode, const void* arg, u64 argsize)

	// mapped fnid 0x75F16DC5
	cellFsSetIoBufferFromDefaultContainer : 0x006FD258,

	// mapped fnid 0x7A0329A1
	cellFsAllocateFileAreaWithoutZeroFill : 0x006FD220,

	// mapped fnid 0x7DBB9A4D
	unk_7DBB9A4D : 0x006FD1D0,

	// mapped fnid 0x7DE6DCED
	cellFsStat : 0x006FD128, // s64 cellFsStat(const char* path, Lv2FsStat* buf)

	// mapped fnid 0x7F13FC8C
	cellFsAioCancel : 0x006FD3C0,

	// mapped fnid 0x7F4677A8
	cellFsUnlink : 0x006FD200, // s64 cellFsUnlink(const char* path)

	// mapped fnid 0x81F33783
	cellFsStReadPutCurrentAddr : 0x006FD358,

	// mapped fnid 0x842E7E06
	unk_842E7E06 : 0x006FD190,

	// mapped fnid 0x866F6AEC
	cellFsStReadWaitCallback : 0x006FD348,

	// mapped fnid 0x8CB722D5
	cellFsWriteWithOffset : 0x006FD288,

	// mapped fnid 0x8DCFF2CD
	unk_8DCFF2CD : 0x006FD178,

	// mapped fnid 0x8DF28FF9
	cellFsStReadStart : 0x006FD378,

	// mapped fnid 0x8F71C5B2
	cellFsStReadWait : 0x006FD350,

	// mapped fnid 0x91A1BEAA
	cellFsSetDiscReadRetrySetting : 0x006FD328,

	// mapped fnid 0x91D59F69
	unk_91D59F69 : 0x006FCF20,

	// mapped fnid 0x964DB398
	unk_964DB398 : 0x006FD0F8,

	// mapped fnid 0x967A162B
	cellFsFsync : 0x006FCE48, // s64 cellFsFsync(Lv2FsFile fd)

	// mapped fnid 0x99406D0B
	cellFsChmod : 0x006FD140, // s64 cellFsChmod(const char* path, Lv2FsMode mode)

	// mapped fnid 0x9B882495
	cellFsGetDirectoryEntries : 0x006FD088,

	// mapped fnid 0x9F951810
	cellFsAioFinish : 0x006FD3D8,

	// mapped fnid 0x9FDBBA89
	unk_9FDBBA89 : 0x006FD330,

	// mapped fnid 0xA01EE33A
	cellFsRegisterConversionCallback : 0x006FD120,

	// mapped fnid 0xA397D042
	cellFsLseek : 0x006FCE38,

	// mapped fnid 0xAA3B4BCD
	cellFsGetFreeSize : 0x006FD170,

	// mapped fnid 0xADDF33CD
	unk_ADDF33CD : 0x006FD1C0,

	// mapped fnid 0xAE4A225E
	unk_AE4A225E : 0x006FD1C8,

	// mapped fnid 0xB1840B53
	cellFsSdataOpen : 0x006FD2A0,

	// mapped fnid 0xB3AFEE8B
	cellFsStReadGetRingBuf : 0x006FD390,

	// mapped fnid 0xBA901FE6
	cellFsMkdir : 0x006FD1A8,

	// mapped fnid 0xBD273A88
	cellFsStReadGetRegid : 0x006FD380,

	// mapped fnid 0xBEF554A4
	cellFsUtime : 0x006FD1A0,

	// mapped fnid 0xC1C507E7
	cellFsAioRead : 0x006FD3D0,

	// mapped fnid 0xC85C4DE7
	unk_C85C4DE7 : 0x006FD130,

	// mapped fnid 0xC9DC3AC5
	cellFsTruncate : 0x006FD198,

	// mapped fnid 0xCB588DBA
	cellFsFGetBlockSize : 0x006FCE50,

	// mapped fnid 0xCBF1758B
	unk_CBF1758B : 0x006FD158,

	// mapped fnid 0xCF34969C
	cellFsStReadGetStatus : 0x006FD388,

	// mapped fnid 0xD338A65A
	unk_D338A65A : 0x006FCE40,

	// mapped fnid 0xD73938DF
	cellFsStReadFinish : 0x006FD398,

	// mapped fnid 0xDB869F20
	cellFsAioInit : 0x006FD3E0,

	// mapped fnid 0xE15939C3
	cellFsChangeFileSizeByFdWithoutAllocation : 0x006FD018,

	// mapped fnid 0xE3D28395
	unk_E3D28395 : 0x006FD1F8,

	// mapped fnid 0xE44827ED
	unk_E44827ED : 0x006FD188,

	// mapped fnid 0xECDCF2AB
	cellFsWrite : 0x006FCDE0, // s64 cellFsWrite(Lv2FsFile fd, const void* buf, u64 size, u64* written)

	// mapped fnid 0xEF3EFA34
	cellFsFstat : 0x006FCE08, // s64 cellFsFstat(Lv2FsFile fd, Lv2FsStat* buf)

	// mapped fnid 0xF0A73832
	unk_F0A73832 : 0x006FD070,

	// mapped fnid 0xF12EECC8
	cellFsRename : 0x006FD1E0,

	// mapped fnid 0xF44C0E1D
	unk_F44C0E1D : 0x006FD138,

	// mapped fnid 0xF8E5D9A0
	cellFsStReadStop : 0x006FD370,

	// mapped fnid 0xF94BAA80
	cellFsUnregisterL10nCallbacks : 0x006FD118,

	// mapped fnid 0xFF29F478
	unk_FF29F478 : 0x006FD1E8,

	// mapped fnid 0xFF42DCC3
	cellFsClosedir : 0x006FCE00 // s64 cellFsCloseDir(Lv2FsFile fd)
}

// System IO Functions
sys_io_v481D =
{
	sys_io_lib_fnid_ptr: 0x0063F3E0, // ExportFNIDTable_sys_io
	sys_io_lib_func_ptr: 0x0063F4E4, // ExportStubTable_sys_io
	
	// mapped fnid 0x068FCBC6
	sys_config_start : 0x006FCA70,

	// mapped fnid 0x0D5F2C14
	cellPadClearBuf : 0x006FCB48,

	// mapped fnid 0x0E2DFAAD
	cellPadInfoPressMode : 0x006FCB18,

	// mapped fnid 0x10DA8DCC
	unk_10DA8DCC : 0x006FCAC8,

	// mapped fnid 0x13ED2BA4
	unk_13ED2BA4 : 0x006FCB28,

	// mapped fnid 0x1CF98800
	cellPadInit : 0x006FCB58,

	// mapped fnid 0x1F71ECBE
	cellKbGetConfiguration : 0x006FCB88,

	// mapped fnid 0x2073B7F6
	cellKbClearBuf : 0x006FCBC0,

	// mapped fnid 0x20A97BA2
	cellPadLddRegisterController : 0x006FCAE8,

	// mapped fnid 0x21A62E9B
	cellMouseGetTabletDataList : 0x006FCC00,

	// mapped fnid 0x2D16DA4F
	cellMouseSetTabletMode : 0x006FCBF0,

	// mapped fnid 0x2F1774D5
	cellKbGetInfo : 0x006FCBB8,

	// mapped fnid 0x3138E632
	cellMouseGetData : 0x006FCC10,

	// mapped fnid 0x3733EA3C
	unk_3733EA3C : 0x006FCAB8,

	// mapped fnid 0x3AAAD464
	cellPadGetInfo : 0x006FCB40,

	// mapped fnid 0x3EF66B95
	cellMouseClearBuf : 0x006FCC28,

	// mapped fnid 0x3F72C56E
	cellKbSetLEDStatus : 0x006FCB90,

	// mapped fnid 0x3F797DFF
	cellPadGetRawData : 0x006FCB38,

	// mapped fnid 0x433F6EC0
	cellKbInit : 0x006FCBD0,

	// mapped fnid 0x4AB1FA77
	cellKbInit : 0x006FCBA8,

	// mapped fnid 0x4CC9B68D
	cellMouseGetTabletDataList : 0x006FCA90,

	// mapped fnid 0x4D0B3B1F
	cellMouseInfoTabletMode : 0x006FCBF8,

	// mapped fnid 0x4D9B75D5
	cellPadEnd : 0x006FCB50,

	// mapped fnid 0x578E3C98
	cellPadSetPortSetting : 0x006FCA98,

	// mapped fnid 0x5BAF30FB
	cellMouseGetInfo : 0x006FCC20,

	// mapped fnid 0x5C016E79
	unk_5C016E79 : 0x006FCAD0,

	// mapped fnid 0x5F81900C
	sys_config_unregister_service : 0x006FCA48,

	// mapped fnid 0x662BB2AD
	unk_662BB2AD : 0x006FCA40,

	// mapped fnid 0x6AE10596
	sys_config_add_service_listener : 0x006FCA60,

	// mapped fnid 0x6BC09C61
	cellPadGetDataExtra : 0x006FCAB0,

	// mapped fnid 0x6BD131F0
	cellMouseGetDataList : 0x006FCC08,

	// mapped fnid 0x6D367953
	sys_config_stop : 0x006FCA68,

	// mapped fnid 0x7009B738
	unk_7009B738 : 0x006FCB00,

	// mapped fnid 0x73BB2D74
	cellPadSetSensorMode : 0x006FCAE0,

	// mapped fnid 0x78200559
	cellPadInfoSensorMode : 0x006FCB08,

	// mapped fnid 0x78F058A2
	sys_config_register_service : 0x006FCA50,

	// mapped fnid 0x8A00F264
	cellPadPeriphGetData : 0x006FCA88,

	// mapped fnid 0x8B72CDA1
	cellPadGetData : 0x006FCB30,

	// mapped fnid 0x8B8231E5
	cellPadLddGetPortNo : 0x006FCAD8,

	// mapped fnid 0x8E06D13B
	unk_8E06D13B : 0x006FCA38,

	// mapped fnid 0xA328CC35
	cellMouseGetRawData : 0x006FCC18,

	// mapped fnid 0xA5F85E4D
	cellKbSetCodeType : 0x006FCBA0,

	// mapped fnid 0xA703A51D
	cellPadGetInfo2 : 0x006FCAA0,

	// mapped fnid 0xBAFD6409
	cellPadLddDataInsert : 0x006FCAF0,

	// mapped fnid 0xBE5BE3BA
	cellPadSetSensorMode : 0x006FCB10,

	// mapped fnid 0xBFCE3285
	cellKbEnd : 0x006FCBC8,

	// mapped fnid 0xC9030138
	cellMouseInit : 0x006FCC38,

	// mapped fnid 0xCCC785DF
	unk_CCC785DF : 0x006FCBE8,

	// mapped fnid 0xDBF4C59C
	unk_DBF4C59C : 0x006FCAC0,

	// mapped fnid 0xDEEFDFA7
	cellKbSetReadMode : 0x006FCB98,

	// mapped fnid 0xE10183CE
	cellMouseEnd : 0x006FCC30,

	// mapped fnid 0xE442FAA8
	cellPadLddUnregisterController : 0x006FCAF8,

	// mapped fnid 0xE5E139DD
	unk_E5E139DD : 0x006FCA80,

	// mapped fnid 0xF5D9D571
	sys_config_remove_service_listener : 0x006FCA58,

	// mapped fnid 0xF65544EE
	cellPadSetActDirect : 0x006FCAA8,

	// mapped fnid 0xF83F8182
	cellPadSetPressMode : 0x006FCB20,

	// mapped fnid 0xFF0A21B7
	cellKbRead : 0x006FCBB0
}


// VSH Functions
vsh_v481D =
{
	lib_fnid_ptr: 0x0063F954, // ExportFNIDTable_vsh
	lib_func_ptr: 0x0063FBD8, // ExportStubTable_vsh
	
	// mapped fnid 0x015910A0
	unk_15910A0 : 0x006FBD78,

	// mapped fnid 0x01DFD97E
	unk_1DFD97E : 0x006FBD18,

	// mapped fnid 0x0D5CCC40
	unk_D5CCC40 : 0x006FD4D0,

	// mapped fnid 0x0F48562D
	unk_F48562D : 0x006FBC30,

	// mapped fnid 0x0F80B71F
	unk_MOVE_ME___TO_VSH_TASK : 0x006FBC48,

	// mapped fnid 0x13A5BE24
	unk_13A5BE24 : 0x006FBD10,

	// mapped fnid 0x145991B4
	unk_145991B4 : 0x006FBC18,

	// mapped fnid 0x1714D098
	unk_1714D098 : 0x006FD4E0,

	// mapped fnid 0x172B05CD
	unk_172B05CD : 0x006FBB40,

	// mapped fnid 0x18EF767F
	unk_18EF767F : 0x006FD530,

	// mapped fnid 0x196DB98B
	unk_18EF767F : 0x006FBBD0,

	// mapped fnid 0x1B890AD2
	unk_1B890AD2 : 0x006FBB58,

	// mapped fnid 0x1B8D4287
	unk_1B8D4287 : 0x006FD4F8,

	// mapped fnid 0x1C68CC75
	unk_1C68CC75 : 0x006FBC70,

	// mapped fnid 0x1EAC97C3
	unk_1EAC97C3 : 0x006FD478,

	// mapped fnid 0x1F80C608
	unk_1F80C608 : 0x006FBB08,

	// mapped fnid 0x1F80E287
	unk_1F80E287 : 0x006FBC20,

	// mapped fnid 0x20215547
	unk_20215547 : 0x006FBC68,

	// mapped fnid 0x2068CBF3
	unk_2068CBF3 : 0x006FBB20,

	// mapped fnid 0x233791FE
	unk_233791FE : 0x006FD480,

	// mapped fnid 0x26709B91
	unk_26709B91 : 0x006FBB90,

	// mapped fnid 0x278A6AF7
	unk_278A6AF7 : 0x006FBD70,

	// mapped fnid 0x2A91BB1D
	unk_2A91BB1D : 0x006FBB78,

	// mapped fnid 0x2B58A92C
	unk_2B58A92C : 0x006FBB98,

	// mapped fnid 0x2C563C92
	unk_26709B91 : 0x006FBB48,

	// mapped fnid 0x3065B3C3
	unk_3065B3C3 : 0x006FBAE8,

	// mapped fnid 0x3231E012
	unk_3231E012 : 0x006FBA58,

	// mapped fnid 0x339A7508
	unk_339A7508 : 0x006FD4A8,

	// mapped fnid 0x33ACD759
	unk_33ACD759 : 0x006FD500,

	// mapped fnid 0x3473377C
	unk_3473377C : 0x006FBA50,

	// mapped fnid 0x349F1535
	unk_349F1535 : 0x006FBB50,

	// mapped fnid 0x37857F3F
	unk_37857F3F : 0x006FBCD8,

	// mapped fnid 0x38565603
	unk_38565603 : 0x006FBAE0,

	// mapped fnid 0x38EA9A58
	unk_38EA9A58 : 0x006FBD68,

	// mapped fnid 0x3AE8D802
	unk_3AE8D802 : 0x006FBB70,

	// mapped fnid 0x3B4A1AC4
	unk_3B4A1AC4 : 0x006FBBE0,

	// mapped fnid 0x3C186420
	unk_3C186420 : 0x006FBCC0,

	// mapped fnid 0x3F062337
	unk_3F062337 : 0x006FBBE8,

	// mapped fnid 0x40E51FD1
	unk_40E51FD1 : 0x006FBCE8,

	// mapped fnid 0x42FEA6FB
	unk_42FEA6FB : 0x006FBB28,

	// mapped fnid 0x44F4A936
	unk_44F4A936 : 0x006FBD40,

	// mapped fnid 0x47FB5A92
	unk_47FB5A92 : 0x006FBB00,

	// mapped fnid 0x489102C6
	unk_489102C6 : 0x006FBBB8,

	// mapped fnid 0x4B0523C4
	unk_4B0523C4 : 0x006FCB70,

	// mapped fnid 0x4CE8E544
	unk_4CE8E544 : 0x006FBD30,

	// mapped fnid 0x4DB8DD87
	unk_4DB8DD87 : 0x006FBC60,

	// mapped fnid 0x4F3A5866
	unk_4F3A5866 : 0x006FBBA0,

	// mapped fnid 0x4FD63C1D
	unk_4FD63C1D : 0x006FBA70,

	// mapped fnid 0x50C2962C
	unk_50C2962C : 0x006FBA80,

	// mapped fnid 0x535A7222
	unk_50C2962C : 0x006FBAB8,

	// mapped fnid 0x53E57474
	unk_53E57474 : 0x006FD508,

	// mapped fnid 0x55C6366A
	unk_55C6366A : 0x006FBD00,

	// mapped fnid 0x5649626F
	unk_5649626F : 0x006FCB80,

	// mapped fnid 0x5A351A0A
	unk_5A351A0A : 0x006FBA90,

	// mapped fnid 0x5C5D84C1
	unk_5C5D84C1 : 0x006FBCB8,

	// mapped fnid 0x609635AB
	unk_609635AB : 0x006FBC90,

	// mapped fnid 0x612496AA
	unk_612496AA : 0x006FD4E8,

	// mapped fnid 0x63F9074F
	unk_63F9074F : 0x006FBCA0,

	// mapped fnid 0x6B65C37C
	unk_6B65C37C : 0x006FBAD8,

	// mapped fnid 0x6D840716
	unk_6D840716 : 0x006FBAC0,

	// mapped fnid 0x703393A2
	unk_703393A2 : 0x006FBC38,

	// mapped fnid 0x71BBE625
	unk_71BBE625 : 0x006FD5B0,

	// mapped fnid 0x772E1A24
	unk_772E1A24 : 0x006FBA88,

	// mapped fnid 0x7C5A1812
	unk_7C5A1812 : 0x006FD560,

	// mapped fnid 0x7CB16AA0
	unk_7CB16AA0 : 0x006FBAA0,

	// mapped fnid 0x7D73E7CD
	unk_7D73E7CD : 0x006FBC58,

	// mapped fnid 0x80F5B53C
	unk_80F5B53C : 0x006FBA40,

	// mapped fnid 0x8443023A
	unk_8443023A : 0x006FD588,

	// mapped fnid 0x8A86B77C
	unk_8A86B77C : 0x006FBB38,

	// mapped fnid 0x8A9529BA
	unk_8A9529BA : 0x006FBCA8,

	// mapped fnid 0x8AD55D80
	unk_8AD55D80 : 0x006FBC28,

	// mapped fnid 0x8B0BC111
	unk_8B0BC111 : 0x006FBA78,

	// mapped fnid 0x8BC98CB9
	unk_8BC98CB9 : 0x006FBD38,

	// mapped fnid 0x8C4215ED
	unk_8C4215ED : 0x006FBAD0,

	// mapped fnid 0x8E2AF83C
	unk_8E2AF83C : 0x006FBA20,

	// mapped fnid 0x8F29A4A4
	unk_8F29A4A4 : 0x006FBD20,

	// mapped fnid 0x8F71C2DF
	unk_8F71C2DF : 0x006FBC10,

	// mapped fnid 0x9121C0C6
	unk_9121C0C6 : 0x006FBB30,

	// mapped fnid 0x91C2E500
	unk_91C2E500 : 0x006FBD08,

	// mapped fnid 0x92A609B2
	unk_92A609B2 : 0x006FBA28,

	// mapped fnid 0x93A6A450
	unk_93A6A450 : 0x006FBAC8,

	// mapped fnid 0x986EC8D3
	unk_986EC8D3 : 0x006FBB88,

	// mapped fnid 0x99A5F404
	unk_99A5F404 : 0x006FBBA8,

	// mapped fnid 0x9AD2E524
	unk_9AD2E524 : 0x006FBBF0,

	// mapped fnid 0x9AF9918E
	unk_9AF9918E : 0x006FBBD8,

	// mapped fnid 0x9B1FEAA3
	unk_9B1FEAA3 : 0x006FBA60,

	// mapped fnid 0x9C279BCF
	unk_9C279BCF : 0x006FBA48,

	// mapped fnid 0x9C4E9B5C
	unk_9C4E9B5C : 0x006FD498,

	// mapped fnid 0x9C6EEE24
	unk_9C6EEE24 : 0x006FD5A0,

	// mapped fnid 0x9FC0AA39
	unk_9FC0AA39 : 0x006FBD28,

	// mapped fnid 0xA10195F4
	unk_A10195F4 : 0x006FBB60,

	// mapped fnid 0xA21246C2
	unk_A21246C2 : 0x006FBAF8,

	// mapped fnid 0xA51FFBF9
	unk_A51FFBF9 : 0x006FBC40,

	// mapped fnid 0xA79070D5
	unk_A79070D5 : 0x006FBA68,

	// mapped fnid 0xACDDC98E
	unk_ACDDC98E : 0x006FBA38,

	// mapped fnid 0xAF44BFBF
	unk_AF44BFBF : 0x006FD540,

	// mapped fnid 0xB517EC40
	unk_B517EC40 : 0x006FD4B0,

	// mapped fnid 0xB84451B2
	unk_B84451B2 : 0x006FCB78,

	// mapped fnid 0xC0A2CB93
	unk_C0A2CB93 : 0x006FBC98,

	// mapped fnid 0xC0E39B97
	unk_C0E39B97 : 0x006FBBF8,

	// mapped fnid 0xC13930A7
	unk_C13930A7 : 0x006FBAA8,

	// mapped fnid 0xC85E47B8
	unk_C85E47B8 : 0x006FBAB0,

	// mapped fnid 0xCAA3E8E7
	unk_CAA3E8E7 : 0x006FBBC8,

	// mapped fnid 0xCBF8BC6E
	unk_CBF8BC6E : 0x006FBA98,

	// mapped fnid 0xCC31BBCF
	unk_CC31BBCF : 0x006FBBC0,

	// mapped fnid 0xCFD2CA7D
	unk_CFD2CA7D : 0x006FD4A0,

	// mapped fnid 0xD42045F9
	unk_D42045F9 : 0x006FD598,

	// mapped fnid 0xD477DB73
	unk_D477DB73 : 0x006FBCB0,

	// mapped fnid 0xD5B38646
	unk_D5B38646 : 0x006FD5A8,

	// mapped fnid 0xD68351F0
	unk_D68351F0 : 0x006FBD60,

	// mapped fnid 0xDC2A512E
	unk_DC2A512E : 0x006FBB68,

	// mapped fnid 0xDC980E61
	unk_DC980E61 : 0x006FBB18,

	// mapped fnid 0xDDB635E1
	unk_DDB635E1 : 0x006FBA30,

	// mapped fnid 0xE20104BE
	unk_E20104BE : 0x006FBBB0,

	// mapped fnid 0xE35D54E3
	unk_E35D54E3 : 0x006FBC00,

	// mapped fnid 0xE413CD78
	unk_E413CD78 : 0x006FD4F0,

	// mapped fnid 0xE44F29F4
	unk_E44F29F4 : 0x006FD488,

	// mapped fnid 0xE4A68606
	unk_E4A68606 : 0x006FBC08,

	// mapped fnid 0xE65867F4
	unk_E65867F4 : 0x006FBB80,

	// mapped fnid 0xE7C34044
	unk_E7C34044 : 0x006FBCC8,

	// mapped fnid 0xE836E451
	unk_E836E451 : 0x006FBB10,

	// mapped fnid 0xE932A8C0
	unk_E932A8C0 : 0x006E5B30,

	// mapped fnid 0xED372406
	unk_ED372406 : 0x006FBA18,

	// mapped fnid 0xED9E5178
	unk_ED9E5178 : 0x006FBC50,

	// mapped fnid 0xF399CA36
	unk_F399CA36 : 0x006FBCD0,

	// mapped fnid 0xF4AD1B8A
	unk_F4AD1B8A : 0x006FBC88,

	// mapped fnid 0xFE92A9D8
	unk_FE92A9D8 : 0x006FBAF0,

	// mapped fnid 0xFF0309A5
	unk_FF0309A5 : 0x006FBD58,

	// mapped fnid 0xFF4A1633
	unk_FF4A1633 : 0x006FD490
}


// VSH Common Functions
vshcommon_v481D =
{
	lib_fnid_ptr: 0X006452C4, // ExportFNIDTable_vshcommon
	lib_func_ptr: 0x006455F8, // ExportStubTable_vshcommon
	
	// mapped fnid 0x00EDDB5B
	unk_EDDB5B : 0x006EE428,

	// mapped fnid 0x015D4314
	unk_15D4314 : 0x006EE230, // system_plugin reference

	// mapped fnid 0x025EC4EE
	unk_25EC4EE : 0x006EE570,

	// mapped fnid 0x09A43140
	unk_9A43140 : 0x006EE830, // /dev_hdd0/vsh/pushlist

	// mapped fnid 0x0A007C99
	unk_A007C99 : 0x006EE7D8,

	// mapped fnid 0x0BECDA92
	unk_BECDA92 : 0x006EE7F0,

	// mapped fnid 0x0E9E8DA5
	unk_E9E8DA5 : 0x006EE208, // msg_no

	// mapped fnid 0x0EBAC3B5
	unk_EBAC3B5 : 0x006EE300, // system_plugin reference

	// mapped fnid 0x12D25E5F
	unk_12D25E5F : 0x006EE258,

	// mapped fnid 0x1379FF05
	unk_1379FF05 : 0x006EE488,

	// mapped fnid 0x13BAFB22
	unk_13BAFB22 : 0x006EE868,

	// mapped fnid 0x13F9024E
	unk_13F9024E : 0x006EE6F0,

	// mapped fnid 0x1452A4D3
	unk_1452A4D3 : 0x006EE648,

	// mapped fnid 0x14FF1DDC
	unk_14FF1DDC : 0x006EE248,

	// mapped fnid 0x16106ACD
	unk_16106ACD : 0x006EE658, // impose_plugin

	// mapped fnid 0x16E29622
	unk_16E29622 : 0x006EE0F8,

	// mapped fnid 0x1851C6A6
	unk_1851C6A6 : 0x006EE308,

	// mapped fnid 0x19535F4C
	unk_19535F4C : 0x006EE6B0,

	// mapped fnid 0x21806775
	unk_21806775 : 0x006EE3E8,

	// mapped fnid 0x2438F1A4
	unk_2438F1A4 : 0x006EE138, // system_plugin reference

	// mapped fnid 0x24FF1870
	unk_24FF1870 : 0x006EE2B8,

	// mapped fnid 0x25111EFB
	unk_25111EFB : 0x006EE108,

	// mapped fnid 0x252838CF
	unk_252838CF : 0x006EE790,

	// mapped fnid 0x26F18EDF
	unk_26F18EDF : 0x006EE200, // msg_enter

	// mapped fnid 0x28549FD0
	unk_28549FD0 : 0x006EE228,

	// mapped fnid 0x2D2F3A6E
	unk_2D2F3A6E : 0x006EE778,

	// mapped fnid 0x31573F9A
	unk_31573F9A : 0x006EE720,

	// mapped fnid 0x33C12393
	unk_33C12393 : 0x006EE398,

	// mapped fnid 0x34A05733
	unk_34A05733 : 0x006EE818, // _Export_stdc_memset reference

	// mapped fnid 0x3851B803
	unk_3851B803 : 0x006EE798,

	// mapped fnid 0x38815260
	unk_38815260 : 0x006EE2E0,

	// mapped fnid 0x390E5621
	unk_390E5621 : 0x006EE618,

	// mapped fnid 0x39D01FCA
	unk_39D01FCA : 0x006EE800,

	// mapped fnid 0x3A8D0E1C
	unk_3A8D0E1C : 0x006EE2B0,

	// mapped fnid 0x3B634FCC
	unk_3B634FCC : 0x006EE2D0,

	// mapped fnid 0x3F731CC3
	unk_3F731CC3 : 0x006EE310, // _Export_vshcommon_1851C6A6 reference

	// mapped fnid 0x3F8C6AED
	unk_3F8C6AED : 0x006EE708,

	// mapped fnid 0x425277FA
	unk_425277FA : 0x006EE2E8,

	// mapped fnid 0x44726825
	unk_44726825 : 0x006EE780,

	// mapped fnid 0x459C02B6
	unk_459C02B6 : 0x006EE390,

	// mapped fnid 0x4A6E257D
	unk_4A6E257D : 0x006EE4A8,

	// mapped fnid 0x4B8EE123
	unk_4B8EE123 : 0x006EE730,

	// mapped fnid 0x50CBEE73
	unk_50CBEE73 : 0x006EE888,

	// mapped fnid 0x50DE40CE
	unk_50DE40CE : 0x006EE330,

	// mapped fnid 0x52692705
	unk_52692705 : 0x006EE758,

	// mapped fnid 0x53ECE7ED
	unk_53ECE7ED : 0x006EE480,

	// mapped fnid 0x54D13728
	unk_54D13728 : 0x006EE7B8, // game_plugin

	// mapped fnid 0x55A60B1A
	unk_55A60B1A : 0x006EE1D8, // msgdialog_plugin reference

	// mapped fnid 0x5723C3C1
	unk_5723C3C1 : 0x006EE100,

	// mapped fnid 0x5A6C0DB6
	unk_5A6C0DB6 : 0x006EE350,

	// mapped fnid 0x5C9F85CB
	unk_5C9F85CB : 0x006EE600,

	// mapped fnid 0x5CE195FA
	unk_5CE195FA : 0x006EE458, // system_plugin reference

	// mapped fnid 0x5DC484F8
	unk_5DC484F8 : 0x006EE440,

	// mapped fnid 0x5DD71B31
	unk_5DD71B31 : 0x006EE4A0,

	// mapped fnid 0x60DEE5B3
	unk_60DEE5B3 : 0x006EE148, // system_plugin reference

	// mapped fnid 0x61D17188
	unk_61D17188 : 0x006EE420,

	// mapped fnid 0x61D97E3B
	unk_61D97E3B : 0x006EE260,

	// mapped fnid 0x63210A1C
	unk_63210A1C : 0x006EE2A0,

	// mapped fnid 0x6A784AE5
	unk_6A784AE5 : 0x006EE340,

	// mapped fnid 0x6DF64AAF
	unk_6DF64AAF : 0x006EE870, // _Export_sysPrxForUser_sys_lwmutex_lock reference

	// mapped fnid 0x6F5A9C38
	unk_6F5A9C38 : 0x006EE650, // _Export_xsetting_4712F276 reference

	// mapped fnid 0x6FD850FF
	unk_6FD850FF : 0x006EE0D8,

	// mapped fnid 0x73B454A2
	unk_73B454A2 : 0x006EE628,

	// mapped fnid 0x73F85259
	unk_73F85259 : 0x006EE120, // system_plugin reference

	// mapped fnid 0x746C5F88
	unk_746C5F88 : 0x006EE1F0, // msg_option

	// mapped fnid 0x74EAD50B
	unk_74EAD50B : 0x006EE3B0,

	// mapped fnid 0x7504447B
	unk_7504447B : 0x006EE3D8,

	// mapped fnid 0x75DC9C2D
	unk_75DC9C2D : 0x006EE150, // system_plugin reference

	// mapped fnid 0x774C200A
	unk_774C200A : 0x006EE858,

	// mapped fnid 0x79A546A1
	unk_79A546A1 : 0x006EE7F8,

	// mapped fnid 0x79A562D5
	unk_79A562D5 : 0x006EE158, // system_plugin reference

	// mapped fnid 0x7BD54E23
	unk_7BD54E23 : 0x006EE6F8,

	// mapped fnid 0x7C139D36
	unk_7C139D36 : 0x006EE388,

	// mapped fnid 0x7C3ACA85
	unk_7C3ACA85 : 0x006EE6A8,

	// mapped fnid 0x7C7F21E0
	unk_7C7F21E0 : 0x006EE640,

	// mapped fnid 0x7EE0068F
	unk_7EE0068F : 0x006EE838,

	// mapped fnid 0x7F5C551B
	unk_7F5C551B : 0x006EE240, // system_plugin reference

	// mapped fnid 0x83E28B3C
	unk_83E28B3C : 0x006EE698,

	// mapped fnid 0x85A3D9F3
	unk_85A3D9F3 : 0x006EE338,

	// mapped fnid 0x85AD7A58
	unk_85AD7A58 : 0x006EE188,

	// mapped fnid 0x884E740C
	unk_884E740C : 0x006EE250,

	// mapped fnid 0x8B2110D5
	unk_8B2110D5 : 0x006EE8A0, // _Export_xsetting_CC56EB2D reference

	// mapped fnid 0x8B7F8F80
	unk_8B7F8F80 : 0x006EE6A0,

	// mapped fnid 0x8BA1A7D5
	unk_8BA1A7D5 : 0x006EE6C0,

	// mapped fnid 0x8C7F3E6F
	unk_8C7F3E6F : 0x006EE1C0, // msgdialog_plugin reference

	// mapped fnid 0x8D173737
	unk_8D173737 : 0x006EE218,

	// mapped fnid 0x8F0C0B33
	unk_8F0C0B33 : 0x006EE7E0,

	// mapped fnid 0x933A54F5
	unk_933A54F5 : 0x006EE348,

	// mapped fnid 0x940FE097
	unk_940FE097 : 0x006EE6D0,

	// mapped fnid 0x94F43BE7
	unk_94F43BE7 : 0x006EE238, // system_plugin reference

	// mapped fnid 0x95302AE6
	unk_95302AE6 : 0x006EE320,

	// mapped fnid 0x97E53BCA
	unk_97E53BCA : 0x006EE7B0,

	// mapped fnid 0x980513A4
	unk_980513A4 : 0x006EE5F0, // msg_press_ps_button reference

	// mapped fnid 0x98D73408
	unk_98D73408 : 0x006EE288,

	// mapped fnid 0x98E05EDA
	unk_98E05EDA : 0x006EE668,

	// mapped fnid 0x9BD8429E
	unk_9BD8429E : 0x006EE130, // system_plugin reference

	// mapped fnid 0x9CB87B0D
	unk_9CB87B0D : 0x006EE3A0,

	// mapped fnid 0x9DAB12AA
	unk_9DAB12AA : 0x006EE548,

	// mapped fnid 0x9EA67737
	unk_9EA67737 : 0x006EE8A8, // _Export_xsetting_CC56EB2D reference

	// mapped fnid 0xA05B2B54
	unk_A05B2B54 : 0x006EE890,

	// mapped fnid 0xA20E43DB
	unk_A20E43DB : 0x006EE3D0,

	// mapped fnid 0xA2312283
	unk_A2312283 : 0x006EE820,

	// mapped fnid 0xA6525AE6
	unk_A6525AE6 : 0x006EE4C0,

	// mapped fnid 0xAA6178EE
	unk_AA6178EE : 0x006EE680,

	// mapped fnid 0xAB6951A3
	unk_AB6951A3 : 0x006EE490,

	// mapped fnid 0xAB7E2E69
	unk_AB7E2E69 : 0x006EE738,

	// mapped fnid 0xABCA6F32
	unk_ABCA6F32 : 0x006EE498,

	// mapped fnid 0xABEB01DA
	unk_ABEB01DA : 0x006EE5D0, // system_plugin reference

	// mapped fnid 0xAE251F8F
	unk_AE251F8F : 0x006EE190,

	// mapped fnid 0xAF168DD4
	unk_AF168DD4 : 0x006EE740,

	// mapped fnid 0xB045A8DC
	unk_B045A8DC : 0x006EE318,

	// mapped fnid 0xB0B677BC
	unk_B0B677BC : 0x006EE6B8,

	// mapped fnid 0xB2D04619
	unk_B2D04619 : 0x006EE530,

	// mapped fnid 0xB49AF109
	unk_B49AF109 : 0x006EE840, // _Export_sysPrxForUser_sys_lwmutex_destroy reference

	// mapped fnid 0xB4BAF07E
	unk_B4BAF07E : 0x006EE7A8,

	// mapped fnid 0xB53FD739
	unk_B53FD739 : 0x006EE788,

	// mapped fnid 0xB6C9D197
	unk_B6C9D197 : 0x006EE6E8,

	// mapped fnid 0xB7517F9B
	unk_B7517F9B : 0x006EE620,

	// mapped fnid 0xB7F2EFD5
	unk_B7F2EFD5 : 0x006EE538,

	// mapped fnid 0xB8E256D7
	unk_B8E256D7 : 0x006EE210, // msg_yes

	// mapped fnid 0xB9473E7A
	unk_B9473E7A : 0x006EE160,

	// mapped fnid 0xB9FDA9D4
	unk_B9FDA9D4 : 0x006EE6E0,

	// mapped fnid 0xBB2EC9CD
	unk_BB2EC9CD : 0x006EE5C8,

	// mapped fnid 0xBC200324
	unk_BC200324 : 0x006EE850,

	// mapped fnid 0xBF88BEE4
	unk_BF88BEE4 : 0x006EE0E8,

	// mapped fnid 0xC08C2D22
	unk_C08C2D22 : 0x006EE660,

	// mapped fnid 0xC27EF445
	unk_C27EF445 : 0x006EE630,

	// mapped fnid 0xC398D8BA
	unk_C398D8BA : 0x006EE328,

	// mapped fnid 0xC499E073
	unk_C499E073 : 0x006EE4B0,

	// mapped fnid 0xC8FFD88F
	unk_C8FFD88F : 0x006EE0F0,

	// mapped fnid 0xCA3CBF5D
	unk_CA3CBF5D : 0x006EE770,

	// mapped fnid 0xCC2C67F2
	unk_CC2C67F2 : 0x006EE828,

	// mapped fnid 0xCCD2C319
	unk_CCD2C319 : 0x006EE1E8, // msg_cancel

	// mapped fnid 0xCDF4C62A
	unk_CDF4C62A : 0x006EE478, // system_plugin reference

	// mapped fnid 0xCE57965F
	unk_CE57965F : 0x006EE3A8,

	// mapped fnid 0xD010D338
	unk_D010D338 : 0x006EE848,

	// mapped fnid 0xD17A0968
	unk_D17A0968 : 0x006EE670,

	// mapped fnid 0xD1DE9F38
	unk_D1DE9F38 : 0x006EE168,

	// mapped fnid 0xD55C9CEE
	unk_D55C9CEE : 0x006EE638,

	// mapped fnid 0xD59AEAD0
	unk_D59AEAD0 : 0x006EE438,

	// mapped fnid 0xD59C7D79
	unk_D59C7D79 : 0x006EE7E8,

	// mapped fnid 0xD81578DB
	unk_D81578DB : 0x006EE118,

	// mapped fnid 0xD87C3834
	unk_D87C3834 : 0x006EE270,

	// mapped fnid 0xD996B261
	unk_D996B261 : 0x006EE750,

	// mapped fnid 0xD9B63654
	unk_D9B63654 : 0x006EE5A8,

	// mapped fnid 0xDAC7FC51
	unk_DAC7FC51 : 0x006EE4C8,

	// mapped fnid 0xDB0320D8
	unk_DB0320D8 : 0x006EE7D0,

	// mapped fnid 0xDC712BA3
	unk_DC712BA3 : 0x006EE6C8,

	// mapped fnid 0xDEC761F1
	unk_DEC761F1 : 0x006EE268,

	// mapped fnid 0xDFD99C55
	unk_DFD99C55 : 0x006EE298,

	// mapped fnid 0xE011E7D0
	unk_E011E7D0 : 0x006EE128, // system_plugin reference

	// mapped fnid 0xE21C3432
	unk_E21C3432 : 0x006EE448,

	// mapped fnid 0xE2D6F3D7
	unk_E2D6F3D7 : 0x006EE898,

	// mapped fnid 0xE43C21F6
	unk_E43C21F6 : 0x006EE198,

	// mapped fnid 0xE607C2BA
	unk_E607C2BA : 0x006EE460,

	// mapped fnid 0xE7DFF7FE
	unk_E7DFF7FE : 0x006EE578,

	// mapped fnid 0xE9790F7A
	unk_E9790F7A : 0x006EE608,

	// mapped fnid 0xEA790023
	unk_EA790023 : 0x006EE430,

	// mapped fnid 0xEA95C3F5
	unk_EA95C3F5 : 0x006EE2C0,

	// mapped fnid 0xEC44C999
	unk_EC44C999 : 0x006EE6D8,

	// mapped fnid 0xEC73D438
	unk_EC73D438 : 0x006EE0E0,

	// mapped fnid 0xEDB3F1F2
	unk_EDB3F1F2 : 0x006EE610,

	// mapped fnid 0xF06004CD
	unk_F06004CD : 0x006EE3B8,

	// mapped fnid 0xF1918912
	unk_F1918912 : 0x006EE3E0,

	// mapped fnid 0xF4E3246A
	unk_F4E3246A : 0x006EE678,

	// mapped fnid 0xF55812AE
	unk_F55812AE : 0x006EE3F8,

	// mapped fnid 0xF7A67D49
	unk_F7A67D49 : 0x006EE140, // system_plugin reference

	// mapped fnid 0xF995E53F
	unk_F995E53F : 0x006EE1F8, // msg_back

	// mapped fnid 0xF9E43DA2
	unk_F9E43DA2 : 0x006EE1E0, // msg_ok

	// mapped fnid 0xFAEA4EF9
	unk_FAEA4EF9 : 0x006EE880,

	// mapped fnid 0xFB104BD2
	unk_FB104BD2 : 0x006EE760,

	// mapped fnid 0xFDA63F52
	unk_FDA63F52 : 0x006EE290
}


// VSH Task Functions
vshtask_v481D =
{
	lib_fnid_ptr: 0x00647A08, // ExportFNIDTable_vshtask
	lib_func_ptr: 0x00647A1C, // ExportStubTable_vshtask
	
	// mapped fnid 0x0F80B71F
	unk_F80B71F : 0x006FBC48,

	// mapped fnid 0x166551C5
	unk_166551C5 : 0x006E6428,

	// mapped fnid 0x668E3C94
	unk_668E3C94 : 0x006E6430,

	// mapped fnid 0x8D03E0FD
	unk_8D03E0FD : 0x006E6400,

	// mapped fnid 0xA02D46E7
	unk_A02D46E7 : 0x006E6408
}


// X-Setting Functions
xsetting_v481D =
{
	lib_fnid_ptr: 0x0064300C, // ExportFNIDTable_xsetting
	lib_func_ptr: 0x00643080, // ExportStubTable_xsetting
	
	
}


// SCE Allocator Functions
sceAllocatorFcns_v481D =
{
	malloc : 0x006FB9C8,
	free : 0x006FB9F8,
	memalign : 0x006FB9E8
}


// SCE FS Functions
sceFSFcns_v481D =
{
	cellFsRename : 0x006FD1E0,
	cellFsClose : 0x006FCDE8,
	cellFsOpen : 0x006FD1F0,
	cellFsWrite : 0x006FCDE0,
	cellFsRead : 0x006FCDD8,
	cellFsMkdir : 0x006FD1A8,
	cellFsRmdir : 0x006FD208,
	cellFsChmod : 0x006FD140,
	cellFsUnlink : 0x006FD200
}


// SCE VSH Task Functions
sceVSHTaskFcns_v481D =
{
	vshtask_notify : 0x006E6408
}


// SCE VSH Functions
sceVSH_v481D =
{
	Heap_Create : 0x006FBD40,
	Heap_Alloc : 0x006FBD30,
	Heap_Destroy : 0x006FBD38,
	Heap_Free : 0x006FBD20,
	vsh_E7C34044 : 0x006FBCC8, //retrieves vsh memory container by "id" 0=game,1=app,2=debug,3=fg, 4=bg  sys_memory_container_t vsh_E7C34044(int id) 
	cellFsUtilMount : 0x006FD490
}

// SCE Lib Functions
sceLibcFcns_v481D =
{
	abort : 0x006FBFE8,
	exit : 0x006FC018,
    strcpy : 0x006FC2C0,
	mkdir : 0x006FC3F0,
	mbrtowc : 0x006FC0D8,
	sprintf : 0x006FC330,
	strlen : 0x006FC170,
	snprintf : 0x006FC320,
	strcmp : 0x006FC2B8,
	fputs : 0x006FC070,
	memset : 0x006FC470,
	memmove : 0x006FC0F8,
	wcslen : 0x006FC210,
	fopen : 0x006FC060,
	stat : 0x006FC400,
	rename : 0x006FC130,
	rmdir : 0x006FC3F8,
	memcpy : 0x006FC0F0,
	strcat : 0x006FC2A8,
	strcasecmp : 0x006FC2E0,
	printf : 0x006FC310,
	memcmp : 0x006FC478,
	strstr : 0x006FC188,
	fread : 0x006FC078,
	strchr : 0x006FC2B0,
	fclose : 0x006FC020,
	strncmp : 0x006FC2D0,
	strtok : 0x006FC190,
	unlink : 0x006FC418,
	fwrite : 0x006FC0A0,
	fprintf : 0x006FC2F0,
	strdup : 0x006FC1A8,
	mbstowcs : 0x006FC0E0
}


// Check Firmware Version
version_deps =
{
	v4_81D:
	{
        "SceWebKit":        
        {
            gadgets:
            {		
				/*PPC
				mflr
				bl
				blr
				
				*/			
				/*  ARM
				ldmr0 : 0x3bc534,			//  ldm	r0, {r0, r3, r4, r9, fp, ip, pc}
				ldmr1 : 0x453ff0,   		//  ldm     r1, {r0, ip, lr, pc}
				iloop : 0x9851c | 1,        //  infinite loop
                bxlr : 0x2b3a | 1,          //  bx lr
				str3 : 0x7f4ac | 1,         //  str     r3, [r0, #4]; bx  lr
                movr30 : 0x535278 | 1       //  movs    r3, r0 ; bx lr 
				*/
            },
            functions: {}
        },
		"SceFS":
		{
			functions : sceFSFcns_v481D,
			gadgets : {}
		},
		"SceAllocator":
		{
			functions : sceAllocatorFcns_v481D, 
            gadgets : {}
		},
        "SceVshTask":
        { 
            functions : sceVSHTaskFcns_v481D, 
            gadgets : {}
        },
		"SceVsh":
		{
			functions : sceVSH_v481D,
			gadgets : {}
		},
        "SceLibc":
        {
            functions: sceLibcFcns_v481D,
            gadgets : 
            {
               // scesetjmp : 0x13EE0 | 1,
               // scelongjmp : 0x13F10 | 1
            }
        }
    }
};

