<template>
  <div class="content">
    <!-- <div class="content__leftBlock"></div> -->
    <div class="content__leftBlock noteList" style="width:100%;">
      <h1 class="noteTitle">v-bind:class</h1>
      <div class="displayGroup">
        <div class="box" :class="{'box--rotate':boxRotate}"
        @click="boxRotate=!boxRotate">click me</div>
        <div>
          <p><span class="vueKey">:class</span>
          ="{'box--rotate': boxRotate}"<br>
          <span class="vueKey">data</span>
          :{<br>boxRotate: {{boxRotate}}<br>}</p>
        </div>
      </div>
      <div class="displayGroup">
        <div class="box" :class="{'box--rotate':boxRotate,'box--bgPink':boxBgPink}"
        @click="boxRotate=!boxRotate;boxBgPink=!boxBgPink">click me</div>
        <div>
          <p><span class="vueKey">:class</span>
          ="{'box--rotate': boxRotate, 'box--bgPink': boxBgPink}"<br>
          <span class="vueKey">data</span>
          :{<br>boxRotate: {{boxRotate}}, boxBgPink: {{boxBgPink}}<br>}</p>
        </div>
      </div>
      <div class="displayGroup">
        <div class="box" :class="classObj"
        @click="classObj['box--rotate']=!classObj['box--rotate'];
        classObj['box--bgPink']=!classObj['box--bgPink']">click me</div>
        <div>
          <p><span class="vueKey">:class</span>="classObj"<br>
          <span class="vueKey">data</span>
          :{<br>
          classObj: {{classObj}}<br>}
          </p>
        </div>
      </div>
      <div class="displayGroup">
        <div class="box" :class="classArray"
        @click="classArray.unshift(out);out=classArray.pop()">click me</div>
        <div>
          <p><span class="vueKey">:class</span>="classArray"<br>
          <span class="vueKey">data</span>
          :{<br>
          classArray: {{classArray}}<br>}
          </p>
        </div>
      </div>
      <h1 class="noteTitle">v-bind:style</h1>
      <div class="displayGroup">
        <div class="box" :style="{background:color,borderRadius:radius}"
        @click="color==='skyblue'? color='orange': color='skyblue';
        radius==='0%'? radius='50%': radius='0%'">click me</div>
        <div>
          <p><span class="vueKey">:style</span>
          ="{background: color, borderRadius: radius}"<br>
          <span class="vueKey">data</span>
          :{<br>
          color: "{{color}}", radius: "{{radius}}"<br>}
          </p>
        </div>
      </div>
      <div class="displayGroup">
        <div class="box" :style="styleObj"
        @click="
        styleObj.background==='purple'? styleObj.background='yellow': styleObj.background='purple'
        ;styleObj.borderRadius==='0%'? styleObj.borderRadius='50%': styleObj.borderRadius='0%'">
        click me</div>
        <div>
          <p><span class="vueKey">:style</span>
          ="styleObj"<br>
          <span class="vueKey">data</span>
          :{<br>
          styleObj: {{styleObj}}<br>}
          </p>
        </div>
      </div>
      <div class="displayGroup">
        <div class="box" :style="[styleObj01,styleObj02]"
        @click="
        styleObj01.background==='white'?styleObj01.background='brown':styleObj01.background='white';
        styleObj02.transform==='skew(-10deg, 0deg)'?
        styleObj02.transform='skew(0deg, 0deg)':
        styleObj02.transform='skew(-10deg, 0deg)'
        ">
        click me</div>
        <div>
          <p><span class="vueKey">:style</span>
          ="[styleObj01,styleObj02]"<br>
          <span class="vueKey">data</span>
          :{<br>
          styleObj01: {{styleObj01}},<br>
          styleObj02: {{styleObj02}}<br>}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'vBind',
  data() {
    return {
      boxRotate: false,
      boxBgPink: false,
      classObj: {
        'box--rotate': false,
        'box--bgPink': false,
      },
      out: 'box--borderRadius',
      classArray: ['box--rotate', 'box--bgPink'],
      color: 'skyblue',
      radius: '0%',
      styleObj: {
        background: 'purple', borderRadius: '0%',
      },
      styleObj01: { background: 'white' },
      styleObj02: { transform: 'skew(0deg, 0deg)' },
    };
  },
  methods: {

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

.box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  transition: 1s;
  border: 1px solid black;
  margin: 0 20px;
  cursor: pointer;

  &--rotate {
    transform: rotate(180deg);
  }

  &--bgPink {
    background: pink;
  }

  &--borderRadius {
    border-radius: 50%;
  }
}

</style>
