const fileSystem = {
    name: "root",
    type: "folder",
    children: [
     {
      name: "folder1",
      type: "folder",
      children: [
       { name: "file1.txt", type: "file" },
       { name: "file2.txt", type: "file" }
      ]
     },
     {
      name: "folder2",
      type: "folder",
      children: [
       { name: "file3.txt", type: "file" }
      ]
     }
    ]
   };

   Object.freeze(fileSystem);

   Object.defineProperties(fileSystem, {
    children: {
        writable: false,
        enumerable: false,
        configurable: false,
    },
   });

   console.log(fileSystem);


//Task 2

let date1 = new Date("2020-03-12");
let date2 = new Date("2024-04-13");
let days = (((date1 - date2) / (1000 * 60 * 60 * 24)));

console.log(Math.abs(days));

//Task 3

    let dayOfBirth = new Date(prompt("Дата народження:"));
    let today = new Date();

    let days = ((Math.floor((today - dayOfBirth) / (1000 * 60 * 60 * 24))));
    let fullAge = Math.floor(days / 365);
    let fullMonth = Math.round((days % 365) / 30);

    alert(`${fullAge} років і ${fullMonth} місяців`);

//Task 4

    let futureDate = new Date("2024-04-03");
    let today = Date.now()
    let days = (futureDate - today) / (1000 * 24 * 60 * 60);
    let hours = (days - Math.floor(days)) * 24;
    let minutes = (hours - Math.floor(hours)) * 60;
    let seconds = (minutes - Math.floor(minutes)) * 59;

    console.log(`${Math.floor(days)} днів, ${Math.floor(hours)} годин, ${Math.floor(minutes)} хвилин, ${Math.floor(seconds)} секунд.`);

//Task 5

let deadLine = new Date("2024-04-30");
let today = Date.now()
let days = Math.floor((deadLine - today) / (1000 * 24 * 60 * 60));
let daysArray = [];
let daysOnArray = [];
    
for (let i = 0; i < days; i++) {
    let nextDay = new Date(deadLine.setDate(deadLine.getDate() + 1));
    daysArray.push(nextDay);
    }

daysArray.forEach((day) => {
    if (day.getDay() !== 6 && day.getDay() !== 0) {
    daysOnArray.push(day); 
    }
});

console.log(`${daysOnArray.length} днів`);
