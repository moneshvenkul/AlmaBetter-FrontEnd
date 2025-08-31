async function getData() {
    try {
        const response =  await fetch('https://jsonplaceholder.typicode.com/todos/1'); //10 seconds
        const data = await response.json();
        console.log("Data fetched:", data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

getData();