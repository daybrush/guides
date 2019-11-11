<template>
  <div class="page">
    <div class="box" @click="onRestore" ref="box" />
    <div class="ruler horizontal">
      <Guides
        ref="guides1"
        type="horizontal"
        v-bind:rulerStyle="{ left: '30px', width: 'calc(100% - 30px)', height: '30px'}"
      />
    </div>
    <div class="ruler vertical">
      <Guides
        ref="guides2"
        type="vertical"
        v-bind:rulerStyle="{ top: '30px', height: 'calc(100% - 30px)', width: '30px'}"
      />
    </div>

    <div class="container">
      <img src="https://daybrush.com/guides/images/guides.png" width="200" alt="guides" />
      <p class="dragit">Drag Screen & Rulers!</p>
      <p class="badges">
        <a href="https://www.npmjs.com/package/svelte-guides" target="_blank">
          <img
            src="https://img.shields.io/npm/v/svelte-guides.svg?style=flat-square&color=007acc&label=version"
            alt="npm version"
          />
        </a>
        <a href="https://github.com/daybrush/guides" target="_blank">
          <img
            src="https://img.shields.io/github/stars/daybrush/guides.svg?color=42b883&style=flat-square"
          />
        </a>
        <a href="https://github.com/daybrush/guides" target="_blank">
          <img src="https://img.shields.io/badge/language-typescript-blue.svg?style=flat-square" />
        </a>
        <a href="https://github.com/daybrush/guides/blob/master/LICENSE" target="_blank">
          <img
            src="https://img.shields.io/github/license/daybrush/guides.svg?style=flat-square&label=license&color=08CE5D"
          />
        </a>
        <a
          href="https://github.com/daybrush/guides/tree/master/packages/react-guides"
          target="_blank"
        >
          <img
            alt="React"
            src="https://img.shields.io/static/v1.svg?label=&message=React&style=flat-square&color=61daeb"
          />
        </a>
        <a
          href="https://github.com/daybrush/guides/tree/master/packages/preact-guides"
          target="_blank"
        >
          <img
            alt="Preact"
            src="https://img.shields.io/static/v1.svg?label=&message=Preact&style=flat-square&color=673ab8"
          />
        </a>
        <a
          href="https://github.com/daybrush/guides/tree/master/packages/ngx-guides"
          target="_blank"
        >
          <img
            alt="Angular"
            src="https://img.shields.io/static/v1.svg?label=&message=Angular&style=flat-square&color=C82B38"
          />
        </a>
        <a
          href="https://github.com/daybrush/guides/tree/master/packages/vue-guides"
          target="_blank"
        >
          <img
            alt="Vue"
            src="https://img.shields.io/static/v1.svg?label=&message=Vue&style=flat-square&color=3fb984"
          />
        </a>
        <a
          href="https://github.com/daybrush/guides/tree/master/packages/svelte-guides"
          target="_blank"
        >
          <img
            alt="Svelte"
            src="https://img.shields.io/static/v1.svg?label=&message=Svelte&style=flat-square&color=C82B38"
          />
        </a>
      </p>
      <p class="description">A Svelte Guides component that can draw ruler and manage guidelines.</p>
      <div class="buttons">
        <a
          href="https://github.com/daybrush/guides/tree/master/packages/svelte-guides"
          target="_blank"
        >Download</a>
        <!-- <a href="./release/latest/doc" target="_blank">API</a> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Dragger from "@daybrush/drag";
import Guides from "./components/Guides";

@Component({
  components: {
    Guides
  }
})
export default class App extends Vue {
  scrollX = 0;
  scrollY = 0;
  protected mounted() {
    const guides1 = this.$refs.guides1 as Guides;
    const guides2 = this.$refs.guides2 as Guides;
    this.onResize();

    new Dragger(document.body, {
      drag: e => {
        this.scrollX -= e.deltaX;
        this.scrollY -= e.deltaY;

        guides1.scroll(this.scrollX);
        guides1.scrollGuides(this.scrollY);
        guides2.scroll(this.scrollY);
        guides2.scrollGuides(this.scrollX);
      }
    });
    window.addEventListener("resize", this.onResize);
  }
  onResize() {
    const guides1 = this.$refs.guides1 as Guides;
    const guides2 = this.$refs.guides2 as Guides;

    guides1.resize();
    guides2.resize();
  }
  onRestore() {
      console.log(this.scrollX, this.scrollY);
    const guides1 = this.$refs.guides1 as Guides;
    const guides2 = this.$refs.guides2 as Guides;
    this.scrollX = 0;
    this.scrollY = 0;
    guides1.scroll(0);
    guides1.scrollGuides(0);
    guides2.scroll(0);
    guides2.scrollGuides(0);
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600&display=swap");
@import url("https://fonts.googleapis.com/css?family=Roboto:100&display=swap");

html,
body {
  font-family: "Open Sans", sans-serif;
  position: relative;
  margin: 0;
  padding: 0;
  height: 100%;
  color: #333;
  letter-spacing: 1px;
  background: #f5f5f5;
  font-weight: 300;
  touch-action: manipulation;
}
#root,
.page {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
a {
  text-decoration: none;
  color: #333;
}
.ruler {
  position: absolute;
  top: 0;
  left: 0;
}
.ruler.horizontal {
  left: 0px;
  width: 100%;
  height: 30px;
}
.ruler.vertical {
  top: 0px;
  width: 30px;
  height: 100%;
}
.box {
  position: relative;
  width: 30px;
  height: 30px;
  background: #444;
  box-sizing: border-box;
  z-index: 21;
}
.box:before,
.box:after {
  position: absolute;
  content: "";
  background: #777;
}
.box:before {
  width: 1px;
  height: 100%;
  left: 100%;
}
.box:after {
  height: 1px;
  width: 100%;
  top: 100%;
}

.container {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  max-width: calc(100% - 60px);
  width: 100%;
}

.badges {
  padding: 10px;
}
.badges img {
  height: 20px;
  margin: 0px 2px;
}
.buttons {
  text-align: center;
  margin: 0;
  padding: 10px;
}
.buttons a {
  margin: 0;
  position: relative;
  text-decoration: none;
  color: #333;
  border: 1px solid #333;
  padding: 12px 30px;
  min-width: 140px;
  text-align: center;
  display: inline-block;
  box-sizing: border-box;
  margin: 5px;
  transition: all ease 0.5s;
}
.buttons a:hover {
  background: #333;
  color: #fff;
}

p {
  padding: 0;
  margin: 0;
}

.dragit {
  font-weight: bold;
}
</style>
