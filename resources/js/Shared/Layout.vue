<template>
    <section>
        <header class="flex bg-gray-200 p-6">
            <div class="flex items-center gap-x-4">
                <h1 class="font-bold">MyApp</h1>
                <p>Welcome, {{ username }}!</p>
            </div>
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

        // Next look into computed object
        computed: {
            username() {
                return this.$page.props.auth.user.username;
            }
        }
    }
</script>
