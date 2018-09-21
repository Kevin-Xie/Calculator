<<template>
    <div class="wrapper">
        <div class="neon">
            <span class="text" data-text="Cargosmart">Cargosmart</span>
            <span class="gradient"></span>
            <span class="spotlight"></span>
        </div>
    </div>
</template>


<script>
export default {
    
}
</script>

<style scoped>
.wrapper {
    background-color: black;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.text {
    background-color: black;
    color: white;
    font-size: 15em;
    font-weight: bold;
    font-family: sans-serif;
    user-select: none;
}
.text::before {
    content: attr(data-text);
    position: absolute;
    color: white;
    filter: blur(0.02em);
    mix-blend-mode: difference;
}
.neon {
    position: relative;
    overflow: hidden;
    filter: brightness(200%);
}
.gradient {
    position: absolute;
    background: linear-gradient(45deg, red, gold, lightgreen, gold, red);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    mix-blend-mode: multiply;
}
.spotlight {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: 
        radial-gradient(
            circle, 
            white, 
            transparent 25%
        ) center / 25% 25%,
        radial-gradient(
            circle,
            white,
            black 25%
        ) center /12.5% 12.5%;
    top: -100%;
    left: -100%;
    animation: light 5s linear infinite;
    mix-blend-mode: color-dodge;
}
@keyframes light {
    to {
        transform: translate(50%, 50%);
    }
}
</style>



