$(document).ready(function(){
    var player1 = 1;
    var player2 = 1;
    var pos = "#b";
    var posp = "";
    var posn = "";
    
    function dice_roll(dice_no, plyno){
        var player = "player"+plyno;
        posp=pos+eval(player);
        alert(posp);
        $(posp).removeClass(player);
        alert(posp);
        posn = pos+(eval(player)+dice_no);
        
        if(plyno == 1)
            player1+=dice_no;
        else
            player2+=dice_no;
        
        posp=posn;
        alert(posn);
        $(posn).addClass(player);
    }
    
    function dice_move(){
        
    }
    $(".selector").click(function(){
        if($(this).val() == 1)
            {
                //to hide radio button
                $("#numberp").hide(2000);
                
                $("#main_dice").click(function(){
                    $("#moving_dice").show(2000);
                    $("#moving_dice").hide(4000);
                    var dice = Math.floor(Math.random()*6)+1;
                    var res = "#dice"+dice;
                    $(res).show(6000);
                    
                    dice_roll(dice, 1);
                   var dice = Math.floor(Math.random()*6)+1;
                    dice_roll(dice, 2);
                    
                   
                });
                
            }
        
        
    });
    
 
});
