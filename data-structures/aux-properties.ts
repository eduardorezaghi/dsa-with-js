export class Node {
    // deno-lint-ignore no-explicit-any
    val: any;
    next: Node | null;

    constructor(val: any) {
        this.val = val;
        this.next = null;
    }
}