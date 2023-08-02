const BASE_URL = "http://localhost:3001"
//import.meta.env.AUDN_API_REST;

  export const checkCredentials = async (username, password) => { //recibe email y password como parametros
    console.log(username, password)
    const url = `${BASE_URL}/users/login`; //va al endpoint
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    };
  
    return fetch(url, options)
  };
  
  export const fetchUserDataByUsername = async (username, token) => {
    const endpoint = `/users/${username}`;
    const url = `${BASE_URL}${endpoint}`;
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "audn-access-token": token,
        },
      });
      if (!response.ok) {
        throw new Error("No se pudo obtener los datos del usuario.");
      }
      const userData = await response.json();
      console.log(userData)
      return userData;
    } catch (error) {
      console.error("Error al obtener los datos del usuario: ", error);
      throw error;
    }
  };
  
