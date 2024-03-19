let iveMembers = ['a','b','c','d','e'];
console.log(iveMembers);
iveMembers.push(f);
console.log(iveMembers);
iveMembers.pop();
console.log(iveMembers);
iveMembers.shift();
console.log(iveMembers);
console.log(iveMembers.unshift(a));
console.log(iveMembers);
console.log(iveMembers.splice(0,3));
console.log(iveMembers);

let Members = ['a','b','c','d','e'];
console.log(Members.concat(f));
console.log(Members);
console.log(Members.slice(0,3));
console.log(Members);

let iveMembers2 = [...iveMembers];
console.log(iveMembers2);

console.log(iveMembers.join());
console.log(iveMembers.join('/'));
console.log(iveMembers.sort());
console.log(iveMembers.reverse());

let numbers = [1,9,7,5,3];
numbers.sort((a,b)=>{
    return a > b ? 1 : -1;
})

console.log(numbers);

console.log(iveMembers.map((x)=>`ive:${x}`));

console.log(iveMembers.map((x)=>{
    if(x==='a'){
        return `ive:${x}`
    }else{
        return x;
    }
}))

let number = [1,8,9,4,3];
console.log(number.filter((x)=>true));
console.log(number.filter((x)=>x % 2 ===0));
console.log(number.find((x)=>x % 2 ===0));
console.log(number.findIndex((x)=>x % 2 ===0));
console.log(number.reduce((p,n)=>p+n,0));