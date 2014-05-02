var bird = {
	
	X:0,
	Y:0,
	
	height:50,
	width:50,
	
	count:0,
	
	draw: function(context,x,y){
	
		//this.clearTable(context);
		this.X=x;
		this.Y=y;

		if(this.count >= 0 && this.count < 5)
		{
			var img=document.getElementById("farty1");
			context.drawImage(img,this.X,this.Y);
		}else if(this.count >= 5 && this.count < 10)
		{
			var img=document.getElementById("farty");
			context.drawImage(img,this.X,this.Y);
		}else if(this.count >= 10 && this.count < 15)
		{
			var img=document.getElementById("farty2");
			context.drawImage(img,this.X,this.Y);
		}else
		{
			var img=document.getElementById("farty2");
			context.drawImage(img,this.X,this.Y);
			
			this.count = 0;
		}

		this.count +=1;
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
