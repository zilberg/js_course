describe("Проверка количества дней месяца", function(){
	it("2017 год октябрь", function(){
		assert.equal(getLastDayOfMonth(2017, 09), 31);
	});

	it("2017 февраль", function(){
		assert.equal(getLastDayOfMonth(2017, 01), 28);		
	});

	it("2016 февраль", function(){
		assert.equal(getLastDayOfMonth(2016, 01), 29);		
	});
});