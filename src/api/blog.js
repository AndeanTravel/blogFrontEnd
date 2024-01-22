import api from "@/api/api";

/* Publicaciones */
export const publicaciones = async () => {
    try {

        const { data } = await api.get("/publicaciones")
        return data
      } catch (error) {
        console.error("Error al realizar la solicitud:", error);
        throw error;
      } 
  }

  export const crearPublicacion = async (nuevaPublicacion) => {
    try {
      const { data } = await api.post("/publicaciones", nuevaPublicacion);
      console.log("Nueva publicación creada:", data);
      return data;
    } catch (error) {
      console.error("Error al crear la nueva publicación:", error);
      throw error;
    }
  };

  export const editarPublicacion = async (id, datosActualizados) => {
    try {
      const { data } = await api.put(`/publicaciones/update/${id}`, datosActualizados);
      console.log("Publicación editada:", data);
      return data;
    } catch (error) {
      console.error("Error al editar la publicación:", error);
      throw error;
    }
  };

  export const eliminarPublicacion = async (id) => {
    try {
      console.log("id de publicacion:", id)
      //elminar publicacion por id
      const { data } = await api.delete(`/publicaciones/delete/${id}`);
      console.log("Publicación eliminada:", data);
      return data;
    } catch (error) {
      console.error("Error al eliminar la publicación:", error);
      throw error;
    }
  };