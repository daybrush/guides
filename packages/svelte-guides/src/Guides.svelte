<script>
  import VanillaGuides, {
    PROPERTIES,
    EVENTS
  } from "@scena/guides";

  import {
    onMount,
    onDestroy,
    beforeUpdate,
    createEventDispatcher
  } from "svelte";
  const dispatch = createEventDispatcher();

  export let style = { width: "100%", height: "100%"};

  let options = {};
  let guides;
  let guidesElement;

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
        options[name] = props[name];
      }
    });
    if (guides) {
      setStyle();
      for (const name in options) {
        guides[name] = options[name];
      }
    }
  });
  onMount(() => {
    setStyle();
    guides = new VanillaGuides(guidesElement, options);

    EVENTS.forEach((name, i) => {
      guides.on(name, e => {
        dispatch(name, e);
      });
    });
  });
  onDestroy(() => {
    if (guides) guides.destroy();
  });

  export function getInstance() {
    return guides;
  }
</script>
<div class="guides" bind:this={guidesElement} />
