var times = 0, times2 = 0, times3 = 0;
const res = Array.from({ length: 100000 }, (_, i) => parseInt(100000 * Math.random(0, 1)));
// const res2 = res.slice(0);
// const res3 = res.slice(0);
function shellSort(arr) {
    let step = arr.length >> 1;
    while (step > 0) {
        // const maxIndex = Math.min(parseInt(arr.length / step) + step, arr.length);
        for (let i = step; i < arr.length; i++) {
            const current = arr[i];
            let j = i - step
            while (j >= 0 && arr[j] > current) {
                times++;
                arr[j + step] = arr[j]
                j -= step;
            }
            arr[j + step] = current;
        }
        step = step >> 1;
    }
    return arr;
}

function shellSort2(arr) {
    let step = arr.length >> 1;
    while (step > 0) {
        // console.log('step===>', step);
        for (let i = 0; i <= parseInt(arr.length / step); i++) {
            let j = i;
            while (j < arr.length) {
                if (j + step < arr.length && arr[j] > arr[j + step]) {
                    times++;
                    [arr[j], arr[j + step]] = [arr[j + step], arr[j]];
                }
                if (j - step > 0 && arr[j] < arr[j - step]) {
                    times++;
                    [arr[j], arr[j - step]] = [arr[j - step], arr[j]];
                }
                j += step;
            }
        }
        step = step >> 1;
    }
    return arr;
}

function insertionSort(array) {
    for (var i = 1; i < array.length; i++) {
        var key = array[i];
        var j = i - 1;
        while (j >= 0 && array[j] > key) {
            times++;
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = key;
    }
    return array;
}


const res2 = res.slice(0);
const res3 = res.slice(0);
var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48, 18, 21, 35, 100, 200, 34, 187, 124, 132, 198, 167, 123, 98, 356, 1234, 9, 290, 12, 234, 456];
const star = Date.now()
insertionSort(res); // 7497
console.log(Date.now() - star, times);

times = 0;
const star2 = Date.now()
shellSort(res2)
console.log(Date.now() - star2, times, res2);

const star3 = Date.now()
// shellSort2(res3)
console.log(Date.now() - star3);
// const res3 = res.slice(0);

// console.log(shellSort(arr)); // 86
// console.log(shellSort2(arr));
