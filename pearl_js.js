const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('enter the users year of birth ', (year) => {
    if(typeof year !== "number"){
        console.log("invalid")
    }else{
        age = 2019-year;
        if(age <= 18){
            Console.log('minor')
        } 
        else if(18<=age<=36){
            console.log('youth')
        }
        else {
            console.log('elder')
        }
        rl.close()
    }

    }
)