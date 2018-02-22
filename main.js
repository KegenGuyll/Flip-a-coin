var numberofflippes = 0;
var heads;
var tails;

function timesflipped() {


    numberofflippes = document.getElementById("usersumbit").value;
    heads = 0;
    tails = 0;

    if(numberofflippes == 0){
        alert("Make sure you enter a vaild number");
    }


}

function flip() {

    if(numberofflippes === 0){
        alert(" You can't click to flip till you sumbit a number");
    }

    for (i = 0; i < numberofflippes; i++) {
        var x = Math.floor((Math.random() * 2) + 1);
        console.log(x);
        var table = document.getElementById("myTable");
        var row = table.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);

        if (x === 1) {
            console.log("heads");
            cell1.innerHTML = "✔️";
            heads++;

        }

        if (x === 2) {
            console.log("tails");
            cell2.innerHTML = "✔";
            tails++;
        }

        if(i < numberofflippes){

            document.getElementById("winner").innerHTML = "Number of Heads: " + heads + " and " + "Number of Tails: " + tails;

        }

    }

}

