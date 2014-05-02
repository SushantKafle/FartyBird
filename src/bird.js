var bird = {
	
	X:0,
	Y:0,
	
	height:50,
	width:50,
	
	draw: function(context,x,y){
	
		//this.clearTable(context);
		this.X=x;
		this.Y=y;

		//context.fillStyle = "#000000";
		//context.fillRect(this.X,this.Y,this.width,this.height);

		var img=document.getElementById("farty");
		context.drawImage(img,this.X,this.Y);

			
	},
	
	clearTable: function(context)
	{
		context.fillStyle = "#459945";
		context.fillRect(0,0,$("#myCanvas").width(),$("#myCanvas").height());
	},

	drawFall: function(context)
	{
		
	}
}
