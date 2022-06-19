<template>
    <div heigth="100vh" class="background d-flex justify-center">
        
    <v-container>
        <HeaderComp></HeaderComp>
        <v-row>
            <v-col cols="8" offset="2">
                <v-sheet outlined elevation="0">
                    <v-card color="light-blue accent-1">
                        <ValidationObserver v-slot="{valid}">
                        <v-card-subtitle>Login</v-card-subtitle>
                            <v-card-text>
                                    <ValidationProvider rules="required|email" v-slot="{errors}">
                                        <v-text-field v-model="loginForm.email" :error-messages="errors" placeholder="mail" background-color="white" outlined filled></v-text-field>
                                    </ValidationProvider>
                                    
                                    <ValidationProvider rules="required" v-slot="{errors}">
                                        <v-text-field v-model="loginForm.password" :error-messages="errors" placeholder="pass" background-color="white" outlined filled type="password"></v-text-field>
                                    </ValidationProvider>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn @click="validaLogin(valid)" class="ml-4" color='amber lighten-3'>Login</v-btn>
                            </v-card-actions>     
                        </ValidationObserver>
                    </v-card>
                </v-sheet>
            </v-col>
        </v-row>
    </v-container>
    <v-snackbar v-model="displayErr" dark :color='msgColor'>{{displayMsg}}</v-snackbar>
    </div>
</template>

<script>
import {ValidationProvider, ValidationObserver,extend} from 'vee-validate';
import HeaderComp from '../components/Header.vue';
import { required, email } from 'vee-validate/dist/rules'

extend('email',{...email,
    message:'Este campo debe ser email'
})
extend('required',{...required,
    message:'Este campo es requerido'
})

export default{
    components:{
        ValidationObserver,ValidationProvider,HeaderComp
    },
    data(){
        return{
            loginForm:{
                password:'',
                email:''
            },
            displayErr:false,
            displayMsg:'',
            msgColor:'warning'
        }
    },
    methods:{
        validaLogin(valid){
            if(valid){
                this.submit()
            }else{
                this.displayErr = true
                this.displayMsg='Necesita rellenar el formulario correctamente'
                this.msgColor='error'
            }
        },
        async submit(){
            try{
                await this.$store.dispatch('userdata/loguser',this.loginForm)
                this.displayErr = true
                this.displayMsg='Peticion procesada correctamente'
                this.msgColor='success'
            }catch(e){
                this.displayErr = true
                this.displayMsg='Error al procesar peticion'
                this.msgColor='error'
            }
        }
    }
}
</script>

<style scoped>
.background{
  background-color: #FFF8E1;
  height:100vh;
;
}
.backgroundalt{
    background-color: #80D8FF;
}
</style>
