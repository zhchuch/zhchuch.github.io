 var sttop=0;
 var loadcomm=false;
 window.onerror=function(){return true;};
 var commentTpl = '<dd>\
			<a class="icon" href="javascript:;"><img alt="" src="{icon}"></a>\
			<div class="cinfo">\
				<div class="info">{content}</div>\
				<div class="count">\
					<a class="rb reply" rid="{commentid}" href="javascript:;">回复</a>\
					<a class="c ibg support"  sid="{commentid}"  href="javascript:;">{supports}</a>\
				</div>\
			</div>\
		</dd>';




$(function(){


	$(".mnw_top_s3 .more,.mnw_top_s3  .mnav").css({"left":$(".mnw_top_s3 .more").offset().left-510});
	$(".mnw_top_s3 .more,.mnw_top_s3  .mnav").mouseenter(function(e){$(".mnw_top_s3  .mnav").show();})
		.mouseleave(function(e){ $(".mnw_top_s3  .mnav").hide();});
 	$(".totop").css({left:$(".iw").offset().left+1010,top:$(window).height()-200});
	$(".clist dt a").mouseover(function(){
			$(".clist dt a").removeClass("sel");
			$(this).addClass("sel");
			$(".clist dd .list").hide();
		    $(".clist .list").eq($(this).index()).show();
		});

	$(".totop .t").click(function(){$("html,body").stop().animate({scrollTop:0},500);return false;});

 if($(".st").length)
	sttop=$(".st").offset().top;

	$(".icontent img").each(function(){
				if($(this).width()>645)
				{
					$(this).width(645);
					if($(this).parent()[0].tagName!="A")
					{
						$(this).wrap("<a href='"+$(this).attr("src")+"'  target='_blank'></a>");
					}
				}
		});


	$("[hint]").focus(function(){
		if($(this).val()==$(this).attr("hint")){$(this).val("");}
	}).blur(function(){
		if($(this).val()==""){$(this).val($(this).attr("hint"));}
	});

	$(".path .sb,.sb a").click(function(){
		var txt=$.trim($("#stxt").val());
		if(txt==$(this).attr("hint") || txt=="")
		{
			alert("请输入要搜索的关键字!");
			return false
		}
		else
		{
			$(this).attr("href","http://so.mnw.cn/cse/search?s=6497631107033654394&entry=1&q="+encodeURIComponent(txt));
		}

	});



	$(".fulltext").click(function(){
	$.getJSON(APP_URL+'?app=article&controller=article&action=fulltext&jsoncallback=?&contentid='+contentid, function(data){
				context = data.content;
				$(".icontent").html(context);
				$(".pages").remove();
				$(".icontent img").each(function(){
					if($(this).width()>645)
					{
						$(this).width(645);
						if($(this).parent()[0].tagName!="A")
						{
							$(this).wrap("<a href='"+$(this).attr("src")+"'  target='_blank'></a>");
						}
					}
			});

			});

	});


  $(window).resize(function(){

		$(".mnw_top_s3 .more,.mnw_top_s3  .mnav").css({"left":$(".mnw_top_s3 .more").offset().left-510});
		$(".totop").css({left:$(".iw").offset().left+1010,top:$(window).height()-200});
		sttop=$(".st").offset().top;
		$(window).trigger("scroll");

		});


$(window).scroll(function(){

		if($(document).scrollTop()>300)
		{
			$(".totop").show();
		}
		else
		{
			$(".totop").hide();
		}

		if (sttop<$(document).scrollTop()  &&  $(window).height()>640)
		{
			$(".st").addClass("stop");
		}
		else
		{
			$(".st").removeClass("stop");
		}

		if($(document).scrollTop()>1900 && loadcomm==false)
		{
				loadcomm=true;
				getCommemt(topicid,$('.commlist'),function(json) {
						$('.comment-form .cc span').html(json.total);
						if(json.total >0 ) $('.comment-form .cc').show();

					});


		}


});

$(window).trigger("scroll");
User.StateHtml($(".mnw_log_status"));
$.getJSON('http://app.mnw.cn/stat.php?app=system&controller=content&action=stat&jsoncallback=?&contentid='+contentid,function(data){});
window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"1","bdMiniList":false,"bdPic":"","bdStyle":"1","bdSize":"16"},"share":{}};with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];


});












