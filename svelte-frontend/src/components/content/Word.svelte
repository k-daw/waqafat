<script lang='ts'>
    
    export let text: string;
    export let onSelectionChange: Function;

    const hanldeOnChange = (event: MouseEvent) => {
        event.preventDefault();
    }

</script>

<span 
    class="leading-loose hover:text-red-500"
    on:click={onSelectionChange}
>
    {text}
</span>