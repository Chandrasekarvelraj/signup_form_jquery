$(document).ready(function(){
	$("#Name").on("blur keydown",function(){
		nameValidate();
	});
	$("#Email").on("blur keydown",function(){
		emailValidate();
	});
	$("#Password").on("blur keydown",function(){
		passwordValidate();
	});
	$("#RePassword").on("blur keydown",function(){
		rePasswordValidate();
	});
	$("#submitBtn").click(function(event){
		nameValidate();
		emailValidate();
		passwordValidate();
		rePasswordValidate();
		if(nameValidate()&&emailValidate()&&passwordValidate()&&rePasswordValidate())
			alert("Validation successul");
		else
			event.preventDefault();
	});
});

function nameValidate(){
	if(document.getElementById("Name").value.match("^[A-Za-z]{3,7}$")){
		document.getElementById("nameErrMessage").style.display="none";
		return true;
	}
	else{
		document.getElementById("nameErrMessage").style.display="block";
		return false;
	}
}
function emailValidate(){
	if(document.getElementById("Email").value.match("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")){
		document.getElementById("emailErrMessage").style.display="none";
		return true;
	}
	else{
		document.getElementById("emailErrMessage").style.display="block";
		return false;
	}
}
function passwordValidate(){
	if(document.getElementById("Password").value.match(".{8}")){
		document.getElementById("passwordErrMessage").style.display="none";
		return true;
	}
	else{
		document.getElementById("passwordErrMessage").style.display="block";
		return false;
	}
}
function rePasswordValidate(){
	if(document.getElementById("RePassword").value.match(".{8}")){
		document.getElementById("rePasswordErrMessage").style.display="none";
		return true;
	}
	else{
		document.getElementById("rePasswordErrMessage").style.display="block";	
		return false;
	}
}