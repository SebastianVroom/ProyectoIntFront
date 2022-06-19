<template>
    <v-card color="amber lighten-3">
        <div class="headerdiv d-flex">
            <router-link :to="{name:'Landing'}">
            <v-img
                alt="hotel logo"
                src="../assets/Hlogo.png"
                max-height="100%"
                contain
                max-width="10vh"
            ></v-img>
            </router-link>
            <v-card-title> Hotel California</v-card-title>
            <v-spacer></v-spacer>
            <v-menu>
                <template v-slot:activator="{on,attrs}">
                <div v-bind="attrs" v-on="on" class='d-flex flex-column mr-3 mt-4'>
                    <v-icon class="mr-5" x-large>mdi-account</v-icon>
                    <span v-if='Object.entries(userdata).length != 0'>{{userdata.name}}</span>
                </div>
                </template>
                <v-card color="light-blue accent-1">
                    <v-card-actions>
                        <router-link v-if='Object.entries(userdata).length == 0' :to="{name:'login'}">
                        <v-btn color="amber lighten-3">
                            Log in
                        </v-btn>
                        </router-link>
                        <router-link v-if='Object.entries(userdata).length == 0' :to="{name:'auth'}">
                        <v-btn color="amber lighten-3">
                            Register
                        </v-btn>
                        </router-link>
                        <v-btn v-if='Object.entries(userdata).length != 0' @click='logout' color="amber lighten-3">
                            Logout
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-menu>
        </div>
        <v-app-bar
            >
            <v-tabs v-model="tab" background-color="light-blue accent-1" elevation="0">
                <v-tab v-for="t in tabs" v-bind:key="t.text"><router-link :to="t.link">{{t.text}}</router-link></v-tab>
            </v-tabs>
        </v-app-bar>
    </v-card>
</template>

<script>


export default {
    name:'HeaderComp',
    data(){
        return {
            tab:null
        }
    },
    mounted(){
        let route=this.$route.name.split('/').at(-1)
        let index = this.tabs.findIndex(el=>el.flag==route)
        this.tab = (index == -1)?null:index
    },
    computed:{
        userdata(){
            return this.$store.getters['userdata/getUserData']
        },
        tabs(){
            let resul = [
                {text:'Home',link:{ name: 'Landing'},flag:''},
            ]
            if (this.userdata.userType == 'clienteToken'){
                resul.push({text:'Reservas',link:{ name: 'Reservas'},flag:'reservas'})
            }
            return resul
        }
    },
    methods:{
        logout(){
            this.$store.dispatch('userdata/logout')
        }
    }
}
</script>

<style scoped>
.headerdiv{
    max-height: 10vh;
}
</style>