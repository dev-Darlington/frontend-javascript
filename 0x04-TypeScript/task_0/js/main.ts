interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

let student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York"
};

let student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles"
};

let studentsList: Student[] = [student1, student2];

const table = document.createElement("table");
const headerRow = document.createElement("tr");
const nameHeader = document.createElement("th");
nameHeader.textContent = "Name";
const locationHeader = document.createElement("th");
locationHeader.textContent = "Location";
headerRow.appendChild(nameHeader);
headerRow.appendChild(locationHeader);
table.appendChild(headerRow);
studentsList.forEach((student) => {
    const row = document.createElement("tr");
    const nameData = document.createElement("td");
    nameData.textContent = `${student.firstName} ${student.lastName}`;
    const locationData = document.createElement("td");
    locationData.textContent = student.location;
    row.appendChild(nameData);
    row.appendChild(locationData);
    table.appendChild(row);
});

document.body.appendChild(table);