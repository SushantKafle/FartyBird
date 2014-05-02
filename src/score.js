var score = {
	X:350,
	Y: 30,
	
	value:0,
	
	increase: function()
	{
		this.value += 2;
	},
	
	draw: function(context)
	{
		context.fillStyle="white";
		context.font="25px Purisa";
		context.fillText( "Score: "+this.value,this.X,this.Y);
	},

	resetVal: function()
	{
		this.value = 0;
	},

	getScore: function()
	{
		return this.value;
	}

}
