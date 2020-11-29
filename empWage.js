const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOUR=20;
const NUM_OF_WORKING_DAYS=20;
const MAX_HRS_IN_MONTH=160;
let empDailyWageArr=new Array();
let empDailyWageMap=new Map();

function getWorkingHours(empCheck){
    switch (empCheck){
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;       
    }
}

function getEmpDailyWage(totalEmpHrs){
    return totalEmpHrs*WAGE_PER_HOUR;
}


let totalEmpHrs=0;
let totalWorkingDays=0;
while (totalEmpHrs <= MAX_HRS_IN_MONTH &&
    totalWorkingDays<NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck=Math.floor(Math.random()*10)%3;
    let dailyWrkHrs= getWorkingHours(empCheck);
    totalEmpHrs+=dailyWrkHrs;
    empDailyWageArr.push(getEmpDailyWage(dailyWrkHrs));
}
//reduce method
getEmpWage=(totalWage,dailyWage)=>{
    return totalWage+dailyWage;
}
console.log(empDailyWageArr.reduce(getEmpWage));

//for loop
let totalWage =0;
const getEmpWage1=()=>{
    for(let wage of empDailyWageArr) totalWage+=wage;
    return totalWage;
}
console.log('total wage : ',getEmpWage1())
   

//show day wage 
let count=0;
 const showDailyWages=(dailyWage)=>{
     count++;
    return count+" - "+dailyWage;
}

let dailyWagesMapArr=empDailyWageArr.map(showDailyWages);
console.log('dailyWagesMapArr',dailyWagesMapArr);

//max wage 160
const showWageMax=(dailyWage)=>{
    return dailyWage.includes("160");
}

let showMaxWages=dailyWagesMapArr.filter(showWageMax)
console.log(showMaxWages);

//full wage time earned first occurenace
const showFullWageEarned=(dailyWage)=>{
   return dailyWage.includes("160");
}


let fullWageEarned=dailyWagesMapArr.find(showFullWageEarned);
console.log(fullWageEarned);

//check showMaxWage truely holding the maximum wages
const allMaxWages=(maxWage)=>{
   return maxWage.includes("160");
}
let resultMaxWage=showMaxWages.every(allMaxWages)
console.log(resultMaxWage);
//minimum
count1=0;
const showAllWages=(dailyWage)=>{
    count1++;
    return count1+" - "+dailyWage;
}

let showNewDailyWages=empDailyWageArr.map(showAllWages);
console.log(showNewDailyWages);
//min wage
const showMinWages=(allWages)=>{
    return allWages.includes("80");
}

let minWageArr=showNewDailyWages.filter(showMinWages);
console.log(minWageArr);

//first min wage 
const findFirstAccurence=(minWages)=>{
    return minWages.includes("80");
}

let resultMinWage=minWageArr.find(findFirstAccurence);
console.log(resultMinWage);

//find all are minimum
const checkMinimumWages=(minWage)=>{
    return minWage.includes("80");
}

let checkMinWage=minWageArr.every(checkMinimumWages);
console.log(checkMinWage);

//some contains min wage
let checkMin=showNewDailyWages.some(checkMinimumWages);
console.log(checkMin);

//number of days employee workedd

const findWorkingDays=(workingDays,day)=>{
    console.log(day,' day')
   if(day>0) workingDays++; 
   return workingDays;
}
let totalDays=empDailyWageArr.reduce(findWorkingDays,0);
console.log('totalWorkingDays',totalDays);

//UC_8

 totalEmpHrs=0;
 totalWorkingDays=0;
 let empDailyWageArr1=new Array();
 let empDailyWageMap1=new Map();

const calcDailyWage=(empHrs)=>{
    return empHrs*WAGE_PER_HOUR;
}

while(totalEmpHrs<=MAX_HRS_IN_MONTH &&
    totalWorkingDays < NUM_OF_WORKING_DAYS){
        totalWorkingDays++;
        let empCheck=Math.floor(Math.random()*10)%3;
        let empHrs=getWorkingHours(empCheck);
        totalEmpHrs += empHrs;
        empDailyWageArr1.push(calcDailyWage(empHrs))
        empDailyWageMap1.push(totalWorkingDays,calcDailyWage(empHrs));
    }

    console.log(empDailyWageMap1);
    function totalWages(totalWage, dailyWage){
        return totalWage+dailyWage;
    }

    console.log("UC_7A - Emp Wage Mapp total Hrs : ",
    Array.from(empDailyWageMap1.values()).reduce(totalWages,0));