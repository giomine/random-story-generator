/*jshint esversion: 6 */

let stories = [
    {
     intro: "once upon a time, there was a baby elephant",
     two: "he ran straight up a tree",
     three: "then the little people came!",
     ending: "but he said GO AWAY!!!"
    },
    {
     intro: "i shall tell you the story of the angry bird",
     two: "he woke up slowly in his bed one morning",
     three: "his friends wanted to join him",
     ending: "and they all went to the cinema together"
    },
    {
     intro: "did I tell you about the old man on Marchmont Street?",
     two: "he woke up hostage on a speeding jet plane!!",
     three: "a genie granted him three wishes",
     ending: "he was too embarrassed and stayed home forever alone"
    },
    {
     intro: "tell me again about that silly barista!",
     two: "every day he went to his local park to watch the dogs play",
     three: "he wished for a good breakfast, a holiday, and then..",
     ending: "and then he pooped himself"
    },
    {
     intro: "do you remember Mr. Doodoo?",
     two: "he won the chess tournament that day",
     three: "a dog approached him and peed on his leg",
     ending: "he peed his pants and never lived it down"
    },
    {
     intro: "you know what my neighbour did yesterday?",
     two: "he drank too much coffee as usual",
     three: "his girlfriend appeared",
     ending: "he forgot how to speak, and lived forever mute"
    },
    {
     intro: "let's not forget what happened to the poop head!",
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
      var quack = new Audio("quack.mp3");
      quack.play();
      partOne();
      partTwo();
      partThree();
      partFour();
    });
