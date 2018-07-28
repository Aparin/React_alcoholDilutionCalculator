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
});