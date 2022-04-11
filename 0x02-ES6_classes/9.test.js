import listOfStudents, { StudentHolberton, HolbertonClass } from "./9-hoisting.js";

test("initialization works correctly", () => {
    expect(listOfStudents[0] instanceof StudentHolberton).toBe(true);
    expect(listOfStudents[0].holbertonClass instanceof HolbertonClass).toBe(true);
});
