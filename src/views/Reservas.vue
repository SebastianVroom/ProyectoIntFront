<template>
    <div class="background">
        <HeaderComp></HeaderComp>
        <v-data-table :items="habitaciones" :headers="header" :item-key="'habitacionId'"></v-data-table>
    </div>
</template>

<script>
import HeaderComp from '../components/Header.vue'

export default {
    name:'Reservas',
    components:{HeaderComp},
    data(){
        return {
            header:[
                {value:'tipo',text:'Tipo de habitacion'},
                {value:'localizacion',text:'Localizacion'},
                {value:'fecha_comiezo',text:'Fecha Comienzo'},
                {value:'fecha_final',text:'Fecha final'}
            ]
        }
    },
    computed:{
        habitaciones(){
            return this.$store.getters['userdata/getRooms']
        }
    },
    created(){
        this.$store.dispatch('userdata/getUserRooms')
    }
}
</script>

<style scoped>
.background{
  background-color: #FFCA28
;
}
.backgroundalt{
    background-color: #80D8FF;
}
</style>
