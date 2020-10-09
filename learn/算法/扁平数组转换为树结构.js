var arr = [
    { 'id': 1, 'parentid': 0 },
    { 'id': 4, 'parentid': 2 },
    { 'id': 3, 'parentid': 1 },
    { 'id': 5, 'parentid': 0 },
    { 'id': 6, 'parentid': 0 },
    { 'id': 2, 'parentid': 1 },
    { 'id': 7, 'parentid': 4 },
    { 'id': 8, 'parentid': 1 }
];
// 数组转换为树
function unflatten(arr) {
    var tree = [],
        mappedArr = {},
        arrElem,
        mappedElem;

    // First map the nodes of the array to an object -> create a hash table.
    for (var i = 0, len = arr.length; i < len; i++) {
        arrElem = arr[i];
        mappedArr[arrElem.id] = arrElem;
        mappedArr[arrElem.id]['children'] = [];
    }


    for (var id in mappedArr) {
        if (mappedArr.hasOwnProperty(id)) {
            mappedElem = mappedArr[id];
            // If the element is not at the root level, add it to its parent array of children.
            if (mappedElem.parentid) {
                mappedArr[mappedElem.parentid].children.push(mappedElem);
            }
            // If the element is at the root level, add it to first level elements array.
            else {
                tree.push(mappedElem);
            }
        }
    }
    return tree;
}

var tree = unflatten(arr);


// 树转化为数组
function nodes2Array(nodes) {
    if (!nodes) return [];
    var childKey = "child",
        r = [];
    if (nodes instanceof Array) {
        for (var i = 0, l = nodes.length; i < l; i++) {
            r.push(nodes[i]);
            if (nodes[i][childKey])
                r = r.concat(nodes2Array(nodes[i][childKey]));
        }
    } else {
        r.push(nodes);
        if (nodes[childKey])
            r = r.concat(nodes2Array(nodes[childKey]));
    }
    return r;
}
