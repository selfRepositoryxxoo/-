/**
 * Created by lewxi on 2016/8/2.
 */
/*
需求：将字符串"<tr><td>{$id}</td><td>{$name}</td></tr>"中的{$id}替换成10,{$name}替换成Tony (使用正则表达式)
* */
var str="<tr><td>{$id}</td><td>{$name}</td></tr>",
    ary=[10,'Tony'];
var i=0;
str =str.replace(/\{\$\w+\}/ig,function(){
   return  ary[i++]
});
console.log(str);
/*
* 请写一个函数escapeHtml将<,>,&," 进行转义
* */
var escapeHTML=function(str){
    var map={
        '>':'&gt;',
        '<':'&lt;',
        '&':'&amp;',
        '"':'&quot;'
    };
    for(var p in map){
        //str=str.replace(new RegExp(p,'g'),map[p]);
        str=str.replace(new RegExp('^'+p+'$','g'),map[p]);
    }
    return str
}
console.log(escapeHTML('>'));


