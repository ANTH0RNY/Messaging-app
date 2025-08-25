<template>
  <div class="dark:text-white flex items-center gap-2 px-2" :class="`${!showProfile ? 'py-2' : 'pt-5 pb-5'}`">

    <div v-if="showProfile && isLeft" class="profile w-fit mb-auto mt-[-1rem] hover:cursor-pointer">
      <span class="bg-slate-200 w-8 h-8 flex items-center justify-center overflow-hidden rounded-full p-[1px]">
        <img v-if="message.sender.profilePhotoUrl" :src="message.sender.profilePhotoUrl"
          class="rounded-full w-full h-full" :alt="`${message.sender.username} profile picture.`" />
      </span>
    </div>

    <div class="body p-4 max-w-6/12"
      :class="`${isLeft ? 'mt-auto rounded-b-xl rounded-tr-xl bg-slate-900' : 'rounded-t-xl ml-auto rounded-bl-xl bg-emerald-900 mb-auto'}`">
      <p>
        {{ message.body }}
      </p>
      <p>

      </p>
    </div>

    <div v-if="showProfile && !isLeft" class="profile w-fit mt-auto mb-[-1rem]">
      <span class="bg-slate-200 w-8 h-8 flex items-center justify-center overflow-hidden rounded-full p-[1px]">
        <img v-if="message.sender.profilePhotoUrl" :src="message.sender.profilePhotoUrl"
          class="rounded-full w-full h-full" :alt="`${message.sender.username} profile picture.`" />
      </span>
    </div>
  </div>
</template>
<script setup lang="ts">
import { type MessageType } from '@/utils/messages'
const { message, isLeft = false, showProfile = true } = defineProps<{
  message: MessageType,
  isLeft?: bool,
  showProfile?: bool
}>()
</script>
