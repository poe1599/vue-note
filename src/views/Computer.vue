<template >
  <div>
    <div class="computer">
      <!-- {{inputArray}} -->
      <div class="computer__history">{{msg}}</div>
      <div class="computer__input">{{showNum}}</div>
      <div class="computer__input">{{Intl.NumberFormat().format(showNum)}}</div>
      <!-- <input type="text" class="computer__input" v-model="showNum"> -->
      <div class="computer__btnBlock">
        <div class="computer__btn computer__btn--unable">%</div>
        <div class="computer__btn computer__btn--unable">CE</div>
        <div class="computer__btn" @click="clear">C</div>
        <div class="computer__btn" @click="deletePre">Delete</div>
        <div class="computer__btn computer__btn--unable">1/x</div>
        <div class="computer__btn computer__btn--unable">x^2</div>
        <div class="computer__btn computer__btn--unable">X^0.5</div>
        <div class="computer__btn" @click="setSymbol('/')">÷</div>
        <div class="computer__btn" @click="setNumber(7)">7</div>
        <div class="computer__btn" @click="setNumber(8)">8</div>
        <div class="computer__btn" @click="setNumber(9)">9</div>
        <div class="computer__btn" @click="setSymbol('*')">×</div>
        <div class="computer__btn" @click="setNumber(4)">4</div>
        <div class="computer__btn" @click="setNumber(5)">5</div>
        <div class="computer__btn" @click="setNumber(6)">6</div>
        <div class="computer__btn" @click="setSymbol('-')">-</div>
        <div class="computer__btn" @click="setNumber(1)">1</div>
        <div class="computer__btn" @click="setNumber(2)">2</div>
        <div class="computer__btn" @click="setNumber(3)">3</div>
        <div class="computer__btn" @click="setSymbol('+')">+</div>
        <div class="computer__btn" @click="setSign">±</div>
        <div class="computer__btn" @click="setNumber(0)">0</div>
        <div class="computer__btn" @click="setPoint">.</div>
        <div class="computer__btn" @click="equal">=</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'computer',
  data() {
    return {
      inputArray: [],
      showNum: '0',
      firstNum: '',
      secondNum: '',
      action: '',
      symbol: '',
      msg: '',
    };
  },
  methods: {
    // 輸入數值
    setNumber(item) {
      // 紀錄
      this.inputArray.push(item);
      // 如果上一個是['+', '-', '*', '/', '=']其一
      if (['+', '-', '*', '/', '='].includes(this.inputArray[this.inputArray.length - 2])) {
        this.showNum = `${item}`;
        return;
      }
      // 變更顯示
      this.showNum = (this.showNum !== '0' ? `${this.showNum}${item}` : `${item}`);
    },
    // 輸入符號
    setSymbol(item) {
      // 紀錄
      this.inputArray.push(item);
      // 紀錄符號
      this.action = item;
      switch (item) {
        case '+':
          this.symbol = '+';
          break;
        case '-':
          this.symbol = '-';
          break;
        case '*':
          this.symbol = '×';
          break;
        case '/':
          this.symbol = '÷';
          break;
        default:
      }
      // 設定第一個數
      this.firstNum = this.showNum;
      // 設定訊息
      this.msg = `${this.firstNum} ${this.symbol}`;
    },
    // 輸入'.'
    setPoint() {
      // 紀錄
      this.inputArray.push('.');
      if (['+', '-', '*', '/', '='].includes(this.inputArray[this.inputArray.length - 2])) {
        this.showNum = '0.';
        return;
      }
      this.showNum = `${this.showNum}.`;
    },
    // 輸入正負
    setSign() {
      if (this.showNum !== '0') { this.showNum = `-${this.showNum}`; }
    },
    // 輸入'='
    equal() {
      // 紀錄
      this.inputArray.push('=');

      // 設定第二個數
      this.secondNum = this.showNum;

      // 計算
      this.showNum = `${this.floatOperation(this.firstNum, this.secondNum, this.action)}`;

      // 設定訊息
      this.msg = `${this.firstNum} ${this.symbol} ${this.secondNum} =`;
    },
    // 浮點數運算 action + - / *
    floatOperation(Num1, Num2, action) {
      let p1 = 0;// 小數點位數
      let p2 = 0;
      // console.log(Num1, Num2);
      try {
        p1 = Num1.split('.')[1].length;
      } catch (err) {
        // console.log(err);
      }
      try {
        p2 = Num2.split('.')[1].length;
      } catch (err) {
        // console.log(err);
      }
      // console.log(p1, p2);
      let IntNum1 = parseInt(Num1.replace('.', ''), 10);// 去掉小數點轉成整數
      let IntNum2 = parseInt(Num2.replace('.', ''), 10);
      // console.log(IntNum1, IntNum2);

      if (p1 > p2) { // 乘上小數點的位數 對齊位數
        IntNum2 *= (10 ** (p1 - p2)); //* Math.pow(基數,平方數) Math.pow(10,2)=10^2=100
      }
      if (p2 > p1) {
        IntNum1 *= (10 ** (p2 - p1)); // a ** b = a^b
      }
      // console.log(IntNum1, IntNum2);
      let rtn = 0;
      switch (action) {
        case '+':
          rtn = (IntNum1 + IntNum2) / 10 ** Math.max(p1, p2);// 兩數相加後，除回乘上的位數
          break;

        case '-':
          rtn = (IntNum1 - IntNum2) / 10 ** Math.max(p1, p2);// 兩數相減後，除回乘上的位數
          break;

        case '*':
          rtn = (IntNum1 * IntNum2) / 10 ** (Math.max(p1, p2) * 2);// 兩數相乘後，除回各自乘上的位數
          break;

        case '/':
          rtn = (IntNum1 / IntNum2);// 兩數同乘一數，相除結果不變
          break;
        default:
      }
      return rtn;
    },
    clear() {
      this.inputArray = [];
      this.showNum = '0';
      this.firstNum = '0';
      this.secondNum = '0';
      this.action = '';
      this.symbol = '';
      this.msg = '';
    },
    deletePre() {
      this.showNum = this.showNum.slice(0, this.showNum.length - 1);
    },
  },
};
</script>
<style lang="scss">
.computer {
  width: 60%;
  min-width: 400px;
  margin: 50px auto;
  background: rgb(237, 252, 220);

  &__history {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 40px;
    text-align: right;
    padding: 0 20px
  }

  &__input {
    width: 100%;
    height: 60px;
    text-align: right;
    padding: 0 20px;
    background: transparent;
    border: none;
  }

  &__btnBlock {
    display: flex;
    flex-wrap: wrap;
  }

  &__btn {
    width: 24.5%;
    margin: 1px .25%;
    height: 50px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(210, 252, 163);
  }

  &__btn--unable {
    background: rgb(248, 126, 126);
  }
}

</style>
