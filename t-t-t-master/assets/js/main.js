/*
 Created By Gavin Monroe
 Date: 1/13/18
 JSS

Tic Tac Toe - Main Script
 */
var paused = 0;
var playerTurn = 0;
var turns = 0;
//INPUT
function setSpot(spotID){
    var e = document.getElementById(spotID);
    if (e.className == "nSpot" && paused == 0){
        if (playerTurn == 0){
            //Set Object
            e.className = "xSpot";
            document.getElementById("pTurnImg").src = "assets/img/o.png";
            gameCheck();
            //Set Next Players Turn
            playerTurn = 1;
        }else{
            //Set Object
            e.className = "oSpot";
            document.getElementById("pTurnImg").src = "assets/img/x.png";
            gameCheck();
            //Set Next Players Turn
            playerTurn = 0;
        }
        turns += 1;
    }
}
function gameCheck(){
    var arrSpots = ['a1', 'a2', 'a3', 'b1', 'b2', 'b3', 'c1', 'c2', 'c3'];
    var arrFill = [0];
    var Filled = 1;
    for (var i = 0; i < arrSpots.length; i++) {
        var result = sqrChecked(arrSpots[i]);
        arrFill.push(result);
        if (result == 0){
            Filled = 0;
        }
    }
    if (Filled == 1){
        paused = 1;
        document.getElementById("pTurnImg").style.display = "none";
        document.getElementById("pTurnBef").innerHTML = "It's a Draw! <br/><a href='.'>Restart?<a>";
        document.getElementById("pTurnAft").innerHTML = "";
    }
    //Check Rows
    var top = rowCheck(arrFill[1], arrFill[2], arrFill[3]);//Top
    var mid = rowCheck(arrFill[4], arrFill[5], arrFill[6]);//Middle
    var bot = rowCheck(arrFill[7], arrFill[8], arrFill[9]);//Bottom
    //Check Cols
    var lef = rowCheck(arrFill[1], arrFill[4], arrFill[7]);//Left
    var cen = rowCheck(arrFill[2], arrFill[5], arrFill[8]);//Center
    var rig = rowCheck(arrFill[3], arrFill[6], arrFill[9]);//Right
    //Check Diagonals
    var dg1 = rowCheck(arrFill[1], arrFill[5], arrFill[9]);//Left Diagonal
    var dg2 = rowCheck(arrFill[3], arrFill[5], arrFill[7]);//Right Diagonal
    //Check for x
    if (top == 1 || mid == 1 || bot == 1 || lef == 1 || cen == 1 || rig == 1 || dg1 == 1 || dg2 == 1){
        document.getElementById("pTurnBef").innerHTML = "Congratulations,&nbsp; ";
        document.getElementById("pTurnImg").src = "assets/img/x.png";
        document.getElementById("pTurnImg").style.display = "inline-flex";
        document.getElementById("pTurnAft").innerHTML = " &nbsp;wins the game!  <br/><a href='.'>Restart?<a>";
        paused = 1;
    }
    //check for o
    if (top == 2 || mid == 2 || bot == 2 || lef == 2 || cen == 2 || rig == 2 || dg1 == 2 || dg2 == 2){
        document.getElementById("pTurnBef").innerHTML = "Congratulations,&nbsp;";
        document.getElementById("pTurnImg").src = "assets/img/o.png";
        document.getElementById("pTurnImg").style.display = "inline-flex";
        document.getElementById("pTurnAft").innerHTML = "&nbsp; wins the game!  <br/><a href='.'>Restart?<a>";
        paused = 1;
    }
}
function sqrChecked(spot){
    var e = document.getElementById(spot);
    //Return 0 = Blank, 1 = Cross, 2 = Circle
    if (e.className == "nSpot"){
        return 0;
    }else if (e.className == "xSpot"){
        return 1;
    }else if (e.className == "oSpot"){

        return 2;
    }
}
function rowCheck(sp1, sp2, sp3){
    //Return 0 = Blank, 1 = Cross, 2 = Circle
    if (sp1 == 1 && sp2 == 1 && sp3 == 1){
        return 1
    }
    if (sp1 == 2 && sp2 == 2 && sp3 == 2){
        return 2
    }
    return 0;
}

