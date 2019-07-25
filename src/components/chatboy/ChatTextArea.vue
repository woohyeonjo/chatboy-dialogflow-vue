<template>
    <transition-group class="text-area" tag="div">
        <!-- TODO: chatLog -> state 로 바꾸기 -->
        <!-- FIXME: 스크롤시 말풍선이 배너를 침범함 -->
        <div class="message" v-for="(chat, index) in this.storedChatLog" v-bind:key="index">
            <!-- TODO: TimeStamp 표현하기 -->
            <p v-bind:class="{to: chat.to, from: chat.from}">
                {{ chat.text }}
                <span class="time-stamp">{{ getTime(chat.date) }}</span>
                <span class="tail" v-bind:class="{to: chat.to, from: chat.from}"></span>
            </p>
            <!-- TODO: Delivered 표현하기 -->
        </div>
    </transition-group>
</template>

<script>
    import { mapGetters, mapMutations } from "vuex";

    export default {
        name: "ChatTextArea",
        methods: {
            scrollBottom(){
                setTimeout(() => {
                    const mainTextArea = document.querySelector('.text-area');
                    mainTextArea.scrollTop = mainTextArea.scrollHeight;
                }, 0);
            },
            //TODO: 시간 변환 메서드 작성
            getTime(chatDate) {
                console.log(chatDate);
                const date = Date.parse(chatDate);
                console.log(date);
                const hours =
                const minutes = date.getMinutes();
                const time = `${hours}:${minutes}`;

                return time;
            }
        },
        computed: {
            // TODO: state 만들고 Gatters 생성하기
            ...mapGetters(['storedChatLog'])
        },
        updated() {
            this.scrollBottom();
        },
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