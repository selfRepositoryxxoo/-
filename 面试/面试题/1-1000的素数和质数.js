var i, j, m, n = o;
for (i = 0; i <= 1000; i++) {
    for (m = 1, j = 2; j <= (int)sqrt(i);
    j++
)
    if (i % j == 0) {
        m = 0;
        break;
    }
    if (m == 1) {
        document.write(i);
        n++;
        if (n % 6 == 0) document.writeln();

    }
}


//这是ok的
var a = [2,3,5];
for (var i=7; i<1000; i+=2) {
    if (check(i)) a.push(i);
}
alert(a);
function check(n){
    for (var i=0; i<a.length; i++) {
        if (a[i] * a[i] > n) return true;
        if (n % a[i] === 0) return false;
    }
}