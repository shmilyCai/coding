/***
 *
 * 输入一个链表，反转链表后，输出新链表的表头
 *
 * 思路：
 * 以链表的头部节点为基准节点
 * 将基准节点的下一个节点挪到头部作为节点
 * 当基准节点的next为null，则其已经成为最后一个节点，链表已经反转完成
 *
 */

function reverseList(head) {
  let currentNode = null;
  let headNode = head;
  while (head && head.next) {
    currentNode = head.next;
    head.next = currentNode.next;
    currentNode.next = headNode;
    headNode = currentNode;
  }
  return headNode;
}