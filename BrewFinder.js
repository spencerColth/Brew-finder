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
//============== Search button feature ================
cityButton.addEventListener('click', function (){
    const searchText = input.value;
    // AJAX call to Open Brewery DB 
    $.get(`https://api.openbrewerydb.org/breweries?by_city=${searchText}`, (data) => {
        console.log(data)
        //clear search results with new input
        $('.center-feed').empty();
        // loop to create a card for each brewery in the search results
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
//=================== Favorites Button =======================
            let favorite = document.createElement("button");
                favorite.innerHTML = "Favorite";
                favorite.className = "buttons";
            favorite.addEventListener('click', function(){
                // clicking favorite adds brewCard to favorites panel, adds hit-list class, removes excess buttons and result-card class
                favorites.append(brewCard);
                brewCard.className = "hit-list";
                brewCard.classList.remove('result-card');
                brewList.remove();
                favorite.remove();
                // create remove button element
            let remove = document.createElement("button")
                remove.className = "buttons";
                remove.innerHTML = "Remove";
                //clicking remove deletes the brewCard
            remove.addEventListener('click', function (){
                brewCard.remove();
})
                brewCard.append(remove);
});
//==================== Hit - List Button ==============
            let brewList = document.createElement("button");
                brewList.innerHTML = "Hit List";
                brewList.className = "buttons";
                // clicking brewList adds brewCard to hit-list panel, adds hit-list class, removes excess buttons and result-card class. Also adds new remove button to delete from the hit list.
            brewList.addEventListener('click', function(){
                hitList.append(brewCard);
                brewCard.className = "hit-list";
                brewCard.classList.remove('result-card');
                brewList.remove();
            let removeHit = document.createElement("button")
                removeHit.className = "buttons";
                removeHit.innerHTML = "Remove";
                brewCard.append(removeHit);
                //removes new remove button when added to the favorites list from the hit list
                favorite.addEventListener('click', function (){
                    removeHit.remove();
})
//================= Remove without favoriting ===============
                //removes from hit-list without adding to favorites
                removeHit.addEventListener('click', function (){
                    brewCard.remove();
});
});       
//============== assign values to blocks ================    
        //fills in text for each brewery and appends search results to the center feed             
        a.innerHTML = data[i].name;
        b.innerHTML = data[i].brewery_type;
        c.innerHTML = data[i].street;
        d.innerText = data[i].phone;
        e.innerText = data[i].city;
        center.append(brewCard)
        brewCard.appendChild(favorite);
        brewCard.appendChild(brewList);
        }
    });
});
