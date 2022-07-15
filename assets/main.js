const API = "https://videogames-news2.p.rapidapi.com/videogames_news/recent";

const content = null || document.getElementById("content");

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fc100cf27amshaecdaec649f8d88p156495jsnb71c1bfb9df2',
		'X-RapidAPI-Host': 'videogames-news2.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

//invoca que se invoca a si misma, permiten automaticamente llamarlas
(async() => { //arrow function para que se ejecute de forma asincrona
    try {
        const news = await fetchData(API);
        //template literal para que se pueda usar el json 
        let view = 
        `
       

          <ul>
            ${news.map(item => `<li>${item.title}</li>`).join('')}
          </ul>
        `;
        
        
      content.innerHTML = view; //muestra el contenido en el html   
    } catch (error) {
        console.log(error); //en caso de que no se pueda obtener el json se muestra el error en consola 
        alert('Error'); //en caso de que no se pueda obtener el json se muestra una alerta en pantalla 
    }
})(); //sentencia que ejecuta nuestra función de forma asincrona  
