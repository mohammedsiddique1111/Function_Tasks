function outerfunction(){
    let count =0;
    function innerfunction(){
        count++;
        console.log(count);
    }
    return innerfunction;
    }
    let count = outerfunction();
    count();
    count();
    count();
