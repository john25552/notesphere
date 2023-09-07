<template>
    <section class="profile-container grid h-full">
        <section class="profile-head flex justify-between items-center h-full px-3">
            <button type="button" class="text-white focus:outline-none font-medium text-sm text-center inline-flex items-center mr-2 cursor-pointer">
                <svg class="w-3.5 h-3.5 mr-2 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
                </svg>
                Profile
            </button>
            <div class="w-[60%] flex justify-end">
                <span @click="goTo('overview')" class="base" :class="{'active':$route.name == 'overview'}">Overview</span>
                <span @click="goTo('editor')" class="base" :class="{'active':$route.name == 'pro_notes'}">Notes</span>
                <span @click="goTo('documents')" class="base" :class="{'active':$route.name == 'documents'}">Documents</span>
                <span @click="goTo('assignments')" class="base" :class="{'active':$route.name == 'assignments'}">Assignments</span>
                <span @click="goTo('collaborations')" class="base" :class="{'active':$route.name == 'collaborations'}">Collabos</span>
                <span @click="goTo('libraries')" class="base" :class="{'active':$route.name == 'libraries'}">Libraries</span>
            </div>
        </section>
        <section class="profile-body h-full">
            <router-view></router-view>
        </section>
    </section>
</template>

<script>
    import { useRouter } from 'vue-router'

    export default {
        setup(){
            const router = useRouter()

            const goTo = (routeName) => {
                router.push({name: routeName})
            }

            return { goTo }
        }
    }
</script>

<style scoped>
    .profile-container{
        grid-template-columns: 100%;
        grid-template-rows: 8% 92%;
        grid-template-areas: "head" "body";
    }
    .profile-body{
        grid-area: body;
    }
    .profile-head{
        grid-area: head;
    }
    .active{
        @apply bg-purple-100 text-purple-800 text-base mr-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:bg-opacity-40 dark:text-purple-300;
    }
    .base{
        @apply text-base mr-2 px-2.5 py-0.5 cursor-pointer;
    }
</style>