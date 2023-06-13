<script lang='ts'>
    import Verse from "./Verse.svelte";
    import quran from "../../../quran.json";
	import VirtualList from '@sveltejs/svelte-virtual-list';

    let items: (string | number)[][] = quran;
    let start: any;
    let end: any;
   
   const setSelectedWords = (verseNumber: number, index: number) => {
        console.log("index:", index, "verse number: ",verseNumber);
   }

</script>

<div class="rtl-grid container">
    <VirtualList {items} bind:start bind:end let:item>
        <Verse verseText={item[1]} verseNumber={item[3]} setSelection={setSelectedWords}/>
	</VirtualList>
</div>

<style>
    .container {
		min-height: 100px;
		height: calc(100vh - 15em);
	}
</style>