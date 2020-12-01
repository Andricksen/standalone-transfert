


document.getElementById('log').addEventListener('click',function(){

    var email=document.getElementById('login').value;
    var pass=document.getElementById('pass').value;
    console.log(email + ' '+pass)
    const api_url =  
    "http://127.0.0.1:5000/api/admin/"+email+'/'+pass; 


    getapi(api_url)
    //window.location.href='index.html'
})



async function getapi(url) { 
    
    // Storing response 
    const response = await fetch(url); 
    
    // Storing data in form of JSON 
    var data = await response.json(); 
   

   console.log(data[0]['id'])
   console.log(data[0]['name'])
   console.log(data[0]['email'])
    if (response) { 
        //hideloader(); 
        console.log(response)
        if(data.length==0)
        {
            document.getElementById('message').innerHTML="<div class='alert alert-danger'>Login ou mot de passe incorrect !</div>";
        }else
        {
            sessionStorage.setItem('_idAdmin',data[0]['id'])
            sessionStorage.setItem('_name',data[0]['name'])
            sessionStorage.setItem('email',data[0]['email'])
            window.location.href="index.html"
        }

    } 
   
   
    
    
} 