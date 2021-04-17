<template>
  <div class="content">
      <div class="leftBlock">
        <h1>表單元素與綁定</h1><span class="vueKey"></span>
        <ol class="noteList">
          <li>
            input與textarea只需要綁定<span class="vueKey">v-model</span>給對應的
            <span class="vueKey">data</span>
          </li>
          <li>
            單勾選的checkbox<span class="vueKey">v-model</span>綁定的
            <span class="vueKey">data</span>為布林值
          </li>
          <li>
            多勾選的checkbox<span class="vueKey">v-model</span>綁定的
            <span class="vueKey">data</span>為陣列, 勾選切換陣列與checkbox中
            對應的<span class="vueKey">value</span>
          </li>
          <li>
            單選按鈕 radio, <span class="vueKey">v-model</span>綁定對應的
            <span class="vueKey">value</span>給<span class="vueKey">data</span>
          </li>
          <li>
            單選欄, <span class="vueKey">v-model</span>綁定對應的
            <span class="vueKey">value</span>或option內的字串給
            <span class="vueKey">data</span>, option可加上<span class="vueKey">disabled</span>
            使其不可被選取
          </li>
          <li>
            多欄選一, <span class="vueKey">v-model</span>綁定的<span class="vueKey">data</span>
            為陣列, 且須加上<span class="vueKey">multiple</span>
          </li>
          <li>
            option本身也能搭配<span class="vueKey">v-for</span>來動態生成
          </li>
        </ol>
      </div>
      <div class="rightBlock">
          <div class="formGroup">
            <h2 class="labelTag">input : {{inputText}}</h2>
            <input class="inputText" type="text" v-model="inputText">
          </div>
          <div class="formGroup">
            <h2 class="labelTag">textarea : {{textarea}}</h2>
            <textarea class="textarea" name="" id="" cols="30" rows="3"
             v-model="textarea"></textarea>
          </div>
          <div class="formGroup">
            <h2 class="labelTag">單勾選 : {{ singleChecked }}</h2>
            <input type="checkbox" id="checkbox" v-model="singleChecked">
            <label for="checkbox"> Yes</label>
            <br>
            <br>
            <h2 class="labelTag">多勾選 : {{multiCheck}}</h2>
            <input type="checkbox" value="cat" v-model="multiCheck">
            <label for="cat"> cat  </label>
            <input type="checkbox" value="dog" v-model="multiCheck">
            <label for="dog"> dog  </label>
            <input type="checkbox" value="bird" v-model="multiCheck">
            <label for="bird"> bird  </label>
          </div>
          <div class="formGroup">
            <h2 class="labeltag">單選按鈕 : {{radio}}</h2><br>
            <input type="radio" name="" id="" value="right" v-model="radio">
            <label for=""> right</label><br><br>
            <input type="radio" name="" id="" value="left" v-model="radio">
            <label for=""> left</label><br><br>
          </div>
          <div class="formGroup">
            <h2 class="labeltag">單選欄 : {{singleSelected}}</h2><br><br>
            <select v-model="singleSelected">
              <option disabled value="">選擇吧</option>
              <option>A</option>
              <option>B</option>
              <option>C</option>
            </select><br><br>
            <h2 class="labeltag">多欄選一 : {{multiSelected}}</h2><br><br>
            <select v-model="multiSelected" multiple style="width:100px">
              <option value="說">說</option>
              <option value="學">學</option>
              <option value="逗">逗</option>
              <option value="唱">唱</option>
            </select>
          </div>
      </div>
  </div>
</template>
<script>
export default {
  name: 'form',
  data() {
    return {
      inputText: '',
      textarea: '',
      singleChecked: false,
      multiCheck: [],
      radio: '',
      singleSelected: '',
      multiSelected: [],
    };
  },
};
</script>
<style lang="scss" scoped>

.content {
  display: flex;
  padding: 50px;
  font-size: 16px;
  background: rgb(229, 248, 210);
}

.leftBlock {
  width: 50%;
  padding: 10px 20px;
    // height: 600px;

  h1 {
    font-size: 30px;
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

.rightBlock {
  width: 50%;
  padding: 10px 20px;
}

.formGroup {
  padding: 20px 0;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;

  .labelTag {
    display: block;
    margin-bottom: 10px;
  }

  .inputText, .textarea {
    width: 100%;
    margin-bottom: 10px;
  }
}

</style>
