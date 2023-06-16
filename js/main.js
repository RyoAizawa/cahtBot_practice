import TalkAdviser from "./components/TalkAdviser.js";
import TalkMe from "./components/TalkMe.js";
import SelectCalc from "./components/SelectCalc.js";

Vue.createApp({
  data: () => {
    return {
      adviserMessage: "",
      myMessage: "",
      count: 0,
      selected: "",
      first: true,
      isHide: false,
    };
  },
  created() {
    this.count++;
  },
  methods: {
    selectedBtn(e) {
      this.selected = e;
      this.count++;
      this.isHide = true;
    },
    countUp() {
      window.setTimeout(() => {
        this.count++;
        console.log(this.count);
      }, 1000);
    }
  },
  components: {
    TalkAdviser,
    TalkMe,
    SelectCalc,
  },
  computed: {
    talkFirst() {
      this.count === 1 ? (this.first = true) : (this.first = false);
      return this.first;
    },
  },
}).mount("#app");
