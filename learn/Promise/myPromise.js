class MyPromise {
    constructor(fn) {
        this.result = undefined;
        this.status = 'pending';
        this.resolveArr = []; // 初始化then中成功的方法
        this.rejectArr = []; // 初始化then中失败的方法
        let change = (status, result) => {
            if (this.status !== "pending") return; // 状态一旦改变，就不会再变
            this.status = status;
            this.result = result;
            const finallArr = this.status === 'resolved' ? this.resolveArr : this.rejectArr;
            finallArr.forEach((fn) => {
                if (typeof fn !== "function") return;
                fn(this.result);
            })

        }
        let resolve = (result) => {
            console.log('resolveArr===>', this.resolveArr)
            if (this.resolveArr.length > 0) {
                change('resolved', result)
            } else {
                let timer = setTimeout(() => {
                    change('resolved', result)
                    clearTimeout(timer)
                }, 0)
            }
        }

        let reject = (result) => {
            console.log('rejectArr===>', this.rejectArr)
            if (this.rejectArr.length > 0) {
                change('rejected', result)
            } else {
                let timer = setTimeout(() => {
                    change('rejected', result)
                    clearTimeout(timer)
                }, 0)
            }
        }

        try {
            fn(resolve, reject)
        } catch (error) {
            reject(error)
        }
    }
    then(resolveFn, rejectFn) {
        // 如果传入的两个参数不是函数，则直接执行返回结果
        if (typeof resolveFn !== "function") {
            resolveFn = result => {
                return result;
            }
        }

        if (typeof rejectFn !== "function") {
            rejectFn = reason => {
                return MyPromise.reject(reason);
            }
        }
        return new MyPromise((resolve, reject) => {
            this.resolveArr.push(result => {
                try {
                    let x = resolveFn(result); // 获取执行成功方法返回的结果

                    // 如果x是一个promise实例，则继续调用then方法 ==> then链的实现
                    if (x instanceof MyPromise) {
                        x.then(resolve, reject)
                        return;
                    }

                    // 不是promise实例，直接执行成功的方法
                    resolve(x);
                } catch (err) {
                    reject(err)
                }
            })

            this.rejectArr.push(reason => {
                try {
                    let x = rejectFn(reason);

                    if (x instanceof MyPromise) {
                        x.then(resolve, reject)
                        return;
                    }

                    resolve(x);
                } catch (err) {
                    reject(err)
                }
            })
        })
    }
    catch (rejectFn) {
        return this.then(null, rejectFn)
    }
    static resolve(result) {
        // 返回新的promise实例，执行promise实例中resolve方法
        return new MyPromise(resolve => {
            resolve(result)
        })
    }
    static reject(reason) {
        // 返回新的promise实例，执行promise实例中reject方法
        return new MyPromise((_, reject) => {
            reject(reason);
        })
    }
    done(resolveFn, rejectFn) {
        this.then(resolveFn, rejectFn)
            .catch(reason => {
                setTimeout(() => {
                    throw reason;
                }, 0)
            })
    }
    finally(finallyFn) {
        let P = this.constructor;
        return this.then(
            value => P.resolve(finallyFn()).then(() => value),
            reason => P.reject(finallyFn()).then(() => reason)
        )
    }
    // 接收数组参数
    static all(promiseList) {
        // 返回新实例，调用后还可使用then、catch等方法
        return new MyPromise((resolve, reject) => {
            let index = 0, // 成功次数计数
                results = []; // 返回的结果

            for (let i = 0; i < promiseList.length; i++) {
                let item = promiseList[i];

                // 如果item不是promise实例
                if (!(item instanceof MyPromise)) return;

                item.then(result => {
                    index++;
                    results[i] = result;
                    if (index === promiseList.length) {
                        resolve(results);
                    }
                }).catch(reason => {
                    reject(reason);
                })
            }
        })
    }
    static race(promiseList) {
        return new MyPromise((resolve, reject) => {
            promiseList.forEach(item => {
                if (!(item instanceof MyPromise)) return;

                item.then(result => {
                    resolve(result);
                }).catch(err => {
                    reject(err)
                })
            })
        })
    }
}

// let p1 = new MyPromise((resolve, reject) => {
//     resolve(1);
// })

// let p2 = new MyPromise((resolve, reject) => {
//     reject(2);
// })
// console.log(p1);
// console.log(p2);



// 3、链式调用
// new MyPromise((resolve, reject) => {
//     reject('失败了，我好委屈，呜呜呜～～');
//     resolve('已经失败了～～～');
// }).then(res => {
//     console.log(res);
// }, err => {
//     console.log(err, 'error'); // 失败了，我好委屈，呜呜呜～～ error
//     return '我要发奋图强，不会被困难所击倒，我要成功！！！'
// }).then(res1 => {
//     console.log(res1, '经过不懈努力，我终于在第二次成功了～'); // 我要发奋图强，不会被困难所击倒，我要成功！！！  经过不懈努力，我终于在第二次成功了～
// }, err1 => {
//     console.log(err1, '第二次失败');
// })
new MyPromise((resolve, reject) => {
    reject('失败了，我好委屈，呜呜呜～～');
    resolve('已经失败了～～～');
}).then(res => {
    console.log(res);
}, err => {
    console.log(err, 'error'); // 失败了，我好委屈，呜呜呜～～ error
    return '我要发奋图强，不会被困难所击倒，我要成功！！！'
}).finally(() => {
    console.log('执行了吗'); // 这里会输出"执行了吗"
})
