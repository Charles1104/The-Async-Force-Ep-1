/*jshint esversion: 6 */

function reqListener1() {
  const requestData = JSON.parse(this.responseText);
  const contentEl1 = document.querySelector('#person4Name');
  contentEl1.innerHTML= requestData.name;

  const oReq2 = new XMLHttpRequest();
  oReq2.addEventListener('load', reqListener2);
  oReq2.open('GET','http://swapi.co/api/planets/1/');
  oReq2.send();

}

const oReq1 = new XMLHttpRequest();

oReq1.addEventListener('load', reqListener1);
oReq1.open('GET','http://swapi.co/api/people/4/');
oReq1.send();

function reqListener2() {
  const requestData = JSON.parse(this.responseText);
  const contentEl2 = document.querySelector('#person4HomeWorld');
  contentEl2.innerHTML = requestData.name;
}

function reqListener3() {
  const requestData = JSON.parse(this.responseText);
  const contentEl3 = document.querySelector('#person14Name');
  contentEl3.innerHTML = requestData.name;

  const oReq4 = new XMLHttpRequest();
  oReq4.addEventListener('load', reqListener4);
  oReq4.open('GET','http://swapi.co/api/species/1/');
  oReq4.send();
}

const oReq3 = new XMLHttpRequest();

oReq3.addEventListener('load', reqListener3);
oReq3.open('GET','http://swapi.co/api/people/14/');
oReq3.send();


function reqListener4() {
  const requestData = JSON.parse(this.responseText);
  const contentEl4 = document.querySelector('#person14Species');
  contentEl4.innerHTML = requestData.name;
}

let li;

function reqListener5() {
  const requestData = JSON.parse(this.responseText);
  const lengthr = requestData.results.length;

  for(let i = 0; i < lengthr; i++){
    const ul = document.querySelector('#filmList');
    li = document.createElement("li");

    li.innerHTML = requestData.results[i].title;
    ul.appendChild(li);

    let lengthp = requestData.results[i].planets.length;

    console.log(requestData.results);

    for(let j = 0; j < lengthp; j++){

      ul2 = document.createElement("ul");
      li.appendChild(ul2);

      console.log(`${requestData.results[i].planets[j]}`);
      const oReq6 = new XMLHttpRequest();
      oReq6.addEventListener('load', reqListener6);
      oReq6.open('GET',`${requestData.results[i].planets[j]}`,false);
      oReq6.send();
    }
  }

}

const oReq5 = new XMLHttpRequest();

oReq5.addEventListener('load', reqListener5);
oReq5.open('GET','http://swapi.co/api/films/');
oReq5.send();


function reqListener6() {
  const requestData = JSON.parse(this.responseText);
  const li2 = document.createElement("li");
  li2.innerHTML = requestData.name;
  ul2.appendChild(li2);
}






