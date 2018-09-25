<template>
    <div class="container">
        <v-screen></v-screen>
        <v-keyboard></v-keyboard>
    </div>
</template>

<script>
import VScreen from './Screen'
import VKeyboard from './Keyboard'
export default {
    name: 'panel',
    data() {
        return {

        }
    },
    components: { VScreen, VKeyboard },
    methods: {

    }
}
</script>

<style scoped>
.container {
    margin: 0 auto;
    width: 250px;
    height: 460px;
    background-color: black;
}
</style>
