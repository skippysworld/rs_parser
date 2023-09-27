// --
/* Test input

RS 03 20 C S 4 C A 3 A 1 1 S 0 1
RS 15 20 D S 3 E C 3B 0 1 S 0 1
RS2520ES3PE3C11S01

*/

// --
// Declared variables to be used across the process.

let inputForm = document.querySelector("#inputForm");
let inputData = document.getElementById("inputData");
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
	dataToArray.forEach((data) => {
		dataWithoutSpaces.push(data.replaceAll(" ", ""));
	});
}

// --
// Look-up and verify Product Type

function isProduct(data) {
	let substring = data.substring(0, 2);

	if (product.hasOwnProperty(substring)) {
		return product[substring];
	} else {
		return `The ${data} is not a valid RS type!`;
	}
}

// --
// Look-up Rated Operational Voltage

function findRatedVoltage(data) {
	let substring = data.substring(2, 4);

	if (ratedVoltage.hasOwnProperty(substring)) {
		return ratedVoltage[substring];
	} else {
		return "";
	}
}

// --
// Look-up Rated Amps

function findRatedAmps(data) {
	let substring = data.substring(4, 6);

	if (ratedAmps.hasOwnProperty(substring)) {
		return ratedAmps[substring];
	} else {
		return "";
	}
}

// --
// Look-up Application

function findApplication(data) {
	let substring = data.substring(6, 7);

	if (application.hasOwnProperty(substring)) {
		return application[substring];
	} else {
		return "";
	}
}

// --
// Look-up Pole Configuration

function findPoleConfig(data) {
	let substring = data.substring(7, 8);

	if (poleConfig.hasOwnProperty(substring)) {
		return poleConfig[substring];
	} else {
		return "";
	}
}

// --
// Look-up Overvoltage Category

function findOvervoltage(data) {
	let substring = data.substring(8, 9);

	if (overvoltage.hasOwnProperty(substring)) {
		return overvoltage[substring];
	} else {
		return "";
	}
}

// --
// Look-up Operation

function findOperation(data) {
	let substring = data.substring(9, 10);

	if (operation.hasOwnProperty(substring)) {
		return operation[substring];
	} else {
		return "";
	}
}

// --
// Look-up Nominal Supply Voltage

function findSupplyVoltage(data) {
	let substring = data.substring(10, 11);

	if (supplyVoltage.hasOwnProperty(substring)) {
		return supplyVoltage[substring];
	} else {
		return "";
	}
}

// --
// Look-up Auxiliary Contacts

function findAuxContacts(data) {
	let substring = data.substring(11, 12);

	if (auxContacts.hasOwnProperty(substring)) {
		return auxContacts[substring];
	} else {
		return "";
	}
}

// --
// Look-up Low Voltage Connector

function findLowVoltageCon(data) {
	let substring = data.substring(12, 13);

	if (lowVoltageCon.hasOwnProperty(substring)) {
		return lowVoltageCon[substring];
	} else {
		return "";
	}
}

// --
// Look-up Low Voltage Cover

function findLowVoltageCover(data) {
	let substring = data.substring(13, 14);

	if (lowVoltageCover.hasOwnProperty(substring)) {
		return lowVoltageCover[substring];
	} else {
		return "";
	}
}

// --
// Look-up Control Equipment

function findControlEquip(data) {
	let substring = data.substring(14, 15);

	if (controlEquip.hasOwnProperty(substring)) {
		return controlEquip[substring];
	} else {
		return "";
	}
}

// --
// Look-up Roof Execution

function findRoof(data) {
	let substring = data.substring(15, 16);

	if (roof.hasOwnProperty(substring)) {
		return roof[substring];
	} else {
		return "";
	}
}

// --
// Look-up HV Contacts Protection

function findHvContact(data) {
	let substring = data.substring(16, 17);

	if (hvContact.hasOwnProperty(substring)) {
		return hvContact[substring];
	} else {
		return "";
	}
}

// --
// Look-up Ambient Temperature Range

function findTemp(data) {
	let substring = data.substring(17, 18);

	if (temp.hasOwnProperty(substring)) {
		return temp[substring];
	} else {
		return "";
	}
}

// --
// Prints the table on website

function printTable() {
	dataWithoutSpaces.forEach((data) => {
		resultTable.insertAdjacentHTML(
			"beforeend",
			`<tr>
				<td>${isProduct(data)}</td>
				<td>${findRatedVoltage(data)}</td>
				<td>${findRatedAmps(data)}</td>
				<td>${findApplication(data)}</td>
				<td>${findPoleConfig(data)}</td>
				<td>${findOvervoltage(data)}</td>
				<td>${findOperation(data)}</td>
				<td>${findSupplyVoltage(data)}</td>
				<td>${findAuxContacts(data)}</td>
				<td>${findLowVoltageCon(data)}</td>
				<td>${findLowVoltageCover(data)}</td>
				<td>${findControlEquip(data)}</td>
				<td>${findRoof(data)}</td>
				<td>${findHvContact(data)}</td>
				<td>${findTemp(data)}</td>
			</tr>`
		);
	});
}

// --
// Trigger - anytime submit button is pressed

inputForm.addEventListener("submit", (e) => {
	e.preventDefault();

	if (inputData.value == "") {
		// --
		// THROW ERROR
	} else {
		convertToArray();
	}
	printTable();
});
