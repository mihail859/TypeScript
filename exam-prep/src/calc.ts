


function calculate(x: number, operator: string, y: number): string {

    let result: number | undefined = undefined;

    switch (operator) {
        case "+":
            result = x + y;
            break;
        case "-":
            result =  x - y;
            break;    
        case "*":
            result =  x * y;
            break;    
        case "/":
            result =  x / y;
        break;    
    
        default:
            break;
    }

    const formattedResult = result !== undefined ? result.toFixed(2) : '';
    return formattedResult;

    
}


console.log(calculate(5,
    "+",
    10
    ))