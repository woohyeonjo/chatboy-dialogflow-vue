<template>
    <div class="message to">
    </div>
</template>

<script>
    export default {
        name: "MessageTo",
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
.message.to {
    color: #7C7C7C;
    background-color: #F1F1F1;
    margin-right: 26px;
    float: right;
}
.message p {
    text-align: center;
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
.message.to:after {
    border-top: 17px solid transparent;
    border-left: 16px solid #F1F1F1;
    border-top-right-radius: 20px;
    margin-left: 175px;
}
</style>