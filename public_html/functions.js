/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*var xhr = new XMLhttpRequest();
console.log(xhr);*/

// Egy már ténylegesen létező szerveroldali program, egy ún. API megszólítása

function letoltes(){
    event.preventDefault();
    var xhr = new XMLHttpRequest();
    var url = "https://jsonplaceholder.typicode.com/posts";
    xhr.open("GET",url,false); ///ez csak előre jelzés 
    xhr.send(); //ez pedig a tényleges kommunikáció indítás
    window.alert(xhr.responseText);// a szikron működés miatt a párbeszédablak addig nem tűnik fel, amíg a korábban látott
}

function letoltes2(){
   event.preventDefault();
    var xhr = new XMLHttpRequest();
    var url = "https://jsonplaceholder.typicode.com/posts";
    xhr.onreadystatechange=function(){
        console.log(xhr.getAllResponseHeaders());
        if(xhr.readyState ==4){
            console.log(xhr);
        }
            
        }
    xhr.open("HEAD",url,true); // aszikron működést készít elő
    xhr.onprogress = function(){
        if(xhr.lengthComputable){
            console.log (xhr.loaded/xhr.total*100);
        }
    }
    xhr.send();
    //window.alert(xhr.responseText);// azért nem jelenik meg semmi, mert az azonnali
 
}
function teljesTablazatLekerese(){
    var xhr = new XMLHttpRequest();
    var url = "https://jsonplaceholder.typicode.com/posts";
    xhr.open("GET",url,true); 
     xhr.onreadystatechange=function(){
         if(xhr.readyState ==4 && xhr.status == 200){
            var adatok = eval(xhr.responseText);
          //  localStorage.setItem("adatok",adatok);
           localStorage.setItem("adatok",JSON.stringify(adatok));
           // var adatok = xhr.responseText;
            //window.alert(adatok.length);
            //tablazatLetrehozasa(adatok);
            tablazatLetrehozasa(JSON.parse(localStorage.getItem("adatok")));
         }
         
     }
     xhr.send();
}


function tablazatLetrehozasa(adatok){ //formális paraméter
    var tablazatoktombje = document.getElementsByTagName("table"); //Mivel nálunk csak egy
    var tablatorzs=tablazatoktombje[0].tBodies[0];
    //for(var elem in tablazatok tombje[0]) window.alert(elem);
    for(var i= 0; i<adatok.length;i++){
        var sor = document.createElement("tr");
        var objektum = adatok[i];
       // for(var tulajdonsag in adatok[i]){
       for(var tulajdonsag in objektum){
            var cella = document.createElement("td");
            //cella.innerHTML = adatok[i][tulajdonsag];
            cella.innerHTML = objektum[tulajdonsag];
            sor.appendChild(cella);
        }
          tablatorzs.appendChild(sor);
    }
    }


/*var xhr = new XMLHttpRequest();
console.log(xhr);*/

//egy már teljesen létező szerveroldali program egy appi megszolítással

/*function letoltes(){
    event.preventDefault();
    var xhr = new XMLHttpRequest();
    var url = "https://jsonplaceholder.typicode.com/posts";
    xhr.open("GET",url,false); // ez csak előrejelzés
    xhr.send(); // ez a tényleges kommunikáció indítása
    window.alert(xhr.responseText);
}

function letoltes2(){
    event.preventDefault();
    var xhr = new XMLHttpRequest();
    var url = "https://jsonplaceholder.typicode.com/posts";
    xhr.onreadystatechange=function(){
        console.log(xhr.getAllResponseHeaders());
       if(xhr.readyState ==4){
        console.log(xhr);
       }
    }
    xhr.open("HEAD",url,true); 
    xhr.onprogress=function(){
        if(xhr.lengthComputable){
            console.log(xhr.loaded/xhr.total*100);
        }
    }
   
    xhr.send(); 
    // window.alert(xhr.responseText);
    //console.log(xhr.responseText);


    
}
function TeljesTablazatLekerese(){
    var xhr = new XMLHttpRequest();
    var url = "https://jsonplaceholder.typicode.com/posts";
    xhr.open("GET",url,true);
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4 && xhr.status==200){
            var adatok=eval(xhr.responseText);
           // var adatok=xhr.responseText;
            tablazatLetrehozasa(adatok);
        }
    }
    xhr.send();
}
function  tablazatLetrehozasa(adatok){
    var tablazatoktombje=document.getElementsByTagName("table");
    var tablatorzs=tablazatoktombje[0].tBodies[0];
    for (var i =0 ;i < adatok.length; i++){
        var sor = document.createElement("tr");
        var objektum = adatok[i];
        for (var tulajdonsag in objektum) {
            var cella = document.createElement("td");
            cella.innerHTML=objektum[tulajdonsag];
            sor.appendChild(cella);
        }
        tablatorzs.appendChild(sor);
    }
}*/
