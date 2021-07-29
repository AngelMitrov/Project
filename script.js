let calculatorBtn = document.getElementById("calculator");
let calculatorContainer = document.getElementById("calculatorContainer");
let aboutUsContainer = document.getElementById("aboutUsContainer");
let homeBtn = document.getElementById("homeBtn");
let homeContent = document.getElementById("homeContent");
let footer = document.getElementById("footer");

homeBtn.addEventListener("click", () => {
  changePageInView("home");
  aboutUsContainer.style.display = "block";
  footer.style.display = "block";
});

calculatorBtn.addEventListener("click", () => {
  changePageInView("calculator");
  aboutUsContainer.style.display = "none";
  footer.style.display = "none";
});


const changePageInView = (page) => {
  switch (page) {
    case "home":
      changeDisplay(
        homeContent,
        calculatorContainer,
        homeBtn,
        calculatorBtn,
      );
      break;
    case "calculator":
      changeDisplay(
        calculatorContainer,
        homeContent,
        calculatorBtn,
        homeBtn,
      );
      
      break;
    default:
      changeDisplay(
        homeContent,
        calculatorContainer,
        homeBtn,
        calculatorBtn,
      );
      break;
  }
};

const changeDisplay = (
  showEl,
  hideEl,
  activeBtn,
  inactiveBtn
) => {
  if (showEl) {
    showEl.style.display = "block";
  }
  if (hideEl) {
    hideEl.style.display = "none";
  }
  if (activeBtn) {
    activeBtn.classList.add("active");
  }
  if (inactiveBtn) {
    inactiveBtn.classList.remove("active");
  }
};

let popUp = document.getElementsByClassName("modal")[0];

calculateBtn.addEventListener("click", () => {
  popUp.style.display = "block";
})

document.getElementsByClassName("close")[0].addEventListener("click", () => {
    if(popUp.style.display = "block"){
      popUp.style.display = "none";
    }
})


document.getElementsByClassName("btnClose")[0].addEventListener("click", () => {
    if(popUp.style.display = "block"){
      popUp.style.display = "none";
    }
})


document.getElementById("calculateBtn").addEventListener("click", (e) =>{
  e.preventDefault();
  popUp.style.display = "block"
})



// MAIN PART OF CALCULATOR ==============================================================================================



var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").style.display = "none";
    document.getElementById("calculateBtn").style.display = "inline";

  } else {
    document.getElementById("nextBtn").style.display = "inline";
    document.getElementById("calculateBtn").style.display = "none";

  }
  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  // if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... :
  if (currentTab >= x.length) {
    //...the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}


function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false:
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class to the current step:
  x[n].className += " active";
}


// DEDUCTION TAX INCENTIVES =========================================================================================================


let deductionHeader = document.getElementById("directTaxIncentivesHeader");
let deductionSubHeader1 = document.getElementsByClassName("directTaxIncentivesSubHeaders")[0];
let deductionSubHeader2 = document.getElementsByClassName("directTaxIncentivesSubHeaders")[1];


var deductionCurrentTab = 0; // Current tab is set to be the first tab (0)
showDeductionTab(deductionCurrentTab); // Display the current tab

function showDeductionTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("directTaxIncentivesDiv");
  x[n].style.display = "block";
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevDeductionBtn").style.display = "none";
  } else {
    document.getElementById("prevDeductionBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextDeductionBtn").style.display = "none";
  } else {
    document.getElementById("nextDeductionBtn").style.display = "inline";
  }

  if(n == 3){
    document.getElementsByClassName("directTaxIncentivesSubHeaders")[0].style.display = "none"
    document.getElementsByClassName("directTaxIncentivesSubHeaders")[1].style.display = "none"
  } else {
    document.getElementsByClassName("directTaxIncentivesSubHeaders")[0].style.display = "inline"
    document.getElementsByClassName("directTaxIncentivesSubHeaders")[1].style.display = "inline"
  }
  

  switch(n){
    case 0:
    case 1:
      deductionHeader.textContent = "Investment based incentive (IBI)"
      break;
    case 2:
      deductionHeader.textContent = "Capacity based incentive (CBI)"
      break;
    case 3:
      deductionHeader.textContent = "Production based incentive (PBI)"
      break;
  }
  // ... and run a function that displays the correct step indicator:
  fixDeductionStepIndicator(n)
}

function deductionNextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("directTaxIncentivesDiv");
  // Exit the function if any field in the current tab is invalid:
  // if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[deductionCurrentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  deductionCurrentTab = deductionCurrentTab + n;
  // if you have reached the end of the form... :
  // Otherwise, display the correct tab:
  showDeductionTab(deductionCurrentTab);
}

function fixDeductionStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("deductionStep");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" deductionActive", "");
  }
  //... and adds the "active" class to the current step:
  x[n].className += " deductionActive";
}


// TAX CREDITS =========================================================================================================================


var taxCurrentTab = 0; // Current tab is set to be the first tab (0)
showTaxTab(taxCurrentTab); // Display the current tab

function showTaxTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("taxCreditsDiv");
  x[n].style.display = "block";
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevTaxBtn").style.display = "none";
  } else {
    document.getElementById("prevTaxBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextTaxBtn").style.display = "none";
  } else {
    document.getElementById("nextTaxBtn").style.display = "inline";
  }
  // ... and run a function that displays the correct step indicator:
  fixTaxStepIndicator(n)
}

function taxNextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("taxCreditsDiv");
  // Exit the function if any field in the current tab is invalid:
  // if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[taxCurrentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  taxCurrentTab = taxCurrentTab + n;
  // if you have reached the end of the form... :
  // Otherwise, display the correct tab:
  showTaxTab(taxCurrentTab);
}

function fixTaxStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("taxStep");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" taxActive", "");
  }
  //... and adds the "active" class to the current step:
  x[n].className += " taxActive";
}













// GENERATING ANNUAL VALUES DYNAMICALLY ===========================================================================



let addAnnualValuesStep = document.getElementById("annualValuesSteps");
let annualYearsGenerateBtn = document.getElementById("generateAnnualYears");
let annualYearsGenerateContainer = document.getElementById("generateYears");
let annualYearsContent = document.getElementById("annualValues");


let years = 0;

