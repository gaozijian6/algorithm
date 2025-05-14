// 定义链表节点
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

// 解法一：双指针（一次遍历）
function removeNthFromEnd(head, n) {
    // 创建虚拟头节点，处理删除第一个节点的特殊情况
    let dummy = new ListNode(0);
    dummy.next = head;
    
    let fast = dummy;
    let slow = dummy;
    
    // 快指针先走n+1步
    for (let i = 0; i <= n; i++) {
        fast = fast.next;
    }
    
    // 快慢指针同时移动，直到快指针到达末尾
    while (fast !== null) {
        fast = fast.next;
        slow = slow.next;
    }
    
    // 此时slow指向要删除节点的前一个节点
    slow.next = slow.next.next;
    
    return dummy.next;
}

// 1  2  3  4  5
