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
      class="paralax"
      style="background-image: url(https://i.ibb.co/qxK7Hsz/dots2.png);background-position-y:{y /
        100}px; scale: {y / maxY / 30 + 1}"
    />
    <div
      class="paralax"
      style="background-image:url(https://i.ibb.co/vDff6hH/dots1.png); background-position-y:{y /
        500}px; scale: {y / maxY / 25 + 1}"
    />
    <div
      class="paralax"
      style="background-image: url(https://i.ibb.co/LRLjy1d/dots3.png);background-position-y:{y /
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
