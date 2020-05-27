// JavaScript Document

//Check off specific to-dos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Click on X to delete item
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//Select text input
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//Grabbing new text from input
		var todoText = $(this).val();
		//Clear input
		$(this).val("");
		//Create new li and add to ul
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> "+todoText+"</li>");
	}
});

$("#toggleForm").click(function(){
	$("input[type='text']").fadeToggle();	
});