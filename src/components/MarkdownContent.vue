<script setup>
import { computed } from "vue";
import { renderMarkdown } from "@/utils/markdown";

const props = defineProps({
  source: {
    type: String,
    default: "",
  },
});

const html = computed(() => renderMarkdown(props.source));
</script>

<template>
  <div class="markdown-content" v-html="html"></div>
</template>

<style scoped>
.markdown-content :deep(p) {
  margin: 0;
  padding: 0 0 0.8rem 0;
}

.markdown-content :deep(h3),
.markdown-content :deep(h4) {
  margin: 0;
}

.markdown-content :deep(ul) {
  margin: 0;
  padding-left: 1.5rem;
}

.markdown-content :deep(li) {
  list-style: outside disc;
}

.markdown-content :deep(.challenge) {
  position: relative;
  width: fit-content;
  padding-top: 1rem;
}

.markdown-content :deep(.challenge::after) {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: var(--highlight);
  border-radius: 5px;
}
</style>
