<template>
    <!-- <section v-if="deviceWidth >= 500" class="h-full">
        <div class="h-[11%]">
            <app_header/>
        </div>
        <div class="h-[89%]">
            <router-view></router-view>
        </div>
    </section> -->
    <section class="h-full">
        <router-view></router-view>
    </section>
</template>

<script>
    import app_header from './app_header.vue';

    import { defineComponent, ref, onMounted } from 'vue'

    export default defineComponent({
        name: 'main preview',
        components: {
            app_header
        },
        setup() {
            const deviceWidth = ref(null)

            const widthCalc = () => {
                deviceWidth.value = window.innerWidth
            }

            onMounted(() => {
                window.addEventListener('resize', widthCalc)
            })

            return { deviceWidth }
        }
    })
</script>