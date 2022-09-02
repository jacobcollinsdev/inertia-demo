<template >
    <Link :class="{ 'font-bold underline text-blue-700': active }">
        <slot />
    </Link>
</template>

<script>

export default {
    props: {
        active: Boolean
    }
}
</script>


