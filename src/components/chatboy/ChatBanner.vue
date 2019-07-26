<template>
    <div class="banner">
        <h1>Chat Boy</h1>
    </div>
</template>

<script>
    export default {
        name: "ChatBanner"
    }
</script>

<style scoped>
.banner {
    position: absolute;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    height: 67px;
    width: 100%;
    background-color: #381e1f;
    font-family: 'Quicksand', sans-serif;
}
.banner h1 {
    color: white;
    font-size: 25px;
    margin-top: 17.5px;
    font-weight: bold;
}
</style>