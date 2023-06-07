
<script lang='ts'>
    import Word from './Word.svelte';
    export let verseText:string;
    export let verseNumber:number;

    
    const splitedVerse = verseText.split(' ');
    const numberMapping = {
        '1' : '١',
        '2' : '٢',
        '3' : '٣',
        '4' : '٤',
        '5' : '٥',
        '6' : '٦',
        '7' : '٧',
        '8' : '٨',
        '9' : '٩',
    };

    const getVerseNumberInArabic = (verseNumber: number) => {
        return verseNumber
            .toString()
            .split('')
            .map((char) => numberMapping[char])
            .join('');
    };
    const handleOnClick = (event) => {
        console.log(event.target.innerText);
    }
    const verseNumberInArabic = getVerseNumberInArabic(verseNumber);
</script>

<div class="card text-center hover:cursor-default">
    {#each  splitedVerse as word, index}
        <Word text={word} onSelectionChange={() => {}}/>
        <span> </span>
    {/each}
    <span> ۝{verseNumberInArabic} </span>
    <!-- <span class="cursor-default hover:bg-violet-600">{verse}</span> -->
</div>



<style>
    .card {
		position: relative;
		margin: .5em;
		/* padding: 0.5em 0.5em 0.5em 6em; */
		min-height: 5em;
	}
</style>