

<p align="middle" ><img src="https://raw.githubusercontent.com/daybrush/guides/master/demo/images/guides.png"/></p>
<h2 align="middle">Vue Guides</h2>
<p align="middle">
<a href="https://www.npmjs.com/package/@scena/vue-guides" target="_blank"><img src="https://img.shields.io/npm/v/@scena/vue-guides.svg?style=flat-square&color=007acc&label=version" alt="npm version" /></a>
<img src="https://img.shields.io/badge/language-typescript-blue.svg?style=flat-square"/>
<a href="https://github.com/daybrush/guides/blob/master/LICENSE" target="_blank"><img src="https://img.shields.io/github/license/daybrush/guides.svg?style=flat-square&label=license&color=08CE5D"/></a>
<a href="https://github.com/daybrush/guides/tree/master/packages/react-guides" target="_blank"><img alt="React" src="https://img.shields.io/static/v1.svg?label=&message=React&style=flat-square&color=61daeb"></a>
<a href="https://github.com/daybrush/guides/tree/master/packages/preact-guides" target="_blank"><img alt="Preact" src="https://img.shields.io/static/v1.svg?label=&message=Preact&style=flat-square&color=673ab8"></a>
<a href="https://github.com/daybrush/guides/tree/master/packages/ngx-guides" target="_blank"><img alt="Angular" src="https://img.shields.io/static/v1.svg?label=&message=Angular&style=flat-square&color=C82B38"></a>
<a href="https://github.com/daybrush/guides/tree/master/packages/vue-guides" target="_blank"><img
    alt="Vue"
    src="https://img.shields.io/static/v1.svg?label=&message=Vue&style=flat-square&color=3fb984"></a>
<a href="https://github.com/daybrush/guides/tree/master/packages/svelte-guides" target="_blank"><img
    alt="Vue"
    src="https://img.shields.io/static/v1.svg?label=&message=Svelte&style=flat-square&color=C82B38"></a>
</p>
<p align="middle">A Vue Guides component that can draw grids and scroll infinitely.</p>
<p align="middle">
    <a href="https://daybrush.com/guides" target="_blank"><strong>Demo</strong></a> /
    <a href="https://github.com/daybrush/scenejs-editor" target="_blank"><strong>Main Project</strong></a>
</p>


## ⚙️ Installation
### npm
```sh
$ npm i @scena/vue-guides
```

## 🚀 How to use
```html
<template>
    <div class="guides">
        <vue-guides type="horizontal" ref="guides"/>
    </div>
</template>
<script>
    import Guides from "@scena/vue-guides";

    export default {
        components: {
            "vue-guides": Guides,
        },
        mounted() {
            this.$refs.guides.resize();
            window.addEventListener("resize", () => {
                guides.resize();
            });
        },
    };
</script>
```


## ⚙️ Developments
### `npm run serve`

Runs the app in the development mode.<br>
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.



## ⭐️ Show Your Support
Please give a ⭐️ if this project helped you!

## 👏 Contributing

If you have any questions or requests or want to contribute to `guides` or other packages, please write the [issue](https://github.com/daybrush/guides/issues) or give me a Pull Request freely.

## 🐞 Bug Report

If you find a bug, please report to us opening a new [Issue](https://github.com/daybrush/guides/issues) on GitHub.


## 📝 License

This project is [MIT](https://github.com/daybrush/guides/blob/master/LICENSE) licensed.

```
MIT License

Copyright (c) 2019 Daybrush

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

