/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function (k) {
    this.queue = new Array(k);
    this.start = 0;
    this.end = 0;
    this.size = 0;
};

/**
 * Insert an element into the circular queue. Return true if the operation is successful.
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
    if (this.isFull()) return false;
    if (this.isEmpty()) {
        console.log('this.end=====>', this.end)
        this.size += 1;
        this.queue[this.end] = value;
        return true;
    }
    if (this.end === this.queue.length - 1) {
        this.end = 0
    } else {
        this.end += 1;
    }
    this.size += 1;
    this.queue[this.end] = value;
    return true;
};

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
    if (this.isEmpty()) {
        return false;
    }
    const val = this.queue.splice(this.start, 1, null)[0];
    console.log('val====>', val, this.queue)

    if (this.start === this.queue.length - 1) {
        this.start = 0
    } else {
        this.start += 1
    }
    if (this.size === 1) {
        this.start = this.end;
    }
    this.size -= 1;
    return val;
};

/**
 * Get the front item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
    if (this.isEmpty()) return -1;
    return this.queue[this.start];
};

/**
 * Get the last item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
    if (this.isEmpty()) return -1;
    return this.queue[this.end];
};

/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
    return this.size === 0;
};

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
    return this.size === this.queue.length;
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */

var obj = new MyCircularQueue(6)
console.log('obj=====>', obj)
var param_1 = obj.enQueue(1)
var param_2 = obj.deQueue()
// var param_3 = obj.deQueue()
var param_4 = obj.enQueue(2)
var param_5 = obj.deQueue()
var param_6 = obj.enQueue(3)
console.log('obj=====>', obj)
console.log(param_1, param_2, param_4, param_5, param_6);
