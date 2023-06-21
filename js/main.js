Vue.createApp({
  data: () => {
    return {
      adviserMsg: "",
      myMsg: "",
      isLoaded: false,
      selected: "", // 選択した計算方式
      isHide: false, // 要素を隠す
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

      // アドバイザー
      let msg = "２つの方法で相場を計算することができます。";
      this.adviserTalk(msg, true);
      await this.wait(2);

      // アドバイザー
      msg = "どちらがご希望に近いですか？";
      this.adviserTalk(msg);
      await this.wait(2);

      // 計算方式の選択待ち
      await this.calcSelect();

      // ユーザー
      msg = this.selected;
      this.myTalk(msg);
      await this.wait(3);

      // アドバイザー
      msg = "かしこまりました。";
      this.adviserTalk(msg, true);
      await this.wait(2);

      // ざっくり計算を選択した場合
      if (this.selected === "ざっくり計算") {
        msg = `データをもとに、あなたの費用を${this.selected}します。`;
        this.adviserTalk(msg);
      } else {
        // しっかり計算を選択した場合
        msg = "一戸建てのお風呂リフォーム相場は";
        this.adviserTalk(msg);
        await this.wait(2);

        // アドバイザーが画像を出力
        this.adviserTalkImg("graph", "./images/graph.png", "グラフ");
        await this.wait(2);

        msg = `あなたの費用を、データをもとに${this.selected}します。`;
        this.adviserTalk(msg, true);
      }
    },

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
      message.innerHTML = `${myMsg}です。`;

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
    async calcSelect() {
      const chat = document.getElementById("chat");
      const selectDiv = document.createElement("div");
      selectDiv.classList.add("select-calc", "scrollTarget");

      const selectContentDivAbout = document.createElement("div");
      const messageAbout = document.createElement("div");
      const p = document.createElement("p");
      const p2 = document.createElement("p");
      selectContentDivAbout.classList.add("select-calc-content", "btn");
      messageAbout.classList.add("select-calc-message");

      p.innerHTML = "ざっくり計算";
      p2.innerHTML = "広さや形状から<br>おおまかに";
      messageAbout.appendChild(p);
      messageAbout.appendChild(p2);
      selectContentDivAbout.appendChild(messageAbout);
      selectDiv.appendChild(selectContentDivAbout);

      const selectContentDivTightly = document.createElement("div");
      const messageTightly = document.createElement("div");
      const p3 = document.createElement("p");
      const p4 = document.createElement("p");
      selectContentDivTightly.classList.add("select-calc-content", "btn");
      messageTightly.classList.add("select-calc-message");

      p3.innerHTML = "しっかり計算";
      p4.innerHTML = "欲しい機能や<br>設備も入れて";
      messageTightly.appendChild(p3);
      messageTightly.appendChild(p4);
      selectContentDivTightly.appendChild(messageTightly);
      selectDiv.appendChild(selectContentDivTightly);
      chat.appendChild(selectDiv);
      this.autoScroll();

      await this.btnClick();
      selectDiv.classList.add("hide");
    },

    // 計算方式のボタンをクリック
    btnClick() {
      return new Promise((resolve) => {
        let btn = document.querySelectorAll(".btn");

        btn[0].addEventListener("click", () => {this.selected = "ざっくり計算";});
        btn[0].addEventListener("click", resolve);

        btn[1].addEventListener("click", () => {this.selected = "しっかり計算";});
        btn[1].addEventListener("click", resolve);
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
