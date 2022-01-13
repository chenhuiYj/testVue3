
<template>
  <div class="content">
    <div>
      <p>剩余比赛：{{ totalGame.length }}</p>
      <p>总分：{{ total }}</p>
      <table>
        <tr>
          <td>序号</td>
          <th>人名</th>
          <th>胜</th>
          <th>负</th>
          <th>积分</th>
          <th>占比</th>
          <th>金额</th>
        </tr>
        <tr v-for="(item, index) in gameUser" :key="item.name">
          <td>{{ index + 1 }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.win }}</td>
          <td>{{ item.lost }}</td>
          <td>{{ item.grace }}</td>
          <td>
            {{
              +(item.grace / total).toFixed(4).split(".")[1] / 100 + "%" || "--"
            }}
          </td>
          <td>{{ (item.grace / total).toFixed(4) * 60000 || "--" }}</td>
        </tr>
      </table>
    </div>

    <table>
      <tr>
        <td>序号</td>
        <th>P1</th>
        <th>P2</th>
        <th>比分</th>
      </tr>
      <tr v-for="(item, index) in gameList" :key="item.name">
        <td>{{ index + 1 }}</td>
        <td>{{ item.name.split(" VS ")[0] }}</td>
        <td>{{ item.name.split(" VS ")[1] }}</td>
        <td>{{ item.result || "--" }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "tableTest",
  data() {
    return {
      grace: {},
      gameList: [
        {
          name: "9 VS 30",
          result: "2-3",
        },
        {
          name: "3 VS 7",
          result: "3-2",
        },
        {
          name: "0 VS 2",
          result: "3-1",
        },
        {
          name: "7 VS 30",
          result: "3-1",
        },
        {
          name: "2 VS 12",
          result: "3-1",
        },
        {
          name: "1 VS 0",
          result: "3-2",
        },
        {
          name: "7 VS 9",
          result: "3-1",
        },
        {
          name: "3 VS 12",
          result: "3-2",
        },
        {
          name: "30 VS 9",
          result: "3-1",
        },
        {
          name: "15 VS 12",
          result: "3-2",
        },
        {
          name: "0 VS 1",
          result: "3-2",
        },
        {
          name: "15 VS 9",
          result: "1-3",
        },
        {
          name: "30 VS 15",
          result: "3-1",
        },
        {
          name: "9 VS 2",
          result: "1-3",
        },
        {
          name: "9 VS 7",
          result: "3-2",
        },
        {
          name: "15 VS 30",
          result: "1-3",
        },
        {
          name: "15 VS 1",
          result: "0-3",
        },
        {
          name: "15 VS 7",
          result: "3-2",
        },
        {
          name: "9 VS 1",
          result: "0-3",
        },
        {
          name: "3 VS 2",
          result: "3-1",
        },
        {
          name: "0 VS 15",
          result: "3-0",
        },
        {
          name: "7 VS 15",
          result: "3-2",
        },
        {
          name: "0 VS 10",
          result: "3-1",
        },
        {
          name: "12 VS 10",
          result: "3-2",
        },
        {
          name: "9 VS 15",
          result: "0-3",
        },
        {
          name: "3 VS 0",
          result: "2-3",
        },
        {
          name: "10 VS 3",
          result: "2-3",
        },
        {
          name: "10 VS 0",
          result: "1-3",
        },
        {
          name: "2 VS 9",
          result: "3-2",
        },
        {
          name: "4 VS 9",
          result: "3-2",
        },
        {
          name: "7 VS 10",
          result: "3-2",
        },
        {
          name: "4 VS 1",
          result: "1-3",
        },
        {
          name: "4 VS 2",
          result: "3-2",
        },
        {
          name: "2 VS 1",
          result: "1-3",
        },
        {
          name: "1 VS 30",
          result: "3-2",
        },
        {
          name: "15 VS 0",
          result: "1-3",
        },
        {
          name: "12 VS 4",
          result: "3-2",
        },
        {
          name: "2 VS 4",
          result: "2-3",
        },
        {
          name: "7 VS 2",
          result: "2-3",
        },
        {
          name: "7 VS 0",
          result: "0-3",
        },
        {
          name: "0 VS 9",
          result: "3-0",
        },
        {
          name: "12 VS 15",
          result: "3-1",
        },
        {
          name: "10 VS 4",
          result: "3-1",
        },
        {
          name: "12 VS 3",
          result: "1-3",
        },
        {
          name: "7 VS 3",
          result: "1-3",
        },
        {
          name: "30 VS 12",
          result: "3-1",
        },
        {
          name: "1 VS 4",
          result: "3-1",
        },
        {
          name: "2 VS 3",
          result: "3-1",
        },
        {
          name: "2 VS 15",
          result: "3-2",
        },
        {
          name: "7 VS 4",
          result: "1-3",
        },
        {
          name: "0 VS 7",
          result: "3-2",
        },
        {
          name: "4 VS 30",
          result: "3-1",
        },
        {
          name: "1 VS 10",
          result: "3-2",
        },
        {
          name: "10 VS 30",
          result: "3-2",
        },
        {
          name: "1 VS 3",
          result: "3-1",
        },
        {
          name: "30 VS 7",
          result: "2-3",
        },
        {
          name: "0 VS 30",
          result: "3-0",
        },
        {
          name: "12 VS 2",
          result: "2-3",
        },
        {
          name: "9 VS 3",
          result: "3-1",
        },
        {
          name: "30 VS 0",
          result: "2-3",
        },
        {
          name: "2 VS 0",
          result: "2-3",
        },
        {
          name: "3 VS 9",
          result: "3-1",
        },
        {
          name: "15 VS 4",
          result: "3-1",
        },
        {
          name: "0 VS 3",
          result: "2-3",
        },
        {
          name: "3 VS 10",
          result: "2-3",
        },
        {
          name: "10 VS 7",
          result: "3-1",
        },
        {
          name: "30 VS 3",
          result: "1-3",
        },
        {
          name: "30 VS 1",
          result: "0-3",
        },
        {
          name: "7 VS 12",
          result: "2-3",
        },
        {
          name: "9 VS 4",
          result: "3-1",
        },
        {
          name: "1 VS 2",
          result: "2-3",
        },
        {
          name: "30 VS 10",
          result: "3-2",
        },
        {
          name: "1 VS 12",
          result: "3-1",
        },
        {
          name: "0 VS 4",
          result: "3-1",
        },
        {
          name: "12 VS 7",
          result: "1-3",
        },
        {
          name: "0 VS 12",
          result: "3-1",
        },
        {
          name: "12 VS 30",
          result: "3-1",
        },
        {
          name: "15 VS 2",
          result: "3-2",
        },
        {
          name: "9 VS 0",
          result: "1-3",
        },
        {
          name: "1 VS 7",
          result: "3-0",
        },
        {
          name: "15 VS 10",
          result: "3-1",
        },
        {
          name: "9 VS 12",
          result: "3-2",
        },
        {
          name: "4 VS 15",
          result: "2-3",
        },
        {
          name: "10 VS 2",
          result: "0-3",
        },
        {
          name: "1 VS 15",
          result: "3-1",
        },
        {
          name: "10 VS 1",
          result: "1-3",
        },
        {
          name: "9 VS 10",
          result: "3-2",
        },
        {
          name: "4 VS 7",
          result: "3-1",
        },
        {
          name: "3 VS 4",
          result: "3-2",
        },
        {
          name: "30 VS 4",
          result: "2-3",
        },
        {
          name: "4 VS 3",
          result: "3-1",
        },
        {
          name: "15 VS 3",
          result: "1-3",
        },
        {
          name: "10 VS 12",
          result: "3-2",
        },
        {
          name: "4 VS 12",
          result: "3-2",
        },
        {
          name: "3 VS 15",
          result: "2-3",
        },
        {
          name: "12 VS 1",
          result: "2-3",
        },
        {
          name: "2 VS 10",
          result: "3-2",
        },
        {
          name: "3 VS 1",
          result: "2-3",
        },
        {
          name: "3 VS 30",
          result: "3-1",
        },
        {
          name: "12 VS 0",
          result: "2-3",
        },
        {
          name: "4 VS 0",
          result: "1-3",
        },
        {
          name: "30 VS 2",
          result: "2-3",
        },
        {
          name: "7 VS 1",
          result: "1-3",
        },
        {
          name: "10 VS 9",
          result: "3-1",
        },
        {
          name: "10 VS 15",
          result: "3-2",
        },
        {
          name: "12 VS 9",
          result: "2-3",
        },
        {
          name: "1 VS 9",
          result: "3-1",
        },
        {
          name: "4 VS 10",
          result: "3-1",
        },
        {
          name: "2 VS 30",
          result: "3-1",
        },
        {
          name: "2 VS 7",
          result: "2-3",
        },
      ],
      gameUser: [
        {
          name: "0",
          result: 0,
          lost: 0,
          grace: 0,
        },
        {
          name: "1",
          result: 0,
          lost: 0,
          grace: 0,
        },
        {
          name: "2",
          result: 0,
          lost: 0,
          grace: 0,
        },
        {
          name: "7",
          result: 0,
          lost: 0,
          grace: 0,
        },
        {
          name: "9",
          result: 0,
          lost: 0,
          grace: 0,
        },
        {
          name: "15",
          result: 0,
          lost: 0,
          grace: 0,
        },
        {
          name: "10",
          result: 0,
          lost: 0,
          grace: 0,
        },
        {
          name: "12",
          result: 0,
          lost: 0,
          grace: 0,
        },
        {
          name: "3",
          result: 0,
          lost: 0,
          grace: 0,
        },
        {
          name: "4",
          result: 0,
          lost: 0,
          grace: 0,
        },
        {
          name: "30",
          result: 0,
          lost: 0,
          grace: 0,
        },
      ],
      userWin: {
        0: 0,
        1: 0,
        2: 0,
        7: 0,
        9: 0,
        15: 0,
        10: 0,
        12: 0,
        3: 0,
        4: 0,
        30: 0,
      },
      userLost: {
        0: 0,
        1: 0,
        2: 0,
        7: 0,
        9: 0,
        15: 0,
        10: 0,
        12: 0,
        3: 0,
        4: 0,
        30: 0,
      },
      useGrace: {
        0: 0,
        1: 0,
        2: 0,
        7: 0,
        9: 0,
        15: 0,
        10: 0,
        12: 0,
        3: 0,
        4: 0,
        30: 0,
      },
    };
  },
  computed: {
    total() {
      let _result = 0;
      for (let key in this.useGrace) {
        _result += this.useGrace[key];
      }

      return _result || "--";
    },
    totalGame() {
      return this.gameList.filter((item) => !item.result);
    },
  },
  beforeMount() {
    for (let item of this.gameList) {
      if (item.result) {
        let users = item.name.split(" VS ");
        let result = item.result.split("-");
        this.useGrace[users[0]] += +result[0];
        this.useGrace[users[1]] += +result[1];
        if (item.result[0] === "3") {
          this.userWin[users[0]]++;
          this.userLost[users[1]]++;
        } else {
          this.userWin[users[1]]++;
          this.userLost[users[0]]++;
        }
      }
    }
    this.gameUser = this.gameUser
      .map((item) => ({
        name: item.name,
        win: this.userWin[item.name],
        lost: this.userLost[item.name],
        grace: this.useGrace[item.name],
      }))
      .sort((i1, i2) => i2.grace - i1.grace)
      .sort((i1, i2) => i2.grace - i1.grace);
  },
};
</script>

<style scoped>
div.content {
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
