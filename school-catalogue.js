class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }

  //Create getters for the name, level, and numberOfStudents properties
  get name() {
    return this._name;
  }

  get level() {
    return this._level;
  }

  get numberOfStudents() {
    return this._numberOfStudents;
  }

  //Create a setter for numberOfStudents. The method should first check if the input (newNumberOfStudents) is a number.
  set numberOfStudents(newNumberOfStudents) {
    if (typeof newNumberOfStudents === 'number') {
      this._numberOfStudents = newNumberOfStudents;
    } else {
      console.log('Invalid input: numberOfStudents must be set to a Number.');
    }
  }

  // create a method named quickFacts that logs the following string to the console:
  quickFacts() {
    console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`);
  }

  //create a static method named pickSubstituteTeacher. This method will receive one parameter, named substituteTeachers. The substituteTeachers parameter will take an array of strings.
  static pickSubstituteTeacher(substituteTeachers) {
    //return substituteTeachers[Math.floor(Math.random() * (substituteTeachers.length - 1))];
    let randomTeacher = Math.floor(Math.random() * (substituteTeachers.length - 1));
    return substituteTeachers[randomTeacher];
  }
}


//build a PrimarySchool class that extends School
class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, 'primary', numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }

  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

//create a HighSchool class that extends the School class
class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, 'high', numberOfStudents);
    this._sportsTeams = sportsTeams;
  }

  get sportsTeams() {
    return this._sportsTeams
  }
}


//Create a PrimarySchool instance with the following properties:
const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian or a family member over the age of 13.');

//Call .quickFacts() on the lorraineHansbury instance.
lorraineHansbury.quickFacts();


//Call .pickSubstituteTeacher() on School, and pass the following array as an argument:
console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));

//Create a HighSchool instance with the following properties:
const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

//Get the value saved to the sportsTeams property in alSmith.
console.log(alSmith.sportsTeams);
