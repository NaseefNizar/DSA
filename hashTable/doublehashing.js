class Hashtable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }
    hash(key){
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i)    
        }
        return total % this.size
    }
    hash2(key){
        return 7 - (key.length % 7 )
    }
    set(key,value){
        let index1 = this.hash(key)
        let index2 = this.hash2(key)
        while(this.table[index1]){
            index1 = (index1+index2) % this.size
        }
        this.table[index1] = [key,value]
    }

    get(key){
        let index1 = this.hash(key)
        let index2 = this.hash2(key)
        while(this.table[index1]){
            index1 = (index1+index2) % this.size
        }
        return this.table[index1]
    }
    display(){
        for(let i=0;i<this.table.length ;i++){
            if(this.table[i]){
                console.log(i,this.table[i]);
            }
        }
    }
}

let hash = new Hashtable(5)
hash.set("name","samad")
hash.set("mane","samad1")
hash.set("name","samad2")
hash.display()