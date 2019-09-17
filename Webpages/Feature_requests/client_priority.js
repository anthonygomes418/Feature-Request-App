$(document).ready(function(){

$('div').hide()

$('#').change(function () {
	  var value = this.value;
    $('div').hide()
    $('#' + this.value).show();
});

})