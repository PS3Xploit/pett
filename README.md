<h1 align="center">PS3 Exploitation Tutorial Template (PETT)</h1>

* Official WebSite: [**ps3xploit.com**](https://ps3xploit.com)
* Official PS3 WebKit ROP Tutorial Thread at: [**psx-place.com**](http://www.psx-place.com/threads/webkit-rop-chain-tutorials-creation-editing-debugging-ps3-development.15826)
* Official Twitter Main Releases: [**twitter.com/esc0rtd3w**](https://twitter.com/esc0rtd3w)
* Current PETT Live Version: [**ps3xploit.github.io/pett**](https://ps3xploit.github.io/pett) (Alert: This not work on PS3 Web Browser)

<br/>

<h3 align="center">Preview Images</h3>

<p align="center"><img src="https://i.imgur.com/q391Fkr.png" width="75%"></p>
<p align="center"><img src="https://i.imgur.com/nYGdjn6.png" width="75%"></p>
<p align="center"><img src="https://i.imgur.com/7qgQbSD.png" width="75%"></p>

<br/>

<i><h3 align="center">SELECT YOUR LANGUAGE AND THEN SET YOUR INDEX PAGE TO PS3 HOMEPAGE FOR BEST RESULTS!!!</h3></i>

<br/>

<h3>Multi-Language Translator Credits</h3>

Language		| Code  | Translators
---------------:|:-----:|:-----------
Arabic			| ar_ar | @[**Azooz_yos**](https://twitter.com/Azooz_yos)
Català Espanya	| es_ct | @[**minicm94123**](https://twitter.com/minicm94123)
Dutch NL		| nl_nl | @[**CompanyFart**](https://twitter.com/CompanyFart)
French			| fr_fr | @[**valentinbreiz**](https://twitter.com/valentinbreiz) / @[**humanshield85**](https://twitter.com/humanshield85)
German DE		| de_de | @[**FlatracerMod**](https://twitter.com/FlatracerMod)
Hindi IN		| hi_in | @[**minicm94123**](https://twitter.com/minicm94123)
Italian			| it_it | @[**neno20115**](https://twitter.com/neno20115)
Polish			| pl_pl | @[**Roxu14**](https://twitter.com/Roxu14)
Portuguese BR	| pt_br | @[**HollowChris**](https://twitter.com/HollowChris) / @[**Caio99BR**](https://twitter.com/Caio99BR)
Russian			| ru_ru | @[**ErikPshat**](https://twitter.com/ErikPshat)
Spanish LA		| es_la | @[**Ripp3RkoS**](https://twitter.com/Ripp3RkoS)
Spanish Spain	| es_sp | @[**Ivoyko**](https://twitter.com/Ivoyko)
Turkish TR   	| tr_tr | @[**yanealaka**](https://twitter.com/yanealaka)

<br/>

<h3>Version History</h3>

v0.1.6
* Added Türkçe TR Translation (thanks @yanealaka)
* Updated Search Functions

v0.1.5
* Updated Found and Verify Offset Colors
* Added new variables for verify and a few others
* Updated pt_br messages.js (thanks @Caio99BR)
* Fixed size in last arg in minver chain (only 1st 4 bytes read though for alert) (thanks @hexcsl)
* Added Hindi India Translation (thanks @minicm94123)
* Added Arabic Translation (thanks @Azooz_yos)
* Updated Language Selection Layout (thanks @ErikPshat)

v0.1.4
* Added Català Espanya Translation (thanks @minicm94123)
* Added German Translation (thanks @FlatracerMod)
* Updated Spanish LA (thanks @Ripp3RkoS)
* Updated Nederlands label on Language Selection index (thanks @CompanyFart)
* Misc Fixes In All Language Strings (thanks @ErikPshat)

v0.1.3
* Updated Português label on Language Selection index (thanks @gustavo1617)
* Added Dutch NL Translation (thanks @CompanyFart)
* Added French Translation (thanks @valentinbreiz)
* Fixed Typo In messages.js [pt_br]
* Updated GUI For Russian
* Fixed Memory Dump Options On Load
* Fixed Alert Message Text Not Loading Value From JS

v0.1.2
* Added Polish (thanks NiHuShu @Roxu14)
* Updated Multi-Language Files
* Pushed 1st Commit To GitHub

v0.1.1
* Fixed fail message if strings not found
* Updated HTML and JS for GUI
* Removed Default Settings option from GUI
* Fixed Misc Bugs

v0.1.0
* Cleaned Up and Fixed GUI (thanks @ErikPshat)
* Added New Strings To Multi-Language Files (@neno20115,@Ivoyko,@Ripp3RkoS,@HollowChris,@Caio99BR)
* Updated All Multi-Language Files (@ErikPshat)
* Updated File Size & TitleID Functions

v0.0.9
* Added Russian to languages (thanks @ErikPshat)
* Added Spanish Spain (thanks @Ivoyko)
* Updated Brazilian Portuguese (thanks @Caio99BR)
* Updated CSS and HTML meta tag (thanks @ErikPshat)
* Added Dump LV2 Syscall Table to chains (not working)
* Updated Behavior if no chain selected to autofocus on dropdown box

v0.0.8
* Moved Firmware Display to top of page
* Organized chains a bit more
* Added Debugging Chains Support
* Updated Preset Chains

v0.0.7
* Updated strings in messages.js
* Updated Debug Output colors
* Fixed a few typos
* Added Stackframe Verify option
* Updated GUI layout
* Updated String Output Messages
* Updated Multilanguage Files

v0.0.6
* Added Multi-Language Front-End GUI (thanks @neno20115)
* Added sys_storage_get_device_info and sys_storage_report_devices syscall chains

v0.0.5
* Added Brazilian Portuguese (thanks @HollowChris)
* Updated default register placeholder values (example: gadget 10 register 22 / 0x80141022)
* Added Stackframe Test to Default Chains

v0.0.4
* Fixed TitleID not checking full path length when replacing values
* Fixed 4.66 IDPS Offset
* Added sys_net Chains For Testing
* Added SysNet Dump Chain

v0.0.3
* Added Italian (thanks @neno20115), Spanish (thanks @Ripp3RkoS) Languages
* Added sys_net chains
* Added 4.66 IDPS VSH Offset (thanks @bqgcw8prJLtRJrb)
* Added Title ID Set In GUI
* Updated Paths

v0.0.2
* Added Multi-Language Support
* Updated Offset Search
* Added Beep Options
* Fixed Read/Write File Chain
* Merged most text from JS into messages.js

v0.0.1
* Initial Release Using 2.0 Exploit Base
* Full 4.xx Firmware Support
* Added Several Test Chains and Other Syscall Chains
