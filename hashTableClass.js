class HashTable {
    constructor(size=53) {
        this.keyMap = new Array(size);
    }
    // Hash Function:
    _hash(key) {
        let total = 0;
        let weird_prime  = 31;
        for(let i =0;i<Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * weird_prime + value) % this.keyMap.length;
        }
        return total;
    }
    // Set The Key and Value pair:
    set(key, value) {
        // Hash the and declare variable as index:
        let index = this._hash(key);
        // Check if hashed value already exists, 
        // Check the array/bucket of the index hashed above:
        if(!this.keyMap[index]) {
            // if nothing is there, then we create an empty array:
            this.keyMap[index] = [];
        }
        // key and value will still be pushed. Only the above if statement determines whether a new array needs to be created or not.
        this.keyMap[index].push([key, value]);
    }
    // Get the key from the hashtable:
    get(key) {
        // Hash the and declare variable as index:
        let index = this._hash(key);
        // if something is there then loop through that element within the array and find possible value:
        if(this.keyMap[index]){
            for(let i=0;i<this.keyMap[index].length; i++) {
                // check if any items match in the elements sub arrays, then specify the key within the subarray:
                if(this.keyMap[index][i][0] === key) { // If found then return the value from hash table:
                    return this.keyMap[index][i][1];
                }
            }
        }
        // If nothing is there then return undefined;
        return undefined;
    }
}

// Create a hashtable instance and set a key value pair:
let hashtable = new HashTable();
let testKey = "message1";
let testValue = "Hello!";
hashtable.set(testKey, testValue);
hashtable.set("message2", "Test1");
hashtable.set("message3", "Test2");
console.log(hashtable.get("message2")); // =>     "test1"
console.log(hashtable.get("message1")); // =>     "Hello!"