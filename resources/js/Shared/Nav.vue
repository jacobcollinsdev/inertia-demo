<template >
    <nav class="ml-auto">
        <ul class="flex space-x-4">
            <li>
                <NavLink href="/" :active="$page.component === 'Home'">Home</NavLink>
            </li>
            <li>
                <NavLink href="/users" :active="$page.component === 'Users'">Users</NavLink>
            </li>
            <li>
                <NavLink href="/settings" :active="$page.component === 'Settings'">Settings</NavLink>
            </li>
            <li>
                <Link
                    href="/logout" method="post" :data="{ foo: 'bar' }" as="button"
                >
                    Log Out
                </Link>
            </li>
        </ul>
    </nav>
</template>

<script>
    import NavLink from './NavLink.vue';

    export default {
        components: { NavLink },
        props: {}
    }
</script>


