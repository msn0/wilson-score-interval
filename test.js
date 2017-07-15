const test = require('ava');
const wilson = require('./wilson');

test('should return two values - left and right', t => {
    t.true(wilson(1, 2).hasOwnProperty('left'));
    t.true(wilson(1, 2).hasOwnProperty('right'));
});

test('left should be less than right', t => {
    t.true(wilson(1, 2).left < wilson(2, 3).left);
});

test('should return (0,0) for up=0, total=0', t => {
    const w = wilson(0, 0);

    t.is(w.left, 0);
    t.is(w.right, 0);
});

test('should return left=0 for up=0, total!=0', t => {
    const w = wilson(0, 99);

    t.is(w.left, 0);
});

test('should return higher value for more up\'s', t => {
    t.true(wilson(1, 10).left < wilson(2, 10).left);
    t.true(wilson(1, 10).right < wilson(2, 10).right);
});

test('should return higher left for proportionally bigger sample', t => {
    t.true(wilson(5, 50).left < wilson(10, 100).left);
});

test('should return proper value', t => {
    t.is(wilson(4097, 4985).left, 0.8109971539140524);
});
