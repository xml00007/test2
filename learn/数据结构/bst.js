class Node {
    constructor(value, root = false) {
        this.value = value
        this.left = null
        this.right = null
        this.childLen = 0
        this.root = root
        this.size = 1
    }
}
class BST {
    constructor() {
        this.root = null
        this.size = 0
    }
    getSize() {
        return this.size
    }
    isEmpty() {
        return this.size === 0
    }
    addNode(v) {
        this.root = this._addChild(this.root, v, this.root)
    }
    // 添加节点时，需要比较添加的节点值和当前
    // 节点值的大小
    _addChild(node, v) {
        if (!node) {
            this.size++
            return new Node(v, this.size === 1)
        }
        if (node.value > v) {
            node.left = this._addChild(node.left, v)
        } else if (node.value < v) {
            node.right = this._addChild(node.right, v)
        }
        node.childLen++;
        node.size++;
        return node
    }
    calChildLen(node) {

    }
    // 先序遍历可用于打印树的结构
    // 先序遍历先访问根节点，然后访问左节点，最后访问右节点。
    preTraversal() {
        this._pre(this.root)
    }
    _pre(node) {
        if (node) {
            console.log(node.value)
            this._pre(node.left)
            this._pre(node.right)
        }
    }
    // 中序遍历可用于排序
    // 对于 BST 来说，中序遍历可以实现一次遍历就
    // 得到有序的值
    // 中序遍历表示先访问左节点，然后访问根节点，最后访问右节点。
    midTraversal() {
        this._mid(this.root)
    }
    _mid(node) {
        if (node) {
            this._mid(node.left)
            console.log(node.value)
            this._mid(node.right)
        }
    }
    // 后序遍历可用于先操作子节点
    // 再操作父节点的场景
    // 后序遍历表示先访问左节点，然后访问右节点，最后访问根节点。
    backTraversal() {
        this._back(this.root)
    }
    _back(node) {
        if (node) {
            this._back(node.left)
            this._back(node.right)
            console.log(node.value)
        }
    }
    //  广度遍历
    breadthTraversal() {
        if (!this.root) return null
        let q = new Queue()
        // 将根节点入队
        q.enQueue(this.root)
        // 循环判断队列是否为空，为空
        // 代表树遍历完毕
        while (!q.isEmpty()) {
            // 将队首出队，判断是否有左右子树
            // 有的话，就先左后右入队
            let n = q.deQueue()
            console.log(n.value)
            if (n.left) q.enQueue(n.left)
            if (n.right) q.enQueue(n.right)
        }
    }
    // 获取最小值
    getMin() {
        return this._getMin(this.root).value
    }
    _getMin(node) {
        if (!node.left) return node
        return this._getMin(node.left)
    }
    // 获取最大值
    getMax() {
        return this._getMax(this.root).value
    }
    _getMax(node) {
        if (!node.right) return node
        return this._getMax(node.right)
    }
    // 向下取整 向下取整是指小于等于x的最大整数
    floor(val) {
        const node = this._floor(this.root, val)
        if (node) return node.value
    }
    _floor(node, val) {
        if (node.value > val) {
            return node.left ? this._floor(node.left, val) : node
        } else {
            return node;
        }
    }
    // 向上取整 向上取整就是指大于等于x的最小整数
    ceil(val) {
        const node = this._ceil(this.root, val)
        if (node) return node.value
    }
    _ceil(node, val) {
        if (node.value < val) {
            return node.right ? this._ceil(node.right, val) : node
        } else {
            return node;
        }
    }
    // rankData(val, bigToSmall = true) {
    //     let rank = this.root.left.childLen + 3; // 设置新数字的默认排名 比首项大1
    //     return this._rankData(this.root, val, bigToSmall, rank)
    // }
    // _rankData(node, val, bigToSmall, rank) {
    //     if (node.value < val) {
    //         if (val < this.root.value) {
    //             return rank -= 1
    //         }
    //         if (!node.root) {
    //             if (node.left) rank += 1;
    //             if (node.left.childLen) rank += node.left.childLen
    //         }
    //         if (node.right) {
    //             rank += 1;
    //             return this._rankData(node.right, val, bigToSmall, rank)
    //         }

    //     } else if (node.value === val) {
    //         return rank -= 2;
    //     } else {
    //         if (val > this.root.value) {
    //             return rank -= 1;
    //         }
    //         if (!node.root) { // 小于右节点所有排名
    //             if (node.right) rank -= 1;
    //             if (node.right.childLen) rank -= node.right.childLen
    //         }
    //         if (node.left) {
    //             rank -= 1;
    //             return this._rankData(node.left, val, bigToSmall, rank)
    //         }
    //     }
    //     return rank;
    // }
    select(k) {
        let node = this._select(this.root, k)
        return node ? node.value : null
    }
    _select(node, k) {
        if (!node) return null
        // 先获取左子树下有几个节点
        let size = node.left ? node.left.size : 0
        // 判断 size 是否大于 k
        // 如果大于 k，代表所需要的节点在左节点
        if (size > k) return this._select(node.left, k)
        // 如果小于 k，代表所需要的节点在右节点
        // 注意这里需要重新计算 k，减去根节点除了右子树的节点数量
        if (size < k) return this._select(node.right, k - size - 1)
        return node
    }
}


class Queue {
    constructor() {
        this.queue = []
        this.size = 0
    }
    enQueue(val) {
        this.size++;
        this.queue.push(val)
    }
    deQueue() {
        if (this.isEmpty()) {
            return -1
        }
        this.size--;
        return this.queue.shift()
    }
    isEmpty() {
        return this.size === 0
    }

}




const node = new BST()



node.addNode(30)
node.addNode(28)
node.addNode(24)
node.addNode(20)
node.addNode(18)
node.addNode(12)
node.addNode(10)
node.addNode(8)
node.addNode(6)
node.addNode(2)

console.log('node====>', node)
// node.breadthTraversal()
// console.log(node.getMax())
// console.log(node.floor(9))
// console.log(node.ceil(29))
// console.log(node.rankData(2))
// console.log(node.rankData(18))
// console.log(node.rankData(24))
// console.log(node.rankData(30))
console.log(node.select(9))
