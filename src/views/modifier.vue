<template>
  <div class="content">
    <div class="content__leftBlock">
      <h1 class="noteTitle">事件修飾符</h1>
      <ul class="noteList" style="margin-left:30px;">
        <li>
          <span class="vueKey">.stop</span>調用 event.stopPropagation()
        </li>
        <li>
          <span class="vueKey">.prevent</span>調用 event.preventDefault()
        </li>
        <li>
          <span class="vueKey">.capture</span>加掛事件監聽時使用capture模式
        </li>
        <li>
          <span class="vueKey">.self</span>事件由當前的dom元素被觸發時才呼叫
        </li>
        <li>
          <span class="vueKey">.once</span>事件僅觸發一次
        </li>
        <li>
          <span class="vueKey">.passive</span>
        </li>
        <li>
          可使用多個修飾符, 使用時要注意順序
        </li>
      </ul>
      <h1 class="noteTitle">按鍵修飾符</h1>
      <ul class="noteList" style="margin-left:30px;">
        <li>只能接在按鍵事件後面</li>
        <li>
          可輸入<span class="vueKey">.(keyCode|keyAlias)</span>來使用
        </li>
        <li>
          可藉由別名修飾來使用, 例如:
          <span class="vueKey">.enter</span>、
          <span class="vueKey">.tab</span>、
          <span class="vueKey">.delete</span>、
          <span class="vueKey">.esc</span>、
          <span class="vueKey">.space</span>、
          <span class="vueKey">.up</span>、
          <span class="vueKey">.down</span>、
          <span class="vueKey">.left</span>、
          <span class="vueKey">.right</span>
        </li>
        <li>
          可搭配按鍵修飾符或滑鼠按鍵修飾符使用
        </li>
      </ul>
      <h1 class="noteTitle">系統修飾鍵</h1>
      <ul class="noteList" style="margin-left:30px;">
        <li>
          必須要按下相對應的按鍵才會觸發
        </li>
        <li>
          <span class="vueKey">.ctrl</span>、
          <span class="vueKey">.alt</span>、
          <span class="vueKey">.shift</span>、
          <span class="vueKey">.meta</span>
        </li>
        <li>
          可使搭配事件修飾符使用
        </li>
      </ul>
      <h1 class="noteTitle">滑鼠按鍵修飾符</h1>
      <ul class="noteList" style="margin-left:30px;">
        <li>只能接在滑鼠事件後面</li>
        <li>
          滑鼠必須要按下相對應的按鍵才會觸發
        </li>
        <li>
          <span class="vueKey">.left</span>、
          <span class="vueKey">.right</span>、
          <span class="vueKey">.middle</span>
        </li>
      </ul>
    </div>
    <div class="content__rightBlock noteList">
      點擊藍色方塊觀察不同事件修飾符的差異
      <div class="displayGroup">
        <div class="bigBox" :class="{rotate:bRotate}" @click="changeRotate('bRotate')">
          <div class="middleBox" :class="{rotate:mRotate}" @click="changeRotate('mRotate')">
            <div class="smallBox" :class="{rotate:sRotate}" @click="changeRotate('sRotate')"></div>
          </div>
        </div>
        <ul style="margin-left:30px;">
          <p>不使用任何修飾符</p>
          <li style="background: rgb(190, 243, 146);">bRotate: {{bRotate}}</li>
          <li style="background: rgb(255, 247, 140);">mRotate: {{mRotate}}</li>
          <li style="background: rgb(129, 178, 241);">sRotate: {{sRotate}}</li>
          <li>在冒泡階段被依序執行</li>
        </ul>
      </div>
      <div class="displayGroup">
        <div class="bigBox" :class="{rotate:bRotate}" @click.stop="changeRotate('bRotate')">
          <div class="middleBox" :class="{rotate:mRotate}" @click.stop="changeRotate('mRotate')">
            <div class="smallBox" :class="{rotate:sRotate}"
            @click.stop="changeRotate('sRotate')"></div>
          </div>
        </div>
        <ul style="margin-left:30px;">
          <p>使用<span class="vueKey">.stop</span></p>
          <li style="background: rgb(190, 243, 146);">bRotate: {{bRotate}}</li>
          <li style="background: rgb(255, 247, 140);">mRotate: {{mRotate}}</li>
          <li style="background: rgb(129, 178, 241);">sRotate: {{sRotate}}</li>
          <li>阻止繼續往上冒泡</li>
        </ul>
      </div>
      <div class="displayGroup">
        <div class="bigBox" :class="{rotate:bRotate}" @click.capture="changeRotate('bRotate')">
          <div class="middleBox" :class="{rotate:mRotate}" @click.capture="changeRotate('mRotate')">
            <div class="smallBox" :class="{rotate:sRotate}"
            @click.capture="changeRotate('sRotate')"></div>
          </div>
        </div>
        <ul style="margin-left:30px;">
          <p>使用<span class="vueKey">.capture</span></p>
          <li style="background: rgb(190, 243, 146);">bRotate: {{bRotate}}</li>
          <li style="background: rgb(255, 247, 140);">mRotate: {{mRotate}}</li>
          <li style="background: rgb(129, 178, 241);">sRotate: {{sRotate}}</li>
          <li>改為捕獲階段執行</li>
        </ul>
      </div>
      <div class="displayGroup">
        <div class="bigBox" :class="{rotate:bRotate}" @click="changeRotate('bRotate')">
          <div class="middleBox" :class="{rotate:mRotate}" @click.self="changeRotate('mRotate')">
            <div class="smallBox" :class="{rotate:sRotate}"
            @click="changeRotate('sRotate')"></div>
          </div>
        </div>
        <ul style="margin-left:30px;">
          <p>mRotate使用<span class="vueKey">.self</span></p>
          <li style="background: rgb(190, 243, 146);">bRotate: {{bRotate}}</li>
          <li style="background: rgb(255, 247, 140);">mRotate: {{mRotate}}</li>
          <li style="background: rgb(129, 178, 241);">sRotate: {{sRotate}}</li>
          <li>只有自己會觸發, 不管捕獲與冒泡</li>
        </ul>
      </div>
      <div class="displayGroup">
        <div class="bigBox" :class="{rotate:bRotate}" @click.once="changeRotate('bRotate')">
          <div class="middleBox" :class="{rotate:mRotate}" @click.once="changeRotate('mRotate')">
            <div class="smallBox" :class="{rotate:sRotate}"
            @click.once="changeRotate('sRotate')"></div>
          </div>
        </div>
        <ul style="margin-left:30px;">
          <p>使用<span class="vueKey">.once</span></p>
          <li style="background: rgb(190, 243, 146);">bRotate: {{bRotate}}</li>
          <li style="background: rgb(255, 247, 140);">mRotate: {{mRotate}}</li>
          <li style="background: rgb(129, 178, 241);">sRotate: {{sRotate}}</li>
          <li>只能觸發一次</li>
        </ul>
      </div>
      <div class="displayGroup">
        <div class="bigBox" :class="{rotate:bRotate}"
        @click.right.prevent="changeRotate('bRotate')">
          right + prevent
        </div>
        <div class="middleBox" :class="{rotate:mRotate}"
        @click.middle="changeRotate('mRotate')">
          middle
        </div>
        <div class="smallBox" :class="{rotate:sRotate}"
        @click.left="changeRotate('sRotate')">
          left
        </div>
        <ul style="margin-left:30px;">
          <p>使用<span class="vueKey">滑鼠按鍵修飾符</span></p>
          <li style="background: rgb(190, 243, 146);">bRotate: {{bRotate}}</li>
          <li style="background: rgb(255, 247, 140);">mRotate: {{mRotate}}</li>
          <li style="background: rgb(129, 178, 241);">sRotate: {{sRotate}}</li>
          <li>分別由不同按鍵觸發</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'modifier',
  data() {
    return {
      bRotate: false,
      mRotate: false,
      sRotate: false,
    };
  },
  methods: {
    changeRotate(rotate) {
      this[rotate] = !this[rotate];
      console.log(`現在改變${rotate}`);
    },
  },

};
</script>
<style lang="scss" scoped>
@import '../assets/scss/content.scss';

.displayGroup {
  display: flex;
  width: 100%;
  padding: 30px 10px;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
  margin: 5px 0;

  p {
    line-height: 1.5;
  }
}

.bigBox {
  width: 150px;
  height: 150px;
  background-color: rgb(190, 243, 146);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 1s;
}

.middleBox {
  width: 100px;
  height: 100px;
  background-color: rgb(255, 247, 140);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 1s;

}

.smallBox {
  width: 50px;
  height: 50px;
  background-color: rgb(129, 178, 241);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 1s;

}

.rotate {
  transform: rotate(45deg);
}

</style>
