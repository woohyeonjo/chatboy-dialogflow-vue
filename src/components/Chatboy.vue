<template>
    <div class="chatboy" v-bind:class="{ slideout: showBoy }">
        <img class="mascot" @click="showBoy = !showBoy" src="../assets/boy-64.png">
        <div class="container">
            <ChatBanner />
            <ChatTextArea />
            <ChatTextInput />
        </div>
    </div>
</template>

<script>
    import ChatBanner from "./chatboy/ChatBanner";
    import ChatTextArea from "./chatboy/ChatTextArea";
    import ChatTextInput from "./chatboy/ChatTextInput";

    export default {
        name: "Chatboy",
        components: {
            ChatBanner,
            ChatTextArea,
            ChatTextInput
        },
        data() {
            return {
                showBoy: false,
            }
        },
    }
</script>
<style scoped>
.slideout {
    -webkit-transform: translateY(-410px);
    transform: translateY(-410px)
}
.chatboy {
    position: fixed;
    right: 15px;
    bottom: -395px;
    width: 490px;
    height: 464px;
    -webkit-transition: .6s all;
    transition: .6s all;
}
.mascot {
     cursor: pointer;
     display: block;
     margin: auto;
 }
.container {
    position: relative;
    width: 490px;
    height: 400px;
    background-color: white;
    border-radius: 10px;
    -webkit-box-shadow: 0px 51px 82px -21px rgba(0, 0, 0, 0.61);
    -moz-box-shadow: 0px 51px 82px -21px rgba(0, 0, 0, 0.61);
    box-shadow: 0px 51px 82px -21px rgba(0, 0, 0, 0.61);
}
</style>