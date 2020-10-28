function flat(arr, index = 1) {
    return arr.reduce((all, curr) => {
        // return Array.isArray(curr) ?
        //     all.concat(flat(curr)) :
        //     all.concat(curr)
        return all.concat((Array.isArray(curr) && (index--) > 0) ? flat(curr) : curr)
    }, [])
}
console.log(flat([[[1, 2, 3]], 3, 4, [6, 7, 8]]));


// function flatten(ary) {
//     return ary.reduce((pre, cur) => {
//         return pre.concat(Array.isArray(cur) ? flatten(cur) : cur);
//     }, [])
// }
// let ary = [1, 2, [3, 4], [5, [6, 7]]]
// console.log(flatten(ary))
