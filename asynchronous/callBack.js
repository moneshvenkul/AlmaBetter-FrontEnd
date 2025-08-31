function getData() {
    let result = 5;
    fetch('https://jsonplaceholder.typicode.com/todos/1') //10 seconds
        .then(response => response.json())
        .then(data => {
            result = data;
            console.log("Data fetched:", result);
        })
        .catch(error => console.error('Error fetching data:', error));
    return result; //undefined
}   

console.log(getData());