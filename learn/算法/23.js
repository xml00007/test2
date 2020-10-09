/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    if (lists.length <= 1) return lists[0] || null;
    // 将链表转化为数组
    function change(ListNode) {
        const res = [];
        while (ListNode) {
            res.push(ListNode.val);
            ListNode = ListNode.next;
        }
        return res
    }
    // 抽象成数组
    const newList = lists.map(item => change(item));

    // 合并两个有序数组
    var merge = function (nums1, m, nums2, n) {
        let count = m + n;
        while (m > 0 && n > 0) {
            nums1[--count] = nums1[m - 1] < nums2[n - 1] ? nums2[--n] : nums1[--m];
        }
        if (n > 0) {
            nums1.splice(0, n, ...nums2.slice(0, n));
        }
    };

    const root = newList.reduce((prev, next) => {
        merge(prev, prev.length, next, next.length)
        return prev
    })
    console.log('root===>', root)
    var i = 0, rootNode = null, cur;
    while (i < root.length) {
        if (!rootNode) {
            rootNode = cur = new ListNode(root[i]);
        } else {
            const node = new ListNode(root[i]);
            cur.next = node;
            cur = node;
        }
        i++;
    }
    return rootNode
};
