jQuery(document).ready(function($) {

	// Máscaras
	$('.date').mask('00/00/0000');
	$('.time').mask('00:00:00');
	$('.date_time').mask('00/00/0000 00:00:00');
	$('.cep').mask('00000-000');
	$('.phone').mask('0000-0000');
	$('.telephone_with_ddd').mask('(00) 0000-0000'); 
	$('.phone_with_ddd').mask('(00) 00000-0000');
		var maskBehavior = function (val) {
			return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
		},
			options = {onKeyPress: function(val, e, field, options) {
				field.mask(maskBehavior.apply({}, arguments), options);
			}
		};
	$('.phone_with_ddd').mask(maskBehavior, options);
		var options = {
			onKeyPress : function(cpfcnpj, e, field, options) {
				var masks = ['000.000.000-009', '00.000.000/0000-00'];
				var mask = (cpfcnpj.length > 14) ? masks[1] : masks[0];
				$('.cpfcnpj').mask(mask, options);
			}
		};
	$('.cpfcnpj').mask('000.000.000-009', options);
		var MercoSulMaskBehavior = function (val) { 
			var placams = val.replace(/[^a-zA-Z0-9]/g, '');
			if(placams.length < 5) return 'SSS-0A00';
			return placams.charAt(4).replace(/\d/g, '').length == 1 ? 'SSS0S00' : 'SSS-0000';
		},
		spOptions = {
		  onKeyPress: function(val, e, field, options) {
			  field.mask(MercoSulMaskBehavior.apply({}, arguments), options);
			  e.target.value=val.toUpperCase();
			}
		};
	$('.placa').mask(MercoSulMaskBehavior, spOptions);
	$('.cpf').mask('000.000.000-00', {reverse: true});
	$('.cnpj').mask('00.000.000/0000-00', {reverse: true});
	$('.money').mask('000.000.000.000.000,00', {reverse: true});
	$('.ip_address').mask('099.099.099.099');
	$('.percent').mask('##0,00%', {reverse: true});
	$('.clear-if-not-match').mask("00/00/0000", {clearIfNotMatch: true});
	$('.placeholder').mask("00/00/0000", {placeholder: "__/__/____"});
	$('.fallback').mask("00r00r0000", {
	  translation: {
		'r': {
		  pattern: /[\/]/,
		  fallback: '/'
		},
		placeholder: "__/__/____"
	  }
	});
	$('.selectonfocus').mask("00/00/0000", {selectOnFocus: true});
	$('.user_chars').mask('Z',{translation: {'Z': {pattern: /[a-z0-9_-]/, recursive: true}}});
});