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
            expression: '',
            operatorIndex: [0,1,2,3,7,11,15,18],
            keys: [
                        {bgColor: '#ccc', fontColor: 'black', text: 'AC', fn: () => this.expression = ''}, 
                        {bgColor: '#ccc', fontColor: 'black', text: '+/-', fn: () => {} }, 
                        {bgColor: '#ccc', fontColor: 'black', text: '%', fn: () => {} }, 
                        {bgColor: 'orange', text: '/', fn: () => {} },

                        {text: '7', },
                        {text: '8', },
                        {text: '9', },
                        {bgColor: 'orange', text: 'x', fn: () => {} },

                        {text: '4', },
                        {text: '5', },
                        {text: '6', },
                        {bgColor: 'orange', text: '-', fn: () => {} },

                        {text: '1', },
                        {text: '2', },
                        {text: '3', },
                        {bgColor: 'orange', text: '+', fn: () => {} },

                        {text: '0', width: '5.35em', borderRadius: '2em', },
                        {text: '.', },
                        {bgColor: 'orange', text: '=', fn: () => {} },
                    ],
        }
    },
    components: { VKey },
    methods: {
        keyPress(index) {
            this.stratergy(index);
        },
        stratergy(index) {
            if( this.operatorIndex.indexOf(index) > -1 )
                console.log('cal: ', eval(this.expression))
            this.expression += this.keys[index].text;
            console.log(this.expression)
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
