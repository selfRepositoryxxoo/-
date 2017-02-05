/**
 * Created by lewxi on 2016/8/2.
 */
/* 编写javascript函数parseQueryString ,用途是把url解析为一个对象var url = "http://www.taobao.com/index.php?key0=0&key=1&key2=2#an";
 var obj = parseQueryString(url);alert(obj.key0);输出第一个参数的值
 */
var str="http://www.taobao.com/index.php?key0=0&key=1&key2=2#an";
/*var number=str.indexOf('key0');
var str1=str.substr(number+3,1)
console.log(str1)*/
//->第一种解决方案:字符串的截取和拼接
//    var strIndex = str.indexOf("?"),
//            endIndex = str.lastIndexOf("#"),
//            resStr = "";
//    if (strIndex > -1) {
//        if (endIndex === -1) {
//            resStr = str.substring(strIndex + 1);
//        } else {
//            resStr = str.substring(strIndex + 1, endIndex);
//        }
//    }
//    var ary = resStr.split("&"),
//            obj = {};
//    for (var i = 0; i < ary.length; i++) {
//        var cur = ary[i],
//                curAry = cur.split("=");
//        obj[curAry[0]] = curAry[1];
//    }
//    console.log(obj);

//->正则处理
var obj = {};
str.replace(/([^?=&#]+)=([^?=&#]+)/g, function () {
 obj[arguments[1]] = arguments[2];
});
console.log(obj);
console.log(obj.key0)
console.log(obj["key0"])

//->对于传递过来的参数值,我们首先需要确定是否进行了编码(如果传递过来的参数值出现中文或者其他的特殊符号...我们一般都会进行编码),如果编码了需要先解码然后在解析
//encodeURIComponent()
//decodeURIComponent()


















































































