<template>
    <section>
        <header class="flex bg-gray-200 p-6">
            <h1 class="font-bold">MyApp</h1>
            <Nav />
        </header>
    </section>
    <section class="p-6">
        <div class="max-w-3xl mx-auto">
            <slot/>
        </div>
    </section>
</template>

<script>
    import Nav from "./Nav";

    export default {
        components: { Nav },
    }
</script>
