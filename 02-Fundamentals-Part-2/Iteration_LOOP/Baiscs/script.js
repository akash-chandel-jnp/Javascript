"use strict";
// print ' I love 1 apple '
//       ' I love 2 apple' ... 5 times

for (let i = 1; i <= 5; i++) {
	console.log(`I love ${i} apple`);
}

// ========================================= loop through an array =======================================================

const akash = [
	"Akash",
	"Singh",
	28,
	"Ambala",
	"India",
	["anjali", "roshni", "akhil", "rajat"],
	{
		music: "arijitSIngh",
		instruments: "Guitar",
		cooking: "soup",
	},
];

const types = [];
for (let i = 0; i < akash.length; i++) {
	// console.log(typeof akash[i]);
	types.push(typeof akash[i]); // method 1
	// types[i] = typeof(akash[i]) // method 2
}

console.log(types);

console.log(typeof [2, 5]); // object

// ======================================= CONTINUE AND BREAK =======================================================
// suppose in the akash array we have to select all the srting data types only and skip others
// use continue
const str_only = [];
for (let i = 0; i < akash.length; i++) {
	if (typeof (akash[i] != "String")) continue;
	str_only.push(akash[i]);
}

// to select the first number dataType in the array of akash
for (let i = 0; i < akash.length; i++) {
	if (typeof (akash[i] = "Number")) {
		str_only.push(akash[i]);

		break;
	}
}

// ====================================== LOOPS INSIDE LOOPS ==================================================
for (let i = 1; i <= 3; i++) {
	console.log(`Exercise no. ${i} started.`);

	for (let j = 1; j <= 10; j++) {
		console.log(`Rep no. ${j} of exercise no. ${i} has started.`);
	}
}
