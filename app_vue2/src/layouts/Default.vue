<template>
    <div>
        <TheHeader />

        <div class="px-3 py-10 md:px-10">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import TheHeader from '@/components/Partials/TheHeader.vue';

    export default {
        name: 'LayoutDefault',

        components: {
            TheHeader,
        },

        data() {
            return {};
        }
    }
</script>