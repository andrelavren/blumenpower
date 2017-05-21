var cofnum = 1;

function coffeePlus() {
	cofnum++;
	console.log('cofnum =', cofnum);
	return cofnum;
}

function coffeeMinus() {
	cofnum--;
	console.log('cofnum =', cofnum);
	return cofnum;
}

$(document).ready(coffeePlus());

function renameHead(n) {
	var num = $(n).attr('id').slice(-1);
	var cofVol = $('form').find($('[name $='+num+'].stylevol:checked ')).attr('id').slice(2, -2);
	var cofSyr = '';
	$.each($('[name = syrup_'+num+']:checked'), function() {cofSyr += $(this).next().children().first().text() + " ";});
	var cofSug = $('[name = sugar_'+num+']:checked:last').attr('id');
	switch (cofSug) {
		case 'one_'+num:
			cofSug = '1';
			break;
		case 'two_'+num:
			cofSug = '2';
			break;
		case 'three_'+num:
			cofSug = '3';
			break;
		case 'four_'+num:
			cofSug = '4';
			break;
		case 'five_'+num:
			cofSug = '5';
			break;
	}
	$(n)
		.prev() //$('[name = vol_'+num+']:checked').next().children().text()
		.text(' '+$('[name = coffee_'+num+']:checked').next().text()+' '+cofVol+'ml, сахар: '+cofSug+', сиропы: '+cofSyr+' '+$('[name = cupcount_'+num+']').val()+'шт')
		.css('letter-spacing', 'normal')
		.prepend('<span class="glyphicon glyphicon-remove"></span>');
	$('#preorder').append('<li> '+$('[name = coffee_'+num+']:checked').next().text()+' '+cofVol+'ml, сахар: '+cofSug+', сиропы: '+cofSyr+' '+$('[name = cupcount_'+num+']').val()+'шт</li>');
}

function cakeInOrder(n) {
	var nameCake = $(n).children(':first-child').attr('id');
	var countCake = $(n).children(':last-child').prev().attr('id');
	if ($('#'+nameCake).prop('checked') == true) {
		$('#preorder').append('<li> Булочка '+$('#'+nameCake).next().text()+' '+$('#'+countCake).val()+'шт</li>');
	}
}
/*
	if ($('#preorder:parent').children().attr('id').slice(-1) == num) {
		
	}
	if ($('#preorder:parent').has('#point_'+num)) {
		console.log('Нашёл, переписываю');
		$('#point_'+num).text(' '+$('[name = coffee_'+num+']:checked').next().text()+' '+$('[name = vol_'+num+']:checked').next().children().first().text()+', сахар: '+cofSug+', сиропы: '+cofSyr+' '+$('[name = cupcount_'+num+']').attr('value')+'шт');
	} else {
		console.log('Не нашёл, пишу');
		$('#preorder').append('<li id="point_'+num+'"> '+$('[name = coffee_'+num+']:checked').next().text()+' '+$('[name = vol_'+num+']:checked').next().children().first().text()+', сахар: '+cofSug+', сиропы: '+cofSyr+' '+$('[name = cupcount_'+num+']').attr('value')+'шт</li>');
	}*/

function formOrder(n) {
	var num = $(n).attr('id').slice(-1);
	$('#preorder').append('<li id="point_'+num+'"> '+$('[name = coffee_'+num+']:checked').next().text()+' '+$('[name = vol_'+num+']:checked').next().children().first().text()+', сахар: '+cofSug+', сиропы: '+cofSyr+' '+$('[name = cupcount_'+num+']').attr('value')+'шт</li>');
}

$('#wholeOrder').on('click', '.glyphicon-remove', function(event) {
/*	var num = $(this).parent().attr('id').slice(-1);
	if ($('#preorder').has('#point_'+num)) {
		console.log('Нашёл, удаляю');
		$('#point_'+num).remove();
	} else {console.log('Не нашёл, оставляю');}*/
	$('#preorder').empty();
	$(this).parent().next().remove();
	$(this).parent().remove();
	$('.coffe').each(function() {renameHead(this)});
	$('.col-sm-3').each(function() {cakeInOrder(this)});
});

