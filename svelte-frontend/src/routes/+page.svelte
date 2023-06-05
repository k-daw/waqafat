
<script>
    import "../app.css";
    import Content from "../components/content/Content.svelte";
    import Header from "../components/header/Header.svelte";
    import "@fontsource/amiri"
</script>

<div>
    <Header />
    <Content />
</div>



<style lang="postcss">
:global(html) {
    background-color: theme(colors.golden);
}
div {
        font-family: 'Amiri';
    }
</style>