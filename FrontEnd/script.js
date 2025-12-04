async function getWorks () {
const url = "http://localhost:5678/api/"
try {
    const response = await fetch(url)
    if(!response.ok){
        throw new Error (`Response status: ${response.statut}`);
    }
   
    const json = await response.json();
    console.log(json)
     for(i=0;i < json.length; i++){
       setFigure(json[i]);


    }
} catch (error){
    console.error(error.message);
}

}

getWorks();

function setFigure (data){
const figure = document.createElement(figure);
figure.innerHTML = 
				`<img src= ${data.imageUrl} alt= ${data.title}>
				<figcaption>${data.title}</figcaption>`
			
document.querySelector(".gallery").append(figure);
}