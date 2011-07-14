function Menu()
{	
	this.init();
}

Menu.prototype = 
{
	container: null,
	
	foregroundColor: null,
	
	selector: null,
	save: null,
	clear: null,
	about: null,
	
	init: function()
	{
		var option, space, separator, color_width = 20, color_height = 20;

		this.container = document.createElement("div");
		this.container.className = 'gui';
		this.container.style.position = 'absolute';
		this.container.style.bottom = '0px';
		
		this.foregroundColor = document.createElement("canvas");
		this.foregroundColor.style.marginBottom = '-3px';
		this.foregroundColor.style.cursor = 'pointer';
		this.foregroundColor.width = color_width;
		this.foregroundColor.height = color_height;
		this.container.appendChild(this.foregroundColor);
		
		this.setForegroundColor(COLOR);

		space = document.createTextNode(" ");
		this.container.appendChild(space);
		
		this.save = document.createElement("span");
		this.save.className = 'button';
        this.save.id = 'save';
		this.save.innerHTML = 'сохранить';
		this.container.appendChild(this.save);
		
		space = document.createTextNode(" ");
		this.container.appendChild(space);
		
		this.clear = document.createElement("Clear");
		this.clear.className = 'button';
        this.clear.id = 'clear';
		this.clear.innerHTML = 'очистить';
		this.container.appendChild(this.clear);

	},
	
	setForegroundColor: function( color )
	{
		var context = this.foregroundColor.getContext("2d");
		context.fillStyle = 'rgb(' + color[0] + ', ' + color[1] +', ' + color[2] + ')';
		context.fillRect(0, 0, this.foregroundColor.width, this.foregroundColor.height);
		context.fillStyle = 'rgba(255, 255, 255, 0.1)';
		context.fillRect(0, 0, this.foregroundColor.width, 1);
	}
}
