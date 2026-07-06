<script setup>
import MarkdownContent from "@/components/MarkdownContent.vue";
import SectionLayout from "@/components/layouts/SectionLayout.vue";
import DetailLayout from "@/components/layouts/DetailLayout.vue";
import copperfieldMarkdown from "@/content/views/copperfield.md?raw";
import { parseMarkdownSections } from "@/utils/markdown";

const copperfieldSections = parseMarkdownSections(copperfieldMarkdown);
</script>

<template>
  <DetailLayout
    title="Copperfield Engine"
    page="Copperfield"
    subtitle="Implementation details and decisions"
  >
    <MarkdownContent :source="copperfieldSections.intro" />
  </DetailLayout>
  <SectionLayout title="Entity Component System" page="ECS">
    <MarkdownContent :source="copperfieldSections.ecs" />
  </SectionLayout>
  <SectionLayout title="Physics" page="Physics">
    <MarkdownContent :source="copperfieldSections.physics" />
  </SectionLayout>
  <SectionLayout title="Rendering" page="Rendering">
    <MarkdownContent :source="copperfieldSections.rendering" />
  </SectionLayout>
  <SectionLayout title="Input" page="Input">
    <MarkdownContent :source="copperfieldSections.input" />
  </SectionLayout>
</template>
