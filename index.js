/*jshint esversion: 6 */

let stories = [
    {
     intro: "Once upon a time, there was a baby elephant",
     two: "he ran straight up a tree",
     three: "he came home and found his painting ruined!",
     ending: "then he shouted GO AWAY!!!"
    },
    {
     intro: "I'll tell you the story of the angry bird",
     two: "he just finished his latest masterpiece",
     three: "his friends wanted to join him",
     ending: "and they all went to the cinema together"
    },
    {
     intro: "Did I tell you about the old man on Marchmont Street?",
     two: "he woke up hostage on a speeding jet plane!!",
     three: "a genie granted him three wishes",
     ending: "he was too embarrassed and stayed home forever alone"
    },
    {
     intro: "Do you remember that painter?",
     two: "every day he went to his local park to watch the dogs play",
     three: "he helped an old man cross the road",
     ending: "and then he stole his wallet!"
    },
    {
     intro: "Do you remember Mr. Eatmeat?",
     two: "he won the chess tournament that day",
     three: "then he realised it was all he had",
     ending: "he shrugged and whistled songs with the birds outside"
    },
    {
     intro: "You know what my neighbour did yesterday?",
     two: "he drank too much coffee as usual",
     three: "his girlfriend appeared",
     ending: "he forgot how to speak, and lived forever mute"
    },
    {
     intro: "Let's not forget what happened to my neighbour last week!",
     two: "he was just eating dinner in front of the tv",
     three: "his mother called on the phone",
     ending: "but they fell out and never spoke again"
    }];

    function partOne() {
      var randomNum = Math.floor((Math.random() * stories.length));
      var randomStory = stories[randomNum];
      var intro = randomStory.intro;
      var one = document.querySelector(".p-one");
      one.innerText = intro;
    }

    function partTwo() {
      var randomNum = Math.floor((Math.random() * stories.length));
      var randomStory = stories[randomNum];
      var two = randomStory.two;
      var partTwo = document.querySelector(".p-two");
      partTwo.innerText = two;
    }

    function partThree() {
      var randomNum = Math.floor((Math.random() * stories.length));
      var randomStory = stories[randomNum];
      var three = randomStory.three;
      var partThree = document.querySelector(".p-three");
      partThree.innerText = three;
    }

    function partFour() {
      var randomNum = Math.floor((Math.random() * stories.length));
      var randomStory = stories[randomNum];
      var four = randomStory.ending;
      var partFour = document.querySelector(".p-four");
      partFour.innerText = four;
    }

    var newStory = document.querySelector(".button");
    newStory.addEventListener("click", function() {
      // var quack = new Audio("quack.mp3");
      // quack.play();
      partOne();
      partTwo();
      partThree();
      partFour();
    });
