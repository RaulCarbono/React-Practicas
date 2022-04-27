

const basicSalary =100282
let antiguedad = 0 

const calculate =(basicSalary, antiguedad) => {
    if (antiguedad < 2 ){
        calculate = basicSalary 
    }
    else if(antiguedad === 2 || antiguedad ===3) { 
        calculate = basicSalary *1.05;
    }
    else if (antiguedad <=7 && antiguedad >=4) {
        calculate =basicSalary *1.1;
    }
    
    else if (antiguedad <=15 && antiguedad >=8) {
        calculate =basicSalary *1.15;
    }
    else if (antiguedad > 15) { 
        calculate = basicSalary *1.2;
    }
    return calculate
}
