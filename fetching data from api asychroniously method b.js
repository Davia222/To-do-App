let x = "https://example.com";

async function fetching(){
    try{
        const response = await fetch (`${x}/data`);

        if(!response.ok){
            throw new Error ("Network Error")
        }
        const data = await response.json();
        console.log(data)
    } 

    
    catch (error){
        console.log('there is an-issue')
    }
}