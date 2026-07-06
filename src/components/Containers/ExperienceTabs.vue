<script setup>
import TabsWrapper from "../TabsSystem/TabsWrapper.vue";
import TabItem from "../TabsSystem/TabItem.vue";
import { computed } from "vue";
import { useRouter } from "vue-router";
import ProjectCard from "@/components/Cards/ProjectCard.vue";
import MarkdownContent from "@/components/MarkdownContent.vue";
import { usePortfolioData } from "@/composables/usePortfolioData";
import { parseMarkdownSections } from "@/utils/markdown";

const projectMarkdownFiles = import.meta.glob("../../content/views/*.md", {
  as: "raw",
  eager: true,
});

const projectHighlights = Object.fromEntries(
  Object.entries(projectMarkdownFiles).map(([path, source]) => {
    const slug = path.match(/\/([^/]+)\.md$/)?.[1];
    return [slug, parseMarkdownSections(source).highlight ?? ""];
  }),
);

const router = useRouter();
const { projectsByType, highlightedProjects } = usePortfolioData();

const highlightedCards = computed(() =>
  highlightedProjects.value.map((project) => ({
    ...project,
    detailLink: router.hasRoute(project.slug) ? { name: project.slug } : null,
    highlightContent: projectHighlights[project.slug] ?? "",
  })),
);
</script>

<template>
  <TabsWrapper>
    <TabItem title="High Lights">
      <template v-slot:default>
        <ProjectCard
          v-for="project in highlightedCards"
          :key="project.slug"
          :showcase="true"
          :detail-link="project.detailLink"
          v-bind="project"
        >
          <template v-slot:default>
            <MarkdownContent
              v-if="project.highlightContent"
              :source="project.highlightContent"
            />
          </template>
        </ProjectCard>
        <p v-if="highlightedCards.length === 0" class="empty-state">
          No featured projects are configured.
        </p>
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

.empty-state {
  color: var(--light-gray);
  padding: 1rem;
  text-align: center;
}
</style>
