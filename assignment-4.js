// problem 1
function seerToMon(seer) {
    if (seer < 0) { console.log('Sorry invalid weight!please enter a valid one.'); return 0; }
    var mon = seer / 40;
    if (seer % 40 == 0)     //seer is divisible that means no extra weight available
        console.log(mon, ' seer');
    else                    //for extra weight...
        console.log(mon.toFixed(0), ' seer ', seer % 40, ' kg');
    return mon;
}

seerToMon(100);
// problem 1 ended

// problem 2
var shirt = 100, pant = 200, shoe = 500;
function totalSales(shirtQuantity, pantQuantity, shoeQuantity) {
    return (shirt * shirtQuantity + pant * pantQuantity + shoe * shoeQuantity) //add by all quantity multiplied by value and return.
}

console.log('Total sales of the store is ', totalSales(3, 2, 0));

// problem 2 ended

// problem 3
function delivaryCost(clothQuantity) {
    if (clothQuantity < 0) { // clothQuantity can't be a negative number
        console.log('Please input a valid number.');
        return 0;
    }
    var totalCost = 0;
    if (clothQuantity <= 100) { //if clothQuantity is less than 100 then only cost is 100.
        totalCost = 100;
        console.log('After adding Less than 100 items clothes delivary cost ', totalCost);
        return totalCost;
    }
    totalCost += 100; // if cloth item is greater than 100, then cost 100 should be added for first 100 items.
    clothQuantity -= 100; // then substract that 100 items.
    console.log('After adding greater than 100 items clothes delivary cost ', totalCost);
    if (clothQuantity <= 100) {
        totalCost += clothQuantity * 80;
        console.log('After adding Less than 200 items clothes delivary cost ', totalCost);
        return totalCost;
    }

    totalCost += 100 * 80; // next 100 items delivary cost is 80 each.
    clothQuantity -= 100; // subtract 100.
    console.log('After adding greater than 200 items clothes delivary cost ', totalCost);
    totalCost += clothQuantity * 50; // next all items delivary cost is 50 each.
    return totalCost;
}

console.log('The overall total delivaryCost is ', delivaryCost(50));

// problem 3 ended

// problem 4
var myFriends = ['habila', 'nabila', 'kabila', 'jomila', 'nancy', 'futush'];

function perfectFriend(myString) { // taking string array
    for (var i = 0; i < myString.length; i++) {
        if (myString[i].length == 5) { // if any string matches which length is 5
            console.log('My true friend is ', myString[i]);//printing the string
            return myString[i]; // return the string
        }
    }
}

perfectFriend(myFriends);

// problem 4 ended
// thank you