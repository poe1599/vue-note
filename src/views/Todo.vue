<template>
  <div class="todo">
    <div class="todo__leftBlock">
      <h1>Note</h1><span class="vueKey"></span>
      <ol class="noteList">
        <li>input可以藉由<span class="vueKey">v-model</span>來動態綁定
          <span class="vueKey">data</span>中的變數
        </li>
        <li>
          <span class="vueKey">v-bind</span>可以動態綁定變數到對應的屬性中, 例如: class、style、key等
        </li>
        <li>
          <span class="vueKey">v-for</span>可以動態綁定<span class="vueKey">data</span>
          中的物件或陣列, 藉此來生成對應數量的元件。<br>
          陣列 <span class="vueKey">v-for="( item, index ) in Array"</span><br>
          物件 <span class="vueKey">v-for="( item, key, index ) in Object"</span></li>
        <li>在dom元素上使用<span class="vueKey">@event="function"</span>
          , 可以直接將<span class="vueKey">methods</span>中的function綁定到對應的事件</li>
        <li>事件綁定可以搭配<span class="vueKey">事件修飾符</span>、<span class="vueKey">按鍵修飾符</span>、
          <span class="vueKey">系統修飾符</span>來精準控制事件的觸發條件
        </li>
        <li>
          <span class="vueKey">v-show</span>可以操控display:none, 與<span class="vueKey">v-if</span>不同
        </li>
        <li>
          <span class="vueKey">v-if</span>則是操控dom元素是否會被渲染, 並且搭配
          <span class="vueKey">v-else</span>或<span class="vueKey">v-else-if</span>使用,
          注意<span class="vueKey">v-else</span>或<span class="vueKey">v-else-if</span>不能單獨使用
        </li>
      </ol>
    </div>
    <div class="todo__rightBlock">
      <div class="todo__inputBlock">
        <label for="" class="todo__label">輸入待辦事項</label><br><br>
        <input type="text" class="todo__input" v-model="todoInput.text"
        @keydown.enter="setNewTodoItem" placeholder="請輸入">
      </div>
      <ul class="todo__list" v-show="todoList.length>0">
        <span class="todo__title">All you need to do ...</span>
        <li class="todo__listItem" :class="{'todo__listItem--finish':item.isFinished}"
        v-for="(item,index) in todoList" :key="index"
        @click="toggleTodoItemFinished(index)">
          {{item.text}}
          <div class="todo__deleteItem" v-show="item.isFinished"
          @click.stop="deleteTodoItem(index)">X</div>
        </li>
        <div class="todo__BtnGroup">
          <div class="todo__finishAllBtn" @click="toggleAllTodoItemFinished">Finish All</div>
          <div class="todo__deleteAllBtn" @click="deleteAllTodoItem">Delete All</div>
        </div>
      </ul>
      <ul class="todo__manual" v-show="todoList.length===0">
        <li>輸入待辦事項後, 按下"Enter鍵"可以生成新待辦的清單</li>
        <li>點擊清單上的事項可以變更為完成狀態</li>
        <li>完成狀態下點擊左方"X"可以刪除待辦事項</li>
        <li>點擊"Finish All"可將全部事項變更為完成</li>
        <li>點擊"Delete All"可將全部事項刪除</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Todo',
  data() {
    return {
      todoInput: { text: '', isFinished: false },
      todoList: [
        // { text: '吃飯', isFinished: false },
        // { text: '睡覺', isFinished: false },
        // { text: '打咚咚', isFinished: true },
      ],
    };
  },
  methods: {
    setNewTodoItem() {
      this.todoList.push(this.todoInput);
      this.todoInput = { text: '', isFinished: false };
    },
    toggleTodoItemFinished(index) {
      this.todoList[index].isFinished = !this.todoList[index].isFinished;
    },
    toggleAllTodoItemFinished() {
      this.todoList.forEach((item, index) => {
        this.todoList[index].isFinished = true;
      });
    },
    deleteTodoItem(index) {
      this.todoList.splice(index, 1);
    },
    deleteAllTodoItem() {
      this.todoList = [];
    },
    setTodoListToLocalStorage() {
      localStorage.setItem('todoList', JSON.stringify(this.todoList));
    },
    getTodoListFromLocalStorage() {
      const data = JSON.parse(localStorage.getItem('todoList'));
      this.todoList = Array.isArray(data) ? data : [];
    },
  },
  mounted() {
    this.getTodoListFromLocalStorage();
  },
  updated() {
    this.setTodoListToLocalStorage();
  },
};
</script>
<style lang="scss" scoped>
.todo {
  display: flex;
  padding: 50px;
  font-size: 16px;
  background: rgb(229, 248, 210);

  &__leftBlock {
    width: 50%;
    padding: 10px 20px;
    // height: 600px;

    h1 {
      font-size: 32px;
      font-weight: bold;
      margin-bottom: 20px;
    }

    .noteList {
      list-style: decimal;
      letter-spacing: .4px;
      line-height: 1.5;

      .vueKey {
        font-weight: bold;
        background: rgb(250, 227, 187);
        color: rgb(255, 72, 0);
        padding: 0 4px;
        border-radius: 4px;
      }

      li {
        margin-bottom: 16px;
        word-wrap: break-word;
      }
    }
  }

  &__rightBlock {
    width: 50%;
    padding: 10px;
  }

  &__inputBlock {
    margin-bottom: 20px;
  }

  // &__label {
  //   margin-bottom: 10px;
  // }

  &__input {
    width: 100%;
    height: 50px;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid royalblue;
  }

  &__input:focus {
    outline: none;
    border: 2px solid royalblue;
  }

  &__list {
    width: 100%;
    padding: 30px 20px;
    background: rgb(245, 233, 124);
  }

  &__title {
    display: inline-block;
    margin-bottom: 15px;
    // font-weight: bold;

  }

  &__listItem {
    border-bottom: 1px solid gray;
    position: relative;
    padding: 0px 40px 5px 40px;
    margin-bottom: 15px;
    // margin-left: 40px;
    cursor: pointer;
  }

  &__listItem--finish {
    color: rgb(164, 170, 170);
    text-decoration: line-through 2px solid;
  }

  &__deleteItem {
    position: absolute;
    top: 0px;
    left: 15px;
    color: red;
    font-weight: 800;
  }

  &__BtnGroup {
    display: flex;
    justify-content: flex-end;
  }

  &__finishAllBtn, &__deleteAllBtn {
    padding: 0 8px;
    cursor: pointer;
    text-decoration: underline 3px solid orange;
  }

  &__manual {
    list-style: square;
    margin: 80px 0;

    li {
      margin-left: 30px;
      margin-bottom: 16px;
    }
  }
}

</style>
