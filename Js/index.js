$(document).ready(function(){
    var player1 = 1;
    var player2 = 1;
    var pos = "#b";
    var posp = pos+player1;
    var posn = "";
    
    function dice_roll(dice_no){
        alert('In function');
        $(posp).removeClass("player1");
        posn = pos+(player1+dice_no);
        player1+=dice_no;
        posp=posn;
        alert(posn);
        $(posn).addClass("player1");
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
                    
                    dice_roll(dice);
                   
                    
                   
                });
                
            }
        
        
    });
    
 
});