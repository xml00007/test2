/* eslint-disable */
(function () {
    var getAttr = (function () {
        var scripts = document.getElementsByTagName('script');
        var currentScript = scripts[scripts.length - 1];
        return function (attr) {
            return currentScript.getAttribute(attr);
        };
    })();
    var designWidth = getAttr('design-width') || '750';
    var displayMaxWidth = getAttr('display-max-width') || '640';
    var designRem = designWidth / 100;
    var Dpr = 1,
        uAgent = window.navigator.userAgent;
    var isIOS = uAgent.match(/iphone/i);
    var isKoolearnAPP = uAgent.match(/ipad/i) && uAgent.match(/koolearn/i);
    var isYIXIN = uAgent.match(/yixin/i);
    var is2345 = uAgent.match(/Mb2345/i);
    var ishaosou = uAgent.match(/mso_app/i);
    var isSogou = uAgent.match(/sogoumobilebrowser/ig);
    var isLiebao = uAgent.match(/liebaofast/i);
    var isGnbr = uAgent.match(/GNBR/i);

    function resizeRoot() {
        var wWidth = (screen.width > 0) ? (window.innerWidth >= screen.width || window.innerWidth == 0) ? screen.width :
            window.innerWidth : window.innerWidth,
            wDpr, wFsize;
        var wHeight = (screen.height > 0) ? (window.innerHeight >= screen.height || window.innerHeight == 0) ?
            screen.height : window.innerHeight : window.innerHeight;
        if (window.devicePixelRatio) {
            wDpr = window.devicePixelRatio;
        } else {
            wDpr = isIOS ? wWidth > 818 ? 3 : wWidth > 480 ? 2 : 1 : 1;
        }
        if (isIOS) {
            wWidth = screen.width;
            wHeight = screen.height;
        }
        if (wWidth > wHeight) {
            wWidth = wHeight;
        }
        debugger;
        wFsize = wWidth > displayMaxWidth ? displayMaxWidth / designRem : wWidth / designRem;
        wFsize = wFsize > 32 ? wFsize : 32;
        if (isKoolearnAPP) wFsize = 50; // 如果是app端访问，则显示小点的字体
        window.screenWidth_ = wWidth;
        if (isYIXIN || is2345 || ishaosou || isSogou || isLiebao || isGnbr) { //YIXIN 和 2345 这里有个刚调用系统浏览器时候的bug，需要一点延迟来获取
            setTimeout(function () {
                wWidth = (screen.width > 0) ? (window.innerWidth >= screen.width || window.innerWidth == 0) ?
                    screen.width : window.innerWidth : window.innerWidth;
                wHeight = (screen.height > 0) ?
                    (window.innerHeight >= screen.height || window.innerHeight == 0) ?
                        screen.height : window.innerHeight : window.innerHeight;
                wFsize = wWidth > displayMaxWidth ? displayMaxWidth / designRem : wWidth / designRem;
                wFsize = wFsize > 32 ? wFsize : 32;
                var inited = document.getElementsByTagName('html')[0].getAttribute('class');
                if (inited && inited.indexOf('inner-inited') !== -1) return
                // document.getElementsByTagName('html')[0].dataset.dpr = wDpr;
                document.getElementsByTagName('html')[0].style.fontSize = wFsize + 'px';
                document.getElementById("fixed").style.display = "none";
            }, 500);
        } else {
            var inited = document.getElementsByTagName('html')[0].getAttribute('class')
            if (inited && inited.indexOf('inner-inited') !== -1) return
            document.getElementsByTagName('html')[0].dataset.dpr = wDpr;
            document.getElementsByTagName('html')[0].style.fontSize = wFsize + 'px';
            if (isKoolearnAPP) document.getElementsByTagName('html')[0].dataset.app = 'koolearn-ipad';
        }

        // 如果1rem的识别不准确，则重新定义1rem的大小 三星4倍像素的webview
        var timer = setInterval(function () {
            if (document.body) {
                clearInterval(timer);
                var domDiv = document.createElement('div');
                domDiv.id = 'id_wap-reset-size';
                domDiv.style.width = '1rem';
                document.body.appendChild(domDiv);
                // 等待完成渲染，正常的浏览器有一定概率无法完成真实大小的渲染
                setTimeout(function () {
                    var currentWFsize = domDiv.offsetWidth - 0;
                    if (Math.abs(currentWFsize - wFsize) > 1) {
                        var inited = document.getElementsByTagName('html')[0].getAttribute('class')
                        if (inited && inited.indexOf('inner-inited') !== -1) return
                        document.getElementsByTagName('html')[0].style.fontSize = wFsize * wFsize /
                            currentWFsize + 'px';
                    }
                });
            }
        }, 10);
    }
    resizeRoot();
}());
