// ロード画面を出力するコンポーネント
import Loading from "./components/Lading.js";
// アドバイザー側のトーク出力するコンポーネント
import TalkAdviser from "./components/TalkAdviser.js";
// アドバイザーが画像を出力するコンポーネント
import TalkAdviserImg from "./components/TalkAdviserImg.js";
// ユーザー側が会話を出力するコンポーネント
import TalkMe from "./components/TalkMe.js";
// 計算方式の選択肢を出力するコンポーネント
import SelectCalc from "./components/SelectCalc.js";

Vue.createApp({
  data: () => {
    return {
      count: 0,       // トリガー
      selected: "",   // 選択した計算方式
      isHide: false,  // 要素を隠す
    };
  },
  methods: {
    // カウンタ（トリガー）を加算するメソッド
    countUp() {this.count++;},
    // 計算方式を選んだ際に呼ばれるメソッド
    selectedBtn(selectedWord) {
      this.selected = selectedWord;
      this.isHide = true;
      this.countUp()
    },
  },
  components: {
    Loading,
    TalkAdviser,
    TalkAdviserImg,
    TalkMe,
    SelectCalc,
  },
}).mount("#app");
