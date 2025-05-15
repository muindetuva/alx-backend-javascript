interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // allows any other properties
}

// Example usage:
const teacher1: Teacher = {
  firstName: 'Alice',
  lastName: 'Ngugi',
  fullTimeEmployee: true,
  location: 'Nairobi',
  contract: true, // additional attribute
};

const teacher2: Teacher = {
  firstName: 'John',
  lastName: 'Kamau',
  fullTimeEmployee: false,
  yearsOfExperience: 5,
  location: 'Mombasa',
  isRemote: true,
  subjects: ['Math', 'Physics'],
};

console.log(teacher1);
console.log(teacher2);

