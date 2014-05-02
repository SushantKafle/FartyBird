var bars = {
	
	X:0,
	Y:0,
	
	width:100,
	height: 200,
	
	draw : function (context,x,y,h)
	{
		this.X = x;
		this.Y = y;
		this.height = h;
		
		winW = $("#myCanvas").width();
		winH = $("#myCanvas").height();
		
		context.fillStyle = "#bebe9e";
		context.fillRect(this.X,0,this.width,this.Y);
		
		context.fillRect(this.X,this.Y+this.height,this.width,winH - (this.Y+this.height));
	},

}
