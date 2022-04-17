
<template>
  <div class="mian">
    <div class="button-number main-box">
      <div class="number-box">
        <button v-for="(item, index) in questionList" :key="item.id">
          {{ index + 1 }}
        </button>
      </div>
      <div class="button-box">
        <button>添加选择题</button>
        <button>添加填空题</button>
        <button>添加问答题</button>
      </div>
    </div>
    <div class="question-info main-box">
      <div
        v-for="(item, index) in questionList"
        :key="item.id"
        class="question-box"
      >
        <div class="question-title">{{ index + 1 }}.{{ item.content }}</div>
        <div class="answer-list" v-if="item.type === 'choose'">
          <ol type="A">
            <li v-for="answer in item.answerList" :key="answer">
              {{ answer }}
            </li>
          </ol>
        </div>
        <div class="answer-list" v-if="item.type === 'fill'">
          <ul type="A">
            <li v-for="grace in item.grace" :key="grace">
              <input />
            </li>
          </ul>
        </div>
        <div class="answer-list" v-if="item.type === 'ask'">
          <textarea />
        </div>
      </div>
    </div>
    <div class="button-other main-box">
      <ul>
        <li>分值: 5分</li>
        <li>正确答案:A</li>
        <li>序号:3</li>
      </ul>
      <button>保存</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AnswerSheet",
  data() {
    return {
      questionList: [
        {
          id: 1,
          content: "这道题该选什么？",
          type: "choose",
          answer: "A",
          answerList: ["选择A", "选择B", "选择C", "选择D"],
          grace: 5,
        },
        {
          id: 2,
          content: "这道题该选什么？",
          type: "choose",
          answer: "A,B",
          answerList: ["选择A", "选择B", "选择C", "选择D"],
          grace: 5,
        },
        {
          id: 3,
          content: "这是一道填空题，首先是___，然后是___",
          type: "fill",
          answer: "A/*/B",
          grace: [2, 3],
        },
        {
          id: 4,
          content: "这是一道简单题",
          type: "fill",
          answer: "A",
          grace: [5],
        },
        {
          id: 5,
          content: "这是一道问答题",
          type: "ask",
          answer: "",
          grace: 15,
        },
      ],
    };
  },
  beforeMount() {},
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
</style>
