import React, { useState } from 'react';
import { Display, PageName, SectionButton, Wrapper} from './HomeStyles.js';

function Home(){
    const [firstValue, setFirstValue] = useState(0);
    const [secondValue, setSecondValue] = useState(0)
    const [operation, setOperation] = useState('');
    const [result, setResult] = useState(null);


    function getValues(e){ 
        const initialValue = e.target.value;
        const lastValue = e.target.value;
        
        if(!firstValue){
            setFirstValue(initialValue);
        }
        
        if(operation !== ''){
            setSecondValue(lastValue);       
        }
        
        if(firstValue && !operation){
            setFirstValue(firstValue + initialValue);
        } 

       if(secondValue && operation){
           setSecondValue(secondValue + lastValue);
       }
    }

    function deleteLastNumber(){ 
        if(firstValue && !operation){
            const deletedValue = [...firstValue];
            deletedValue.pop();
            setFirstValue(deletedValue );
        }else if(secondValue && operation){
            const deletedValue = [...secondValue];
            deletedValue.pop();
            setSecondValue(deletedValue);
        }
    }

    function getOperators(e){
        const getOperation = e.target.value;
        setOperation(getOperation);
    }

    function calculateValues(){
        switch(operation){
            case '+':
                setResult(Number(firstValue) + Number(secondValue));
                break;
            case '-': 
                setResult(Number(firstValue) - Number(secondValue));
                break;
            case '*':
                setResult(Number(firstValue) * Number(secondValue));
                break;
            case '/':
                setResult(Number(firstValue) / Number(secondValue));
                break;
            default:
        }

        return result
    }

    function clearDisplay(){
        setFirstValue(0);
        setSecondValue(0);
        setOperation('');
        setResult('');
    }

    return(
        <>
            <Wrapper>
                <PageName>
                    <h1>calc</h1> 
                </PageName>
                <Display>
                    <div>
                        <p>
                            {!result ? (!operation ? firstValue : secondValue) : result}  
                        </p>
                    </div>  
                </Display>
                <SectionButton>
                    <button value="7" onClick={getValues}>7</button>
                    <button value="8" onClick={getValues}>8</button>
                    <button value="9" onClick={getValues}>9</button>
                    <button  onClick={deleteLastNumber} className="delete">DEL</button>
                    <button value="4" onClick={getValues}>4</button>
                    <button value="5" onClick={getValues}>5</button>
                    <button value="6" onClick={getValues}>6</button>
                    <button value="+" onClick={getOperators}>+</button>
                    <button value="1" onClick={getValues}>1</button>
                    <button value="2" onClick={getValues}>2</button>
                    <button value="3" onClick={getValues}>3</button>
                    <button value="-" onClick={getOperators}>-</button>
                    <button value="." onClick={getValues}>.</button>
                    <button value="0" onClick={getValues}>0</button>
                    <button value="/" onClick={getOperators}>/</button>
                    <button value="*" onClick={getOperators}>X</button>
                    <button onClick={clearDisplay} className="reset">RESET</button>
                    <button onClick={calculateValues} className="equal">=</button>
                </SectionButton>
            </Wrapper>    
        </>
    );
}

export default Home;
