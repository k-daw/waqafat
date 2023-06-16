<script lang='ts'>
    import Verse from "./Verse.svelte";
    import quran from "../../../quran.json";
	import VirtualList from '@sveltejs/svelte-virtual-list';
    import SelectedWords from "./SelectedWords.svelte";

    let items: (string | number)[][] = quran;
    let start: any;
    let end: any;

    let sw: string[] = [];
   
   const setSelectedWords = (verseNumber: number, index: number) => {
        const selection: string = `${verseNumber},${index}`;
    
        if (sw.includes(selection)) {
            let removingIndex = sw.indexOf(selection);
            sw.splice(removingIndex, 1);
        }
        else {
            sw.push(selection);
        }
    
        sw = sw.sort();

        console.log("selected words from content:", sw);
   }

</script>

<div>
    <SelectedWords selectedWords={sw} />
</div>
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