/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    var root = new ListNode('', head);
    var cur = root, prev = null;
    while (cur) {
        if (cur.val === val) {
            prev.next = cur.next;
        } else {
            prev = cur;
        }
        cur = cur.next
    }
    return root.next
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}
