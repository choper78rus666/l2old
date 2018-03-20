(function(){
    'use strict';
            document.getElementById("pvp").addEventListener("click", pvp);
            document.getElementById("pk").addEventListener("click", pk);
            function pvp(){
                console.log("pvp");
                var elem = document.getElementById("pk");
                elem.style.background = "none";
                document.getElementById("pk").innerHTML = elem.innerHTML;
                elem = document.getElementById("pvp");
                elem.style.background = "rgba(0,0,0,.6)";
                document.getElementById("pvp").innerHTML = elem.innerHTML;
                elem = document.getElementById("toppk-list");
                elem.style.display = "none";
                document.getElementById("toppk-list").innerHTML = elem.innerHTML;
                elem = document.getElementById("toppvp-list");
                elem.style.display = "block";
                document.getElementById("toppvp-list").innerHTML = elem.innerHTML;
            };
            
            function pk(){
                console.log("pk");
                var elem = document.getElementById("pvp");
                elem.style.background = "none";
                document.getElementById("pvp").innerHTML = elem.innerHTML;
                elem = document.getElementById("pk");
                elem.style.background = "rgba(0,0,0,.6)";
                document.getElementById("pk").innerHTML = elem.innerHTML;
                elem = document.getElementById("toppvp-list");
                elem.style.display = "none";
                document.getElementById("toppvp-list").innerHTML = elem.innerHTML;
                elem = document.getElementById("toppk-list");
                elem.style.display = "block";
                document.getElementById("toppk-list").innerHTML = elem.innerHTML;
            };
}());