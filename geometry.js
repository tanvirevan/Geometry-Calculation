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
    function areaCalculateSet(value1, value2, Area, id)
        {
            const calculateResultField = document.getElementById('calculate-result');
            let showCalculation;
            const Name = document.getElementById(id);
            if(isNaN(value1) || isNaN(value2))
                {
                    showCalculation =`<p class="font-bold text-red-600 flex justify-center items-center">Place Fixed the Error!!!</p>`;
                    calculateResultField.innerHTML = showCalculation;
                }
            else
                {
                    if(calculateResultField.innerHTML === `<p class="font-bold text-red-600 flex justify-center items-center">Place Fixed the Error!!!</p>`)
                        {
                            calculateResultField.innerHTML = ''; 
                        }
                    const count = calculateResultField.childElementCount;
                    showCalculation = `
                    <div class="flex justify-start mt-[10px] items-center">
                        <p class="font-normal text-[16px] mr-[8px]">${count+1}. ${Name.innerText}</p>
                        <p class="font-normal text-[16px] mr-[8px]">${Area}cm<sup>2</sup></p>
                        <p class= "mr-[8px]"><i class="fa-solid fa-arrow-right"></i></p>
                        <button class="btn btn-sm mr-[8px] bg-[#1090d8] hover:bg-[#1090d8] text-[#ffffff] font-medium text-[14px]">m<sup>2</sup></button>
                    </div>
                    `;
                    calculateResultField.innerHTML += showCalculation;
                }
            
        }
    function pentagonCalculateSet(value, Area, id)
        {
            const calculateResultField = document.getElementById('calculate-result');
            let showCalculation;
            const Name = document.getElementById(id);
            if(isNaN(value))
                {
                    showCalculation =`<p class="font-bold text-red-600 flex justify-center items-center">Place Fixed the Error!!!</p>`;
                    calculateResultField.innerHTML = showCalculation;
                }
            else
                {
                    if(calculateResultField.innerHTML === `<p class="font-bold text-red-600 flex justify-center items-center">Place Fixed the Error!!!</p>`)
                        {
                            calculateResultField.innerHTML = ''; 
                        }
                    const count = calculateResultField.childElementCount;
                    showCalculation = `
                    <div class="flex justify-start mt-[10px] items-center">
                        <p class="font-normal text-[16px] mr-[8px]">${count+1}. ${Name.innerText}</p>
                        <p class="font-normal text-[16px] mr-[8px]">${Area}cm<sup>2</sup></p>
                        <p class= "mr-[8px]"><i class="fa-solid fa-arrow-right"></i></p>
                        <button class="btn btn-sm mr-[8px] bg-[#1090d8] hover:bg-[#1090d8] text-[#ffffff] font-medium text-[14px]">m<sup>2</sup></button>
                    </div>
                    `;
                    calculateResultField.innerHTML += showCalculation;
                }
            
        }

// Triangle Funtion Start......
function triangleAreaCalculation()
    {
        // Get Value from Base input field
            const base = getSet('triangle-base', 'base-value', 'b');
        // Get Value from Base input field
            const hight = getSet('triangle-hight', 'hight-value', 'h');

        // Call areaCalculateSet function
            const Area = (0.5*base*hight);
            areaCalculateSet(base, hight, Area, 'tri-name');         
        
    }
// Triangle Funtion End........


// Ractangle function Start
function ractangleAreaCalculation()
    {
        //Get Value from Width input field
            const w = getSet('rectangle-width', 'width-value', 'w');
        //Get Value From langth input Field
            const l = getSet('rectangle-length', 'length-value', 'l');
        
        // Call areaCalculateSet Function
            const Area = w * l;
            areaCalculateSet(w, l, Area, 'rac-name');
    }
// Ractangle function End

// parallelogram function Start
function parallelogramAreaCalculation()
    {
        //Get Value from base input field
            const base = getSet('parallelogram-base', 'paraBase-value', 'b');
        // Get Value from hight input field
            const hight = getSet('parallelogram-hight', 'paraHight-value', 'h');

        // Call Calculate Function
            const Area = base*hight;
            areaCalculateSet(base, hight, Area, 'para-name');

    }
// parallelogram function End

// Rhomnus function Start
function rhomnusAreaCalculation()
    {
        // Get value from d1 input field
            const p = getSet('rho-d1', 'p-value', 'p');
        // Get value from d2 input field
            const q = getSet('rho-d2', 'q-value', 'q');

        // Call Calculate Function
            const Area = (p*q)/2;
            areaCalculateSet(p, q, Area, 'rho-name');
    }
// Rhomnus function End

// Pentagon Function Start
function pentagonAreaCalculation()
    {
        const a = getSet('pen-a', 'a-value', 'a')
        

        const Area =(1/4 * Math.sqrt(5*(5+ 2*Math.sqrt(5))*Math.pow(a,2))).toFixed(2);

        pentagonCalculateSet(a, Area, 'penagon-name');
    }