document.addEventListener("DOMContentLoaded", function(){
  addWavyUnderline(findAllUnorderedListElements()), displayProjects();
});

function addWavyUnderline(elements) {
  console.log("ADDWavyUnderLine---->",elements.length);
  for (let i = 0; i < elements.length; i++) {
     elements[i].style.textDecoration = "underline";
     elements[i].style.textDecorationStyle = "wavy";
  }
}

function displayProjects() {
  arreglo = [];
  arreglo = prepareProjects("firstProject","secondProject","thirdProject");
  document.getElementById("projects").innerHTML = arreglo;

}

function findAllUnorderedListElements() {
  const contenedor = document.querySelector("#social");
  const encontrados = contenedor.querySelectorAll("a[class = 'social-media-links']");
  for (let i = 0; i < encontrados.length; i++) {
    console.log(encontrados[i]);
  }
  return(encontrados);
}

function prepareProjects(firstProject,secondProject,thirdProject) {
  let lista = [];
  let cadena = "";
  let resultado = "";
  lista[0] = firstProject;
  lista[1] = secondProject;
  lista[2] = thirdProject;

  for (let i=0; i<= 2; i++) { console.log("Proyectos:", lista[i]);
  if (lista[i].length > 20) { console.log("Este es de mas de 20",lista[i]);
           cadena = `<p>${lista[i]}</p>`;}
    else   cadena = `<span>${lista[i]}</span>`;
  resultado = resultado.concat(`${cadena}<br>`);
  }
 return(resultado);
}

exports.findAllUnorderedListElements = findAllUnorderedListElements;
exports.prepareProjects = prepareProjects;

//$(document).ready(function () { listcoming(); }); function listcoming() {}









