let adviseSection = document.querySelector('adviseSection');

const fetchData = () =>{ 
    fetch("http://api.adviseslip.com/")
    .then(response = response.json())
    .then( data => {
        const {advise,id} = data.slip;
        code.innerHTML = id;
        main.innerHTML = advise;
        console.log(advise, id);
    }
    ).catch(error => {console.error(error)});
}