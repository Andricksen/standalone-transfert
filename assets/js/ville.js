const api_url =  
      "http://127.0.0.1:5000/api/ville"; 

var villes=[]
  
// Defining async function 
async function getapi(url) { 
    
    // Storing response 
    const response = await fetch(url); 
    
    // Storing data in form of JSON 
    var data = await response.json(); 
    console.log(data); 
    villes=(data)
    if (response) { 
        //hideloader(); 
        console.log(response)
    } 


    vil=document.getElementById('ville')
    tr=""
    for(var i=0;i<villes.length;i++)
    {
       
        tr+='<tr> <td>'+(i+1)+'</td><td>'+villes[i]['nom']+'</td>   <td class="text-right">   <a href="http://" class="text-primary"><i class="fa fa-edit"></i></a>  <a href="http://" class="text-danger"><i class="fa fa-trash"></i></a> </td>  </tr>';
    }
    console.log(tr)
   
    vil.innerHTML=(tr);
    
} 
getapi(api_url);
