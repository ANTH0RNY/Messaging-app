<template>
  <div class="border border-white px-4 py-2 flex items-center gap-4">
    <PlusIcon1 class="flex-none border border-white w-10 h-10 p-0" />
    <textarea rows="1" ref="message-textarea-ref"
      class="text-base/1 border border-white py-1 px-2 text-lg rounded grow no-scroll flex items-center"
      v-model="messageText" />
    <SendIcon1 class="flex-none border border-white w-10 h-10 p-0" />
  </div>
</template>
<script setup lang="ts">
import { ref, useTemplateRef, onMounted, watch } from "vue"
import PlusIcon1 from "@components/icons/PlusIcon1.vue"
import SendIcon1 from "@components/icons/SendIcon1.vue"

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
