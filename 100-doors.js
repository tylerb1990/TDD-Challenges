/*
| =========================================================================================
| 100 Doors Challenge
| =========================================================================================
| 
| Challenge description:
| 
| There are 100 doors in a row that are all closed. You make 100 passes through the doors. 
| With each pass you toggle the doors state. On each pass you visit the Nth door. That 
| is on the first pass you visit every door. On the second pass you visit every 2nd
| door. On the third pass you visit every 3rd door and so on until you complete
| the 100th pass.
|
*/

let doors = [];
let queue = '';

// Loop and create doors
for (let i = 0; i < 100; i++) {
    
    // Create door
    let door = {
        id: i + 1,
        open: false
    }

    // Add to array
    doors.push(door);
}

// Loop 100 times
for (let i = 1; i <= 100; i++) {
    // Loop through doors
    doors.forEach( (door) => {
        // Check if door should be opened
        if ((door.id % i) === 0) {
            // Toggle state of door
            door.open = !door.open
        }
    });
}

// Print door status
doors.forEach(door => {
    queue += door.open ? '@' : '#';
});
console.log(queue);