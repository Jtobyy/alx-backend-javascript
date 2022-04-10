import Airport from "./7-airport.js";

const airportSF = new Airport('San Francisco Airport', 'SFO');

test("Airport has implemented toStringTag", () => {
    expect(String(airportSF)).toBe('[object SFO]');
    expect('' + airportSF).toBe('[object SFO]');
});
