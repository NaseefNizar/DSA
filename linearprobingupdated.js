class Hashtable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }
  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }
  // put(key,value){
  //     let index = this.hash(key)
  //     let bucket = this.table[index]
  //     if(!bucket){
  //         this.table[index] = [key,value]
  //     }else{
  //         while(this.table[index]){

  //             index = (index+1)%this.size
  //     }
  //     this.table[index] = [key,value]
  // }
  // }

  put(key, value) {
    let index = this.hash(key);
    while (this.table[index] !== undefined) {
      if (this.table[index][0] === key) {
        break;
      }
      index = (index + 1) % this.size;
    }
    const tuple = [key, value];
    this.table[index] = tuple;
  }

  get(key) {
    let index = this.hash(key);
    while (this.table[index]) {
      if (this.table[index][0] === key) {
        return this.table[index][1];
      }
      index = (index + 1) % this.size;
    }
    return "not found";
  }

  remove(key) {
    let index = this.hash(key);
    while (this.table[index][0] != key) {
      index = (index + 1) % this.size;
    }
    if (this.table[index][0] === key) {
      this.table[index] = undefined;
    } else {
      console.log("undefined");
    }
  }

  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }

  getSize() {
    return this.size;
  }
}

let hash = new Hashtable(10);
hash.put("name", "samad");
hash.put("nmea", "sdbf");
hash.put("mane", "samad1");
hash.put("eanm", "sdbf1");
hash.put("naem", "samad3");
hash.put("naem", "samad4");
hash.put("role", "sankar");
hash.put("next", "off");
// hash.put("next","off")

// hash.remove("nmea")
console.log(hash.get("nex"));

hash.display();
