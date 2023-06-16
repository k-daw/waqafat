<script lang='ts'>
    
    export let text: string;
    export let setSelectedWord: Function;
    export let wordIndex: number;

    let isClicked: boolean = false;
    const textColor: string = isClicked ? 'red': 'blue';

    const hanldeOnClick = (event: MouseEvent) => {
        event.preventDefault();
        isClicked = !isClicked;

        console.log('isClicked', isClicked)
        setSelectedWord(wordIndex);
    }

</script>

<span 
    class={`${isClicked? 'selected-word' : 'unselected-word'} hover:text-red-500`}
    on:click={hanldeOnClick}
>
    {text}
</span>

<style>
    .unselected-word {
        color: black;
    }

    .selected-word {
        color: red;
    }
</style>