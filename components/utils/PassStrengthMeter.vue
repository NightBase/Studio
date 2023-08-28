<template>
    <div class="flex flex-col justify-center items-end gap-y-1">
        <div
            class="bg-zinc-900 w-full h-3 rounded-full flex relative items-center"
            :class="strength === 'Super Strong!!' ? 'purple-glow' : ''"
        >
            <div
                class="h-full rounded-full transition-all duration-300 absolute"
                :class="strength === 'Super Strong!!' ? 'super-strong' : ''"
                :style="{
                    width: `${strengthPercent}%`,
                    backgroundColor: strengthColor,
                }"
            ></div>
        </div>
        <span class="text-xs font-medium" :style="{ color: strengthColor }">{{ strength }} </span>
    </div>
</template>

<script setup lang="ts">
enum PasswordStrength {
    Weak = 'Weak',
    Moderate = 'Medium',
    Strong = 'Strong!',
    SuperStrong = 'Super Strong!!',
}

const emit = defineEmits(['update:modelValue']);
const props = defineProps({
    password: {
        type: String,
        required: true,
    },
});

watch(
    () => props.password,
    () => {
        emit('update:modelValue', strength.value);
    }
);

const strength = computed(() => {
    if (props.password.length < 8) return 'Weak';
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
    if (props.password.length < 8) return '#fc4c5d';
    const passwordStrength = checkPasswordStrength(props.password);
    switch (passwordStrength) {
        case PasswordStrength.Weak:
            return '#fc4c5d';
        case PasswordStrength.Moderate:
            return '#fcf14c';
        case PasswordStrength.Strong:
            return '#81fc4c';
        case PasswordStrength.SuperStrong:
            return '#d36af3';
    }
});

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
    if (hasLength && hasLowercase && hasUppercase && hasNumber && hasSpecialChar) {
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

<style scoped lang="scss">
$bg-url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABxCAMAAABSkVXkAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAIFQTFRFAAAA////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Xd8iUwAAACt0Uk5TABL9/4jQkP4eUGCg4QGAMDh478Cw+AdoSCDgEFjIKEBw9wiYuNio7QKpEXVm9FgAAAGLSURBVHic7dlZbsJAEEVRGzODmW3mME/Z/wKD8pv7c9XYIol7AUcpqx7V1Ymi54lryc9Tj8RpANAwQBOAVlsAHQCSrgDwI/RMDfQR+qkABlTDUAAjAsYCSCcATAUQzQDIcgHMqYaFAJYENE0NKwDCu3ktAOzmjQDWLQBUN28BWBkAu/lDADsC9gLIqZtnpgbq5omJ9J5qGAlgSMBAAGkfABXpHgCHowC6VIOJdJu6WUW6kAFViwUQHOn4AICK9BSAKtJJFenvU0U6eUWkOwLAO+fJ1FDMlF4KACM9F8CRftdUpM8AVJF+nszcOTHSppuLifTFABRp1c0LAswamWcAXE0NNKVvdwGMqQazRmI37wWAa2TwlL6ZAYVr5E4AuEaaSOMauTUARVqtkRuqIXhAVZFOXhBpNaDeNNJnART0MvTLIn0C4A3unOVGuk41BN85TaTxzllupIMfezHS5T72XgEod40Mf+y9APAGa6R6GQr+18VfWCNvAPy3l6E7fQQ1oB70J3wKoOA18gvwXizr2/1dOgAAAABJRU5ErkJggg==';

.purple-glow::before {
    content: ' ';
    display: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 9999px;
    animation: box-glow 1s ease-in-out infinite alternate;
}
.super-strong {
    overflow: hidden;
}
.super-strong::before {
    content: '';
    width: 100%;
    height: 100%;
    display: block;
    background-image: url($bg-url);
    background-size: 40px;
    opacity: 0.4;
    object-fit: cover;
    animation: bg-move 0.3s infinite linear;
    overflow: hidden;
}
@keyframes bg-move {
    0% {
        background-position: 0 0;
    }
    100% {
        background-position: 40px 0px;
    }
}
@keyframes box-glow {
    0% {
        opacity: 0.6;
        -webkit-box-shadow: 0px 0px 38px 2px rgba(220, 130, 250, 1);
        -moz-box-shadow: 0px 0px 38px 2px rgba(220, 130, 250, 1);
        box-shadow: 0px 0px 38px 2px rgba(220, 130, 250, 1);
    }
    100% {
        opacity: 0.2;
        -webkit-box-shadow: 0px 0px 23px 2px rgba(220, 130, 250, 1);
        -moz-box-shadow: 0px 0px 23px 2px rgba(220, 130, 250, 1);
        box-shadow: 0px 0px 23px 2px rgba(220, 130, 250, 1);
    }
}
</style>
