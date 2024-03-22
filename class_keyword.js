class IdolModel{
    name;
    year;

    constructor(name,year){
        this.name = name;
        this.year = year;
    }

    sayName(){
        return `안녕하세요 저는 ${this.name}입니다.`
    }
}

const yusin = new IdolModel('안유진',2003);
console.log(yusin);
const gaeul = new IdolModel('가을',2002);
console.log(gaeul);
const ray = new IdolModel('레이',2004);
console.log(ray);
const wonYoung = new IdolModel('원영',2004);
console.log(wonYoung);

console.log(yusin.name);
console.log(yusin.year);
console.log(yusin.sayName());
console.log(wonYoung.sayName());