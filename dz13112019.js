
let money,time;
var numchooseOptExpenses=1;
function start (){

     money =+prompt("Ваш бюджет на месяц,",0);
     time =prompt("Введите дату в формате YYYY-MM-DD","YYYY-MM-DD");

     while(isNaN(money) || money == "" || money== null)
     {
        money =+prompt("Ваш бюджет на месяц,",0);
     }
}
//start();


let appData ={
    budget:money,
    timeData: 0,
    expenses: {

    },
    optionalExpenses:{
        
    },
    income:0,
    savings:true,
};

function chooseExpenses(){
for (let i=0; i<2;i++)

{   let a = prompt("Введите обязательную статью расходов в этом месяце");
    console.log("i после первого вопроса"+i);
        if (a<=0 || a>0 && typeof(a) != null && a != '' && a.length <50)
        {
            alert("статья расходов обязательное поле введите название правильно");
            i--;
            console.log("i после не верного значения"+i);

        }    
        else
    {
        
       for(let y=0;y<1;y++)
       {


        let b = +prompt("Во сколько обойдется статья расходов ->"+a, 0);
                if (b>0)
                {
                    appData.expenses[a] = b;
                    console.log("y "+y);
                    console.log("i после верного значения второго вопроса"+i);
                }

                else{
                alert("здесь должно быть число, повторите ввод для статьи расходов ->"+ a);
                y--;
                console.log("y "+y);
                console.log("i после не верного ответа на второй вопрос"+i);
            
                }
        }
    }
   }
}
//chooseExpenses();


console.log(appData);

appData.moneyPerDay=0;
console.log(appData);
function detectDayBudget(){
appData.moneyPerDay = (appData.budget/30).toFixed(2);


alert ("Бюджет на 1 день составляет " + appData.moneyPerDay + " грн.");


if (appData.moneyPerDay < 100) {
    alert("Это минимальный уровень достатка!");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    alert("Это средний уровень достатка!");
} else if(appData.moneyPerDay > 2000) {
    alert("Это высокий уровень достатка!");
} else {
    alert("Произошла ошибка");
}

}
//detectDayBudget()
function checkSaving(){
    if (appData.savings==true){
        let save =+prompt("Сумма Ваших накоплений ?");
        let percent=+prompt("под какой процент ?");
        appData.monthIncome=(save/100/12*percent).toFixed(2);
        alert("Ежемесячный доход от накоплений состовляет : "+appData.monthIncome+" грн.");

    }
}
checkSaving();

function chooseOptExpenses(){
    
    for (let i=0;i<3;i++){
        
        let answer= prompt("введите статью необязательных расходов");
        appData.optionalExpenses[numchooseOptExpenses]=answer;
        numchooseOptExpenses++;
    }
}
chooseOptExpenses();
console.log(appData);