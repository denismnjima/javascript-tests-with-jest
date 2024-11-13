const cloneArray = require('./cloneArray');

const arr = [1, 2, 3, 4, 5];

test('proprly clones array', function(){
    expect(cloneArray(arr)).toEqual(arr)
    expect(cloneArray(arr)).not.toBe(arr)
})

