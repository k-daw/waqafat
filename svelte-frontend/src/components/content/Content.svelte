<script lang='ts'>
    import Verse from "./Verse.svelte";
    import quran from "../../../quran.json";
	import VirtualList from '@sveltejs/svelte-virtual-list';

    let items: (string | number)[] = [];
    let start: any;
    let end: any;
    console.log( quran[2][2]);

    for (let i = 0; i < quran.length; i++) {
        items.push(quran[i][1]);
    }
    console.log(items[3])
</script>

<div class="rtl-grid container">
    <!-- {#each ayas as element, i (element)}
        <Verse verse={element} />
        <span>  </span>
	{/each} -->
    <VirtualList {items} bind:start bind:end let:item>
        <Verse verse={item} />
	</VirtualList>
</div>

<style>
    .container {
		min-height: 200px;
		height: calc(100vh - 15em);
	}
</style>