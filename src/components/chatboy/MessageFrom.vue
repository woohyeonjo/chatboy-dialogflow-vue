<template>
    <div class="message from">
    </div>
</template>

<script>
    export default {
        name: "MessageFrom",
    }
</script>

<style scoped>
.message {
    position: relative;
    display: block;
    height: 54px;
    width: 75%;
    font-size: 17px;
    font-weight: 400;
    border-radius: 10px;
    margin-bottom: 15px;
}
.message.from {
    color: white;
    background-color: #827DCF;
    margin-left: 26px;
    float: left;
}
.message p {
    text-align: left;
    padding-top: 18px;
    padding-left: 20px;
    margin: 0;
}
.message:after {
    position: absolute;
    width: 0;
    height: 0;
    background-color: transparent;
    content: "";
    margin-top: -9px;
}
.message.from:after {
    border-top: 17px solid transparent;
    border-right: 16px solid #827DCF;
    border-top-left-radius: 20px;
    margin-left: -190px;
}
</style>