const BASE_URL = import.meta.env.VITE_AUDN_API;
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
  
  export const fetchUserDataByUsername = async (username) => {
    const endpoint = `/users/${username}`;
    const url = `${BASE_URL}${endpoint}`;
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // Aquí puedes agregar los headers necesarios para autenticación, como el accessToken si es necesario.
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
  
