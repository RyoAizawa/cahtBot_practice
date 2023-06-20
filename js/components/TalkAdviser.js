// ゆらゆら揺れる玉を出力するコンポーネント
import LoadingBall from "./LoadingBall.js";

// アドバイザー側のトーク出力するコンポーネント
export default {
  props: {
      // アイコンを出力する場合trueが渡る
      "icon": {
        type: Boolean,
        default: false
      }
  },
  emits: ["countup"],
  template:
  `<div class="left-side">
      <div class="left-side-icon" v-if="icon === true"></div>
      <div class="bubble" v-if="outText === true"><slot></slot></div>
      <div class="bubble" v-else><LoadingBall></LoadingBall></div>
    </div>`,
  data: function () {
    return {
      outText: false,  // 玉⇒会話を出力するフラグ
    };
  },
  created() {
    // 1秒たったら会話を出力
    window.setTimeout(() => {
      this.outText = true;
    }, 1000);
    // 2秒たったらトリガーをカウントアップ
    window.setTimeout(() => {
      this.$emit("countup");
    }, 2000);
  },
  components: {
    LoadingBall,
  },
};
