<template>
    <div class="background">
        <HeaderComp></HeaderComp>
        <v-card shaped class="d-flex ma-4 backgroundalt">
            <v-img max-height="50vh" width="25vw" contain alt="foto fachada hotel" src="../assets/HotelMain.jpg"></v-img>
            <v-card-text class='font-weight-medium'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod viverra metus vitae faucibus. Nunc lacus dolor, porttitor ut vestibulum at, volutpat nec mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis rutrum feugiat nibh gravida imperdiet. Quisque tellus sem, sollicitudin in est vel, imperdiet eleifend nulla. Morbi vel blandit est. Aliquam sit amet nisi eu odio condimentum ornare. Ut in egestas diam.</p>

                <p>Donec quam nisl, accumsan sed finibus quis, iaculis id lacus. Nam efficitur neque et sagittis iaculis. Sed aliquet lorem ac maximus vehicula. Nullam luctus orci felis, sed consequat nisi tempor ac. Duis sit amet elementum eros. Maecenas maximus faucibus sem, non elementum turpis. Fusce pulvinar erat diam, et auctor tortor volutpat at. Fusce quis purus nisl. Nulla turpis lorem, dapibus nec massa sagittis, mollis feugiat felis. Etiam in nulla suscipit, malesuada magna a, efficitur tellus. Donec gravida enim et urna convallis, non vehicula nulla lobortis. Pellentesque tempor ultrices lobortis. In hac habitasse platea dictumst.</p>

                <p>Vivamus molestie, dui bibendum lacinia sodales, turpis lectus pharetra arcu, ac elementum libero nisl ac ligula. Aliquam congue metus in elit feugiat, vitae pharetra velit finibus. Donec id pulvinar velit. Fusce lobortis ex dapibus orci semper, in tincidunt neque imperdiet. Pellentesque sollicitudin faucibus sapien, sit amet molestie nulla vehicula vitae. Mauris volutpat mauris non arcu mattis auctor id sit amet leo. Vestibulum ut fringilla lorem. Proin laoreet dignissim mauris bibendum laoreet. Nullam sit amet luctus nisi. Morbi tincidunt dolor quis tortor lacinia vulputate. Cras maximus bibendum arcu sed elementum. Proin semper tristique sapien id consequat. Fusce eget ante pellentesque, aliquet sem sit amet, porttitor lectus. Sed ornare quis quam nec accumsan.</p>
            </v-card-text>
        </v-card>
        <v-card shaped class="d-flex mt-4 mr-4 ml-4 backgroundalt">
            <v-card-text class='font-weight-medium'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod viverra metus vitae faucibus. Nunc lacus dolor, porttitor ut vestibulum at, volutpat nec mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis rutrum feugiat nibh gravida imperdiet. Quisque tellus sem, sollicitudin in est vel, imperdiet eleifend nulla. Morbi vel blandit est. Aliquam sit amet nisi eu odio condimentum ornare. Ut in egestas diam.</p>

                <p>Donec quam nisl, accumsan sed finibus quis, iaculis id lacus. Nam efficitur neque et sagittis iaculis. Sed aliquet lorem ac maximus vehicula. Nullam luctus orci felis, sed consequat nisi tempor ac. Duis sit amet elementum eros. Maecenas maximus faucibus sem, non elementum turpis. Fusce pulvinar erat diam, et auctor tortor volutpat at. Fusce quis purus nisl. Nulla turpis lorem, dapibus nec massa sagittis, mollis feugiat felis. Etiam in nulla suscipit, malesuada magna a, efficitur tellus. Donec gravida enim et urna convallis, non vehicula nulla lobortis. Pellentesque tempor ultrices lobortis. In hac habitasse platea dictumst.</p>

                <p>Vivamus molestie, dui bibendum lacinia sodales, turpis lectus pharetra arcu, ac elementum libero nisl ac ligula. Aliquam congue metus in elit feugiat, vitae pharetra velit finibus. Donec id pulvinar velit. Fusce lobortis ex dapibus orci semper, in tincidunt neque imperdiet. Pellentesque sollicitudin faucibus sapien, sit amet molestie nulla vehicula vitae. Mauris volutpat mauris non arcu mattis auctor id sit amet leo. Vestibulum ut fringilla lorem. Proin laoreet dignissim mauris bibendum laoreet. Nullam sit amet luctus nisi. Morbi tincidunt dolor quis tortor lacinia vulputate. Cras maximus bibendum arcu sed elementum. Proin semper tristique sapien id consequat. Fusce eget ante pellentesque, aliquet sem sit amet, porttitor lectus. Sed ornare quis quam nec accumsan.</p></v-card-text>
            <v-img max-height="50vh" width="25vw" contain alt="foto fachada hotel" src="../assets/HotelMap.jpg"></v-img>
        </v-card>
    </div>
</template>

<script>
import HeaderComp from '../components/Header.vue'

export default {
    name:'Landing',
    components:{HeaderComp}
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
