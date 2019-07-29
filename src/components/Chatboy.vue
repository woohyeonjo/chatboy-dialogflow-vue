<template>
    <div class="chatboy" v-bind:class="{ slideout: showBoy }" v-on:keyup.esc="showBoy = !showBoy">
        <img class="mascot" @click="showBoy = !showBoy" src="../assets/boy-64.png">
        {{ init }}
        <!-- TODO: 시발 init 어떻게 처리해주지? -->
        <div class="container">
            <ChatBanner />
            <ChatTextArea v-on:scrollBottom="scrollBottom"/>
            <ChatTextInput />
        </div>
    </div>
</template>
ㅇ
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
        methods: {
            scrollBottom(){
                setTimeout(() => {
                    const mainTextArea = document.querySelector('.text-area');
                    mainTextArea.scrollTop = mainTextArea.scrollHeight;
                }, 0);
            },
        },
        computed: {
            init: function() {
                if (this.showBoy) this.scrollBottom();
                console.log("init");
            }
        }
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