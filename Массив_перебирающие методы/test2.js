describe("Проверка преобразования массива", function(){
	it("частичные суммы [1,2,3,4,6,7] равны  [1,3,6,10,15, 21, 28]", function(){
		var arr = [1,2, 3, 4, 5, 6, 7];
		assert.deepEqual(getSums(arr), [1,3,6,10,15, 21, 28]);
	});
	
	it("частичные суммы [0,-1, 3, -4, 5, 0, 7] равны  [0,-1,2,-2,3, 3, 10]", function(){
		var arr = [0,-1, 3, -4, 5, 0, 7];
		assert.deepEqual(getSums(arr), [0,-1,2,-2,3, 3, 10]);
	});
	
	it("частичные суммы [] равны  []", function(){
		var arr = [];
		assert.deepEqual(getSums(arr), []);
	});
});