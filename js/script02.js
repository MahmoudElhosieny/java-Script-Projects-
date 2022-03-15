document.querySelector(' .buttons_controls span').onclick = function () {

    let yourName = prompt(' What is your Name ? ');
    if (yourName == null || yourName == '') {

        document.querySelector(' .name span ').innerHTML = "Unknown";

    } else {
        document.querySelector(' .name span ').innerHTML = yourName;
    }
    document.querySelector(' .buttons_controls').remove();
};

// ============= variables ===============

let duraTion = 1000,
    blockContainer = document.querySelector(' .game_blocks '),
    bloCks = Array.from(blockContainer.children);
//blockRange = [ ...Array(bloCks.length).keys() ];

//====== note that you can use another idea 
let blockRange = Array.from(Array(bloCks.length).keys());

//    console.log(blockRange);
shuffle(blockRange);
//    console.log(blockRange);

// ========== now we need to add order attribute to the blocks 

bloCks.forEach((block, index) => {

    block.style.order = blockRange[index];

    block.addEventListener('click', function () {

        flibBlock(block);
    });
});

// flipblock function

function flibBlock(selectedBlock) {

    // adding class rotat to each block
    selectedBlock.classList.add('rotat');

    // collect all flipped card 
    let allFlippedBlocks = bloCks.filter(flippedBlock => flippedBlock.classList.contains('rotat'));

    // if there is two flipped blocks 
    if(allFlippedBlocks.length === 2){

        // console.log('2 blocks are flipped ');
        // stop the clicking function
        stopClicking();

        // check the matching between the imges
        checkElement(allFlippedBlocks[0], allFlippedBlocks[1]);
    }
};

// stop the clicking function 

function stopClicking(){
//adding class no-clicking
    blockContainer.classList.add('no-clicking');

    // remove class no-click
    setTimeout(() => {

        blockContainer.classList.remove('no-clicking');

    },duraTion);

};

// == check the matching 

function checkElement(frstBlock, secBlock){

    let triesElement = document.querySelector(' .tries span');

    if(frstBlock.dataset.technology === secBlock.dataset.technology){

        frstBlock.classList.remove('rotat');
        secBlock.classList.remove('rotat');

        frstBlock.classList.add('has-matched');
        secBlock.classList.add('has-matched');


    }else {
        triesElement.innerHTML = +(triesElement.innerHTML) + 1;

        setTimeout(() => {

        frstBlock.classList.remove('rotat');
        secBlock.classList.remove('rotat');

        },duraTion)

        

    }


}

// === to do the shufle function =====

function shuffle(array) {

    let current = array.length,
        temporary_N,
        roundom_N;

    while (current > 0) {
        // we get the roundom numb==
        roundom_N = Math.floor(Math.random() * current);

        // decrease current numb
        current--;

        temporary_N = array[current];

        array[current] = array[roundom_N];

        array[roundom_N] = temporary_N;
    }
    return array;
}