$('#wholeOrder').on('click', '.style1', function(event) {
	console.log('clicked:', $(this).attr('id'), $(this).text());
	$('#preorder').empty();
	$('.coffe').each(function() {
		renameHead(this);
		if ($(this).css('display') != 'none') {
			$(this)
				.css('display', 'none')
				.prev()
				.css('background', 'url(img/arrow_dn.png) 98% center no-repeat #DFCDBF');
		}
	});
	$('.col-sm-3').each(function() {cakeInOrder(this)});
	if ($(this).next().attr('id') == 'cook') {
		$(this)
			.after(function() {
				return'<div class="row style2 coffe" id="coffee_'+cofnum+'"><div class="col-xs-6 col-sm-4 style33 hardly"><div class="style2"><input class="stylecof" type="radio" id="amerikano_'+cofnum+'" name="coffee_'+cofnum+'" checked/><label for="amerikano_'+cofnum+'"><span></span>Американо</label><br><input class="stylecof" type="radio" id="kapuchino_'+cofnum+'" name="coffee_'+cofnum+'" /><label for="kapuchino_'+cofnum+'"><span></span>Капуччино</label><br><input class="stylecof" type="radio" id="latte_'+cofnum+'" name="coffee_'+cofnum+'" /><label for="latte_'+cofnum+'"><span></span>Латте</label><br><input class="stylecof" type="radio" id="sweet_'+cofnum+'" name="coffee_'+cofnum+'" /><label for="sweet_'+cofnum+'"><span></span>Свит</label></div></div><div class="col-xs-6 col-sm-4 col-sm-push-4 style33 hardly"><input type="radio" id="ml450_'+cofnum+'" name="vol'+cofnum+'" class="stylevol"/><label for="ml450_'+cofnum+'"><span>450ml</span></label><input type="radio" id="ml330_'+cofnum+'" name="vol'+cofnum+'" class="stylevol" checked/><label for="ml330_'+cofnum+'"><span>330ml</span></label><input type="radio" id="ml250_'+cofnum+'" name="vol'+cofnum+'" class="stylevol"/><label for="ml250_'+cofnum+'"><span>250ml</span></label></div><div class="col-xs-6 col-sm-4 col-sm-pull-4 style33" id="cupimg_'+cofnum+'"><img src="img/coffecup_330.png" alt="Кофе 330мл" class="imgcup"></div><div class="col-xs-6 col-sm-4 col-sm-push-4 style33"><div><p class="centerp">Количество</p><input type="button" value="-" class="sugctrl"/><input type="text" value="1" class="countcup" name="cupcount_'+cofnum+'"/><input type="button" value="+" class="sugctrl"/></div></div><div class="col-xs-6 col-sm-4 col-sm-pull-4 style33"><div><p class="centerp">Кубики сахара</p><div class="style33"><input type="button" value="-" class="sugctrl"/><input type="checkbox" class="stylesug" id="one_'+cofnum+'" name="sugar_'+cofnum+'" checked/><label for="one_'+cofnum+'"><span></span></label><input type="checkbox" class="stylesug" id="two_'+cofnum+'" name="sugar_'+cofnum+'" checked/><label for="two_'+cofnum+'"><span></span></label><input type="checkbox" class="stylesug" id="three_'+cofnum+'" name="sugar_'+cofnum+'"/><label for="three_'+cofnum+'"><span></span></label><input type="checkbox" class="stylesug" id="four_'+cofnum+'" name="sugar_'+cofnum+'"/><label for="four_'+cofnum+'"><span></span></label><input type="checkbox" class="stylesug" id="five_'+cofnum+'" name="sugar_'+cofnum+'"/><label for="five_'+cofnum+'"><span></span></label><input type="button" value="+" class="sugctrl"/></div></div></div><div class="col-xs-6 col-sm-4 style33"><div><p class="centerp">Сиропы <img src="img/arrow_up.png" id="syrarr_'+cofnum+'" style="vertical-align: middle"></p><div class="style2 syrups" style="text-align: left" id="syrup_'+cofnum+'"><input type="checkbox" class="stylesyr" id="choko_'+cofnum+'" name="syrup_'+cofnum+'"/><label for="choko_'+cofnum+'"><span>шоколад</span></label><input type="checkbox" class="stylesyr" id="minth_'+cofnum+'" name="syrup_'+cofnum+'"/><label for="minth_'+cofnum+'"><span>мята</span></label><input type="checkbox" class="stylesyr" id="ging_'+cofnum+'" name="syrup_'+cofnum+'" checked/><label for="ging_'+cofnum+'"><span>имбирь</span></label><input type="checkbox" class="stylesyr" id="lemon_'+cofnum+'" name="syrup_'+cofnum+'" checked/><label for="lemon_'+cofnum+'"><span>лимон</span></label><input type="checkbox" class="stylesyr" id="gren_'+cofnum+'" name="syrup_'+cofnum+'"/><label for="gren_'+cofnum+'"><span>гренадин</span></label><input type="checkbox" class="stylesyr" id="maple_'+cofnum+'" name="syrup_'+cofnum+'"/><label for="maple_'+cofnum+'"><span>клён</span></label><input type="checkbox" class="stylesyr" id="vanil_'+cofnum+'" name="syrup_'+cofnum+'"/><label for="vanil_'+cofnum+'"><span>ваниль</span></label><input type="checkbox" class="stylesyr" id="caram_'+cofnum+'" name="syrup_'+cofnum+'"/><label for="caram_'+cofnum+'"><span>карамель</span></label></div></div></div></div>';
			})
			.css('background', 'url(img/arrow_up.png) 98% center no-repeat #DFCDBF');
		coffeePlus();
		$('#cook').before(function() {
			return'<div class="style1" id="cofhead_'+cofnum+'" style="background: url(img/arrow_dn.png) 98% center no-repeat #DFCDBF">хочу ещё кофе!</div>';
		});
	} else if ($(this).next().css('display') == 'none') {
		$(this).css('background', 'url(img/arrow_up.png) 98% center no-repeat #DFCDBF').next().css('display', 'block');
	} else {
		$(this).css('background', 'url(img/arrow_dn.png) 98% center no-repeat #DFCDBF').next().css('display', 'none');
	}
});
/*
function addCoffee() {
	$(this).after(function() {
		return'<div class="row style2 coffe" id="coffee_'+cofnum+'"><div class="style33"><div class="style2"><input class="stylecof" type="radio" id="amerikano_'+cofnum+'" name="coffee_'+cofnum+'" checked/><label for="amerikano_'+cofnum+'"><span></span>Американо</label><br><input class="stylecof" type="radio" id="kapuchino_'+cofnum+'" name="coffee_'+cofnum+'" /><label for="kapuchino_'+cofnum+'"><span></span>Капуччино</label><br><input class="stylecof" type="radio" id="latte_'+cofnum+'" name="coffee_'+cofnum+'"/><label for="latte_'+cofnum+'"><span></span>Латте</label><br><input class="stylecof" type="radio" id="sweet_'+cofnum+'" name="coffee_'+cofnum+'" /><label for="sweet_'+cofnum+'"><span></span>Свит</label></div></div><div class="style33" id="cupimg_'+cofnum+'"><img src="img/coffecup_330.png" alt="Кофе 330мл" class="imgcup"></div><div class="style33 hardly"><input type="radio" id="ml450_'+cofnum+'" name="vol_'+cofnum+'" class="stylevol"/><label for="ml450_'+cofnum+'"><span>450ml</span></label><input type="radio" id="ml330_'+cofnum+'" name="vol_'+cofnum+'" class="stylevol" checked/><label for="ml330_'+cofnum+'"><span>330ml</span></label><input type="radio" id="ml250_'+cofnum+'" name="vol_'+cofnum+'" class="stylevol"/><label for="ml250_'+cofnum+'"><span>250ml</span></label></div><div class="style33"><div><p class="centerp">Сахар</p><div class="style33"><input type="button" value="-" class="sugctrl"/><input type="checkbox" class="stylesug" id="one_'+cofnum+'" name="sugar_'+cofnum+'" checked/><label for="one_'+cofnum+'"><span></span></label><input type="checkbox" class="stylesug" id="two_'+cofnum+'" name="sugar_'+cofnum+'" checked/><label for="two_'+cofnum+'"><span></span></label><input type="checkbox" class="stylesug" id="three_'+cofnum+'" name="sugar_'+cofnum+'"/><label for="three_'+cofnum+'"><span></span></label><input type="checkbox" class="stylesug" id="four_'+cofnum+'" name="sugar_'+cofnum+'"/><label for="four_'+cofnum+'"><span></span></label><input type="checkbox" class="stylesug" id="five_'+cofnum+'" name="sugar_'+cofnum+'"/><label for="five_'+cofnum+'"><span></span></label><input type="button" value="+" class="sugctrl"/></div></div></div><div class="style33"><div><p class="centerp">Количество</p><input type="button" value="-" class="sugctrl"/><input type="text" value="1" class="countcup" name="cupcount_'+cofnum+'"/><input type="button" value="+" class="sugctrl"/></div></div><div class="style33"><div class="syrups"><p class="centerp">Сиропы <img src="img/arrow_dn.png" id="syrarr_'+cofnum+'" style="vertical-align: middle"></p><div class="style2" style="text-align: left" id="syrup_'+cofnum+'"><input type="checkbox" class="stylesyr" id="choko_'+cofnum+'" name="syrup_'+cofnum+'"/><label for="choko_'+cofnum+'"><span>шоколад</span></label><input type="checkbox" class="stylesyr" id="minth_'+cofnum+'" name="syrup_'+cofnum+'"/><label for="minth_'+cofnum+'"><span>мята</span></label><input type="checkbox" class="stylesyr" id="ging_'+cofnum+'" name="syrup_'+cofnum+'" checked/><label for="ging_'+cofnum+'"><span>имбирь</span></label><input type="checkbox" class="stylesyr" id="lemon_'+cofnum+'" name="syrup_'+cofnum+'" checked/><label for="lemon_'+cofnum+'"><span>лимон</span></label><input type="checkbox" class="stylesyr" id="gren_'+cofnum+'" name="syrup_'+cofnum+'"/><label for="gren_'+cofnum+'"><span>гренадин</span></label><input type="checkbox" class="stylesyr" id="maple_'+cofnum+'" name="syrup_'+cofnum+'"/><label for="maple_'+cofnum+'"><span>клён</span></label><input type="checkbox" class="stylesyr" id="vanil_'+cofnum+'" name="syrup_'+cofnum+'"/><label for="vanil_'+cofnum+'"><span>ваниль</span></label><input type="checkbox" class="stylesyr" id="caram_'+cofnum+'" name="syrup_'+cofnum+'"/><label for="caram_'+cofnum+'"><span>карамель</span></label></div></div></div></div>';
	}).attr('onclick', 'hideCoffee').prev().css('display', 'none').text('Показать выбранный кофе').attr('onclick', '')
	coffeePlus();
	$('#cook').before(function() {
		return'<div class="style1" id="cofhead_'+cofnum+'" onclick="addCoffee">хочу ещё кофе!</div>';
	});
};
*/
$('#wholeOrder').on('click', '.row.style2', function(event) {
	$('#preorder').empty();
	$('.coffe').each(function() {renameHead(this)});
	$('.col-sm-3').each(function() {cakeInOrder(this)});
});
$('#wholeOrder').on('click', '[id ^= ml450_]', function(event) {
	console.log('clicked:', $(this).attr('id'));
	var idNum = $(this).attr('id').slice(-1);
	//console.log('idNum =', idNum);
	$('#cupimg_'+idNum).children('img').attr('src', 'img/coffecup_450.png');
	//console.log($('#cupimg_'+idNum+':first-child').attr('alt'));
});

