javascript:

/*Doesn't do anything yet*/

console.log('User Connected To: Kali Linux 💀');
var activateQ = confirm('Launch Virtual Box?');
var loaded = false;
var beefCmndExit = false;
var beefHookUsername = false;
var beefHookingUsername = 'hook';
var beefHookWinStreak = false;
var beefHookingWinStreak = 1;
var beefHookTokensBetted = false;

function checkQ2() {
    console.log('Loading Required Assets For Virtual Box.');
    console.log('Loaded Required Assets!');
    var selectProgram2 = prompt('Which Program Do You Want To Launch? iTs cAsE sEnSiTiVe. If You Want To Exit Type exit.');
    if (selectProgram2 == 'beEF') {
        beefLaunch();
    }
    else {
        if (selectProgram2 == 'exit') {
            console.log('Exiting Virtual Box...');
            alert('Exiting From Virtual Box...');
        }
        else {
            console.log('Invalid Program Name.');
            alert('Invalid Program Name.');
        }
    }
}

function beefCmnd() {
    if (beefCmndExit == false) {
    var cmndLine = prompt('Enter The Command You Want To Execute In beEF:');
    if (cmndLine == '/exit') {
        beefCmndExit = true;
        console.log('Disconecting From beEF...');
        alert('Disconected From beEF!');
        var activateQ2 = confirm('Launch Virtual Box?');
        if (activateQ2 == true) {
            checkQ2();
        }
        else {
            alert('Virtual Box Shutted Down.');
            console.log('Virtual Box Shutted Down.');
        }
    }
    if (cmndLine == '/create hook') {
        console.log('/create hook command line ran.');
        var hookCmnd = prompt('Enter The Event When Your Hook Should Run (username, winStreak, tokensBetted) :');
        if (hookCmnd == 'username') {
            var usernameHookAsk = prompt('Enter The Username That Activates The Hook:');
            function afterUsernameHook() {
                console.log('Hook Created! Fires on username ' + beefHookingUsername + ' !');
                alert('Hook Created! Fires on username ' + beefHookingUsername + ' !');
                setTimeout(beefCmnd,1000)
            }
            beefHookUsername = true;
            beefHookingUsername = usernameHookAsk;
            console.log('Creating Hook...');
            alert('Creating Hook...');
            setTimeout(afterUsernameHook,2000)
        }
        if (hookCmnd == 'winStreak') {
            var winHookAsk = prompt('Enter The Win Streak That Activates The Hook:');
            function afterWinHook() {
                console.log('Hook Created! Fires on winstreak ' + beefHookingWinStreak + ' !');
                alert('Hook Created! Fires on Win Streak ' + beefHookingWinStreak + ' !');
                setTimeout(beefCmnd,1000)
            }
            beefHookWinStreak = true;
            beefHookingWinStreak = winHookAsk;
            console.log('Creating Hook...');
            alert('Creating Hook...');
            setTimeout(afterWinHook,2000)
        }
    }
    else {
        console.log('Invalid Command Line.');
        alert('Invalid Command Line.');
        beefCmnd();
    }
    }
}
function inBeef() {
    console.log('Connected To beEF!');
    alert('Connected You To beEF!');
    beefCmnd();
}

function beefLaunch() {
    console.log('Launching beEF.');
    alert('beEF Is Successfully Loaded!');
    console.log('Connecting To beEF...');
    alert('Connecting You To Beef...');
    beefCmndExit = false;
    setTimeout(inBeef,3000);
}
if (activateQ == true) {
    console.log('Loading Required Assets For Virtual Box.');
    console.log('Loaded Required Assets!');
    var selectProgram = prompt('Which Program Do You Want To Launch? iTs cAsE sEnSiTiVe. If You Want To Exit Type exit.');
    if (selectProgram == 'beEF') {
        beefLaunch();
    }
    else {
        if (selectProgram == 'exit') {
            console.log('Exiting Virtual Box...');
            alert('Exiting From Virtual Box...');
        }
        else {
            console.log('Invalid Program Name.');
            alert('Invalid Program Name.');
        }
    }
}
else {
   alert('Virtual Box Shutted Down.');
   console.log('Virtual Box Shutted Down.');
}
