const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Techonoloty", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Techonoloty", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 15, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }

// forEach

companies.forEach((company) => {
  console.log(company.name);
});

// filter

// let canDrink = [];
// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] >= 21) {
//     canDrink.push(ages[i]);
//   }
// }

// Get 21 and older
// If we return true that value will add into canDrink as an array
// const canDrink = ages.filter((age) => {
//   if (age >= 21) {
//     return true;
//   }
// });

const canDrink = ages.filter((age) => age >= 21);

// const retailComponents = companies.filter((company) => {
//   if (company.category === "Retail") {
//     return true;
//   }
// });

const retailComponents = companies.filter(
  (company) => company.category === "Retail"
);

console.log(retailComponents);

// Get 80's company
const startCompanies = companies.filter(
  (company) => company.start >= 1980 && company.start < 1990
);
console.log(startCompanies);

// Get companies that lasted 10 years or more

const lastedTenYears = companies.filter(
  (company) => company.end - company.start >= 10
);
console.log(lastedTenYears);

// map
// Create array of company names
const comapnyNames = companies.map((company) => company.name);
console.log(comapnyNames);

const startEnd = companies.map(
  (company) => `${company.name} [${company.start} - ${company.end}]`
);
console.log(startEnd);

// Root ages
const agesSquare = ages.map((age) => Math.sqrt(age));
console.log(agesSquare);

// Double ages
const agesDouble = ages.map((age) => Math.sqrt(age)).map((age) => age * 2);
console.log(agesDouble);

// sort
// const sortedCompanie = companies.sort((c1, c2) => {
//   if (c1.start > c2.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// });
const sortedCompanie = companies.sort((c1, c2) =>
  c1.start > c2.start ? 1 : -1
);
console.log(sortedCompanie);

// Sort ages
// const sortAges = ages.sort((a1, a2) => (a1 > a2 ? 1 : -1));
// console.log(sortAges);

// reduce

// let ageSum = 0;
// for (let i = 0; i < ages.length; i++) {
//   ageSum += ages[i];
// }

const ageSum = ages.reduce((total, age) => total + age, 0);
console.log(ageSum);

//Get total years for all companies

const totalYears = companies.reduce(
  (total, company) => total + (company.end - company.start),
  0
);
console.log(totalYears);

// Combine above function
const combined = ages
  .map((age) => age * 2)
  .filter((age) => age >= 40)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b, 0);

console.log(combined);
