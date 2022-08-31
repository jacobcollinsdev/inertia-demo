<template >
    <Link :class="{ 'font-bold underline text-blue-700': active }">
        <slot />
    </Link>
</template>

<script>
import { Link } from '@inertiajs/inertia-vue3';

export default {
    components: { Link },
    props: {
        active: Boolean
    }
}
</script>


