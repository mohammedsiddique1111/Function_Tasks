function func1(){
    console.log("hi");
}

// function func2(){
//     console.log("hello");
// }

function func2(){
    setTimeout(()=>{
        console.log("function 2 called after 2 seconds");
    },2000)
}

function func3(){
    console.log("hey");
}
func1();
func2();
func3();