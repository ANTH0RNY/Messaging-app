<template>
  <div class="flex items-center py-1 px-2 dark:bg-gray-900">
    <div class="flex items-center gap-2">
      <div class="flex items-center justify-center w-15 h-15 rounded-full overflow-hidden">
        <img v-if="profileUrl" :src="profileUrl" :alt="`${username} profile picture`">
        <ProfileIcon1 v-else class="w-8/12 h-8/12" />
      </div>
      <div class="flex flex-col gap-0">
        <p class="font-bold p-0 text-lg m-0">{{ username }}</p>
        <p class="font-lighter text-xs m-0 p-0">{{ lastSeen }}</p>
      </div>
    </div>
    <div class="flex items-center ml-auto gap-4">
      <PhoneIcon1 class="hover:cursor-pointer hover:bg-gray-700 rounded-full p-2 box-content" />
      <SearchIcon class="hover:cursor-pointer hover:bg-gray-700 rounded-full p-2 box-content" />
      <MenuDotIcon1 class="hover:cursor-pointer hover:bg-gray-700 rounded-full p-2 box-content" />
    </div>
  </div>
</template>
<script setup lang="ts">
import PhoneIcon1 from "@icons/PhoneIcon1.vue"
import SearchIcon from "@icons/SearchIcon.vue"
import MenuDotIcon1 from "@icons/MenuDotIcon1.vue"
import ProfileIcon1 from "@icons/ProfileIcon1.vue"

interface PropType {
  profileUrl?: string
  username: string,
  lastSeen: string,
}
const { profileUrl, username, lastSeen } = defineProps<PropType>();
</script>
