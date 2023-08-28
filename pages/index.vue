<template>
    <div class="w-screen h-screen max-w-screen max-h-screen bg-primary-dark overflow-hidden">
        <LoginBackEffects />
        <div class="flex justify-center items-center w-full h-full">
            <div class="flex items-center justify-center flex-col relative">
                <div class="flex flex-col py-20 px-10 w-[465px] bg-zinc-800/60 rounded-xl">
                    <div
                        class="flex flex-col"
                        :style="{
                            'margin-bottom': errorVisible ? '1rem' : '2rem',
                        }"
                    >
                        <div class="flex justify-center items-center mb-8">
                            <img src="/logo.png" width="128" class="select-none" draggable="false" />
                        </div>

                        <div class="flex flex-col">
                            <span class="text-white font-bold text-3xl">Welcome to NightBase</span>
                            <span class="text-white font-light text-lg">In order to continue please sign in</span>
                            <span v-if="errorVisible === true" class="text-center mt-3 text-red-500">{{
                                errorMessage
                            }}</span>
                        </div>
                    </div>
                    <div class="w-full">
                        <form class="flex flex-col gap-y-5" autocomplete="off" @submit.prevent="handleLogin">
                            <LoginVInput
                                v-model="username"
                                placeholder="Username or Email"
                                icon="material-symbols:person-2-rounded"
                            />
                            <LoginVInput v-model="password" placeholder="Password" icon="uim:padlock" is-password />
                            <button
                                type="submit"
                                class="mt-5 bg-violet-500 hover:bg-violet-600 text-white font-bold py-2 rounded-full"
                            >
                                Sign in
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const username = ref('');
const password = ref('');

const errorVisible = ref(false);
const errorMessage = ref('');

const { login } = useStudioAuth();

async function handleLogin() {
    try {
        await login(username.value, password.value);
    } catch (error: any) {
        errorVisible.value = true;
        errorMessage.value = error.message;
        setTimeout(() => {
            errorVisible.value = false;
        }, 3000);
    }
}
</script>
