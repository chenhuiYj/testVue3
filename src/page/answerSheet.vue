
<template>
  <div class="mian">
    <div class="button-number main-box">
      <div class="number-box">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
      </div>
      <div class="button-box">
        <button>添加选择题</button>
        <button>添加填空题</button>
        <button>添加简答题</button>
        <button>添加问答题</button>
      </div>
    </div>
    <div class="question-info main-box">
      <div class="question-title">1.下面哪个是正确答案</div>
      <div class="answer-list">
        <ul>
          <li>A:1</li>
          <li>B:2</li>
          <li>C:3</li>
          <li>D:4</li>
        </ul>
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
    return {};
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
</style>