//取评论函数
				function getCommemt(topicid,wrapper,callback) {


					if(!topicid) return ;
					$.getJSON(APP_URL+'?app=comment&controller=review&action=page&pagesize=5&all=1&topicid='+topicid+'&jsoncallback=?', function(json){
						if(typeof(json) == 'object') {
							for (var i=0,item;item=json[i++];) {
								var html=commentTpl;
								for (var key in item) {
									 html = html.replace(new RegExp('{'+key+'}',"gm"), item[key]);

								}

								 wrapper.append(html);

							}


								$(".commlist .support").click(function(){
									$.get("http://app.mnw.cn/?app=comment&controller=comment&action=support&commentid="+$(this).attr("sid")+"&m="+Math.random());
									$(this).text(parseInt($(this).text())+1);
									});


								$(".commlist .reply").click(function(){


											var html="<div id=\"comment_form_1422516798\" style=\"clear:both;margin-top:15px\" class=\"comment-form\" style=\"margin-top: 0\">\n\t<div class=\"c-inner\" style=\"margin: 0px auto; width: 97%;\">\n\t\t<form action=\"http:\/\/app.mnw.cn\/?app=comment&controller=review&action=add\" method=\"post\">\n\t\t\t<input type=\"hidden\" name=\"topicid\" value=\""+topicid+"\" \/>\n\t\t\t<input type=\"hidden\" name=\"followid\" value=\""+$(this).attr("rid")+"\" \/>\n\t\t\t<div class=\"textarea-wrap\" style=\"width: 623px;\"><textarea name=\"content\" class=\"textarea\" style=\"width: 620px; height: 150px;\">\u6211\u4e5f\u6765\u8bc4\u8bba!<\/textarea><div class=\"login-warn\"><p class=\"info\">\n\t\t\t\t\u60a8\u9700\u8981\u767b\u5f55\u540e\u624d\u53ef\u4ee5\u8bc4\u8bba\uff0c<a href=\"javascript:;\" class=\"cloud-login\" hideFocus=\"true\">\u767b\u5f55<\/a>| <a href=\"http:\/\/app.mnw.cn\/?app=member&controller=index&action=register\"  hideFocus=\"true\">\u6ce8\u518c<\/a>\n\t\t\t<\/p><\/div><\/div>\n\t\t\t<div class=\"ov\" style=\"overflow:hidden;float:left;  margin-top: 10px;width:100%\">\n\t\t\t\t<div class=\"loginform-user-info\" style=\"float:left\"><\/div>\n\t\t\t\t<input class=\"btn-post\" type=\"submit\"  style=\"float:right\"  value=\"\u53d1\u8868\u8bc4\u8bba\">\n\t\t\t<\/div>\n                        <div class=\"ov\" style=\"line-height:15px;overflow:hidden;display:none\">\u7f51\u53cb\u8bc4\u8bba\u4ec5\u4f9b\u7f51\u53cb\u8868\u8fbe\u4e2a\u4eba\u770b\u6cd5\uff0c\u5e76\u4e0d\u8868\u660e\u672c\u7f51\u540c\u610f\u5176\u89c2\u70b9\u6216\u8bc1\u5b9e\u5176\u63cf\u8ff0\u3002<\/div>\n\t\t<\/form>\n\t<\/div>\n<\/div>\n<script id=\"afterlogin_1422516798\" type=\"text\/template\">\n\t<div>\n\t\t<div class=\"username-area\">\n\t\t\t<em><\/em>\n\t\t\t<a class=\"quickLogout\" href=\"javascript:;\">\u9000\u51fa<\/a>\n\t\t<\/div>\n\t\t<span class=\"anonymous\"><\/span>\n\t\t<div class=\"share-area\"><\/div>\n\t\t<div class=\"seccode-area\" style=\"visibility: hidden;\"><\/div>\n\t<\/div>\n<\/script>\n<script id=\"beforelogin_1422516798\" type=\"text\/template\">\n\t<div>\n\t\t<span class=\"info\">\n\t\t\t<a href=\"javascript:;\" class=\"cloud-login\">\u767b\u5f55<\/a>\n\t\t\t&nbsp;&nbsp;|&nbsp;&nbsp;\n\t\t\t<a href=\"http:\/\/app.mnw.cn\/?app=member&controller=index&action=register\">\u6ce8\u518c<\/a>\n\t\t<\/span>\n\t\t<div class=\"seccode-area\" style=\"visibility: hidden;\"><\/div>\n\t<\/div>\n<\/script>\n<script type=\"text\/javascript\" src=\"http:\/\/img.mnw.cn\/apps\/comment\/js\/comment.post.js\"><\/script>\n<script type=\"text\/javascript\">\n$(function() {\n\tvar rid = '1422516798',\n\tform = $('#comment_form_'+rid).find('form');\n\tcommentPost = new CommentPost({\n\t\tform: form,\n\t\tisLogin: 0,\n\t\tisCheck: 0,\n\t\tisSeccode: 0,\n\t\ttopicid: topicid,\n\t\tafterLoginTemplate: $('#afterlogin_'+rid).html(),\n\t\tbeforeLoginTemplate: $('#beforelogin_'+rid).html(),\n\t\tuserInfoPanel: form.find('.loginform-user-info'),\n\t\twarningPanel: form.find('.login-warn'),\n\t\tloginSelector: '.cloud-login',\n\t\tlogoutSelector: '.quickLogout'\n\t});\n\n\n     $('#comment_form_'+rid).find(\".textarea\").click(function(){\n            if($.trim($(this).val())==\"\u6211\u4e5f\u6765\u8bc4\u8bba!\")\n                $(this).val(\"\");\n        }).blur(function(){\n            if($.trim($(this).val())==\"\")\n                $(this).val(\"\u6211\u4e5f\u6765\u8bc4\u8bba!\");\n\n        });\n\n\n    $('#comment_form_'+rid).find(\".btn-post\").click(function(){ \n        var val=$.trim( $('#comment_form_'+rid).find(\".textarea\").val());\n        if(val.length<5 ||   val.length > 1000 || val==\"\u6211\u4e5f\u6765\u8bc4\u8bba!\")\n            {\n                \n        alert('\u8bc4\u8bba\u5185\u5bb9\u957f\u5ea6\u9700\u63a7\u5236\u57285~1000\u4e4b\u95f4');\n        return false;\n  \n            }    \n        return true;\n\n});\n\n\n});\n<\/script>";
											window.replyDialog=new window.dialog({width:648,height:226,html:html,hasOverlay:1,hasCloseIco:1});
											replyDialog.open();


									});

						}
						// 非评论页不能进行评论操作
						$('.operate').remove();
						typeof callback == 'function' && callback(json);
					});
				}
