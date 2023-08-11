<template>
  <div class="flex flex-col justify-center items-end gap-y-1">
    <div
      class="bg-zinc-900 border border-zinc-800 w-full h-3 rounded-full flex items-center"
    >
      <div
        class="h-2 rounded-full transition-all duration-300"
        :style="{
          width: `${strengthPercent}%`,
          backgroundColor: strengthColor,
        }"
      ></div>
    </div>
    <span class="text-xs font-medium" :style="{ color: strengthColor }"
      >{{ strength }}
    </span>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits();
const props = defineProps({
  password: {
    type: String,
    required: true,
  },
});

watch(
  () => props.password,
  () => {
    emit("update:modelValue", strength.value);
  }
);

const strength = computed(() => {
  if (props.password.length < 8) return "Weak";
  const passwordStrength = checkPasswordStrength(props.password);
  return passwordStrength;
});

const strengthPercent = computed(() => {
  if (props.password.length < 8) return 0;
  const passwordStrength = checkPasswordStrength(props.password);
  switch (passwordStrength) {
    case PasswordStrength.Weak:
      return 20;
    case PasswordStrength.Moderate:
      return 66;
    case PasswordStrength.Strong:
      return 100;
  }
});

const strengthColor = computed(() => {
  if (props.password.length < 8) return "#fc4c5d";
  const passwordStrength = checkPasswordStrength(props.password);
  switch (passwordStrength) {
    case PasswordStrength.Weak:
      return "#fc4c5d";
    case PasswordStrength.Moderate:
      return "#fcf14c";
    case PasswordStrength.Strong:
      return "#81fc4c";
    case PasswordStrength.SuperStrong:
      return "#4cfcf1";
  }
});

enum PasswordStrength {
  Weak = "Weak",
  Moderate = "Medium",
  Strong = "Strong!",
  SuperStrong = "Super Strong!!",
}

function checkPasswordStrength(password: string): PasswordStrength {
  const lengthRegex = /.{8,}/;
  const lowercaseRegex = /[a-z]/;
  const uppercaseRegex = /[A-Z]/;
  const numberRegex = /[0-9]/;
  const specialCharRegex = /[!@#$%^&*()_+[\]{};':"\\|,.<>?/~`\-=/]/;

  const hasLength = lengthRegex.test(password);
  const hasLowercase = lowercaseRegex.test(password);
  const hasUppercase = uppercaseRegex.test(password);
  const hasNumber = numberRegex.test(password);
  const hasSpecialChar = specialCharRegex.test(password);

  let strength = PasswordStrength.Weak;
  if (
    hasLength &&
    hasLowercase &&
    hasUppercase &&
    hasNumber &&
    hasSpecialChar
  ) {
    strength = PasswordStrength.Strong;
  } else if (hasLength && ((hasLowercase && hasUppercase) || hasSpecialChar)) {
    strength = PasswordStrength.Moderate;
  }
  if (strength === PasswordStrength.Strong && password.length > 20) {
    strength = PasswordStrength.SuperStrong;
  }

  return strength;
}
</script>
