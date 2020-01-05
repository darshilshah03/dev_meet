
   // const apikey = '$2a$10$qmus06s8/xrTZNC9dikH4.UH5TB6S.RZ.//IrgjwxRJVyq6fLIdGG';
//const url = new URL('https://www.potterapi.com/v1/characters/?key=$2a$10$qmus06s8/xrTZNC9dikH4.UH5TB6S.RZ.//IrgjwxRJVyq6fLIdGG&house=Slytherin'), params = {key: apikey, house: 'Slytherin'}

//Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    
character = [
    {
        "name":"Harry Potter",
        "house":"Gryffindor"
    },
    {
        "name":"Draco Malfoy",
        "house":"Slytherin"
    },
    {
        "name" : "Luna Lovegood",
        "house" : "Ravenclaw"
    },
    {
        "name" : "Ronald Weasley",
        "house" : "Gryffindor"
    }
]
function find(){
    console.log("Hii");
    var charl;
    var house = document.getElementById("house").value;
    const apikey = '$2a$10$qmus06s8/xrTZNC9dikH4.UH5TB6S.RZ.//IrgjwxRJVyq6fLIdGG';
    const url = new URL('https://www.potterapi.com/v1/characters/?key=$2a$10$qmus06s8/xrTZNC9dikH4.UH5TB6S.RZ.//IrgjwxRJVyq6fLIdGG&house='+house), params = {key: apikey, house: 'Slytherin'}
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       //document.getElementById("demo").innerHTML = this.responseText;
       console.log(this.responseText);
       charl = this.responseText;
       var local = JSON.parse(charl);
    var i;
    var temp = [];
    for(i=0;i<local.length;i++)
    {
        if(local[i].house==house)
        {
            temp.push(local[i].name);
        }
    }
    console.log(temp);
    document.getElementById("demo").innerHTML = temp;
      }
    };
    xhttp.open("GET",url, true);
    xhttp.send();
    
    console.log(house);
    
}