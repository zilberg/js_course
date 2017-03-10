
describe("Тест массива на уникальность", function(){
	
	it("test 1", function(){
		var arr = ["1", "1", "2", "2", "3", "4", "4", "4"];
		var newArr = unique(arr);
	assert.deepEqual(newArr, ["1","2","3","4"]);
		
	});
	
	it("test 2 без повторяющихся элементов", function(){
		var arr = ["1", "2","3","4"];
		var newArr = unique(arr);
		assert.deepEqual(newArr, ["1","2","3","4"]);
		
	});
	
	it("test 3 массив из повторяющегося одного элемента", function(){
		var arr = ["1", "1","1","1"];
		var newArr = unique(arr);
		assert.deepEqual(newArr, ["1"]);
		
	});
	
	it("test 4 массив пустой", function(){
		var arr = [];
		var newArr = unique(arr);
		assert.deepEqual(newArr, []);
		
	});
	
	it("test 5 без учета регистра", function(){
		var arr = ["abc", "1", "cvb", "Abc", "cvB", "1" ];
		var newArr = unique(arr);
		assert.deepEqual(newArr, [ "1", "abc", "cvb", "Abc", "cvB"]);
		
	});
	
});