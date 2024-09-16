// Dates

let d;

d = new Date();

d = d.toString();

d = new Date(2025, 11, 14); // December 14th 00:00:00
// Months are zero based
d = new Date(2025, 0, 1); // Jan 01, 2025 00:00:00

d = new Date(2025, 0, 1, 12, 30, 0); // Jan01 2025 12:30:00

d = new Date('2025-12-14'); // Dec 13 2025
d = new Date('2025-12-14T12:30:00'); // Dec 14 2025 12:30:00
d = new Date('12/14/1978 12:13:00'); // Dec 14 1978 12:13:00
d = new Date('2025-12-14'); // Dec 13 2025
d = new Date('12-14-2025'); // Dec 14 2025

// Time Stamps

d = Date.now();

d = new Date();
d = d.getTime();
d = d.valueOf();

d = new Date(1721209794942); //millsec

d = Math.floor(Date.now() / 1000);

console.log(d);
