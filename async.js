async function fetchdata() {
    try {
        let result = await fetch('https://jsonplaceholder.typicode.com/todos');
        let data = await result.json();
        console.log(data);
    }
    catch(error) {
        console.log(error.message);
    }
    
}
fetchdata();