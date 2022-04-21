
var requestOptions = {
    method: 'POST'
   // redirect: 'follow'

};
 
  fetch("https://sfrs-j75dy.ondigitalocean.app/api/listDistricts", requestOptions).then((data)=>
  {
      //console.log(data);
      return data.json();

    })
    .then(function(json){ 
        console.log(DisplayData(json))
    })
  

    function DisplayData(json){
        var objectData = json;
        var fetch = "District    Province \n";
        var display= document.getElementById("data");
        display.innerHTML='<tr><th>Districts</th><th>Provinces</th></tr>'
        for (var i=0; i< objectData.data.length; i++){
          fetch += objectData.data[i].name+"     "+ objectData.data[i].province.name+"\n";
          display.innerHTML+='<tr><td>'+objectData.data[i].name+'</td><td>'+objectData.data[i].province.name+'</td></tr>';
        }
     return fetch;
      }