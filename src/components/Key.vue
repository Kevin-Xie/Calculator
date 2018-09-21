<template>
    <div class="cal-btn"
         :style="buttonStyle"
        ><slot></slot>
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
        console.log(this.buttonStyle)
    }
}
</script>

<style scoped>
.cal-btn {
    margin: 0.2em;
    /* display: inline-block; */
    text-align: center;
    font-size: 1.7rem;
}
.cal-btn:active {
    background-color: white;
}
</style>
