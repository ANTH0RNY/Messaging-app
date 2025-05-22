<template>
  <div class="dark:text-white flex my-4 gap-2 border border-white pt-4">
    <div class="body border border-white p-4 rounded-t-lg">
      <p>
        {{ message.body }}
      </p>
    </div>
    <div class="profile w-fit mt-auto">
      <span
        class="bg-slate-200 w-8 h-8 flex items-center justify-center overflow-hidden rounded-full p-[1px]"
      >
        <img
          v-if="message.sender.profilePhotoUrl"
          :src="message.sender.profilePhotoUrl"
          class="rounded-full w-full h-full"
          :alt="`${message.sender.username} profile picture.`"
        />
      </span>
    </div>
  </div>
</template>
<script setup lang="ts">
import { type MessageType } from '@/utils/messages'
const { message } = defineProps<{ message: MessageType }>()
</script>
