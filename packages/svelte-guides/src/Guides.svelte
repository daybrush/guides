<script lang="ts">
  import VanillaGuides, {
    PROPERTIES,
    EVENTS
  } from "@scena/guides";
  import type { GuidesOptions } from '@scena/guides';

  import {
    onMount,
    onDestroy,
    beforeUpdate,
    afterUpdate,
    createEventDispatcher,
    tick
  } from "svelte";
  const dispatch = createEventDispatcher();

  export let style = { width: "100%", height: "100%"};

  declare var $$props: any;
  let options: Partial<GuidesOptions> = {};
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
      setStyle();
    }
  });
  onMount(() => {
    setStyle();
    guides = new VanillaGuides(guidesElement, options);

    EVENTS.forEach((name, i) => {
      guides.on(name as any, e => {
        dispatch(name, e);
      });
    });
  });
  onDestroy(() => {
    guides.destroy();
  });

  export function getInstance() {
    return guides;
  }
</script>
<div class="guides" bind:this={guidesElement} />
