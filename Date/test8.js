describe("Формат даты дд.мм.гг", function(){
	it('передается 30.01.14 , должны получить 20.12.20 ', function(){
		assert.equal(formatDate(new Date(2014,0,30)),'30.01.14');
	});
});