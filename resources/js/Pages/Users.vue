<template>
    <h1 class="text-3xl font-bold mb-6">Users</h1>
    <div style="margin-top: 830px;">
        <p>The current time is {{ time }}</p>

        <Link href="/users" class="text-blue-500" preserve-scroll>
            Refresh
        </Link>
    </div>
</template>

<script>
    // We don't need to import the Link component before we have 
    // registered it globaling in resources/app.

    export default {
        props: {
            time: String,
        }
    }
</script>


