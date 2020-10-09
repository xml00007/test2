function findMedianSortedArrays(arr1, arr2) {
    let m = arr1.length;
    let n = arr2.length;
    let left = Math.floor((m + n + 1) / 2);
    let right = Math.floor((m + n + 2) / 2);
    return (findKth(arr1, 0, arr2, 0, left) + findKth(arr1, 0, arr2, 0, right)) / 2;
}
//i: arr1的起始位置 j: arr2的起始位置
function findKth(arr1, i, arr2, j, k) {
    console.log('findKth===>', arr1, i, arr2, j, k);
    if (i >= arr1.length) return arr2[j + k - 1];//arr1为空数组
    if (j >= arr2.length) return arr1[i + k - 1];//arr2为空数组
    if (k == 1) {
        return Math.min(arr1[i], arr2[j]);
    }
    let midVal1 = (i + Math.floor(k / 2) - 1 < arr1.length) ? arr1[i + Math.floor(k / 2) - 1] : Number.MAX_VALUE;
    let midVal2 = (j + Math.floor(k / 2) - 1 < arr2.length) ? arr2[j + Math.floor(k / 2) - 1] : Number.MAX_VALUE;
    if (midVal1 < midVal2) {
        return findKth(arr1, i + Math.floor(k / 2), arr2, j, k - Math.floor(k / 2));
    } else {
        return findKth(arr1, i, arr2, j + Math.floor(k / 2), k - Math.floor(k / 2));
    }
}

const a = findMedianSortedArrays([1, 2, 3, 4], [3, 5, 5, 6, 7, 10])
console.log('aaaaaaa======>', a);
