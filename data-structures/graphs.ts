class Graph {
    private relationsList: Record<string, string[]> = {};

    constructor() {
        this.relationsList = {};
    }

    addNode(node: string) {
        !this.relationsList[node] && (this.relationsList[node] = []);
    }

    addConnection(node1: string, node2: string) {
        this.relationsList[node1].push(node2);
        this.relationsList[node2].push(node1);
    }

    removeNode(node1: string, node2: string) {
        this.relationsList[node1] = this.relationsList[node1].filter(node => node !== node2);
        this.relationsList[node2] = this.relationsList[node2].filter(node => node !== node1);
    }
}


if (import.meta.main) {
    const graph = new Graph();
    graph.addNode("Tokyo");
    graph.addNode("Dallas");
    graph.addNode("Aspen");

    graph.addConnection("Tokyo", "Dallas");
    graph.addConnection("Dallas", "Aspen");

    console.log(graph);

    graph.removeNode("Tokyo", "Dallas");

    console.log(graph);
}