const a2_0x49569c=a2_0x4dba;(function(_0x1be651,_0x3ace7c){const _0x59231d=a2_0x4dba,_0x1ef4b9=_0x1be651();while(!![]){try{const _0x2b7803=-parseInt(_0x59231d(0x1de))/0x1+-parseInt(_0x59231d(0x1b6))/0x2+-parseInt(_0x59231d(0x1c9))/0x3+parseInt(_0x59231d(0x19a))/0x4*(parseInt(_0x59231d(0x1dd))/0x5)+-parseInt(_0x59231d(0x1bd))/0x6+-parseInt(_0x59231d(0x1c1))/0x7*(-parseInt(_0x59231d(0x19d))/0x8)+-parseInt(_0x59231d(0x18b))/0x9*(-parseInt(_0x59231d(0x1c7))/0xa);if(_0x2b7803===_0x3ace7c)break;else _0x1ef4b9['push'](_0x1ef4b9['shift']());}catch(_0x49e564){_0x1ef4b9['push'](_0x1ef4b9['shift']());}}}(a2_0x3d26,0x25c84));import{API}from'../api/api.js';function a2_0x4dba(_0x534ce8,_0x6857fc){const _0x3d2696=a2_0x3d26();return a2_0x4dba=function(_0x4dba89,_0x112314){_0x4dba89=_0x4dba89-0x184;let _0x3d1905=_0x3d2696[_0x4dba89];return _0x3d1905;},a2_0x4dba(_0x534ce8,_0x6857fc);}import{Helper}from'../utils/helper.js';function a2_0x3d26(){const _0x1b2b8e=['WordArray','POST','AES','https://www.binance.com','Failed\x20To\x20Start\x20Game','forEach','dailyCheckIn','generalBody','query','user','Completing\x20Game\x20','blocked','372FaqZqz','accessToken','startGame','8LyjMxK','Starting\x20Game...','cryptoMinerConfig','join','fetch','message','stringify','random','...','encryptData','includes','REWARD','size','parse','completeGameErrorCount','resourceId','ciphertext','/growth/v1/friendly/growth-paas/mini-app-activity/third-party/task/complete','\x20-\x20','/growth/v1/friendly/growth-paas/mini-app-activity/third-party/task/list','Successfully\x20Get\x20Task','lib','/growth/v1/friendly/growth-paas/mini-app-activity/third-party/game/start','Successfully\x20Complete\x20Task\x20','BONUS','252456PcwSMz','itemSettingList','Failed\x20To\x20Complete\x20Task\x20',',\x20Retrying\x20after\x205\x20seconds','toString','Failed\x20To\x20Login\x20-\x20','Getting\x20Available\x20Task...','187848XIqFPU','completeGame','now','isFinite','1390823udwpuy','Try\x20To\x20Completing\x20Task\x20','status','completeTasks','Utf8','gameTag','3450xvRJGG','code','120456edyTvu','/growth/v1/friendly/growth-paas/mini-app-activity/third-party/game/complete','https://www.binance.com/en/game/tg/moon-bix','/growth/v1/friendly/growth-paas/mini-app-activity/third-party/user/user-info','Successfully\x20Daily\x20Check\x20In','account','token','Try\x20to\x20Daily\x20Check\x20In..','find','rewardValueList','generateGameDataForRewards','telegram','getTask','delay','getUserInfo','Failed\x20to\x20Complete\x20Game\x20With\x20Tag\x20','task','Failed\x20To\x20Daily\x20Check\x20In','TC-2056-DEFAULT-LOGIN','Getting\x20User\x20Information...','7620aIOOsj','86302EXmCCl','toFixed','type','generateEncryptedPayload','000000','Base64','quantity','min','/growth/v1/friendly/growth-paas/third-party/access/accessToken','enc','Try\x20to\x20Login...',',\x20Score\x20','info','\x20-\x20Delaying\x2010\x20seconds\x20befor\x20playing\x20Next\x20Game','Successfully\x20Start\x20Game\x20With\x20Tag\x20','data','length','Failed\x20To\x20Get\x20User\x20Information','value','push','map','filter','2565XRrcJm','taskList','Filtered\x20Task\x20'];a2_0x3d26=function(){return _0x1b2b8e;};return a2_0x3d26();}import a2_0x12fa42 from'crypto-js';import a2_0x7df050 from'../utils/logger.js';export class Core extends API{constructor(_0xfea7de,_0xbfaa2a,_0x243af9,_0x31ec94){const _0x170919=a2_0x4dba;super(_0xbfaa2a,_0x31ec94,'https://www.binance.com/bapi','https://www.binance.com',_0x170919(0x191),_0x170919(0x1cb)),this['account']=_0xfea7de,this[_0x170919(0x196)]=_0xbfaa2a,this['queryObj']=_0x243af9,this[_0x170919(0x195)]={'resourceId':0x808},this[_0x170919(0x1ab)]=0x0;}async['login'](_0x11386a=![]){const _0x20f863=a2_0x4dba;try{if(_0x11386a)await Helper[_0x20f863(0x1d6)](0x3e8,this[_0x20f863(0x1ce)],_0x20f863(0x1e8),this);const _0x2d7cec={'queryString':this[_0x20f863(0x196)],'socialType':_0x20f863(0x1d4)},_0xa6dad3=await this[_0x20f863(0x1a1)](_0x20f863(0x1e6),_0x20f863(0x18f),undefined,_0x2d7cec);if(_0xa6dad3[_0x20f863(0x1c3)]==0xc8){if(_0x11386a)await Helper[_0x20f863(0x1d6)](0x3e8,this[_0x20f863(0x1ce)],'Successfully\x20Login',this);this[_0x20f863(0x1cf)]=_0xa6dad3['data'][_0x20f863(0x19b)];}else{if(_0xa6dad3[_0x20f863(0x1a2)][_0x20f863(0x1a7)](_0x20f863(0x199)))throw Error('Failed\x20To\x20Login\x20-\x20Blocked\x20By\x20Cloudflare');else throw Error(_0x20f863(0x1bb)+_0xa6dad3['status']);}}catch(_0x5afac2){throw _0x5afac2;}}async[a2_0x49569c(0x1d7)](_0x40ab8c=![]){const _0x3b6c0a=a2_0x49569c;try{if(_0x40ab8c)await Helper[_0x3b6c0a(0x1d6)](0x3e8,this[_0x3b6c0a(0x1ce)],_0x3b6c0a(0x1dc),this);const _0x3fdde1=await this['fetch'](_0x3b6c0a(0x1cc),_0x3b6c0a(0x18f),this[_0x3b6c0a(0x1cf)],this[_0x3b6c0a(0x195)]);if(_0x3fdde1['status']==0xc8){this[_0x3b6c0a(0x197)]=_0x3fdde1[_0x3b6c0a(0x184)];if(_0x40ab8c)await Helper[_0x3b6c0a(0x1d6)](0x7d0,this['account'],'Successfully\x20Get\x20User\x20Information',this);}else throw Error(_0x3b6c0a(0x186));}catch(_0x253575){throw _0x253575;}}async[a2_0x49569c(0x1d5)](_0x30f55c=![]){const _0x58a30d=a2_0x49569c;try{if(_0x30f55c)await Helper[_0x58a30d(0x1d6)](0x3e8,this[_0x58a30d(0x1ce)],_0x58a30d(0x1bc),this);const _0x206160=await this[_0x58a30d(0x1a1)](_0x58a30d(0x1b0),_0x58a30d(0x18f),this[_0x58a30d(0x1cf)],this[_0x58a30d(0x195)]);if(_0x206160[_0x58a30d(0x1c3)]==0xc8){const _0x3ac8d6=[];_0x206160[_0x58a30d(0x184)][_0x58a30d(0x184)]['map'](_0x159962=>{const _0x3acc10=_0x58a30d;_0x3ac8d6['push'](..._0x159962[_0x3acc10(0x18c)][_0x3acc10(0x184)]);}),this[_0x58a30d(0x1d9)]=_0x3ac8d6[_0x58a30d(0x18a)](_0x1cb6b4=>_0x1cb6b4['code']!='TC-2056-DEFAULT-THIRD_PARTY_BIND'&&_0x1cb6b4['type']!='THIRD_PARTY_BIND'),a2_0x7df050[_0x58a30d(0x1ea)](_0x58a30d(0x18d)+JSON[_0x58a30d(0x1a3)](this[_0x58a30d(0x1d9)]));if(_0x30f55c)await Helper['delay'](0x7d0,this[_0x58a30d(0x1ce)],_0x58a30d(0x1b1),this);}else await Helper[_0x58a30d(0x1d6)](0x3e8,this[_0x58a30d(0x1ce)],'Failed\x20To\x20Get\x20Task',this);}catch(_0x43a538){throw _0x43a538;}}async[a2_0x49569c(0x194)](){const _0x13ad8c=a2_0x49569c;try{await Helper['delay'](0x3e8,this[_0x13ad8c(0x1ce)],_0x13ad8c(0x1d0),this);const _0xbfc0b6={'resourceIdList':[this[_0x13ad8c(0x1d9)][_0x13ad8c(0x1d1)](_0x59a25e=>_0x59a25e[_0x13ad8c(0x1c8)]==_0x13ad8c(0x1db))[_0x13ad8c(0x1ac)]],'referralCode':null},_0x5ee67e=await this['fetch'](_0x13ad8c(0x1ae),_0x13ad8c(0x18f),this[_0x13ad8c(0x1cf)],_0xbfc0b6);_0x5ee67e['status']==0xc8?(await this[_0x13ad8c(0x1d7)](),_0x5ee67e['code']==_0x13ad8c(0x1e2)?await Helper[_0x13ad8c(0x1d6)](0x7d0,this[_0x13ad8c(0x1ce)],_0x13ad8c(0x1cd),this):await Helper[_0x13ad8c(0x1d6)](0x7d0,this[_0x13ad8c(0x1ce)],'Successfully\x20Daily\x20Check\x20in\x20'+_0x5ee67e[_0x13ad8c(0x1a2)],this)):await Helper[_0x13ad8c(0x1d6)](0x3e8,this['account'],_0x13ad8c(0x1da),this);}catch(_0x2bacd9){throw _0x2bacd9;}}async[a2_0x49569c(0x1c4)](_0x9a69ee){const _0x3aa0ba=a2_0x49569c;try{await Helper[_0x3aa0ba(0x1d6)](0x3e8,this[_0x3aa0ba(0x1ce)],_0x3aa0ba(0x1c2)+_0x9a69ee[_0x3aa0ba(0x1c8)]+'..',this);const _0x4f3ead={'resourceIdList':[_0x9a69ee[_0x3aa0ba(0x1ac)]],'referralCode':null},_0x41771e=await this[_0x3aa0ba(0x1a1)](_0x3aa0ba(0x1ae),_0x3aa0ba(0x18f),this[_0x3aa0ba(0x1cf)],_0x4f3ead);_0x41771e[_0x3aa0ba(0x1c3)]==0xc8?(await this[_0x3aa0ba(0x1d5)](),await this[_0x3aa0ba(0x1d7)](),await Helper[_0x3aa0ba(0x1d6)](0x7d0,this[_0x3aa0ba(0x1ce)],_0x3aa0ba(0x1b4)+_0x9a69ee[_0x3aa0ba(0x1c8)]+_0x3aa0ba(0x1af)+_0x9a69ee['status'],this)):await Helper[_0x3aa0ba(0x1d6)](0x3e8,this[_0x3aa0ba(0x1ce)],_0x3aa0ba(0x1b8)+_0x9a69ee[_0x3aa0ba(0x1c8)],this);}catch(_0x5eb13a){throw _0x5eb13a;}}async[a2_0x49569c(0x19c)](){const _0x388ecd=a2_0x49569c;try{await Helper[_0x388ecd(0x1d6)](0x1f4,this[_0x388ecd(0x1ce)],_0x388ecd(0x19e),this);const _0x5e0993=await this[_0x388ecd(0x1a1)](_0x388ecd(0x1b3),_0x388ecd(0x18f),this[_0x388ecd(0x1cf)],this[_0x388ecd(0x195)]);if(_0x5e0993[_0x388ecd(0x1c3)]==0xc8){const _0x25a5ee=_0x5e0993[_0x388ecd(0x184)],_0x454258=_0x25a5ee[_0x388ecd(0x1c6)],_0xe3d21f=_0x25a5ee[_0x388ecd(0x19f)],[_0x5469da,_0x500ac3]=await this[_0x388ecd(0x1d3)](_0xe3d21f[_0x388ecd(0x1b7)]);await Helper['delay'](0xafc8,this[_0x388ecd(0x1ce)],_0x388ecd(0x1ec)+_0x454258+',\x20Waiting\x20game\x20to\x20be\x20Finished',this),await this['completeGame'](_0x454258,_0x500ac3,_0x5469da);}else await Helper[_0x388ecd(0x1d6)](0x3e8,this['account'],_0x388ecd(0x192),this);}catch(_0x4349aa){throw _0x4349aa;}}async[a2_0x49569c(0x1be)](_0x3ab276,_0x4e5df2,_0x14bb23){const _0x296b7c=a2_0x49569c;try{await Helper[_0x296b7c(0x1d6)](0x1f4,this[_0x296b7c(0x1ce)],_0x296b7c(0x198)+_0x3ab276+_0x296b7c(0x1a5),this);const _0x27bf12={'log':_0x4e5df2,'payload':await this[_0x296b7c(0x1e1)](_0x14bb23,_0x3ab276),'resourceId':this['generalBody'][_0x296b7c(0x1ac)]},_0xfb2002=await this[_0x296b7c(0x1a1)](_0x296b7c(0x1ca),_0x296b7c(0x18f),this[_0x296b7c(0x1cf)],_0x27bf12);_0xfb2002[_0x296b7c(0x1c3)]==0xc8?_0xfb2002[_0x296b7c(0x1c8)]=='000000'?(await Helper[_0x296b7c(0x1d6)](0x2710,this[_0x296b7c(0x1ce)],'Successfully\x20Complete\x20Game\x20With\x20Tag\x20'+_0x3ab276+_0x296b7c(0x1e9)+_0x4e5df2+_0x296b7c(0x1eb),this),this[_0x296b7c(0x1ab)]=0x0,await this['getUserInfo']()):(this['completeGameErrorCount']+=0x1,this['completeGameErrorCount']<=0x3?(await Helper['delay'](0x1388,this[_0x296b7c(0x1ce)],_0x296b7c(0x1d8)+_0x3ab276+'\x20->\x20'+_0xfb2002['status']+_0x296b7c(0x1af)+_0xfb2002[_0x296b7c(0x1a2)]+_0x296b7c(0x1b9),this),await this[_0x296b7c(0x1be)](_0x3ab276,_0x4e5df2,_0x14bb23)):await Helper['delay'](0x1388,this[_0x296b7c(0x1ce)],'Failed\x20to\x20Complete\x20Game\x20And\x20Max\x20Error\x20Reached\x20->\x20'+_0xfb2002['status']+_0x296b7c(0x1af)+_0xfb2002[_0x296b7c(0x1a2)],this)):await Helper['delay'](0x3e8,this['account'],'Failed\x20To\x20Start\x20Game',this);}catch(_0x1e3832){throw _0x1e3832;}}async[a2_0x49569c(0x1d3)](_0x9e3be){const _0x9a1125=a2_0x49569c,_0x49e95b=[],_0x4ca6bf=Date[_0x9a1125(0x1bf)](),_0x5b2e92=_0x9e3be['filter'](_0x439755=>_0x439755['type']===_0x9a1125(0x1a8)||_0x439755[_0x9a1125(0x1e0)]===_0x9a1125(0x1b5)),_0x2880ca=[];_0x5b2e92[_0x9a1125(0x193)](_0x496e26=>{const _0x333592=_0x9a1125;for(let _0x506b94=0x0;_0x506b94<_0x496e26[_0x333592(0x1e4)];_0x506b94++){const _0x1e1d52=_0x496e26[_0x333592(0x1d2)][Math['floor'](Math[_0x333592(0x1a4)]()*_0x496e26[_0x333592(0x1d2)][_0x333592(0x185)])];_0x2880ca['push']({'type':_0x496e26[_0x333592(0x1e0)],'size':_0x496e26[_0x333592(0x1a9)],'value':_0x1e1d52});}});const _0x172330=_0x2880ca[_0x9a1125(0x185)],_0x1946bb=Math[_0x9a1125(0x1e5)](0x2d,_0x172330);let _0x548e8e=0x0;for(let _0x1582f7=0x0;_0x1582f7<_0x1946bb;_0x1582f7++){const _0x517372=Math['floor'](Math[_0x9a1125(0x1a4)]()*_0x2880ca[_0x9a1125(0x185)]),_0xaac40f=_0x2880ca[_0x517372],_0x6a05a5=[];_0x6a05a5[0x0]=_0x4ca6bf+_0x1582f7*0x3e8,_0x6a05a5[0x1]=Math['random']()*0x18f,_0x6a05a5[0x2]=Math[_0x9a1125(0x1a4)]()*0x1d2,_0x6a05a5[0x3]=Math[_0x9a1125(0x1a4)]()*0x2,_0x6a05a5[0x4]=Math[_0x9a1125(0x1a4)]()*0x258,_0x6a05a5[0x5]=Math[_0x9a1125(0x1a4)]()*0x258,_0x6a05a5[0x6]=_0xaac40f[_0x9a1125(0x1e0)]==='REWARD'?0x1:0x2,_0x6a05a5[0x7]=_0xaac40f[_0x9a1125(0x1a9)],_0x6a05a5[0x8]=_0xaac40f[_0x9a1125(0x187)],_0x548e8e+=_0xaac40f[_0x9a1125(0x187)],_0x49e95b[_0x9a1125(0x188)](_0x6a05a5);}return[_0x49e95b,_0x548e8e];}async[a2_0x49569c(0x1e1)](_0x3df553,_0x21954a){const _0x57f438=a2_0x49569c,_0x5284aa=_0x3df553['map'](_0x7d7b30=>{const _0x422742=a2_0x4dba;return _0x7d7b30[_0x422742(0x189)](_0x5ec7e5=>{const _0x2b309f=_0x422742;return Number[_0x2b309f(0x1c0)](_0x5ec7e5)&&_0x5ec7e5%0x1!==0x0?_0x5ec7e5[_0x2b309f(0x1df)](0x3):_0x5ec7e5;})[_0x422742(0x1a0)]('|');})[_0x57f438(0x1a0)](';'),_0x24cf31=this[_0x57f438(0x1a6)](_0x5284aa,_0x21954a);return _0x24cf31;}async['encryptData'](_0x4dd227,_0x5a0104){const _0x4afc87=a2_0x49569c,_0x2826ae=a2_0x12fa42[_0x4afc87(0x1b2)][_0x4afc87(0x18e)]['random'](0xc)[_0x4afc87(0x1ba)](a2_0x12fa42['enc'][_0x4afc87(0x1e3)]),_0x25fdcc=a2_0x12fa42[_0x4afc87(0x190)]['encrypt'](_0x4dd227,a2_0x12fa42[_0x4afc87(0x1e7)][_0x4afc87(0x1c5)][_0x4afc87(0x1aa)](_0x5a0104),{'iv':a2_0x12fa42[_0x4afc87(0x1e7)]['Utf8'][_0x4afc87(0x1aa)](_0x2826ae)});return _0x2826ae+_0x25fdcc[_0x4afc87(0x1ad)][_0x4afc87(0x1ba)](a2_0x12fa42[_0x4afc87(0x1e7)][_0x4afc87(0x1e3)]);}}