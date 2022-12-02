// Sphero Bolt
// Go in a square

// November 30th, 2022
// By TomR.me & GHott.me


let speed = 65; // speed (0-255)
let time = 1; // time to go at the speed in seconds
let loop = 0;

async function startProgram() {
	for (let i = 0; i < 5; i++) {
		setMatrixCharacter(i.toString(), { r: 255, g: 255, b: 255 });
		
		let degrees = i * 90;
		if (degrees >= 360) {
			degrees = 0;
		}
		
		let toSpeak = "I am going to face " + degrees.toString() + " degrees, watch out!";
		await speak(toSpeak, true);

		
		// if last step, face forwards again
		if (i == 4) {
			await setHeading(0);
			break;
		}
		
		
		await setHeading(degrees); // face the right way
		setSpeed(speed); // zoom for a bit
		await delay(time); // zoom for X seconds
		await stopRoll(); // stop!
		
		//await delay(time);
		
		//await delay(time);
				
		await delay(time);
	}
	
	exitProgram();
}
