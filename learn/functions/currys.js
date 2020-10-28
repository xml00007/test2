function currys(fn) {
    const len = fn.length;
    let args = [];
    const f = function (num) {
        args = args.concat(Array.prototype.slice.call(arguments, 0));
        if (args.length >= len) {
            return fn.apply(null, args);
        }
        return f;
    }
    return f;
}

function currys2(fn) {
    const len = fn.length;
    let args = [];
    const f = function (num) {
        args.push(num);
        if (args.length >= len) {
            return fn.apply(null, args);
        }
        return f;
    }
    return f;
}


function add(a, b, c, d) {
    return a + b + c + d;
}


const ad = currys(add);
console.log(ad(1)(2, 3)(3))
