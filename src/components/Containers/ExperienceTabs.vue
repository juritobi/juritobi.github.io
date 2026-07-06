<script setup>
import TabsWrapper from "../TabsSystem/TabsWrapper.vue";
import TabItem from "../TabsSystem/TabItem.vue";
import { computed } from "vue";
import ProjectCard from "@/components/Cards/ProjectCard.vue";
import MarkdownContent from "@/components/MarkdownContent.vue";
import { usePortfolioData } from "@/composables/usePortfolioData";
import kattoHighlightsMarkdown from "@/content/experience-tabs/katto-highlights.md?raw";
import copperfieldHighlightsMarkdown from "@/content/experience-tabs/copperfield-highlights.md?raw";

const { projectsByType, getProjectById } = usePortfolioData();

//TODO: use hiighlighted instead of IDs
const kattoProject = computed(() => getProjectById("14"));
const copperfieldProject = computed(() => getProjectById("15"));
</script>

<template>
  <TabsWrapper>
    <TabItem title="High Lights">
      <template v-slot:default>
        <ProjectCard
          v-if="kattoProject"
          :showcase="true"
          detail-link="/katto"
          v-bind="kattoProject"
        >
          <template v-slot:default>
            <MarkdownContent :source="kattoHighlightsMarkdown" />
          </template>
        </ProjectCard>
        <ProjectCard
          v-if="copperfieldProject"
          :showcase="true"
          detail-link="/copperfield"
          v-bind="copperfieldProject"
        >
          <template v-slot:default>
            <MarkdownContent :source="copperfieldHighlightsMarkdown" />
          </template>
        </ProjectCard>
      </template>
    </TabItem>
    <TabItem title="Games">
      <template v-for="project in projectsByType.games" :key="project.id">
        <ProjectCard v-bind="project" />
      </template>
    </TabItem>
    <TabItem title="Tools and Demos">
      <template v-for="project in projectsByType.tools" :key="project.id">
        <ProjectCard v-bind="project" />
      </template>
    </TabItem>
    <TabItem title="Apps">
      <template v-for="project in projectsByType.apps" :key="project.id">
        <ProjectCard v-bind="project" />
      </template>
    </TabItem>
  </TabsWrapper>
</template>

<style scoped>
li {
  list-style: outside disc;
}
</style>
