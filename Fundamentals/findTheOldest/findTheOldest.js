let findTheOldest = function(people) {
    let oldest = people[0];
    people.forEach(person => {
        if (typeof person.yearOfDeath != 'undefined'){
            oldest = ((oldest.yearOfDeath - oldest.yearOfBirth) >= 
                (person.yearOfDeath - person.yearOfBirth)) ?
                    oldest : person;
        }
        else{
            let thisYear = new Date().getFullYear();
            oldest = ((oldest.yearOfDeath - oldest.yearOfBirth) >= 
                (thisYear - person.yearOfBirth)) ?
                    oldest : person;
            console.log(thisYear);
            console.log(person.yearOfBirth);
            console.log(thisYear - person.yearOfBirth);
        }
    });
    return oldest;

}

module.exports = findTheOldest
