import HolbertonClass from "./8-hbtn_class.js";

const classSF = new HolbertonClass(35, 'San Francisco');
const classBoston = new HolbertonClass(15, 'Boston');

test("HolbertonClass has implemented toPrimitive", () => {
    expect(String(classSF) instanceof HolbertonClass).toBe(false);
    expect(String(classSF)).toBe('San Francisco');
    expect(Number(classSF)).toBe(35);
    expect(Number(classSF)+Number(classBoston)).toBe(50);
});
