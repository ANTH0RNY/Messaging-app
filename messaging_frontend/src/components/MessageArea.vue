<template>
  <div class="overflow-y-scroll no-scroll border border-black dark:bg-gray-900 w-full">
    <MessageCard v-for="mess in messages" :key="mess.messageId" :message="mess"/>
  </div>
</template>
<script lang="ts" setup>
import MessageCard from './MessageCard.vue';
import { messages } from '@/utils/messages';
</script>
