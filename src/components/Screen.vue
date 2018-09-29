<template>
    <div class="screen">
        <div class="data">
        </div>
        <div class="result">
            <span style="font-size: 3em;">{{text}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Screen',
    data() {
        return {

        }
    },
    computed: {
        text: function() {
            return this.$store.state.text;
        }
    }
}
</script>

<style scoped>
.screen {
    color: white;
    padding: 1.3em;
    height: 10em;
}
.data {
    height: 5em;
    /* border: 1px red solid; */
    overflow: hidden;
}
.result {
    height: 5em;
    text-align: right;
}
</style>
