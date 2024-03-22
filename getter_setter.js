class IdolModel{
    name;
    year;

    constructor(name,year){
        this.name = name;
        this.year = year;
    }
    get nameAndYear(){
        return `${this.name}-${this.year}`;
    }
    set name(name){
            this.name = name;
    }
}

const yusin = new IdolModel('안유진',2003);
console.log(yusin);
console.log(yusin.nameAndYear);

yusin.name = '장원영';
console.log(yusin);

class IdolModel2{
    #name;
    year;

    constructor(name,year){
        this.#name = name;
        this.year = year;
    }

    get name(){
        return this.#name;
    }

    set name(name){
        this.#name=name;
    }
}

const yusin2 = new IdolModel2('안유진',2003);
console.log(yusin2);
console.log(yusin2.name);
yusin2.name = '코드팩토리';
console.log(yusin2.name);
