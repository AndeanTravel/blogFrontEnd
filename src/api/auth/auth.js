import api from "../api";




export const login = async (credenciales) => {
    try {
        const { data } = await api.post("/login", credenciales)
        //console.log("Respuesta de la solicitud:", data)
        return data
      } catch (error) {
        console.error("Error al realizar la solicitud:", error);
        throw new Error("Credenciales incorrectas"); //exepcion
      }

  
}





