function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

function addTwoNumbers(l1, l2) {
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    let carry = 0;
    
    while (l1 || l2 || carry) {
        // 获取当前位的值
        let val1 = l1 ? l1.val : 0;
        let val2 = l2 ? l2.val : 0;
        
        // 计算当前位的和
        let sum = val1 + val2 + carry;
        
        // 更新进位
        carry = Math.floor(sum / 10);
        
        // 创建新节点存储当前位的结果
        current.next = new ListNode(sum % 10);
        current = current.next;
        
        // 移动到下一位
         l1 = l1?.next;
         l2 = l2?.next;
    }
    
    return dummyHead.next;
}

// 创建链表
function createLinkedList(arr) {
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    
    for (let num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }
    
    return dummyHead.next;
}

// 链表转数组（便于查看结果）
function linkedListToArray(head) {
    let result = [];
    let current = head;
    
    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }
    
    return result;
}

let l5 = createLinkedList([9,9,9,9,9,9,9]);
let l6 = createLinkedList([9,9,9,9]);
let result3 = addTwoNumbers(l5, l6);
console.log(linkedListToArray(result3)); // [8,9,9,9,0,0,0,1]