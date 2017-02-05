/**
 * Created by lewxi on 2016/8/2.
 */
//需求一:数组去重 把重复项去重 然后相加
function sunUnique() {
    var ary = [];
    array.forEach(function (element) {
        var find = ary.find(function (ele) {
            return (ele.value == ele)
        });
        if (find) {
            find.dd = true
        } else {
            ary.push({
                value: element,
                dd: false
            })
        }
    });
    return ary.filter(function (ele) {
        return !ele.dd
    }).map(function () {
        return ele.value
    }).reduce(function (left, right) {
        return left + right
    })
}
/*需求二
：
数组去重
方法一
：*/
for (var i = 0; i < ary.length - 1; i++) {//控制比较多少次,控制着起始比较的那一项
    for (var j = i + 1; j < ary.length; j++) {
        if (ary[i] == ary[j]) {
            ary.splice(j, 1);//从数组里删除索引是j的这一项 会发生数组的塌陷
            j--; //这样索引就没有发生变化
        }
    }
}
console.log(ary);

/*方法二
：*/
var ary = [1, 2, 33, 33, 33, 4, 2, 1];
var obj = {};//利用了一下对象来判断数组里这一项是否是重复项
for (var i = 0; i < ary.length; i++) {
    var cur = ary[i];//数组里的每一项
    //cur -->33
    if (obj[cur] === cur) {//如果相等说明是重复的
        ary.splice(i, 1);//数组的塌陷
        i--;
        continue;
    }
    obj[cur] = cur;//obj[1] = 1 {1:1,2:2,33:33}

}
obj = null;//对象释放掉
console.log(ary);

//方法三:优化性能的数组去重的方法
var ary = [1, 2, 33, 33, 33, 4, 2, 33, 1];
var obj = {};
for (var i = 0; i < ary.length; i++) {
    var cur = ary[i];
    if (obj[cur] == cur) {
        //让最后一项的内容替换重复的这一项
        ary[i] = ary[ary.length - 1];
        //把数组的最后一项删掉
        ary.length--;
        //替换的后这一项还得再验证一遍
        i--;
    } else {
        obj[cur] = cur;
    }
}
console.log(ary);


//需求三：判断类型 然后去重
var arr = [1, "a", "a", "b", 'd', 'e', 1, 0, function () {
}, "b", "b", "b", true, false, true];
Array.prototype.unique = function () {
    var obj = {},
        arr = [];
    for (var i = 0, len = this.length; i < len; i++) {
        if (!(obj[this[i] + typeof this[i]])) {
            arr.push(this[i]);
            obj[this[i] + typeof this[i]] = 1;
        }
    }
    return arr;
};

console.log(arr.unique());





























