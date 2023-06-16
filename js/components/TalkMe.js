export default {
  template:
  `<div v-once class="right-side">
      <div class="alreadyRead" v-if="alreadyRead === true">既読</div>
      <div class="bubble"><slot></slot></div>
  </div>`,
  data: function () {
    return {
      alreadyRead: false,
    };
  },
  created() {
    window.setTimeout(() => {
      this.alreadyRead = true;
      this.$emit("alreadyRead");
    }, 2000);
  }
};
