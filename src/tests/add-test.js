
describe('Add', () => {
    it('should add two numbers', () => {
        expect(add(1, add(1, 2))).toBe(4);
    })
});

function add(x, y){
    return x + y;
}