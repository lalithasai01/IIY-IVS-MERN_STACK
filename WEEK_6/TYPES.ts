// Simple types
let username: string = "Lalitha";
let age: number = 18;
let isStudent: boolean = true;

console.log("Name:", username);
console.log("Age:", age);
console.log("Student:", isStudent);

// Array type
let marks: number[] = [85, 90, 78];
console.log("Marks:", marks);

// Tuple type
let person: [string, number] = ["Ravi", 25];
console.log("Tuple:", person);

// Enum type
enum Color {
  Red,
  Green,
  Blue,
}

let c: Color = Color.Green;
console.log("Enum value:", c);

// Any type
let randomValue: any = "Hello";
randomValue = 100;

console.log("Any type:", randomValue);

// Unknown type
let data: unknown = "TypeScript";
console.log("Unknown:", data);

// Void type
function sayHello(): void {
  console.log("Hello World");
}

sayHello();

// Never type
function throwError(): never {
  throw new Error("Error occurred");
}

// throwError(); // Uncomment to test
