<template>
  <div
    class="w-screen h-screen max-w-screen max-h-screen bg-primary-dark overflow-hidden"
  >
    <LoginBackEffects />
    <div class="flex justify-center items-center w-full h-full">
      <div class="flex items-center justify-center flex-col relative">
        <div class="flex flex-col py-20 px-10 bg-zinc-800/60 rounded-xl">
          <div class="flex mb-8 flex-col">
            <div class="flex justify-center items-center mb-8">
              <img
                src="/logo.png"
                width="128"
                class="select-none"
                draggable="false"
              />
            </div>

            <div class="flex flex-col">
              <span class="text-white font-bold text-3xl"
                >Welcome to NightBase</span
              >
              <span class="text-white font-light text-lg"
                >In order to continue please sign in</span
              >
            </div>
          </div>
          <div class="w-full">
            <form class="flex flex-col gap-y-5" autocomplete="off">
              <LoginInput
                placeholder="Username or Email"
                icon="material-symbols:person-2-rounded"
              />
              <LoginInput
                placeholder="Password"
                icon="uim:padlock"
                isPassword
              />
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
const username = ref("");
</script>