$('#wholeOrder').on('click', '[id ^= ml330_]', function(event) {
	console.log('clicked:', $(this).attr('id'));
	var idNum = $(this).attr('id').slice(-1);
	$('#cupimg_'+idNum).children('img').attr('src', 'img/coffecup_330.png');
});

$('#wholeOrder').on('click', '[id ^= ml250_]', function(event) {
	console.log('clicked:', $(this).attr('id'));
	var idNum = $(this).attr('id').slice(-1);
	$('#cupimg_'+idNum).children('img').attr('src', 'img/coffecup_250.png');
});

$('#wholeOrder').on('click', 'input[type=button]', function(event) {
	if ($(this).attr('value') == '+') {
		console.log('clicked:', $(this).attr('value'));
//		console.log($(this).prev().attr('for'));
		if ($(this).prev().attr('for')) {
			var idNum = $(this).prev().attr('for').slice(-1);
			/*
			if ($('#one_'+idNum).prop('checked')) {
				if ($('#two_'+idNum).prop('checked')) {
					if ($('#three_'+idNum).prop('checked')) {
						if ($('#four_'+idNum).prop('checked')) {
							if ($('#five_'+idNum).prop('checked')) {
								console.log('Не слипнется?');
							} else {$('#five_'+idNum).prop('checked', true)}
						} else {$('#four_'+idNum).prop('checked', true)}
					} else {$('#three_'+idNum).prop('checked', true)}
				} else {$('#two_'+idNum).prop('checked', true)}
			} else {$('#one_'+idNum).prop('checked', true)}
			*/
			if ($('#five_'+idNum).prop('checked')) {console.log('Не слипнется?')}
			else if ($('#four_'+idNum).prop('checked')) {$('#five_'+idNum).prop('checked', true)}
			else if ($('#three_'+idNum).prop('checked')) {$('#four_'+idNum).prop('checked', true)}
			else if ($('#two_'+idNum).prop('checked')) {$('#three_'+idNum).prop('checked', true)}
			else if ($('#one_'+idNum).prop('checked')) {$('#two_'+idNum).prop('checked', true)}
			else {$('#one_'+idNum).prop('checked', true)}
		} else if ($(this).prev().attr('class') == 'countcup') {
			if ($(this).prev().attr('name') == 'cakecount') {
				var wtc = $(this).prev().attr('id').slice(-1);
				console.log($(this).prev().attr('id'));
				//console.log('wtc =', wtc);
				/*
				if (wtc == 1 && $('[name = cakecount1]').val() < 1) {
					console.log('wtc =', wtc);
					$('#curd').prop('checked', true);
					$('[name = cakecount1]').val(0);
				} else if (wtc == 2 && $('[name = cakecount2]').val() < 1) {
					console.log('wtc =', wtc);
					$('#cherry').prop('checked', true);
					$('[name = cakecount2]').val(0);
				} else if (wtc == 3 && $('[name = cakecount3]').val() < 1) {
					console.log('wtc =', wtc);
					$('#apricot').prop('checked', true);
					$('[name = cakecount3]').val(0);
				} else if (wtc == 4 && $('[name = cakecount4]').val() < 1) {
					console.log('wtc =', wtc);
					$('#apple').prop('checked', true);
					$('[name = cakecount4]').val(0);	
				}
				*/
				switch(wtc) {
					case '1':
						if ($('#cake1').val() < 1) {
							$('#curd').prop('checked', true);
							$('#cake1').val(0);
						}
						break;
					case '2':
						if ($('#cake2').val() < 1) {
							$('#cherry').prop('checked', true);
							$('#cake2').val(0);
						}
						break;
					case '3':
						if ($('#cake3').val() < 1) {
							$('#apricot').prop('checked', true);
							$('#cake3').val(0);
						}
						break;
					case '4':
						if ($('#cake4').val() < 1) {
							$('#apple').prop('checked', true);
							$('#cake4').val(0);
						}
						break;
				}
			}
			var count = $(this).prev().val();
			count++;
			$(this).prev().val(count);
		}
	} else if ($(this).attr('value') == '-') {
		console.log('clicked:', $(this).attr('value'));
		if ($(this).next().attr('type') == 'checkbox') {
			var idNum = $(this).next().attr('id').slice(-1);
			if (!$('#one_'+idNum).prop('checked')) {console.log('Может соли тогда?')}
			else if (!$('#two_'+idNum).prop('checked')) {$('#one_'+idNum).prop('checked', false)}
			else if (!$('#three_'+idNum).prop('checked')) {$('#two_'+idNum).prop('checked', false)}
			else if (!$('#four_'+idNum).prop('checked')) {$('#three_'+idNum).prop('checked', false)}
			else if (!$('#five_'+idNum).prop('checked')) {$('#four_'+idNum).prop('checked', false)}
			else {$('#five_'+idNum).prop('checked', false)}
		} else if ($(this).next().attr('class') == 'countcup') {
			var count = $(this).next().val();
			if (count > 1) {
				count--;
				$(this).next().val(count);
			}
		}
	}
});

