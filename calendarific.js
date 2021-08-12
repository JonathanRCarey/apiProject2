let holidayInfo = document.querySelector('ul');



fetch('https://calendarific.com/api/v2/holidays?&api_key=9ba62c3d3f053efdeb1658d5abca960d801e08a8&country=US&year=2019')
.then(function(response) {
return response.json();

})



.then(function(json){
    var obj = { "New Year's Day": "2019-01-01", 'World Braille Day': '2019-01-04' };
    for (let holidays of Object.keys(obj)) {
        var date = obj[date];
        console.log(holidays, date);



for (const [holidays, date] of Object.entries(obj))
console.log(holidays, date);

for(p in holidays){
    let listItem = document.createElement('li');
    listItem.innerHTML = p.holidays.name;
    holidayInfo.appendChild(listItem);


}}})
