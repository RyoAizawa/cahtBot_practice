// ゆらゆら揺れる玉を出力するコンポーネント
import LoadingBall from "./LoadingBall.js";

// アドバイザーが画像を出力するコンポーネント
export default {
  props: {
    // 画像のパス
    srcPath: {
      type: String,
      default: "",
    },
    // 画像のクラス
    className: {
      type: String,
      default: "",
    },
    // 画像のalt属性値
    altStr: {
      type: String,
      default: "",
    },
  },
  emits: ["countup"],
  template:
  `<div class="scrollTarget" v-bind:class="className">
      <img v-bind:src="srcPath" v-bind:alt="altStr">
    </div>`,

  mounted() {
    // 指定位置に0.3秒後にスクロールする（createdだと動作しないためmountedで使用）
    let lastDiv = document.querySelector(".scrollTarget:nth-last-child(1)"); // 移動させたい位置の要素を取得
    let rect = lastDiv.getBoundingClientRect();  // ビューポートに対する相対位置を取得
    let position = rect.top + scrollY; // 要素の頂点位置＋現在スクロールされている位置を設定
    setTimeout(function () {
      scrollTo(0, position);
    }, 300);
  },

  created() {
    // 2秒たったらトリガーをカウントアップ
    window.setTimeout(() => {
      this.$emit("countup");
    }, 2000);
  },
};
