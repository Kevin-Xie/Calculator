<template>
    <div class="wrapper">
        <div class="aside">sidebar</div>
        <div class="main">content</div>
        <div class="footer">footerfooterfooterfooterfooterfooterfooterfooterfooter</div>
    </div>
</template>


<script>
export default {
    
}
</script>

<style scoped>
.wrapper {
    height: 500px;
    display: grid;
    grid-template-columns: 100px 1fr; 
    grid-template-rows: 1fr 100px;
    grid-template-areas: "sidebar content" 
                "footer footer";
}
.main {
    grid-area: content;
    background-color: #2c3e50;
}
.footer {
    grid-area: footer;
    background-color: #c0392b;
}
.aside {
    grid-area: sidebar;
    background-color: #7f8c8d;
}
</style>



