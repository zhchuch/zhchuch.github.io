(function(){var siteConfig = {"ie":"utf-8","width":550,"resultNum":2,"queryNum":1,"bgColor":"#ffffff","resultNumWap":2,"queryNumWap":1,"bgColorWap":"#ffffff","keywordsFrom":1,"keywordsFromWap":1,"sid":"6497631107033654394","resultUrl":"so.mnw.cn"};siteConfig.logId = '3102455530';!function(){function d(a,b){var c;for(c in b)b.hasOwnProperty(c)&&(a.style[c]=b[c])}function e(){return/AppleWebKit.*Mobile/i.test(navigator.userAgent)||/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent)||/(iphone|ios|android|mini|mobile|mobi|Nokia|Symbian|iPod|iPad|Windows\s+Phone|MQQBrowser|wp7|wp8|UCBrowser7|UCWEB|360\s+Aphone\s+Browser)/i.test(navigator.userAgent)?1:0}function f(){var c,d,e,f,g,h,i,j,k,l,m,n,o,q,r,s,t,u,v,w,a={};a.isIframe=1,a.rec=1,a.wt=1,a.ht=3,a.fpos=2,c=b.resultNum?b.resultNum:5,a.pn=b.resultNumWap?b.resultNumWap:c,d=b.keywordsFromWap?parseInt(b.keywordsFromWap,10):1,b.keywordsFrom=d,b.bgColorWap?a.pg=b.bgColorWap.replace("#",""):b.bgColor&&(a.pg=b.bgColor.replace("#","")),e=document.referrer;try{if(e){if(h={},decodeURIComponent(e)&&(f=decodeURIComponent(e)),g=f.split("?"),g[1])for(i=g[1].split("&"),j=0;j<i.length;j++)k=i[j].split("=")[0],l=i[j].split("=")[1],k&&l&&(h[k]=l);m=/www\.baidu\.com/,n=/m\.baidu\.com/,o=/cse\/search/,m.test(f)&&h["eqid"]?(a.eqid=h["eqid"],a.qfrom=1):(m.test(f)||n.test(f))&&h["word"]?(a.q=h["word"],a.qfrom=1):o.test(f)&&h["q"]&&(a.q=encodeURIComponent(h["q"]),a.qfrom=2)}}catch(p){}if(!a.q||""===a.q)if(!d||2!==d&&3!==d){for(q=document.getElementsByTagName("meta"),r="",s=[],t=[],j=0;j<q.length;j++)q[j].getAttribute("name")&&q[j].getAttribute("content")&&"keywords"===q[j].getAttribute("name").toLowerCase()&&(s=q[j].getAttribute("content").split(/,| |、|;|，|\|/));if(s.length>0){for(j=0;j<s.length;j++)""!==s[j]&&t.push(s[j]);for(u=b.queryNumWap?b.queryNumWap:b.queryNum,v=Math.min(t.length,u),w=0;v>w;w++)r=r+" "+t[w];1!==a.qfrom&&(a.qfrom=3)}""===r&&document.title&&(r=document.title,1!==a.qfrom&&(a.qfrom=4)),""!==r&&(a.q=encodeURIComponent(r))}else document.title&&(r=document.title,1!==a.qfrom&&(a.qfrom=4)),""!==r&&(a.q=encodeURIComponent(r));return a}function g(){var c,d,e,f,g,h,i,j,k,l,m,o,p,q,r,s,t,u,a={};a.rec=1,a.wt=1,a.ht=3,a.pn=b.resultNum?b.resultNum:10,c=b.keywordsFrom?parseInt(b.keywordsFrom,10):1,d=document.referrer;try{if(d){if(g={},decodeURIComponent(d)&&(e=decodeURIComponent(d)),f=e.split("?"),f[1])for(h=f[1].split("&"),i=0;i<h.length;i++)j=h[i].split("=")[0],k=h[i].split("=")[1],j&&k&&(g[j]=k);l=/www\.baidu\.com/,m=/cse\/search/,l.test(e)&&g["eqid"]?(a.eqid=g["eqid"],a.qfrom=1):m.test(e)&&g["q"]&&(a.q=encodeURIComponent(g["q"]),a.qfrom=2)}}catch(n){}if(!a.q||""===a.q)if(!c||2!==c&&3!==c){for(o=document.getElementsByTagName("meta"),p="",q=[],r=[],i=0;i<o.length;i++)o[i].getAttribute("name")&&o[i].getAttribute("content")&&"keywords"===o[i].getAttribute("name").toLowerCase()&&(q=o[i].getAttribute("content").split(/,| |、|;|，|\|/));if(q.length>0){for(i=0;i<q.length;i++)""!==q[i]&&r.push(q[i]);for(s=Math.min(r.length,b.queryNum),t=0;s>t;t++)p=p+" "+r[t];1!==a.qfrom&&(a.qfrom=3)}""===p&&document.title&&(p=document.title,1!==a.qfrom&&(a.qfrom=4)),""!==p&&(a.q=encodeURIComponent(p))}else document.title&&(p=document.title,1!==a.qfrom&&(a.qfrom=4)),""!==p&&(a.q=encodeURIComponent(p));return u=/xcar\.com\.cn/,u.test(window.location.href)&&(a.picrec=1,a.qfrom=4,b.width=670,b.bgColor="#fff"),a}function h(a){var d,c=b.resultUrl;c=c+"?"+"s="+b.sid+"&loc="+encodeURIComponent(window.location.href)+"&width="+b.width;for(d in a)c=c+"&"+encodeURIComponent(d)+"="+a[d];return c}function i(){var k,l,m,n,o,p,q,r,s,t,c=document.getElementById("bdcsFrameBox"),i=e()?f():g();if(4!==i.qfrom||""===document.title||b.keywordsFrom&&3===parseInt(b.keywordsFrom,10)){if(q=h(i),r={name:"bdcsFrame",id:"bdcsFrame",src:q,frameBorder:"0",width:"100%",height:"100%",marginWidth:"0",marginHeight:"0",hspace:"0",vspace:"0",allowTransparency:"true",scrolling:"no"},c&&q){1===e()?d(c,{width:"100%",height:"auto",backgroundColor:"#fff"}):0===parseInt(b.width,10)?d(c,{width:"100%",height:"auto",backgroundColor:b.bgColor}):d(c,{width:b.width+"px",height:"auto",backgroundColor:b.bgColor}),s=document.createElement("iframe");for(t in r)s.setAttribute(t,r[t]);c.appendChild(s),window.postMessage&&(window.attachEvent?window.attachEvent("onmessage",function(a){if(0===parseInt(a.data,10))s.height="100%",document.getElementById("bdcsFrame").contentWindow.postMessage("getHeight","*");else if(a.data.toString().indexOf("px")<0&&a.data.toString().indexOf("none")<0&&a.data.toString().indexOf("pic")<0){var b=parseInt(a.data,10)+10;isNaN(b)||(s.height=b+"px")}}):window.addEventListener("message",function(a){if(0===parseInt(a.data,10))s.height="100%",document.getElementById("bdcsFrame").contentWindow.postMessage("getHeight","*");else if(a.data.toString().indexOf("px")<0&&a.data.toString().indexOf("none")<0&&a.data.toString().indexOf("pic")<0){var b=parseInt(a.data,10)+10;isNaN(b)||(s.height=b+"px")}},!1)),s.attachEvent?s.attachEvent("onload",function(){window.postMessage||j(s,c)}):s.addEventListener("load",function(){window.postMessage||j(s,c)},!1)}}else{if(k=document.title,l=/xcar\.com\.cn/,l.test(window.location.href))for(m=document.getElementsByTagName("meta"),n=0;n<m.length;n++)m[n].getAttribute("name")&&m[n].getAttribute("content")&&"keywords"===m[n].getAttribute("name").toLowerCase()&&(k=m[n].getAttribute("content"));o={title:k,locUrl:window.location.href},p="",a.init(),a.get({url:"http://zhannei.baidu.com/api/customsearch/keywords",parameters:o,success:function(a){var f,g,k,l,m,n,o,q,r,s;if(a&&a.result&&a.result.res&&a.result.res.keyword_list){for(f=a.result.res.keyword_list,b.queryNumWap=b.queryNumWap?b.queryNumWap:1,b.queryNum=b.queryNum?b.queryNum:1,g=e()?b.queryNumWap:b.queryNum,k=Math.min(f.length,g),l=0;k>l;l++)p=p+" "+f[l];if(m=/xcar\.com\.cn/,m.test(window.location.href))for(n=["single","single"],a.result.res.keyword_type_list&&(n=a.result.res.keyword_type_list),p="",k=Math.min(f.length,2),l=0;k>l&&(p=p+" "+f[l],"combine"!==n[l]);l++);}if(i.qfrom=5,i.q=encodeURIComponent(p),""===p&&(i.q=encodeURIComponent(document.title),i.qfrom=6),o=h(i),q={name:"bdcsFrame",id:"bdcsFrame",src:o,frameBorder:"0",width:"100%",height:"100%",marginWidth:"0",marginHeight:"0",hspace:"0",vspace:"0",allowTransparency:"true",scrolling:"no"},c&&o){1===e()?d(c,{width:"100%",height:"auto",backgroundColor:"#fff"}):(m=/xcar\.com\.cn/,m.test(window.location.href)?d(c,{width:"670px",height:"182px",backgroundColor:"#fff"}):0===parseInt(b.width,10)?d(c,{width:"100%",height:"auto",backgroundColor:b.bgColor}):d(c,{width:b.width+"px",height:"auto",backgroundColor:b.bgColor})),r=document.createElement("iframe");for(s in q)r.setAttribute(s,q[s]);c.appendChild(r),window.postMessage&&(window.attachEvent?window.attachEvent("onmessage",function(a){if(0===parseInt(a.data,10))r.height="100%",document.getElementById("bdcsFrame").contentWindow.postMessage("getHeight","*");else if(a.data.toString().indexOf("px")<0&&a.data.toString().indexOf("none")<0&&a.data.toString().indexOf("pic")<0){var b=parseInt(a.data,10)+10;isNaN(b)||(r.height=b+"px")}}):window.addEventListener("message",function(a){if(0===parseInt(a.data,10))r.height="100%",document.getElementById("bdcsFrame").contentWindow.postMessage("getHeight","*");else if(a.data.toString().indexOf("px")<0&&a.data.toString().indexOf("none")<0&&a.data.toString().indexOf("pic")<0){var b=parseInt(a.data,10)+10;isNaN(b)||(r.height=b+"px")}},!1)),r.attachEvent?r.attachEvent("onload",function(){window.postMessage||j(r,c)}):r.addEventListener("load",function(){window.postMessage||j(r,c)},!1)}}})}}function j(a){if(""!==window.name&&0===e()){var c=parseInt(window.name)+10;a.height=c+"px"}}function k(a,b){var c=b,d=b;return a.style.inlineName?a.style[c]:document.defaultView&&document.defaultView.getComputedStyle?document.defaultView.getComputedStyle(a,null).getPropertyValue(d):a.currentStyle?a.currentStyle[c]:null}function l(a,b){var c,d,e,f,g;if(b=b||document,b.getElementsByClassName)return b.getElementsByClassName(a);for(c=[],d=b.getElementsByTagName("*"),e=new RegExp("(^|\\s)"+a.replace(/\-/g,"\\-")+"(\\s|$)"),f=0,g=d.length;g>f;f++)e.test(d[f].className)&&c.push(d[f]);return c}function m(a,b,c){document.addEventListener?a.addEventListener(b,c,!1):document.attachEvent&&a.attachEvent("on"+b,function(b){b.preventDefault=function(){b.returnValue=!1},b.stopPropagation=function(){b.cancelBubble=!0},c.call(a,b)})}function q(a,b,c){var d,e,f,g;b=b===!1?!1:!0,c=c||"bdcs-styleElem",b&&(a=(a||"").replace(o,".bdcs-container .bdcs-")),d=document.getElementById("znBdcsStyle"),d?d.styleSheet?(p.push(a),d.styleSheet.cssText=p.join("\n")):d.appendChild(document.createTextNode(a)):(e=document.createElement("style"),e.id="znBdcsStyle",e.rel="stylesheet",e.type="text/css",f=document.getElementsByTagName("head"),f&&(g=f[0],g.children[0]?g.insertBefore(e,g.children[0]):g.appendChild(e)),e.styleSheet?(e.styleSheet.cssText=a,p.push(a)):e.appendChild(document.createTextNode(a)))}var b,c,n,o,p,r,s,t,a=function(a){"use strict";var b,c,d,e,f,g,h,i,j;return c=function(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent?a.attachEvent("on"+b,c):a["on"+b]=c},d=function(c,d){b.log("Garbage collecting!"),d.parentNode.removeChild(d),a[c]=void 0;try{delete a[c]}catch(e){}},e=function(a,b){var d,e,c="";for(d in a)a.hasOwnProperty(d)&&(d=b?encodeURIComponent(d):d,e=b?encodeURIComponent(a[d]):a[d],c+=d+"="+e+"&");return c.replace(/&$/,"")},f=function(){var a="",b=[],c="0123456789ABCDEF",d=0;for(d=0;32>d;d+=1)b[d]=c.substr(Math.floor(16*Math.random()),1);return b[12]="4",b[16]=c.substr(8|3&b[16],1),a="flyjsonp_"+b.join("")},g=function(a,c){b.log(c),"undefined"!=typeof a&&a(c)},h=function(a,c){b.log("GET success"),"undefined"!=typeof a&&a(c),b.log(c)},i=function(a,c){b.log("POST success"),"undefined"!=typeof a&&a(c),b.log(c)},j=function(a){b.log("Request complete"),"undefined"!=typeof a&&a()},b={},b.options={debug:!1},b.init=function(a){var c;b.log("Initializing!");for(c in a)a.hasOwnProperty(c)&&(b.options[c]=a[c]);return b.log("Initialization options"),b.log(b.options),!0},b.log=function(c){a.console&&b.options.debug&&a.console.log(c)},b.get=function(k){k=k||{};var l=k.url,m=k.callbackParameter||"callback",n=k.parameters||{},o=a.document.createElement("script"),p=f(),q="?";if(!l)throw new Error("URL must be specified!");n[m]=p,l.indexOf("?")>=0&&(q="&"),l+=q+e(n,!0),a[p]=function(a){"undefined"==typeof a?g(k.error,"Invalid JSON data returned"):"post"===k.httpMethod?(a=a.query.results,a&&a.postresult?(a=a.postresult.json?a.postresult.json:a.postresult,i(k.success,a)):g(k.error,"Invalid JSON data returned")):h(k.success,a),d(p,o),j(k.complete)},b.log("Getting JSONP data"),o.setAttribute("src",l),o.setAttribute("charset","utf-8"),a.document.getElementsByTagName("head")[0].appendChild(o),c(o,"error",function(){d(p,o),j(k.complete),g(k.error,"Error while trying to access the URL")})},b.post=function(a){a=a||{};var f,g,c=a.url,d=a.parameters||{},h={};if(!c)throw new Error("URL must be specified!");f=encodeURIComponent('select * from jsonpost where url="'+c+'" and postdata="'+e(d,!1)+'"'),g="http://query.yahooapis.com/v1/public/yql?q="+f+"&format=json"+"&env="+encodeURIComponent("store://datatables.org/alltableswithkeys"),h.url=g,h.httpMethod="post","undefined"!=typeof a.success&&(h.success=a.success),"undefined"!=typeof a.error&&(h.error=a.error),"undefined"!=typeof a.complete&&(h.complete=a.complete),b.get(h)},b}(window);siteConfig&&(b=siteConfig,c=/^https?:\/\//,b.resultUrl=b.resultUrl||"zhannei.baidu.com",b.resultUrl+="/"!==b.resultUrl.charAt(b.resultUrl.length-1)?"/cse/search":"cse/search",c.test(b.resultUrl)||(b.resultUrl="http://"+b.resultUrl),i(),n=function(){function a(a){var b="_rpLog-"+(new Date).getTime(),c=new Image;window[b]=c,c.onload=c.onerror=function(){window[b]=null},c.src=a,c=null}function b(a,b){var d,c=a||{};for(d in b)b.hasOwnProperty(d)&&(c[d]=b[d]);return c}function c(c){var i,k,l,f={logid:0,version:0,prod_id:"rp",plate_url:encodeURIComponent(window.location.href),referrer:encodeURIComponent(document.referrer),time:(new Date).getTime()},g=f,h=[],j=c;for("?"!==j.charAt(j.length-1)&&(j+="?"),k=1,l=arguments.length;l>k;k++)"[object Object]"===Object.prototype.toString.call(arguments[k])&&(g=b(g,arguments[k]));for(i in g)h.push(i+"="+g[i]);a(j+h.join("&")),"[object Function]"===Object.prototype.toString.call(arguments[arguments.length-1])&&arguments[arguments.length-1].call()}return{send:c}}(),o=/\.bdcs-/g,p=[],r='<div class="bcse-card-top">\n<span class="bcse-card-title">搜索到关于</span>\n<span class="bcse-card-query" title=""></span>\n<span class="bcse-card-title">的其他站内文章</span>\n<span class="bcse-card-close">×</span>\n</div>\n<div class="bcse-card-center">\n<iframe width="125" height="71" scrolling="no" class="bcse-card-frame" id="bdcsCardFrame" frameborder="0" src=""></iframe>\n<div class="bcse-card-result-title">\n<a class="bcse-card-first-link" href="" target="_blank" title="" cpos="1"></a>\n</div>\n<div class="bcse-card-result-abstract"></div>\n<div class="bcse-card-result-next">\n<a class="bcse-card-next-link" href="" target="_blank" title="" cpos="2"></a>\n</div>\n</div>\n',s="#bdcsWnCard{position:fixed;bottom:50px;left:0;width:326px;max-height:158px;box-shadow:2px 3px 3px #ccc;background-color:#fff;display:none;left:-328px;z-index:99999999;font-family:'Microsoft Yahei',微软雅黑,serif}#bdcsWnCard .bcse-card-top{width:316px;height:28px;line-height:28px;font-size:13px;color:#ebedfb;background-color:#2C85FF;padding-left:10px}#bdcsWnCard .bcse-card-title{float:left;display:inline-block}#bdcsWnCard .bcse-card-query{float:left;display:inline-block;font-weight:700;margin:0 3px;max-width:110px;overflow:hidden;white-space:nowrap;color:#fff;-o-text-overflow:ellipsis;text-overflow:ellipsis}#bdcsWnCard .bcse-card-close{float:right;font-size:22px;margin-right:5px;margin-top:-2px;cursor:pointer}#bdcsWnCard .bcse-card-center{padding:15px 10px}#bdcsWnCard .bcse-card-frame{float:left;height:75px;width:121px;margin-right:15px;margin-bottom:10px}#bdcsWnCard .bcse-card-result-title{word-break:break-all;line-height:16px;max-height:33px;overflow:hidden}#bdcsWnCard .bcse-card-center a{font-size:14px;color:#333;text-decoration:none}#bdcsWnCard .bcse-card-result-title a:visited{color:#333}#bdcsWnCard .bcse-card-result-abstract{font-size:12px;word-break:break-all;color:#bfbfbf;height:28px;line-height:14px;margin-top:10px;overflow:hidden}#bdcsWnCard .bcse-card-result-next{font-size:14px;width:100%;line-height:16px;height:16px;overflow:hidden;color:#333;margin-top:15px}.clearfix:after{content:'';display:block;clear:both;height:0}.clearfix{zoom:1}",t=function(){function d(e){var h,f=document.getElementById("bdcsWnCard"),g=parseInt(k(f,"left"),10);0>g?(window.bdcsMncardReady=0,f.style.left=g+4+"px",window.setTimeout(function(){d(e)},1)):(window.bdcsMncardReady=1,a=1,c=0,n.send("http://znsv.baidu.com/customer_search/click",h,{query:l("bcse-card-query")[0].getAttribute("title"),log_type:"wn-card-show",site_id:b.sid,type:e,from:"iframe",plate_url:window.location.href}))}function e(){var b=document.getElementById("bdcsWnCard"),d=parseInt(k(b,"left"),10);d>-328?(window.bdcsMncardReady=0,b.style.left=d-4+"px",window.setTimeout(function(){e()},1)):(a=0,c=1,b.style.display="none",window.bdcsMncardReady=1)}function f(a){this.options=a,this.render(this.options.data,this.options.qType)}var a=1,c=1;return f.prototype.render=function(a,c){var d,e,f,g,h,i,j,k;q(s),d=document.createElement("div"),d.className="bcse-wn-card",d.id="bdcsWnCard",document.body.appendChild(d),d.innerHTML=r,e=l("bcse-card-query")[0],e.innerHTML=a["query"],e.setAttribute("title",a["query"]),f=l("bcse-card-first-link")[0],f.innerHTML=a["results"][0]["title"].replace(/<em>/g,"").replace(/<\/em>/g,""),f.setAttribute("title",a["results"][0]["title"].replace(/<em>/g,"").replace(/<\/em>/g,"")),f.setAttribute("href",a["results"][0]["url"]),g=l("bcse-card-next-link")[0],g.innerHTML=a["results"][1]["title"].replace(/<em>/g,"").replace(/<\/em>/g,""),g.setAttribute("title",a["results"][1]["title"].replace(/<em>/g,"").replace(/<\/em>/g,"")),g.setAttribute("href",a["results"][1]["url"]),h=l("bcse-card-result-abstract")[0],h.innerHTML=a["results"][0]["abstract"].replace(/<em>/g,"").replace(/<\/em>/g,""),i=document.getElementById("bdcsCardFrame"),a["results"][0]["img"]?i.setAttribute("src","http://znsv.baidu.com/static/customer-search/html/wncard.html?a="+a["results"][0]["url"]+"&q="+l("bcse-card-query")[0].getAttribute("title")+"&s="+b.sid+"&p="+window.location.href+"&t="+c+"#"+a["results"][0]["img"]):i.style.display="none",window.bdcsMncardMtd=1,window.bdcsMncardReady=1,j=document.documentElement.scrollTop||document.body.scrollTop,k=Math.max(document.documentElement.scrollHeight,document.body.clientHeight),j>=(k-document.documentElement.clientHeight)/2&&1===window.bdcsMncardMtd&&(document.getElementById("bdcsWnCard").style.display="block",document.getElementById("bdcsWnCard").style.left=0),this.bind(c)},f.prototype.bind=function(f){m(l("bcse-card-close")[0],"click",function(){document.getElementById("bdcsWnCard").style.display="none",window.bdcsMncardMtd=0}),window.onscroll=function(){var b=document.documentElement.scrollTop||document.body.scrollTop,g=Math.max(document.documentElement.scrollHeight,document.body.clientHeight),h=document.getElementById("bdcsWnCard");b>=(g-document.documentElement.clientHeight)/2&&1===window.bdcsMncardMtd&&1===window.bdcsMncardReady&&1===c?(h.style.display="block",d(f)):b<(g-document.documentElement.clientHeight)/2&&1===window.bdcsMncardReady&&1===a&&e()};for(var g=0;g<document.getElementById("bdcsWnCard").getElementsByTagName("a").length;g++)m(document.getElementById("bdcsWnCard").getElementsByTagName("a")[g],"click",function(){var d,c=this.getAttribute("href");n.send("http://znsv.baidu.com/customer_search/click",d,{query:l("bcse-card-query")[0].getAttribute("title"),url:c,log_type:"wn-card-click",site_id:b.sid,plate_url:window.location.href,type:f,from:"iframe",cpos:this.getAttribute("cpos")?this.getAttribute("cpos"):3})})},f}(),function(){var h,j,k,l,m,n,o,p,q,r,s,u,v,w,x,c=[],d=[],f=0,g={s:b.sid,locUrl:window.location.href},i=document.referrer;if(i){if(l={},decodeURIComponent(i)&&(j=decodeURIComponent(i)),k=j.split("?"),k[1])for(m=k[1].split("&"),n=0;n<m.length;n++)o=m[n].split("=")[0],p=m[n].split("=")[1],o&&p&&(l[o]=p);q=/www\.baidu\.com/,r=/cse\/search/,q.test(j)&&l["eqid"]?(g["eqid"]=l["eqid"],h=1):r.test(j)&&l["q"]&&(g["q"]=l["q"],h=2)}if(!g["q"]){for(s=document.getElementsByTagName("meta"),u="",v=[],w=[],n=0;n<s.length;n++)s[n].getAttribute("name")&&s[n].getAttribute("content")&&"keywords"===s[n].getAttribute("name").toLowerCase()&&(v=s[n].getAttribute("content").split(/,| |、|;|，/));if(v.length>0){for(n=0;n<v.length;n++)""!==v[n]&&w.push(v[n]);w.length>0&&(u=w[0],1!==h&&(h=3))}""===u&&document.title&&(u=document.title,1!==h&&(h=4)),""!==u&&(g["q"]=u)}for(x=0;x<d.length;x++)window.location.href===d[x]&&(f=1);for(n=0;n<c.length;n++)window.location.href.indexOf(c[n])>=0&&0===f&&0===e()&&!document.getElementById("bdcsWnCard")&&(g["q"]||g["eqid"])&&(a.init(),a.get({url:"http://zhannei.baidu.com/api/customsearch/search",parameters:g,success:function(a){a&&0===a.error&&a.results.length>1&&new t({data:a,qType:h})}}))}())}();})();