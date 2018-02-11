// PS3 Utilities Template
// PS3Xploit Team 2018 / ps3xploit.com


// Begin Functions

String.prototype.setCharAt = function(index,chr)
{
	if(index > this.length-1) {return this;}
	return this.substr(0,index)+chr+this.substr(index+1);
};

String.prototype.toHex8 = function()
{
	return ('00' + this).substr(-2);
};

String.prototype.toHex16 = function()
{
	return ('0000' + this).substr(-4);
};

String.prototype.toHex32 = function()
{
	return ('00000000' + this).substr(-8);
};

String.prototype.asciiAt = function(i)
{
	return this.charCodeAt(i)&0xFF;
};

String.prototype.toAscii = function(hex_16)
{
    var ascii='';
	var i=0;
	while(i<this.length){if(hex_16===true){ascii += this.charCodeAt(i).toString(16).toHex16();} else {ascii += this.charCodeAt(i).toString(16);}i+=1;}
	return ascii;
};

String.prototype.convert=function(ascii)
{
	if(this.length<1){return '';}
	var asciistr='';var asciichr='';var i=0;var ret=[];
	if(ascii===true){asciistr = this;}
	else {asciistr = this.toAscii();}
	while((asciistr.length%4)!==0){asciistr+='00';}
	if(asciistr.substr(asciistr.length-3,2)!=='00'){asciistr+='0000';}
    while(i<asciistr.length){
		asciichr = asciistr.substr(i, 4);
		ret.push(String.fromCharCode(parseInt(asciichr, 16)));
		i+=4;
    }
    return ret.join('');
};

String.prototype.convertedSize = function(ascii)
{
	if(this.length<1){return 0;}
	var asciistr='';
	if(ascii===true){asciistr=this;}
	else {asciistr = this.toAscii();}
	while((asciistr.length%4)!==0){asciistr+='00';}
	if(asciistr.substr(asciistr.length-3,2)!=='00'){asciistr+='0000';}
	return asciistr.length/2;
};

String.prototype.replaceAt=function(index, ch)
{
	return this.substr(0,index)+ch+this.substr(index+ch.length);
};

String.prototype.repeat = function(num)
{
    return new Array(num+1).join(this);
};

/*
function asciiAt(str, i)
{
	return str.charCodeAt(i)&0xFF;
}
*/

function str2ascii(str)
{
	var ascii = "";
	var i = 0;
	for (; i < str.length; i++){ascii += str.charCodeAt(i).toString(16);}
	return ascii;
}

function hexToBytes(hex)
{
	var bytes = [];
    for (var c = 0; c < hex.length; c += 2)
    bytes.push(parseInt(hex.substr(c, 2), 16));
    return bytes;
}

/*
function Repeat(s, n)
{
	var a = [];
	while(a.length < n)
	{
		a.push(s);
	}
	return a.join('');
}
*/

function hexh2bin(hex_val)
{
	return String.fromCharCode(hex_val);
}


function hexw2bin(hex_val)
{
	return String.fromCharCode(hex_val >> 16) + String.fromCharCode(hex_val);
}

function hexdw2bin(hex_val) // 32bit support only (due to javascript 53bit integer limitation)
{
	return hexw2bin(0) + hexw2bin(hex_val); // 00000000 padding
}

function k_hexdw2bin(hex_val) // 32bit support only (due to javascript 53bit integer limitation)
{
	return hexw2bin(0x80000000) + hexw2bin(hex_val); // 80000000 padding
}

function s2hex(str)
{
	var hex = [];
	var  i = 0;
    for (;i < str.length; i++) {
		hex.push(hex16(str.charCodeAt(i).toString(16)));
    }
	return hex.join("");
}

function bytesToHex(str)
{
	var hex = [];
    for (var  i = 0; i < str.length; i++) {
		if(str.charCodeAt(i)==0){
			hex.push(hex8((str.charCodeAt(i) >>> 4).toString(16)));
			hex.push(hex8((str.charCodeAt(i) & 0xF).toString(16)));
		}
		else
		{
			hex.push((str.charCodeAt(i) >>> 4).toString(16));
			hex.push((str.charCodeAt(i) & 0xF).toString(16));
		}
    }
	return hex.join("");
}

function hex32(s)
{
	return ('00000000' + s).substr(-8);
}

function hex16(s)
{
	return ('0000' + s).slice(-4)
}

function hex8(s)
{
	return ('00' + s).substr(-2);
}

function sleep(milliseconds)
{
	var start = new Date().getTime();
	for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds)break;
	}
}


// String To Unescape
function str2u(str)
{
	var asciistr = str2ascii(str);
	if((asciistr.length%4)!=0){asciistr+='00';str2u_adjusted=true;}
	var asciichr;
    var ret = [];
    var i;
    var len;
    for(i = 0, len = asciistr.length; i < len; i += 4) {
	   asciichr = asciistr.substr(i, 4);
       ret.push(String.fromCharCode(parseInt(asciichr, 16)));
    }
    return ret.join('');
}

function bin2unescape(str, n)
{
   var a = [], start=0;
   while(start<str.length) {
   if (a === "\0") {
    str.replace("\0", "\\0");
   }
      a.push(str.slice(start, start+n));
      start+=n;
   }
   return (a.join("" + "\\u"));
}

function logAdd(txt)
{
	if(debug_mode===true)
	{
		if(document.getElementById('log').innerHTML==="")setInnerHTML(document.getElementById('log'),hr);
		addInnerHTML(document.getElementById('log'),txt + br); 
	}
}

function logEntry()
{
		var _logger = document.getElementById("log");
		while (_logger.firstChild) {_logger.removeChild(_logger.firstChild);}
		if (!_logger) return 0;
		var logger = document.createElement("div");
		if (_logger.hasChildNodes()){
			_logger.insertBefore(logger, _logger.firstChild);
		}else{
			_logger.appendChild(logger);
		}
		return logger;
}

function clearLogEntry()
{
	setInnerHTML(document.getElementById('log'),"");
}

function writeEnvInfo()
{
	setInnerHTML(document.getElementById('footer'),hr+ua_msg);
}

/*
function setCharAt(str,index,chr)
{
	if(index > str.length-1) return str;
	return str.substr(0,index) + chr + str.substr(index+1);
}
*/

/*
String.prototype.replaceAt=function(index, ch){
	return this.substr(0, index) + ch + this.substr(index+ch.length);
}
*/

// Spoiler On Main HTML Page
function showSpoiler(obj)
{
	var inner = obj.parentNode.getElementsByTagName("div")[0];
	if (inner.style.display == "none")
		inner.style.display = "";
	else
		inner.style.display = "none";
}

function setCookie(value){
    cookie_set=document.cookie = value;
}

function getCookie(){
    cookie_get=document.cookie;
	return cookie_get;
}

