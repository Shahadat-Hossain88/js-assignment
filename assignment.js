function kil0meterTOMeter(kilometer) {
    console.log("Given kilometer value is :", kilometer);
    if (kilometer < 0) {
        return "Kilometer can't be a negative value.";
    }
    else {
        var meter = kilometer;
        var result = 1000 * meter;
        return result;
    }
}



function budgetCalculator(watch, mobile, laptop) {
    if (watch >= 0 && mobile >= 0 && laptop >= 0) {
        if (parseInt(watch) == watch && parseInt(mobile) == mobile && parseInt(laptop) == laptop) {  //check this condition is integer value.
            var watchmoney = 50 * watch;
            var mobilemoney = 100 * mobile;
            var laptopmoney = 500 * laptop;
            var totalBudget = watchmoney + mobilemoney + laptopmoney;
            return (totalBudget);
        }
        else {
            return "These element can not be float";
        }
    }
    else {
        return "These element can not be negative ";
    }
}



function hotelCost(night) {
    var cost = 0;
    if (night > 0) {
        if (night > 0 && night <= 10) {
            cost = 100 * night;
            return cost;
        }
        else if (night > 10 && night <= 20) {
            var first10Day = 100 * 10;
            night = night - 10;
            var second10Day = night * 80;
            cost = first10Day + second10Day;
            return cost;
        }
        else if (night > 20) {  //when day is more than 20
            var first10Day = 100 * 10;
            var second10Day = 80 * 10;
            night = night - 20;
            var longday = night * 50;
            cost = first10Day + second10Day + longday;
            return cost;
        }
    }
    else {
        return "Night is not negative or Zero";
    }

}


function megaFriend(friend) {
    var check = friend[0]; //The first value of friend array
    var store = []; //store for similar length of name.
    var k = 0; //for continue store array index.
    for (var i = 0; i < friend.length; i++) {
        if (friend[i].length >= check.length) {
            check = friend[i];
            store[k] = check;
            k++;
        }
    }
    return store;
}


var kilometer = kil0meterTOMeter(0.5); //value pass the kilometerTOmeter function
console.log("Converting Meter value is : ", kilometer);
var totalBudget = budgetCalculator(2, 2, 2); //value pass the budgetCalculator function
console.log("\nTotal budget for elements :", totalBudget);
var totalCOst = hotelCost(25); //value pass the hotelCost function
console.log("\nTotal Hotel cost :", totalCOst);
var friend = ['Shahadat', 'Shammigf', 'Rahat', 'Mim'];
var call = megaFriend(friend); //value pass the megaFriend function by call variavle;
console.log("\nThe leargest name of friend :", call);
