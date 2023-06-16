import LoadingBall from "./LoadingBall.js";

export default {
  props: ["first"],

  template: `<div class="left-side">
      <div class="left-side-icon" v-if="first === true"></div>
      <div class="bubble" v-if="outText === true" v-on:countup="countUp"><slot></slot></div>
      <div class="bubble" v-else><LoadingBall></LoadingBall></div>
    </div>`,
  data: function () {
    return {
      outText: false,
    };
  },
  created() {
    window.setTimeout(() => {
      this.outText = true;
      this.$emit("countup", this.outText);
    }, 2000);
  },
  components: {
    LoadingBall,
  },
};
