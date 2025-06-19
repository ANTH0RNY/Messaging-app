<template>
  <div class="h-full flex flex-col gap-2 dark:text-white bg-amber-100 dark:bg-slate-900">
    <div class="header flex gap-1 px-2 py-4 items-center justify-evenly">
      <!-- <h2 class="border border-black flex items-end px-0.5 font-bold text-lg py-0">Charts</h2> -->
      <!-- <MenuIcon1 class="w-8 h-8" /> -->
      <span class="bg-slate-500 py-1 pe-3 ps-2  rounded-full items-center justify-center flex">
        <SearchIcon class="" />
        <input type="text" placeholder="Search" class="rounded-full ps-1 w-fit focus:outline-0 focus:border-0" />
      </span>
    </div>
    <div class="no-scroll charts flex flex-col gap-2 px-2 overflow-y-scroll">
      <ChatCard v-for="(item, idx) in chatItems" :key="idx" :profile-photo-url="item.profilePhotoUrl"
        :contact-name="item.contactName" :last-msg="item.lastMsg" :number-of-unread-msg="item.numberOfUnreadMsg"
        :last-msg-date="item.lastMsgDate" />
    </div>
  </div>
</template>
<script setup lang="ts">
import ChatCard from './ChatCard.vue'
import SearchIcon from './icons/SearchIcon.vue'
import { chatItems } from '@/utils/chat'
// import MenuIcon1 from './icons/MenuIcon1.vue'
</script>
