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
            inputString: '',
            operatorIndex: [0,1,2,3,7,11,15,18],
            keys: [
                        {bgColor: '#ccc', fontColor: 'black', text: 'AC', fn: () => this.expression = ''}, 
                        {bgColor: '#ccc', fontColor: 'black', text: '+/-', fn: () => {} }, 
                        {bgColor: '#ccc', fontColor: 'black', text: '%', fn: () => {this.inputString += '*0.01'} }, 
                        {bgColor: 'orange', text: '/', fn: () => {} },

                        {text: '7', fn: () => {this.inputString += '7'} },
                        {text: '8', fn: () => {this.inputString += '8'}},
                        {text: '9', fn: () => {this.inputString += '9'}},
                        {bgColor: 'orange', text: 'x', fn: () => {} },

                        {text: '4', fn: () => {this.inputString += '4'}},
                        {text: '5', fn: () => {this.inputString += '5'}},
                        {text: '6', fn: () => {this.inputString += '6'}},
                        {bgColor: 'orange', text: '-', fn: () => {} },

                        {text: '1', fn: () => {this.inputString += '1'}},
                        {text: '2', fn: () => {this.inputString += '2'}},
                        {text: '3', fn: () => {this.inputString += '3'}},
                        {bgColor: 'orange', text: '+', fn: () => {} },

                        {text: '0', width: '5.35em', borderRadius: '2em', fn: () => {this.inputString += (this.inputString.startsWith('0') ? '' : '0')}},
                        {text: '.', fn: () => {this.inputString += (this.inputString.includes('.') ? '' : '.')}},
                        {bgColor: 'orange', text: '=', fn: () => {} },
                    ],
        }
    },
    components: { VKey },
    computed: {
        inputNumber() {
            return eval(this.inputString)
        }
    },
    methods: {
        keyPress(index) {
            this.stratergy(index);
        },
        stratergy(index) {
            this.$store.commit('textChange', this.keys[index].text);
        },
        calculate() {
            return eval(this.expression);
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
