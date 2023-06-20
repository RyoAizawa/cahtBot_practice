// ゆらゆら揺れる玉を出力するコンポーネント
import LoadingBall from "./LoadingBall.js";

// ユーザー側が会話を出力するコンポーネント
export default {
  emits: ["countup"],
  template:
  `<div class="right-side" v-bind:class="{alreadyRead: isAlreadyRead}">
      <div class="bubble" v-if="outText == true"><slot></slot></div>
      <div class="bubble" v-else><LoadingBall></LoadingBall></div>
  </div>`,
  data: function () {
    return {
      outText: false,  // 玉⇒会話を出力するフラグ
      isAlreadyRead: false,  // 既読を出力する（クラスを付与する）フラグ
    };
  },
  created() {
    // 1秒たったら会話を出力
    window.setTimeout(() => {
      this.outText = true;
    }, 1000);
    // 3秒たったら既読を出力しトリガーをカウントアップ
    window.setTimeout(() => {
      this.isAlreadyRead = true;
      this.$emit("countup");
    }, 3000);
  },
  components: {
    LoadingBall,
  },
};
