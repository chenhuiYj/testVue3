
<template>
  <div class="sourceData-info main-box">
    <div class="sourceData-box">
      <div class="sourceData-title">
        <el-input
          v-model="sourceData.content"
          placeholder="请输入题目内容"
          type="textarea"
        />
      </div>
      <div class="answer-list">
        <ul>
          <li v-for="(answer, index) in sourceData.answerList" :key="index">
            <el-input
              v-model="sourceData.answerList[index]"
              placeholder="请输入选项内容"
            >
              <template #prepend
                ><el-button
                  @click="handleSelectAnswer(answer)"
                  :class="`input-button ' 
                      ${
                        answer && sourceData.answer.indexOf(answer) !== -1
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
              v-if="sourceData.answerList.length > 2"
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
    </div>
  </div>
  <div class="button-other main-box">
    <ul>
      <li>
        总分值:
        <el-input
          v-model="sourceData.grace"
          placeholder="请输入分值"
          type="number"
          style="width: 100px"
        ></el-input>
      </li>

      <li>
        限制可选答案个数:
        <el-input
          v-model="sourceData.answerSum"
          type="number"
          :min="0"
          :max="
            sourceData.answer.length === 0
              ? sourceData.answerList.length
              : sourceData.answer.length
          "
        />
      </li>
      <li v-for="(item, index) in sourceData.answer" :key="item">
        <div v-if="index !== sourceData.answer.length - 1">
          {{ `答对${index + 1}个选项分数：` }}
          <el-input
            v-model="sourceData.graceMapAnswer[index]"
            type="number"
            style="width: 100px"
          ></el-input>
        </div>
      </li>
    </ul>
    <el-button @click="handleDelete" type="danger">删除</el-button>
    <el-button
      @click="handleSave"
      :disabled="
        checkAnswerList || checkAnswerListUnique || !sourceData.content
      "
      >保存</el-button
    >
  </div>
</template>
<script setup>
import { Delete } from "@element-plus/icons-vue";
import { reactive, computed, watch, ref } from "vue";
const props = defineProps(["sourceData"]);
const numberMap = reactive([
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
]);
const emits = defineEmits(["save", "delete"]);
debugger;
let sourceData = ref(props.sourceData);

watch(
  () => props.sourceData,
  (val) => {
    debugger;
    sourceData.value = val;
    console.log(props.sourceData, sourceData);
  },
  { immediate: true, deep: true }
);

const checkAnswerList = computed(() =>
  sourceData.value.answerList.some((item) => !item.trim())
);

const checkAnswer = computed(() => {
  if (checkAnswerList) {
    return false;
  }
  return sourceData.value.answer.length === 0;
});
const checkAnswerListUnique = computed(() => {
  if (checkAnswerList) {
    return false;
  }
  return (
    [...new Set(sourceData.value.answerList)].length !==
    sourceData.value.answerList.length
  );
});
const getAnswerListError = computed(() => {
  if (checkAnswerListUnique) {
    return "选项有重复内容";
  }
  return false;
});

const hanldleDeleteAnswer = (index) => {
  sourceData.value.answerList.splice(index, 1);
};
const hanldeAddAnswer = () => {
  sourceData.value.answerList.push("");
};
const handleDelete = () => {
  emits("delete");
};
const handleSave = () => {
  debugger;
  //选择题调整答案顺序
  let _answer = sourceData.value.answerList.filter(
    (item) => item && sourceData.value.answer.indexOf(item) !== -1
  );
  sourceData.value.answer = _answer;
  emits("save", sourceData.value);
  console.log(props.sourceData, sourceData.value);
};
const handleSelectAnswer = (answer) => {
  let _index = sourceData.value.answer.indexOf(answer);
  if (_index === -1) {
    sourceData.value.answer.push(answer);
  } else {
    sourceData.value.answer.splice(_index, 1);
    if (sourceData.value.answerSum > sourceData.value.answer.length) {
      sourceData.value.answerSum = sourceData.value.answer.length;
    }
  }
};
</script>

<script>
// export default {
//   name: "ChooseQuestion",
//   props: ["sourceData"],
//   emits: ["save", "dalete"],
//   data() {
//     return {
//       numberMap: [
//         "A",
//         "B",
//         "C",
//         "D",
//         "E",
//         "F",
//         "G",
//         "H",
//         "I",
//         "J",
//         "K",
//         "L",
//         "M",
//         "N",
//         "O",
//         "P",
//         "Q",
//         "R",
//         "S",
//         "T",
//         "U",
//         "V",
//         "W",
//         "X",
//         "Y",
//         "Z",
//       ],
//     };
//   },
//   computed: {
//     checkAnswerList() {
//       return this.sourceData.answerList.some((item) => !item.trim());
//     },
//     checkAnswer() {
//       if (this.checkAnswerList) {
//         return false;
//       }
//       return this.sourceData.answer.length === 0;
//     },
//     checkAnswerListUnique() {
//       if (this.checkAnswerList) {
//         return false;
//       }
//       return (
//         [...new Set(this.sourceData.answerList)].length !==
//         this.sourceData.answerList.length
//       );
//     },
//     getAnswerListError() {
//       if (this.checkAnswerListUnique) {
//         return "选项有重复内容";
//       }
//       return false;
//     },
//   },
//   methods: {
//     hanldleDeleteAnswer(index) {
//       this.sourceData.answerList.splice(index, 1);
//     },
//     hanldeAddAnswer() {
//       this.sourceData.answerList.push("");
//     },
//     handleDelete() {
//       this.$emit("delete");
//     },
//     handleSave() {
//       debugger;
//       //选择题调整答案顺序
//       let _answer = this.sourceData.answerList.filter(
//         (item) => item && this.sourceData.answer.indexOf(item) !== -1
//       );
//       this.sourceData.answer = _answer;
//       this.$emit("save", this.sourceData);
//     },
//     handleSelectAnswer(answer) {
//       let _index = this.sourceData.answer.indexOf(answer);
//       if (_index === -1) {
//         this.sourceData.answer.push(answer);
//       } else {
//         this.sourceData.answer.splice(_index, 1);
//         if (this.sourceData.answerSum > this.sourceData.answer.length) {
//           this.sourceData.answerSum = this.sourceData.answer.length;
//         }
//       }
//     },
//   },
// };
</script>

<style scoped lang="scss">
.main-box {
  border: 1px solid #333;
  padding: 10px;
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
.sourceData-info {
  width: 800px;
  margin: 0 20px;
}
.sourceData-box {
  margin-bottom: 20px;
}
.answer-item {
  margin-right: 10px;
}
.error-msg {
  color: #f00;
}
</style>
