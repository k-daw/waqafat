
<script lang='ts'>
    export let verse:string;

    const handleOnClick = (event) => {
        console.log(event.target.innerText);
    }

</script>

<div class="card text-center bg-violet-500 hover:bg-violet-600">
    <span class="cursor-default bg-black hover:bg-violet-600">{verse}</span>
</div>


<style>
    .card {
		position: relative;
		margin: .5em;
		/* padding: 0.5em 0.5em 0.5em 6em; */
		min-height: 5em;
	}
</style>