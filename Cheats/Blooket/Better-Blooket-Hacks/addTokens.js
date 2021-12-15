javascript:

/*  --> PLEASE READ THIS!!! <---
  
  Do not change the numbers in this file! Blooket has a hard limit on how many tokens
  you can add everyday. The limit is 500 and you cannot bypass it. Do not mess with
  with this file if you do not know what you are doing!!!
  
*/


function refreshWindow(){location.reload()}async function getName(e){const t=await fetch("https://api.blooket.com/api/users/verify-token?token=JWT+"+e);return(await t.json()).name}async function addCurrencies(){const e=localStorage.token.split("JWT ")[1];200==(await fetch("https://api.blooket.com/api/users/add-rewards",{method:"PUT",headers:{referer:"https://www.blooket.com/","content-type":"application/json",authorization:localStorage.token},body:JSON.stringify({addedTokens:500,addedXp:300,name:await getName(e)})})).status?(document.body.innerHTML="<p>500 Tokens and 300 XP added to your account!</p>",setTimeout(refreshWindow,1e3)):alert("An error occured.")}addCurrencies();
