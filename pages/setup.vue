<template>
    <div class="w-screen h-screen max-w-screen max-h-screen bg-primary-dark overflow-hidden">
        <LoginBackEffects />
        <div class="flex justify-center items-center w-full h-full">
            <div class="flex items-center justify-center flex-col relative">
                <div class="flex flex-col py-20 px-10 bg-zinc-800/60 rounded-xl">
                    <div class="flex mb-3 flex-col">
                        <div class="flex justify-center items-center mb-8">
                            <img src="/logo.png" width="128" class="select-none" draggable="false" />
                        </div>

                        <div class="flex flex-col">
                            <span class="text-white font-bold text-3xl">Welcome to Setup</span>
                            <span class="text-white font-light text-lg">Please register root user</span>
                        </div>
                    </div>
                    <div class="mb-3">
                        <span v-if="errorVisibility" class="text-red-500 text-xs">
                            {{ errorText }}
                        </span>
                    </div>
                    <div class="w-full">
                        <form class="flex flex-col gap-y-5" autocomplete="off" @submit.prevent="register">
                            <LoginVInput
                                v-model="username"
                                placeholder="Username"
                                icon="material-symbols:person-2-rounded"
                            />
                            <LoginVInput
                                v-model="email"
                                text-type="email"
                                placeholder="Email"
                                icon="material-symbols:mail"
                            />
                            <LoginVInput v-model="password" placeholder="Password" icon="uim:padlock" is-password />
                            <div class="gap-y-3 flex flex-col">
                                <LoginVInput
                                    v-model="password2"
                                    placeholder="Re Enter Password"
                                    icon="uim:padlock"
                                    is-password
                                />
                                <UtilsPassStrengthMeter
                                    v-if="meterVisibility"
                                    v-model="passStrength"
                                    :password="password2"
                                />
                            </div>

                            <button
                                type="submit"
                                class="mt-5 bg-violet-500 hover:bg-violet-600 text-white font-bold py-2 rounded-full"
                            >
                                Register
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
const email = ref('');
const password = ref('');
const password2 = ref('');

const errorText = ref('');
const errorVisibility = ref(false);

const passStrength = ref('Weak');
const meterVisibility = computed(() => {
    return password2.value.length > 3;
});

watch([password, password2], (newVal) => {
    if (newVal[0].length < 8 && newVal[0].length) {
        errorVisibility.value = false;
        passStrength.value = 'Weak';
        return;
    }
    if (password.value !== password2.value && (password.value.length > 3 || password2.value.length > 3)) {
        errorVisibility.value = true;
        errorText.value = 'Passwords do not match';
    } else {
        errorVisibility.value = false;
        passStrength.value = 'Weak';
    }
});

function register() {
    errorVisibility.value = false;
    if (passStrength.value === 'Weak') {
        errorVisibility.value = true;
        errorText.value = 'Password is not strong enough';
    }
}
</script>
