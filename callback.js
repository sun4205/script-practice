const { reject } = require("async");


function wait(){
    setTimeout(()=>{
        console.log('end');
    },2000);
}

wait();

function wait2(){
    setTimeout(()=>{
        console.log('1번 콜백 끝');
        setTimeout(()=>{
            console.log('2번 콜백 끝');
            setTimeout(()=>{
                console.log('3번 콜백 끝');
            },2000)
        },2000)
    },2000)
}

wait2();

const timeoutPromis = new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        resolve('완료')
    },2000)
})

timeoutPromis.then((res)=>{
    console.log(res);
})

const getPromise = (seconds)=>new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('완료');
    },seconds*1000)
})

getPromise(3)
.then((res)=>{
    console.log('first then');
    console.log(res);

    return getPromise(1);
}).then((res)=>{
    console.log('second then');
    console.log(res);

    return getPromise(4)
}).then((res)=>{
    console.log('Third then');
    console.log(res);

    return getPromise(4)
})