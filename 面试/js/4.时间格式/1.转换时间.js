/**
 * Created by lewxi on 2016/8/2.
 */
~function (pro) {
    pro.myFormatTime = myFormatTime;
    function myFormatTime(template) {
        var res = null,
            ary = this.match(/\d+/g);
        template = template || "{0}年{1}月{2}日 {3}时{4}分{5}秒";
        res = template.replace(/\{(\d+)\}/g, function () {
            var val = ary[arguments[1]];
            !val ? val = "00" : null;
            val.length < 2 ? val = "0" + val : null;
            return val;
        });
        return res;
    }
}(String.prototype);