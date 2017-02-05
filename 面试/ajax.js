var xhr = new XMLHttpRequest();
xhr.open('get', url, true);
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && /^2\d{2}$/g.test(xhr.status){
        JSON.parse(xhr.responseText);
    }
};
xhr.send(data);
var tools = {
    xhr: function () {
        var xhrList = [function () {
            return new XMLHttpRequest()
        }, function () {
            return new ActiveXObject('Microsoft.XMLHTTP')
        }, function () {
            return new ActiveXObject('MsXML2.XMLHTTP')
        }, function () {
            return new ActiveXObject('MsXML3.XMLHTTP')
        }, xhr = null]
        while(xhr=xhrList.shift()){
            try{
                xhr();
                break
            }catch(e){
                xhr=null;
                continue
            }
        }
        if(xhr==null){
            throw new Error('不支持xhr')
        }
        return xhr
    }
}


~function () {
    this.jsonp = function (url, data, jsonp, callback) {
        var count = 1;
        var cbname = jsonp + count++;
        var callbackName = "window.jsonp." + cbname;
        window.jsonp[cbname] = function (data) {
            try {
                callback(data)
            } finally {
                delete window.jsonp[cbname]
                script.parentNode.removeChild(script);
            }
        };
        var src = tools.padurl(url, data);
        src = tools.padurl(src, jsonp + "=" + callbackName)//这个是不能改变的 因为这是告诉返回的全局函数是什么
        var script = document.createElement('script');
        script.type = "text/javascript";
        script.src = src;
        document.body.appendChild(script)

        var tools = {
            padurl: function (url, data) {
                data = this.encodeURIString(data);
                if (!data) {
                    return url
                }
                return url + /\?/g.test(url) ? "&" : "?" + data
            },
            //这个是将对象转换成 字符串
            encodeURIString: function (data) {
                if (!data) {
                    return ''
                }
                if (typeof data == "string") {
                    return data
                }
                var ary = [];
                for (var n in data) {
                    if (!data.hasOwnProperty(n))continue;
                    ary.push(encodeURIComponent(n) + "=" + encodeURIComponent(data[n]));
                }
                ary.join('&');
            }
        }
    }
}()


