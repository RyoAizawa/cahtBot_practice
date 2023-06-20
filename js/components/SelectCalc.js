// 計算方式の選択肢を出力するコンポーネント
export default {
  emits: ["selectedWord"],
  template:
  `<div id="target" class="select-calc">
    <div class="select-calc-content" v-on:click="getSelect('about')">
      <div class="select-calc-message">
        <p>ざっくり計算</p>
        <p>広さや形状から<br>おおまかに</p>
      </div>
    </div>
    <div class="select-calc-content" v-on:click="getSelect('tightly')">
      <div class="select-calc-message">
        <p>しっかり計算</p>
        <p>欲しい機能や<br>設備も入れて</p>
      </div>
    </div>
  </div>`,
  mounted() {
    // 指定位置に0.3秒後にスクロールする（createdだと動作しないためmountedで使用）
    let element = document.getElementById("target"); // 移動させたい位置の要素を取得
    let rect = element.getBoundingClientRect();
    let position = rect.top;    // 要素の頂点の高さを設定
    setTimeout(function () {
      scrollTo(0, position);
    }, 300);
  },
  methods: {
    getSelect(selected) {
      let selectedWord = ""
      // 選択された計算方式により文字列を取得
      selected === "about" ? selectedWord = "ざっくり計算" : selectedWord = "しっかり計算";
      // 取得した文字列を親に返す
      this.$emit("selectedWord", selectedWord);
    },
  },
};
