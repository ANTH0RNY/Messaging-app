<script setup lang="ts">
import BaseLayout from '@/layout/BaseLayout.vue'
import ChatArea from '@/components/ChatArea.vue'
import MessageArea from '@/components/MessageArea.vue';
</script>

<template>
  <main>
    <BaseLayout>
      <div class="flex w-full h-full">
        <ChatArea />
        <MessageArea/>
      </div>
    </BaseLayout>
  </main>
</template>
