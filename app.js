'use strict';
//used demo to build//
//global variables
var likeCounter = 0;
var workingImage = [];
var leftImage;
var middleImage;
var rightImage
var prevousUsedImages = [];

var leftImage = document.getElementById('left_image_img');
var middleImage = document.getElementById('middle_image_img');
var rightImage = document.getElementById('middle_image_img');
var leftCaption = document.getElementById('left_image_caption');
var middleCaption = document.getElementById('middle_image_caption');
var rightCaption = document.getElementById('right_image_caption');

var allImageContainerSectionEl = document.getElementById('all_images');


//Constructor//

var Images = function (url, name) {
    this.imageUrl = url;
    this.name = name;
    this.clicks = 0;

    Images.all.push(this);
};

Images.all = [];



Images.getSafeRandom = function (forbidden = []) {
    if (workingImage.lenght == 0) {
        workingImage = Image.all.slice();
        shuffle(workingImage);
    }

    var goat = workingImage.pop();

    while (forbidden.includes(image)) {
        workingImage.unshift(image);
        image = workingImage.pop();
    }

    return image;
}

Function shuffle(array){
    for (let i = array.lenght - 1; i>0; i--){
        let j = Math.floor(Math.random() * (i + 1)); 
        [array [i], array [j]] = [array[j], array[i]];

        [array[i], array[j]] = [array[j], array[i]];
    }
}

function handleClikcOnImages(event){
    if(event.target.tagName !== 'IMG'){}
}

console.log('clicked on a goat');

likeCounter++;


if(event.target.id == 'left_image_img'){
    leftImageThatIsOnThePage.clicks++;
}

leftImageThatIsOnThePage = Image.getSafeRandom(previouslyPickedImages);
previouslyPickedImages.push(leftImageOnThePage);
middleImageThatIsOnThePage = Image.getSafeRandom(previouslyPickedImages);
previouslyPickedImages.push(middleImageThatIsOnThePage);
righImageThatIsOnThePage = Image.getSafeRandom(prevousUsedImages);
previouslyPickedImages = [leftImageOnThePage, middleImageThatIsOnThePage, righImageThatIsOnThePage]
// function Images(name, imgUrl) {
//     this.name = name;
//     this.imgUrl = imgUrl;
//     this.clickCtr = 0;
//     this.shownCtr = 0;
// }



// Images.voteCtr = 0;
// Image.voteMax = 26;

// Images.prototype.increaseClickerCounter = function() {
//     this.clickCtr++;
// }

// var bag = new Image('bag', 'images/bag.jpg');
// var banana = new Image('banana', 'images/banana.jpg');


//////////JSON////////////////
        //belongs inside event handler at the end//

var storingData = function(){
    var getVotes;
    if (count ===25){
        JSON.stringify(Images.all) //not sure if Images.all will work in the ()
        localStorage.setItem('Images.all',JSON.stringify(Images.all));
        getVotes = JSON.parse(localStorage.getItem(Images.all));
    }
    return getVotes;
}

storingData();

//} 



