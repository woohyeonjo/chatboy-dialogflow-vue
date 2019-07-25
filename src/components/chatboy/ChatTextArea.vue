<template>
    <transition-group class="text-area" tag="div">
        <!-- TODO: chatLog -> state 로 바꾸기 -->
        <div class="message" v-for="(chat, index) in chatLog" v-bind:key="index"
                             v-bind:class="{to: chat.to, from: chat.from}">
            <p>{{ chat.text }}</p>
        </div>
    </transition-group>
</template>

<script>
    export default {
        name: "ChatTextArea",
        data() {
            return {
                chatLog: [
                            {
                                to: true,
                                from: false,
                                text: "안녕",
                                date: "2019-07-25"
                            },
                            {
                                to: false,
                                from: true,
                                text: "안녕하세요",
                                date: "2019-07-25"
                            },
                            {
                                to: true,
                                from: false,
                                text: "뭐하세요?",
                                date: "2019-07-25"
                            },
                            {
                                to: false,
                                from: true,
                                text: "코딩해요!",
                                date: "2019-07-25"
                            }
                ],
            }
        },
        methods: {
            scrollBottom(){
                const mainTextArea = document.querySelector('.text-area');
                mainTextArea.scrollTop = mainTextArea.scrollHeight;
            },
        }
    }
</script>

<style scoped>
.text-area {
    position: absolute;
    top: 67px;
    height: 253px;
    width: 100%;
    overflow-y: scroll;
}
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
.message.to {
    color: #7C7C7C;
    background-color: #F1F1F1;
    margin-right: 26px;
    float: right;
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
.message.to:after {
    border-top: 17px solid transparent;
    border-left: 16px solid #F1F1F1;
    border-top-right-radius: 20px;
    margin-left: 175px;
}
</style>