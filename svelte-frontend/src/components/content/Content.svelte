<script lang='ts'>
    import Verse from "./Verse.svelte";
    import quran from "../../../quran.json";
	import VirtualList from '@sveltejs/svelte-virtual-list';

    let items: (string | number)[][] = quran;
    let start: any;
    let end: any;
    // console.log( quran[2][2]);

    // for (let i = 0; i < quran.length; i++) {
    //     verses.push(quran[i][1]);
    // }
</script>

<div class="rtl-grid container">
    <VirtualList {items} bind:start bind:end let:item>
        <Verse verseText={item[1]} verseNumber={item[3]}/>
	</VirtualList>
</div>

<style>
    .container {
		min-height: 100px;
		height: calc(100vh - 15em);
	}
</style>