export async function rootLoader() {
  if (!localStorage.getItem('token')) {
    const response = await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token')
    .then(function(response){
      console.log(response);
  
      return response.json(); 
    })
    .then(function(data){
      console.log(data);
      
      localStorage.setItem('token', data.token);
      
    })
    .catch(function(error) {
      console.log(error);
    })
  
    return response;
  } else {
    return localStorage.getItem('token');
  }
}
