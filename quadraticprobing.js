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
    set(key,value){
        let index = this.hash(key)
        // let bucket = this.table[index]
        let i =1
        while(this.table[index]){
            index = (index+i*i)%this.size
            i++
        }
        this.table[index] = [key,value]
    }
    get(key){
        let index = this.hash(key)
        let i = 1;
        while(this.table[index][0] != key){
            index = (index+i*i)%this.size
            i++
        }
        return this.table[index][1]
    }
    remove(key){
        let index = this.hash(key)
        let i = 0;
        while(this.table[index][0] != key){
            index = (index+i*i)%this.size
            i++
        }
        delete this.table[index]
    }
    display(){
        for (let i = 0; i < this.table.length; i++) {
            if(this.table[i]){
                console.log(i,this.table[i]);
            }
            
        }
    }
}
let hash = new Hashtable(5)
hash.set("name","samad")
hash.set("anme","samad1")
hash.set("naem","samad2")
console.log( hash.get("naem"))
hash.remove("anme")
hash.display()