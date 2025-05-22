<script lang="ts" setup>
import HomeIcon1 from '@/components/icons/HomeIcon1.vue'
// import ProfileIcon1 from '@/components/icons/ProfileIcon1.vue'
import PowerIcon1 from '@/components/icons/PowerIcon1.vue'
import ChatIcon2 from '@/components/icons/ChatIcon2.vue'
import CogIcon1 from '@/components/icons/CogIcon1.vue'
</script>

<template>
  <div class="flex w-full h-screen font-jetbrains">
    <div
      class="left flex grow-0 flex-col bg-amber-100 dark:bg-gray-800 dark:text-white px-0.5 py-1 h-full"
    >
      <div class="centre flex flex-col my-auto px-0.5 py-4 rounded-full">
        <div class="home-btn rounded-full hover:bg-slate-900 p-2 hover:cursor-pointer">
          <HomeIcon1 class="w-6 h-6" />
        </div>
        <div class="chart-btn rounded-full hover:bg-slate-900 p-2 hover:cursor-pointer">
          <ChatIcon2 class="w-6 h-6" />
        </div>
        <div class="setting-btn rounded-full hover:bg-slate-900 p-2 hover:cursor-pointer">
          <CogIcon1 class="w-6 h-6" />
        </div>
      </div>
      <div class="bottom mx-auto flex flex-col gap-4">
        <div
          class="w-8 h-8 overflow-hidden flex items-center justify-center profile rounded-full border-2 border-white hover:border-green-500"
        >
          <!-- <ProfileIcon1 class="" /> -->
          <img
            class="aspect-square"
            :src="'https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'"
            alt="user profile pic"
          />
        </div>
        <div class="log-out p-1 mb-2 hover:cursor-pointer">
          <PowerIcon1 class="w-6 h-6" />
        </div>
      </div>
    </div>
    <div class="right w-full">
      <slot />
    </div>
  </div>
</template>
