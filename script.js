// Assignment 1
function compareJSON(json1, json2) {
    const obj1 = JSON.parse(json1);
    const obj2 = JSON.parse(json2);

    const sortedObj1 = sortObject(obj1);
    const sortedObj2 = sortObject(obj2);

    return JSON.stringify(sortedObj1) === JSON.stringify(sortedObj2);
}

function sortObject(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    if (Array.isArray(obj)) {
        return obj.map(sortObject);
    }

    const sortedObj = {};
    Object.keys(obj).sort().forEach(key => {
        sortedObj[key] = sortObject(obj[key]);
    });

    return sortedObj;
}

const json1 = '{"name": "John", "age": 25, "city": "New York"}';
const json2 = '{"age": 25, "name": "John", "city": "New York"}';

const result = compareJSON(json1, json2);
console.log(result);

// Assignment 2

fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {
        data.forEach(country => {
            const flag = country.flags.emoji;
            const countryName = country.name.common;
            console.log(`${countryName}: ${flag}`);
        });
    })
    .catch(error => console.error('Error fetching data:', error));
// Assignment 3
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {
        data.forEach(country => {
            const countryName = Array.isArray(country.name) ? country.name[0] : country.name.common; 
            const region = country.region || 'N/A';
            const subregion = country.subregion || 'N/A';
            const population = country.population || 'N/A';

            console.log(`Country: ${countryName}`);
            console.log(`Region: ${region}`);
            console.log(`Subregion: ${subregion}`);
            console.log(`Population: ${population}`);
            
        });
    })
    .catch(error => console.error('Error fetching data:', error));

