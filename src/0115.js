function f(x, y) {
    y(x);
}

var x = 5;

function callback(x) {
    return x + 10;
} 

console.log(f(x,callback));