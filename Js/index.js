$(document).ready(function(){
    var player1_name=prompt("Please Enter your name", "Player1");
    var player2_name= "my Computer"
    $("#p1").html(player1_name);
    $("#p2").html(player2_name);
    var player1 = 1;
    var player2 = 1;
    var pos = "#b";
    var posp = "";
    var posn = "";
    $("#turn").html(player1_name+"'s turn!");
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
        if($(this).val() == 2)
            {
                player2_name = prompt("Enter your Name","Player2");
                $("#p2").html(player2_name);
                //to hide radio button
            }
                
        
        
    });
    var count = 1;
    
            $("#main_dice").click(function(){
                if($("#play2").is(':checked')){
                    var dice_result= dice_no_generate();
                    dice_roll(dice_result, count);
                    
                    if(count == 1)
                        {
                            $("#res1").show();
                            $("#res1").html(dice_result);
                         count=2;
                         $("#res1").hide(8000);
                        }
                        
                    else
                        if(count ==2)
                            {
                                $("#res2").show();
                                $("#res2").html(dice_result);
                                count=2;
                                $("#res2").hide(8000);
                            }
                    
                    toggle_dice();
                    toggle_players();
                    $("#res1").html()
                }
                else
                    if($("#play1").is(':checked')){
                        var dice_result= dice_no_generate();
                        dice_roll(dice_result, 1);
                        toggle_dice();
                        toggle_players();
                        $("#res1").show();
                        $("#res1").html(dice_result);
                        $("#res1").hide(8000);
                    
                        dice_result = Math.floor(Math.random()*6)+1;
                        dice_roll(dice_result, 2);
                        toggle_players();
                        $("#res2").show();
                        $("#res2").html(dice_result);
                        $("#res2").hide(8000);
                        
                }
               
        });
    
            
            function dice_no_generate(){
                 $("#moving_dice").show(2000);
                    $("#moving_dice").hide(4000);
                    var dice = Math.floor(Math.random()*6)+1;
                    var res = "#dice"+dice;
                    $(res).show(6000);
                    $(res).hide(7000);
                return dice;
            }
        
   
        
        
    setTimeout(hide_options, 10000);
    function hide_options()
    {
        $("#numberp").hide(1500);
    }
    function toggle_dice()
    {
        setTimeout(disable_dice, 100);
        setTimeout(enable_dice, 11000);
    }
    function disable_dice()
    {
        $("#main_dice").attr("disabled", "disabled");
    }
    function enable_dice()
    {
        $("#main_dice").removeAttr("disabled");
    }
    function toggle_players()
    {
        if($("#turn").html()== player1_name+"'s turn!")
            $("#turn").html(player2_name+"'s turn!");
        else
            $("#turn").html(player1_name+"'s turn!");
            
    }
    
 
});
