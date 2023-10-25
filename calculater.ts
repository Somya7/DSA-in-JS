interface CalculaterInter {

    add(a: number, b: number): void;
    minus(a: number, b: number): void;
    multiple(a: number, b: number): void;
    devide(a: number, b: number): void;


}sdsd

hello
class CalculaterImpl implements CalculaterInter {



    add(a: number, b: number): void {
        console.log(a + b);
    }
    minus(a: number, b: number): void {
        console.log(a - b);
    }
    multiple(a: number, b: number): void {
        console.log(a * b);
    }
    devide(a: number, b: number): void {
        if (b == 0) {
            throw 'b should not be 0';
        }
        console.log(a / b);
    }

}

const calc = new CalculaterImpl();


calc.add(4, 6);
calc.minus(4, 6);
calc.multiple(4, 6);
calc.devide(4, 6);
