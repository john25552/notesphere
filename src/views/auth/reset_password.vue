<template>
    <section class="h-full">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-full lg:py-0">
            <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                <img class="w-8 h-8 mr-2" src="" alt="logo">
                NoteSphere
            </a>
            <div class="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:bg-opacity-40 dark:border-gray-700 sm:p-8">
                <h2 class="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Change Password
                </h2>
                <form class="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input v-model="user.email" type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-opacity-20 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="">
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Password</label>
                        <input v-model="user.password" type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-opacity-20 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
                    </div>
                    <div>
                        <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                        <input v-model="criteria.c_password" type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-opacity-20 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
                    </div>
                    <button type="submit" class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Reset passwod</button>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
    import { useRouter } from 'vue-router'
    import { ref } from 'vue'

    export default {
        setup(){
            const router = useRouter()

            const user = ref({
                email: '',
                password: ''
            })
            const criteria = ref({
                c_password: ''
            })
            const errors = ref({
                shortPassword: false,
                unconfirmed: false,
                email: {
                    length: false,
                    valid: false
                }
            })

            const goTo = (routeName) => {
                router.push({name: routeName})
            }
            const validator = () => {
                if(!user.value.email.length){
                    errors.value.email = true
                    return
                } else {
                    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
                    if(!emailPattern.test(user.value.email)){
                        errors.value.email.valid = true
                        return
                    }
                }
                if(user.value.password.length >= 8){
                    if(user.value.password !== criteria.value.c_password){
                        errors.value.unconfirmed = true
                        return
                    }
                } else {
                    errors.value.shortPassword = true
                    return
                }
                resetPassword()
            }
            const resetPassword = () => {

            }

            return { goTo, validator, user, criteria }
        }
    }
</script>