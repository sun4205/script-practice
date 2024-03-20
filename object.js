let yujin = {
    name : '안유진',
    group : '아이브',
    dance : function(){
        return `${this.name}이 춤을 춥니다`;
    }
}

console.log(yujin);
console.log(yujin.name);

const key = 'name';
console.log(yujin[key]);
console.log(yujin.dance());

const nameKey = 'name';
const nameValue = '안유진';

const groupKey = 'group';
const groupValue = '아이브';

const yujin2 = {
    [nameKey] : nameValue,
    [groupKey] : groupValue,
    dance : function(){
        return `${this.name}이 춤을 춥니다`
    }

}

console.log(yujin2);
console.log(yujin2.dance());

yujin2['group'] = '코드팩토리';
console.log(yujin2);
yujin2['englishName'] = 'An Yu Jin';
console.log(yujin2);

delete yujin2['englishName'];
console.log(yujin2);

const wonYong = {
    name :'장원영',
    group : '아이브'
}

console.log(wonYong);
wonYong['group'] = '코드팩토리';
console.log(wonYong);
console.log(Object.keys(wonYong));
console.log(Object.values(wonYong));

const name = '안유진';

const yujin3 = {
    name,
}
console.log(yujin3);