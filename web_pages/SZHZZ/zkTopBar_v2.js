(function(Global, $) {
    //style
    var $style = '<style>.zk_top_barwrap{display:none;z-index:1000;width:100%;height:auto;background-color:transparent;margin:0 auto;position:fixed;bottom:0;left:0;}.zk_top_bar{-webkit-animation:animatopbar 0.6s ease forwards;animation:animatopbar 0.6s ease forwards}@-webkit-keyframes animatopbar{0%{-webkit-transform:translate(0, 42px);transform:translate(0, 42px)}100%{-webkit-transform:translate(0, 0);transform:translate(0, 0)}}@keyframes animatopbar{0%{-webkit-transform:translate(0, 42px);transform:translate(0, 42px)}100%{-webkit-transform:translate(0, 0);transform:translate(0, 0)}}.zk_top_bar{max-width:720px;margin: 0 auto;height: 42px;border-top: 1px solid #e8e8e8;background-color:#fff;z-index:10}.zk_top_bar_logo{float:left;margin:8px 0;left: 14px;position: absolute;}.zk_top_bar_link{ margin: 7px 0; right: 14px;position: absolute;}</style>';


    //logo
    var logoElement = 'https://zkres3.myzaker.com/static/wap/images/wap_logo.png';

    //打开图片
    var openPng = 'http://zkres.myzaker.com/static/wap/images/open_zk.png';

    //element
    var element = $('.zk_top_barwrap');

    if (!element.length) {
        element = $('<div class="zk_top_barwrap"><div class="zk_top_bar"><a href="//app.myzaker.com/"><img class="zk_top_bar_logo" src="' + logoElement + '" style="height:27px;width:90px;" alt=""></a> <a class="zk_top_bar_link"><img src="' + openPng + '" style="height: 27px;width: 70px;" ></a></div></div>');
    }

    //init
    var zkTopBar = {
        //点击打开的函数
        openFunc: "",
        //点击打开的链接
        openUrl: ""
    };
    Global.zkTopBar = {
        config: function(options) {
            var defaults = {
                //点击打开的函数
                openFunc: "",
                //点击打开的链接
                openUrl: ""
            };
            $.extend(defaults, options);

            if (defaults.openFunc) {
                zkTopBar.openFunc = defaults.openFunc;
            }
            if (defaults.openUrl) {
                zkTopBar.openUrl = defaults.openUrl;
            }

            //安全删除方法
            this.config = function() {
                return false;
            };

            return true;
        },
        init: function() {
            $(function() {
                //添加到内部
                $('head').append($style);
                $('body').prepend(element);
                element.css('display','block');
                var bodypadding = parseInt($('body').css('padding-bottom'));
                $('body').css('padding-bottom', 44 + bodypadding + "px");
            });
            this.init = "";
        },
        intelInit: function() {
            if (checkIsOpenByThird()) {
                this.init();
            }
        }
    };

    //url打开链接
    element.find('.zk_top_bar_link').click(function() {
        //优先执行函数
        if (zkTopBar.openFunc && ((typeof zkTopBar.openFunc).toUpperCase() == 'FUNCTION')) {
            zkTopBar.openFunc();
            return;
        }
        if (zkTopBar.openUrl) {
            window.location = zkTopBar.openUrl;
            return;
        }
        window.location = 'http://www.myzaker.com/m/';
    });

    function checkIsOpenByThird() {
        if (navigator.appinfo) {
            return false;
        }

        //得到ua
        var ua = window.navigator.userAgent.toLowerCase();

        //微信
        if (ua.match(/MicroMessenger/i) == 'micromessenger') {
            return true;
        }
        //在新浪微博客户端打开
        if (ua.match(/WeiBo/i) == "weibo") {
            return true;
        }
        //在QQ空间打开
        if (ua.match(/QQ/i) == "qq") {
            return true;
        }
        //qq浏览器
        if (ua.match(/qqbrowser/i) == "qqbrowser") {
            return true;
        }
        //baidu浏览器
        if (ua.match(/BIDUBrowser/i) == "bidubrowser" || ua.match(/Baidu/i) == "baidu") {
            return true;
        }
        //uc浏览器
        if (ua.match(/UBrowser/i) == "ubrowser" || ua.match(/UCBrowser/i) == "ucbrowser") {
            return true;
        }
        //搜狗浏览器
        if (ua.match(/MetaSr/i) == "metaSr" || ua.match(/Sogou/i) == "sogou") {
            return true;
        }
        //360极速浏览器
        if (ua.match(/360EE/i) == "360ee") {
            return true;
        }
        //360安全浏览器
        if (ua.match(/360SE/i) == "360se") {
            return true;
        }
        //猎豹浏览器
        if (ua.match(/LBBROWSER/i) == "lbbrowser") {
            return true;
        }

        return false;
    }


})(window, window.jQuery || window.Zepto);