let x = "https://www.google.com";

fetch (`${x}/data`).then(response =>{
    if(!response.ok){
        throw new Error ("network error")
    }
    return response.json();
})
.then(data =>{
    console.log(data);
}).catch(error =>{
    console.log(error)
})