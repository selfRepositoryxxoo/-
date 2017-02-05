/**
 * Created by lewxi on 2016/8/2.
 */
//深度克隆
//深克隆  完整复制一样的东西
//前克隆：拷贝的地址
//如何检测一个变量是一个String类型?请写出函数实现

Object.prototype.typeOfType = function (typeString) {
    return Object.prototype.toString.call(this) == '[object ' + typeString + ']';
};
console.log("123".typeOfType('String'));

//每一个函数四个属性 length name prototype constructor
   function type2(str, type) {
        if(typeof type=='function')type=type.name;
        return Object.prototype.toString.call(str) == "[object "+type+"]";
    }
   // console.log(type2([],'Array'));
    console.log(type2([],Array));




























