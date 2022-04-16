    canvas=document.getElementById("myCanvas");
    ctx=canvas.getContext("2d");

    
    var last_position_x,last_position_y;

    color="black";
    line_width=2;


    var width=screen.width;
    new_width=screen.width-70;
    new_height=screen.height-300;

    if(width<992){
        document.getElementById("myCanvas").width=new_width;
        document.getElementById("myCanvas").height=new_height;
        document.body.style.overflow="hidden"
    }
    canvas.addEventListener("touchstart",myTouchstart);

    function myTouchstart(e){
        console.log("myTouchstart");
        last_position_x=e.touches[0].clientX-canvas.offsetLeft;
        last_position_y=e.touches[0].clientY-canvas.offsetTop;

    }

   
    canvas.addEventListener("touchmove",mytouchmove);
    function mytouchmove(e){
    current_position_x=e.touches[0].clientX-canvas.offsetLeft;
    current_position_y=e.touches[0].clientY-canvas.offsetTop;

   

        ctx.beginPath();

        ctx.strokeStyle=color;
        ctx.lineWidth=line_width;

        console.log("last position of x and y coordinanates are");
        console.log("x= "+last_position_x+",y= "+last_position_y);
        ctx.moveTo(last_position_x,last_position_y);

        console.log("current position of x and y coordinanates are");
        console.log("x= "+current_position_x+",y="+current_position_y);
        ctx.lineTo(current_position_x,current_position_y);
        ctx.stroke();


    

    last_position_x=current_position_x;
    last_position_y=current_position_y;
    }
