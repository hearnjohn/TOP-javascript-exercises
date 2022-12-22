const findTheOldest = function (people) {
  people.forEach((person) => {
    if (!person.yearOfDeath) person.yearOfDeath = 2022;
  });
  let sorted = people.sort((a, b) =>
    a.yearOfDeath - a.yearOfBirth > b.yearOfDeath - b.yearOfBirth ? -1 : 1
  );
  console.log(sorted[0].name);
};

// Do not edit below this line
module.exports = findTheOldest;
