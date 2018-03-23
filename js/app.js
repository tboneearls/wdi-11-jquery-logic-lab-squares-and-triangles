// Run a function that generates 64 squares that alternate colors:

// Generate 64 divs
// Give each div a class that will provide size and color
// Give each alternating div a different class somehow
// Constrain the number of squares on each row by 
// putting them all in a container of fixed width.
const createCheckerboard = () => {
	for (let i = 1; i <= 64; i++) {
		// create div, assign unique ids to them, append to the body
		$("<div>").attr("id", "square-" + i).appendTo($(".square-container"))
		// assign condition to assign every other one the same class
		let rowNumber = Math.ceil(i / 8);
		if (rowNumber % 2 === 0) {
			// if even row
			if (i % 2 === 1) {
				$("#square-" + i).attr("class", "black")
			} else {
				$("#square-" + i).attr("class", "red")
			}
		} else {
			// if odd row
			if (i % 2 === 1) {
				$("#square-" + i).attr("class", "red")
			} else {
				$("#square-" + i).attr("class", "black")
			}
		}
		// set condition to make each row have a unique class
	}
}
createCheckerboard();
// now I have 64 squares divs all with correct ids and class.
const createPyramid = (rows) => {
	rows = rows + 1;
	for (let i = 1; i < rows; i++) {
		// create 8 rows with unique ids
		$("<div>").attr("class", "row-" + i).appendTo($(".pyramid-container"))
		let row = i;
		for (let j = 1; j <= row; j++) {
			$("<div>").attr("class", "triangle").appendTo($(".row-" + i))
			$(".row-" + i).addClass("row")
			$(".row-1").addClass("row")
		}
	}
}

createPyramid(11);

