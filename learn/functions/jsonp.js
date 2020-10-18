function objectToQuery(obj) {
    const arr = [];
    for (var i in obj) {
        arr.push(encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]));
    }
    return arr.join('&');
}
function jsonp({ url, data, callback }) {
    const container = document.getElementsByTagName('head')[0];
    const fnName = `jsonp_${new Date().getTime()}`;
    const script = document.createElement('script');
    script.src = `${url}?${objectToQuery(data)}&callback=${fnName}`;
    script.type = 'text/javascript';
    container.appendChild(script);

    window[fnName] = function (res) {
        callback && callback(res);
        // 很多候选人漏掉clean这块
        container.removeChild(script);
        delete window[fnName];
    }

    script.onerror = function () { // 异常处理，也是很多人漏掉的部分
        window[fnName] = function () {
            callback && callback(
                'something error hanppend!'
            )
            container.removeChild(script);
            delete window[fnName];
        }
    }

}
