
<template>
  <div>
    <table>
      <tr>
        <th></th>
        <th>冠军</th>
        <th>亚军</th>
        <th>季军</th>
        <th>殿军</th>
      </tr>
      <tr v-for="(item, index) in gameDetail" :key="item">
        <td>第{{ index + 1 }}届</td>
        <td>{{ item[0] }}</td>
        <td>{{ item[1] }}</td>
        <td>{{ item[2] }}</td>
        <td>{{ item[3] }}</td>
      </tr>
    </table>

    <table>
      <tr>
        <th>排名</th>
        <th>名称</th>
        <th>参加次数</th>
        <th>晋级次数</th>
        <th>晋级概率</th>
        <th>死亡小组次数</th>
        <th>死亡小组概率</th>
        <th>死亡小组晋级次数</th>
        <th>死亡小组晋级概率</th>
        <th>积分</th>
      </tr>
      <tr
        v-for="(item, index) in gameData"
        :key="item.name"
        :class="{
          'is-grace': item.grace,
          'is-top': index <= 7,
          'is-next': item.next > 0 || index <= 39,
        }"
      >
        <td>{{ index + 1 }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.join }}</td>
        <td>{{ item.next }}</td>
        <td>{{ ((item.next / item.join) * 100).toFixed(2) }}%</td>
        <td>{{ item.deathCount }}</td>
        <td>{{ ((item.deathCount / item.join) * 100).toFixed(2) }}%</td>
        <td>{{ item.deathNext }}</td>
        <td>
          {{ ((item.deathNext / item.deathCount) * 100 || 0).toFixed(2) }}%
        </td>
        <th>{{ item.grace }}</th>
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
      gameDetail: [
        ["0", "1", "5", "2"],
        ["0", "1", "6", "11"],
        ["1", "7", "0", "5"],
        ["3", "9", "0", "6"],
        ["1", "0", "12", "13"],
        ["5", "10", "7", "13"],
        ["2", "4", "9", "10"],
        ["1", "0", "3", "2"],
        ["0", "1", "7", "12"],
        ["4", "2", "3", "14"],
        ["8", "0", "1", "15"],
        ["6", "11", "1", "0"],
      ],
      gameData: [
        {
          name: "0",
          join: 12,
          next: 12,
          deathCount: 1,
          deathNext: 1,
        },
        {
          name: "1",
          join: 12,
          next: 12,
          deathCount: 1,
          deathNext: 1,
        },
        {
          name: "22",
          join: 12,
          next: 3,
          deathCount: 8,
          deathNext: 1,
        },
        {
          name: "11",
          join: 12,
          next: 6,
          deathCount: 6,
          deathNext: 3,
        },
        {
          name: "19",
          join: 12,
          next: 4,
          deathCount: 6,
          deathNext: 1,
        },
        {
          name: "12",
          join: 12,
          next: 9,
          deathCount: 5,
          deathNext: 4,
        },
        {
          name: "8",
          join: 12,
          next: 8,
          deathCount: 5,
          deathNext: 3,
        },
        {
          name: "2",
          join: 12,
          next: 8,
          deathCount: 5,
          deathNext: 3,
        },
        {
          name: "4",
          join: 12,
          next: 9,
          deathCount: 4,
          deathNext: 3,
        },
        {
          name: "16",
          join: 12,
          next: 5,
          deathCount: 4,
          deathNext: 2,
        },
        {
          name: "9",
          join: 12,
          next: 9,
          deathCount: 4,
          deathNext: 1,
        },
        {
          name: "14",
          join: 11,
          next: 4,
          deathCount: 4,
          deathNext: 1,
        },
        {
          name: "3",
          join: 12,
          next: 10,
          deathCount: 3,
          deathNext: 2,
        },
        {
          name: "7",
          join: 12,
          next: 10,
          deathCount: 3,
          deathNext: 1,
        },
        {
          name: "10",
          join: 12,
          next: 9,
          deathCount: 3,
          deathNext: 1,
        },
        {
          name: "20",
          join: 12,
          next: 4,
          deathCount: 3,
          deathNext: 1,
        },
        {
          name: "18",
          join: 9,
          next: 5,
          deathCount: 3,
          deathNext: 1,
        },
        {
          name: "5",
          join: 12,
          next: 8,
          deathCount: 2,
          deathNext: 1,
        },
        {
          name: "23",
          join: 12,
          next: 3,
          deathCount: 2,
          deathNext: 1,
        },
        {
          name: "13",
          join: 9,
          next: 4,
          deathCount: 1,
          deathNext: 1,
        },
        {
          name: "6",
          join: 12,
          next: 8,
          deathCount: 1,
          deathNext: 0,
        },
        {
          name: "21",
          join: 10,
          next: 4,
          deathCount: 1,
          deathNext: 0,
        },
        {
          name: "25",
          join: 9,
          next: 3,
          deathCount: 1,
          deathNext: 0,
        },
        {
          name: "24",
          join: 11,
          next: 3,
          deathCount: 1,
          deathNext: 0,
        },
        {
          name: "26",
          join: 11,
          next: 2,
          deathCount: 1,
          deathNext: 0,
        },
        {
          name: "39",
          join: 2,
          next: 1,
          deathCount: 1,
          deathNext: 0,
        },
        {
          name: "34",
          join: 7,
          next: 1,
          deathCount: 1,
          deathNext: 0,
        },
        {
          name: "33",
          join: 9,
          next: 1,
          deathCount: 1,
          deathNext: 0,
        },
        {
          name: "47",
          join: 4,
          next: 0,
          deathCount: 1,
          deathNext: 0,
        },
        {
          name: "44",
          join: 5,
          next: 0,
          deathCount: 1,
          deathNext: 0,
        },
        {
          name: "40",
          join: 11,
          next: 0,
          deathCount: 1,
          deathNext: 0,
        },
        {
          name: "35",
          join: 7,
          next: 1,
          deathCount: 0,
          deathNext: 0,
        },
        {
          name: "31",
          join: 12,
          next: 1,
          deathCount: 0,
          deathNext: 0,
        },
        {
          name: "41",
          join: 9,
          next: 0,
          deathCount: 0,
          deathNext: 0,
        },
        {
          name: "17",
          join: 10,
          next: 5,
          deathCount: 0,
          deathNext: 0,
        },
        {
          name: "27",
          join: 10,
          next: 2,
          deathCount: 0,
          deathNext: 0,
        },
        {
          name: "28",
          join: 8,
          next: 2,
          deathCount: 0,
          deathNext: 0,
        },
        {
          name: "36",
          join: 6,
          next: 1,
          deathCount: 0,
          deathNext: 0,
        },
        {
          name: "29",
          join: 8,
          next: 2,
          deathCount: 0,
          deathNext: 0,
        },
        {
          name: "37",
          join: 6,
          next: 1,
          deathCount: 0,
          deathNext: 0,
        },
        {
          name: "15",
          join: 2,
          next: 2,
          deathCount: 0,
          deathNext: 0,
        },
        {
          name: "30",
          join: 2,
          next: 2,
          deathCount: 0,
          deathNext: 0,
        },
        {
          name: "32",
          join: 10,
          next: 1,
          deathCount: 0,
          deathNext: 0,
        },
        {
          name: "45",
          join: 5,
          next: 0,
          deathCount: 0,
          deathNext: 0,
        },
        {
          name: "38",
          join: 4,
          next: 1,
          deathCount: 0,
          deathNext: 0,
        },
        {
          name: "46",
          join: 5,
          next: 0,
          deathCount: 0,
          deathNext: 0,
        },
        {
          name: "48",
          join: 4,
          next: 0,
          deathCount: 0,
          deathNext: 0,
        },
        {
          name: "42",
          join: 8,
          next: 0,
          deathCount: 0,
          deathNext: 0,
        },
        {
          name: "43",
          join: 8,
          next: 0,
          deathCount: 0,
          deathNext: 0,
        },
        {
          name: "49",
          join: 3,
          next: 0,
          deathCount: 0,
          deathNext: 0,
        },
      ],
    };
  },
  beforeMount() {
    let _data = this.grace;
    for (let item of this.gameDetail) {
      for (let i = 0; i < item.length; i++) {
        if (!_data[item[i]]) {
          _data[item[i]] = 0;
        }
        _data[item[i]] += this.graceRule[i];
      }
    }
    this.grace = _data;

    let _list = this.gameData;
    for (let item of _list) {
      item["grace"] = _data[item.name] || 0;
    }
    this.gameData = _list
      .sort((i1, i2) => i2.join - i1.join)
      .sort((i1, i2) => i2.next - i1.next)
      .sort((i1, i2) => i2.grace - i1.grace);

    let _list1 = JSON.parse(JSON.stringify(this.gameData)).slice(8, 16);
    let _list2 = JSON.parse(JSON.stringify(this.gameData)).slice(16, 40);

    _list1.sort(() => Math.random() - 0.5);
    console.log(_list1);

    _list2.sort(() => Math.random() - 0.5);
    console.log(_list2);
  },
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
