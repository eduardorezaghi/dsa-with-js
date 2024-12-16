// Recursive implementation of a binary search tree.

import { TreeNode } from "./aux-properties.ts";

class BinarySearchTree {
    root: TreeNode | null;

    constructor() {
        this.root = null;
    }

    insert(value: number) {
        const newNode = new TreeNode(value);

        const insertNode = (node: TreeNode | null, newNode: TreeNode) => {
            // If the tree is empty, it means that there is no root node.
            // So, we create a new node and assign it to the root.

            if (node === null) {
                node = newNode;
            }
            // If the value of the new node is equal to the value of the current node,
            // we do nothing.
            if (newNode.value === node.value) {
                return undefined;
            }
            // If the value of the new node is less than the value of the current node,
            // traverse to the left subtree.
            else if (newNode.value < node.value) {
                insertNode(node.left, newNode);
            }
            // If the value of the new node is greater than the value of the current node,
            // traverse to the right subtree.
            else {
                insertNode(node.right, newNode);
            }
        };

        insertNode(this.root, newNode);
    }


    bfs() {
        const data: number[] = [];
        const queue: TreeNode[] = [];
        let node = this.root;

        // If there is no root node, return an empty array.
        if (!node) {
            return data; // []
        }

        queue.push(node);
        while (queue.length) {
            node = queue.shift()!;
            data.push(node.value);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        return data;
    }

    /**
     * Depth First Search (PreOrder)
     * - Visit the node first.
     * - Traverse the left subtree.
     * - Traverse the right subtree.
     * @returns 
     */
    dfsPreOrder() {
        const data: number[] = [];
        const traverse = (node: TreeNode) => {
            data.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        };

        traverse(this.root!);
        return data;
    }

    /**
     * Depth First Search (PostOrder)
     * - Traverse the left subtree.
     * - Traverse the right subtree.
     * - Visit the node last.
     * @returns 
     */
    dfsPostOrder() {
        const data: number[] = [];
        const traverse = (node: TreeNode) => {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            data.push(node.value);
        };

        traverse(this.root!);
        return data;
    }

    /**
     * Depth First Search (InOrder)
     * - Traverse the left subtree.
     * - Visit the node.
     * - Traverse the right subtree.
     * @returns Array of values in the tree.
     */
    dfsInOrder(): Array<number> {
        const data: number[] = [];
        const traverse = (node: TreeNode) => {
            if (node.left) traverse(node.left);
            data.push(node.value);
            if (node.right) traverse(node.right);
        };

        traverse(this.root!);
        return data;
    }

    printTree(node: TreeNode | null = this.root, prefix = "", isLeft = true) {
        if (node === null) {
            console.log(`${prefix}${isLeft ? "├──" : "└──"} null`);
            return;
        }

        console.log(`${prefix}${isLeft ? "├──" : "└──"} ${node.value}`);
        this.printTree(node.left, prefix + (isLeft ? "│   " : "    "), true);
        this.printTree(node.right, prefix + (isLeft ? "│   " : "    "), false);
    }
}

if (import.meta.main) {
    const tree = new BinarySearchTree();
    tree.root = new TreeNode(10);
    tree.root.left = new TreeNode(5);
    tree.root.left.left = new TreeNode(2);
    tree.root.left.right = new TreeNode(8);
    tree.root.right = new TreeNode(15);
    tree.root.left.left = new TreeNode(2);
    tree.root.left.left.right = new TreeNode(4);

    // Tree
    //         10             
    //     5       15
    //   2   8
    //    4
    console.log(tree.printTree());
    console.log(tree.bfs()); // [10, 5, 15, 2, 8, 4]
    console.log(tree.dfsPreOrder()); // [10, 5, 2, 4, 8, 15]
    console.log(tree.dfsPostOrder()); // [4, 2, 8, 5, 15, 10]
    console.log(tree.dfsInOrder()); // [2, 4, 5, 8, 10, 15]
}