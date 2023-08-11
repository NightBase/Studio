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
<template>
  <div class="flex gap-x-5 items-center group">
    <div class="flex py-1 px-3 w-96 bg-zinc-800 rounded-full gap-x-2">
      <Icon
        :name="icon"
        class="text-zinc-700 w-8 h-8 group-focus-within:text-violet-500/80 transition-colors duration-150"
      />
      <input
        v-model="value"
        :type="inputType"
        :placeholder="placeholder"
        @input="emit('update:modelValue', value)"
        autocomplete="off"
        class="placeholder-zinc-600 text-white text-md p-1 ring-0 outline-none bg-zinc-800 w-full h-full"
      />
      <button v-if="isPassword" @click="togglePassVisibility" type="button">
        <Icon
          :name="eyeIcon"
          class="text-zinc-700 w-8 h-8 transition-colors duration-150"
        />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  placeholder: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  isPassword: {
    type: Boolean,
    required: false,
    default: false,
  },
  value: String,
});
const value = ref(props.value);

const passVisibility = ref(props.isPassword);
const eyeIcon = computed(() => {
  return passVisibility.value ? "ph:eye" : "ph:eye-closed";
});
function togglePassVisibility() {
  passVisibility.value = !passVisibility.value;
}
const inputType = computed(() => {
  return passVisibility.value ? "password" : "text";
});

const emit = defineEmits();
</script>
