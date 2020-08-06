let findTheOldest = function(people) {
    let oldest = people[0];
    people.forEach(person => {
        if (typeof person.yearOfDeath != 'undefined'){
            oldest = ((oldest.yearOfDeath - oldest.yearOfBirth) < 
                (person.yearOfDeath - person.yearOfBirth)) ?
                    person : oldest;
        }
        else{
            let date = new Date().getFullYear;
            console.log(date);
            oldest = ((oldest.yearOfDeath - oldest.yearOfBirth) < 
                (date - person.yearOfBirth)) ?
                    person : oldest;
        }
    });
    console.log(oldest);
    return oldest;

}

module.exports = findTheOldest
