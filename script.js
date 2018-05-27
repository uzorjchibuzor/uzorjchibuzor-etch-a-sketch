let canvas = document.querySelector('.container');

grid = (size = 16) =>{
	

	// To create 16 divs, 16 times. Every iteration of this dual loop will create 16 divs.

	for (let i = 0; i < 16; i++) {
		let row = document.createElement('div');
		row.classList.add('square');
		row.width = 960/size;
		row.heigth = 960/size;
		canvas.appendChild(row)
		
		for (let j = 0; j < 16; j++) {
			let cell = document.createElement('div');
			cell.classList.add('square');
			cell.width = 960/16;
			cell.heigth = 960/16;
			canvas.appendChild(cell);
		};
		canvas.style.backgroundColor = "red";

		};
		
	};

	grid();