function IdolModel(name,year){
    this.name = name;
    this.year = year;

    this.dance = function(){
        return `${this.name}이 춤을 춥니다`
    }
}

const yujin = new IdolModel('안유진',2003);
console.log(yujin);

console.log(yujin.dance()); 

const yujin2 = IdolModel('안유진',2003)
console.log(yujin2)
console.log(global.name);