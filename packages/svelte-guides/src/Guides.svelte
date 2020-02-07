<script lang="ts">
  import VanillaGuides, {
    GuidesOptions,
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
  let options: Partial<GuidesOptions> = {};
  let guides: VanillaGuides;
  let guidesElement: HTMLElement;

  function setStyle() {
    const el = options.container || guidesElement;
    const elStyle = el.style;

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
      guides.setState(options);
      setStyle();
    }
  });
  onMount(() => {
    setStyle();
    guides = new VanillaGuides(options.container || guidesElement, options);
  });
  onDestroy(() => {
    guides.destroy();
  });

  export function getInstance() {
    return guides;
  }
</script>
{#if !options.container}
<div class="guides" bind:this={guidesElement} />
{/if}
