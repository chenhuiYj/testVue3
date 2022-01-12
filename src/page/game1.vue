
<template>
  <div>
    <table>
      <tr>
        <td>序号</td>
        <th>人名</th>
        <th>胜</th>
        <th>负</th>
        <th>积分</th>
      </tr>
      <tr v-for="(item, index) in gameUser" :key="item.name">
        <td>{{ index + 1 }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.win }}</td>
        <td>{{ item.lost }}</td>
        <td>{{ item.grace }}</td>
      </tr>
    </table>

    <table>
      <tr>
        <td>序号</td>
        <th>P1</th>
        <th>P2</th>
        <th>胜利者</th>
      </tr>
      <tr v-for="(item, index) in gameList" :key="item.name">
        <td>{{ index + 1 }}</td>
        <td>{{ item.name.split(" VS ")[0] }}</td>
        <td>{{ item.name.split(" VS ")[1] }}</td>
        <td>{{ item.win }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "tableTest",
  data() {
    return {
      count: 10,
      dcount: 9,
      graceRule: [10, 6, 3, 1],
      grace: {},
      gameList: [
        {
          name: "9 VS 15",
          win: "",
        },
        {
          name: "7 VS 0",
          win: "",
        },
        {
          name: "7 VS 12",
          win: "",
        },
        {
          name: "1 VS 30",
          win: "",
        },
        {
          name: "30 VS 4",
          win: "",
        },
        {
          name: "0 VS 1",
          win: "",
        },
        {
          name: "0 VS 15",
          win: "",
        },
        {
          name: "15 VS 9",
          win: "",
        },
        {
          name: "3 VS 30",
          win: "",
        },
        {
          name: "15 VS 4",
          win: "",
        },
        {
          name: "10 VS 30",
          win: "",
        },
        {
          name: "30 VS 9",
          win: "",
        },
        {
          name: "1 VS 9",
          win: "",
        },
        {
          name: "1 VS 0",
          win: "",
        },
        {
          name: "15 VS 0",
          win: "",
        },
        {
          name: "2 VS 3",
          win: "",
        },
        {
          name: "2 VS 0",
          win: "",
        },
        {
          name: "2 VS 30",
          win: "",
        },
        {
          name: "12 VS 3",
          win: "",
        },
        {
          name: "10 VS 9",
          win: "",
        },
        {
          name: "15 VS 2",
          win: "",
        },
        {
          name: "0 VS 4",
          win: "",
        },
        {
          name: "2 VS 15",
          win: "",
        },
        {
          name: "0 VS 2",
          win: "",
        },
        {
          name: "9 VS 2",
          win: "",
        },
        {
          name: "30 VS 1",
          win: "",
        },
        {
          name: "10 VS 1",
          win: "",
        },
        {
          name: "15 VS 10",
          win: "",
        },
        {
          name: "2 VS 9",
          win: "",
        },
        {
          name: "15 VS 30",
          win: "",
        },
        {
          name: "1 VS 15",
          win: "",
        },
        {
          name: "9 VS 4",
          win: "",
        },
        {
          name: "10 VS 4",
          win: "",
        },
        {
          name: "12 VS 1",
          win: "",
        },
        {
          name: "0 VS 7",
          win: "",
        },
        {
          name: "12 VS 7",
          win: "",
        },
        {
          name: "0 VS 30",
          win: "",
        },
        {
          name: "7 VS 15",
          win: "",
        },
        {
          name: "4 VS 0",
          win: "",
        },
        {
          name: "10 VS 3",
          win: "",
        },
        {
          name: "4 VS 30",
          win: "",
        },
        {
          name: "10 VS 2",
          win: "",
        },
        {
          name: "1 VS 10",
          win: "",
        },
        {
          name: "0 VS 9",
          win: "",
        },
        {
          name: "30 VS 7",
          win: "",
        },
        {
          name: "4 VS 9",
          win: "",
        },
        {
          name: "1 VS 2",
          win: "",
        },
        {
          name: "1 VS 12",
          win: "",
        },
        {
          name: "12 VS 10",
          win: "",
        },
        {
          name: "9 VS 7",
          win: "",
        },
        {
          name: "3 VS 10",
          win: "",
        },
        {
          name: "2 VS 1",
          win: "",
        },
        {
          name: "30 VS 12",
          win: "",
        },
        {
          name: "9 VS 10",
          win: "",
        },
        {
          name: "12 VS 15",
          win: "",
        },
        {
          name: "10 VS 7",
          win: "",
        },
        {
          name: "7 VS 1",
          win: "",
        },
        {
          name: "7 VS 10",
          win: "",
        },
        {
          name: "4 VS 1",
          win: "",
        },
        {
          name: "7 VS 2",
          win: "",
        },
        {
          name: "1 VS 4",
          win: "",
        },
        {
          name: "7 VS 9",
          win: "",
        },
        {
          name: "2 VS 10",
          win: "",
        },
        {
          name: "3 VS 15",
          win: "",
        },
        {
          name: "7 VS 4",
          win: "",
        },
        {
          name: "0 VS 12",
          win: "",
        },
        {
          name: "9 VS 1",
          win: "",
        },
        {
          name: "4 VS 15",
          win: "",
        },
        {
          name: "4 VS 2",
          win: "",
        },
        {
          name: "9 VS 30",
          win: "",
        },
        {
          name: "9 VS 0",
          win: "",
        },
        {
          name: "4 VS 10",
          win: "",
        },
        {
          name: "0 VS 3",
          win: "",
        },
        {
          name: "10 VS 0",
          win: "",
        },
        {
          name: "3 VS 1",
          win: "",
        },
        {
          name: "3 VS 9",
          win: "",
        },
        {
          name: "15 VS 12",
          win: "",
        },
        {
          name: "1 VS 3",
          win: "",
        },
        {
          name: "7 VS 3",
          win: "",
        },
        {
          name: "7 VS 30",
          win: "",
        },
        {
          name: "2 VS 4",
          win: "",
        },
        {
          name: "15 VS 7",
          win: "",
        },
        {
          name: "1 VS 7",
          win: "",
        },
        {
          name: "3 VS 12",
          win: "",
        },
        {
          name: "15 VS 3",
          win: "",
        },
        {
          name: "30 VS 0",
          win: "",
        },
        {
          name: "9 VS 12",
          win: "",
        },
        {
          name: "4 VS 12",
          win: "",
        },
        {
          name: "12 VS 2",
          win: "",
        },
        {
          name: "4 VS 7",
          win: "",
        },
        {
          name: "3 VS 7",
          win: "",
        },
        {
          name: "3 VS 0",
          win: "",
        },
        {
          name: "10 VS 15",
          win: "",
        },
        {
          name: "12 VS 9",
          win: "",
        },
        {
          name: "12 VS 0",
          win: "",
        },
        {
          name: "9 VS 3",
          win: "",
        },
        {
          name: "4 VS 3",
          win: "",
        },
        {
          name: "30 VS 3",
          win: "",
        },
        {
          name: "3 VS 4",
          win: "",
        },
        {
          name: "0 VS 10",
          win: "",
        },
        {
          name: "2 VS 7",
          win: "",
        },
        {
          name: "2 VS 12",
          win: "",
        },
        {
          name: "30 VS 10",
          win: "",
        },
        {
          name: "12 VS 30",
          win: "",
        },
        {
          name: "30 VS 2",
          win: "",
        },
        {
          name: "30 VS 15",
          win: "",
        },
        {
          name: "3 VS 2",
          win: "",
        },
        {
          name: "10 VS 12",
          win: "",
        },
        {
          name: "15 VS 1",
          win: "",
        },
        {
          name: "12 VS 4",
          win: "",
        },
      ],
      gameUser: [
        {
          name: "0",
          win: 0,
          lost: 0,
          grace: 0,
        },
        {
          name: "1",
          win: 0,
          lost: 0,
          grace: 0,
        },
        {
          name: "2",
          win: 0,
          lost: 0,
          grace: 0,
        },
        {
          name: "7",
          win: 0,
          lost: 0,
          grace: 0,
        },
        {
          name: "9",
          win: 0,
          lost: 0,
          grace: 0,
        },
        {
          name: "15",
          win: 0,
          lost: 0,
          grace: 0,
        },
        {
          name: "10",
          win: 0,
          lost: 0,
          grace: 0,
        },
        {
          name: "12",
          win: 0,
          lost: 0,
          grace: 0,
        },
        {
          name: "3",
          win: 0,
          lost: 0,
          grace: 0,
        },
        {
          name: "4",
          win: 0,
          lost: 0,
          grace: 0,
        },
        {
          name: "30",
          win: 0,
          lost: 0,
          grace: 0,
        },
      ],
    };
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
