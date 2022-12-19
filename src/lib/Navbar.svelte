<script>
    let navs = [
        {
            name: "Home",
            link: "#0",
        },
        {
            name: "About",
            link: "#1",
        },
        {
            name: "Test",
            link: "#2",
        },
    ];
</script>

<div class="sticky top-0 z-10">
    <nav class="flex justify-between items-center p-4 bg-black bg-opacity-90">
        <div class="flex items-center">
            <img
                src="https://img.icons8.com/fluency/512/discogs--v1.png"
                alt="logo"
                class="w-10 h-10"
            />
            <h1 class="text-white ml-2">Simon Test</h1>
        </div>
        <ul class="flex gap-4">
            {#each navs as nav}
                <li>
                    <a href={nav.link} class="text-white">{nav.name}</a>
                </li>
            {/each}
        </ul>
    </nav>
</div>
