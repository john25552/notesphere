<template>
    <section class="h-full overflow-x-hidden">
        <div ref="toolbar" class="h-full relative overflow-hidden">
            <!-- drawer component -->
            <div id="font-drawer" class="absolute top-16 right-0 z-40 h-full p-4 overflow-y-auto transition-transform translate-x-full bg-white w-80 dark:bg-slate-800 dark:bg-opacity-50 bg-opacity-50 border-l border-slate-700" tabindex="-1" aria-labelledby="drawer-right-label">
                <h5 id="drawer-right-label" class="mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">
                    Editing tools
                </h5>
                <button type="button" data-drawer-hide="font-drawer" aria-controls="font-drawer" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white" >
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close menu</span>
                </button>
                <div>
                    <div>
                        <h5 class="mb-2 text-base font-semibold text-gray-500 dark:text-gray-400">
                            Text format
                        </h5>
                        <div class="grid gap-2 grid-cols-3">
                            <button class="ql-bold p-1 px-2 focus:outline-none bg-slate-900 bg-opacity-25 rounded-lg">
                                Bold
                            </button>
                            <button class="ql-italic p-1 px-2.5 focus:outline-none bg-slate-900 bg-opacity-25 rounded-lg">
                                Italic
                            </button>
                            <button class="ql-underline p-1 px-2 focus:outline-none bg-slate-900 bg-opacity-25 rounded-lg">
                                Underline
                            </button>
                            <button class="ql-strike col-span-2 p-1 px-2 focus:outline-none bg-slate-900 bg-opacity-25 rounded-lg">
                                Strike through
                            </button>
                        </div>
                    </div>
                    <div class="mt-2">
                        <h5 class="mb-2 text-base font-semibold text-gray-500 dark:text-gray-400">
                            Text alignment
                        </h5>
                        <div class="grid gap-2 grid-cols-3">
                            <button class="ql-align p-1 focus:outline-none bg-slate-900 bg-opacity-25 rounded-lg" value="">Left</button>
                            <button class="ql-align p-1 focus:outline-none bg-slate-900 bg-opacity-25 rounded-lg" value="center">Center</button>
                            <button class="ql-align p-1 focus:outline-none bg-slate-900 bg-opacity-25 rounded-lg" value="right">Right</button>
                        </div>
                    </div>
                    <div class="mt-2">
                        <h5 class="mb-2 text-base font-semibold text-gray-500 dark:text-gray-400">
                            Fonts
                        </h5>
                        <div class="space-x-3">
                            <select class="ql-size focus:outline-none dark:bg-purple-800 dark:bg-opacity-25 bg-opacity-25 text-white p-2 rounded-lg">
                                <option value="small">Small</option>
                                <option value="" selected>Normal</option>
                                <option value="large">Large</option>
                                <option value="huge">Huge</option>
                            </select>
                            <select class="ql-font focus:outline-none dark:bg-purple-800 dark:bg-opacity-25 bg-opacity-25 text-white p-2 rounded-lg">
                                <option value="" selected>Normal</option>
                                <option v-for="(family, index) in families" :key="index" :value="family" class="capitalize">{{ family }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="flex space-x-3 mt-2">
                        <div>
                            <span class="ql-color ql-picker ql-color-picker ql-expanded">
                                <span class="ql-picker-label" tabindex="0" role="button" aria-controls="ql-picker-options-2" aria-expanded="true">Font color</span>
                                <span class="ql-picker-options hidden" id="ql-picker-options-2" tabindex="-1" aria-hidden="false">
                                    <span tabindex="0" role="button" class="ql-picker-item"></span>
                                    <span v-for="(color, index) in colors" :key="index" tabindex="0" role="button" :data-value="color" class="ql-picker-item p-2"></span>
                                </span>
                            </span>
                            <select class="ql-color focus:outline-none bg-slate-800 bg-opacity-25 text-white p-2 rounded-lg">
                                <option value="" selected>None</option>
                                <option v-for="(color, index) in colors" :key="index" :value="color" class="text-transparent hover:text-transparent" :style="'background-color:' + color + ';'">{{ color }}</option>
                            </select>
                        </div>
                        <div>
                            <span class="ql-background ql-picker ql-color-picker ql-expanded">
                                <span class="ql-picker-label" tabindex="0" role="button" aria-controls="ql-picker-options-2" aria-expanded="true">Higlighter</span>
                                <span class="ql-picker-options hidden" id="ql-picker-options-2" tabindex="-1" aria-hidden="false">
                                    <span tabindex="0" role="button" class="ql-picker-item"></span>
                                    <span v-for="(color, index) in colors" :key="index" tabindex="0" role="button" :data-value="color" class="ql-picker-item p-2"></span>
                                </span>
                            </span>
                            <select class="ql-background focus:outline-none bg-slate-800 bg-opacity-25 text-white p-2 rounded-lg">
                                <option value="">None</option>
                                <option v-for="(color, index) in colors" :key="index" :value="color" class="text-transparent hover:text-transparent" :style="'background-color:' + color + ';'">{{ color }}</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex items-center space-x-2 bg-purple-800 bg-opacity-25 h-[10%] px-3 shadow">
                <!-- File navigation -->
                <div>
                    <button id="fileDropdown" data-dropdown-toggle="dropdownFile" data-dropdown-delay="500" data-dropdown-trigger="hover" class="dark:bg-slate-800 dark:bg-opacity-25 bg-opacity-25 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center " type="button">
                        File
                    </button>
                    <div id="dropdownFile" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-slate-800 dark:bg-opacity-25">
                        <ul class="py-2 text-sm" aria-labelledby="fileDropdown">
                            <li>
                                <span class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gradient-to-r from-slate-800 to-purple-700 dark:hover:bg-opacity-60 dark:hover:text-white">Dashboard</span>
                            </li>
                            <li>
                                <span class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gradient-to-r from-slate-800 to-purple-700 dark:hover:bg-opacity-60 dark:hover:text-white">Settings</span>
                            </li>
                            <li>
                                <span class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gradient-to-r from-slate-800 to-purple-700 dark:hover:bg-opacity-60 dark:hover:text-white">Earnings</span>
                            </li>
                            <li>
                                <span class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gradient-to-r from-slate-800 to-purple-700 dark:hover:bg-opacity-60 dark:hover:text-white">Sign out</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Edit options -->
                <div>
                    <button data-drawer-target="font-drawer" data-drawer-show="font-drawer" data-drawer-placement="right" aria-controls="font-drawer" class="dark:bg-slate-800 dark:bg-opacity-25 bg-opacity-25 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center " type="button">
                        Edit
                    </button>
                </div>

                <div class="p-1.5 flex justify-center w-[40%] items-center border border-slate-800 border-opacity-50 bg-slate-800 bg-opacity-30 rounded-lg">
                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                    Search notes, libraries...
                </div>

                <!-- List buttons -->
                <button class="ql-list focus:outline-none" value="ordered">ol</button>
                <button class="ql-list focus:outline-none" value="bullet">ul</button>
                <!-- Indentation buttons -->
                <button class="ql-indent focus:outline-none" value="-1">ind L</button>
                <button class="ql-indent focus:outline-none" value="+1">ind R</button>
                <!-- Quote button -->
                <button class="ql-blockquote focus:outline-none">blq</button>
                <!-- Code block button -->
                <button class="ql-code-block focus:outline-none">c-blo</button>
                <!-- Link and image buttons -->
                <button class="ql-link focus:outline-none">link</button>
                <button class="ql-image focus:outline-none">img</button>
                <!-- Video button -->
                <button class="ql-video focus:outline-none">Vid</button>
                <!-- Formula button -->
                <button class="ql-formula focus:outline-none">formula</button>
                <!-- Clear formatting button -->
                <button class="ql-clean focus:outline-none">Clean</button>
            </div>
            <div ref="editor" class="h-[90%] overflow-y-auto p-2 bg-purple-900 bg-opacity-25 max-w-full"></div>
        </div>
    </section>
</template>

<script>
    import Quill from 'quill'
    import 'quill/dist/quill.snow.css';
    import { defineComponent, onMounted, ref } from 'vue'
    import { initFlowbite } from 'flowbite'

    export default defineComponent({
        setup(){
            const editor = ref(null)
            const toolbar = ref(null)

            const families = [ 'serif', 'monospace']
            const styles = [
                "bold",
                "italic",
                "underline",
                "strikethrough",
                "superscript",
                "Subscript",
                "Font Color",
                "Background Color",
                "Font Size",
                "Alignment"
            ]
            const colors = []
            
            for (let i = 0; i < 300; i++) {
                const hex = `#${i.toString(16).padStart(6, '0')}`;
                colors.push(hex);
            }

            onMounted(() => {
                if(editor.value){
                    new Quill(editor.value, {
                        modules: {
                            toolbar: toolbar.value
                        }
                    })
                }
                initFlowbite()
            })

            return { editor, toolbar, families, colors }
        }
    })

</script>

<style>

</style>