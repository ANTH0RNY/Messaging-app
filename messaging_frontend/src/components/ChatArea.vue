<template>
  <div class="h-full flex flex-col gap-2 dark:text-white bg-amber-100 dark:bg-slate-900">
    <div class="header flex gap-1 px-2 items-center flex-col">
      <h2 class="flex items-end px-0.5 font-bold text-2xl py-0.5 w-full h-full">
        Chats
      </h2>
      <!-- <MenuIcon1 class="w-8 h-8" /> -->
      <span class="bg-slate-500 mx-4  rounded flex w-full">
        <!-- <SearchIcon class="" /> -->
        <input type="text" placeholder="Search" class="w-full py-1 ps-2 focus:outline-0 focus:border-0" />
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
