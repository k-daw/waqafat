<script lang='ts'>
    export let selectedWords: string[];
    import quran from "../../../quran.json";

</script>

<div class="flex justify-center align-center w-3/4 h" >
    <div class="bg-grey-300">
        {#each selectedWords  as t}
            <span>{quran[parseInt(t.split(',')[0])-1][1].split(' ')[[parseInt(t.split(',')[1])]]}</span>
            <span>  </span>
        {/each}
    </div>
</div>