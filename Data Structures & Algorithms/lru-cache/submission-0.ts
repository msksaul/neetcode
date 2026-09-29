class CacheNode {
    key: number;
    value: number;
    prev: CacheNode | null;
    next: CacheNode | null;
    constructor(key: number, value: number) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    private capacity: number;
    private map: Map<number, CacheNode>;
    private head: CacheNode;
    private tail: CacheNode;
    constructor(capacity: number) {
        this.capacity = capacity;
        this.map = new Map();
        this.head = new CacheNode(0, 0);
        this.tail = new CacheNode(0, 0);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }
    /**
     * @param {number} key
     * @return {number}
     */
    get(key: number): number {
        const node = this.map.get(key);
        if (!node) {
            return -1;
        }
        this.removeNodeFromList(node);
        this.placeAtTail(node);
        return node.value;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key: number, value: number): void {
        const oldNode = this.map.get(key);
        if (oldNode) {
            this.removeNodeFromList(oldNode);
        }
        const node = new CacheNode(key, value);
        this.map.set(key, node);
        this.placeAtTail(node);
        if (this.map.size > this.capacity) {
            const lru = this.pollAtHead();
            this.map.delete(lru.key);
        }
    }

    private removeNodeFromList(node: CacheNode): void {
        node.prev!.next = node.next;
        node.next!.prev = node.prev;
    }

    private placeAtTail(node: CacheNode): void {
        const prevNode = this.tail.prev!;
        prevNode.next = node;
        node.prev = prevNode;
        node.next = this.tail;
        this.tail.prev = node;
    }

    private pollAtHead(): CacheNode {
        const lru = this.head.next!;
        this.removeNodeFromList(lru);
        return lru;
    }
}
