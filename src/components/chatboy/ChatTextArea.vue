<template>
    <transition-group class="text-area" tag="div">
        <!-- TODO: chatLog -> state 로 바꾸기 -->
        <div class="message" v-for="(chat, index) in chatLog" v-bind:key="index">
            <!-- TODO: TimeStamp 표현하기 -->
            <p v-bind:class="{to: chat.to, from: chat.from}">
                {{ chat.text }}
                <span class="tail" v-bind:class="{to: chat.to, from: chat.from}"></span>
            </p>
            <!-- TODO: Delivered 표현하기 -->
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
                                text: "코딩해요!코딩해요!코딩해요!코딩해요!코딩해요!" +
                                    "코딩해요!코딩해요!",
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
    width: 90%;
    margin: 10px auto;
    height: auto;
    overflow: hidden;
}
.message p {
    position: relative;
    display: block;
    text-align: center;
    padding: 13px;
    font-size: 17px;
    font-weight: 400;
    border-radius: 10px;
    margin: 10px;
}
.message p.to {
    color: #7C7C7C;
    background-color: #F1F1F1;
    float: right;
}
.message p.from {
    color: white;
    background-color: #827DCF;
    float: left;
}
.tail {
    position: absolute;
    bottom: 8px;
    width: 10px;
    height: 10px;
}
.tail.from {
    left: -10px;
    border-bottom: 10px solid #827DCF;
    border-left: 10px solid transparent;
    border-top-left-radius: 10px;
}
.tail.to {
    right: -10px;
    border-bottom: 10px solid #F1F1F1;
    border-right: 10px solid transparent;
    border-top-right-radius: 10px;
}
</style>