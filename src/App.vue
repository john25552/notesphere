<template>
    <section>
        <router-view></router-view>
    </section>
</template>

<script>
    import { useRouter } from 'vue-router';
    import { useUserStore } from './stores/userStore';

    export default {
        setup(){
            const router = useRouter()
            const store = useUserStore()

            router.beforeEach((to, from, next) => {
                if(to.meta.authGuarded){
                    if(store.user == null){
                        router.push({name: 'login'})
                        return
                    }
                    next()
                } else {
                    if(store.user != null){
                        router.push({name: 'dashboard'})
                        return
                    }
                    next()
                }
            })
        }
    }
</script>