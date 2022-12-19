<script>
  let y;
  let maxY;
  let sources = [
    "https://images.unsplash.com/photo-1506038634487-60a69ae4b7b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=766&q=80",
    "https://images.unsplash.com/photo-1517984922331-8dbaa8ffa9c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
    "https://images.unsplash.com/photo-1501183007986-d0d080b147f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1586260695115-62d9d6491162?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1509514026798-53d40bf1aa09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  ];
  $: console.log({ y, maxY, test: y / maxY });
</script>

<svelte:window bind:scrollY={y} bind:outerHeight={maxY} />

<div class="flex flex-col gap-20 p-10">
  {#each sources as src}
    <div class="flex flex-col items-center">
      <img
        style="object-position: 50% clamp(0%,{(y / maxY) *
          50}%, 100%; user-select: none;"
        {src}
        alt=""
      />
      <p class="text-white w-1/2">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </div>
  {/each}
</div>

<style>
  img {
    width: 70vmin;
    height: 30vmin;
    object-fit: cover;
    object-position: 50% 50%;
    user-select: none;
  }
</style>
