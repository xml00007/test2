function MyPromise(fn) {
    this.state = 'pending';
    this.res = null;
    this.resolveArr = [];
    this.rejectArr = [];
    const resolve = (res) => {
        if (this.state === 'pending') {
            this.res = res;
            this.resolveArr.map(fn => fn())
            this.state = 'resolved'
        }
    }
    const reject = (res) => {
        if (this.state === 'pending') {
            this.res = res;
            this.rejectArr.map(fn => fn())
            this.state = 'rejected'
        }
    }
    this.then = (resolveFn, rejectFn) => {
        if (typeof resolveFn !== 'function') {
            resolveFn = (value) => { return value }
        }
        if (typeof rejectFn !== 'function') {
            rejectFn = (err) => { throw err }
        }
        var promise2 = new MyPromise((resolve, reject) => {
            if (this.state === 'pending') {
                this.resolveArr.push(() => {
                    setTimeout(() => {
                        let x = resolveFn(this.res)
                        resolvePromise(promise2, x, resolve, reject)
                    }, 0);
                });
                this.rejectArr.push(() => {
                    setTimeout(() => {
                        let x = rejectFn(this.res)
                        resolvePromise(promise2, x, resolve, reject)
                    }, 0);
                });
            }
            if (this.state === 'resolved') {
                setTimeout(() => {
                    let x = resolveFn(this.res)
                    resolvePromise(promise2, x, resolve, reject)
                }, 0);
            }
            if (this.state === 'rejected') {
                setTimeout(() => {
                    let x = rejectFn(this.res)
                    resolvePromise(promise2, x, resolve, reject)
                }, 0);
            }
        });
        return promise2

    }
    const resolvePromise = (promise2, x, resolve, reject) => {
        // 循环引用报错
        if (x === promise2) {
            // reject报错
            return reject(new TypeError('Chaining cycle detected for promise'));
        }
        // 防止多次调用
        let called;
        // x不是null 且x是对象或者函数
        if (x != null && (typeof x === 'object' || typeof x === 'function')) {
            try {
                // A+规定，声明then = x的then方法
                let then = x.then;
                // 如果then是函数，就默认是promise了
                if (typeof then === 'function') {
                    // 就让then执行 第一个参数是this   后面是成功的回调 和 失败的回调
                    then.call(x, y => {
                        // 成功和失败只能调用一个
                        if (called) return;
                        called = true;
                        // resolve的结果依旧是promise 那就继续解析
                        resolvePromise(promise2, y, resolve, reject);
                    }, err => {
                        // 成功和失败只能调用一个
                        if (called) return;
                        called = true;
                        reject(err);// 失败了就失败了
                    })
                } else {
                    resolve(x); // 直接成功即可
                }
            } catch (e) {
                // 也属于失败
                if (called) return;
                called = true;
                // 取then出错了那就不要在继续执行了
                reject(e);
            }
        } else {
            resolve(x);
        }
    }
    try {
        fn(resolve, reject)
    } catch (error) {
        reject()
    }

}

// new MyPromise(function (resolve, reject) {
//     setTimeout(() => {
//         reject(1)
//     }, 1000)
// }).then((res) => {
//     console.log('res===>', res)
// }, err => {
//     console.log('error===>', err)
// })


// new MyPromise(function (resolve, reject) {
//     resolve(1)
// }).then((res) => {
//     console.log('res===>', res)
//     return res + 1;
// }).then((res1) => {
//     console.log('res1===>', res1)
// }, err => {
//     console.log('error===>', err)
// })

new MyPromise(function (resolve, reject) {
    resolve(1);
}).then((res) => {
    console.log('res===>', res)
    debugger
    return new MyPromise((resolve, reject) => {
        resolve(res + 100);
    });
}).then((res1) => {
    console.log('res1===>', res1)
}, err => {
    console.log('error===>', err)
})
