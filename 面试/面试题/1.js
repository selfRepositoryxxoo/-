/**
 * Created by lewxi on 2016/8/2.
 */
var o = {
    a: 10,
    b: {
        a: 12,
        fn: function () {
            console.log(this.a + "aaa");
            console.log(this)//window
        }
    }
}
var j = o.b.fn;
j();