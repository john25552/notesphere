<template>
    <section class="h-full">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-full lg:py-0">
            <div @click="goTo('signup')" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                <img class="w-8 h-8 mr-2" src="" alt="logo">
                NoteSphere
            </div>
            <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:bg-opacity-40 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Create and account
                    </h1>
                    <form @submit="validator" class="space-y-4 md:space-y-6 bg-opacity-40" action="#" enctype="multipart/form-data">
                        <div>
                            <label for="email" class="label">Your email</label>
                            <input v-model="user.email" type="email" name="email" id="email" class="formElement" placeholder="name@company.com" required="">
                        </div>
                        <div>
                            <label for="password" class="label">Password</label>
                            <input v-model="user.password" type="password" name="password" id="password" placeholder="••••••••" class="formElement" required="">
                        </div>
                        <div>
                            <label for="confirm-password" class="label">Confirm password</label>
                            <input v-model="criteria.c_password" type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" class="formElement" required="">
                        </div>
                        <div class="flex items-start">
                            <div class="flex items-center h-5">
                                <input v-model="criteria.terms" id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required="">
                            </div>
                            <div class="ml-3 text-sm">
                                <label for="terms" class="font-light text-gray-500 dark:text-gray-300">I accept the <a class="font-medium text-blue-600 hover:underline dark:text-blue-500" href="#">Terms and Conditions</a></label>
                            </div>
                        </div>
                        <button @click.prevent="validator" type="submit" class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create an account</button>
                        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                            Already have an account? <span @click="goTo('login')" class="font-medium cursor-pointer text-blue-600 hover:underline dark:text-blue-500">Login here</span>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import { useRouter } from 'vue-router'
    import { ref } from 'vue'
    import { useUserStore } from '../../stores/userStore'

    export default {
        setup(){
            const router = useRouter()
            const store = useUserStore()

            const user = ref({
                email: '',
                password: ''
            })
            const criteria = ref({
                terms: null,
                c_password: ''
            })
            const errors = ref({
                shortPassword: false,
                unconfirmed: false,
                policy: false,
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
                if(!criteria.value.terms){
                    errors.value.policy = true
                    return
                }

                signup()
            }
            const signup = () => {
                const data = new FormData()
                data.append('emailAddress', user.value.email)
                data.append('password', user.value.password)
                store.signup(data).then(() => router.push({name: 'dashboard'}))
            }

            return { goTo, validator, user, criteria }
        }
    }
</script>

<style>
    .label{
        @apply block mb-2 text-sm font-medium text-gray-900 dark:text-white;
    }
    .formElement{
        @apply bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-opacity-20 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500;
    }
</style>