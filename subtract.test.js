const subtract = require('./subtract')

test('properly subtracts', ()=>{
    expect(subtract(3,1)).toBe(2)
})