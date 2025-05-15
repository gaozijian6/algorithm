// 定义链表节点
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

// 解法一：分治法（推荐）
function mergeKLists(lists) {
    if (!lists || lists.length === 0) return null;
    
    // 分治合并
    while (lists.length > 1) {
        let mergedLists = [];
        
        // 两两合并
        for (let i = 0; i < lists.length; i += 2) {
            let list1 = lists[i];
            let list2 = i + 1 < lists.length ? lists[i + 1] : null;
            mergedLists.push(mergeTwoLists(list1, list2));
        }
        
        lists = mergedLists;
    }
    
    return lists[0];
}

// 辅助函数：合并两个有序链表
function mergeTwoLists(list1, list2) {
    let dummy = new ListNode(0);
    let current = dummy;
    
    while (list1 && list2) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }
    
    current.next = list1 || list2;
    return dummy.next;
}