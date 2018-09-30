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
                        {bgColor: '#ccc', fontColor: 'black', text: 'AC', fn: () => {return this.reset()} }, 
                        {bgColor: '#ccc', fontColor: 'black', text: '+/-', fn: () => {} }, 
                        {bgColor: '#ccc', fontColor: 'black', text: '%', fn: () => {this.inputString += '*0.01'} }, 
                        {bgColor: 'orange', text: '/', fn: () => {this.expression += '/'} },

                        {text: '7', },
                        {text: '8', },
                        {text: '9', },
                        {bgColor: 'orange', text: 'x', fn: () => {this.expression += '*'}},

                        {text: '4', },
                        {text: '5', },
                        {text: '6', },
                        {bgColor: 'orange', text: '-', fn: () => {this.expression += '-'} },

                        {text: '1', },
                        {text: '2', },
                        {text: '3', },
                        {bgColor: 'orange', text: '+', fn: () => {this.expression += '+'} },

                        {text: '0', width: '5.35em', borderRadius: '2em', },
                        {text: '.',},
                        {bgColor: 'orange', text: '=', fn: () => {} },
                    ],
        }
    },
    components: { VKey },
    methods: {
        keyPress(index) {
            console.log('exp', this.expression)
            this.stratergy(index);
        },
        stratergy(index) {
            if(!this.isOperator(index)) {
                this.concatInputString(this.keys[index].text)
                this.showTextOnScreen(this.inputString);
            } else {
                this.concatExpression();
                this.showTextOnScreen(this.calculate());
                this.keys[index].fn();
            }
        },
        isOperator(index) {
            return this.operatorIndex.includes(index);
        },
        concatExpression() {
            this.expression += this.inputString;
            this.clearInputString();
        },
        concatInputString(key) {
            this.inputString += key;
        },
        clearInputString() {
            this.inputString = '';
        },
        clearExpression() {
            this.expression = '';
        },
        calculate() {
            console.log('cal:', this.expression)
            return eval(this.expression);
        },
        reset() {
            this.clearInputString();
            this.clearExpression();
            this.showTextOnScreen('0');
        },
        showTextOnScreen(text) {
            this.$store.commit('textChange', text);
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
