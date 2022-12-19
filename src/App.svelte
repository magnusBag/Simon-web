<script>
  let y;
  let maxY;
  import Navbar from "./lib/Navbar.svelte";
  import Counter from "./lib/Counter.svelte";
  import "./lib/Tailwind.css";
</script>

<svelte:window bind:scrollY={y} bind:outerHeight={maxY} />
<div class="bg-black">
  <Navbar />
  <Counter />
  <div>
    <div
      class="paralax scale-50"
      style="background-image: url(../dots2.png);background-position-y:{y /
        70}px; scale: {y / maxY / 15 + 1}"
    />
    <div
      class="paralax hue-rotate-90"
      style="background-image:url(../dots1.png); background-position-y:{y /
        500}px; scale: {y / maxY / 25 + 1}"
    />
    <div
      class="paralax"
      style="background-image: url(../dots3.png);background-position-y:{y /
        100}px; scale: {y / maxY / 20 + 1}"
    />
  </div>
</div>

<style>
  .paralax {
    height: 100%;
    width: 100%;
    background-repeat: repeat-x;
    background-size: contain;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1;
  }
</style>
