define("pages/music_player.js",["biz_wap/utils/mmversion.js","pages/report.js","biz_common/dom/event.js","biz_wap/jsapi/core.js","pages/version4video.js","biz_common/utils/monitor.js"],function(t){
"use strict";
function e(){
k.hasInit||(k.hasInit=!0,p(),c(),u());
}
function o(t){
e(),this._o={
plugins:[],
protocal:"",
wxIndex:0,
type:0,
src:"",
jsapi2Src:"",
mid:"",
autoPlay:!1,
duration:0,
needVioceMutex:!0,
title:"",
allowPause:!1,
singer:"",
epname:"",
coverImgUrl:"",
webUrl:"",
fileSize:0,
onStatusChange:function(){},
onTimeupdate:function(){},
onError:function(){},
onUpdateSeekRange:function(){}
},this._extend(t),this._status=-1,this._g={
mutexKey:"",
jsapiSrcId:"",
hasCheckPlay:!1,
playTimeoutId:null,
stateChangeCallback:{},
_blockPlugin:{},
hasInitH5Event:!1,
h5Event:{},
totalPlayTime:0
},this._initPlugins(),this._fixAndroidSizeLimit(),0!==k.surportType&&(this._initData(),
this._synPlayStatus());
}
function i(t){
v.invoke("musicPlay",{
app_id:"a",
title:"微信公众平台",
singer:"微信公众平台",
epname:"微信公众平台",
coverImgUrl:"http://res.wx.qq.com/mpres/htmledition/images/favicon.ico",
dataUrl:k.ev,
lowbandUrl:k.ev,
webUrl:"http://mp.weixin.qq.com/s?"
},function(e){
"function"==typeof t&&t(e);
});
}
function n(t){
a({
cur:t,
stopCur:!1
});
}
function a(t){
function e(){
if(k.mutexCount==s&&(s=0,k.mutexCount=0,"function"==typeof n)){
var t=0;
1==k.surportType?t=2e3:3==k.surportType&&(t=0),setTimeout(function(){
n();
},t);
}
}
if(0!=k.mutexCount)return void setTimeout(function(){
a(t);
},200);
var o=t.cur,i=t.stopCur===!0?!0:!1,n=t.callback,s=0;
for(var r in k.mutexPlayers)for(var u=0,p=k.mutexPlayers[r].length;p>u;u++)s++;
for(var r in k.mutexPlayers)for(var u=0,p=k.mutexPlayers[r].length;p>u;u++){
var l=k.mutexPlayers[r][u];
if(l&&l!==o){
var c=l.getSurportType(),d="";
2!=c||1!=l._status&&4!=l._status?1!=c&&3!=c||1!=l._status&&2!=l._status&&4!=l._status||(d="stop"):d=l._o.allowPause?"pause":"stop",
d&&"function"==typeof l[d]?l[d](i,function(){
k.mutexCount++,e();
}):(k.mutexCount++,e());
}else k.mutexCount++,e();
}
}
function s(){
return k.surportType;
}
function r(t){
return new o(t);
}
function u(){
k.surportType>0&&k.isAndroidLow&&window.addEventListener("canplay",function(t){
t.target&&"function"==typeof t.target.play&&t.target.play();
},!0);
}
function p(){
k.jsapiGlobalEvent={
error:d,
pause:h,
stop:_,
play:y,
preempted:_,
waiting:g
};
}
function l(t){
return"&"+k.wxtag+"="+t;
}
function c(){
v.on("onBackgroundAudioStateChange",function(t){
if(!!k.debug&&console.log("onBackgroundAudioStateChange log:"+JSON.stringify(t||{})),
t.src&&t.state){
var e=m(k.wxtag,t.src)||"";
e&&(e=l(e));
var o=k.mutexPlayers[t.src]||k.mutexPlayers2[t.src]||k.mutexPlayers[e];
if(o){
var i;
if(t.srcId)for(var n=0,a=o.length;a>n;n++)o[n]._g.jsapiSrcId==t.srcId&&(i=o[n]);else if(1==o.length)i=o[0];else for(var n=0,a=o.length;a>n;n++)if(-1!=o[n]._status&&0!=o[n]._status&&3!=o[n]._status){
i=o[n];
break;
}
if(i&&i._g.stateChangeCallback){
var s=t.state;
"ended"==s&&(s="stop"),"wait"==s&&(s="waiting");
var r=!1;
if("error"==s)for(var u in i._g.stateChangeCallback)i._g.stateChangeCallback.hasOwnProperty(u)&&"function"==typeof i._g.stateChangeCallback[u]&&(r=!0,
i._g.stateChangeCallback[u](-1,t.errMsg||""),i._g.stateChangeCallback[u]=null);else"function"==typeof i._g.stateChangeCallback[s]&&(k.debug&&console.log("excute stateChangeCallback :"+s),
r=!0,i._g.stateChangeCallback[s](0),i._g.stateChangeCallback[s]=null);
r||"function"!=typeof k.jsapiGlobalEvent[s]||k.jsapiGlobalEvent[s](t,i);
}
}
}
});
}
function d(t,e){
e.stop(!1),e._trigger("jsapi2PlayingErr");
}
function _(t,e){
e.stop(!1);
}
function h(t,e){
e.pause(!1,null,!0);
}
function y(t,e){
1!=e._status&&e.resume(!1,null,!0);
}
function g(t,e){
e.onload();
}
function f(){
for(var t in k.mutexPlayers)if(k.mutexPlayers.hasOwnProperty(t))for(var e=0,o=k.mutexPlayers[t].length;o>e;e++){
var i=k.mutexPlayers[t][e];
if(i&&1==i._status&&(1==i._surportType||3==i._surportType)){
i._trigger("unloadPlaying");
break;
}
}
}
function m(t){
var e=arguments[1]||window.location.search,o=new RegExp("(^|&)"+t+"=([^&]*)(&|$)"),i=e.substr(e.indexOf("?")+1).match(o);
return null!=i?i[2]:"";
}
function P(t,e,o){
function i(t,e){
for(;k.synPlayStatusArr.length>0;){
var o=k.synPlayStatusArr.shift();
o&&"function"==typeof o[t]&&o[t](e);
}
}
k.synPlayStatusArr.push({
_t:t,
onSuccess:e,
onError:o
}),k.synPlayStatusId&&clearTimeout(k.synPlayStatusId),k.synPlayStatusId=setTimeout(function(){
t._jsapi_getMusicPlayerState({
onSuccess:function(t){
i("onSuccess",t);
},
onError:function(t){
i("onError",t);
}
});
},0);
}
document.domain="qq.com";
var T=t("biz_wap/utils/mmversion.js"),v=(t("pages/report.js"),t("biz_common/dom/event.js"),
t("biz_wap/jsapi/core.js")),S=t("pages/version4video.js"),k=(t("biz_common/utils/monitor.js"),
{
hasInit:!1,
synPlayStatusId:null,
synPlayStatusArr:[],
inWechat:!S.device.inWechat||S.device.inWindowWechat||S.device.inMacWechat?!1:!0,
mutexCount:0,
ev:0!=window._empty_v.indexOf(window.location.protocol)?"http:"+window._empty_v:window._empty_v,
debug:location.href.indexOf("vconsole=1")>0||document.cookie&&document.cookie.indexOf("vconsole_open=1")>-1?!0:!1,
_playtype:1*m("_playtype")||0,
isAndroidLow:/android\s2\.3/i.test(navigator.userAgent),
isAndroid:T.isAndroid,
surportType:"addEventListener"in window?2:0,
mutexPlayers:{},
mutexPlayers2:{},
wxtag:"__wxtag__"
});
return o.prototype._initPlugins=function(){
for(var t=this._o.plugins,e=0,o=t.length;o>e;++e){
var i=t[e];
i.setPlayer(this),!!i.init&&i.init();
}
},o.prototype._trigger=function(t,e){
var o=this._o,i=this._g,n=o.plugins,a=i._blockPlugin[t]||i._blockPlugin.all,s=0;
if(a&&"function"==typeof a.recv&&(s|=a.recv(t,e),1&s))return!1;
for(var r=0,u=n.length;u>r&&(s|=n[r].recv(t,e),!(2&s));++r);
if(!(4&s)){
var p=this["__"+t+"Handler"];
p&&p.call(this,e);
}
8&s||this.__triggerOutside(t,e);
},o.prototype.__triggerOutside=function(){
var t=arguments,e=t[0];
if(e){
e=e.substr(0,1).toUpperCase()+e.substr(1);
var o=this._o["on"+e];
"function"==typeof o&&o.apply(this,t);
}
},o.prototype._setBlockPlugin=function(t,e){
this._g._blockPlugin[t]=e;
},o.prototype._synPlayStatus=function(){
function t(t){
if(a&&clearTimeout(a),n.hasCheckPlay===!0)return void console.log("ios8 synPlayStatusSuccess hasCheckPlay");
if(n.hasCheckPlay=!0,o._surportType=3,k.surportType=3,!!k.debug&&console.log("_synPlayStatus mutexKey:"+n.mutexKey),
t.src&&(i.src==t.src||t.src.indexOf(n.mutexKey)>=0)){
if(t.srcId){
if(t.srcId!=n.jsapiSrcId)return;
}else if(k.mutexPlayers[n.mutexKey].length>1&&k.mutexPlayers[n.mutexKey][0]!==o)return;
o._initJsapiData({
curTime:t.currentTime,
bufferedPercent:t.bufferedPercent,
starTime:+new Date-1e3*t.currentTime
}),o._trigger("jsapi2Begin2Play",t);
var e=o.jsApiData,s="waiting"==t.playState||"seeked"==t.playState||"seeking"==t.playState||"play"==t.playState;
!t.paused||s?(o._onPlay(),o._analogUpdateTime()):(o._onTimeupdate(null,e.curTime),
o._onPause()),o._getMusicPlayerState();
}
}
function e(){
console.log("ios8 synPlayStatusError"),a&&clearTimeout(a),n.hasCheckPlay!==!0&&(n.hasCheckPlay=!0,
o._o.autoPlay&&o.play());
}
var o=this,i=this._o,n=this._g;
if(!k.inWechat||1*k._playtype>0)return n.hasCheckPlay=!0,void(o._o.autoPlay&&o.play());
var a;
P(o,t,e);
var s=+new Date;
console.log("starTime",s,i.syncTimeout),a=setTimeout(function(){
console.log("ios8 timeout error",+new Date-s),e();
},i.syncTimeout||1e4);
},o.prototype._fixAndroidSizeLimit=function(){
if(!(1*k._playtype>0)&&k.isAndroid){
var t=this._o;
!t.fileSize||t.fileSize>300||T.gtVersion("6.3.28",!0)||(this._trigger("androidForceH5"),
this._g._playtype=2);
}
},o.prototype._createAutoAndPlay=function(){
function t(){
e._trigger("h5Begin2Play"),e._h5Audio=document.createElement("audio"),e._initH5Data(!0),
e._H5bindEvent(!0),e._h5Audio.setAttribute("style","height:0;width:0;display:none"),
e._h5Audio.setAttribute("autoplay",""),e._status=0,e._onLoading(),k.isAndroidLow?(e._h5Audio.src=e._o.src,
document.body.appendChild(e._h5Audio),e._h5Audio.load()):(document.body.appendChild(e._h5Audio),
setTimeout(function(){
e._h5Audio.src=e._o.src,e._h5Audio.play();
},0)),e._surportType=2;
}
var e=this;
k.inWechat?this._stopJsapiPlay(!0,function(){
t();
}):t();
},o.prototype._destoryH5Audio=function(){
this._h5Audio&&(-1!=this._status&&"function"==typeof this._h5Audio.pause&&this._h5Audio.pause(),
document.body.removeChild(this._h5Audio),this._h5Audio=null,this._status=-1);
},o.prototype._onLoading=function(t){
this._status=4;
try{
n(this);
}catch(t){}
"function"==typeof this._o.onStatusChange&&this._o.onStatusChange.call(this,t||{},this._status),
this._endCountTime();
},o.prototype._onPlay=function(t){
this._status=1;
try{
n(this);
}catch(t){}
"function"==typeof this._o.onStatusChange&&this._o.onStatusChange.call(this,t||{},this._status),
this._startCountTime();
},o.prototype._onPause=function(t){
this._status=2,"function"==typeof this._o.onStatusChange&&this._o.onStatusChange.call(this,t||{},this._status),
this._endCountTime();
},o.prototype._onEnd=function(t){
this._status=3,"function"==typeof this._o.onStatusChange&&this._o.onStatusChange.call(this,t||{},this._status),
this._endCountTime();
},o.prototype._onLoadedmetadata=function(t){
"function"==typeof this._o.onLoadedmetadata&&this._o.onLoadedmetadata.call(this,t||{});
},o.prototype._onUpdateSeekRange=function(t){
this.surportSeekRange()&&(t=Math.max(t,0),t=Math.min(t,100),"function"==typeof this._o.onUpdateSeekRange&&this._o.onUpdateSeekRange.call(this,t));
},o.prototype._onTimeupdate=function(t,e){
"function"==typeof this._o.onTimeupdate&&this._o.onTimeupdate.call(this,t||{},e),
e>0&&this._startCountTime();
},o.prototype._onError=function(t,e){
this._status=-1,"function"==typeof this._o.onError&&this._o.onError.call(this,t||{},e);
},o.prototype._initH5Event=function(){
var t=this,e=this._o,o=this._g;
if(!t._g.hasInitH5Event){
t._g.hasInitH5Event=!0;
var i=o.h5Event;
i.canplaythrough=function(e){
t._h5Audio&&(!!k.debug&&console.log("h5 canplaythrough"),t._h5Data.firstCanplaythrough=!0,
t._onPlay(e),t._onUpdateSeekRange(t._h5Data.downloadDuration||0));
},i.play=function(e){
t._h5Audio&&(!!k.debug&&console.log("h5 "+e.type),t._h5Data.firstCanplaythrough===!0&&(t._onPlay(e),
t._onUpdateSeekRange(t._h5Data.downloadDuration||0)));
},i.ended=function(e){
t._h5Audio&&(!!k.debug&&console.log("h5 ended"),t._onUpdateSeekRange(t._h5Data.downloadDuration),
t._onEnd(e));
},i.pause=function(e){
t._h5Audio&&(!!k.debug&&console.log("h5 pause"),t._o.allowPause!==!0||0==t._h5Audio.currentTime?t._onEnd(e):t._onPause(e));
},i.waiting=function(e){
t._h5Audio&&(!!k.debug&&console.log("h5 "+e.type),(1==t._status||2==t._status||4==t._status)&&t._onLoading(e));
};
var n,a=100;
i.seeking=function(e){
t._h5Audio&&(!!k.debug&&console.log("h5 "+e.type),(1==t._status||2==t._status||4==t._status)&&t._onLoading(e),
n=setTimeout(function(){
!!k.debug&&console.log("seek loading Timeout excute"),n=null,t._trigger("seekNeed2Load");
},a));
},i.seeked=function(e){
t._h5Audio&&(!!k.debug&&console.log("h5 seeked"),(1==t._status||2==t._status||4==t._status)&&(t._onPlay(e),
t._h5Audio.play()),n&&(clearTimeout(n),n=null,t._trigger("seekNotNeed2Load")));
},i.error=function(e){
var o=1*e.target.error.code||5;
(1>o||o>5)&&(o=5),t._trigger("h5Error",{
code:o
}),t._onError(e,{
type:1,
code:o
}),t._destoryH5Audio();
},i.timeupdate=function(o){
t._h5Audio&&((1==t._status||4==t._status)&&t._onUpdateSeekRange(t._getH5DownloadDuration()),
1==t._status&&t._onTimeupdate(o,t._h5Audio.currentTime),"undefined"!=typeof e.duration&&1*e.duration>0&&t._h5Audio.currentTime>=e.duration&&t._h5Stop());
},i.loadedmetadata=function(e){
t._h5Audio&&t._onLoadedmetadata(e);
};
}
},o.prototype._H5bindEvent=function(t){
var e=(this._o,this._g),o={
canplaythrough:"canplaythrough",
play:"play",
playing:"play",
ended:"ended",
pause:"pause",
seeking:"seeking",
waiting:"waiting",
seeked:"seeked",
error:"error"
};
try{
for(var i in o)o.hasOwnProperty(i)&&this._h5Audio.removeEventListener(i,e.h5Event[o[i]]);
this._h5Audio.removeEventListener("timeupdate",e.h5Event.timeupdate),this._h5Audio.removeEventListener("loadedmetadata",e.h5Event.loadedmetadata);
}catch(n){}
if(t){
for(var i in o)o.hasOwnProperty(i)&&this._h5Audio.addEventListener(i,e.h5Event[o[i]],!1);
"function"==typeof this._o.onTimeupdate&&this._h5Audio.addEventListener("timeupdate",e.h5Event.timeupdate,!1),
"function"==typeof this._o.onLoadedmetadata&&this._h5Audio.addEventListener("loadedmetadata",e.h5Event.loadedmetadata,!1);
}
},o.prototype._initData=function(){
var t=this._o;
this._createMutexKey(),k.mutexPlayers[this._g.mutexKey]?k.mutexPlayers[this._g.mutexKey].push(this):k.mutexPlayers[this._g.mutexKey]=[this],
t.jsapi2Src&&t.jsapi2Src!=t.src&&(k.mutexPlayers2[t.jsapi2Src]?k.mutexPlayers2[t.jsapi2Src].push(this):k.mutexPlayers2[t.jsapi2Src]=[this]),
this._initH5Event();
},o.prototype._createMutexKey=function(){
var t=this._o.mid||"";
this._o.src?(this._g.mutexKey=this._o.src,this._g.jsapiSrcId=k.wxtag+"_"+this._o.wxIndex):(this._g.mutexKey=l(t),
this._g.jsapiSrcId=this._g.mutexKey+"_"+this._o.wxIndex);
},o.prototype._extend=function(t){
for(var e in t)this._o[e]=t[e];
},o.prototype._initH5Data=function(t){
this._h5Data={
firstCanplaythrough:t===!0?!1:!0,
downloadDuration:0,
lastPlaytime:null
};
},o.prototype._initJsapiData=function(t){
t=t||{},this.jsApiData&&(this.jsApiData.updateTimeoutId&&clearTimeout(this.jsApiData.updateTimeoutId),
this.jsApiData.getStatusId&&clearTimeout(this.jsApiData.getStatusId)),this.jsApiData={
getStatusId:null,
getStatusTime:t.getStatusTime||2500,
updateTimeoutId:null,
seeking:!1,
starTime:t.starTime||+new Date,
curTime:t.curTime||0,
bufferedPercent:t.bufferedPercent||0,
duration:this._o.duration||void 0,
lastPlaytime:null
};
},o.prototype._getMusicPlayerState=function(){
var t=this,e=t._o,o=t.jsApiData;
o&&o.getStatusId&&clearTimeout(o.getStatusId),t._jsapi_getMusicPlayerState({
onSuccess:function(i){
i.src==e.src&&(o.curTime=i.currentTime,o.starTime=+new Date-1e3*i.currentTime,o.bufferedPercent=i.bufferedPercent,
(1==t._status||2==t._status)&&(o.getStatusId=setTimeout(function(){
t._getMusicPlayerState();
},o.getStatusTime)),t._onUpdateSeekRange(o.bufferedPercent),1==i.paused&&1==t._status?(k.debug&&console.log("_getMusicPlayerState force syn"),
t._pauseJsapiPlay(!1)):0==i.paused&&2==t._status&&(k.debug&&console.log("_getMusicPlayerState force syn"),
t._resumeJsapiPlay(!1))),t._o.onMusicPlayerInfo&&t._o.onMusicPlayerInfo(i);
},
onError:function(){
o.getStatusId=setTimeout(function(){
t._getMusicPlayerState();
},o.getStatusTime);
}
});
},o.prototype._analogUpdateTime=function(){
var t=this,e=t.jsApiData;
if(e){
if(e.updateTimeoutId&&clearTimeout(e.updateTimeoutId),1==t._status){
if(e.curTime=1*((+new Date-e.starTime)/1e3).toFixed(2),e.curTime>=e.duration)return t._stopJsapiPlay(!1),
!0;
t._onTimeupdate(null,e.curTime);
}
return e.updateTimeoutId=setTimeout(function(){
t._analogUpdateTime();
},1e3),!1;
}
},o.prototype._jsapi_getMusicPlayerState=function(t){
var e=this._o;
v.invoke("getBackgroundAudioState",{},function(o){
if(!!k.debug&&console.log("getBackgroundAudioState log:"+JSON.stringify(o||{})),
/:ok$/.test(o.err_msg)){
if(o.paused=1*o.paused,o.currentTime=o.currentTime?(1*o.currentTime).toFixed(2):0,
o.buffered){
var i=Math.floor(o.buffered/e.duration*100);
i=Math.max(i,0),i=Math.min(i,100),o.bufferedPercent=i;
}else o.bufferedPercent=0;
"function"==typeof t.onSuccess&&t.onSuccess(o);
}else"function"==typeof t.onError&&(console.log("get err invoke err",o),t.onError(o));
});
},o.prototype._jsapi_musicPlay=function(t){
if(this._h5Audio&&this._destoryH5Audio(),2==k._playtype)return void("function"==typeof t.onError&&t.onError({}));
var e=this,o=this._o;
v.invoke("musicPlay",{
app_id:"a",
title:o.title,
singer:o.singer,
epname:o.epname,
coverImgUrl:o.coverImgUrl,
dataUrl:o.src,
lowbandUrl:o.src,
webUrl:o.webUrl
},function(i){
!!k.debug&&console.log("playlog:"+JSON.stringify(i||{})),i.err_msg.indexOf("ok")>=0?(e._trigger("jsapi1Begin2Play"),
e._surportType=1,k.surportType=1,e._initJsapiData(),e._onPlay(),"undefined"!=typeof o.duration&&1*o.duration>0&&e._analogUpdateTime(),
e._onUpdateSeekRange(0),"function"==typeof t.onSuccess&&t.onSuccess(i)):"function"==typeof t.onError&&t.onError(i);
});
},o.prototype._jsapi_setBackgroundAudioState=function(t){
if(this._h5Audio&&this._destoryH5Audio(),console.log("_playtype",k._playtype),1*k._playtype>0){
if("function"==typeof t.onError){
var e={};
e.err_code=1,t.onError(e);
}
}else{
var o=this,i=this._o,n=o._g;
console.log("invoke set setBackgroundAudioState with param",i),v.invoke("setBackgroundAudioState",{
protocol:i.protocal||"",
src:i.jsapi2Src||i.src,
lowbandUrl:i.jsapi2Src||i.src,
title:i.title,
epname:i.epname,
singer:i.singer,
srcId:n.jsapiSrcId,
coverImgUrl:i.coverImgUrl,
webUrl:i.webUrl
},function(e){
!!k.debug&&console.log("setBackgroundAudioState log:"+JSON.stringify(e||{})),e.err_msg.indexOf("ok")>=0?("function"==typeof t.onSuccess&&t.onSuccess("waiting"),
n.stateChangeCallback.play=function(e,o){
0==e&&"function"==typeof t.onSuccess?t.onSuccess("play"):0!=e&&"function"==typeof t.onError&&t.onError({
err_code:2,
err_msg:o||""
});
}):"function"==typeof t.onError&&(e=e||{},e.err_code=1,t.onError(e));
});
}
},o.prototype._jsapi_operateBackgroundAudio=function(t){
var e=this,o=(this._o,e._g),i=1*t.position||0;
v.invoke("operateBackgroundAudio",{
operationType:t.type,
currentTime:i
},function(e){
if(!!k.debug&&console.log("operateBackgroundAudio "+t.type+",position:"+i+", log:"+JSON.stringify(e||{})),
e.err_msg.indexOf("ok")>=0){
var n=t.type;
"seek"==n?(o.stateChangeCallback.seeking=function(e,o){
0==e&&"function"==typeof t.onSuccess?t.onSuccess("seeking",i):0!=e&&"function"==typeof t.onError&&t.onError({
err_msg:o||""
});
},o.stateChangeCallback.seeked=function(e,o){
0==e&&"function"==typeof t.onSuccess?t.onSuccess("seeked",i):0!=e&&"function"==typeof t.onError&&t.onError({
err_msg:o||""
});
}):o.stateChangeCallback[n]=function(e,o){
0==e&&"function"==typeof t.onSuccess?t.onSuccess():0!=e&&"function"==typeof t.onError&&t.onError({
err_msg:o||""
});
};
}else"function"==typeof t.onError&&t.onError(e);
});
},o.prototype._jsapiPlay=function(){
{
var t=this;
this._o;
}
console.log("supporttype",k.surportType),1==k.surportType?this._jsapi_musicPlay({
onError:function(){
t._h5Play();
}
}):this._jsapi_setBackgroundAudioState({
onSuccess:function(e){
"waiting"===e?(t._trigger("jsapi2Begin2Play",e),t._initJsapiData(),t._surportType=3,
k.surportType=3,t._onLoading()):"play"===e&&(t._initJsapiData(),t._onPlay(),t._analogUpdateTime(),
t._getMusicPlayerState(),t._trigger("jsapi2PlaySuccess"));
},
onError:function(e){
e&&1==e.err_code?t._jsapi_musicPlay({
onError:function(){
t._h5Play();
}
}):(t._h5Play(),t._trigger("jsapi2Begin2PlayErr"));
}
});
},o.prototype._getJsapiDownloadSec=function(){
this._getMusicPlayerState();
var t=Math.floor(this._o.duration*this.jsApiData.bufferedPercent/100);
return!!k.debug&&console.log("downloadSec:"+t),t;
},o.prototype._jsapiSeek=function(t){
function e(){
n.seeking=!1,o._onPlay(),console.log("seek toPlay position is",k.seekingPosition),
n.starTime=+new Date-1e3*k.seekingPosition,o._analogUpdateTime(),o._getMusicPlayerState();
}
var o=this,i=this._g,n=(this._o,this.jsApiData),a=parseInt(t,10);
this._o.duration&&a>=this._o.duration&&(a=this._o.duration-1),n.getStatusId&&clearTimeout(n.getStatusId),
n.updateTimeoutId&&clearTimeout(n.updateTimeoutId),n.seekWaitId&&clearTimeout(n.seekWaitId),
n.seeking=!0;
var s,r,u=100;
k.seekingPosition=a,console.log("begin to seek to",a),this._jsapi_operateBackgroundAudio({
type:"seek",
position:a,
onError:function(){
o._trigger("seekErr"),!!k.debug&&console.log("seek callback fail"),n.seeking=!1,
o._analogUpdateTime(),o._getMusicPlayerState();
},
onSuccess:function(t,a){
console.log("jsapi seek res is ",t),"seeking"==t?(!!k.debug&&console.log("seeking callback success"),
n.seeking=!0,o._onLoading(),i.stateChangeCallback.play=function(){
!!k.debug&&console.log("seeked to play"),s&&clearTimeout(s),e(a);
},r=setTimeout(function(){
!!k.debug&&console.log("seek loading Timeout excute"),r=null,o._trigger("seekNeed2Load");
},u)):"seeked"==t&&(!!k.debug&&console.log("seeked callback success"),(2==o._status||4==o._status)&&T.cpVersion("6.6.0",-1)&&(s=setTimeout(function(){
!!k.debug&&console.log("setTimeout to play"),i.stateChangeCallback.play=null,o._resumeJsapiPlay(!0);
},1e3)),r&&(clearTimeout(r),r=null,o._trigger("seekNotNeed2Load")));
}
}),o._getMusicPlayerState();
},o.prototype._resumeJsapiPlay=function(t,e){
function o(t){
var e=i.jsApiData;
e.starTime=+new Date-1e3*e.curTime,i._onPlay(),i._analogUpdateTime(),i._getMusicPlayerState(),
"function"==typeof t&&t();
}
var i=this;
1==this._surportType?this._jsapiPlay():3==this._surportType&&(t?this._jsapi_operateBackgroundAudio({
type:"play",
onError:function(){
i._stopJsapiPlay(!1,function(){
i.play();
});
},
onSuccess:function(){
o(e);
}
}):o(e));
},o.prototype._pauseJsapiPlay=function(t,e,o){
function i(t){
var e=n.jsApiData;
n._analogUpdateTime(),n._getMusicPlayerState(),e&&e.updateTimeoutId&&clearTimeout(e.updateTimeoutId),
e.updateTimeoutId=null,t===!0&&e&&e.getStatusId&&clearTimeout(e.getStatusId),1==n._status&&n._onPause();
}
var n=this;
return 2==n._status?(i(e),void("function"==typeof o&&o())):void(1==this._surportType?this._stopJsapiPlay(t,o):3==this._surportType&&(t?this._jsapi_operateBackgroundAudio({
type:"pause",
onSuccess:function(){
i(e),"function"==typeof o&&o();
},
onError:function(){
n._stopJsapiPlay(!0,o);
}
}):(i(e),"function"==typeof o&&o())));
},o.prototype._stopJsapiPlay=function(t,e){
function o(t){
n._onTimeupdate(null,0),n._onUpdateSeekRange(0),n._onEnd(),n._initJsapiData(),"function"==typeof t&&t();
}
{
var n=this;
n.jsApiData;
}
t?1==n._surportType?i(function(){
o(e);
}):n._jsapi_operateBackgroundAudio({
type:"stop",
onSuccess:function(){
o(e);
},
onError:function(){
o(e);
}
}):o(e);
},o.prototype._getH5DownloadSec=function(){
var t=Math.floor(this._o.duration*this._getH5DownloadDuration()/100);
return!!k.debug&&console.log("h5 downloadSec:"+t),t;
},o.prototype._getH5DownloadDuration=function(){
if(!this._h5Audio)return 0;
if(this._h5Data.downloadDuration>=100)return 100;
var t=this._h5Audio.buffered,e=t.end(t.length-1);
return this._h5Data.downloadDuration=parseInt(e/this._o.duration*100,10),this._h5Data.downloadDuration;
},o.prototype._h5Play=function(){
0!==k.surportType&&(this._h5Audio?(this._h5Audio.ended||this._h5Audio.paused)&&(this._trigger("h5Begin2Play"),
this._initH5Data(),this._onLoading(),this._H5bindEvent(!0),this._h5Audio.currentTime=0):this._createAutoAndPlay());
},o.prototype._h5Resume=function(){
this._h5Audio&&this._h5Audio.play();
},o.prototype._h5Stop=function(){
this._h5Audio&&(this._onUpdateSeekRange(0),this._onEnd(),this._H5bindEvent(!1),this._h5Audio.pause(),
this._h5Audio.currentTime=0,this._initH5Data());
},o.prototype._h5Seek=function(t){
if(this._h5Audio){
var e=(this._h5Data,parseInt(t,10));
e=Math.min(e,this._o.duration),!!k.debug&&console.log("h5 seek position:"+e),this._h5Audio.currentTime=e;
}
},o.prototype._startCountTime=function(){
1!=this._surportType&&3!=this._surportType||!this.jsApiData?this._h5Audio&&this._h5Data&&null===this._h5Data.lastPlaytime&&(this._h5Data.lastPlaytime=this._h5Audio.currentTime):null===this.jsApiData.lastPlaytime&&(this.jsApiData.lastPlaytime=this.jsApiData.curTime);
},o.prototype._endCountTime=function(){
if(1!=this._surportType&&3!=this._surportType||!this.jsApiData){
if(this._h5Audio&&this._h5Data){
var t=this._h5Audio,e=this._h5Data;
t.currentTime>0&&t.currentTime>e.lastPlaytime&&null!==e.lastPlaytime&&(this._g.totalPlayTime+=t.currentTime-e.lastPlaytime),
e.lastPlaytime=null;
}
}else{
var o=this.jsApiData;
o.curTime>0&&o.curTime>o.lastPlaytime&&null!==o.lastPlaytime&&(this._g.totalPlayTime+=o.curTime-o.lastPlaytime),
o.lastPlaytime=null;
}
},o.prototype._delMutexPlayers=function(){
var t=this._o,e=this._g.mutexKey,o=k.mutexPlayers[e];
if(o){
for(var i=0,n=o.length;n>i;i++)if(o[i]===this){
o.splice(i,1);
break;
}
if(0==o.length)try{
delete k.mutexPlayers[e];
}catch(a){}
}
if(t.jsapi2Src&&k.mutexPlayers2[t.jsapi2Src]){
for(var s=k.mutexPlayers2[t.jsapi2Src],i=0,n=s.length;n>i;i++)if(s[i]===this){
s.splice(i,1);
break;
}
if(0==s.length)try{
delete k.mutexPlayers2[t.jsapi2Src];
}catch(a){}
}
},o.prototype.resetPlayTotalTime=function(){
this._g.totalPlayTime=0;
},o.prototype.getPlayTotalTime=function(){
return this._endCountTime(),this._g.totalPlayTime;
},o.prototype.surportSeekRange=function(){
return 1==k._playtype?!1:2==this._surportType||3==this._surportType?!0:!1;
},o.prototype.setSrc=function(t){
-1==t.indexOf("?")&&(t+="?"),t+=l(this._o.mid),this._o.src=t,this._delMutexPlayers(),
this._g.mutexKey=this._o.src,k.mutexPlayers[this._g.mutexKey]?k.mutexPlayers[this._g.mutexKey].push(this):k.mutexPlayers[this._g.mutexKey]=[this];
},o.prototype.getSrc=function(){
return this._o.src||"";
},o.prototype.setDuration=function(t){
this._o.duration=t||0;
},o.prototype.getSurportType=function(){
return this._surportType||0;
},o.prototype.getPlayStatus=function(){
return this._status;
},o.prototype.getCurTime=function(){
return 1!=this._surportType&&3!=this._surportType||!this.jsApiData?this._h5Audio?this._h5Audio.currentTime:0:this.jsApiData.curTime||0;
},o.prototype.getDuration=function(){
return this._o.duration||void 0;
},o.prototype.pause=function(t,e,o){
return o===!0||this._o.allowPause?void(1==this._surportType||3==this._surportType?this._pauseJsapiPlay(t===!1?!1:!0,!1,function(){
"function"==typeof e&&e();
},function(){
"function"==typeof e&&e();
}):2==this._surportType&&this._h5Audio&&"function"==typeof this._h5Audio.pause&&(this._h5Audio.pause(),
"function"==typeof e&&e())):void this.stop(t,e);
},o.prototype.stop=function(t,e){
return 1==this._surportType||3==this._surportType?void this._stopJsapiPlay(t===!1?!1:!0,e):(2==this._surportType&&this._h5Audio&&this._h5Stop(),
void("function"==typeof e&&e()));
},o.prototype.destory=function(){
this.stop(),this._h5Audio&&(document.body.removeChild(this._h5Audio),this._h5Audio=null),
this._delMutexPlayers();
},o.prototype.resume=function(t,e,o){
(o===!0||2==this._status&&this._o.allowPause)&&(2==this._surportType&&this._h5Audio?this._h5Resume():k.inWechat&&this._resumeJsapiPlay(t===!1?!1:!0));
},o.prototype.onload=function(){
this._onLoading();
},o.prototype.play=function(){
var t=this,e=this._g;
if(t._o.src)return console.log("before play status is",t._status,e.hasCheckPlay),
2==t._status&&t._o.allowPause?void t.resume():(e.playTimeoutId&&clearTimeout(e.playTimeoutId),
e.hasCheckPlay?void(k.inWechat?(console.log("jsapi play"),this._jsapiPlay()):0!=k.surportType&&this._h5Play()):void(e.playTimeoutId=setTimeout(function(){
t.play();
},1e3)));
},o.prototype.seek=function(t){
{
var e=this;
this._g;
}
return 1!=e._status&&2!=e._status?void console.log("player status is",e._status):(console.log("support type is",this._surportType,t),
3==this._surportType?(this._endCountTime(),void this._jsapiSeek(t)):2==this._surportType&&this._h5Audio?(this._endCountTime(),
void this._h5Seek(t)):void 0);
},o.prototype.getBackgroundAudioState=function(t){
t||(t={}),v.invoke("getBackgroundAudioState",{},function(e){
/:ok$/.test(e.err_msg)?(e.paused=1*e.paused,t.success&&t.success(e)):t.error&&t.error(e);
});
},o.prototype.setOption=function(t){
this._extend(t),t.duration&&this.jsApiData&&(this.jsApiData.duration=t.duration);
},{
init:r,
triggerUnloadPlaying:f,
isAndroid:k.isAndroid,
getSurportType:s,
getQuery:m
};
});