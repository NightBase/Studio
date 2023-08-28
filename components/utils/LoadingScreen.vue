<template>
    <div class="bg-zinc-900 w-screen h-screen overflow-hidden flex justify-center items-center">
        <img src="/logo.png" class="w-64 loading-animation" />
    </div>
</template>
<style scoped>
.loading-animation {
    animation: loading 1s infinite ease-in-out alternate;
}
@keyframes loading {
    0% {
        opacity: 0.5;
    }
    100% {
        opacity: 1;
    }
}
</style>
