class HashTable {
    private table: any = {};

    constructor(size: number) {
        this.table = new Array(size);
    }

    private hash(key: string): number {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.table.length;
    }

    set(key: string, value: any): void {
        const index = this.hash(key);
        if (!this.table[index]) {
            this.table[index] = [];
        }
        this.table[index].push([key, value]);
    }

    get(key: string): any {
        const index = this.hash(key);
        if (!this.table[index]) {
            return null;
        }

        for (let i = 0; i < this.table[index].length; i++) {
            if (this.table[index][i][0] === key) {
                return this.table[index][i][1];
            }
        }

        return null;
    }

    remove(key: string): void {
        const index = this.hash(key);
        if (!this.table[index]) {
            return;
        }
        this.table[index] = this.table[index].filter((item: any) => item[0] !== key);
    }

    keys(): string[] {
        let keys: string[] = [];
        keys = this.table.map((item: any) => item.map((item: any) => item[0])).flat();
        return keys;
    }


    values(): Set<any> {
        let values: Set<any> = new Set();
        this.table.forEach((item: any) => item.forEach((item: any) => values.add(item[1])));
        return values;
    }

    print(): void {
        console.log(this.table);
    }
}

if (import.meta.main) {
    const hashTable = new HashTable(10);
    hashTable.set("maroon", "#800000");
    hashTable.set("yellow", "#FFFF00");
    hashTable.set("olive", "#808000");
    hashTable.set("salmon", "#FA8072");
    hashTable.set("lightcoral", "#F08080");
    hashTable.set("mediumvioletred", "#C71585");

    hashTable.print();

    console.log(hashTable.get("salmon"));
    console.log(hashTable.get("lightcoral"));
    console.log(hashTable.get("mediumvioletred"));

    hashTable.remove("salmon");
    console.log(hashTable.get("salmon"));

    console.log(hashTable.keys());
    console.log(hashTable.values());

}