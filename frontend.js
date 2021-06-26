//Popup contact form


//validating all fields
function input_fields(){
	if (document.getElementById('name').value= "" || document.getElementById('email').value=="" || document.getElementById('msg').value == "") { alert('Complete all fields');
	}
	else{
		document.getElementById('form').submit();
		alert('Message sent succesfully...')
	}
}

//Display contact form
function show_form(){
	document.getElementById('MessageBox').style.display = 'block';
}

//Close contact form
function hide_form(){
	document.getElementById('MessageBox').style.display = 'none';
}

/* Audio Play*/
function playclip()
{
	if(navigator.appName == "Microsoft internet Explorer" && (navigator.appversion.indexOf("MSIE 7")!=-1) || (navigator.appversion.indexOf("MSIE 8")!=-1)){
		if (document.all){
			document.all.sound.src  ="audios/jingle-Bells.mp3";
		}
	}
		else
		{
			var audio = document.getElementByYagName("audio")[0];
			audio.play();
		}
	}

} 