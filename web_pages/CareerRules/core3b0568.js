define("appmsg/fereport.js",["biz_wap/utils/wapsdk.js","biz_common/utils/http.js","appmsg/log.js"],function(e){
"use strict";
function i(){
var e=window.performance||window.msPerformance||window.webkitPerformance;
if(e&&e.timing){
var i,s=e.timing,d=0,m=0,a=window.location.protocol,p=Math.random(),r=1>2*p,l=1>25*p,w=1>100*p,u=1>250*p,c=1>1e3*p,_=1>1e4*p,g=!0;
"https:"==a?(d=18,m=27,g=!1):"http:"==a&&(d=9,m=19);
var S=window.__wxgspeeds||{};
if(S&&S.moonloadtime&&S.moonloadedtime){
var v=S.moonloadedtime-S.moonloadtime;
i=localStorage&&JSON.parse(localStorage.getItem("__WXLS__moonarg"))&&"fromls"==JSON.parse(localStorage.getItem("__WXLS__moonarg")).method?21:22,
o.saveSpeeds({
sample:21==i||22==i&&c?1:0,
uin:uin,
pid:d,
speeds:{
sid:i,
time:v
}
});
}
S&&S.mod_downloadtime&&o.saveSpeeds({
uin:uin,
pid:d,
speeds:{
sid:24,
time:S.mod_downloadtime
}
});
var f=s.domContentLoadedEventStart-s.navigationStart;
if(f>3e3&&(o.setBasicTime({
sample:w&&g||l&&!g?1:0,
uin:uin,
pid:m
}),(new Image).src=location.protocol+"//mp.weixin.qq.com/mp/jsmonitor?idkey=28307_28_1&lc=1&log0="+encodeURIComponent(location.href)),
o.setBasicTime({
sample:u&&g||w&&!g?1:0,
uin:uin,
pid:d
}),n.htmlSize){
var h=n.htmlSize/(s.responseEnd-s.connectStart);
o.saveSpeeds({
sample:c,
uin:uin,
pid:d,
speeds:{
sid:25,
time:Math.round(h)
}
});
}
if(S&&S.combo_times)for(var j=1;j<S.combo_times.length;j++)o.saveSpeeds({
sample:u,
uin:uin,
pid:d,
speeds:{
sid:26,
time:S.combo_times[j]-S.combo_times[j-1]
}
});
if(S&&S.mod_num){
var b=S.hit_num/S.mod_num;
o.saveSpeeds({
sample:u,
uin:uin,
pid:d,
speeds:[{
sid:27,
time:Math.round(100*b)
},{
sid:28,
time:Math.round(1e3*b)
}]
});
}
var B=window.logs.pagetime.jsapi_ready_time-s.navigationStart;
o.saveSpeeds(156==d||155==d?{
sample:r,
uin:uin,
pid:d,
speeds:{
sid:31,
time:B
}
}:{
sample:c,
uin:uin,
pid:d,
speeds:{
sid:31,
time:B
}
}),o.send(),window.setTimeout(function(){
window.__moonclientlog&&t("[moon] "+window.__moonclientlog.join(" ^^^ "));
},250),window.setTimeout(function(){
window.onBridgeReadyTime&&(i=top.window.WeixinJSBridge&&top.window.WeixinJSBridge._createdByScriptTag?33:32,
o.saveSpeeds({
sample:_,
uin:uin,
pid:d,
speeds:{
sid:i,
time:window.onBridgeReadyTime-s.navigationStart
}
}),o.send());
},5e3);
}
}
var o=e("biz_wap/utils/wapsdk.js"),n=e("biz_common/utils/http.js"),t=e("appmsg/log.js");
i();
});define("biz_wap/jsapi/core.js",[],function(e,n,o,i){
"use strict";
document.domain="qq.com";
var t=window.__moon_report||function(){},d=8,r={
ready:function(e){
var n=function(){
try{
e&&(window.onBridgeReadyTime=window.onBridgeReadyTime||+new Date,e());
}catch(n){
throw t([{
offset:d,
log:"ready",
e:n
}]),n;
}
};
"undefined"!=typeof top.window.WeixinJSBridge&&top.window.WeixinJSBridge.invoke?n():top.window.document.addEventListener?top.window.document.addEventListener("WeixinJSBridgeReady",n,!1):top.window.document.attachEvent&&(top.window.document.attachEvent("WeixinJSBridgeReady",n),
top.window.document.attachEvent("onWeixinJSBridgeReady",n));
},
invoke:function(e,n,o){
this.ready(function(){
return"object"!=typeof top.window.WeixinJSBridge?(i("请在微信中打开此链接！"),!1):void top.window.WeixinJSBridge.invoke(e,n,function(n){
try{
if(o){
o.apply(window,arguments);
var i=n&&n.err_msg?", err_msg-> "+n.err_msg:"";
console.info("[jsapi] invoke->"+e+i);
}
}catch(r){
throw t([{
offset:d,
log:"invoke;methodName:"+e,
e:r
}]),r;
}
});
});
},
call:function(e){
this.ready(function(){
if("object"!=typeof top.window.WeixinJSBridge)return!1;
try{
top.window.WeixinJSBridge.call(e);
}catch(n){
throw t([{
offset:d,
log:"call;methodName:"+e,
e:n
}]),n;
}
});
},
on:function(e,n){
this.ready(function(){
return"object"==typeof top.window.WeixinJSBridge&&top.window.WeixinJSBridge.on?void top.window.WeixinJSBridge.on(e,function(){
try{
n&&n.apply(window,arguments);
}catch(o){
throw t([{
offset:d,
log:"on;eventName:"+e,
e:o
}]),o;
}
}):!1;
});
}
};
return r;
});