const sum = require('./sum');

test('properly calculates sum of two numbers', ()=>{
    expect(sum(1,2)).toBe(3);
});