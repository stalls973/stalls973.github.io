$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();
createPlatform(0, canvas.height - 32, canvas.width, 32);
createPlatform(0, 0, 30, canvas.height);
createPlatform(canvas.width - 30, 0, 30, canvas.height);


    // TODO 2 - Create Platforms
createPlatform(1000, 600, 200, 20, "red");
createPlatform(870, 480, 120, 20, "orange");
createPlatform(650, 580, 100, 20, "yellow");
createPlatform(400, 450, 150, 20, "lightgreen");
createPlatform(650, 400, 150, 20, "lightblue");
createPlatform(550, 250, 250, 25, "hotpink");
createPlatform(250, 320, 150, 20, "purple");
createPlatform(920, 100, 200, 20, "red");
createPlatform(100, 100, 200, 20, "lightpurple");


    // TODO 3 - Create Collectables
createCollectable("database", 370, 450, 0.6, 0.6);
createCollectable("steve", 460, 450, 0.7, 0.7);
createCollectable("grace", 820, 250, 0.6, 0.6);



    
    // TODO 4 - Create Cannons
createCannon("left", 400, 2000);
createCannon("top", 500, 2500);
createCannon("right", 300, 2000);
   


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
