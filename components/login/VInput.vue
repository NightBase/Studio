<template>
    <div class="flex items-center group justify-center rounded-full">
        <div class="flex py-1 px-3 w-96 bg-zinc-800 rounded-full gap-x-2">
            <Icon
                :name="icon"
                class="text-zinc-700 w-8 h-8 group-focus-within:text-violet-500/80 transition-colors duration-150"
            />
            <input
                v-model="inputValue"
                :type="inputType"
                :placeholder="placeholder"
                autoComplete="new-password"
                class="placeholder-zinc-600 text-white text-md p-1 ring-0 outline-none bg-zinc-800 w-full h-full"
                @input="emit('update:modelValue', inputValue)"
            />
            <button v-if="isPassword" type="button" @click="togglePassVisibility">
                <Icon :name="eyeIcon" class="text-zinc-700 w-8 h-8 transition-colors duration-150" />
            </button>
        </div>
    </div>
</template>
<script setup lang="ts">
const emit = defineEmits(['update:modelValue']);
const props = defineProps({
    placeholder: {
        type: String,
        required: true,
    },
    icon: {
        type: String,
        required: true,
    },
    textType: {
        type: String,
        required: false,
        default: 'text',
    },
    isPassword: {
        type: Boolean,
        required: false,
        default: false,
    },
});
const inputValue = ref('');

const passVisibility = ref(props.isPassword);
const eyeIcon = computed(() => {
    return passVisibility.value ? 'ph:eye' : 'ph:eye-closed';
});
function togglePassVisibility() {
    passVisibility.value = !passVisibility.value;
}
const inputType = computed(() => {
    if (!props.isPassword) {
        if (props.textType) return props.textType;
    }

    return passVisibility.value ? 'password' : 'text';
});
</script>

<style scoped>
@keyframes autofill {
    0%,
    100% {
        color: #fff;
        background: transparent;
    }
}

input:-webkit-autofill {
    -webkit-animation-delay: 1s; /* Safari support - any positive time runs instantly */
    -webkit-animation-name: autofill;
    -webkit-animation-fill-mode: both;
}
</style>
