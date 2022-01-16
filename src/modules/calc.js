import { animate } from "./helper";

const calc = () => {


    const calcType = document.getElementById('calc-type'),
          calcTypeMaterial = document.getElementById('calc-type-material'),
          calcSquare = document.getElementById('calc-input'),
          calcTotal = document.getElementById('calc-total'),
          calcBlock = document.getElementById('calc');
    
    
   
    
    let interval;
    let totalValue = 0;

    // const checkInput = (input) => {
        
    // };
    // checkInput(calcSquare);
    
    const countCalc = () => {
       
        const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
        const calcTypeMaterialValue = +calcTypeMaterial.options[calcTypeMaterial.selectedIndex].value;
        calcSquare.addEventListener('input', (e) => {
            calcSquare.value = e.target.value.replace(/\D+/, '');
            
        });
        const calcSquareValue = calcSquare.value;
       
        if (calcTypeValue && calcTypeMaterialValue && calcSquareValue) {
            totalValue = calcSquareValue * calcTypeValue * calcTypeMaterialValue;
            
        } else {
            totalValue = 0;
        }
        
        return totalValue;
        
    };
    
    
    if (calcBlock) {
        calcBlock.addEventListener('input', (e) => {
            if (e.target === calcType || e.target === calcTypeMaterial || e.target === calcSquare) {
                 
                clearTimeout(interval);
                    
                countCalc();
                
                
                const time = 1000; // время отводимое на перебор цифр
                const step = 100; // шаг перебора
                let n = 0; // число отсчитывается от нуля
                let t = Math.round(time / +totalValue / step);
    
                if (totalValue != 0) {
                    
                    interval = setTimeout(() => {
                        animate({
                            duration: 500,
                            timing(timeFraction) {
                                return timeFraction;
                            },
                            draw(progress) {
                                calcTotal.placeholder = Math.round(progress * totalValue) + '₽';
                            }
                        });
                    }, 200);
                }
                
            }
        });
    }

    
};

export default calc;