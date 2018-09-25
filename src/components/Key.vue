<template>
    <div class="btn"
         @click="handleClick"
         :style="buttonStyle">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'Key',
    data() {
        return {
        }
    },
    props: {
        bgColor: {
            type: String,
            default: '#585353'
        },
        fontColor: {
            type: String,
            default: 'white'
        },
        borderRadius: {
            type: String,
            default: '50%'
        },
        width: {
            type: String,
            default: '2.5em'
        },
        height: {
            type: String,
            default: '2.5em'
        }
    },
    methods: {
        handleClick() {
            this.$emit('click');
        }
    },
    computed: {
        buttonStyle() {
            return {
                width: this.width,
                height: this.height || this.width,
                backgroundColor: this.bgColor,
                color: this.fontColor,
                borderRadius: this.borderRadius,
                lineHeight: this.height
            }
        }
    },
    mounted: function() {
    }
}
</script>

<style scoped>
.btn {
    margin: 0.2em;
    text-align: center;
    font-size: 1.7rem;
    cursor: pointer;
}
.btn:active {
    background-color: white;
}
</style>
