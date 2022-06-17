<template>
    <v-card color="amber lighten-3">
        <div class="headerdiv d-flex">
            <v-img
                alt="hotel logo"
                src="../assets/Hlogo.png"
                max-height="100%"
                contain
                max-width="10vh"
            ></v-img>
            <v-card-title> Hotel California</v-card-title>
            <v-spacer></v-spacer>
            <v-icon class="mr-5" x-large>mdi-account</v-icon>
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
            tab:null,
            tabs:[
                {text:'Home',link:'/'},
                {text:'Servicios',link:'/servicios'},
                {text:'perfil',link:''},
                {text:'Accesso empleados',link:''}
            ]
        }
    },
    mounted(){
        let route=this.$route.name.split('/').at(-1)
        this.tab = this.tabs.findIndex(el=>el.text==route)
    }
}
</script>

<style scoped>
.headerdiv{
    max-height: 10vh;
}
</style>