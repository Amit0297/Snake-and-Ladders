$(document).ready(function(){
    var player1 = 1;
    var player2 = 1;
    var pos = "#b";
    var posp = "";
    var posn = "";
    
    function dice_roll(dice_no, plyno){
        var player = "player"+plyno;
        posp=pos+eval(player);
        $(posp).removeClass(player);
        posn = pos+(eval(player)+dice_no);
        
        if(plyno == 1)
           { player1+=dice_no;
            if(player1 > 36)
                player1-=dice_no;
            else
                {
                    if(player1 == 36)
                    {
                        win(1);
                    }
                    else
                    {
                        snake(player1, 1);
                        ladder(player1, 1);
                        posn = pos+player1;
                    }
                }
            
            
           }
        else
        {
            player2+=dice_no;
            if(player2>36)
                player2-=dice_no;
            else
                {
                     if(player2 == 36)
                     {
                         win(2);
                     }
                    else
                    {
                        snake(player2, 2);
                        ladder(player2, 2);
                        posn = pos +player2;
                    }
                    
                }
           
        }
        $(posn).addClass(player);
    }
    
    function snake(position, plyno){
        switch(position)
            {
                case 11: if(plyno == 1)
                    player1=3;
                    else
                        player2=3;
                    
                    break;
                
                case 23: if(plyno ==1)
                    player1=16;
                    else
                        player2=16;
                    
                    break;
                    
                case 25:
                    if(plyno ==1 )
                        player1=20;
                    else
                        player2=20;
                    
                    break;
                    
                case 35: 
                    if(plyno == 1)
                        player1=28;
                    else
                        player2=28;
                    
                    break;
            }
        
    }
    function ladder(position, plyno){
        switch(position)
            {
                case 6: 
                    if(plyno == 1)
                        player1=18;
                    else
                        player2=18;
                    
                    break;
                
                case 12:
                    if(plyno == 1)
                        player1=19;
                    else
                        player2=19;
                    
                    break;
                
                case 15: 
                    if(plyno == 1)
                        player1=27;
                    else
                        player2=27;
                    
                    break;
            }
        
    }
    function win(plyno)
    {
        alert("Player"+plyno+"is the winner!");
        
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
                    $(res).hide(7000);
                    dice_roll(dice, 1);
                   var dice = Math.floor(Math.random()*6)+1;
                    dice_roll(dice, 2);
                    
                   
                });
                
            }
        
        
    });
    
 
});
