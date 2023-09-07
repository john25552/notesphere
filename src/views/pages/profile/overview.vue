<template>
    <section class="overview-container grid pl-4 h-full">
        <div class="aside h-full mr-2">
            <div class="flex flex-col items-center space-y-4 h-[21%]">
                <div class="h-[5rem] w-[5rem] rounded-lg overflow-hidden">
                    <img src="/images/profile.jpg" alt="" class="h-full w-full object-cover">
                </div>
                <div>
                    <div v-if="!isEditing" @click="startEditing" class="font-bold text-lg">{{ content }}</div>
                    <input v-else ref="editInput" class="bg-transparent focus:outline-none border-0" :value="content" @blur="stopEditing" @input="updateContent" @keydown.enter="stopEditing" />
                </div>
            </div>
            <div class="h-[79%]">
                <div class="space-y-2 h-[60%] mb-1.5">
                    <h5 class="font-semibold text-md">Details</h5>
                    <div class="space-x-2">
                        <span class="text-gray-300 text-sm">Email:</span>
                        <span class="text-blue-500">{{ user.user.email }}</span>
                    </div>
                    <div class="space-x-2">
                        <span class="text-gray-300 text-sm">Phone:</span>
                        <span class="text-blue-500">+256706337924</span>
                    </div>
                    <div class="space-x-2">
                        <span class="text-gray-300 text-sm">D.O.B:</span>
                        <span>22<sup>nd</sup>/12/2023</span>
                    </div>
                    <div class="space-x-2">
                        <span class="text-gray-300 text-sm">Address:</span>
                        <span>K'la 24th Street Mwanje Road</span>
                    </div>
                    <div class="flex flex-col space-y-2">
                        <span class="text-gray-300">Bio</span>
                        <p class="text-sm p-1.5 bg-slate-900 bg-opacity-40 rounded-lg">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Tempore fugiat reiciendis itaque delectus aspernatur iure 
                            quis alias veritatis. Temporibus, eius aperiam.
                        </p>
                    </div>
                </div>
                <div class="flex flex-col space-y-2 h-[40%]">
                    <div class="space-x-4 items-center flex h-[12%]">
                        <span class="text-gray-300">Labels</span>
                        <svg class="w-3.5 h-3.5 text-blue-500 cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                        </svg>
                    </div>
                    <div class="flex flex-wrap space-x-2 max-h-[88%] overflow-auto">
                        <div class="text-sm py-1 px-2 bg-purple-900 bg-opacity-30 rounded-full">Personal</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="main h-full border-t border-l rounded-tl-md p-4 border-purple-700 border-opacity-20 dark:bg-slate-900 dark:bg-opacity-20 bg-opacity-20">
            <div>
                <div class="flex justify-between">
                    <span class="font-semibold text-lg">Latest</span>
                    <span class="text-blue-500">See more</span>
                </div>
                <div class="mt-2 space-y-2">
                    <div class="flex justify-between items-center p-2 rounded-lg dark:bg-slate-900 dark:bg-opacity-30 ">
                        <div class="flex items-center">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-purple-600 rounded-full dark:border-purple-600">
                            <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Notes 1 title</label>
                        </div>
                        <span class="bg-purple-100 text-purple-800 text-sm mr-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:bg-opacity-40 dark:text-purple-300">Mon, 16 Aug</span>
                    </div>
                    <div class="flex justify-between items-center p-2 rounded-lg dark:bg-slate-900 dark:bg-opacity-30 ">
                        <div class="flex items-center">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-purple-600 rounded-full dark:border-purple-600">
                            <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Notes 2 title</label>
                        </div>
                        <span class="bg-purple-100 text-purple-800 text-sm mr-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:bg-opacity-40 dark:text-purple-300">Mon, 16 Aug</span>
                    </div>
                    <div class="flex justify-between items-center p-2 rounded-lg dark:bg-slate-900 dark:bg-opacity-30 ">
                        <div class="flex items-center">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-purple-600 rounded-full dark:border-purple-600">
                            <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Notes 3 title</label>
                        </div>
                        <span class="bg-purple-100 text-purple-800 text-sm mr-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:bg-opacity-40 dark:text-purple-300">Mon, 16 Aug</span>
                    </div>
                </div>
            </div>
            <div class="mt-2">
                <span class="font-semibold text-lg">Pinned</span>
                <div class="mt-2 grid grid-cols-3 gap-4">
                    <div class="max-w-sm p-3 bg-white rounded-lg shadow dark:bg-gradient-to-r to-blue-600 via-purple-800 from-gray-800">
                        <svg class="w-5 h-5 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"/>
                        </svg>
                        <h5 class="mt-6 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">Need a help in Claim</h5>
                        <span>Submitted on {{  }}</span>
                    </div>
                    <div class="max-w-sm p-3 bg-white rounded-lg shadow dark:bg-gradient-to-r from-blue-700 via-purple-900 to-gray-800">
                        <svg class="w-5 h-5 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"/>
                        </svg>
                        <h5 class="mt-6 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">Need a help in Claim</h5>
                        <span>Submitted on {{  }}</span>
                    </div>
                    <div class="max-w-sm p-3 bg-white rounded-lg shadow dark:bg-gradient-to-r to-blue-600 via-purple-800 from-gray-800">
                        <svg class="w-5 h-5 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"/>
                        </svg>
                        <h5 class="mt-6 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">Need a help in Claim</h5>
                        <span>Submitted on {{  }}</span>
                    </div>
                </div>
            </div>
            <div class="mt-2">
                <span class="font-semibold text-lg">Latest acivity</span>
                <ol class="ml-3 mt-2 relative border-l border-gray-200 dark:border-purple-500 dark:border-opacity-30">                  
                    <li class="mb-8 ml-6">            
                        <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-4 dark:bg-blue-900">
                            <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                            </svg>
                        </span>
                        <p class="mb-2 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar</p>
                        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on January 13th, 2022</time>
                    </li>
                    <li class="mb-8 ml-6">            
                        <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-4 dark:bg-blue-900">
                            <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                            </svg>
                        </span>
                        <p class="mb-2 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar</p>
                        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on January 13th, 2022</time>
                    </li>
                    <li class="mb-8 ml-6">            
                        <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-4 dark:bg-blue-900">
                            <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                            </svg>
                        </span>
                        <p class="mb-2 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar</p>
                        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on January 13th, 2022</time>
                    </li>
                </ol>
            </div>
        </div>
    </section>
</template>

<script>
    import { ref, nextTick } from 'vue'
    import { computed, onMounted } from 'vue'
    import { useUserStore } from '../../../stores/userStore'

    export default {
        setup(){
            const store = useUserStore()
            const user = computed(() => {
                return store.user
            })

            const isEditing = ref(false)
            const content = ref(user.value.user.email)
            const tempContent = ref("")
            const editInput = ref(null)

            const startEditing = () => {
                isEditing.value = true;
                tempContent.value = content.value;
                nextTick(() => {
                    editInput.value.focus();
                });
            }

            const updateContent = (event) => {
                tempContent.value = event.target.value;
                user.value.user.fullName = event.target.value
            }

            const stopEditing = () => {
                isEditing.value = false;
                content.value = tempContent.value
            }

            onMounted(() => {
              if(user.value.user.fullName.length > 1){
                content.value = user.value.user.fullName
              }  
            })

            return {isEditing, content, editInput, user, startEditing, updateContent,  stopEditing}
        }
    }
</script>

<style scoped>
    .overview-container{
        grid-template-columns: 30% 70%;
        grid-template-rows: 100%;
        grid-template-areas: "aside main";
    }
    .main{
        grid-area: main;
    }
    .aside{
        grid-area: aside;
    }
</style>