// ┌─────────────────┐
// │ Your code here! │
// └─────────────────┘

/*
functionName: createUser
parameters: 2 strings(firstName, lastName)
return: object
{
firstName: string
lastName: string
}
putting firstName and lastName into an object
 */
// of parameter name is exactly the same as the keyword, then you can enter the parameter only, followed by a comma

// createUser

function createUser (firstName, lastName){
    let user = {
        firstName: firstName,
        lastName: lastName,
    }
    return user;
}

console.log(createUser('David', 'Crochet'));
console.log(createUser('Yeah', 'Man'));




/*
functionName setAge
parameters: user(object), age(number)
user = 
{
    firstName: string
    lastName: string
}
returning: 
user
*/

// setAge

function setAge (user, age){
        user.age = age;
        return user;
}

console.log(setAge(createUser('David','Crochet'),49))




// incrementAge

function incrementAge(user){
    user.age = user.age + 1
    return user
}
console.log(incrementAge(setAge(createUser('David', 'Crochet'), 49)));


/*
functionName - fixCar
parameters: car
car = {
    make: string
    model: string
    year: number
    needsMaintenance: boolean

}
return 
car object
*/


// fixCar

function fixCar(car){
         car.needsMaintenance = false;
        return car;
}

console.log(fixCar({ make: 'Ford',
model: 'Mustang',
year: 1969,
needsMaintenance: true
}))





/*
function addGrades
parameters: student object and grades array
student = { 
    name: string
    email: string
    grades: array numbers
}

grades parameter = array of numbers
return student object
*/

// addGrades

let student = {
    name: 'David Crochet',
    email: 'david.crochet@codeimmersives.com',
    grades: [80,100,95],
}

let newGrades = [88,70,90];

function addGrades(student, newGrades){
    student.grades = student.grades.concat(newGrades);
return student

}

/*
for(let i = 0; i < newGrades.length;i++){
    student.grades.push(newGrades[i]);

return student;
}
*/
console.log(addGrades(student, newGrades));




// getDataType

let car = {make: 'Ford',
model: 'Mustang',
year: 1969,
needsMaintenance: false}

function getDataType(carObject, keyObject){
    
    return typeof carObject[keyObject]
}

console.log(getDataType(car,'needsMaintenance'))







//addTodo

let todos = [ { 
    title: 'Get gas',
    isComplete: false
},
{   title: 'Buy bread',
    isComplete: true
}
]
let newTodo = {
    title: 'Call mom',
    isComplete: false
};

function addTodo(doList, newItem){
    doList.push(newItem)
return doList
}
console.log(addTodo(todos,newTodo))



//addSong

let playlist = {
    title: 'My jams',
    duration: 7,
    songs: [
        {
            title: 'Texas Sun',
            artist: 'Khruangbin',
            duration: 4
        },
        {
            title: 'Malamente',
            artist: 'Rosalia',
            duration: 3
        }
    ]
};


let newSong = {
    title: 'Old Friends',
    artist: 'Pinegrove',
    duration: 3
};

function addSong(origplaylist, song){
    origplaylist.songs.push(song)
    origplaylist.duration = origplaylist.duration + 3
    

return origplaylist
}
console.log(addSong(playlist, newSong))




// updateReportCard

let reportCard = {
    lowestGrade: 70,
    highestGrade: 96,
    averageGrade: 82,
    grades: [70, 95, 80]
};

function updateReportCard(reportCard2, newGrade2){
    if(newGrade2 < reportCard2.highestGrade && newGrade2 < reportCard2.lowestGrade){
        reportCard2.lowestGrade = newGrade2
        }else if(newGrade2 > reportCard2.lowestGrade && newGrade2 > reportCard2.highestGrade ){
            reportCard2.highestGrade = newGrade2
        }     
        reportCard2.grades.push(newGrade2)

        let sum = 0
        for(let i = 0; i < reportCard2.grades.length;i++){
        sum = sum + reportCard2.grades[i] 
        }

        reportCard2.averageGrade = sum / reportCard2.grades.length
             
        return reportCard2
}
console.log(updateReportCard(reportCard,71))



























// ┌─────────────────────────────────────────────────────────────────────────┐
// │ Code used for testing. Do not modify!                                   │                         
// │                                                                         │
const isDef = (arg) => arg === 'function';
const pass = () => undefined;
// │                                                                         │
module.exports.createUser = isDef(typeof createUser) ? createUser : pass;
module.exports.setAge = isDef(typeof setAge) ? setAge : pass;
module.exports.incrementAge = isDef(typeof incrementAge) ? incrementAge : pass;
module.exports.fixCar = isDef(typeof fixCar) ? fixCar : pass;
module.exports.addGrades = isDef(typeof addGrades) ? addGrades : pass;
module.exports.getDataType = isDef(typeof getDataType) ? getDataType : pass;
module.exports.addTodo = isDef(typeof addTodo) ? addTodo : pass;
module.exports.addSong = isDef(typeof addSong) ? addSong : pass;
module.exports.updateReportCard = isDef(typeof updateReportCard) ? updateReportCard : pass;
// │                                                                         │
// └─────────────────────────────────────────────────────────────────────────┘
