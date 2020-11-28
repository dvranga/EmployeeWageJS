const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOUR=20;
const NUM_OF_WORKING_DAYS=20;
const MAX_HRS_IN_MONTH=160;
let empArray=new Array();

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
    empArray.push(getEmpDailyWage(dailyWrkHrs));
}

let empWage=0;
for(let dailyWage of empArray) empWage+=dailyWage;

empWage=getEmpDailyWage(totalEmpHrs);
console.log("Total Days: ",totalWorkingDays
        ,"  Total Hrs: ",totalEmpHrs," Emp Wage: ",empWage);


// for (let day = 0; day < NUM_OF_WORKING_DAYS; day++) {
//     let empCheck=Math.floor(Math.random()*10)%3;
//     totalEmpHrs +=getWorkingHours(empCheck);    
// }