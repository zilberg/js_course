describe("Относительное форматирование даты", function(){
	it('прошло меньше секунды', function(){
		assert.equal(formatDate(new Date(new Date - 1)),"только что");
	});

	it('прошло менее минуты', function(){
		assert.equal(formatDate(new Date(new Date - 30 *1000)),"30 сек. назад");
	});

	it('прошло меньше часа ', function(){
		assert.equal(formatDate(new Date(new Date - 5 * 60 * 1000)),"5 мин. назад");
	});

	it('02.03.17 17:17', function(){
		assert.equal(formatDate(new Date(2017,02,2,17,17)),"02.03.17 17:17");
	});

	it('выводит старую дату в формате дд.мм.гг чч:мм', function(){
		assert.equal(formatDate(new Date(2014, 2, 1, 11, 22, 33)),"01.03.14 11:22");
	});
});