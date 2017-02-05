//带var 是不能删掉的   不带var的是可以删掉的
(function (x) {
    delete x;
    console.log(x);//6  不可以删除

})(1 + 5);


;  //2-36  默认是0 按10进制来说的

console.log(["29", "2", "3", "12", "2", "41", "30", '39'].map(parseInt)); //map的两个参数  parseInt（item，index）  index介于2-36 大于或者小于是NaN  不写index或者=0  都会按照10进制来解析  二进制里面没有3   超出的删掉   是几进制 就是 从右到左 值*进制的几次方来计算

//请实现add()函数,满足一下结果:add(2)(7)
function add(x) {
    var sum = x;
    var tmp = function (y) {
        sum = sum + y;
        return tmp;
    };
    tmp.toString = function () {
        return sum;
    };
    return tmp;
}
//console.log(add(1)(2)(3));  //6
//console.log(add(1)(2)(3)(4));   //10

//求一个字节长度
new function (s) {
    if (!arguments.length || !s) return null;
    if ("" == s) return 0;
    var l = 0;
    for (var i = 0; i < s.length; i++) {
        if (s.charCodeAt(i) > 255) l += 2;
        else l++;
    }
    console.log(l);
}("你");//一个汉字是2个
//扩展一个buffer  3个


















