const name = "rein";

console.log("toUpperCase", name.toUpperCase());

console.log("NAME AFTERWARDS", name);

const colleagues = ["Irene", "David"];

console.log(colleagues);

colleagues.push("Danny");

// console.log(colleagues);

const newTeam = [...colleagues, "Danny"];

// console.log(colleagues); // 2 elements
// console.log(newTeam); // 3 elements

const user = { name: "Rein", email: "rein@rein.io" };

const updatedUser = { ...user, email: "rein@rein.com" };
