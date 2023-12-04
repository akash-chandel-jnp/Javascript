// we are given an array and we have to find the range (or say temp altitude) i.e. max - least temp

const temp = [23, 55, -20, -8, 36, "error", 15];

// -------------------Create tasks by asking the right question ------------------

// 1) What is meant by temp altitude : (ans: maxTemp -minTemp)

// 2) What is meant by error and how to deal it in our solution (ans: ignore error)
// 3) How to find the max and min from an array
const tempAltitudeFInder = function (temp_array) {
	let maxTemp = temp[0];
	let minTemp = temp[0];
	for (let i = 0; i < temp.length; i++) {
		let currTemp = temp[i];
		if (currTemp == "error") {
			continue;
		} else {
			if (currTemp > maxTemp) {
				maxTemp = currTemp;
			}
			if (currTemp < minTemp) {
				minTemp = currTemp;
			}
		}
	}
	return maxTemp - minTemp;
};

// 4) Find the diffence and that is the Temp Amplitude
console.log(tempAltitudeFInder(temp));

// QUESTION : How can we do the same thing as above , but in this case two arrays will be passed into the function , and we have to find max and considering both arrays as one single array.
//Answer : after passing the two array into the function , we can concat arrays.

const temp1 = [23, 55, -20, -8, 36, "error", 15];
const temp2 = [63, 25, -21, -18, 46, "error", 35];

const tempAltitude = function (array1, array2) {
	const finalTemp = array1.concat(array2);
	let maxTemp = finalTemp[0];
	let minTemp = finalTemp[0];
	for (let i = 0; i < finalTemp.length; i++) {
		let currTemp = finalTemp[i];
		if (currTemp == "error") {
			continue;
		} else {
			if (currTemp > maxTemp) {
				maxTemp = currTemp;
			}
			if (currTemp < minTemp) {
				minTemp = currTemp;
			}
		}
	}
	return maxTemp - minTemp;
};

console.log(tempAltitude(temp1, temp2));
