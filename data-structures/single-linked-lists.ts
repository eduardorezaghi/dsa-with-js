// deno-lint-ignore-file no-explicit-any

import { Node } from "./aux-properties.ts";

class SinglyLinkedList {
    head: Node | null;
    tail: Node | null;
    length: number;

    constructor(values: any[] = []) {
        this.head = null;
        this.tail = null;
        this.length = 0;

        for (const value of values) {
            this.push(value);
        }
    }

    toString(): string {
        if (!this.head) {
            return "null";
        }
        let current = this.head;
        let str = "";
        while (current != null) {
            str += current.val + " -> ";
            current = current.next;
        }
        return str + "null";
    }

    push(val: any): SinglyLinkedList {
        const newNode = new Node(val);
        if (this.head == null) {
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            // Traverse to the end of the list,
            // by checking if the next node is null.
            while (this.tail?.next != null) {
                this.tail = this.tail.next;
            }
            this.tail.next = newNode;
            this.tail = newNode;
        }

        ++this.length;
        return this;
    }

    pop(): Node | null {
        if (this.length == 0) {
            return null;
        }

        let current = this.head;
        let newTail = current;
        while (current?.next != null) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        --this.length;
        return current;
    }

    shift(): Node | null {
        if (!this.head) return "null";

        const newHead = this.head.next;
        const oldHead = this.head;
        this.head = newHead;
        --this.length;

        return oldHead;
    }

    unshift(val: any): void {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
            return;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        ++this.length
    }

    reverse(): SinglyLinkedList {
        let tmpNode = this.head;
        this.head = this.tail;
        this.tail = tmpNode;

        let next;
        let prev = null;

        for (let i = 0; i < this.length; i++) {
            next = tmpNode.next;
            tmpNode.next = prev;
            prev = tmpNode;
            tmpNode = next;
        }

        return this;
    }
}

if (import.meta.main) {
    const list = new SinglyLinkedList();
    list.push("HELLO");
    list.push("GOODBYE");
    list.push("!");

    console.log(list.toString());

    list.pop();
    console.log(list.toString());

    list.shift();
    console.log(list.toString());

    list.unshift("GOODS!")
    list.unshift("BANG")
    console.log(list.toString());
    
    const list2 = new SinglyLinkedList([1, 2, 3, 4, 5]);
    list2.reverse();
    console.log(list2.toString());

    const list3 = new SinglyLinkedList([1, 2, 3, 4, 5]);
}

export { SinglyLinkedList };
