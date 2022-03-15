// get slider items ==>:  Array.form[ ES6 feature]

let sliderItems = Array.from(document.querySelectorAll('.slider-container img'));
//console.log(slideritems)

// get number of slides
let slidesCount = sliderItems.length;

// set current slide
let currentSlide = 1;

// slide number Element
let slideNumberElement = document.getElementById('slide-number');

// previous & next click butten
let nextButten = document.getElementById('next'),
    prevButten = document.getElementById('prev');

    // next & previous functions 

    function next(){   //   next button
        if(nextButten.classList.contains('disabled')){
           // do no thing
            return false;
        }else{
            currentSlide++;
            theChek();
        }
    };

    function prev(){ // previous button
        if(prevButten.classList.contains('disabled')){
            // do no thing
             return false;
         }else{
             currentSlide--;
             theChek();
         }
    };
// previous & next click butten
    nextButten.addEventListener('click', next );
    prevButten.addEventListener('click', prev );

// ======== creating the main ul 
let paginationElement = document.createElement('ul');
// ======== set id for this ul;
paginationElement.setAttribute('id','pagination-ul');

//===== creat list item based on slides count ==
for( var i = 1; i <= slidesCount; i++){
    //== creat li list
    let paginationItem = document.createElement('li');
    //=== set custom Attribute 
     paginationItem.setAttribute('data-index', i);
     // === set item content 
     paginationItem.appendChild(document.createTextNode(i));
     //==== set item list to the Ul 
     paginationElement.appendChild(paginationItem);

}

// ==== add the ul list to the page 

window.document.getElementById('indicators').appendChild(paginationElement);

// ==== get the ul by id 

let pagUl = document.getElementById('pagination-ul');

// get ul items ==>:  Array.form[ ES6 feature]
let ulNumbr = Array.from(document.querySelectorAll('#pagination-ul li'));

// click on the bullats
for( var x = 0; x < ulNumbr.length; x++){
    ulNumbr[x].onclick = function(){
        currentSlide = parseInt(this.getAttribute('data-index'));
        theChek();
    }
}

// == the checker function
function theChek(){
    // set the slide number
    slideNumberElement.textContent = ' Slide # ' + (currentSlide) + ' of ' + (slidesCount);  
    // == remove active class function 
    removeActiv();
    // set the activ class to the current slide
    sliderItems[currentSlide-1].classList.add('active');

    // set the active class to the list 
    pagUl.children[currentSlide-1].classList.add('active');

    // check about the cuurnt slid 
    if(currentSlide == 1){
        // add class disabled to the prevbutten
        prevButten.classList.add('disabled')
    }else{
        // remove class disabled to the prevbutten
        prevButten.classList.remove('disabled')
    }
    
     // check about the cuurnt slid 
     if(currentSlide == 5){
        // add class disabled to the nextvbutten
        nextButten.classList.add('disabled')
    }else{
        // remove class disabled to the nextButten
        nextButten.classList.remove('disabled')
    }
}

//== trigger the checker function 
theChek();

// == remove all active class from imgs
function removeActiv(){
    //loop through images
    sliderItems.forEach(function(img){
        img.classList.remove('active');
    })
    //loop through bullets
    ulNumbr.forEach(function(bullet){
        bullet.classList.remove('active');
    })

};



    