
<template>
  <div>
    <table></table>

    <table></table>
  </div>
</template>

<script>
export default {
  name: "tableTest",
  data() {
    return {};
  },
  beforeMount() {},
};
</script>

<style scoped>
div {
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
}
table {
  border-collapse: collapse;
}
.is-next {
  background: #f9f5e6;
}
.is-grace {
  background: #f2e1a4;
}
.is-grace.is-top {
  background: #ef9999;
  color: #fff;
}
td,
th {
  line-height: 40px;
  border: 1px solid #ccc;
  padding: 0 10px;
}
</style>
