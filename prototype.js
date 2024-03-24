const testObj = {};

console.log(testObj.__proto__);

function IdolModel(name,year){
    this.name = name;
    this.year = year;
}

console.log(IdolModel.prototype);
console.dir(IdolModel.prototype,{
    showHidden: true,
})

console.log(IdolModel.prototype.constructor===IdolModel);
console.log(IdolModel.prototype.constructor.prototype===IdolModel.prototype);
const yujin = new IdolModel('안유진',2003);

console.log(yujin.__proto__);
console.log(yujin.__proto__ === IdolModel.prototype);
console.log(IdolModel.__proto__===Function.prototype);
console.log(Function.prototype.__proto__===Object.prototype);