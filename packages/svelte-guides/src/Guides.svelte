<script lang="ts">
  import VanillaGuides, {
    GuidesProps,
    PROPERTIES
  } from "@scena/guides";

  import {
    onMount,
    onDestroy,
    beforeUpdate,
    afterUpdate,
    tick
  } from "svelte";

  export let style = { width: "100%", height: "100%"};

  declare var $$props: any;
  let options: Partial<GuidesProps> = {};
  let guides: VanillaGuides;
  let guidesElement: HTMLElement;

  function setStyle() {
    const elStyle = guidesElement.style;

    for (const name in style) {
      if (elStyle[name] === style[name]) {
        continue;
      }
      elStyle[name] = style[name];
    }
  }
  beforeUpdate(() => {
    const props = $$props;

    options = {};
    PROPERTIES.forEach(name => {
      if (name === "style") {
        return;
      }
      if (name in props) {
        (options as any)[name] = props[name];
      }
    });
    if (guides) {
      for (const name in options) {
        guides[name] = options[name];
      }
      setStyle();
    }
  });
  onMount(() => {
    setStyle();
    guides = new VanillaGuides(guidesElement, options);
  });
  onDestroy(() => {
    guides.destroy();
  });

  export function resize() {
    guides.resize();
  }
  export function scroll(scrollPos: number) {
    guides.scroll(scrollPos);
  }
  export function scrollGuides(scrollPos: number) {
    guides.scrollGuides(scrollPos);
  }
  export function getGuides() {
    return guides.getGuides();
  }
</script>

<div class="guides" bind:this={guidesElement} />
