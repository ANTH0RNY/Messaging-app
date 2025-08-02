<template>
  <div class="w-full flex flex-col dark:bg-gray-900 dark:text-white">
    <MessageNav :profileUrl="profileURL" :lastSeen="lastSeen" :username="username" />
    <div class="overflow-y-scroll no-scroll border border-black dark:bg-gray-900 w-full">
      <MessageCard v-for="mess in messages" :key="mess.messageId" :message="mess" :isLeft="randomizeLocation()"
        :showProfile="false" />
    </div>
    <MessageInput />
  </div>
</template>
<script lang="ts" setup>
import MessageCard from './MessageCard.vue';
import MessageNav from "@components/MessageNav.vue"
import MessageInput from "@components/MessageInput.vue"

import { messages } from '@/utils/messages';
const profileURL = "https://images.unsplash.com/photo-1743875929006-803ea54cafc1?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
const username = "Jane Doe"
const lastSeen = "last seen yesterday"

function randomizeLocation() {
  const modulator = 2;
  const random_number = Math.floor(Math.random() * modulator)
  return random_number === 0;
}
</script>
