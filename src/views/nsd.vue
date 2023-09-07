<template>
    <section class="app-container grid p-4 bg-blue-50 dark:bg-gradient-to-tl from-purple-950 via-slate-950 to-purple-900 dark:text-gray-400 h-screen " :style="display">
        <div v-if="device.width < mediaQueries.xs" class="header h-full">
            <app_header/>
        </div>
        <div v-if="device.width >= mediaQueries.xs" class="aside h-full w-min">
            <lg_side_nav/>
        </div>
        <div class="main h-full w-full bg-blue-100 dark:bg-gray-700 dark:bg-opacity-40 rounded-lg overflow-hidden shadow-[0_0_0.2rem_#201037] border-0">
            <aside v-if="device.width < mediaQueries" class="fixed z-50 top-0 bottom-0">
                <sm_side_nav/>
            </aside>
            <app_main/>
        </div>
        <div v-if="device.width < mediaQueries.xs" class="footer h-full">
            <app_footer/>
        </div>
    </section>
</template>

<script>
    import app_header from './pages/includes/app_header.vue';
    import sm_side_nav from './pages/includes/sm_side_nav.vue';
    import lg_side_nav from './pages/includes/lg_side_nav.vue';
    import app_main from './pages/includes/app_main.vue';
    import app_footer from './pages/includes/app_footer.vue';

    import { defineComponent, ref, onBeforeMount } from 'vue';

    export default defineComponent({
        name: 'ns application',
        components: { app_header, sm_side_nav, lg_side_nav, app_main, app_footer },
        setup(){
            const device = ref({
                width: null
            })
            const display = ref('')

            const mediaQueries = {xs: 500, sm: 640, md: 768, lg: 1024, xl: 1280, txl: 1536}

            const widthCalc = () => {
                device.value.width = window.innerWidth
            }

            onBeforeMount(() => {
                widthCalc()
                window.addEventListener('resize', widthCalc)
            })

            return { device, mediaQueries, display }
        }    
    })
</script>

<style>
    .app-container{
        grid-template-columns: 100%;
        grid-template-rows: 11% 78% 11%;
        grid-template-areas: "header", "main", "footer";
    }
    @media screen and (min-width: 500px) {
        .app-container{
            grid-template-columns: min-content 1fr;
            grid-template-rows: 100%;
            grid-template-areas: "aside main";
        }
    }
    .header{
        grid-area: header;
    }
    .footer{
        grid-area: footer;
    }
    .aside{
        grid-area: aside;
    }
    .main{
        grid-area: main;
    }
</style>