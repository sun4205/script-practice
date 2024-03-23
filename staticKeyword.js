/*class IdolModel{
    name;
    year;
    static groupName = '아이브';

    constructor(name,year){
        this.name = name;
        this.year = year;
        
    }
    static returnGroupName(){
        return '아이브';
    }
}

const yusin = new IdolModel('안유진',2003);
console.log(yusin);
console.log(IdolModel.groupName);
console.log(IdolModel.returnGroupName());*/

class IdolModel{
    name;
    year;

    constructor(name,year){
        this.name = name;
        this.year = year;
    }
     static fromObject(object){
        return new IdolModel(
            object.name,
            object.year,
        );
     }
     static fromList(list){
        return new IdolModel(
            list[0],
            list[1],
        )
     }
}
const yusin2 = IdolModel.fromObject({
    name : '안유진',
    year : 2003,
});
console.log(yusin2);

const wonYoung = IdolModel.fromList(
    [
        '장원영',
        2003,
    ]
)

console.log(wonYoung);