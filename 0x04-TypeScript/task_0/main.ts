interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Alfred',
    lastName: 'Tuva',
    age: 25,
    location: 'Kenya'
}

const student2: Student = {
    firstName: 'Joy',
    lastName: 'Mutanu',
    age: 19,
    location: 'Kenya'
}

const studentsList: Student[] = [student1, student2];


// Create and style a basic table
const table: HTMLTableElement = document.createElement('table');

// Add table header
const headerRow: HTMLTableRowElement = document.createElement('tr');
const nameHeader: HTMLTableCellElement = document.createElement('th');
nameHeader.textContent = 'First Name';
const locationHeader: HTMLTableCellElement = document.createElement('th');
locationHeader.textContent = 'Location';
headerRow.appendChild(nameHeader);
headerRow.appendChild(locationHeader);
table.appendChild(headerRow);

// Populate rows
studentsList.forEach((student) => {
  const row: HTMLTableRowElement = document.createElement('tr');

  const nameCell: HTMLTableCellElement = document.createElement('td');
  nameCell.textContent = student.firstName;

  const locationCell: HTMLTableCellElement = document.createElement('td');
  locationCell.textContent = student.location;

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

document.body.appendChild(table);
