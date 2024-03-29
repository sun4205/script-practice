

const getPromise = (seconds) =>new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('완료');
    },seconds * 2000 )
})

async function runner(){
    try{
        const result = await getPromise(1);
    console.log(result);
    const  result1 = await getPromise(2);
    console.log(result1);
    const result2 = await getPromise(1);
    console.log(result2);

    }catch(e){
        console.log(e); 
    }finally{
        console.log('finally');
    }
    
}

runner();
console.log('end'); //await를 했을때 thread가 막히지 않는다
