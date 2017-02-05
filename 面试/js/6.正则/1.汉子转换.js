/**
 * Created by lewxi on 2016/8/2.
 */
var str = "459876";
var ary = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"];
var reg = /\d/g;
str = str.replace(reg, function (result, index, str) {
    return ary[result];
})
console.log(str);