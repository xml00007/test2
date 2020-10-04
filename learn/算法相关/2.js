/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let add1 = 0, root, current;
    while (l1 || l2 || add1) {
        const val = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + add1
        const last = val % 10;
        add1 = Math.floor(val / 10);
        const node = new ListNode(last);
        if (!root) {
            current = node;
            root = current;
        } else {
            current.next = node;
            current = node;
        }
        l1 && (l1 = l1.next)
        l2 && (l2 = l2.next)
    }
    return root
};
