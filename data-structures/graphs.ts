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

    depthFirstSearch(startNode: string) {
        const visitedNodes: string[] = [];
        const relationsList = this.relationsList;

        (function dfs(node: string) {
            if (!node) return null;
            visitedNodes.push(node); // Add the node to the visited nodes list

            relationsList[node].forEach(neighbor => {
                if (!visitedNodes.includes(neighbor)) {
                    return dfs(neighbor);
                }
            });
        })(startNode);

        return visitedNodes;
    }

    depthFirstSearchIterative(startNode: string) {
        const stack: string[] = []
        const result: string[] = [];
        const visited: Record<string, boolean> = {};

        stack.push(startNode);
        visited[startNode] = true;

        while (stack.length) {
            let currentNode = stack.pop();
            result.push(currentNode!);

            this.relationsList[currentNode!].forEach(neighbor => {
                if (visited[neighbor]) return;

                visited[neighbor] = true;
                stack.push(neighbor);
            });
        }

        return result;
    }

    breadthFirstSearch(startNode: string) {
        const queue: string[] = [startNode];
        const result: string[] = [];
        const visited: Record<string, boolean> = {};
        let current: string;


        visited[startNode] = true;

        while(queue.length) {
            let current = queue.shift();
            result.push(current!);

            this.relationsList[current!].forEach(neighbor => {
                if (visited[neighbor]) return;

                visited[neighbor] = true;
                queue.push(neighbor);
            });
        }

        return result;
    }
}


if (import.meta.main) {
    const graph = new Graph();
    graph.addNode("A");
    graph.addNode("B");
    graph.addNode("C");
    graph.addNode("D");
    graph.addNode("E");
    graph.addNode("F");

    graph.addConnection("A", "B");
    graph.addConnection("A", "C");
    graph.addConnection("B", "D");
    graph.addConnection("C", "E");
    graph.addConnection("D", "E");
    graph.addConnection("D", "F");
    graph.addConnection("E", "F");

    console.log(graph.depthFirstSearch("A")); // ["A", "B", "D", "E", "C", "F"]

    console.log(graph.depthFirstSearchIterative("A")); // ["A", "C", "E", "F", "D", "B"]

    console.log(graph.breadthFirstSearch("A")); // ["A", "B", "C", "D", "E", "F"]
}