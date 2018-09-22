<template>
    <div class="keyboard">
        <v-key 
            v-for="(item, index) in keys" 
            :bgColor=item.bgColor
            :fontColor=item.fontColor
            :width=item.width
            :borderRadius=item.borderRadius
            :key="index"
            @click="keyPress(index)">
            {{item.text}}
        </v-key>
    </div>
</template>

<script>
import VKey from './Key'

export default {
    name: 'Keyboard',
    data() {
        return {
            keys: [
                        {bgColor: '#ccc', fontColor: 'black', text: 'AC'}, 
                        {bgColor: '#ccc', fontColor: 'black', text: '+/-'}, 
                        {bgColor: '#ccc', fontColor: 'black', text: '%'}, 
                        {bgColor: 'orange', text: '/'},

                        {text: '7'},
                        {text: '8'},
                        {text: '9'},
                        {bgColor: 'orange', text: 'x'},

                        {text: '4'},
                        {text: '5'},
                        {text: '6'},
                        {bgColor: 'orange', text: '-'},

                        {text: '1'},
                        {text: '2'},
                        {text: '3'},
                        {bgColor: 'orange', text: '+'},

                        {text: '0', width: '5.35em', borderRadius: '2em'},
                        {text: '.'},
                        {bgColor: 'orange', text: '='},
                    ],
        }
    },
    components: { VKey },
    methods: {
        keyPress(index) {
            console.log('keypress', index)
        },
        stratergy(index) {
            
        }
    },
}
</script>

<style scoped>
.keyboard {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}
</style>
