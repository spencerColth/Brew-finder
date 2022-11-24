//================= result card =====================
let allCards = document.querySelector('.result-card')
//================ boxes/menus =======================
let results = document.querySelector('#results');
let center = document.querySelector('.center-feed');
let favorites = document.querySelector('.inner-left');
let hitList = document.querySelector('.inner-right');
//=============== search buttons ======================
let cityButton = document.querySelector('#city');
let stateButton = document.querySelector('#state');
let zipButton = document.querySelector('#zip-code');
const input = document.querySelector("input[name='search']");
let resetButton = document.querySelector('#reset');


// resetButton.addEventListener('click', function(){
//     $('.center-feed').empty();
// });




cityButton.addEventListener('click', function (){
    const searchText = input.value;
    $.get(`https://api.openbrewerydb.org/breweries?by_city=${searchText}`, (data) => {
        console.log(data)
        $('.center-feed').empty();
        for(let i = 0; i < data.length; i++){
            let brewCard = document.createElement('card');
            brewCard.className = 'result-card';

//=============== Result card structure ==============
            let a = document.createElement("a");
                a.setAttribute('id',"a");
                brewCard.appendChild(a);
            let b = document.createElement("b");
                b.setAttribute('id',"b");
                brewCard.appendChild(b);
            let c = document.createElement("c");
                c.setAttribute('id',"c");
                brewCard.appendChild(c);
            let d = document.createElement("d"); 
                d.setAttribute('id',"d");
                brewCard.appendChild(d);
            let e = document.createElement("e");
                e.setAttribute('id',"e")
                brewCard.appendChild(e);
            let favorite = document.createElement("button");
            favorite.innerHTML = "Favorite";
            favorite.className = "buttons";
            favorite.addEventListener('click', function(){
                favorites.append(brewCard);
                brewCard.className = "hit-list";
                brewCard.classList.remove('result-card');
                brewList.remove();
                favorite.remove();
            });
            let brewList = document.createElement("button");
            brewList.innerHTML = "Hit List";
            brewList.className = "buttons";
            brewList.addEventListener('click', function(){
                hitList.append(brewCard);
                brewCard.className = "hit-list";
                brewCard.classList.remove('result-card');
                brewList.remove();
            });
            
//============== assign values to blocks ================                 
        a.innerHTML = data[i].name;
        b.innerHTML = data[i].brewery_type;
        c.innerHTML = data[i].street;
        d.innerText = data[i].phone;
        e.innerText = data[i].city;
        // city.innerText = data[i].city;
        center.append(brewCard)
        // center.append(results)
        brewCard.appendChild(favorite);
        brewCard.appendChild(brewList);
        // remove(allResults);
        }
    });
});

favorites.addEventListener('click', function(){

})
