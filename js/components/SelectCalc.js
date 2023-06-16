export default {
  template:
  `<div class="select-calc">
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
  methods: {
    getSelect(selected) {
      let selectedWord = ""
      selected === "about" ? selectedWord = "ざっくり計算" : selectedWord = "しっかり計算";
      this.$emit("hoge", selectedWord);
    },
  },
};
