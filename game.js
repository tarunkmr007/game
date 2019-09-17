


    function init() {
 
      // Initialise our object
      obj = {x:50, y:50, w:250, h:250};
      var canvas = document.getElementById("dndcanvas");
      var zoom = document.getElementById("zoom");
      var zoomMobile = document.getElementById("zoomMobile");
      var zoomMobileCtx = zoomMobile.getContext("2d");
      var zoomCtx = zoom.getContext("2d");
      var ctx = canvas.getContext('2d');
      // canvas.width = window.innerWidth;
       canvas.height = window.innerHeight;
   
      // Add eventlistener to canvas
      canvas.addEventListener('touchmove', function(e) {
        //Assume only one touch/only process one touch even if there's more
        var touch = event.targetTouches[0];
        
        // Is touch close enough to our object?
        if(detectHit(obj.x, obj.y, touch.pageX, touch.pageY, obj.w, obj.h)) {


          

          // Assign new coordinates to our object
          obj.x = touch.pageX;
          obj.y = touch.pageY;
    
          zoomMobileCtx.fillStyle = "white";
         
          zoomMobileCtx.fillRect(0,0, zoom.width, zoom.height);
          zoomMobileCtx.drawImage(canvas, obj.x, obj.y, 200, 100, 0,0, 400, 300);
          
          zoomMobile.style.top = touch.pageY +50 + "px"
          zoomMobile.style.left = touch.pageX +50 + "px"
          zoomMobile.style.display = "block";

          // Redraw the canvas
          drawMobile();
          
        }
        e.preventDefault();
      }, false);

       function detectHit(x1,y1,x2,y2,w,h) {

          //Very simple detection here
          if(x2-x1>w) return false;
          if(y2-y1>h) return false;

          

          return true;
        }

      // touch start to get the magnify glass
     canvas.addEventListener("touchstart", function (e) {
      drawMobile();

      e.preventDefault();
    }, false);

     



      // Zoom effect for web
      canvas.addEventListener("mousemove", function(e){

          var mousePos = getMousePos(canvas, e);
          var one = document.getElementById('img1');
          console.log(mousePos.x);

           if(mousePos.x == 450 )
               {
                ctx.drawImage(one,450,30,80,80);
               }

          zoomCtx.fillStyle = "white";
         
          zoomCtx.fillRect(0,0, zoom.width, zoom.height);
          zoomCtx.drawImage(canvas, e.x, e.y, 200, 100, 0,0, 400, 200);
          
          zoom.style.top = e.pageY + 10 + "px"
          zoom.style.left = e.pageX + 10 + "px"
          zoom.style.display = "block";
      });

     

          function getMousePos(canvas, e) {
              var rect = canvas.getBoundingClientRect();
              return {
                  x: e.clientX - rect.left,
                  y: e.clientY - rect.top
              };

           }

            draw();
  }


	
  function draw() {
    canvas = document.getElementById("dndcanvas");
    
    ctx = canvas.getContext('2d');
    // ctx.canvas.width  = window.innerWidth;
     ctx.canvas.height = window.innerHeight;

 	  var img = document.getElementById('img');
 	  var scream = document.getElementById('scream');
    
 	  ctx.drawImage(scream,0,0,canvas.width, canvas.height);
    
    //ctx.drawImage(img,obj.x, obj.y, obj.w, obj.h);
  }

  function drawMobile() {
    canvas = document.getElementById("dndcanvas");
    
    ctx = canvas.getContext('2d');
    // ctx.canvas.width  = window.innerWidth;
     ctx.canvas.height = window.innerHeight;

    var img = document.getElementById('img');
    var scream = document.getElementById('scream');
    
    ctx.drawImage(scream,0,0,canvas.width, canvas.height);
    
    ctx.drawImage(img,obj.x, obj.y, 500, 500);
  }


 