// ゆらゆら揺れる玉を出力するコンポーネント
import LoadingBall from "./LoadingBall.js";

// アドバイザーが画像を出力するコンポーネント
export default {
  props: {
    // 画像のパス
    "srcPath": {
      type: String,
      default: ""
    },
    // 画像のクラス
    "className": {
      type: String,
      default: ""
    },
    // 画像のalt属性値
    "altStr": {
      type: String,
      default: ""
    }
  },
  emits: ["countup"],
  template:
    `<div id="target" v-bind:class="className">
      <img v-bind:src="srcPath" v-bind:alt="altStr">
    </div>`,
  created() {
    // 2秒たったらトリガーをカウントアップ
    window.setTimeout(() => {
      this.$emit("countup");
    }, 2000);
  }
};
