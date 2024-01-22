
<template>
    <div class="background">


        <div class="container d-flex align-items-center justify-content-center vh-100">
            <div style="text-align: center;">

                <!--  <router-link to="/"></router-link>
                <router-link to="/Login">Login</router-link>
                <router-link to="/Dashboard">Dashboard</router-link>
                <router-link to="/comentarios">comentariosa</router-link>
                <router-view></router-view> -->

                <h1>Login</h1>
                <b-alert v-if="error" variant="danger" show>{{ error }}</b-alert>
                <form>
                    <b-row>
                        <b-col>
                            <img src="https://uxwing.com/wp-content/themes/uxwing/download/editing-user-action/user-login-icon.png"
                                alt="" width="100" height="100">
                        </b-col>
                    </b-row><br>

                    <b-row>
                        <b-col>
                            <input placeholder="Email" type="text" id="email" v-model="email" />
                        </b-col>
                    </b-row><br>

                    <b-row>
                        <b-col>
                            <input placeholder="Password" type="password" id="password" v-model="password" required />

                        </b-col>
                        <b-row>

                            <hr>
                            <b-button @click="handleLogin" variant="outline-success">Login

                            </b-button>

                        </b-row><br>

                    </b-row><br>

                    <b-row>
                        <b-col><br>
                            Aún no tiene credenciales?
                            <b-button type="submit" variant="outline-primary">Register</b-button>
                        </b-col>
                    </b-row>
                </form>



            </div>
        </div>
    </div>
</template>
  
<script>
import { login } from "@/api/auth/auth"



export default {
    name: 'Login',
    data() {
        return {
            email: null,
            password: null,
            error: null
        };
    },

    methods: {


        async handleLogin() {
            const crendeciales = {
                email: this.email,
                password: this.password,
            }

            try {
                const token = await login(crendeciales);
                console.log(token)
                //redirige al dashborad
                this.$router.push('/Dashboard');
                /* this.$router.push({ path: 'Dashboard' }); */
                //mensaje de error en caso de éxito
                //this.error = null
            }
            catch (error) {
                console.log("error front", error.message)
                this.error = this.error = error.message
            }
        },


    }

}


</script>
<!-- <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script> -->
  

<style scoped>
.background {
    /* background-image: url("https://e1.pxfuel.com/desktop-wallpaper/270/769/desktop-wallpaper-log-on-screen-login.jpg"); */
    background: linear-gradient(to right, #0dc444a4, #feb47b);
    display: flex;
}
</style>
  