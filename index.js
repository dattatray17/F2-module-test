document.getElementById("img-2").disabled = true;
document.getElementById("img-3").disabled = true;
document.getElementById("img-4").disabled = true;

let userArray = [];

let noOfAttempt = 2;
let diceClickLeft = 3;
let totalScore = 0;

function displayForm() {
    document.getElementById('form').classList.remove('hidden');
}

function submitInfo() {
    let name = document.getElementById('name').value;
    let userName = document.getElementById('userName').value;
    let email = document.getElementById('email').value;
    if (name && userName && email) {
        let user = {
            Name: name,
            UserName: userName,
            Email: email,
        }
 
        userArray.push(user);
        document.getElementById("img-2").disabled = false;
        document.getElementById("img-1").disabled = true;
        alert('Your info has Submitted successfully! Click on next image to dispaly your info.')
        document.getElementById('form').classList.add('hidden');
    } else {
        alert(`Please fill all the fields.`)
    }
}

function displayInfo() {
    document.getElementById('info').textContent = `Name:${userArray[0].Name}, User Name:${userArray[0].UserName}, Email:${userArray[0].Email}`;
    document.getElementById('displayInfo').classList.remove('hidden');
    document.getElementById("img-3").disabled = false;
    document.getElementById("img-2").disabled = true;
}

function displayDice() {
    document.getElementById('displayInfo').classList.add('hidden');
    noOfAttempt--;
    console.log(`attempt remaining= ${noOfAttempt}`);
    document.getElementById('attemptsLeft').textContent = noOfAttempt;
    document.getElementById('diceWithScore').classList.remove('hidden');
    document.getElementById("img-3").disabled = true;
}

function diceClick() {
    diceClickLeft--;
    document.getElementById('diceClicks').textContent= diceClickLeft;
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    totalScore += randomNumber;
    document.getElementById('score').textContent = totalScore;
    if (diceClickLeft === 0) {
        document.getElementById("dice-Image").disabled = true;
        document.getElementById('score').textContent = totalScore;
        if (totalScore >= 10) {
            alert('Congratulations ! Your total score is greater than 10. Click on next Image to avail your coupon code.');
            document.getElementById('diceWithScore').classList.add('hidden');
            document.getElementById("img-4").disabled = false;
        } else {
            if (noOfAttempt != 0) {
                alert('Your score is less than 10. Try once again');
                document.getElementById("img-3").disabled = false;
                diceClickLeft = 3;
                totalScore = 0;
                document.getElementById("dice-Image").disabled = false;
                document.getElementById('diceWthScore').classList.add('hidden');
                console.log(`diceClickLeft = ${diceClickLeft}`);
                console.log(`totalScore = ${totalScore}`);
 
            } else {
                document.getElementById('score').textContent = totalScore;
                alert(' Bad luck! You have exausted all your attempts. Please begin again');
            }
        }
    }
}

function generateCouponCode() {
    document.getElementById("img-4").disabled = true;
    let coupon = '';
    for (let i = 0; i < 12; i++) {
        coupon += Math.floor(Math.random() * 10);
    }
    alert(`Congratulations 🎉🎉🎊🎊😊😊!!! You have successfully generated a coupon. Your coupon code is ${coupon}`)
    document.getElementById('congratsImage').classList.remove('hidden');
}

