/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// var detectCycle = function (head) {
//     var cur = prev = head;
//     while (prev) {
//         if (cur.next) {
//             if (cur.next == prev) {
//                 return prev
//             }
//             cur = cur.next;
//         }
//         else {
//             prev = prev.next;
//             cur = prev;
//         }
//     }
//     return null
// };

var detectCycle = function (head) {
    const visited = new Set();
    while (head !== null) {
        if (visited.has(head)) {
            return head;
        }
        visited.add(head);
        head = head.next;
    }
    return null;
};

// 作者：LeetCode - Solution
// 链接：https://leetcode-cn.com/problems/linked-list-cycle-ii/solution/huan-xing-lian-biao-ii-by-leetcode-solution/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
