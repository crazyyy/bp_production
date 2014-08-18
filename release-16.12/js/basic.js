/*
 * SimpleModal Basic Modal Dialog
 * http://simplemodal.com
*/
$('#scrl-problems').scrollTo({
    offset: 50
});
$('#scrl-choiseblock').scrollTo({
    offset: 50
});
$('#scrl-respond').scrollTo({
    offset: 50
});
$('#scrl-howwework').scrollTo({
    offset: 50
});

jQuery(function ($) {
	// Load dialog on page load
	//$('#basic-modal-content').modal();

	// Load dialog on click
	$('.recall').click(function (e) {
		$('#recall-modal-content').modal();
		$( ".simplemodal-container" ).addClass( "recallcontainer" );
		return false;
	});
	$('.clicker1').click(function (e) {
		$('#clicker1-modal-content').modal();
		$( ".simplemodal-container" ).addClass( "clickerblk" );
		return false;
	});
	$('.clicker2').click(function (e) {
		$('#clicker2-modal-content').modal();
		$( ".simplemodal-container" ).addClass( "clickerblk" );
		return false;
	});
	$('.clicker3').click(function (e) {
		$('#clicker3-modal-content').modal();
		$( ".simplemodal-container" ).addClass( "clickerblk" );
		return false;
	});
});

/* form check phone*/
function smallform(data)	{
	/* контактный телефон */
	if(data.phone != null && data.phone.value.length == 0)
	{
	alert('поле "e-mail или телефон" пустое');
	return false;}
	  
	if(data.phone != null && data.phone.value.length < 5)
	{
	alert('поле "e-mail или телефон" должно содержать минимум пять символов');
	return false;}
}
/* form check phone and name */
function smallform2(data)	{
	/* если не заполнено поле Ваше имя, длина менее 3-x*/
	if (data.name != null && data.name.value.length < 3 )
	{
	alert('Заполните поле "Ваше имя"');
	return false;}
	
	/* контактный телефон */
	if(data.phone != null && data.phone.value.length == 0)
	{
	alert('поле "e-mail или телефон" пустое');
	return false;}
	  
	if(data.phone != null && data.phone.value.length < 5)
	{
	alert('поле "e-mail или телефон" должно содержать минимум пять символов');
	return false;}
}


/* ajax form */ 
/* http://hayageek.com/examples/jquery/ajax-form-submit/index.php */
$("#ajaxform, #ajaxform2, #ajaxform3, #ajaxform4, #ajaxform5, #ajaxform6, #ajaxform7").submit(function(e)
{
	if(event.preventDefault) 
	{
	  event.preventDefault();
	}
	else
	{
	   event.returnValue = false;
	}

	var postData = $(this).serializeArray();
	var formURL = $(this).attr("action");
	
	$.ajax(
	{
		url : formURL,
		type: "POST",
		data : postData,
		success:function(data, textStatus, jqXHR) 
		{
			/* replace content */
		/*	$('#ajaxform').html('My content here :-)');		*/
			/* replace with other div */
		/*	$( "#ajaxform" ).replaceWith( $( ".copy" ) );	*/
			$('#basic-modal-content').modal();
			$( "#ajaxform" ).replaceWith( $( ".formtnx" ) );
			$( "#ajaxform2" ).replaceWith( $( ".formtnx2" ) );
			$( "#ajaxform3" ).replaceWith( $( ".formtnx3" ) );
			$( "#ajaxform4" ).replaceWith( $( ".formtnx4" ) );
			$( "#ajaxform5" ).replaceWith( $( ".formtnx5" ) );
			$( "#ajaxform6" ).replaceWith( $( ".formtnx6" ) );
			$( "#ajaxform7" ).replaceWith( $( ".formtnx7" ) );
			$(".formtnx").css({ display: "block" });
			$(".formtnx2").css({ display: "block" });
			$(".formtnx3").css({ display: "block" });
			$(".formtnx4").css({ display: "block" });
			$(".formtnx5").css({ display: "block" });
			$(".formtnx6").css({ display: "block" });
			$(".formtnx7").css({ display: "block" });
		},
		error: function(jqXHR, textStatus, errorThrown) 
		{
		}
	});
    
});
$("#ajaxform, #ajaxform2, #ajaxform3, #ajaxform4, #ajaxform5, #ajaxform6, #ajaxform6").submit(); //SUBMIT FORM



//	http://api.jquery.com/replaceWith/
//	http://hayageek.com/examples/jquery/ajax-post/index.php