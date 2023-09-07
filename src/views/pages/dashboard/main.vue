<template>
    <section class="h-full overflow-y-auto pb-4"> 
        <div class="h-[45%] relative">
            <div class="absolute top-0 bottom-0 w-full z-10">
                <img src="/images/profile.jpg" alt="" class="h-full w-full object-cover">
            </div>
            <div class="bg-black bg-opacity-20 absolute top-0 bottom-0 w-full z-20">
                <div class="text-white max-w-5xl mx-auto h-full font-semibold text-3xl space-y-2 flex flex-col justify-center">
                    <div>{{ greeting() }}, {{ user.user.user.fullName }}</div>
                    <div class="text-lg font-normal">{{ today.day }}, {{ today.date }} {{ today.month }}</div>
                </div>
            </div>
        </div>
        <div class="h-[55%] relative">
            <div class="absolute -top-20 bottom-0 z-30 w-full ">
                <div class="max-w-5xl overflow-y-auto p-8 mx-auto shadow-lg rounded-lg space-y-6 bg-gradient-to-br from-purple-800 via-purple-900 to-purple-950">
                    <div class="flex justify-between">
                        <span class="capitalize font-bold text-2xl flex space-x-2 items-end">
                            <span>
                                Quick tips
                            </span>
                            <svg class="w-6 h-6 text-gray-800 dark:text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 20">
                                <path d="M9.092 18h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2Zm-2-18a7.009 7.009 0 0 0-7 7 7.8 7.8 0 0 0 2.219 5.123c.956 1.195 1.781 2.228 1.781 3.877a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1c0-1.7.822-2.7 1.774-3.868A7.63 7.63 0 0 0 14.092 7a7.009 7.009 0 0 0-7-7Zm0 5a2 2 0 0 0-2 2 1 1 0 0 1-2 0 4 4 0 0 1 4-4 1 1 0 0 1 0 2Z"/>
                            </svg>
                        </span>
                        <span>
                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
                            <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
                        </svg>
                        </span>
                    </div>
                    <div class="grid grid-cols-3 gap-8">
                        <article class="border border-gray-500 rounded-lg p-4 space-y-2">
                            <div class="flex justify-between">
                                <span>
                                    <svg class="w-6 h-6 text-gray-800 dark:text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 12.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"/>
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 3h-2l-.447-.894A2 2 0 0 0 12.764 1H7.236a2 2 0 0 0-1.789 1.106L5 3H3a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V5a2 2 0 0 0-2-2Z"/>
                                    </svg>
                                </span>
                                <span>
                                    <svg class="w-6 h-6 text-gray-800 dark:text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                    </svg>
                                </span>
                            </div>
                            <div class="flex flex-col space-y-1">
                                <span class="font-semibold line-through">Scan with your camera.</span>
                                <span>Turn your old notes into digital.</span>
                            </div>
                        </article>
                    </div>
                </div>
                <div class="mt-8 max-w-5xl mx-auto bg-purple-900 bg-opacity-30 p-4 rounded-lg">
                    <h5 class="text-2xl font-bold">Storage Usage</h5>
                    <div class="w-full bg-transparent rounded-lg p-4 md:p-6">
                        <div class="flex justify-between">
                            <div>
                                <h5 class="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">32.4GB</h5>
                            </div>
                            <div class="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 dark:text-green-500 text-center">
                                12%
                                <svg class="w-3 h-3 ml-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13V1m0 0L1 5m4-4 4 4"/>
                                </svg>
                            </div>
                        </div>
                        <apexchart width="100%" height="100%" :options="options" :series="series" type="area"></apexchart>
                        <div class="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
                            <div class="flex justify-between items-center pt-5">
                            <!-- Button -->
                                <button id="dropdownDefaultButton" data-dropdown-toggle="lastDaysdropdown" data-dropdown-placement="bottom" class="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 text-center inline-flex items-center dark:hover:text-white" type="button">
                                    Last 7 days
                                    <svg class="w-2.5 m-2.5 ml-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                                    </svg>
                                </button>
                                <!-- Dropdown menu -->
                                <div id="lastDaysdropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                        <li>
                                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Yesterday</a>
                                        </li>
                                        <li>
                                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Today</a>
                                        </li>
                                        <li>
                                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last 7 days</a>
                                        </li>
                                        <li>
                                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last 30 days</a>
                                        </li>
                                        <li>
                                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last 90 days</a>
                                        </li>
                                    </ul>
                                </div>
                                <a href="#" class="uppercase text-sm font-semibold inline-flex items-center rounded-lg text-blue-600 hover:text-blue-700 dark:hover:text-blue-500  hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 px-3 py-2">
                                    Storage Report
                                    <svg class="w-2.5 h-2.5 ml-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import { useUserStore } from '../../../stores/userStore';
    import { ref, onMounted } from 'vue';
    import VueApexCharts from 'vue3-apexcharts'
    import { initFlowbite } from 'flowbite'


    export default {
        components: {
            apexchart: VueApexCharts
        },
        setup(){
            const user = useUserStore()

            const months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
            const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat']

            const now = new Date()
            const today = {
                day: days[now.getDay()],
                month: months[now.getMonth()],
                date: now.getDate()
            }
            const greeting = () => {
                const hr = now.getHours()
                let word;

                if(hr > 0 && hr < 12){
                    word = 'Good morning'
                } else if(hr < 3){
                    word = 'Good afternoon'
                }

                return word
            }

            const series = [
                    {name: "Space Used",data: [6500, 6418, 6456, 6526, 6356, 6456],color: "#1A56DB",},
                ]
            let options = {
                chart: {
                    fontFamily: "Inter, sans-serif",
                    dropShadow: {enabled: false},
                    toolbar: { show: false },
                },
                tooltip: {
                    enabled: true,
                    x: {
                    show: false,
                    },
                },
                fill: {
                    type: "gradient",
                    gradient: {
                    opacityFrom: 0.55,
                    opacityTo: 0,
                    shade: "#1C64F2",
                    gradientToColors: ["#1C64F2"],
                    },
                },
                dataLabels: {enabled: false},
                stroke: {
                    width: 6,
                },
                grid: {
                    show: false,
                    strokeDashArray: 4,
                    padding: {
                    left: 2,
                    right: 2,
                    top: 0
                    },
                },
                xaxis: {
                    categories: ['23 August', '24 August', '25 August', '26 August', '27 August', '28 August', '29 August'],
                    labels: {
                    show: false,
                    },
                    axisBorder: {
                    show: false,
                    },
                    axisTicks: {
                    show: false,
                    },
                },
                yaxis: {
                    show: false,
                },
            }

            onMounted(() => {
                initFlowbite()
            })

            return { options, series, user, today, greeting }
        }
    }
</script>