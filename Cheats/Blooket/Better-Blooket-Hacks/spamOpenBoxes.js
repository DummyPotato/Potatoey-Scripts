var totalAmountOfTokensSpent=Number("0"),requestedBox="NotGiven",boxPrice=Number("0"),resultsVal="NotGiven",openAmount=Number("0"),capitalize=e=>e.charAt(0).toUpperCase()+e.slice(1);(async e=>{let[o,t]=e;requestedBox=o;var a=JSON.parse(atob(localStorage.token.split(".")[1])).name,r=await fetch("https://api.blooket.com/api/users/tokens?name="+a,{headers:{referer:"https://www.blooket.com/","content-type":"application/json",authorization:localStorage.token}}),n={blizzard:25,spooky:25,aquatic:25,bot:20,space:20,breakfast:15,medieval:15,wonderland:20}[o],s=t>Math.floor(r/n)?Math.floor(r/n):t,i=s;new Promise(e=>{inv=[],end=(o=>{clearInterval(o),e({fail:!1,blooks:inv})});let t=setInterval(()=>{if(!s)return end(t);fetch("https://api.blooket.com/api/users/unlockblook",{headers:{authorization:localStorage.token,"content-type":"application/json;charset=UTF-8"},referrer:"https://www.blooket.com/",body:JSON.stringify({name:a,box:o}),method:"PUT"}).then(async e=>200!=e.status?end(t):(inv.push(await e.json()),--s?void 0:end(t))).catch(e=>end(t))},128)}).then(async e=>{if(e.fail)return alert("You don't have enough coins to open this box!");let o={};Promise.all(e.blooks).then(e=>{e.map(e=>e.unlockedBlook).forEach(e=>{o[e]=(o[e]||0)+1}),resultsVal=Object.entries(o).map(e=>`    ${e[1]} ${e[0]}`).join(","),blookValues={Toast:5,Cereal:5,Yogurt:5,"Breakfast Combo":5,"Orange Juice":5,Milk:5,Waffle:20,Pancakes:20,"French Toast":75,Pizza:75,Elf:5,Witch:5,Wizard:5,Fairy:5,"Slime Monster":5,Jester:20,Dragon:20,Queen:20,Unicorn:75,King:200,"Two of Spades":5,"Eat Me":5,"Drink Me":5,Alice:5,"Queen of Hearts":5,Dormouse:20,"White Rabbit":20,"Cheshire Cat":20,Caterpillar:75,"Mad Hatter":75,"King of Hearts":200,Earth:5,Meteor:5,Stars:5,Alien:5,Planet:20,UFO:20,Spaceship:75,Astronaut:200,"Pink Astronaut":300,"Yellow Astronaut":300,"Black Astronaut":300,"Orange Astronaut":300,"Red Astronaut":300,"Brown Astronaut":300,"Green Astronaut":300,"Lil Bot":5,"Lovely Bot":5,"Angry Bot":5,"Happy Bot":5,Watson:20,"Buddy Bot":20,"Brainy Bot":75,"Mega Bot":200,"Old Boot":5,Jellyfish:5,Clownfish:5,Frog:5,Crab:5,Pufferfish:20,Blobfish:20,Octopus:20,Narwhal:75,"Baby Shark":200,Megalodon:250,Pumpkin:5,"Swamp Monster":5,Frankenstein:5,Vampire:5,Zombie:20,Mummy:20,Werewolf:75,Ghost:200,"Haunted Pumpkin":300,"Snow Globe":5,"Holiday Gift":5,"Hot Chocolate":5,"Holiday Wreath":5,"Gingerbread Man":20,"Gingerbread House":20,Snowman:75,"Santa Claus":200,"Frost Wreath":300,"Tropical Globe":300};var t=Number("0"),a=Number("0");for(const[e,r]of Object.entries(o))t+=blookValues[e]*r,a+=1;"Blizzard"==requestedBox?boxPrice=25:"Aquatic"==requestedBox?boxPrice=25:"Bot"==requestedBox?boxPrice=20:"Space"==requestedBox?boxPrice=20:"Breakfast"==requestedBox?boxPrice=15:"Medieval"==requestedBox?boxPrice=15:"Wonderland"==requestedBox&&(boxPrice=20);var r="Requested Box: "+requestedBox,n="Total Amount of Tokens Spent : "+boxPrice*i,s="Total Amount of Blooks Unlocked: "+a,l="Cost of Total Blooks Unlocked: "+t;document.body.innerHTML="<p>"+r+"</p><p>"+n+"</p><p>"+s+"</p><p>"+l+"</p><p>Results:</p><p>"+resultsVal+"</p>"})})})([(e=>e.charAt(0).toUpperCase()+e.slice(1))(prompt('What box do you want to open? (e.g. "Space") The limited boxes will not open if they are not available')),Number(prompt("How many boxes do you want to open?"))]);