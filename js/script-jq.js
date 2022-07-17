
function startmenu() {
  var x = document.getElementById("startmenu");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function startmenuclose() {
  var x = document.getElementByID("startmenu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "none";
  }
}

target = $("#app-test");
Draggable.create(target, { trigger: "#app-title-test" });

function taskbuttontest() {
  var x = document.getElementById("taskbutton-test");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function taskbuttontestopen() {
  var x = document.getElementById("taskbutton-test");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "block";
  }
}
function apptesttog() {
  var x = document.getElementById("app-test");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function apptestopen() {
  var x = document.getElementById("app-test");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "block";
  }
}
function apptestclose() {
  var x = document.getElementById("app-test");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "none";
  }
}

function apptestrestoreb() {
  var x = document.getElementById("restoretest");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function apptestmaxb() {
  var x = document.getElementById("maxtest");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function apptestmax() {
  document.getElementById("app-test").style.cssText =
    "width: calc(100vw + 8px); height: calc(100vh - 40px); position: fixed; top: -24px; left: -24px;";
}

function apptestrestore() {
  document.getElementById("app-test").style.cssText =
    "width: calc(70vw); height: calc(70vh); position: absolute; top: calc(50% - 35vh) ; left: calc(50% - 35vw);";
}


target = $("#open-note");
Draggable.create(target, { trigger: "#app-title-open-note"});

function taskbuttonopen() {
  var x = document.getElementById("taskbutton-open-note");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function taskbuttonopen() {
  var x = document.getElementById("taskbutton-open-note");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "block";
  }
}
function appopentog() {
  var x = document.getElementById("open-note");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function appopenopen() {
  var x = document.getElementById("open-note");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "block";
  }
}
function appopenclose() {
  var x = document.getElementById("open-note");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "none";
  }
}

function appopenrestoreb() {
  var x = document.getElementById("restoretest");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function appopenmaxb() {
  var x = document.getElementById("maxtest");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function appopenmax() {
  document.getElementById("open-note").style.cssText =
    "width: calc(100vw + 8px); height: calc(100vh - 40px); position: fixed; top: -24px; left: -24px;";
}

function appopenrestore() {
  document.getElementById("open-note").style.cssText =
    "width: calc(70vw); height: calc(70vh); position: absolute; top: calc(50% - 35vh) ; left: calc(50% - 35vw);";
}



target = $("#app-media");
Draggable.create(target, { trigger: "#app-title-media" });

function taskbuttonmedia() {
  var x = document.getElementById("taskbutton-media");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function taskbuttonmediaopen() {
  var x = document.getElementById("taskbutton-media");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "block";
  }
}
function appmediatog() {
  var x = document.getElementById("app-media");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function appmediaopen() {
  var x = document.getElementById("app-media");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "block";
  }
}
function appmediaclose() {
  var x = document.getElementById("app-media");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "none";
  }
}

function appmediarestoreb() {
  var x = document.getElementById("restoremedia");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function appmediamaxb() {
  var x = document.getElementById("maxmedia");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function appmediamax() {
  document.getElementById("app-media").style.cssText =
    "width: calc(100vw + 8px); height: calc(100vh - 40px); position: fixed; top: -24px; left: -24px;";
}

function appmediarestore() {
  document.getElementById("app-media").style.cssText =
    "width: calc(70vw); height: calc(70vh); position: absolute; top: calc(50% - 35vh) ; left: calc(50% - 35vw);";
}

target = $("#app-browser");
Draggable.create(target, { trigger: "#app-title-browser" });

function taskbuttonbrowser() {
  var x = document.getElementById("taskbutton-browser");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function taskbuttonbrowseropen() {
  var x = document.getElementById("taskbutton-browser");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "block";
  }
}
function appbrowsertog() {
  var x = document.getElementById("app-browser");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function appbrowseropen() {
  var x = document.getElementById("app-browser");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "block";
  }
}
function appbrowserclose() {
  var x = document.getElementById("app-browser");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "none";
  }
}

function appbrowserrestoreb() {
  var x = document.getElementById("restorebrowser");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function appbrowsermaxb() {
  var x = document.getElementById("maxbrowser");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function appbrowsermax() {
  document.getElementById("app-browser").style.cssText =
    "width: calc(100vw + 8px); height: calc(100vh - 40px); position: fixed; top: -24px; left: -24px;";
}

function appbrowserrestore() {
  document.getElementById("app-browser").style.cssText =
    "width: calc(70vw); height: calc(70vh); position: absolute; top: calc(50% - 35vh) ; left: calc(50% - 35vw);";
}



target = $("#app-paint");
Draggable.create(target, { trigger: "#app-title-paint" });

function taskbuttonpaint() {
  var x = document.getElementById("taskbutton-paint");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function taskbuttonpaintopen() {
  var x = document.getElementById("taskbutton-paint");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "block";
  }
}
function apppainttog() {
  var x = document.getElementById("app-paint");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function apppaintopen() {
  var x = document.getElementById("app-paint");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "block";
  }
}
function apppaintclose() {
  var x = document.getElementById("app-paint");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "none";
  }
}

function apppaintrestoreb() {
  var x = document.getElementById("paint");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function apppaintmaxb() {
  var x = document.getElementById("paint");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function apppaintmax() {
  document.getElementById("app-paint").style.cssText =
    "width: calc(100vw + 8px); height: calc(100vh - 40px); position: fixed; top: -24px; left: -24px;";
}

function apppaintrestore() {
  document.getElementById("app-paint").style.cssText =
    "width: calc(70vw); height: calc(70vh); position: absolute; top: calc(50% - 35vh) ; left: calc(50% - 35vw);";
}


const tools = document.getElementById("tools");
const c1 = document.getElementById("c1");
const c2 = document.getElementById("c2");
const ctx1 = c1.getContext("2d");
const ctx2 = c2.getContext("2d");
const right = document.getElementById("right");
const stroke = 5;
const eraser = 30;
let origin = { x: 0, y: 0 };
const current = { x: 0, y: 0 };
const last = { x: 0, y: 0 };
const selection = { x: 0, y: 0, w: 0, y: 0, data: null };

const config = {
  color: "#000",
  action: "pencil"
};

selectAction("pencil");
update();


let down = false;
let canDrawSelection = true;

c1.addEventListener("mousedown", e => {
  down = true;
  
  const x = Math.ceil(e.offsetX / stroke) * stroke;
  const y = Math.ceil(e.offsetY / stroke) * stroke;
  
  origin = ceil(e.offsetX, e.offsetY);
  
  if ( config.action === "pencil" ) {
    draw(e);
  }
  
  if ( config.action === "erase" ) {
    erase(x - (eraser / 2), y - (eraser / 2));
  }
  
  if ( config.action === "fill" ) {
    // ctx1.fillStyle = config.color;
    // ctx1.fillRect(0,0,c1.width,c1.height);
    
    floodFill(origin.x, origin.y, config.color, 1);
  }
  
  if ( config.action === "dropper" ) {
    const hex = dropper(e);
    
    const selection = document.getElementById("selection");
    const buttons = [...selection.getElementsByTagName("button")];
    
    for ( const button of buttons ) {
      if ( button.dataset.color === hex ) {
        const color = button.className.replace("color ", "");

        document.getElementById("foreground").firstElementChild.className = `color ${color}`;

        config.color = button.dataset.color;
      }
    }
  }
  
  
  if ( config.action === "select" ) {
    if ( selection.data ) {
      selection.dragging = inSelection(e);
    } else {
      selection.active = true;
    }
  }
});

c1.addEventListener("mousemove", e => {
  last.x = current.x;
  last.y = current.y;

  current.x = e.offsetX;
  current.y = e.offsetY;
  draw(e);
});

window.addEventListener("mouseup", e => {
  const canvas = e.target.closest("canvas");
  
  if ( canvas ) {
    ctx2.clearRect(0, 0, c2.width, c2.height);

    if ( config.action === "line" ) {
      const o1 = ceil(origin.x-stroke,origin.y-stroke);
      const o2 = ceil(e.offsetX-stroke,e.offsetY-stroke);

      brezLine(o1.x,o1.y,o2.x,o2.y, ctx1);      
    }
    
    if ( config.action === "square" ) {
      drawSquare(ctx1);
    }
    
    if ( config.action === "circle" ) {
      drawCircle(ctx1);
    }
    
    if ( config.action === "select" ) {
      
      console.log(selection)
      if ( Math.abs(selection.w) <= 0 || Math.abs(selection.h) <= 0 ) {
        ctx2.clearRect(0,0,c2.width,c2.height);
        selection.active = false;
        selection.dragging = false;
        selection.data = null;
        selection.x = 0;
        selection.y = 0;
        selection.w = 0;
        selection.h = 0;        
        return;
      }
      
      if ( selection.active ) {
        
        selection.x = origin.x;
        selection.y = origin.y;
        selection.w = current.x - origin.x;
        selection.h = current.y - origin.y;
        
        drawSelection(selection.x, selection.y, selection.w, selection.h);        
        selection.data = ctx1.getImageData(selection.x, selection.y, selection.w, selection.h);
          
        ctx2.putImageData(selection.data, selection.x, selection.y);
        
        selection.active = false
      }
      
      if ( selection.dragging ) {
        ctx1.putImageData(selection.data, selection.x + (current.x - origin.x), selection.y + (current.y - origin.y));
        
        selection.data = null;
        selection.x = 0;
        selection.y = 0;
        selection.w = 0;
        selection.h = 0;
      }
      
      selection.active = false
      selection.dragging = false
    }
  }
  
  down = false;
});

window.addEventListener("resize", update);

function update() {
  const rect = right.getBoundingClientRect();

  c1.width = c2.width = rect.width - 10;
  c1.height = c2.height = rect.height - 10;
  
  ctx1.fillStyle = "#fff";
  ctx1.fillRect(0, 0, c1.width, c1.height); 
}

function selectAction(action) {
  const last = config.action;
  config.action = action;
  
  right.classList.remove(last);
  right.classList.add(action);
  
  const buttons = [...tools.getElementsByTagName("button")];

  for ( const button of buttons ) {
    button.classList.toggle("active", button.dataset.action === action);
  } 
}

function draw(e) {
  const pos = ceil(e.offsetX, e.offsetY);
  
  ctx2.setLineDash([]);
  
  if ( down ) {
    if ( config.action === "pencil" ) {
      const l = ceil(last.x - stroke, last.y - stroke);
      const p =  ceil(e.offsetX - stroke, e.offsetY - stroke);
      brezLine(
        l.x,
        l.y,
        p.x,
        p.y,
        ctx1
      );
    }
    
    if ( config.action === "line" ) {
      const o1 = ceil(origin.x-stroke,origin.y-stroke);
      const o2 = ceil(e.offsetX-stroke,e.offsetY-stroke);
      ctx2.clearRect(0, 0, c2.width, c2.height);
      brezLine(o1.x,o1.y,o2.x,o2.y, ctx2);
    }
    
    if ( config.action === "square" ) {
      drawSquare(ctx2);
    }
    
    
    if ( config.action === "circle" ) {
      drawCircle(ctx2);
    }   
    
    if ( config.action === "select" ) {
      ctx2.clearRect(0, 0, c2.width, c2.height);
      
      if ( selection.active ) {
        selection.x = origin.x;
        selection.y = origin.y;
        selection.w = current.x - origin.x;
        selection.h = current.y - origin.y;
        
        drawSelection(selection.x, selection.y, selection.w, selection.h);
      }
      
      if ( selection.dragging ) {
        if ( selection.data ) {
          ctx1.clearRect(selection.x, selection.y, selection.w, selection.h);
          ctx2.putImageData(selection.data, selection.x + (current.x - origin.x), selection.y + (current.y - origin.y));
          drawSelection(selection.x + (current.x - origin.x), selection.y + (current.y - origin.y), selection.w, selection.h);
        }
      }
    }
  } else {
    if ( config.action === "pencil" || config.action === "line" || config.action === "square" ) {
      ctx2.clearRect(0, 0, c2.width, c2.height);
      const l = ceil(last.x - stroke, last.y - stroke);
      pixel(l.x,l.y,ctx2);
    }
  }
  
  if ( config.action === "dropper" ) {
    ctx2.clearRect(0, 0, c2.width, c2.height);
    ctx2.beginPath();
    ctx2.lineWidth = 1;
    ctx2.rect(pos.x - 0.5, pos.y - 0.5, stroke, stroke);
    ctx2.stroke();
    ctx2.closePath();   
  }
  
  if ( config.action === "erase" ) {
    ctx2.clearRect(0, 0, c2.width, c2.height);
    if ( down ) {
      erase(pos.x - (eraser / 2), pos.y - (eraser / 2));
    }
    
    ctx2.beginPath();
    ctx2.rect(pos.x - (eraser / 2), pos.y - (eraser / 2), eraser, eraser);
    ctx2.stroke();
    ctx2.closePath();
  }
}

function drawCircle(ctx) {
  ctx2.clearRect(0, 0, c2.width, c2.height);
  
  ctx.beginPath();
  ctx.ellipse(
    current.x,
    current.y,
    (current.x - origin.x),
    (current.y - origin.y),
    0, 0, 2 * Math.PI
  );
  ctx.stroke();
}

function drawSquare(ctx) {
  ctx2.clearRect(0, 0, c2.width, c2.height);
  const s = ceil(current.x - origin.x, current.y - origin.y);
  ctx.beginPath();
  ctx.lineWidth = stroke;
  ctx.strokeStyle = config.color;
  ctx.rect(origin.x-(stroke / 2), origin.y-(stroke / 2), s.x, s.y);
  ctx.stroke();
  ctx.closePath();  
}

function drawSelection(x, y, w, h) {
  ctx2.setLineDash([5, 5]);
  ctx2.lineWidth = 1;
  ctx2.strokeStyle = "#000";
  ctx2.beginPath();
  ctx2.rect(x-0.5, y-0.5, w, h);
  ctx2.stroke();
  ctx2.closePath(); 
}

function erase(x,y) {
  ctx1.fillStyle = "#fff";
  ctx1.fillRect(x, y, eraser, eraser);  
}

tools.addEventListener("click", selectTool, false);

function selectTool(e) {
  const button = e.target.closest("button");
  
  if ( "action" in button.dataset && !button.disabled ) {
    selectAction(button.dataset.action);
  }
}

const select = document.getElementById("selection");

select.addEventListener("click", selectColor, false);

function selectColor(e) {
  const button = e.target.closest("button");
  
  if ( button ) {
    const color = button.className.replace("color ", "");
    
    document.getElementById("foreground").firstElementChild.className = `color ${color}`;
    
    config.color = button.dataset.color;
  }
}

function rgbToHex(r, g, b) {
  if (r > 255 || g > 255 || b > 255)
      throw "Invalid color component";
  return ((r << 16) | (g << 8) | b).toString(16);
}

function pixel(x, y, ctx) {
    ctx.fillStyle = config.color;
    ctx.fillRect(x, y, stroke, stroke);
}

function brezLine(x1, y1, x2, y2, ctx) {

    // Iterators, counters required by algorithm
    let x, y, dx, dy, dx1, dy1, px, py, xe, ye, i;

    // Calculate line deltas
    dx = x2 - x1;
    dy = y2 - y1;

    // Create a positive copy of deltas (makes iterating easier)
    dx1 = Math.abs(dx);
    dy1 = Math.abs(dy);

    // Calculate error intervals for both axis
    px = 2 * dy1 - dx1;
    py = 2 * dx1 - dy1;

    // The line is X-axis dominant
    if (dy1 <= dx1) {

        // Line is drawn left to right
        if (dx >= 0) {
            x = x1;
            y = y1;
            xe = x2;
        } else { // Line is drawn right to left (swap ends)
            x = x2;
            y = y2;
            xe = x1;
        }

        pixel(x, y, ctx); // Draw first pixel

        // Rasterize the line
        for (i = 0; x < xe; i++) {
            x = x + stroke;

            // Deal with octants...
            if (px < 0) {
                px = px + 2 * dy1;
            } else {
                if ((dx < 0 && dy < 0) || (dx > 0 && dy > 0)) {
                    y = y + stroke;
                } else {
                    y = y - stroke;
                }
                px = px + 2 * (dy1 - dx1);
            }

            // Draw pixel from line span at
            // currently rasterized position
            pixel(x, y, ctx);
        }

    } else { // The line is Y-axis dominant

        // Line is drawn bottom to top
        if (dy >= 0) {
            x = x1;
            y = y1;
            ye = y2;
        } else { // Line is drawn top to bottom
            x = x2;
            y = y2;
            ye = y1;
        }

        pixel(x, y, ctx); // Draw first pixel

        // Rasterize the line
        for (i = 0; y < ye; i++) {
            y = y + stroke;

            // Deal with octants...
            if (py <= 0) {
                py = py + 2 * dx1;
            } else {
                if ((dx < 0 && dy < 0) || (dx > 0 && dy > 0)) {
                    x = x + stroke;
                } else {
                    x = x - stroke;
                }
                py = py + 2 * (dx1 - dy1);
            }

            // Draw pixel from line span at
            // currently rasterized position
            pixel(x, y, ctx);
        }
    }
}

function dropper(e) {
  const pos = ceil(e.offsetX, e.offsetY);
  const pixelData = ctx1.getImageData(pos.x, pos.y, 1, 1).data; 
  return "#" + ("000000" + rgbToHex(pixelData[0], pixelData[1], pixelData[2])).slice(-6);
}

function hexToRgbA(hex, opacity) {
        var h=hex.replace('#', '');
        h =  h.match(new RegExp('(.{'+h.length/3+'})', 'g'));

        for(var i=0; i<h.length; i++)
            h[i] = parseInt(h[i].length==1? h[i]+h[i]:h[i], 16);

        if (typeof opacity != 'undefined')  h.push(opacity);

        return 'rgba('+h.join(',')+')';
}

var getPixelPos = function (x, y) {
  return (y * c1.width + x) * 4;
};

var matchStartColor = function (data, pos, startColor) {
  return (data[pos]   === startColor.r &&
          data[pos+1] === startColor.g &&
          data[pos+2] === startColor.b &&
          data[pos+3] === startColor.a);
};

var colorPixel = function (data, pos, color) {
  data[pos] = color.r || 0;
  data[pos+1] = color.g || 0;
  data[pos+2] = color.b || 0;
  data[pos+3] = color.hasOwnProperty("a") ? color.a : 255;
};

// http://www.williammalone.com/articles/html5-canvas-javascript-paint-bucket-tool/
var floodFill = function (startX, startY, fillColor) {
  fillColor = hexToRgbA(fillColor, 1);
  var canvas = c1;
  var ctx = ctx1;
  //var srcImg = ctx.getImageData(0,0,canvas.width,canvas.height);
  //var srcData = srcImg.data;
  var dstImg = ctx.getImageData(0,0,canvas.width,canvas.height);
  var dstData = dstImg.data;
  
  var startPos = getPixelPos(startX, startY);
  var startColor = {
    r: dstData[startPos],
    g: dstData[startPos+1],
    b: dstData[startPos+2],
    a: dstData[startPos+3]
  };
  var todo = [[startX,startY]];
  
  while (todo.length) {
    var pos = todo.pop();
    var x = pos[0];
    var y = pos[1];    
    var currentPos = getPixelPos(x, y);
    
    while((y-- >= 0) && matchStartColor(dstData, currentPos, startColor)) {
      currentPos -= canvas.width * 4;
    }
    
    currentPos += canvas.width * 4;
    ++y;
    var reachLeft = false;
    var reachRight = false;
    
    while((y++ < canvas.height-1) && matchStartColor(dstData, currentPos, startColor)) {
    
      colorPixel(dstData, currentPos, fillColor);
      
      if (x > 0) {
        if (matchStartColor(dstData, currentPos-4, startColor)) {
          if (!reachLeft) {
            todo.push([x-1, y]);
            reachLeft = true;
          }
        }
        else if (reachLeft) {
          reachLeft = false;
        }
      }
      
      if (x < canvas.width-1) {
        if (matchStartColor(dstData, currentPos+4, startColor)) {
          if (!reachRight) {
            todo.push([x+1, y]);
            reachRight = true;
          }
        }
        else if (reachRight) {
          reachRight = false;
        }
      }

      currentPos += canvas.width * 4;
    }
  }
  
  ctx.putImageData(dstImg,0,0);
};
        
// keep coords on grid
function ceil(x,y) {
  return {
    x: Math.ceil(x / stroke) * stroke,
    y: Math.ceil(y / stroke) * stroke
  };
}

function inSelection(e) {
  return e.offsetX > selection.x && e.offsetX < selection.x + selection.w &&
         e.offsetY > selection.y && e.offsetY < selection.y + selection.h;  
}

target = $("#app-FolderDoc");
Draggable.create(target, { trigger: "#app-title-FolderDoc" });

function taskbuttonFolderDoc() {
  var x = document.getElementById("taskbutton-FolderDoc");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function taskbuttonFolderDocopen() {
  var x = document.getElementById("taskbutton-FolderDoc");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "block";
  }
}
function appFolderDoctog() {
  var x = document.getElementById("app-FolderDoc");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function appFolderDocopen() {
  var x = document.getElementById("app-FolderDoc");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "block";
  }
}
function appFolderDocopen_1() {
  var x = document.getElementById("app-FolderDoc_1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "block";
  }
}
function appFolderDocopen_2() {
  var x = document.getElementById("app-FolderDoc_2");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "block";
  }
}
function appFolderDocopen_3() {
  var x = document.getElementById("app-FolderDoc_3");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "block";
  }
}
function appFolderDocopen_4() {
  var x = document.getElementById("app-FolderDoc_4");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "block";
  }
}
function appFolderDocopen_5() {
  var x = document.getElementById("app-FolderDoc_5");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "block";
  }
}
function appFolderDocopen_66() {
  var x = document.getElementById("app-FolderDoc_6");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "block";
  }
}
function appFolderDocclose() {
  var x = document.getElementById("app-FolderDoc");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "none";
  }
}

