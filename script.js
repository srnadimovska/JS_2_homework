// Primeri za function:

function eurToUsd(d) {
    console.log (d * 1.20);
}

var a = eurToUsd(600);
var b = eurToUsd(1200);

console.log("------------");

function areaTriangle(b , h) {
    console.log ((b * h) / 2);
}

var c = areaTriangle(10,15);
var d = areaTriangle(16,20);

console.log("------------");

function areaCube (a) {
    console.log((a * a) * 6);
}

var e = areaCube(10);
var d = areaCube(16);

console.log("------------");

// Primeri za object 

const state1 = {
    stateName: "Illinois",
    stateCity: {
        capitalCity:"Springfield",
        otherCity: "Chicago",
    },
    
    statePopulation: 12.55,
    stateRate:5.3,
    print: function () {
        console.log (
            `State: ${this.stateName}, Capital: ${this.stateCity.capitalCity}, Population: ${this.statePopulation} million, Unemployment Rate: ${this.stateRate}%`
        );
    },
};

state1.print();
console.log(state1.stateName);
console.log(state1.stateCity.otherCity);

console.log("-----------");

const state2 = {
    stateName: "Texas",
    stateCity: {
        capitalCity:"Austin",
        otherCity: "Houston",
    },
    
    statePopulation: 30.5,
    stateRate:4.1,
    print: function () {
        console.log (
            `State: ${this.stateName}, Capital: ${this.stateCity.capitalCity}, Population: ${this.statePopulation} million, Unemployment Rate: ${this.stateRate}%`
        );
    },
};

state2.print();
console.log(state2.stateName);
console.log(state2.stateCity.otherCity);

console.log("-----------");

const state3 = {
    stateName:"California",
    stateCity: {
        capitalCity:"Sacramento",
        otherCity: "San Francisco",
    },
    
    statePopulation: 38.97,
    stateRate:5.3,
    print: function () {
        console.log (
            `State: ${this.stateName}, Capital: ${this.stateCity.capitalCity}, Population: ${this.statePopulation} million, Unemployment Rate: ${this.stateRate}%`
        );
    },
};

state3.print();
console.log(state3.stateName);
console.log(state3.stateCity.otherCity);

console.log("-----------");

// Primeri za Array

const num = [];
for ( i = 0; i < 1000; i++) {
num[i] = i + 1;
}

console.log(num);

console.log("-----------");

const stotki = [100,101,200,220,300,302,304,400,480,500,520,600,648,700,751,800,854,900,999,1000,1020,1100];
for ( i = 1; i <= 1000; i++) {
    if (i % 100 == 0) {
        console.log(i + "e stotka");
    }
}
console.log("-----------");

const letters = ["j","a","v","a","s","c","r","i","p"];
letters[9] = "t";
console.log(`Akademija za ${letters}`);

console.log("-----------");

const states = ["Illinois", "Texas"]
states.push("California");
console.log(`USA states: ${states}`);