annualYearsGenerateBtn.addEventListener("click", function(e) {
  e.preventDefault()
  years = document.getElementById("yearsForAnnualValues").value;

  if(years != 0){
    annualYearsGenerateContainer.style.display = "none";
    let annualValuesBtns = document.getElementById("annualValuesButtons");
    annualValuesBtns.style.display = "block";
    document.getElementById("nextAnnualBtn").style.display = "inline";
  } else {
    let yearsInput = document.getElementById("yearsForAnnualValues")
    yearsInput.classList.add("placeholderError");
    yearsInput.setAttribute("placeholder", "INVALID INPUT! - Insert the ammount of years to generate inputs")
  }
  annualYearsContent.innerHTML = "";
  addAnnualValuesStep.innerHTML = "";
  for (let i = 0; i < years; i++) {
    addAnnualValuesStep.innerHTML += `<span class="annualValuesStep"></span>`;
    let annualValuesSingleContainer = document.createElement("div");
    annualValuesSingleContainer.classList.add("annualValuesDynamicContainer");
    if(i != 0){
      annualValuesSingleContainer.style.display = "none";
    }
            
        let yearHeader = document.createElement("h2");
        yearHeader.innerText = `Year ${i+1}`
        yearHeader.classList.add("annualValuesYears");
        annualValuesSingleContainer.appendChild(yearHeader);

        let br = document.createElement("br");
        annualValuesSingleContainer.appendChild(br);
        let br1 = document.createElement("br");
        annualValuesSingleContainer.appendChild(br1);
        

        let Row1 = document.createElement("div")
        Row1.className += "row"
        let Col1 = document.createElement("div")
        Col1.className += "col-sm-5"
        let annualEnergyInput = document.createElement("input");
        annualEnergyInput.setAttribute("id",`annualEnergyInput${i}`)
        annualEnergyInput.setAttribute("type", "number");
        annualEnergyInput.setAttribute("placeholder", "Annual Energy(kWh)");
        Col1.appendChild(annualEnergyInput)
        Row1.appendChild(Col1);



        let Col2 = document.createElement("div")
        Col2.className += "col-sm-5"
        let valueOfElecticitySavingsInput = document.createElement("input");
        valueOfElecticitySavingsInput.setAttribute("id",`valueOfElecticitySavingsInput${i}`)
        valueOfElecticitySavingsInput.setAttribute("type", "number");
        valueOfElecticitySavingsInput.setAttribute("placeholder", "Value of Electricity Savings ($)");
        Col2.appendChild(valueOfElecticitySavingsInput)
        Row1.appendChild(Col2);
        annualValuesSingleContainer.appendChild(Row1);

        let br4 = document.createElement("br");
        annualValuesSingleContainer.appendChild(br4);

        let annualValuesHeader1 = document.createElement("h4");
        annualValuesHeader1.innerText = "Depreciation (Commercial only)"
        annualValuesSingleContainer.appendChild(annualValuesHeader1);


        let Row2 = document.createElement("div")
        Row2.className += "row"
        let Col3 = document.createElement("div")
        Col3.className += "col-sm-5"
        let stateDepreciationPercentagesInput = document.createElement("input");
        stateDepreciationPercentagesInput.setAttribute("id",`stateDepreciationPercentagesInput${i}`)
        stateDepreciationPercentagesInput.setAttribute("type", "number");
        stateDepreciationPercentagesInput.setAttribute("placeholder", "State Depreciation Percentages (fraction)");
        Col3.appendChild(stateDepreciationPercentagesInput);
        Row2.appendChild(Col3);


        
        let Col4 = document.createElement("div")
        Col4.className += "col-sm-5"
        let federalDepreciationPercentagesInput = document.createElement("input");
        federalDepreciationPercentagesInput.setAttribute("id",`federalDepreciationPercentagesInput${i}`)
        federalDepreciationPercentagesInput.setAttribute("type", "number");
        federalDepreciationPercentagesInput.setAttribute("placeholder", "Federal Depreciation Percentages (fraction)");
        Col4.appendChild(federalDepreciationPercentagesInput)
        Row2.appendChild(Col4);
        annualValuesSingleContainer.appendChild(Row2);
        
        let br13 = document.createElement("br");
        annualValuesSingleContainer.appendChild(br13);

        let annualValuesHeader2 = document.createElement("h4");
        annualValuesHeader2.innerText = "Income tax rates specified as annual values"
        annualValuesSingleContainer.appendChild(annualValuesHeader2);


        let Row3 = document.createElement("div")
        Row3.className += "row"
        let Col5 = document.createElement("div")
        Col5.className += "col-sm-5"
        let stateIncomeTaxRateInput = document.createElement("input");
        stateIncomeTaxRateInput.setAttribute("id",`stateIncomeTaxRateInput${i}`)
        stateIncomeTaxRateInput.setAttribute("type", "number");
        stateIncomeTaxRateInput.setAttribute("placeholder", "State Income Tax Rate (%/year)");
        Col5.appendChild(stateIncomeTaxRateInput)
        Row3.appendChild(Col5);



        let Col6 = document.createElement("div")
        Col6.className += "col-sm-5"
        let federalIncomeTaxRateInput = document.createElement("input");
        federalIncomeTaxRateInput.setAttribute("id",`federalIncomeTaxRateInput${i}`)
        federalIncomeTaxRateInput.setAttribute("type", "number");
        federalIncomeTaxRateInput.setAttribute("placeholder", "Federal Income Tax Rate (%/year)");
        Col6.appendChild(federalIncomeTaxRateInput)
        Row3.appendChild(Col6);
        annualValuesSingleContainer.appendChild(Row3);

        let br21 = document.createElement("br");
        annualValuesSingleContainer.appendChild(br21);

        let annualValuesHeader3 = document.createElement("h4");
        annualValuesHeader3.innerText = "Operation and maintenance costs specified as annual values"
        annualValuesSingleContainer.appendChild(annualValuesHeader3);

        

        
        let Row4 = document.createElement("div")
        Row4.className += "row"
        let Col7 = document.createElement("div")
        Col7.className += "col-sm-5"
        let fixedCostInput = document.createElement("input");
        fixedCostInput.setAttribute("id",`fixedCostInput${i}`)
        fixedCostInput.setAttribute("type", "number");
        fixedCostInput.setAttribute("placeholder", "Fixed Cost ($)");
        Col7.appendChild(fixedCostInput)
        Row4.appendChild(Col7);
        


        let Col8 = document.createElement("div")
        Col8.className += "col-sm-5"
        let fixedRatePerCapacityInput = document.createElement("input");
        fixedRatePerCapacityInput.setAttribute("id",`fixedRatePerCapacityInput${i}`)
        fixedRatePerCapacityInput.setAttribute("type", "number");
        fixedRatePerCapacityInput.setAttribute("placeholder", "Fixed Rate Per Capacity ($/kW)");
        Col8.appendChild(fixedRatePerCapacityInput)
        Row4.appendChild(Col8);
        annualValuesSingleContainer.appendChild(Row4);
        

        let br8= document.createElement("br");
        annualValuesSingleContainer.appendChild(br8);


        let Row5 = document.createElement("div")
        Row5.className += "row"
        let Col9 = document.createElement("div")
        Col9.className += "col-sm-5"
        let fixedCostPerCapacityInput = document.createElement("input");
        fixedCostPerCapacityInput.setAttribute("id",`fixedCostPerCapacityInput${i}`)
        fixedCostPerCapacityInput.setAttribute("type", "number");
        fixedCostPerCapacityInput.setAttribute("placeholder", "Fixed Cost Per Capacity ($)");
        Col9.appendChild(fixedCostPerCapacityInput)
        Row5.appendChild(Col9);
        
      

        let Col10 = document.createElement("div")
        Col10.className += "col-sm-5"
        let variableRateByProductionInput = document.createElement("input");
        variableRateByProductionInput.setAttribute("id",`variableRateByProductionInput${i}`)
        variableRateByProductionInput.setAttribute("type", "number");
        variableRateByProductionInput.setAttribute("placeholder", "Variable Rate By Production ($/MWh)");
        Col10.appendChild(variableRateByProductionInput)
        Row5.appendChild(Col10);
        annualValuesSingleContainer.appendChild(Row5);

        let br33 = document.createElement("br");
        annualValuesSingleContainer.appendChild(br33);

        let Row6 = document.createElement("div")
        Row6.className += "row"
        let Col11 = document.createElement("div")
        Col11.className += "col-sm-5"
        let variableCostByProductionInput = document.createElement("input");
        variableCostByProductionInput.setAttribute("id",`variableCostByProductionInput${i}`)
        variableCostByProductionInput.setAttribute("type", "number");
        variableCostByProductionInput.setAttribute("placeholder", "Variable Cost By Production ($)");
        Col11.appendChild(variableCostByProductionInput)
        Row6.appendChild(Col11);
        annualValuesSingleContainer.appendChild(Row6);

        let br36 = document.createElement("br");
        annualValuesSingleContainer.appendChild(br36);

        let annualValuesHeader4 = document.createElement("h4");
        annualValuesHeader4.innerText = "Battery replacement at specified schedule"
        annualValuesSingleContainer.appendChild(annualValuesHeader4);


        let Row7 = document.createElement("div")
        Row7.className += "row"
        let Col12 = document.createElement("div")
        Col12.className += "col-sm-5"
        let batteryCapacityInput = document.createElement("input");
        batteryCapacityInput.setAttribute("id",`batteryCapacityInput${i}`)
        batteryCapacityInput.setAttribute("type", "number");
        batteryCapacityInput.setAttribute("placeholder", "Battery Capacity");
        Col12.appendChild(batteryCapacityInput)
        Row7.appendChild(Col12);


        
        let Col13 = document.createElement("div")
        Col13.className += "col-sm-5"
        let batteryReplacementOptionInput = document.createElement("input");
        batteryReplacementOptionInput.setAttribute("id",`batteryReplacementOptionInput${i}`)
        batteryReplacementOptionInput.setAttribute("type", "number");
        batteryReplacementOptionInput.setAttribute("placeholder", "Battery Replacement Option");
        Col13.appendChild(batteryReplacementOptionInput)
        Row7.appendChild(Col13);
        annualValuesSingleContainer.appendChild(Row7);

        let br5 = document.createElement("br");
        annualValuesSingleContainer.appendChild(br5);

        let Row8 = document.createElement("div")
        Row8.className += "row"
        let Col14 = document.createElement("div")
        Col14.className += "col-sm-5"
        let batteryReplacementCostInput = document.createElement("input");
        batteryReplacementCostInput.setAttribute("id",`batteryReplacementCostInput${i}`)
        batteryReplacementCostInput.setAttribute("type", "number");
        batteryReplacementCostInput.setAttribute("placeholder", "Battery Replacement Cost ($/kWh)");
        Col14.appendChild(batteryReplacementCostInput)
        Row8.appendChild(Col14);
        


        let Col15 = document.createElement("div")
        Col15.className += "col-sm-5"
        let batteryReplacementCostEscalationInput = document.createElement("input");
        batteryReplacementCostEscalationInput.setAttribute("id",`batteryReplacementCostEscalationInput${i}`)
        batteryReplacementCostEscalationInput.setAttribute("type", "number");
        batteryReplacementCostEscalationInput.setAttribute("placeholder", "Battery Replacement Cost Escalation (%/year)");
        Col15.appendChild(batteryReplacementCostEscalationInput)
        Row8.appendChild(Col15);
        annualValuesSingleContainer.appendChild(Row8);

        let br6 = document.createElement("br");
        annualValuesSingleContainer.appendChild(br6);

        let Row9 = document.createElement("div")
        Row9.className += "row"
        let Col16 = document.createElement("div")
        Col16.className += "col-sm-5"
        let batteryReplacementCostIfRequiredInput = document.createElement("input");
        batteryReplacementCostIfRequiredInput.setAttribute("id",`batteryReplacementCostIfRequiredInput${i}`)
        batteryReplacementCostIfRequiredInput.setAttribute("type", "number");
        batteryReplacementCostIfRequiredInput.setAttribute("placeholder", "Battery Replacement Cost If Required ($)");
        Col16.appendChild(batteryReplacementCostIfRequiredInput)
        Row9.appendChild(Col16);


        
        let Col17 = document.createElement("div")
        Col17.className += "col-sm-5"
        let batteryReplacementsPerYearInput = document.createElement("input");
        batteryReplacementsPerYearInput.setAttribute("id",`batteryReplacementsPerYearInput${i}`)
        batteryReplacementsPerYearInput.setAttribute("type", "number");
        batteryReplacementsPerYearInput.setAttribute("placeholder", "Battery Replacements Per Year");
        Col17.appendChild(batteryReplacementsPerYearInput)
        Row9.appendChild(Col17);
        annualValuesSingleContainer.appendChild(Row9);


        let br7 = document.createElement("br");
        annualValuesSingleContainer.appendChild(br7);


        let Row10 = document.createElement("div")
        Row10.className += "row"
        let Col18 = document.createElement("div")
        Col18.className += "col-sm-5"
        let secondBatteryReplacementCostInput = document.createElement("input");
        secondBatteryReplacementCostInput.setAttribute("id",`secondBatteryReplacementCostInput${i}`)
        secondBatteryReplacementCostInput.setAttribute("type", "number");
        secondBatteryReplacementCostInput.setAttribute("placeholder", "Battery Replacements Cost ($)");
        Col18.appendChild(secondBatteryReplacementCostInput)
        Row10.appendChild(Col18);
        annualValuesSingleContainer.appendChild(Row10);


        let br58 = document.createElement("br");
        annualValuesSingleContainer.appendChild(br58);


        let annualValuesHeader5 = document.createElement("h4");
        annualValuesHeader5.innerText = "Battery replacements as calculated"
        annualValuesSingleContainer.appendChild(annualValuesHeader5);

        
        let Row11 = document.createElement("div")
        Row11.className += "row"
        let Col19 = document.createElement("div")
        Col19.className += "col-sm-5"
        let thirdBatteryReplacementCostInput = document.createElement("input");
        thirdBatteryReplacementCostInput.setAttribute("id",`thirdBatteryReplacementCostInput${i}`)
        thirdBatteryReplacementCostInput.setAttribute("type", "number");
        thirdBatteryReplacementCostInput.setAttribute("placeholder", "Battery Replacements Cost ($)");
        Col19.appendChild(thirdBatteryReplacementCostInput)
        Row11.appendChild(Col19);
        annualValuesSingleContainer.appendChild(Row11);

        let br62 = document.createElement("br");
        annualValuesSingleContainer.appendChild(br62);

        let annualValuesHeader6 = document.createElement("h4");
        annualValuesHeader6.innerText = "Production Based Incentiv (PBI) specified as annual values"
        annualValuesSingleContainer.appendChild(annualValuesHeader6);

        
        let Row12 = document.createElement("div")
        Row12.className += "row"
        let Col20 = document.createElement("div")
        Col20.className += "col-sm-5"
        let pbiFederalInput = document.createElement("input");
        pbiFederalInput.setAttribute("id",`pbiFederalInput${i}`)
        pbiFederalInput.setAttribute("type", "number");
        pbiFederalInput.setAttribute("placeholder", "Federal");
        Col20.appendChild(pbiFederalInput)
        Row12.appendChild(Col20);
       
        let Col21 = document.createElement("div")
        Col21.className += "col-sm-5"
        let pbiStateInput = document.createElement("input");
        pbiStateInput.setAttribute("id",`pbiStateInput${i}`)
        pbiStateInput.setAttribute("type", "number");
        pbiStateInput.setAttribute("placeholder", "State");
        Col21.appendChild(pbiStateInput)
        Row12.appendChild(Col21);
        annualValuesSingleContainer.appendChild(Row12);

        let br69 = document.createElement("br");
        annualValuesSingleContainer.appendChild(br69);
 

        let Row13 = document.createElement("div")
        Row13.className += "row"
        let Col22 = document.createElement("div")
        Col22.className += "col-sm-5"
        let pbiUtilityInput = document.createElement("input");
        pbiUtilityInput.setAttribute("id",`pbiUtilityInput${i}`)
        pbiUtilityInput.setAttribute("type", "number");
        pbiUtilityInput.setAttribute("placeholder", "Utility");
        Col22.appendChild(pbiUtilityInput)
        Row13.appendChild(Col22);
        


        let Col23 = document.createElement("div")
        Col23.className += "col-sm-5"
        let pbiOtherInput = document.createElement("input");
        pbiOtherInput.setAttribute("id",`pbiOtherInput${i}`)
        pbiOtherInput.setAttribute("type", "number");
        pbiOtherInput.setAttribute("placeholder", "Other");
        Col23.appendChild(pbiOtherInput)
        Row13.appendChild(Col23);
        annualValuesSingleContainer.appendChild(Row13);

        let br75 = document.createElement("br");
        annualValuesSingleContainer.appendChild(br75);

        let annualValuesHeader7 = document.createElement("h4");
        annualValuesHeader7.innerText = "Production Tax Credit (PTC) specified as annual values"
        annualValuesSingleContainer.appendChild(annualValuesHeader7);

        let Row14 = document.createElement("div")
        Row14.className += "row"
        let Col24 = document.createElement("div")
        Col24.className += "col-sm-5"
        let ptcFederalInput = document.createElement("input");
        ptcFederalInput.setAttribute("id",`ptcFederalInput${i}`)
        ptcFederalInput.setAttribute("type", "number");
        ptcFederalInput.setAttribute("placeholder", "Federal");
        Col24.appendChild(ptcFederalInput)
        Row14.appendChild(Col24);

        
        let Col25 = document.createElement("div")
        Col25.className += "col-sm-5"
        let ptcStateInput = document.createElement("input");
        ptcStateInput.setAttribute("id",`ptcStateInput${i}`)
        ptcStateInput.setAttribute("type", "number");
        ptcStateInput.setAttribute("placeholder", "State");
        Col25.appendChild(ptcStateInput)
        Row14.appendChild(Col25);
        annualValuesSingleContainer.appendChild(Row14);

        
    annualYearsContent.appendChild(annualValuesSingleContainer);
  }
  document.getElementsByClassName("annualValuesStep")[0].className += " annualStepActive";
})


