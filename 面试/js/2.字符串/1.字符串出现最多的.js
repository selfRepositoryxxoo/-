//统计出现次数最多的单词(可能是多个)，及出现多少次
var str='abcAAAABBBB';
var re=/[a-z]/gi;
var obj={};
str.replace(re,function(){
    var cur=arguments[0].toLowerCase();//拿到每个单词的小写；
    if(obj[cur]){//给控对象赋值：把单词当作属性名，出现次数当作属性值；
        obj[cur]++;
    }else{
        obj[cur]=1;
    }
})
console.log(obj)
var max=0;
var ary=[];//Object {a: 5, b: 5, c: 1}
for(var k in obj){
    if(obj[k]>max){
        max=obj[k];
    }
}
for(var k in obj){//对象中，谁的属性值等于以上我们求出的最大值；那么谁的属性名就是我们要找的；
    if(obj[k]==max){
        ary.push(k)
    }
}
console.log(max)
console.log(ary)
