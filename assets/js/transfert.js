
console.log("test en cours...")
const api_url =  
      "http://127.0.0.1:5000/api/transfert"; 


const url_tarif =  "http://127.0.0.1:5000/api/tarif/"; 
const url_ville =  "http://127.0.0.1:5000/api/ville/"; 

var transfert=[]
  
// Defining async function 
async function getapi(url) { 
    
    // Storing response 
    const response = await fetch(url); 
    
    // Storing data in form of JSON 
    var data = await response.json(); 
    console.log(data); 
    transfert=(data)
    if (response) { 
        //hideloader(); 
        console.log(response)
    } 
    trans=document.getElementById('trans')
    tr=""
    for(var i=0;i<transfert.length;i++)
    {
       
        tr+='<tr>   <td>'+(i+1)+'</td> <td>'+transfert[i]['codesecret']+'</td>  <td class="text-right">'+transfert[i]['nom']+'</td><td class="text-right">'+transfert[i]['nom']+'</td> <td class="text-right">'+transfert[i]['nom_expediteur']+'</td> <td class="text-right">'+transfert[i]['nom_beneficiaire']+'</td> <td class="text-right">'+transfert[i]['montant']+transfert[i]['devise']+'</td> <td class="text-right">'+transfert[i]['etat']+'</td>     <td class="text-right">   <a href="http://" class="text-primary"><i class="fa fa-edit"></i></a>  <a href="http://" class="text-danger"><i class="fa fa-trash"></i></a> </td>     </tr>';
    }
    console.log(tr)
   
    trans.innerHTML=(tr);

    
} 


getapi(api_url);
