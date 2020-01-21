$('#form-member #muname').focus();
$('#form-member').attr('name', 'login');
$('#member').click(function(){
	$('#form-member').attr('name', 'login');
	$('#form-voucher').attr('name', '');
	$('#form-voucher').hide();
	$('#form-member').show();
	$('#form-member #muname').focus();
	$('#voucher button').removeClass('btn-secondary').addClass('btn-info');
	$('#member button').removeClass('btn-info').addClass('btn-secondary');
});
$('#voucher').click(function(){
	$('#form-member').attr('name', '');
	$('#form-voucher').attr('name', 'login');
	$('#form-member').hide();
	$('#form-voucher').show();
	$('#form-voucher #vuname').focus();
	$('#member button').removeClass('btn-secondary').addClass('btn-info');
	$('#voucher button').removeClass('btn-info').addClass('btn-secondary');
});
$( "#form-voucher #vuname" ).change(function() {
	setpass();
});
function setpass(){
  var pass = $('#form-voucher #vuname').val();
  $('#form-voucher #vpass').val(pass);
}