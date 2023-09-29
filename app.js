// --
/* Test input

RS 03 20 C S 4 C A 3 A 1 1 S 0 1
RS 15 20 D S 3 E C 3B 0 1 S 0 1
RS2520ES3PE3C11S01

*/

// --
// Declared variables to be used across the process.

let inputForm = document.querySelector("#inputForm");
let inputData = document.querySelector("#inputData");
let resultTable = document.querySelector(".resultTable");

let dataToArray = [];
let dataWithoutSpaces = [];

// --
// Function to clear whole table and delete data from arrays from previous processes.

function clearEverything() {
	dataToArray = [];
	dataWithoutSpaces = [];
	resultTable.innerHTML = "";
}

//--
// Data input split into array at the end of each line and stripped of spaces

function convertToArray() {
	clearEverything();
	dataToArray = inputData.value.split("\n");
	dataToArray.forEach((str) => {
		dataWithoutSpaces.push(str.replaceAll(" ", ""));
	});
}

// --
// Look-up data

function findData(str, object, indexFrom, indexTo) {
	let subStr = str.substring(indexFrom, indexTo);

	if (object.hasOwnProperty(subStr)) {
		return object[subStr];
	} else if (object === product) {
		return "noRS";
	} else {
		return "";
	}
}

// --
// Prints the table on website

function printTable() {
	dataWithoutSpaces.forEach((str) => {
		if (findData(str, product, 0, 2) == "noRS") {
			resultTable.insertAdjacentHTML(
				"beforeend",
				`<tr>
					<td colspan=15><strong>${str}</strong> is not a valid RS type!</td>
				</tr>`
			);
		} else {
			resultTable.insertAdjacentHTML(
				"beforeend",
				`<tr>
					<td>${findData(str, product, 0, 2)}</td>
					<td>${findData(str, ratedVoltage, 2, 4)}</td>
					<td>${findData(str, ratedAmps, 4, 6)}</td>
					<td>${findData(str, application, 6, 7)}</td>
					<td>${findData(str, poleConfig, 7, 8)}</td>
					<td>${findData(str, overvoltage, 8, 9)}</td>
					<td>${findData(str, operation, 9, 10)}</td>
					<td>${findData(str, supplyVoltage, 10, 11)}</td>
					<td>${findData(str, auxContacts, 11, 12)}</td>
					<td>${findData(str, lowVoltageCon, 12, 13)}</td>
					<td>${findData(str, lowVoltageCover, 13, 14)}</td>
					<td>${findData(str, controlEquip, 14, 15)}</td>
					<td>${findData(str, roof, 15, 16)}</td>
					<td>${findData(str, hvContact, 16, 17)}</td>
					<td>${findData(str, temp, 17, 18)}</td>
				</tr>`
			);
		}
	});
}

// --
// Trigger - anytime submit button is pressed

inputForm.addEventListener("submit", (event) => {
	event.preventDefault();

	convertToArray();
	printTable();
});
