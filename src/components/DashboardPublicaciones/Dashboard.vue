<template>
  <div class="background">
    <div class="container d-flex align-items-center justify-content-center vh-100">
      <h1>Lista de publicaciones</h1>
      <div style="text-align: center;">

      </div>
      <b-container class="bv-example-row">
        <b-row>

          <b-col>
            <b-button @click="mostrarModal" variant="outline-success">
              Nueva Publicación
            </b-button>
          </b-col>

        </b-row>
      </b-container>

      <!-- Modal para nueva publicación -->
      <b-modal v-model="modalPublicacion" title="Nueva Publicación" hide-footer>
        <!-- Contenido del modal -->
        <b-form @submit.prevent="crearNuevaPublicacion">
          <!-- formulario -->
          <b-form-group label="Título">
            <b-form-input v-model="nuevaPublicacion.titulo" required></b-form-input>
          </b-form-group>
          <b-form-group label="Contenido">
            <b-form-textarea v-model="nuevaPublicacion.contenido" required></b-form-textarea>
          </b-form-group>
          <!-- Botones para enviar y cerrar el modal -->
          <b-button class="mt-3" @click="crearNuevaPublicacion" type="submit" variant="outline-success"
            block>Guardar</b-button>
          <b-button class="mt-2" @click="cerrarModal" variant="outline-danger" block>Cancelar</b-button>
        </b-form>
      </b-modal>

      <b-row>
        <!-- bucle para representar la información en las cards -->
        <b-col md="4" v-for="(publicacion, index) in publicaciones" :key="index"><br>
          <b-card :header="publicacion.titulo" header-tag="header" border-variant="dark" header-bg-variant="transparent">
            <!-- Contenido traído de BD -->
            <b-card-text>{{ publicacion.contenido }}</b-card-text>
            <b-button-group>
              <b-button @click="editarPublicacion (publicacion.id)" variant="link">Editar</b-button>
              <b-button @click="eliminarPublicacion(publicacion.id)" variant="link"
                style="color: red;">Eliminar</b-button>
            </b-button-group>
          </b-card>
        </b-col>
      </b-row>
    </div>



  </div>

  <!-- <router-link to="/crear-publicacion">Crear Publicación</router-link> -->
</template>
  
<script>
import { publicaciones, crearPublicacion, eliminarPublicacion, editarPublicacion } from "@/api/blog"


export default {
  name: 'Dashboard',
  data() {
    return {
      publicaciones: [],
      editarPublicacion: null,
      modalPublicacion: false,
      obtenerDetallesPublicacion:[],
      nuevaPublicacion: {
        titulo: "",
        contenido: "",
        user_id: 2
      },

      publicacionEditada: {
        id: null,
        titulo: "",
        contenido: ""
      },

    };
  },
  async created() {
    await this.traerPublicaciones();


  },

  methods: {
    async traerPublicaciones() {

      //const { dashboard } = await publicaciones()

      try {

        // funcion de publicaciones
        const listaPublicaciones = await publicaciones();
        console.log("exito, pulicaciones cargadas", listaPublicaciones)
        // data dee publicaciones
        this.publicaciones = listaPublicaciones;
      } catch (error) {
        console.error("Error al cargar las publicaciones:", error);
      }
    },

    mostrarModal() {
      this.modalPublicacion = true;
    },
    cerrarModal() {
      this.modalPublicacion = false;
    },

    async crearNuevaPublicacion() {
      try {
        // Llama a la función para crear una nueva publicación
        await crearPublicacion(this.nuevaPublicacion);
        console.log("Nueva publicación creada correctamente");
        // Vuelve a cargar las publicaciones después de crear una nueva
        await this.traerPublicaciones();
        // Cierra el modal después de crear la nueva publicación
        this.cerrarModal();
      } catch (error) {
        console.error("Error al crear la nueva publicación:", error);
      }
    },
    
    async editarPublicacionCreada(){
      try{
        await editarPublicacion(this.publicacionEditada, this.publicacionEditada);
        console.log("Publicación editada correctamente");
        await this.traerPublicaciones();

      } catch (error){
        console.error("Error al editar la publicación:", error);
      }
    },

    

    /* obtenerDetallesPublicacion(id) {
      return editarPublicacion(id);
    }, */

    /* obtenerDetallesPublicacion(id) {
      editarPublicacion(id)
        .then((detalles) => {
          this.publicacionEditada = detalles;
          this.modalPublicacion = true;
        })
        .catch((error) => {
          console.error("Error al cargar detalles de la publicación:", error);
        });
    }, */

    async eliminarPublicacion(id) {
      try {
        console.log("vamos aqui con la elimincacion", id)
        await eliminarPublicacion(id);
        await this.traerPublicaciones();
      } catch (error) {
        console.error("Error al eliminar la publicación:", error);
      }
    },

  }

}

</script>
  

<style scoped>
.background {
  /* background-image: url("https://e1.pxfuel.com/desktop-wallpaper/270/769/desktop-wallpaper-log-on-screen-login.jpg"); */
  background: linear-gradient(to right, #0dc444a4, #feb47b);
  display: flex;
}
</style>
  