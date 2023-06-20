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

const ChatMaster = {
  template: `
  <div id="chat">
  </div>`
}

Vue.createApp({
  data: () => {
    return {
      selected: "",   // 選択した計算方式
      isHide: false,  // 要素を隠す
    };
  },
  updated() {
    this.main();

  },
  methods: {
    async main() {
      try {
        console.log(TalkAdviser);
        let chat = document.getElementById("chat");
        chat.insertAdjacentHTML("beforeend", `<talk-adviser :icon="true"> ２つの方法で相場を計算することができます。</talk-adviser>`)
        await this.wait(2);
      } catch (err) {
        console.error(err);
      }
    },
    wait(sec) {
      return new Promise((resolve, reject) => {
        setTimeout(resolve, sec*1000);
        //setTimeout(() => {reject(new Error("エラー！"))}, sec*1000);
      });
    },
    // 計算方式を選んだ際に呼ばれるメソッド
    selectedBtn(selectedWord) {
      this.selected = selectedWord;
      this.isHide = true;
    },
  },
  components: {
    "loading" : Loading,
    "talk-adviser" : TalkAdviser,
    "talk-adviser-img" : TalkAdviserImg,
    "talk-me" : TalkMe,
    "select-calc" : SelectCalc,
    "chat-master" : ChatMaster,
  },
}).mount("#app");
