<template>
    <section class="grid grid-cols-12 h-full">
        <div class="col-span-3 border-r border-r-slate-900 h-full">
            <div v-if="chats.length" class="space-x-2">
                <article class="p-2 rounded-md flex justify-between items-center space-x-2">
                    <div class="rounded-full overflow-hidden h-10 w-10">
                        <img src="" alt="" class="object-cover h-full w-full">
                    </div>
                    <div class="flex-grow flex justify-between items-center">
                        <div class="flex flex-col justify-between">
                            <span>Chat Title</span>
                            <span>Last message</span>
                        </div>
                        <div>
                            <span>21:10</span>
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
    import { ref } from 'vue';

    export default{
        setup(){
            const chats = ref([])
            const previewMode = ref(false)

            return { chats, previewMode }
        }
    }
</script>