$('#wholeOrder').on('click', 'input[class ^= stylesug]', function(event) {
	var idNum = $(this).attr('name').slice(-1);
	if ($(this).attr('name') == 'sugar_'+idNum) {
		var wts = $(this).attr('id');
		console.log($(this).attr('id'));
		switch (wts) {
			case 'one_'+idNum:
				$('#one_'+idNum).prop('checked', true);
				$('#two_'+idNum).prop('checked', false);
				$('#three_'+idNum).prop('checked', false);
				$('#four_'+idNum).prop('checked', false);
				$('#five_'+idNum).prop('checked', false);
				break;
			case 'two_'+idNum:
				$('#one_'+idNum).prop('checked', true);
				$('#two_'+idNum).prop('checked', true);
				$('#three_'+idNum).prop('checked', false);
				$('#four_'+idNum).prop('checked', false);
				$('#five_'+idNum).prop('checked', false);
				break;
			case 'three_'+idNum:
				$('#one_'+idNum).prop('checked', true);
				$('#two_'+idNum).prop('checked', true);
				$('#three_'+idNum).prop('checked', true);
				$('#four_'+idNum).prop('checked', false);
				$('#five_'+idNum).prop('checked', false);
				break;
			case 'four_'+idNum:
				$('#one_'+idNum).prop('checked', true);
				$('#two_'+idNum).prop('checked', true);
				$('#three_'+idNum).prop('checked', true);
				$('#four_'+idNum).prop('checked', true);
				$('#five_'+idNum).prop('checked', false);
				break;
			case 'five_'+idNum:
				$('#one_'+idNum).prop('checked', true);
				$('#two_'+idNum).prop('checked', true);
				$('#three_'+idNum).prop('checked', true);
				$('#four_'+idNum).prop('checked', true);
				$('#five_'+idNum).prop('checked', true);
				break;
		}
	}
});

