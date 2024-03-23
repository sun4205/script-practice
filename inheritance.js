class IdolModel{
    name;
    year;

    constructor(name,year){
        this.name = name;
        this.year = year;
    }
}

class FemaleIdolModel extends IdolModel{
    dance(){
        return '여자아이돌이 춤을 춥니다.';
    }
}

class MaleIdolModel extends IdolModel{
    sing(){
        return '남자아이돌이 춤을 춥니다';
    }
}

const yusin = new FemaleIdolModel('안유진',2003);
console.log(yusin);
const jiMin = new MaleIdolModel('지민',1995);
console.log(jiMin);

console.log(yusin.dance());
console.log(jiMin.sing());

const cf = new IdolModel('코드팩토리',1992);
console.log(cf);

console.log(yusin instanceof IdolModel);