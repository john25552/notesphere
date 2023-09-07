<template>
    <section class="h-full w-52 pr-2">
        <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ml-3 text-sm rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <span class="sr-only">Open sidebar</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
            </svg>
        </button>
        <aside id="logo-sidebar" class="bg-transparent h-full" aria-label="Sidebar">
            <div class="h-full px-3 py-4 overflow-y-aut relative">
                <div @click="goTo('dashboard')" class="flex items-center pl-2.5 mb-5">
                    <img src="" class="h-6 mr-3 sm:h-7" alt="nsd Logo" />
                    <span class="self-center text-xl dark:text-gray-200 font-semibold whitespace-nowrap">NoteSphere</span>
                </div>
                <ul class="font-medium">
                    <li>
                        <div @click="goTo('dashboard')" class="base group" :class="{'active': $route.name == 'dashboard'}">
                            <svg class="w-5 h-5 transition duration-75 group-hover dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 14">
                                <path stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M2 5h17m-9 8V6M2 1h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Z"/>
                            </svg>
                            <span class="ml-3">Dashboard</span>
                        </div>
                    </li>
                    <li>
                        <div @click="goTo('preview')" class="base group" :class="{'active': $route.name == 'editor' || $route.name == 'preview'}">
                            <svg class="flex-shrink-0 w-5 h-5 transition duration-75 group-hover dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.828 10h6.239m-6.239 4h6.239M6 1v4a1 1 0 0 1-1 1H1m14-4v16a.97.97 0 0 1-.933 1H1.933A.97.97 0 0 1 1 18V5.828a2 2 0 0 1 .586-1.414l2.828-2.828A2 2 0 0 1 5.828 1h8.239A.97.97 0 0 1 15 2Z"/>
                            </svg>
                            <span class="flex-1 ml-3 whitespace-nowrap">Notes</span>
                        </div>
                    </li>
                    <li>
                        <div @click="goTo('libraries')" class="base group" :class="{'active': $route.name == 'libraries'}">
                            <svg class="flex-shrink-0 w-5 h-5 transition duration-75 group-hover dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 19">
                                <path d="M1 19h13a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H0v10a1 1 0 0 0 1 1ZM0 6h7.443l-1.2-1.6a1 1 0 0 0-.8-.4H1a1 1 0 0 0-1 1v1Z"/>
                                <path d="M17 4h-4.557l-2.4-3.2a2.009 2.009 0 0 0-1.6-.8H4a2 2 0 0 0-2 2h3.443a3.014 3.014 0 0 1 2.4 1.2l2.1 2.8H14a3 3 0 0 1 3 3v8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"/>
                            </svg>
                            <span class="flex-1 ml-3 whitespace-nowrap">Libraries</span>
                        </div>
                    </li>
                    <li>
                        <div @click="goTo('assignments')" class="base group" :class="{'active': $route.name == 'assignments'}">
                            <svg class="flex-shrink-0 w-5 h-5 transition duration-75 group-hover dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="18" height="20" fill="none" viewBox="0 0 18 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 2h4a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h4m6 0v3H6V2m6 0a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1M5 5h8m-5 5h5m-8 0h.01M5 14h.01M8 14h5"/>
                            </svg>
                            <span class="flex-1 ml-3 whitespace-nowrap">Assignments</span>
                            <span class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
                        </div>
                    </li>
                    <div class="mt-5 mb-2 border-t border-purple-800"></div>
                    <li>
                        <div @click="goTo('messages')" class="base group" :class="{'active': $route.name == 'messages'}">
                            <svg class="flex-shrink-0 w-5 h-5 transition duration-75 group-hover dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                <path d="M18 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3.546l3.2 3.659a1 1 0 0 0 1.506 0L13.454 14H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-8 10H5a1 1 0 0 1 0-2h5a1 1 0 1 1 0 2Zm5-4H5a1 1 0 0 1 0-2h10a1 1 0 1 1 0 2Z"/>
                            </svg>
                            <span class="flex-1 ml-3 whitespace-nowrap">Messages</span>
                            <span class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
                        </div>
                    </li>
                    <li>
                        <div @click="goTo('notifications')" class="base group" :class="{'active': $route.name == 'notifications'}">
                            <svg class="flex-shrink-0 w-5 h-5 transition duration-75 group-hover dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 20">
                                <path d="M12.133 10.632v-1.8A5.406 5.406 0 0 0 7.979 3.57.946.946 0 0 0 8 3.464V1.1a1 1 0 0 0-2 0v2.364a.946.946 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C1.867 13.018 0 13.614 0 14.807 0 15.4 0 16 .538 16h12.924C14 16 14 15.4 14 14.807c0-1.193-1.867-1.789-1.867-4.175ZM3.823 17a3.453 3.453 0 0 0 6.354 0H3.823Z"/>
                            </svg>
                            <span class="flex-1 ml-3 whitespace-nowrap">Notifications</span>
                            <span class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
                        </div>
                    </li>
                </ul>
                <ul class="absolute bottom-0 left-0 right-0">
                    <li>
                        <div @click="goTo('overview')" class="base group" :class="{'active': $route.name == 'overview'}">
                            <svg class="flex-shrink-0 w-5 h-5 transition duration-75 group-hover dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 18">
                                <path d="M7 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm2 1H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
                            </svg>
                            <span class="flex-1 ml-3 whitespace-nowrap">Profile</span>
                        </div>
                    </li>
                    <li>
                        <div @click="goTo('settings')" class="base group" :class="{'active': $route.name == 'settings'}">
                            <svg class="flex-shrink-0 w-5 h-5 transition duration-75 group-hover dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                <path d="M19 11V9a1 1 0 0 0-1-1h-.757l-.707-1.707.535-.536a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0l-.536.535L12 2.757V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v.757l-1.707.707-.536-.535a1 1 0 0 0-1.414 0L2.929 4.343a1 1 0 0 0 0 1.414l.536.536L2.757 8H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.757l.707 1.707-.535.536a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l.536-.535L8 17.243V18a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-.757l1.707-.708.536.536a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-.535-.536.707-1.707H18a1 1 0 0 0 1-1Z"/>
                                <path d="M10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                                </g>
                            </svg>
                            <span class="flex-1 ml-3 whitespace-nowrap">Settings</span>
                        </div>
                    </li>
                    <li class="mt-2">
                        <div @click="logout" class="flex items-center p-4 font-semibold hover:bg-gray-100 dark:hover:bg-purple-500 text-gray-200 bg-gradient-to-r from-slate-800 hover:from-slate-700 to-purple-900 hover:to-purple-800 group">
                            <svg class="flex-shrink-0 w-5 h-5 transition duration-75 group-hover dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z"/>
                                <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z"/>
                                <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z"/>
                            </svg>
                            <span class="flex-1 ml-3 whitespace-nowrap">Logout</span>
                        </div>
                    </li>
                </ul>
            </div>
        </aside>
    </section>
</template>

<script>
    import { defineComponent, onMounted } from 'vue'
    import { initFlowbite } from 'flowbite';
    import { useRouter } from 'vue-router';
    import { useUserStore } from '../../../stores/userStore';

    export default defineComponent({
        name: 'lg sidebar',
        setup(){
            const router = useRouter()
            const store = useUserStore()

            const goTo = (routeName) => {
                router.push({name: routeName})
            }

            const logout = () => {
                store.logout().then(() => {
                    router.push({name: 'login'})
                })
            }

            onMounted(() => {
                initFlowbite()
            })

            return { goTo, logout }
        }
    })
</script>

<style scoped>
    .active{
        @apply bg-gray-100 dark:bg-purple-500 dark:text-white;
    }
    .base{
        @apply flex cursor-pointer items-center p-2 rounded-lg font-normal hover:bg-gray-100 dark:hover:bg-purple-500 dark:hover:text-white;
    }
</style>