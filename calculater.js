var CalculaterImpl = /** @class */ (function () {
    function CalculaterImpl() {
    }
    CalculaterImpl.prototype.add = function (a, b) {
        console.log(a + b);
    };
    CalculaterImpl.prototype.minus = function (a, b) {
        console.log(a - b);
    };
    CalculaterImpl.prototype.multiple = function (a, b) {
        console.log(a * b);
    };
    CalculaterImpl.prototype.devide = function (a, b) {
        if (b == 0) {
            throw 'b should not be 0';
        }
        console.log(a / b);
    };
    return CalculaterImpl;
}());
var calc = new CalculaterImpl();
calc.add(4, 6);
calc.minus(4, 6);
calc.multiple(4, 6);
calc.devide(4, 6);
