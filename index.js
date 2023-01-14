var http = require('http');
var url = require('url');
var fs = require('fs');
var sense = require("sense-hat-led").sync;

var server = http.createServer((req,res) => {
    if(req.method == 'GET') {
        var q = url.parse(req.url);
        if(q.pathname == '/') {
            fs.readFile('./serveur.html', (error, content) => {
                res.writeHead(200, {"Content-Type": "text/html"});
                res.write(content);
                res.end()
            });
        }
        else if(q.pathname == '/css/format.css') {
            fs.readFile('./css/format.css', function (err, data) {
                if (err) console.log(err);
                res.writeHead(200, {'Content-Type': 'text/css'});
                res.write(data);
                res.end();
            });
        }
        else if(q.pathname == '/images/logo.png') {
            fs.readFile('./images/logo.png', function (err, data) {
                if (err) console.log(err);
                res.writeHead(200, {'Content-Type': 'image/png'});
                res.write(data);
                res.end();
            });
        }
        else {
            res.end('URL path is undefined')
        }}
        else {
        res.end('GET not working, check your if else conditions')
    }
});

var io = require('socket.io')(server,{
    cors: {
      origin: "*",
      methods: ["GET","POST"]
    }});

io.sockets.on('connection', (socket) => {
    console.log('A client is connected');
    socket.on("infoarray", colors => {
        let color1 = color2 = color3 = color4 = color5 = duration = "";
        //format the receive value to be read by sensehat
        for (let i = 0;i<colors.length;i++){
            colors[i]=colors[i].replace("(","[");
            colors[i]=colors[i].replace(")","]");
            colors[i]=colors[i].replace("rgb","");
        }

        color1 = JSON.parse(colors[0].replace(/'/g, '"'));
        color2 = JSON.parse(colors[1].replace(/'/g, '"'));
        color3 = JSON.parse(colors[2].replace(/'/g, '"'));
        color4 = JSON.parse(colors[3].replace(/'/g, '"'));
        color5 = JSON.parse(colors[4].replace(/'/g, '"'));
        duration = parseInt(colors[5].slice(0,-7))/50;

        var pattern = [
            color1, color2, color3, color4, color5, color1, color2, color3,
            color1, color2, color3, color4, color5, color1, color2, color3,
            color1, color2, color3, color4, color5, color1, color2, color3,
            color1, color2, color3, color4, color5, color1, color2, color3,
            color1, color2, color3, color4, color5, color1, color2, color3,
            color1, color2, color3, color4, color5, color1, color2, color3,
            color1, color2, color3, color4, color5, color1, color2, color3,
            color1, color2, color3, color4, color5, color1, color2, color3
            ];
	chosenColor=[];
	chosenColor.push(color1);
	chosenColor.push(color2);
	chosenColor.push(color3);
	chosenColor.push(color4);
	chosenColor.push(color5);
	console.log(chosenColor);
	while(true){
	for (let i =0;i<5;i++){
	var periodic_pattern = [
    	chosenColor[i], chosenColor[i], chosenColor[i], chosenColor[i], chosenColor[i], chosenColor[i], chosenColor[i], chosenColor[i],
    	chosenColor[i], chosenColor[i], chosenColor[i], chosenColor[i], chosenColor[i], chosenColor[i], chosenColor[i], chosenColor[i],
    	chosenColor[i], chosenColor[i], chosenColor[i], chosenColor[i], chosenColor[i], chosenColor[i], chosenColor[i], chosenColor[i],
    	chosenColor[i], chosenColor[i], chosenColor[i], chosenColor[i], chosenColor[i], chosenColor[i], chosenColor[i], chosenColor[i],
    	chosenColor[i], chosenColor[i], chosenColor[i], chosenColor[i], chosenColor[i], chosenColor[i], chosenColor[i], chosenColor[i],
    	chosenColor[i], chosenColor[i], chosenColor[i], chosenColor[i], chosenColor[i], chosenColor[i], chosenColor[i], chosenColor[i],
    	chosenColor[i], chosenColor[i], chosenColor[i], chosenColor[i], chosenColor[i], chosenColor[i], chosenColor[i], chosenColor[i],
    	chosenColor[i], chosenColor[i], chosenColor[i], chosenColor[i], chosenColor[i], chosenColor[i], chosenColor[i], chosenColor[i]
    	];
    	sense.setPixels(periodic_pattern);
    	sense.sleep(duration);
	}
}
	//sense.setPixels(pattern);
    });
});

server.listen(4200);
