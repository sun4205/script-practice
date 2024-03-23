const yusin = {
    name : '안유진',
    year : 2003,


}

console.log(Object.getOwnPropertyDescriptor(yusin,'name'));

const yusin2 = {
    name : '안유진',
    year : 2003,

    get age(){
        return new Date().getFullYear()-this.year; 
    },

    set age(age){
        this.year = new Date().getFullYear()-age;
    }
}

console.log(yusin2);
console.log(yusin2.age);

yusin2.age = 32;
console.log(yusin2.age);
console.log(yusin2.year); 

console.log(Object.getOwnPropertyDescriptor(yusin2, 'age'));

Object.defineProperty(yusin2, 'height', {
    value :172,
    writable : true,
    enumerable : true,
    configurable : true,

}

)

console.log(yusin);
console.log(Object.getOwnPropertyDescriptor(yusin2,'height'));

yusin2.height = 180;
console.log(yusin2);

Object.defineProperty(yusin2, 'height', {
    writable : false,
})

console.log(Object.getOwnPropertyDescriptor(yusin2, 'height'));

yusin2.height = 172;
console.log(yusin2);

console.log(Object.keys(yusin2));

for(let key in yusin2){
    console.log(key);
}

Object.defineProperty(yusin2, 'name',{
    enumerable:false,
});

console.log(Object.getOwnPropertyDescriptor(yusin2,'name'));

console.log(Object.keys(yusin2));

for(let key in yusin2){
    console.log(key)
}


console.log(yusin2);
console.log(yusin2.name);

Object.defineProperty(yusin2,'height',{
    writable:true,
    configurable: false,
})

console.log(Object.getOwnPropertyDescriptor(yusin2, 'height'));

Object.defineProperty(yusin2,'height',{
    value : 172,
})

console.log(Object.getOwnPropertyDescriptor(yusin2, 'height'));

Object.defineProperty(yusin2,'height',{
    writable : false,
})

console.log(Object.getOwnPropertyDescriptor(yusin2, 'height'));
