<template>
    <transition-group class="nnm__text-area" tag="div">
        <div class="nnm__message" v-for="(chat, index) in this.storedChatLog"
             v-bind:key="index" v-bind:class="{to: chat.to, from: chat.from}">
            <p v-bind:class="{to: chat.to, from: chat.from}">
                {{ chat.text }}
                <span class="nnm__time-stamp" v-bind:class="{to: chat.to, from: chat.from}">{{ chat.when.time }}</span>
                <span class="nnm__tail" v-bind:class="{to: chat.to, from: chat.from}"></span>
            </p>
        </div>
    </transition-group>
</template>

<script>
    import { mapGetters } from "vuex";
    export default {
        name: "ChatTextArea",
        computed: {
            ...mapGetters(['storedChatLog'])
        },
        updated() {
            this.$emit('scrollBottom');
        },
    }
</script>

<style lang="scss" scoped>
    .nnm__text-area {
        background-color: #9bbbd4;
        height: 253px;
        bottom: -320px;
        width: 100%;
        overflow-y: scroll;
        -ms-overflow-style: none;
        &::-webkit-scrollbar {
            display: none;
        }
    }
    .nnm__message {
        width: 98%;
        height: auto;
        overflow: hidden;
        &.to {
            padding: 5px 0 5px 40px;
        }
        &.from {
            padding: 5px 40px 5px 0;
            margin-left: 8px;
        }
        p {
            position: relative;
            display: block;
            text-align: left;
            word-break: break-all;
            padding: 13px;
            margin: 10px;
            font-size: 17px;
            font-weight: 400;
            border-radius: 10px;

            &.to {
                background-color: #fef01b;
                color: black;
                float: right;
            }
            &.from {
                color: black;
                background-color: #ffffff;
                float: left;
            }
        }
    }
    .nnm__time-stamp {
        &.to {
            position: absolute;
            color: #556677;
            font-size: 10px;
            bottom: 3px;
            left: -37px;
        }
        &.from {
            position: absolute;
            color: #556677;
            font-size: 10px;
            bottom: 3px;
            right: -37px;
        }
    }
    .nnm__tail {
        position: absolute;
        bottom: 8px;
        width: 10px;
        height: 10px;
        &.to {
            right: -10px;
            border-bottom: 10px solid #fef01b;
            border-right: 10px solid transparent;
            border-top-right-radius: 10px;
        }
        &.from {
            left: -10px;
            border-bottom: 10px solid #ffffff;
            border-left: 10px solid transparent;
            border-top-left-radius: 10px;
        }
    }
</style>