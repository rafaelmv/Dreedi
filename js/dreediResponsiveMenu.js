$( '#expandMenu' ).on('click', function ()
{	
	var botonMenu = $( '#menuContraible' );
	if(botonMenu.css('opacity') == '0')
	{
		botonMenu.css('opacity', 1);
	}
	else if(botonMenu.css('opacity') == '1')
	{
		botonMenu.css('opacity', 0)
	}
});