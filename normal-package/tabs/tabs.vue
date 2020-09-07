<template>
    <div class="tabs">
        <div class="content">
            <div
                v-for="(item,index) in data"
                :key="index"
                :class="{active:index===activeIndex}"
                @click="onClick($event,index)"
                :ref="'tab'+index"
            >{{item.subjectName}}</div>
        </div>

        <div class="line-contanin">
            <div
                class="line"
                :style="{left:left}"
            ></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'tabs',
    props: {
        data: {
            type: Array
        }
    },
    data() {
        return {
            activeIndex: 0,
            left: 0,
            lineWidth: 12
        };
    },
    mounted() {
        const width = this.$refs.tab0[0].offsetWidth;
        this.left = (width - this.lineWidth) / 2 + 'px';
    },
    methods: {
        onClick(event, index) {
            this.activeIndex = index;
            const targetWidth = event.target.offsetWidth;
            const targetLeft = event.target.offsetLeft;
            this.left = targetLeft + (targetWidth - this.lineWidth) / 2 + 'px';
            this.$emit('change', this.data[index]);
        }
    }
};
</script>

<style lang="scss" scoped>
.tabs {
    height: 50px;
    position: relative;
    .content {
        display: flex;
        font-size: 14px;
        height: 100%;
        line-height: 28px;
        color: #6a6a71;
        position: relative;
        & > * {
            // display: flex;
            flex: 1;
            text-align: center;
            align-self: center;
            white-space:nowrap;
        }
        .active {
            font-family: "PingFangSC-Medium", "Microsoft YaHei", Arial, sans-serif;
            font-weight: 500;
            color: #313136;
            font-size: 18px;
            line-height: 28px;
            justify-self: center;
        }
        &::after {
            @include bottom-line();
        }
    }
    .line-contanin {
        height: 2px;
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 0;
        .line {
            position: absolute;
            bottom: 0;
            background: rgba(0, 209, 172, 1);
            border-radius: 2px;
            width: 12px;
            height: 100%;
            transition: left 0.3s ease-in-out;
        }
    }
}
</style>
