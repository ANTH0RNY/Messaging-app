<template>
  <div
    class="chart-card hover:bg-gray-700 bg-gray-800 dark:text-white custom-shadow-4 hover:cursor-pointer hover:custom-shadow-5 w-full flex gap-2 px-2 py-1 items-center rounded-xl"
  >
    <div
      class="image bg-slate-500 w-16 h-16 flex items-center justify-center rounded-full overflow-hidden"
    >
      <div class="flex items-center justify-center w-15 h-15 rounded-full overflow-hidden">
        <template v-if="profilePhotoUrl">
          <img
            :src="profilePhotoUrl"
            :alt="`${contactName} profile picture`"
            class="aspect-square"
          />
        </template>
        <template v-else>
          <ProfileIcon1 class="w-8/12 h-8/12" />
        </template>
      </div>
    </div>
    <div class="body">
      <p>{{ contactName }}</p>
      <p>
        {{ truncateMsg(lastMsg) }}
      </p>
    </div>
    <div class="meta-data flex ms-auto flex-col text-xs justify-between gap-2 mb-auto h-10/12">
      <p class="">{{ formatDate(lastMsgDate) }}</p>
      <p
        v-if="numberOfUnreadMsg"
        class="ms-auto rounded-full bg-green-500 w-6 h-6 text-center flex items-center justify-center"
      >
        {{ numberOfUnreadMsg }}
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { type ChatType } from '@/utils/chat'
import ProfileIcon1 from './icons/ProfileIcon1.vue'

const { profilePhotoUrl, contactName, lastMsg, numberOfUnreadMsg, lastMsgDate } =
  defineProps<ChatType>()
// const imageURL =
//   'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

function formatDate(inputDate: Date): string {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

  const day = inputDate.getDay()
  const date = inputDate.getDate()
  const month = inputDate.getMonth()
  const year = inputDate.getFullYear()

  const today = new Date()
  // const todayDay = today.getDay()
  const todayDate = today.getDate()
  const todayMonth = today.getMonth()
  const todayYear = today.getFullYear()

  if (todayDate === date && month === todayMonth && year === todayYear) {
    return [
      inputDate.toLocaleTimeString().split(':').splice(0, 2).join(':'),
      inputDate.toLocaleTimeString().split(' ')[1],
    ].join('')
  } else if (todayDate === date + 1 && month === todayMonth && year === todayYear) {
    return 'Yesterday'
  } else if (year === todayYear) {
    return `${weekdays[day]} ${date}/${months[month].slice(0, 3)}`
  } else {
    return `${date}/${months[month].slice(0, 3)}/${year}`
  }
}
function truncateMsg(text: string) {
  const maximumTextLength = 20
  if (text.length < maximumTextLength) return text

  return `${text.slice(0, maximumTextLength)}...`
}
</script>
