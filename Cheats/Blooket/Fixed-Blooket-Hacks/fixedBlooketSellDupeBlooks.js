async function getName(){const e=await fetch("https://api.blooket.com/api/users/verify-token",{method:"GET",headers:{accept:"application/json, text/plain, */*","accept-language":"en-US,en;q=0.9,ru;q=0.8"},credentials:"include"});return(await e.json()).name}async function getBlooks(e){const t=await fetch("https://api.blooket.com/api/users/blooks?name="+e,{headers:{accept:"application/json, text/plain, */*","accept-language":"en-US,en;q=0.9,ru;q=0.8"},credentials:"include"});return await t.json()}async function sellDupeBlooks(){const e=await getBlooks(await getName()),t=Object.entries(e).filter(e=>e[1]>1).map(e=>[e[0],e[1]-1]);for(const[e,a]of t)await fetch("https://api.blooket.com/api/users/sellblook",{method:"PUT",headers:{referer:"https://www.blooket.com/","content-type":"application/json"},credentials:"include",body:JSON.stringify({blook:e,name:await getName(),numSold:a})});t.length>0?alert("Results:\n"+t.map(e=>`    ${e[1]} ${e[0]}`).join("\n")):alert("No duplicate Blooks found.")}sellDupeBlooks();
