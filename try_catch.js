function runner(){
    try{
        console.log('hello');
        throw new error('큰 문제가 생겼습니다');
        console.log('코드팩토리');
    }catch(e){
        console.log('----catch----');
        console.log(e);
    }finally{
        console.log('---finally---');
    }
}

runner();