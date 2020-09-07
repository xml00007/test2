<template>
    <div
        ref='progress'
        class="progress"
    >
        <div
            class="bar active"
            :style="{width:percent+'%'}"
        >
            <div
                ref='value'
                class="value"
                :style="{left:left}"
            >
                <div
                    class="arrow"
                    :style="{left:arrowLeft}"
                ></div>
                <!-- <slot></slot> -->
                <span>学习进度{{percent}}%</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'c-progress',
    props: {
        percent: {
            type: Number,
            default: 100
        }
    },
    data() {
        return {
            left: 0,
            arrowLeft: '40%',
            arrowWidth: 8,
            minDistance: 4
        };
    },
    methods: {
        init() {
            setTimeout(() => {
                const tipWidth = this.$refs.value.offsetWidth / 2;
                const progress = this.$refs.progress;
                const unit = progress.offsetWidth / 100;
                console.log('tipWidth - 4', tipWidth - 4);
                this.arrowLeft = parseInt(tipWidth - 8);

                let offset = this.percent * unit - tipWidth;
                if (this.percent <= tipWidth / unit) {
                    offset = 0;
                    this.arrowLeft =
                        this.percent * unit - this.arrowWidth > 0
                            ? this.percent * unit - this.arrowWidth
                            : this.minDistance;
                }
                if (this.percent >= 100 - tipWidth / unit) {
                    offset = progress.offsetWidth - tipWidth * 2;
                    this.arrowLeft =
                        this.percent * unit + this.arrowWidth > progress.offsetWidth
                            ? tipWidth * 2 - this.arrowWidth * 2 - this.minDistance
                            : this.percent * unit +
                              tipWidth * 2 -
                              progress.offsetWidth -
                              this.arrowWidth;
                }
                this.left = parseInt(offset) + 'px';
                this.arrowLeft += 'px';
            }, 200);
        }
    },

    mounted() {
        this.init();
    }
};
</script>

<style lang='scss' scoped>
.progress {
    // width: calc(100% - 44px);
    height: 8px;
    background: rgba(244, 244, 244, 1);
    border-radius: 20px;
    position: relative;
    .bar {
        height: 100%;
        border-radius: 20px;
        background: #ff7c35;
        .value {
            display: inline-block;
            white-space: nowrap;
            padding: 4px 6px;
            font-size: 10px;
            color: #fff;
            border-radius: 4px;
            background: linear-gradient(0deg, #ff6400 0%, #ff7c35 100%);
            position: absolute;
            top: -30px;
            .arrow {
                border-top: 8px solid #ff6400;
                border-left: 8px solid transparent;
                border-right: 8px solid transparent;
                position: absolute;
                bottom: -5px;
            }
        }
    }
    .ipad & {
        height: 14px;
        .bar {
            .value {
                padding: 6px 8px;
                font-size: 14px;
                line-height: 16px;
                top: -40px;
            }
        }
    }
}
</style>
