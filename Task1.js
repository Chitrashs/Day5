//Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).
//Get all the countries from Asia continent /region using Filter function

var request = new XMLHttpRequest();

request.open("GET","https://restcountries.com/v2/all");

request.send();

request.onload=function(){
    var result=JSON.parse(request.response);
     result.filter((countries) => {
           return countries.region ==="Asia";
     })
     console.log(result);
}
