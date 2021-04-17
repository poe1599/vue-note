<template >
  <div>
    <div class="computer">
      <div class="computer__history">{{history}}</div>
      <input type="text" class="computer__input" v-model="showNum">
      <div class="computer__btnBlock">
        <div class="computer__btn">%</div>
        <div class="computer__btn">CE</div>
        <div class="computer__btn">C</div>
        <div class="computer__btn">Delete</div>
        <div class="computer__btn">1/x</div>
        <div class="computer__btn">x^2</div>
        <div class="computer__btn">X^0.5</div>
        <div class="computer__btn" @click="setInput('devide')">÷</div>
        <div class="computer__btn" @click="setInput(7)">7</div>
        <div class="computer__btn" @click="setInput(8)">8</div>
        <div class="computer__btn" @click="setInput(9)">9</div>
        <div class="computer__btn" @click="setInput('times')">×</div>
        <div class="computer__btn" @click="setInput(4)">4</div>
        <div class="computer__btn" @click="setInput(5)">5</div>
        <div class="computer__btn" @click="setInput(6)">6</div>
        <div class="computer__btn" @click="setInput('minus')">-</div>
        <div class="computer__btn" @click="setInput(1)">1</div>
        <div class="computer__btn" @click="setInput(2)">2</div>
        <div class="computer__btn" @click="setInput(3)">3</div>
        <div class="computer__btn" @click="setInput('plus')">+</div>
        <div class="computer__btn">±</div>
        <div class="computer__btn" @click="setInput(0)">0</div>
        <div class="computer__btn" @click="setInput('point')">.</div>
        <div class="computer__btn" @click="setInput('equal')">=</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'computer',
  data() {
    return {
      inputArray: [0],
      showNum: '0',
      firstNum: '0',
      secondNum: '0',
      symbol: '',
      method: '',
    };
  },
  methods: {
    setInput(item) {
      this.inputArray.push(item);
    },
    checkInputArray() {

    },
    // setNum() {
    //   this.secondNum = this.firstNum;
    //   this.firstNum = this.showNum;
    // },
    // plus() {
    //   this.showNum = this.firstNum + this.secondNum;
    // },
    // minus() {
    //   this.showNum = this.firstNum - this.secondNum;
    // },
    // times() {
    //   this.showNum = this.firstNum * this.secondNum;
    // },
    // divide() {
    //   this.showNum = this.firstNum / this.secondNum;
    // },
    // equal() {
    //   switch (this.method) {
    //     case 'plus':
    //       this.add();
    //       break;
    //     case 'minus':
    //       this.minus();
    //       break;
    //     case 'times':
    //       this.times();
    //       break;
    //     case 'divide':
    //       this.divide();
    //       break;
    //     default:
    //   }
    // },
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
    width: 100%;
    height: 40px;
    text-align: right;
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
}

</style>
