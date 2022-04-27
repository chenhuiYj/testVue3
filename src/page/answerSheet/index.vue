
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
            @change="handleContentChange"
          />
        </div>
        <div class="answer-list" v-if="curQuestion.type === 'choose'">
          <ul>
            <li v-for="(answer, index) in curQuestion.answerList" :key="index">
              <el-input
                v-model="curQuestion.answerList[index]"
                placeholder="请输入选项内容"
              >
                <template #prepend
                  ><el-button
                    @click="handleSelectAnswer(answer)"
                    :class="`input-button ' 
                      ${
                        answer && curQuestion.answer.indexOf(answer) !== -1
                          ? 'has-check'
                          : ''
                      }
                    `"
                  >
                    {{ numberMap[index] }}
                  </el-button></template
                >
              </el-input>
              <el-button
                v-if="curQuestion.answerList.length > 2"
                :icon="Delete"
                @click="hanldleDeleteAnswer(index)"
                style="margin-left: 10px"
              />
            </li>
            <li v-if="checkAnswerListUnique">
              <p class="error-msg">{{ getAnswerListError }}</p>
            </li>
          </ul>
          <el-button
            @click="hanldeAddAnswer"
            type="primary"
            style="margin-top: 10px"
            :disabled="checkAnswerList"
          >
            添加选项
          </el-button>
        </div>
        <div class="answer-list" v-if="curQuestion.type === 'fill'">
          <ul>
            <li v-for="item in curQuestion.answer" :key="item">
              <el-input :value="item" disabled />
            </li>
          </ul>
        </div>
        <div class="answer-list" v-if="curQuestion.type === 'check'">
          <el-radio-group v-model="curQuestion.answer">
            <el-radio label="正确">正确</el-radio>
            <el-radio label="错误">错误</el-radio>
          </el-radio-group>
        </div>
      </div>
    </div>
    <div class="button-other main-box" v-if="curQuestion.id">
      <ul>
        <li>
          总分值:
          <el-input
            v-model="curQuestion.grace"
            placeholder="请输入分值"
            type="number"
            style="width: 100px"
          ></el-input>
        </li>

        <li v-if="curQuestion.type === 'choose'">
          限制可选答案个数:
          <el-input
            v-model="curQuestion.answerSum"
            type="number"
            :min="0"
            :max="
              curQuestion.answer.length === 0
                ? curQuestion.answerList.length
                : curQuestion.answer.length
            "
          />
        </li>
        <li v-for="(item, index) in curQuestion.answer" :key="item">
          <div
            v-if="
              (curQuestion.type === 'choose' &&
                index !== curQuestion.answer.length - 1) ||
              curQuestion.type !== 'choose'
            "
          >
            {{
              curQuestion.type === "choose"
                ? `答对${index + 1}个选项分数：`
                : ""
            }}
            {{ curQuestion.type === "fill" ? `第${index + 1}空得分` : "" }}
            <el-input
              v-if="
                curQuestion.type === 'fill' || curQuestion.type === 'choose'
              "
              v-model="curQuestion.graceMapAnswer[index]"
              type="number"
              style="width: 100px"
            ></el-input>
          </div>
        </li>
        <li>
          序号:
          <el-select style="width: 100px">
            <el-option
              v-for="(item, index) in questionList"
              :key="item"
              :value="index"
            >
              {{ index + 1 }}
            </el-option>
          </el-select>
        </li>
      </ul>
      <el-button @click="handleDelete" type="danger">删除</el-button>
      <el-button
        @click="handleSave"
        :disabled="
          checkAnswerList ||
          checkAnswerListUnique ||
          checkAnswer ||
          !curQuestion.content
        "
        >保存</el-button
      >
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
    handleSave() {
      debugger;
      //选择题调整答案顺序
      if (this.curQuestion.type === "choose") {
        let _answer = this.curQuestion.answerList.filter(
          (item) => item && this.curQuestion.answer.indexOf(item) !== -1
        );
        this.curQuestion.answer = _answer;
      }

      this.questionList[this.curIndex] = this.curQuestion;
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
