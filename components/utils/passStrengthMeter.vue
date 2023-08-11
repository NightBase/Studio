<template>
  <div class="flex flex-col justify-center items-end gap-y-1">
    <div
      class="bg-zinc-900 border border-zinc-800 w-full h-3 rounded-full flex items-center"
    >
      <div
        class="bg-violet-500 h-2 rounded-full transition-all duration-300"
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
const props = defineProps({
  password: {
    type: String,
    required: true,
  },
});

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
  }
});

enum PasswordStrength {
  Weak = "Weak",
  Moderate = "Medium",
  Strong = "Strong!",
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

  if (
    hasLength &&
    hasLowercase &&
    hasUppercase &&
    hasNumber &&
    hasSpecialChar
  ) {
    return PasswordStrength.Strong;
  }

  if (hasLength && ((hasLowercase && hasUppercase) || hasSpecialChar)) {
    return PasswordStrength.Moderate;
  }

  return PasswordStrength.Weak;
}
</script>
