let findTheOldest = function(people) {
    let oldest;
    let oldestAge = 0;
    people.forEach(person => {
        let deathYear = (typeof person.yearOfDeath != 'undefined') ?
         person.yearOfDeath : new Date().getFullYear();

        let personAge = deathYear - person.yearOfBirth;
        if(oldestAge < personAge) {
            oldestAge = personAge;
            oldest = person;
        }
    });
    return oldest;

}

module.exports = findTheOldest