function appFolderDocrestoreb() {
  var x = document.getElementById("restoreFolderDoc");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function appFolderDocmaxb() {
  var x = document.getElementById("maxFolderDoc");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function appFolderDocmax() {
  document.getElementById("app-FolderDoc").style.cssText =
    "width: calc(100vw + 8px); height: calc(100vh - 40px); position: fixed; top: -24px; left: -24px;";
}

function appFolderDocrestore() {
  document.getElementById("app-FolderDoc").style.cssText =
    "width: calc(70vw); height: calc(70vh); position: absolute; top: calc(50% - 35vh) ; left: calc(50% - 35vw);";
}

target = $("#app-welcome");
Draggable.create(target, { trigger: "#app-title-welcome" });

function taskbuttonwelcome() {
  var x = document.getElementById("taskbutton-welcome");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function taskbuttonroyal() {
  var x = document.getElementById("taskbutton-welcome");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function taskbuttonminty() {
  var x = document.getElementById("taskbutton-welcome");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function taskbuttongreatest() {
  var x = document.getElementById("taskbutton-welcome");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function taskbuttoncats() {
  var x = document.getElementById("taskbutton-welcome");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function taskbuttontrash() {
  var x = document.getElementById("taskbutton-welcome");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function taskbuttonvideo() {
  var x = document.getElementById("taskbutton-welcome");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function appwelcometog() {
  var x = document.getElementById("app-welcome");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function appwelcomeopen() {
  var x = document.getElementById("app-welcome");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "block";
  }
}
function appwelcomeclose_1() {
  var x = document.getElementById("app-welcome");

  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "none";
  }
}
function appwelcomeclose_2() {
  var x = document.getElementById("app-FolderDoc");

  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "none";
  }
}
function appwelcomeclose_3() {
  var x = document.getElementById("app-FolderDoc_1");

  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "none";
  }
}
function appwelcomeclose_4() {
  var x = document.getElementById("app-FolderDoc_2");

  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "none";
  }
}
function appwelcomeclose_5() {
  var x = document.getElementById("app-FolderDoc_3");

  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "none";
  }
}
function appwelcomeclose_6() {
  var x = document.getElementById("app-FolderDoc_4");

  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "none";
  }
}
function appwelcomeclose_7() {
  var x = document.getElementById("app-FolderDoc_5");

  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "none";
  }
}
function appwelcomeclose_8() {
  var x = document.getElementById("app-FolderDoc_6");

  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "none";
  }
}
function appwelcomeclose_9() {
  var x = document.getElementById("app-FolderDoc_6-1");

  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "none";
  }
}
function appwelcomerestoreb() {
  var x = document.getElementById("restorewelcome");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function appwelcomemaxb() {
  var x = document.getElementById("maxwelcome");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function appwelcomemax() {
  document.getElementById("app-welcome").style.cssText =
    "width: calc(100vw + 8px); height: calc(100vh - 40px); position: fixed; top: -24px; left: -24px;";
}

function appwelcomerestore() {
  document.getElementById("app-welcome").style.cssText =
    "width: calc(70vw); height: calc(70vh); position: absolute; top: calc(50% - 35vh) ; left: calc(50% - 35vw);";
}

target = $("#app-calc");
Draggable.create(target, { trigger: "#app-title-calc" });

function taskbuttoncalc() {
  var x = document.getElementById("taskbutton-calc");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function taskbuttoncalcopen() {
  var x = document.getElementById("taskbutton-calc");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "block";
  }
}

function appcalctog() {
  var x = document.getElementById("app-calc");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function appcalcopen() {
  var x = document.getElementById("app-calc");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "block";
  }
}
function appcalcclose() {
  var x = document.getElementById("app-calc");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "none";
  }
}

function appcalcrestoreb() {
  var x = document.getElementById("restorecalc");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function appcalcmaxb() {
  var x = document.getElementById("maxcalc");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function appcalcmax() {
  document.getElementById("app-calc").style.cssText =
    "width: calc(100vw + 8px); height: calc(100vh - 40px); position: fixed; top: -24px; left: -24px;";
}

function appcalcrestore() {
  document.getElementById("app-calc").style.cssText =
    "width: calc(70vw); height: calc(70vh); position: absolute; top: calc(50% - 35vh) ; left: calc(50% - 35vw);";
}

function toggleFullScreen() {
  if (
    (document.fullScreenElement && document.fullScreenElement !== null) ||
    (!document.mozFullScreen && !document.webkitIsFullScreen)
  ) {
    if (document.documentElement.requestFullScreen) {
      document.documentElement.requestFullScreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullScreen) {
      document.documentElement.webkitRequestFullScreen(
        Element.ALLOW_KEYBOARD_INPUT
      );
    }
  } else {
    if (document.cancelFullScreen) {
      document.cancelFullScreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    }
  }
}

function dis(val) {
  document.getElementById("result").value += val;
}

//function that evaluates the digit and return result
function solve() {
  let x = document.getElementById("result").value;
  let y = eval(x);
  document.getElementById("result").value = y;
}

//function that clear the display
function clr() {
  document.getElementById("result").value = "";
}


target = $("#app-terminal");
Draggable.create(target, { trigger: "#app-title-terminal" });

function taskbuttonterminal() {
  var x = document.getElementById("taskbutton-terminal");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function taskbuttonterminalopen() {
  var x = document.getElementById("taskbutton-terminal");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "block";
  }
}
function appterminaltog() {
  var x = document.getElementById("app-terminal");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function appterminalopen() {
  var x = document.getElementById("app-terminal");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "block";
  }
}
function appterminalclose() {
  var x = document.getElementById("app-terminal");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "none";
  }
}

function appterminalrestoreb() {
  var x = document.getElementById("restoreterminal");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function appterminalmaxb() {
  var x = document.getElementById("maxterminal");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function appterminalmax() {
  document.getElementById("app-terminal").style.cssText =
    "width: calc(100vw + 8px); height: calc(100vh - 40px); position: fixed; top: -24px; left: -24px;";
}

function appterminalrestore() {
  document.getElementById("app-terminal").style.cssText =
    "width: calc(70vw); height: calc(70vh); position: absolute; top: calc(50% - 35vh) ; left: calc(50% - 35vw);";
}






// JavaScript Document
$(document).ready(function(e) {
   var faviconnumber = 1;
  function favicon() {
    favicon = favicon == 1 ? 2 : 1;
    $('.favicon').attr('href','favicon' + favicon + ".png");
  }
   console.clear();
   var commandlist = [ /*Can be populated with various methods*/
      ["", "Type your response following the <b>></b> sign, and press enter."],
      ["", "Enter your answers to the puzzles in this terminal."],
      ["type <b>help</b> to", "Show avaliable commands."],
      ["type <b>list</b>", "List all assets of this system."],
      ["type <b>clear</b>", "Clear the console"],
   ];
   var previouscommands = [];
   var currentcommand = 0;
   var pages = [ /*Can be populated with various methods*/
      ["about", "dsan dfn zni rbcc", "If you dont know what this is, you are in the wrong place."],
   ];
   var pageindex = ["index", "about", "connect"];
   var currentpage = "landing";
   var url = "http://www.dsandfnznirbcc.com/"

   function init() {
      setInterval(time);
      console.clear();
      console.log(new Date().getTime());
    urlvars();
      log("", "For help type 'help' and press enter.");
    setInterval(favicon,500);
      log("", "Enter your response here:"); 
   }

   function urlvars() {
     var pagelocs = window.location.pathname.replace("/","").split("/");
     var pageloc = pagelocs[0];
     console.log(pageloc);
     //alert();
    if(pageloc != "") {
            if ($.inArray(pageloc, pageindex) >= 0) {
               currentpage = pageloc;
            }
    }
        
    if(pageloc == "") {
          log("", "Enter your response here:"); 
    }
   }
   function getParam(name){
    name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
    var regexS = "[\\?&]"+name+"=([^&#]*)";
    var regex = new RegExp( regexS );
    var results = regex.exec (window.location.href);
    if (results == null) {
      return "";
    }
    else  {
      return results[1];
    }
  }

   function log(name, information) {
      var d = new Date();
      var hours = ((d.getHours() < 10) ? "0" : "") + d.getHours();
      var minutes = ((d.getMinutes() < 10) ? "0" : "") + d.getMinutes();
      var seconds = ((d.getSeconds() < 10) ? "0" : "") + d.getSeconds();
      var colour = "whitet";
      var textcolour = "";
      var postcolour = "";

      switch (name[0]) {
         case "!":
            postcolour = " important";
            name = name.substr(1);
            break;
      }
      switch (name) {
         case "Website":
            colour = "redt";
            break;
         case "Server":
            colour = "bluet";
            break;
         case "Client":
            colour = "bluet";
            break;
         case "User":
            colour = "greent";
            postcolour = " selft";
            break;
      }
      if (information[0] == "A" && information[1] == "!") {
         information = information.substr(2);
         information = information.replace(/ /g, '\u00A0');
      }
      if (information[0] == "E" && information[1] == "!") {
         information = information.substr(2);
         postcolour = " important";
      }

      while (information.indexOf("](") >= 0) { //URL parser

         var NAMEregExp = /\(([^)]+)\)/;
         var uname = NAMEregExp.exec(information)[1];

         var URLregExp = /\[([^)]+)\]/;
         var url = URLregExp.exec(information)[1];
         var newpage = false;
         if (url[0] == "^") {
            newpage = true;
            url = url.substr(1);
         }
         var start = information.indexOf("[");
         var end = information.indexOf(")");
         if (newpage) {
            information = information.replace(information.substring(start, end + 1), "").splice(start, 0, '<a href="' + url + '" target="_blank">' + uname + '</a>');
         } else {
            information = information.replace(information.substring(start, end + 1), "").splice(start, 0, '<a href="' + url + '">' + uname + '</a>');
         }
         //information = '<a href="' + url + '">' + uname + '</a>'; //working

      }
      var tobold = true;
      var boldnumber = 0;
      for (var i = 0; i < information.length; i++) {
         if (information[i] == "*" && information[i - 1] != "*" && information[i + 1] != "*") {
            boldnumber++;
         }
      }
      while (information.indexOf("*") >= 0) { //Bold parser
         var pos = information.indexOf("*");
         information = information.replace("*", "");
         if (tobold) {
            information = information.splice(pos, 0, '<b>');
         } else {
            information = information.splice(pos, 0, '</b>');
         }
         tobold = !tobold;
         if (tobold && boldnumber <= 1) {
            break;
         }
         //information = '<a href="' + url + '">' + uname + '</a>'; //working
      }
      var tounderline = true;
      var underlinenumber = 0;
      for (var i = 0; i < information.length; i++) {
         if (information[i] == "*" && information[i - 1] != "*" && information[i + 1] != "*") {
            underlinenumber++;
         }
      }
      while (information.indexOf("**") >= 0) { //Bold parser
         var pos = information.indexOf("**");
         information = information.replace("**", "");
         if (tounderline) {
            information = information.splice(pos, 0, '<u>');
         } else {
            information = information.splice(pos, 0, '</u>');
         }
         tounderline = !tounderline;
         if (tounderline && underlinenumber <= 1) {
            break;
         }
         //information = '<a href="' + url + '">' + uname + '</a>'; //working
      } /**/
      $(".stream").append('<div class="line">' +
         '<p class="time">[' + hours + ":" + minutes + ":" + seconds + ']</p>' +
         '<p class="name ' + colour + '">' + name + '</p>' +
         '<p class="information' + postcolour + '">' + information + '</p>' +
         '</div>');
      $(document).scrollTop($(document).height() - $(window).height());
   }
  var timestring = "";
   function time() {
      var d = new Date();
      var hours = d.getHours();
      var minutes = d.getMinutes();
      var seconds = d.getSeconds();
      if (hours < 10) {
         hours = "0" + hours;
      }
      if (minutes < 10) {
         minutes = "0" + minutes;
      }
      if (seconds < 10) {
         seconds = "0" + seconds;
      }
    var temptimestring = "[" + hours + ":" + minutes + ":" + seconds + "]";
    if (temptimestring != timestring) {
      timestring = temptimestring;
        $(".editline .time").text(timestring);
    }
   }

   var ctrldown = false;
   $(".editline .edit").keydown(function(e) {
      var text = $(".editline .edit").text();
      console.log(e.which);
      if (e.which == 13 && text !== "" && !ctrldown) {
         var commands = text.split(' ');
         var output = "";
         if (commands[0] == "help") {
            text = "/" + text;
         }
         $(".editline .edit").text("");
         log("User", text);
         previouscommands[currentcommand] = text;
         currentcommand = previouscommands.length;
         $(".editline .edit").keydown(35);
         cmd(commands[0], text, commands);

      }
      if (e.which == 38) { //up
         if (currentcommand > 0) {
            currentcommand--;
            $(".editline .edit").text(previouscommands[currentcommand]);
         }
      }
      if (e.which == 40) { //down
         if (currentcommand < previouscommands.length) {
            currentcommand++;
            $(".editline .edit").text(previouscommands[currentcommand]);
         }
      }
   });

   function cmd(command, words, word) {
      switch (word[0]) {
         case "help":
            for (var i = 0; i < commandlist.length; i++) {
               output = commandlist[i][0] + "  " + commandlist[i][1];
               console.log(command[i][0]);
               log("Client" + "", output);
            }
            break;
         case "clear": 
            $(".stream").text("");
            break;
         case "list":
            $.each(pageindex, function(id, content) {
               log("Client", "" + content);
            });
            break;
         case "33": 
              log("Website", "" + "That is the correct answer!");
            break;
         case "49": 
              log("Website", "" + "You did not understand the hint.");
            break;
         default:
            output = "That is not correct.";
            log("Client", output);
      }
   }


   String.prototype.splice = function(idx, rem, str) {
      return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
   };
   init();
});

function BSOD() {
  var x = document.getElementById("BSOD");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "block";
  }
}

$("#id_of_textbox").keyup(function(event){
    if(event.keyCode == 13){
      $("#id_of_button").click();
      $(this).val('');
    }
});





