let xStar = [], yStar = []
let xPlanet = [], yPlanet = []

function setup() {
	createCanvas(800,700); // make an HTML canvas element width x height pixels
	for (var i = 0; i < 60; i++) {
		append(xStar, random(800));
		append(yStar, random(700));
		append(xPlanet, random(800));
		append(yPlanet, random(700));
	}
}

function draw() {
	background('black');
	noStroke();

	fill('gold');
	quad(100, 350, 400, 650, 700, 350, 400, 50);
	square(175, 125, 450);

	fill('hsba(163, 100%, 90%, 0.6)');
	ellipse(400,350,450,450);
	fill('hsba(163, 100%, 70%, 0.6)');
	arc(400,350,450,450,1.5*PI,(hour()/6*PI-HALF_PI));

	fill('hsba(194, 100%, 90%, 0.6)');
	ellipse(400,350,350,350);
	fill('hsba(194, 100%, 60%, 0.6)');
	arc(400,350,350,350,1.5*PI,(minute()/30*PI-HALF_PI));
	console.log(minute());

	fill('gold')
    for (let i = 0; i < minute(); i++) {
      ellipse(xStar[i], yStar[i], 10)
	}
	
	fill('grey')
    for (let i = 0; i < hour(); i++) {
      ellipse(xPlanet[i], yPlanet[i], 20)
    }


	fill('hsba(260, 100%, 90%, 0.6)');
	ellipse(400,350,250,250);
	fill('hsba(260, 100%, 50%, 0.6)');
	arc(400,350,250,250,1.5*PI,(second()/30*PI-HALF_PI));

}

