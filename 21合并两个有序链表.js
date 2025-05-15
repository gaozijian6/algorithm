// 定义链表节点
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// 解法一：迭代法（推荐）
function mergeTwoLists(list1, list2) {
  // 创建虚拟头节点，简化边界处理
  let dummy = new ListNode(-1);
  let current = dummy;

  // 同时遍历两个链表
  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  // 连接剩余的节点
  current.next = list1 || list2;

  return dummy.next;
}
