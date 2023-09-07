<template>
    <section class="grid grid-cols-12 h-full">
        <div class="col-span-3 border-r border-r-slate-900 h-full p-2">
            <div class="flex justify-between">
                <h3 class="font-bold text-xl">Notes</h3>
                <div class="flex-grow flex justify-end items-end space-x-2">
                    <svg data-modal-target="create-modal" data-modal-toggle="create-modal" class="w-5 h-5 text-gray-800 dark:text-gray-400 focus:outline-none border-0" data-tooltip-target="tooltip-create" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                        <path d="M12.687 14.408a3.01 3.01 0 0 1-1.533.821l-3.566.713a3 3 0 0 1-3.53-3.53l.713-3.566a3.01 3.01 0 0 1 .821-1.533L10.905 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V11.1l-3.313 3.308Zm5.53-9.065.546-.546a2.518 2.518 0 0 0 0-3.56 2.576 2.576 0 0 0-3.559 0l-.547.547 3.56 3.56Z"/>
                        <path d="M13.243 3.2 7.359 9.081a.5.5 0 0 0-.136.256L6.51 12.9a.5.5 0 0 0 .59.59l3.566-.713a.5.5 0 0 0 .255-.136L16.8 6.757 13.243 3.2Z"/>
                    </svg>
                    <div id="tooltip-create" role="tooltip" class="absolute z-10 invisible inline-block px-2 py-1 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gradient-to-br to-purple-800 via-slate-800 from-slate-900">
                        Create notes
                    </div>
                    <svg class="w-5 h-5 text-gray-800 dark:text-gray-400" id="dropdownButton" data-dropdown-toggle="dropdownFilter" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                        <path d="M18.85 1.1A1.99 1.99 0 0 0 17.063 0H2.937a2 2 0 0 0-1.566 3.242L6.99 9.868 7 14a1 1 0 0 0 .4.8l4 3A1 1 0 0 0 13 17l.01-7.134 5.66-6.676a1.99 1.99 0 0 0 .18-2.09Z"/>
                    </svg>
                    <div id="create-modal" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                        <div class="relative w-full max-w-md max-h-full">
                            <!-- Modal content -->
                            <div class="relative bg-white rounded-lg shadow dark:bg-gradient-to-br from-purple-800 via-purple-950 to-purple-900 bg">
                                <button ref="hideForm" type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="create-modal">
                                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                    </svg>
                                    <span class="sr-only">Close modal</span>
                                </button>
                                <div class="px-6 py-6 lg:px-8">
                                    <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Create Notes</h3>
                                    <form @submit="create" class="space-y-6" action="#">
                                        <div>
                                            <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Notes title</label>
                                            <input v-model="note.title" type="text" name="title" id="title" class="border border-purple-300 text-sm rounded-lg focus:border-purple-900 block w-full p-2.5 dark:bg-transparent dark:border-purple-950 dark:placeholder-gray-400" placeholder="Task title" required>
                                        </div>
                                        <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-700 dark:hover:bg-purple-800">Create</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div id="dropdownFilter" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gradient-to-br to-purple-800 from-slate-900 dark:divide-gray-600">
                        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownButton">
                            <li>
                                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                            </li>
                            <li>
                                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                            </li>
                            <li>
                                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                            </li>
                        </ul>
                        <div class="py-2">
                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Separated link</a>
                        </div>
                    </div>

                </div>
            </div>
            
            <form class="mt-3">   
                <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-400">Search</label>
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="search" id="default-search" class="block w-full pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:border-purple-800 dark:bg-transparent dark:border-purple-700 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:border-purple-700" placeholder="Search notes...">
                </div>
            </form>

            <div v-if="notes.length" class="space-x-2 mt-4">
                <article @click="$router.push({name: 'editor'})" v-for="(note, index) in notes" :key="index" class="flex justify-between items-start space-x-2 p-2 rounded-lg dark:bg-slate-900 hover:dark:bg-purple-900 dark:bg-opacity-30 ">
                    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-purple-600 rounded-full">
                    <div class="flex items-start justify-between flex-grow">
                        <div class="flex flex-col space-y-1">
                            <label for="default-checkbox" class="text-sm font-medium text-gray-900 dark:text-gray-300">Note Title</label>
                            <span class="bg-purple-100 text-purple-800 text-sm mr-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:bg-opacity-40 dark:text-purple-300">Label</span>
                        </div>
                        <div class="flex flex-col space-y-1 items-end">
                            <span>Mon</span>
                            <span>16, Aug</span>
                        </div>
                    </div>
                </article>
            </div>
            <div v-else class="mt-4 p-2 bg-gray-400 bg-opacity-30 text-gray-100">
                You have no notes yet, Create to preview here!
            </div>
        </div>
        <div class="col-span-9 h-full">
            <div v-if="previewMode" class="h-full">

            </div>
            <div v-else class="flex flex-col items-center justify-center h-full">
                <div>
                    <img src="" alt="ns logo">
                </div>
                <p class="font-semibold text-xl text-white">NoteSphere</p>
                <p>Your Immediate Notes Partner</p>
            </div>
        </div>
    </section>
</template>

<script>
    import { ref, onMounted } from 'vue';
    import { initFlowbite } from 'flowbite';

    export default{
        setup(){
            const notes = ref([])
            const previewMode = ref(false)
            const note = ref({
                title: ''
            })
            const hideForm = ref(null)

            const create = () => {
                const data = new FormData()
                data.append('title', note.value)
                data.forEach(value => {
                    notes.value.push(note.value)
                })
                note.value = {title: ''}
                hideForm.value.click()
            }

            onMounted(() => {
                initFlowbite()
            })
            return { notes, previewMode, create, note, hideForm }
        }
    }
</script>