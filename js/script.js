'use strict';

const user = {
    name: "Alex",
    age: 25,
    city: "Kyiv",
    job: "Frontend"
};

const { name, age, city, job } = user;
const shortInfo = {name , city};
console.log(shortInfo);

{
    const {name: fullName, city: location} = user;
    const renamed = {fullName, location};
    console.log(renamed);
}
//I turned it into a block here because it was giving an error due to the location variable.