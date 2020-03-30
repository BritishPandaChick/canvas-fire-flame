window.onload = function(){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    //Make the canvas occupy the full page 
    var W = window.innerWidth, H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    var particles = [];

    //Lets create some particles now 
    var particle_count = 100;
    for (var i = 0; i < particle_count.length; i++) {
        particles.push(new particle_count());
    }

    function particle(){
        //speed, life, location, life, colors 
        //speed range = -2.5 to 2.5
        this.speed = {x: -2.5 + Math.random()*5, y : -2.5+Math.random()*5};
        //location = center of the screen
        this.location = {x: W/2, y: H/2};
        //radius range = 10-30 
        this.radius = 10 + Math.random()*20;
    }

    function draw(){
        //Painting the canvas black
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, W, H);

        for (var i = 0; i < particles.length; i++){
            var p = particles[i];
            ctx.beginPath();
            ctx.fillStyle = "white";
            
        }
    }
}