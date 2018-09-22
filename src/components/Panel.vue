<template>
    <div class="container">
        <div style="height: 150px;"></div>
        <v-keyboard></v-keyboard>
    </div>
</template>

<script>
import VKeyboard from './Keyboard'
export default {
    name: 'panel',
    data() {
        return {

        }
    },
    components: { VKeyboard }
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
