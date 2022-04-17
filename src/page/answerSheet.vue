
<template>
  <div class="mian">
    <div class="button-number main-box">
      <div class="number-box">
        <button
          v-for="(item, index) in questionList"
          :key="item.id"
          @click="handleSelect(item, index)"
        >
          {{ index + 1 }}
        </button>
      </div>
      <div class="button-box">
        <button @click="hanldeAddQuestion('choose')">添加选择题</button>
        <button @click="hanldeAddQuestion('fill')">添加填空题</button>
        <button @click="hanldeAddQuestion('ask')">添加问答题</button>
      </div>
    </div>
    <div class="question-info main-box" v-if="curQuestion.id">
      <div class="question-box">
        <div class="question-title">
          {{ curIndex + 1 }}.<input v-model="curQuestion.content" />
        </div>
        <div class="answer-list" v-if="curQuestion.type === 'choose'">
          <ol type="A">
            <li v-for="(answer, index) in curQuestion.answerList" :key="index">
              {{ numberMap[index] }}.
              <input v-model="curQuestion.answerList[index]" />
            </li>
            <button @click="hanldeAddAnswer">添加选项</button>
          </ol>
        </div>
        <div class="answer-list" v-if="curQuestion.type === 'fill'">
          <ul type="A">
            <li v-for="grace in curQuestion.grace" :key="grace">
              <input />
            </li>
          </ul>
        </div>
        <div class="answer-list" v-if="curQuestion.type === 'ask'">
          <textarea />
        </div>
      </div>
    </div>
    <div class="button-other main-box" v-if="curQuestion.id">
      <ul>
        <li>分值: <input v-model="curQuestion.grace" />分</li>
        <li>
          正确答案:
          <span
            class="answer-item"
            v-for="item in curQuestion.answerList"
            :key="item"
          >
            <input
              type="checkbox"
              :value="item"
              @change="handleSelectAnswer"
            />{{ item }}
          </span>
        </li>
        <li>
          序号:
          <select>
            <option v-for="(item, index) in questionList" :key="item">
              {{ index + 1 }}
            </option>
          </select>
        </li>
      </ul>
      <button @click="handleSave">保存</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AnswerSheet",
  data() {
    return {
      questionAttr: {
        type: "question", //question：逐一填写，list：全部一起填写
        realTimeGrace: true, //是否实时显示分数
        showComfirm: true, //是否显示确认答案页面
      },
      questionList: [],
      curQuestion: {},
      curIndex: null,
      numberMap: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
      ],
    };
  },
  beforeMount() {},
  methods: {
    hanldeAddQuestion(type) {
      let obj = {};
      let id = this.questionList.length + 1;
      switch (type) {
        case "choose":
          obj = {
            id,
            content: "",
            type: "choose",
            answer: [],
            answerList: [],
            graceMapAnswer: [], //答对部分选项对应分数
            grace: 0,
          };
          break;
        case "fill":
          obj = {
            id,
            content: "",
            type: "fill",
            answer: [],
            graceMapAnswer: [], //每一处对应得分
            grace: 5,
          };
          break;
        case "ask":
          obj = {
            id,
            content: "",
            type: "ask",
            answer: "",
            grace: 5,
          };
          break;
      }
      this.questionList.push(obj);
    },
    handleSelect(item, index) {
      let _item = JSON.parse(JSON.stringify(item));
      this.curQuestion = _item;
      this.curIndex = index;
    },
    hanldeAddAnswer() {
      this.curQuestion.answerList.push("");
    },
    handleSave() {
      debugger;
      //调整答案顺序
      let _answer = this.curQuestion.answerList.filter(
        (item) => this.curQuestion.answer.indexOf(item) !== -1
      );
      this.curQuestion.answer = _answer;
      this.questionList[this.curIndex] = this.curQuestion;
    },
    handleSelectAnswer(e) {
      let _index = this.curQuestion.answerList.findIndex(
        (item) => item === e.target.value
      );
      if (e.target.checked) {
        this.curQuestion.answer.push(e.target.value);
      } else {
        this.curQuestion.answer.splice(_index, 1);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.mian {
  width: 1200px;
  margin: 0 auto;
  display: flex;
}
.main-box {
  border: 1px solid #333;
  padding: 10px;
}
.button-number {
  width: 200px;
  .number-box {
    margin-bottom: 20px;
    button {
      width: 20px;
      height: 20px;
      margin: 0 5px 5px 0;
    }
  }
}
.question-info {
  width: 800px;
  margin: 0 20px;
}
.question-box {
  margin-bottom: 20px;
}
.answer-item {
  margin-right: 10px;
}
</style>
