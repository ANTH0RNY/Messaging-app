<template>
  <div class="px-2 py-1 flex items-center gap-4 bg-slate-900">
    <PlusIcon2 class="flex-none w-10 h-10 p-0 rounded-full" />
    <textarea rows="1" ref="message-textarea-ref" class="line-height1 py-2 px-2 text-lg rounded grow no-scroll flex
      items-center bg-white/20 rounded-lg resize-none focus:outline-none focus:border
      focus:border-white" v-model="messageText" id="undo-text-lg" />
    <SendIcon2 class="flex-none w-12 h-12 p-0 text-green-400" />
  </div>
</template>
<script setup lang="ts">
import { ref, useTemplateRef, onMounted, watch } from "vue"
import PlusIcon2 from "@components/icons/PlusIcon2.vue"
import SendIcon2 from "@components/icons/SendIcon2.vue"

const messageTextarea = useTemplateRef<HTMLTextAreaElement>("message-textarea-ref")
const messageText = ref("")

onMounted(() => {
  messageTextarea.value.focus()
})

const countNewLine = (val: string) => {
  let count = 0;
  for (let i = 0; i < val.length; i++) {
    if (val[i] === '\n')
      count++
  }
  return count
}

watch(messageText, () => {
  // console.log(countNewLine(messageText.value))
  const count = countNewLine(messageText.value)
  messageTextarea.value.rows = count < 1 ? 1 : count + 1;
})
</script>
