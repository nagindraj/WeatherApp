var apiKey = '48f955f220282f00d92a5377d14fe605';

document.querySelector('#citysearch').addEventListener('click', function () {
    const city = document.querySelector('input[name="textbox"]').value;

    if (city !== '') {
        var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey;
        fetch(url, {
            method: 'GET', // or 'PUT' // data can be `string` or {object}!
        }).then(function (response) {
            return response.json();
        }).then(function (data) {
            createWeatherTable(data, city);
        })
    }
});

function createWeatherTable(data, city) {
    var countryId = data.sys.country;
    console.log(countryId);
    const weather = document.querySelector('#details').innerHTML;
    let weatherDetails = weather + ' in ' + city + ',' + countryId;
    document.querySelector('#details').innerHTML = weatherDetails;
    console.log(data);
}
