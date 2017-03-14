describe("Подсчет суммы все аргументов", function(){
	
	it("sum(1,2) == 3", function(){
		assert.equal(sum(1,2),3);
	});
	
	it("sum() == 0", function(){
		assert.equal(sum(),0);
	});
	
	it("sum(0) == 0", function(){
		assert.equal(sum(0),0);
	});
	
	it("sum(1,2,3,4) == 10", function(){
		assert.equal(sum(1,2,3,4), 10);
	});
});