Vue.createApp({
  data: () => {
    return {
      adviserMsg: "",
      myMsg: "",
      isLoaded: false,
      isHide: false, // 要素を隠す
      // 各質問項目回答データ
      selectObj: [
        { "calcSelected": "" },// 選択した計算方式
        { "bathType": "" },
        { "bathSize": "" },
        { "bathShape": "" },
        { "keepWarm": "" },
        { "bubbleBath": "" },
        { "audio": "" },
        { "television": "" },
        { "light": "" },
        { "reheating": "" },
        { "interphone": "" },
      ]
    };
  },
  created() {
    this.main();
  },
  methods: {
    // ロード画面の出力
    async loaded() {
      await this.wait(2);
      this.isLoaded = true;
    },

    // メイン
    async main() {
      // ロード画面の出力
      await this.loaded();

      // 選択肢用配列
      let msgArray = [];
      let subMsgArray = [];
      let imgArray = [];

      // アドバイザー
      this.adviserTalk("２つの方法で相場を計算することができます。", true);
      await this.wait(2);

      // アドバイザー
      this.adviserTalk("どちらがご希望に近いですか？");
      await this.wait(2);
      // 選択肢
      msgArray = ["ざっくり計算", "しっかり計算"];
      subMsgArray = ["広さや形状から<br>おおまかに", "広さや形状から<br>おおまかに"];
      imgArray = null;
      await this.select("calcSelected", msgArray, imgArray, subMsgArray, true);
      // ユーザー
      this.myTalk(this.selectObj["calcSelected"]);
      await this.wait(3);

      // this.questionBlock("どちらがご希望に近いですか？", "calcSelected", msgArray, imgArray, subMsgArray, false, true)

      // アドバイザー
      this.adviserTalk("かしこまりました。", true);
      await this.wait(2);

      // ざっくり計算を選択した場合
      if (this.selectObj["calcSelected"] === "ざっくり計算") {
        this.adviserTalk(`データをもとに、あなたの費用を${this.selectObj["calcSelected"]}します。`);
        await this.wait(2);

      } else {
        // しっかり計算を選択した場合
        this.adviserTalk("一戸建てのお風呂リフォーム相場は");
        await this.wait(2);

        // アドバイザーが画像を出力
        this.adviserTalkImg("graph", "./images/graph.png", "グラフ");
        await this.wait(2);

        this.adviserTalk(`あなたの費用を、データをもとに${this.selectObj["calcSelected"]}します。`, true);
        await this.wait(2);
      }

      // アドバイザー
      this.adviserTalk("希望されるお風呂は、どのような形式ですか？", true);
      await this.wait(2);
      // 選択肢
      msgArray = ["ユニットバス", "タイル貼り", "わからない"];
      imgArray = ["./images/bath.png", "./images/tile.png", "./images/idontknow.png"];
      await this.select("bathType", msgArray, imgArray);
      // ユーザー
      this.myTalk(this.selectObj["bathType"]);
      await this.wait(3);

      // アドバイザー
      this.adviserTalk("希望されるお風呂の大きさは、どのくらいですか？", true);
      await this.wait(2);
      // 選択肢
      msgArray = ["2畳未満", "2畳以上", "わからない"];
      imgArray = ["./images/less2.png", "./images/over2.png", "./images/idontknow.png"];
      await this.select("bathSize", msgArray, imgArray);
      // ユーザー
      this.myTalk(this.selectObj["bathType"]);
      await this.wait(3);


      this.adviserTalk("浴槽まわりの希望をお伺いします。", true);
      await this.wait(2);

      // アドバイザー
      this.adviserTalk("湯船につかる頻度が多い場合は、浴槽の形が重要です。", true);
      await this.wait(2);
      this.adviserTalk("浴槽の形にこだわりはありますか？");
      await this.wait(2);
      // 選択肢
      msgArray = ["広さ重視", "節水重視", "特になし"];
      await this.select("bathShape", msgArray);
      // ユーザー
      this.myTalk(this.selectObj["bathShape"]);
      await this.wait(3);

      // アドバイザー
      this.adviserTalk("お湯の冷めにくい、保温効果のある浴槽をご希望されますか？", true);
      await this.wait(2);
      // 選択肢
      msgArray = ["はい", "興味がある", "いいえ"];
      await this.select("keepWarm", msgArray);
      // ユーザー
      this.myTalk(this.selectObj["keepWarm"]);
      await this.wait(3);

      // アドバイザー
      this.adviserTalk("リラックス・マッサージ効果のある、バブルバス・ジェットバスをご希望されますか？", true);
      await this.wait(2);
      // 選択肢
      msgArray = ["はい", "興味がある", "いいえ"];
      await this.select("bubbleBath", msgArray);
      // ユーザー
      this.myTalk(this.selectObj["bubbleBath"]);
      await this.wait(3);

      // アドバイザー
      this.adviserTalk("お風呂に埋込み型のオーディオを設置すると、音の広がりがよく、また見た目もスッキリします。", true);
      await this.wait(2);
      this.adviserTalk("お風呂にオーディオの設置を希望されますか？");
      await this.wait(2);
      // 選択肢
      msgArray = ["はい", "興味がある", "いいえ"];
      await this.select("audio", msgArray);
      // ユーザー
      this.myTalk(this.selectObj["audio"]);
      await this.wait(3);

      // アドバイザー
      this.adviserTalk("ゆったりお湯に浸かりながら、最大24インチの大迫力の画面でテレビを楽しむこともできます。", true);
      await this.wait(2);
      this.adviserTalk("お風呂にテレビの設置を希望されますか？");
      await this.wait(2);
      // 選択肢
      msgArray = ["はい", "興味がある", "いいえ"];
      await this.select("television", msgArray);
      // ユーザー
      this.myTalk(this.selectObj["television"]);
      await this.wait(3);

      // アドバイザー
      this.adviserTalk("設置する照明にこだわると、利用シーンに合わせて浴室の雰囲気を手軽に変えることができます。", true);
      await this.wait(2);
      this.adviserTalk("機能的な照明をご希望されますか？");
      await this.wait(2);
      // 選択肢
      msgArray = ["はい", "興味がある", "いいえ"];
      await this.select("light", msgArray);
      // ユーザー
      this.myTalk(this.selectObj["light"]);
      await this.wait(3);

      // アドバイザー
      this.adviserTalk("湯船に浸かる人が複数いたり、利用時間がバラバラな場合は、追い焚き機能が便利です。", true);
      await this.wait(2);
      this.adviserTalk("追い焚き機能をご希望されますか？");
      await this.wait(2);
      // 選択肢
      msgArray = ["はい", "興味がある", "いいえ"];
      await this.select("reheating", msgArray);
      // ユーザー
      this.myTalk(this.selectObj["reheating"]);
      await this.wait(3);

      // アドバイザー
      this.adviserTalk("リビングの家族を呼び出したり会話ができるインターフォンの設置を希望しますか？", true);
      await this.wait(2);
      // 選択肢
      msgArray = ["はい", "興味がある", "いいえ"];
      await this.select("interphone", msgArray);
      // ユーザー
      this.myTalk(this.selectObj["interphone"]);
      await this.wait(3);
    },

    // // 質問、選択肢、回答までのまとめ
    // async questionBlock(adviserMsg, key, msgArray, imgArray, subMsgArray, icon = true, calc = false) {
    //   // アドバイザー
    //   this.adviserTalk(adviserMsg, icon);
    //   await this.wait(2);

    //   // 選択肢
    //   await this.select(key, msgArray, imgArray, subMsgArray, calc);
    //   await this.wait(2);

    //   // ユーザー
    //   this.myTalk(this.selectObj[key]);
    //   await this.wait(3);
    // },

    // アドバイザーの会話を作成
    adviserTalk(adviserMsg, icon = false) {
      const chat = document.getElementById("chat");
      const loadingBall = this.loadingBall();
      const messageDiv = document.createElement("div");
      const message = document.createElement("div");

      messageDiv.classList.add("left-side");
      message.classList.add("bubble");
      message.innerHTML = adviserMsg;

      // アイコンを出す場合のみ要素追加
      if (icon) {
        const messageIcon = document.createElement("div");
        messageIcon.classList.add("left-side-icon");
        messageDiv.appendChild(messageIcon);
      }

      messageDiv.appendChild(loadingBall);
      chat.appendChild(messageDiv);

      // 玉とメッセージを置き換え
      this.replaceMsg(messageDiv, loadingBall, message, 1);
    },

    // ユーザーの会話を作成
    myTalk(myMsg) {
      const chat = document.getElementById("chat");
      const loadingBall = this.loadingBall();
      const messageDiv = document.createElement("div");
      const message = document.createElement("div");

      messageDiv.classList.add("right-side");
      message.classList.add("bubble");

      // 選択肢により一部出力文字を変換
      console.log(myMsg)
      if (myMsg === "しっかり計算" || myMsg === "ざっくり計算") {
        outMsg = `${myMsg}です`;
      } else if (myMsg === "興味がある") {
        outMsg = "興味があります";
      } else {
        let outMsg = myMsg;
      }
      message.innerHTML = `${outMsg}`;

      messageDiv.appendChild(loadingBall);
      chat.appendChild(messageDiv);

      // 玉とメッセージを置き換え
      this.replaceMsg(messageDiv, loadingBall, message, 1);

      window.setTimeout(() => {
        // 3秒後に既読を出力
        messageDiv.classList.add("alreadyRead");
      }, 3000);
    },

    // 指定した秒間ロードの玉を出力したあとメッセージに置き換えるメソッド
    replaceMsg(div, loadingBall, message, sec) {
      window.setTimeout(() => {
        div.removeChild(loadingBall);
        div.appendChild(message);
      }, sec * 1000);
    },

    // 会話ロード中のゆらゆら揺れる玉を作成
    loadingBall() {
      const ballContainer = document.createElement("div");
      ballContainer.classList.add("ball-container", "bubble");
      const ball1 = document.createElement("div");
      const ball2 = document.createElement("div");
      const ball3 = document.createElement("div");
      ball1.classList.add("ball");
      ball2.classList.add("ball");
      ball3.classList.add("ball");
      ballContainer.insertAdjacentElement("beforeend", ball1);
      ballContainer.insertAdjacentElement("beforeend", ball2);
      ballContainer.insertAdjacentElement("beforeend", ball3);
      return ballContainer;
    },

    // 会話中に出てくる計算方式の選択肢を出力
    async select(key, msgArray, imgArray = null, subMsgArray = null, calc = false) {
      const chat = document.getElementById("chat");
      const selectDiv = document.createElement("div");
      selectDiv.classList.add("select-area", "scrollTarget");

      if (calc) {
        selectDiv.classList.add("calc");
      }

      for (let i = 0; i < msgArray.length; i++) {
        const selectContentDiv = document.createElement("div");
        const message = document.createElement("div");
        selectContentDiv.classList.add("select-content", "btn");
        message.classList.add("select-message");

        // 画像がある場合はimg要素を追加
        if (imgArray) {
          const img = document.createElement("img");
          img.setAttribute("src", imgArray[i]);
          message.appendChild(img);
        }

        // p要素を追加
        const p = document.createElement("p");
        p.innerHTML = msgArray[i];
        message.appendChild(p);

        // もうひと段落ある場合p要素を追加
        if (subMsgArray) {
          const p2 = document.createElement("p");
          p2.innerHTML = subMsgArray[i];
          message.appendChild(p2);
        }
        selectContentDiv.appendChild(message);
        selectDiv.appendChild(selectContentDiv);
      }
      // 要素を追加
      chat.appendChild(selectDiv);
      this.autoScroll();

      await this.btnClick(key, msgArray);
      selectDiv.classList.add("hide");
    },

    // 選択肢のボタンをクリック
    btnClick(key, msgArray) {
      return new Promise((resolve) => {
        let btn = document.querySelectorAll(".btn");
        for (let i = 0; i < msgArray.length; i++) {
          let btnIndex = btn.length - msgArray.length + i;
          console.log(btn[btnIndex])
          console.log(msgArray[i])
          btn[btnIndex].addEventListener("click", () => {this.selectObj[key] = `${msgArray[i]}`;});
          btn[btnIndex].addEventListener("click", resolve);
        }
      });
    },

    // アドバイザーが画像を出力
    adviserTalkImg(className, srcPath, altStr) {
      const chat = document.getElementById("chat");
      const imgDiv = document.createElement("div");
      const img = document.createElement("img");
      imgDiv.classList.add("scrollTarget", className);
      img.setAttribute("src", srcPath);
      img.setAttribute("alt", altStr);

      imgDiv.appendChild(img);
      chat.appendChild(imgDiv);
      this.autoScroll();
    },

    // 指定位置に0.2秒後にスクロールする
    autoScroll() {
      let lastDiv = document.querySelector(".scrollTarget:nth-last-child(1)"); // 移動させたい位置の要素を取得
      let rect = lastDiv.getBoundingClientRect();
      let position = rect.top + scrollY; // 要素の頂点の高さを設定
      setTimeout(() => {
        scroll(0, position);
      }, 200);
    },

    // 引数で渡された秒数だけ処理を待つ
    wait(sec) {
      return new Promise((resolve) => {
        setTimeout(resolve, sec * 1000);
      });
    },
  },
})

  // ロード画面を出力するコンポーネント
  .component("loading", {
    template: `<div class="roading-area">
      <div class="sk-fading-circle">
        <div class="sk-circle1 sk-circle"></div>
        <div class="sk-circle2 sk-circle"></div>
        <div class="sk-circle3 sk-circle"></div>
        <div class="sk-circle4 sk-circle"></div>
        <div class="sk-circle5 sk-circle"></div>
        <div class="sk-circle6 sk-circle"></div>
        <div class="sk-circle7 sk-circle"></div>
        <div class="sk-circle8 sk-circle"></div>
        <div class="sk-circle9 sk-circle"></div>
        <div class="sk-circle10 sk-circle"></div>
        <div class="sk-circle11 sk-circle"></div>
        <div class="sk-circle12 sk-circle"></div>
      </div>
    </div>`,
  })
  .mount("#app");
