// Triangle Funtion Start......
/*
    Step-1:(Get And Set value)
        1.Acceace the input Field using (id)
        2.Get Value From the input Field
        3.Convert the Value to Float(using perseFloat)
        4.set the value on the "b" and "h" Field
    Step-2:(Calculate And Set The Result in Area Calculation) 
        1.Calculate the useing the formula
        2.set ans in Area Calculation Field

*/
// Step-1 Fulction:(getSet)
    function getSet(id1, id2, dValue) 
        {
            const baseField = document.getElementById(id1);
            const baseFieldValue = baseField.value;
            const convertBaseFieldValue = parseFloat(baseFieldValue);

            const setBaseValue = document.getElementById(id2);

            if (isNaN(convertBaseFieldValue)) 
                {
                    setBaseValue.innerText = dValue;
                    baseField.placeholder = 'number pls!';
                } 
            else 
                {
                    setBaseValue.innerText = convertBaseFieldValue;
                    baseField.value = '';
                    baseField.placeholder = dValue;
                    return convertBaseFieldValue;
                }
        }

// Step-2 Function:(calculateSet)
    function calculateSet(value1, value2)
        {
            const calculateResultField = document.getElementById('calculate-result');
            const count = calculateResultField.childElementCount;
            let showCalculation;
            const Name = document.getElementById('Name');
            if(isNaN(value1) || isNaN(value2))
                {
                    showCalculation = 'Place Provide Value!!!';
                }
            else
                {
                    const Area = (0.5*value1*value2);
                    showCalculation = `
                    <div class="flex gap-[8px] justify-center mt-[10px] items-center lg:gap-[10px]">
                        <p class="font-normal text-[16px]">${count+1}.${Name.innerText}</p>
                        <p class="font-normal text-[16px]">${Area}cm<sup>2</sup></p>
                        <button class="btn btn-sm bg-[#1090d8] hover:bg-[#1090d8] text-[#ffffff] font-medium text-[14px]">m<sup>2</sup></button>
                    </div>
                    `;
                }
            calculateResultField.innerHTML += showCalculation;
        }

function triangleAreaCalculation()
    {
        // Get Value from Base input field
            const base = getSet('triangle-base', 'base-value', 'b');
        // Get Value from Base input field
            const hight = getSet('triangle-hight', 'hight-value', 'h');

        // Call CalculateSet funtion
            calculateSet(base, hight);

                 
        
    }


// Triangle Funtion End........