// ANNUAL VALUES NAVIGAION =================================================================================================================

let annualValuesCurrentTab = 0;
showAnnualValuesTab(annualValuesCurrentTab);

function showAnnualValuesTab(n) {
  var x = document.getElementsByClassName("annualValuesDynamicContainer");
  x[n].style.display = "block";
    if (n == 0) {
      document.getElementById("prevAnnualBtn").style.display = "none";
    } else {
      document.getElementById("prevAnnualBtn").style.display = "inline";
    }
    if (n == (x.length - 1)) {
      document.getElementById("nextAnnualBtn").style.display = "none";
    } else {
      document.getElementById("nextAnnualBtn").style.display = "inline";
    }
  fixAnnualValuesStepIndicator(n)
}

function annualValuesNextPrev(n) {
  var x = document.getElementsByClassName("annualValuesDynamicContainer");
  // if (n == 1 && !validateForm()) return false;
  x[annualValuesCurrentTab].style.display = "none";

  annualValuesCurrentTab = annualValuesCurrentTab + n;

  showAnnualValuesTab(annualValuesCurrentTab);
}



function fixAnnualValuesStepIndicator(n) {
  var i, x = document.getElementsByClassName("annualValuesStep");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" annualStepActive", "");
  }
  x[n].className += " annualStepActive";
}