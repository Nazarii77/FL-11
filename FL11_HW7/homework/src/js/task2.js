let sConfirmation = true;
let wantstoplayagain = true;

sConfirmation = confirm('Do you want to play a game?');
while (wantstoplayagain) {
    let random1 = 0;
    let entered = '';
    let prize = 0;
    let alreadywon = false;
    let wantstocontinue = true;
    let lowrandom = 0;
    let highrandom = 8;
    let firstprize = 100;
    let secondprize = 50;
    let thirdprice = 25;
    let prizemultiplier = 1;
    let attemptsleft = 3;
    let defaultattempts = 3;
    let numberofattempts = 3;
    let possibleprize = 0;
    let extendrange = 4;
    let continueincrese =2;

    if (sConfirmation === null) {
        alert('You did not become a billionaire, but you could.');
    } else {
        while (wantstocontinue) {
            attemptsleft = defaultattempts;
            for (let i = 0; i < numberofattempts; i++) {
                if (alreadywon === false) {
                    random1 = Math.floor(Math.random() * (highrandom - lowrandom + 1) + lowrandom);
                    switch (i) {
                        case 0:
                            possibleprize = firstprize * prizemultiplier;
                            break;
                        case numberofattempts - (numberofattempts-1):
                            possibleprize = secondprize * prizemultiplier;
                            break;
                        case numberofattempts-1:
                            possibleprize = thirdprice * prizemultiplier;
                            break;
                        default:
                            console.log('Out of range for possible');
                            break;
                    }

                    entered = Number(prompt('Choose a roulette pockett number from ' + lowrandom + ' to ' 
					+ highrandom + '  \nAttempts left: ' + attemptsleft 
					+ ' \nTotal prize: ' + prize + '$ \nPossible prize on current attempt: ' + possibleprize + '$'));
                    attemptsleft = attemptsleft - 1;
                    if (random1 === entered) {
                        prize = prize + possibleprize;
                        alreadywon = true;
                    }
                }
            }
            if (alreadywon === false) {
                alert('x');
                wantstoplayagain = confirm('Do you want to play again?');
                wantstocontinue = false;
                sConfirmation = true;
            } else {
                wantstocontinue = confirm('Congratulation, you won!   Your prize is: ' + prize 
            + ' $. Do you want to continue?');
                if (wantstocontinue) {
                    alreadywon = false;
                    highrandom = highrandom + extendrange;
                    prizemultiplier = prizemultiplier * continueincrese;
                }
            }
        }
    }
}