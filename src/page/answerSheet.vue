
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
    <div class="question-info main-box" v-if="curQuestion.id">
      <div class="question-box">
        <div class="question-title">
          <el-input
            v-model="curQuestion.content"
            placeholder="请输入题目内容"
            type="textarea"
          />
        </div>
        <div class="answer-list" v-if="curQuestion.type === 'choose'">
          <ol type="A">
            <li v-for="(answer, index) in curQuestion.answerList" :key="index">
              <el-input
                v-model="curQuestion.answerList[index]"
                placeholder="请输入选项内容"
              >
                <template #prepend>{{ numberMap[index] }}</template>
              </el-input>
              <el-button
                v-if="curQuestion.answerList.length > 2"
                :icon="Delete"
                @click="hanldleDeleteAnswer(index)"
                style="margin-left: 10px"
              />
            </li>
          </ol>
          <el-button
            @click="hanldeAddAnswer"
            type="primary"
            style="margin-top: 10px"
          >
            添加选项
          </el-button>
        </div>
        <div class="answer-list" v-if="curQuestion.type === 'fill'">
          <ul>
            <li v-for="grace in curQuestion.grace" :key="grace">
              <el-input />
            </li>
          </ul>
        </div>
        <div class="answer-list" v-if="curQuestion.type === 'ask'">
          <el-input type="textarea" />
        </div>
      </div>
    </div>
    <div class="button-other main-box" v-if="curQuestion.id">
      <ul>
        <li>
          分值:
          <el-input
            v-model="curQuestion.answerList[index]"
            placeholder="请输入分值"
            type="number"
            style="width: 100px"
          ></el-input>
        </li>
        <li>
          正确答案:

          <el-checkbox-group v-model="curQuestion.answer">
            <el-checkbox
              :label="item"
              v-for="item in curQuestion.answerList"
              :key="item"
            />
          </el-checkbox-group>
        </li>
        <li>
          序号:
          <el-select style="width: 100px">
            <el-option v-for="(item, index) in questionList" :key="item">
              {{ index + 1 }}
            </el-option>
          </el-select>
        </li>
      </ul>
      <el-button @click="handleDelete" type="danger">删除</el-button>
      <el-button @click="handleSave">保存</el-button>
    </div>
  </div>
</template>

<script>
import { Delete } from "@element-plus/icons-vue";
export default {
  name: "AnswerSheet",
  data() {
    return {
      Delete,
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
            answerList: ["", ""],
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
.button-other {
  width: 200px;
  li {
    margin-bottom: 10px;
  }
}
.answer-list {
  li {
    display: flex;
    margin-top: 10px;
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
</style>
