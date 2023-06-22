Vue.createApp({
  data: () => {
    return {
      isLoaded: false,  // ロード画面が終わった判定
      // 各質問項目回答データ
      selectObj: [
        { "calcSelected": "" }, // 選択した計算方式
        { "bathType": "" },     // 希望する風呂の形式
        { "bathSize": "" },     // 風呂の大きさ
        { "bathShape": "" },    // 浴槽の形
        { "keepWarm": "" },     // 保温効果
        { "bubbleBath": "" },   // バブルバス・ジェットバスの希望
        { "audio": "" },        // オーディオの設置
        { "television": "" },   // テレビの設置
        { "light": "" },        // 効果的な照明の設定
        { "reheating": "" },    // 追い焚き機能
        { "interphone": "" },   // インターフォンの設置
        { "region": "" },       // 地方
        { "prefecture": ""},    // 県
      ],
      // 住所
      address: [
        { "region": "北海道・東北", "prefecture": "北海道" },
        { "region": "北海道・東北", "prefecture": "青森県" },
        { "region": "北海道・東北", "prefecture": "岩手県" },
        { "region": "北海道・東北", "prefecture": "宮城県" },
        { "region": "北海道・東北", "prefecture": "秋田県" },
        { "region": "北海道・東北", "prefecture": "山形県" },
        { "region": "北海道・東北", "prefecture": "福島県" },
        { "region": "関東", "prefecture": "茨城県" },
        { "region": "関東", "prefecture": "栃木県" },
        { "region": "関東", "prefecture": "群馬県" },
        { "region": "関東", "prefecture": "埼玉県" },
        { "region": "関東", "prefecture": "千葉県" },
        { "region": "関東", "prefecture": "東京府" },
        { "region": "関東", "prefecture": "神奈川県" },
        { "region": "北陸・甲信越", "prefecture": "新潟府" },
        { "region": "北陸・甲信越", "prefecture": "富山県" },
        { "region": "北陸・甲信越", "prefecture": "石川県" },
        { "region": "北陸・甲信越", "prefecture": "福井県" },
        { "region": "北陸・甲信越", "prefecture": "山梨県" },
        { "region": "北陸・甲信越", "prefecture": "長野県" },
        { "region": "東海", "prefecture": "静岡県" },
        { "region": "東海", "prefecture": "愛知県" },
        { "region": "東海", "prefecture": "三重県" },
        { "region": "東海", "prefecture": "岐阜県" },
        { "region": "関西", "prefecture": "滋賀県" },
        { "region": "関西", "prefecture": "京都府" },
        { "region": "関西", "prefecture": "大阪府" },
        { "region": "関西", "prefecture": "兵庫県" },
        { "region": "関西", "prefecture": "奈良県" },
        { "region": "関西", "prefecture": "和歌山県" },
        { "region": "中国", "prefecture": "鳥取県" },
        { "region": "中国", "prefecture": "島根県" },
        { "region": "中国", "prefecture": "岡山県" },
        { "region": "中国", "prefecture": "広島県" },
        { "region": "中国", "prefecture": "山口県" },
        { "region": "四国", "prefecture": "徳島県" },
        { "region": "四国", "prefecture": "香川県" },
        { "region": "四国", "prefecture": "愛媛県" },
        { "region": "四国", "prefecture": "高知県" },
        { "region": "九州・沖縄", "prefecture": "福岡県" },
        { "region": "九州・沖縄", "prefecture": "佐賀県" },
        { "region": "九州・沖縄", "prefecture": "長崎府" },
        { "region": "九州・沖縄", "prefecture": "熊本県" },
        { "region": "九州・沖縄", "prefecture": "大分県" },
        { "region": "九州・沖縄", "prefecture": "宮崎県" },
        { "region": "九州・沖縄", "prefecture": "鹿児島県 " },
        { "region": "九州・沖縄", "prefecture": "沖縄県" }
      ],
    };
  },
  created() {
    this.main();
  },
  methods: {
    /*---------------------------------
      ▼ロード画面を出力するメソッド
    ---------------------------------*/
    async loaded() {
      await this.wait(2);
      this.isLoaded = true;
    },

    /*---------------------------------
      ▼メインメソッド
    ---------------------------------*/
    async main() {
      // ロード画面の出力
      await this.loaded();

      // 選択肢用配列
      let adviserTalkArray = [];
      let selectorArray = [];
      let subMsgArray = [];
      let imgArray = [];

      adviserTalkArray = ["２つの方法で相場を計算することができます。", "どちらがご希望に近いですか？"];
      selectorArray = ["ざっくり計算", "しっかり計算"];
      subMsgArray = ["広さや形状から<br>おおまかに", "広さや形状から<br>おおまかに"];
      imgArray = null;
      await this.questionBlock(adviserTalkArray, "calcSelected", selectorArray, imgArray, subMsgArray, "calc")

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

      adviserTalkArray = ["希望されるお風呂は、どのような形式ですか？"];
      selectorArray = ["ユニットバス", "タイル貼り", "わからない"];
      imgArray = ["./images/bath.png", "./images/tile.png", "./images/idontknow.png"];
      await this.questionBlock(adviserTalkArray, "bathType", selectorArray, imgArray);

      adviserTalkArray = ["希望されるお風呂の大きさは、どのくらいですか？"];
      selectorArray = ["2畳未満", "2畳以上", "わからない"];
      imgArray = ["./images/less2.png", "./images/over2.png", "./images/idontknow.png"];
      await this.questionBlock(adviserTalkArray, "bathSize", selectorArray, imgArray);

      this.adviserTalk("浴槽まわりの希望をお伺いします。", true);
      await this.wait(2);

      adviserTalkArray = ["湯船につかる頻度が多い場合は、浴槽の形が重要です。", "浴槽の形にこだわりはありますか？"];
      selectorArray = ["広さ重視", "節水重視", "特になし"];
      await this.questionBlock(adviserTalkArray, "bathShape", selectorArray);

      adviserTalkArray = ["お湯の冷めにくい、保温効果のある浴槽をご希望されますか？"];
      selectorArray = ["はい", "興味がある", "いいえ"];
      await this.questionBlock(adviserTalkArray, "keepWarm", selectorArray);

      adviserTalkArray = ["リラックス・マッサージ効果のある、バブルバス・ジェットバスをご希望されますか？"];
      await this.questionBlock(adviserTalkArray, "bubbleBath", selectorArray);

      adviserTalkArray = ["お風呂に埋込み型のオーディオを設置すると、音の広がりがよく、また見た目もスッキリします。", "お風呂にオーディオの設置を希望されますか？"];
      await this.questionBlock(adviserTalkArray, "audio", selectorArray);

      adviserTalkArray = ["ゆったりお湯に浸かりながら、最大24インチの大迫力の画面でテレビを楽しむこともできます。", "お風呂にテレビの設置を希望されますか？"];
      await this.questionBlock(adviserTalkArray, "television", selectorArray);

      adviserTalkArray = ["設置する照明にこだわると、利用シーンに合わせて浴室の雰囲気を手軽に変えることができます。", "機能的な照明をご希望されますか？"];
      await this.questionBlock(adviserTalkArray, "light", selectorArray);

      adviserTalkArray = ["湯船に浸かる人が複数いたり、利用時間がバラバラな場合は、追い焚き機能が便利です。", "追い焚き機能をご希望されますか？"];
      await this.questionBlock(adviserTalkArray, "reheating", selectorArray);

      adviserTalkArray = ["リビングの家族を呼び出したり会話ができるインターフォンの設置を希望しますか？"];
      await this.questionBlock(adviserTalkArray, "interphone", selectorArray);

      // 住所選択用
      await this.questionAddress();
      this.adviserTalk(`${this.selectObj.length}個の入力ありがとうございました。`, true);
    },

    /*---------------------------------
      ▼質問、選択肢、回答までのまとめメソッド
        adviserTalkArray...アドバイザーが出力する会話の入った配列
        key...選択した選択肢をオブジェクトに保存するキー
        selectorArray...選択肢
        imgArray...選択肢に乗せる画像パス
        subMsgArray...選択肢に乗せる追加の文言
        mode...選択肢によって別なクラスを付与するための判定
    ---------------------------------*/
    async questionBlock(adviserTalkArray, key, selectorArray, imgArray = null, subMsgArray = null,  mode = null) {
      // アドバイザー
      // 会話初回はアイコンを出力
      let icon = true;
      // 配列に入っているメッセージ分を連続して出力
      for (let i = 0; i < adviserTalkArray.length; i++) {
        this.adviserTalk(adviserTalkArray[i], icon);
        // 会話2回目以降はアイコン出力しない
        icon = false;
        await this.wait(2);
      }
      // 選択肢の出力
      await this.select(key, selectorArray, imgArray, subMsgArray, mode);
      await this.wait(1);
      // ユーザー側の会話の出力
      this.myTalk(this.selectObj[key]);
      await this.wait(2);
    },

    /*---------------------------------
      ▼質問⇒地方⇒県名選択⇒ユーザー受け答えを行うメソッド
    ---------------------------------*/
    async questionAddress() {

      this.adviserTalk("物件の場所はどちらになりますか？", true);
      await this.wait(2);

      // addressオブジェクトから重複を除いた地方名を取り出す
      let uniqueRegions = new Set(this.address.map(item => item.region));
      // 配列に変換
      let selectorArray = Array.from(uniqueRegions);
      await this.select("region", selectorArray, null, null, "address");

      await this.wait(1);
      // 選択した地方名と一致する要素のみ取り出す。
      let filteredRegion = this.address.filter(address => this.selectObj["region"] === address.region);
      // 選択した地方のオブジェクトから県名を取り出す
      selectorArray = filteredRegion.map(address => address.prefecture);
      await this.select("prefecture", selectorArray, null, null, "address");
      await this.wait(1);

      // ユーザー側の会話の出力
      this.myTalk(this.selectObj["prefecture"]);
      await this.wait(2);
    },

    /*---------------------------------
      ▼アドバイザーの会話を作成するメソッド
        adviserMsg...アドバイザーが出力する会話
        icon...アイコンを出力するかの判定
    ---------------------------------*/
    adviserTalk(adviserMsg, icon = false) {
      const loadingBall = this.loadingBall();
      const messageDiv = document.createElement("div");
      const message = document.createElement("div");
      messageDiv.classList.add("left-side");
      message.classList.add("bubble");
      message.innerHTML = adviserMsg;

      // アイコンを出す場合のみ、アイコン用の要素追加
      if (icon) {
        const messageIcon = document.createElement("div");
        messageDiv.classList.add("icon", "scrollTarget"),
        messageIcon.classList.add("left-side-icon");
        messageDiv.appendChild(messageIcon);
      }

      // 玉⇒メッセージの出力
      this.outputMsg(messageDiv, loadingBall, message, 1);
    },

    /*---------------------------------
      ▼ユーザーの会話を作成するメソッド
        myMsg...選択肢の値を保存しているオブジェクト
    ---------------------------------*/
    myTalk(myMsg) {
      const loadingBall = this.loadingBall();
      const messageDiv = document.createElement("div");
      const message = document.createElement("div");
      messageDiv.classList.add("right-side");
      message.classList.add("bubble");

      /*----------------------------
        選択肢により一部出力文字を変換
        ▼選択肢
          ・興味がある ⇒ 興味があります
          ・その他 ⇒ 〇〇です
          ・はい、いいえ ⇒ そのまま出力
      ----------------------------*/
      let outMsg = myMsg;
      if (myMsg === "はい" || myMsg === "いいえ") {
        // 素通り
      } else if (myMsg === "興味がある") {
        outMsg = "興味があります";
      } else {
        outMsg += "です";
      }
      message.innerHTML = `${outMsg}`;

      // 玉⇒メッセージの出力
      this.outputMsg(messageDiv, loadingBall, message, 1);

      window.setTimeout(() => {
        // 2秒後に既読を出力
        messageDiv.classList.add("alreadyRead");
      }, 2000);
    },

    /*---------------------------------
      ▼指定した秒間ロードの玉を出力したあとメッセージに置き換えるメソッド
        div...呼び出し元で生成した会話の塊
        loadingBall...吹き出しの中に入れるロード中の玉
        message...吹き出しの中に入れるメッセージ
        sec...玉とメッセージを入れ替えるまでの秒数
    ---------------------------------*/
    outputMsg(div, loadingBall, message, sec) {
      const chat = document.getElementById("chat");
      // ロード中の玉を追加
      div.appendChild(loadingBall);
      // 会話の塊をブラウザに出力
      chat.appendChild(div);

      window.setTimeout(() => {
        div.removeChild(loadingBall);
        div.appendChild(message);
      }, sec * 1000);
    },

    /*---------------------------------
      ▼会話ロード中のゆらゆら揺れる玉を作成するメソッド
        retVal:ballContainer...出来上がったdivの塊
    ---------------------------------*/
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

    /*---------------------------------
      ▼会話中に出てくる選択肢を出力するメソッド
        key...選択した選択肢をオブジェクトに保存するキー
        selectorArray...選択肢
        imgArray...選択肢に乗せる画像パス
        subMsgArray...選択肢に乗せる追加の文言
        mode...選択肢によって別なクラスを付与するための判定
    ---------------------------------*/
    async select(key, selectorArray, imgArray = null, subMsgArray = null, mode = null) {
      const chat = document.getElementById("chat");
      const selectDiv = document.createElement("div");
      selectDiv.classList.add("select-area");
      // 特別なクラスを付けたい場合、引数で指定したクラス名を付与
      if (mode) selectDiv.classList.add(`${mode}`);
      // 引数で渡された選択肢の分だけボタンを追加する
      for (let i = 0; i < selectorArray.length; i++) {
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
        p.innerHTML = selectorArray[i];
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
      // ブラウザに出力
      chat.appendChild(selectDiv);
      // 指定の位置までブラウザをスクロール
      this.autoScroll();
      // ボタンのクリック待ち
      await this.btnClick(key, selectorArray);
      await this.wait(0.5);
      // 選択肢の要素を隠す
      selectDiv.classList.add("hide");
    },

    /*---------------------------------
      ▼選択肢のボタンを取得⇒クリック待ちメソッド
        key...選択した選択肢をオブジェクトに保存するキー
        selectorArray...選択肢
    ---------------------------------*/
    btnClick(key, selectorArray) {
      return new Promise((resolve) => {
        // クラス「btn」の要素を全て取得
        let btn = document.querySelectorAll(".btn");
        let currentChoice = [];
        // 選択肢の分まで処理を繰り返し
        for (let i = 0; i < selectorArray.length; i++) {
          /*
            全ての「btn」クラス要素から今回対象になる選択肢のみ抜粋したい
            全体で10個あり今回追加する3個を抜粋する
              10 - 3 + 0 = 7
              10 - 3 + 1 = 8
              10 - 3 + 2 = 9
            と、末尾のインデックス番号が取れる（0始まりなので）
          */
          let btnIndex = btn.length - selectorArray.length + i;
          // 現在出ている選択肢を配列にプッシュ
          currentChoice.push(btn[btnIndex]);
          // 選択肢のクリックイベント
          currentChoice[i].addEventListener("click", () => {
            // クリックした選択肢の文言を、引数で指定したオブジェクトのキーに保存
            this.selectObj[key] = `${selectorArray[i]}`;
            // 現在の選択肢を走査し
            currentChoice.forEach(select => {
              if (btn[btnIndex] === select) {
                // 選択したボタンと一致するボタンは、クラス「select」を付与
                select.classList.add('select');
              } else {
                // 選択したボタンと一致しないボタンは、クラス「transparent」を付与し透過
                select.classList.add('transparent');
              }
            });
            // クリックイベントが発生したらresolveを返す
            resolve();
          });
        }
      });
    },

    /*---------------------------------
      ▼アドバイザーが画像を出力するメソッド
        className...画像に適用するクラス名
        srcPath...画像のパス
        altStr...画像のalt属性に記述する文言
    ---------------------------------*/
    adviserTalkImg(className, srcPath, altStr) {
      const chat = document.getElementById("chat");
      const imgDiv = document.createElement("div");
      const img = document.createElement("img");
      imgDiv.classList.add(className);
      img.setAttribute("src", srcPath);
      img.setAttribute("alt", altStr);

      imgDiv.appendChild(img);
      // ブラウザに出力
      chat.appendChild(imgDiv);
      // 指定した位置までスクロール
      this.autoScroll();
    },

    /*---------------------------------
      ▼指定位置に0.2秒後にスクロールするメソッド
    ---------------------------------*/
    autoScroll() {
      // 移動させたい位置の要素を取得
      let target = document.querySelectorAll(".scrollTarget");
      // 今回は最後にアイコン出力した箇所を指定
      let rect = target[target.length - 1].getBoundingClientRect();
      // 要素の頂点の高さを設定
      let position = rect.top + scrollY;
      setTimeout(() => {
        scroll(0, position);
      }, 200);
    },

    /*---------------------------------
      ▼引数で渡された秒数だけ処理を待つメソッド
        sec...次の処理を行うまで待つ秒数
    ---------------------------------*/
    wait(sec) {
      return new Promise((resolve) => {
        // 指定の秒数がたったらresolveを返す
        setTimeout(resolve, sec * 1000);
      });
    },
  },
})

  /*---------------------------------
    ロード画面を出力するコンポーネント
  ---------------------------------*/
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
