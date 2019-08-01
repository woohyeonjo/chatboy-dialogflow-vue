<template>
    <div class="nnm__banner">
        <h1>Chat Boy</h1>
    </div>
</template>

<script>
    export default {
        name: "ChatBanner"
    }
</script>

<style lang="scss" scoped>
.nnm__banner {
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    height: 67px;
    background-color: #381e1f;
    font-family: 'Quicksand', sans-serif;
    h1 {
        margin-top: 0;
        color: white;
        font-size: 25px;
        font-weight: bold;
    }
}
</style>