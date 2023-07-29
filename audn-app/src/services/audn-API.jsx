const BASE_URL = "http://localhost:3001"
//import.meta.env.AUDN_API_REST;

  export const checkCredentials = async (username, password) => { //recibe email y password como parametros
    const url = `${BASE_URL}/users/login`; //va al endpoint
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    };
  
    return fetch(url, options)
      .then((response) => response.json())
      .catch((error) => {
        throw new Error(error.message);
      });
  };
  
  
