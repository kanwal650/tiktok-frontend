<template>
    <TopNav/>
    <div 
        :class="['/', '/following'].includes(route.fullPath) || route.fullPath.split('/').includes('search') ? 'max-w-[1140px]' : ''" 
        class="flex justify-between mx-auto w-full lg:px-2.5 px-0"
    >
        <div>
            <SideNavMain />
        </div>
        <slot />
    </div>
</template>

<script setup>
const route = useRoute()
</script>