$('#wholeOrder').on('click', '#curd', function(event) {
	console.log('clicked: ', $('this').attr('name'));
	if ($('#curd').prop('checked')) {
		$('#cake1').val(1);
		console.log($('#cake1').val());
	} else {
		$('#cake1').val(0);
		console.log($('#cake1').val());
	}
});

$('#wholeOrder').on('click', '#cherry', function(event) {
	console.log('clicked: ', $('this').attr('name'));
	if ($('#cherry').prop('checked')) {
		$('#cake2').val(1);
		console.log($('#cake2').val());
	} else {
		$('#cake2').val(0);
		console.log($('#cake2').val());
	}
});

$('#wholeOrder').on('click', '#apricot', function(event) {
	console.log('clicked: ', $('this').attr('name'));
	if ($('#apricot').prop('checked')) {
		$('#cake3').val(1);
		console.log($('#cake3').val());
	} else {
		$('#cake3').val(0);
		console.log($('#cake3').val());
	}
});

$('#wholeOrder').on('click', '#apple', function(event) {
	console.log('clicked: ', $('this').attr('name'));
	if ($('#apple').prop('checked')) {
		$('#cake4').val(1);
		console.log($('#cake4').val());
	} else {
		$('#cake4').val(0);
		console.log($('#cake4').val());
	}
});

$('#wholeOrder').on('click', 'p:contains(Сир)', function(event) {
	if ($(this).next().css('display') != 'none') {
		$(this).next().css('display', 'none');
		$(this).next().children('input').prop('checked', false);
		$(this).children('img').attr('src', 'img/arrow_dn.png');
	} else {
		$(this).next().css('display', 'block');
		$(this).children('img').attr('src', 'img/arrow_up.png');
	}
});