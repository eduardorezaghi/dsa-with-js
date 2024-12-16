export class Node {
    val: any;
    next: Node | null;

    constructor(val: any) {
        this.val = val;
        this.next = null;
    }
}

export class TreeNode {
    value: any;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(val: any) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}