function showNiceCompliment() {
    var niceCompliments = [
      "You have a great smile!",
      "You're really smart!",
      "You're an awesome friend!",
      "You can do amazing things!",
      "You're braver than you believe!",
      "You light up the room!",
      "Your kindness is contagious.",
      "You're cooler than a penguin eating ice cream!",
      "You're like a human sunshine with extra sparkles!"
    ];
  
    var randomIndex = Math.floor(Math.random() * niceCompliments.length);
    var randomCompliment = niceCompliments[randomIndex];
  
    document.getElementById("compliment").innerText = randomCompliment;
  }
  
  function showSuperDuper() {
    var roastyOnes = [
      "You stink! (Just kidding 😂)",
      "Your brain is 99% awesome and 1% pizza thoughts.",
      "Are you a magician? Because whenever you enter, everyone disappears! 😆",
      "You're the reason aliens don't visit us.",
      "You could win a staring contest with a potato!",
      "You're so weird, and that’s why we love you!",
      "Your coding is so good, even bugs run away!",
      "You’re so funny, mirrors laugh when you walk by.",
      "You're basically a walking glitch in the Matrix."
    ];
  
    var randomIndex = Math.floor(Math.random() * roastyOnes.length);
    var randomRoast = roastyOnes[randomIndex];
  
    document.getElementById("compliment").innerText = randomRoast;
  }
  
  function showOutstanding() {
    var outstandingOnes = [
      "You’re the kind of person who gets lost in a one-way street.",
      "If there were a world championship for talking nonsense, you’d be the coach.",
      "You're the human equivalent of a typo.",
      "You put the 'pro' in procrastination.",
      "You have a PhD in making things awkward.",
      "You're the reason 'no one' was invented.",
      "You’ve got the brain of a genius and the social skills of a potato.",
      "If you were any more extra, you'd be an entire buffet.",
      "You're so good at doing absolutely nothing, it’s an art form!"
    ];
  
    var randomIndex = Math.floor(Math.random() * outstandingOnes.length);
    var randomRoast = outstandingOnes[randomIndex];
  
    document.getElementById("compliment").innerText = randomRoast;
  }
  