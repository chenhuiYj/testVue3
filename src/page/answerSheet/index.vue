
<template>
  <div class="mian">
    <div class="button-number main-box">
      <div class="number-box">
        <el-button
          v-for="(item, index) in questionList"
          :key="item.id"
          @click="handleSelect(item, index)"
          style="width: 30px; height: 30px"
          :type="index === curIndex ? 'primary' : ''"
        >
          {{ index + 1 }}
        </el-button>
      </div>
      <div class="button-box">
        <p>
          <el-button @click="hanldeAddQuestion('choose')">添加选择题</el-button>
        </p>
        <p>
          <el-button @click="hanldeAddQuestion('fill')">添加填空题</el-button>
        </p>
        <p>
          <el-button @click="hanldeAddQuestion('check')">添加判断题</el-button>
        </p>
        <p>
          <el-button @click="hanldeAddQuestion('ask')">添加问答题</el-button>
        </p>
      </div>
    </div>
    <ChooseQuestion
      v-if="curQuestion.id && curQuestion.type === 'choose'"
      :sourceData="curQuestion"
      @save="handleSave"
      @delete="handleDelete"
    />
  </div>
</template>

<script>
import ChooseQuestion from "./components/choose";
export default {
  name: "AnswerSheet",
  components: { ChooseQuestion },
  data() {
    return {
      test: 1,
      questionAttr: {
        type: "question", //question：逐一填写，list：全部一起填写
        realTimeGrace: true, //是否实时显示分数
        showComfirm: true, //是否显示确认答案页面
      },
      questionList: [],
      curQuestion: {},
      curIndex: null,
    };
  },
  beforeMount() {},
  computed: {
    getMapGraceTips() {
      switch (this.curQuestion.type) {
        case "choose":
          "";
      }
    },
    checkAnswerList() {
      if (this.curQuestion.type !== "choose") {
        return false;
      }
      return this.curQuestion.answerList.some((item) => !item.trim());
    },
    checkAnswer() {
      if (this.checkAnswerList) {
        return false;
      }
      return this.curQuestion.answer.length === 0;
    },
    checkAnswerListUnique() {
      if (this.curQuestion.type !== "choose") {
        return false;
      }
      if (this.checkAnswerList) {
        return false;
      }
      return (
        [...new Set(this.curQuestion.answerList)].length !==
        this.curQuestion.answerList.length
      );
    },
    getAnswerListError() {
      if (this.curQuestion.type !== "choose") {
        return false;
      }
      if (this.checkAnswerListUnique) {
        return "选项有重复内容";
      }
      return false;
    },
    getFillAnswer() {
      if (this.curQuestion.type !== "fill") {
        return;
      }
      if (this.checkAnswerListUnique) {
        return "选项有重复内容";
      }
      return false;
    },
  },
  methods: {
    hanldeAddQuestion(type) {
      let obj = {};
      let id = Math.random().toString(10).substring(2);
      switch (type) {
        case "choose":
          obj = {
            id,
            content: "",
            type,
            answer: [],
            answerList: ["", ""],
            answerSum: null, //可选答案个数
            graceMapAnswer: [], //答对部分选项对应分数
            conditionTigger: {
              qId: "", //题目ID
              tigger: "", //触发条件  1-已答题 2-未答题 3-答错  4-答对 5-不全对
              status: "", //当前题目状态 1-必答题 2-非必答题 3-隐藏
            },
            grace: "",
          };
          break;
        case "fill":
          obj = {
            id,
            content: "",
            type,
            answer: [],
            graceMapAnswer: [], //每一处对应得分
            grace: "",
          };
          break;
        case "ask":
          obj = {
            id,
            content: "",
            type,
            answer: "",
            grace: "",
          };
          break;
        case "check":
          obj = {
            id,
            content: "",
            type,
            answer: "",
            grace: "",
          };
          break;
      }
      this.questionList.push(obj);
      this.curQuestion = obj;
      this.curIndex = this.questionList.length - 1;
    },
    handleSelect(item, index) {
      let _item = JSON.parse(JSON.stringify(item));
      this.curQuestion = _item;
      this.curIndex = index;
    },
    hanldleDeleteAnswer(index) {
      this.curQuestion.answerList.splice(index, 1);
    },
    hanldeAddAnswer() {
      this.curQuestion.answerList.push("");
    },
    handleDelete() {
      this.questionList.splice(this.curIndex, 1);
      this.curQuestion = {};
      this.curIndex = null;
    },
    handleSave(val) {
      this.questionList[this.curIndex] = val;
    },
    handleSelectAnswer(answer) {
      let _index = this.curQuestion.answer.indexOf(answer);
      if (_index === -1) {
        this.curQuestion.answer.push(answer);
      } else {
        this.curQuestion.answer.splice(_index, 1);
        if (this.curQuestion.answerSum > this.curQuestion.answer.length) {
          this.curQuestion.answerSum = this.curQuestion.answer.length;
        }
      }
    },
    handleContentChange() {
      if (this.curQuestion.type !== "fill") {
        return;
      }
      this.curQuestion.answer = this.curQuestion.content
        .match(/\{--(.+?)--\}/g)
        .map((item) => item.replace("{--", "").replace("--}", ""));
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
.button-other {
  width: 300px;
  li {
    margin-bottom: 10px;
  }
}
.answer-list {
  li {
    display: flex;
    margin-top: 10px;
  }
  .input-button {
    outline: 0;
    border-radius: 4px 0 0 4px;
  }
  .has-check {
    background: var(--el-color-success);
    color: #fff;
    &:hover {
      color: #fff;
      background: var(--el-color-success-light-3);
    }
  }
}
.button-box {
  p {
    margin-bottom: 10px;
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
.error-msg {
  color: #f00;
}
</style>
