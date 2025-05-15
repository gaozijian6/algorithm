function swapPairs(head) {
    // 基本情况：如果链表为空或只有一个节点，直接返回
    if (!head || !head.next) {
        return head;
    }
    
    // 保存第二个节点
    let second = head.next;
    
    // 递归处理后面的节点
    head.next = swapPairs(second.next);
    
    // 交换前两个节点
    second.next = head;
    
    // 返回新的头节点（原来的第二个节点）
    return second;
}

function swapPairs2(head) {
    // 创建一个虚拟头节点，简化边界情况处理
    let dummy = { next: head };
    let prev = dummy;
    
    // 当存在至少两个节点可以交换时
    while (prev.next && prev.next.next) {
        // 标识要交换的两个节点
        let first = prev.next;
        let second = prev.next.next;
        
        // 执行交换
        prev.next = second;
        first.next = second.next;
        second.next = first;
        
        // 移动prev指针到下一对要交换的节点前
        prev = first;
    }
    
    return dummy.next;
}