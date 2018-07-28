describe('calc', function() {
    it('Проверка простой выборки из таблицы Фертмана', function() {
        assert.equal(calc(95, 90), 6.4); // первое значение первой строки
        assert.equal(calc(95, 55), 78);
        assert.equal(calc(95, 15), 540); // последнее значение первой строки

        assert.equal(calc(60, 55), 9.5);
        assert.equal(calc(60, 30), 101.7);
        assert.equal(calc(60, 15), 301.1);

        assert.equal(calc(50, 45), 11.4); // последняя строка таблицы
        assert.equal(calc(50, 25), 100.7);
        assert.equal(calc(50, 15), 233.6);
    });
	
	it('2-й блок расчётов: стартовая крепость простая, конечная - внутри диапазона', function() {
		assert.equal(calc(95, 94), 1.3);
		assert.equal(calc(95, 32.5), 201.4); // !--> +(224.1 - (224.1 - 178.7) / 2).toFixed(1)
		assert.equal(calc(95, 16), 508.4); // 540 - (540 - 382) / 5
		
		assert.equal(calc(65, 61), 7); // 8.8 - 8.8 / 5
		assert.equal(calc(65, 32.5), 103.4); // 118.9 - (118.9 - 87.9) / 2 
		assert.equal(calc(65, 19), 248.6); // 334.9 - (334.9 - 227) / 5 * 4 
		
		assert.equal(calc(50, 49), 2.3); // 11.4 / 5
		assert.equal( calc(50, 22.5), 125.7); // 150.6 - (150.6 - 100.7) / 2 		
		assert.equal( calc(50, 16), 217); // 233.6 - (233.6 - 150.6) / 5 
	});
	
	it('3-й блок расчётов: стартовая крепость внутри диапазона, конечная - простая', function() {
		assert.equal(calc(92.5, 90), 3.2); // 6.4 / 2
		assert.equal(calc(92.5, 40), 137.6); // 144.4 - (144.4 - 130.8) * 0.5
		assert.equal(calc(92.5, 15), 522.6); // 540 - (540 - 505.3) * 0.5
		
		assert.equal(calc(66, 50), 33.4); // 41.7 -  (41.7 - 31.3) * 0.8
		assert.equal(calc(54, 15), 260.6); // 267.3 - (267.3 - 233.6) * 0.2	
	});

});