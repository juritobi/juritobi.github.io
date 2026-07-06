import { computed } from "vue";
import rawPortfolio from "@/assets/portfolio.json";

function normalizeProject(project) {
  const display = project.display === true || project.display === "1";
  const highlightOrder =
    project.highlightOrder === null ? null : Number(project.highlightOrder);

  return {
    ...project,
    releaseYear: new Date(project.releaseDate).getFullYear(),
    display,
    highlightOrder,
  };
}

export function usePortfolioData() {
  const projects = computed(() => rawPortfolio.map(normalizeProject));
  const displayedProjects = computed(() =>
    projects.value.filter((project) => project.display),
  );

  const projectsByType = computed(() => ({
    games: displayedProjects.value.filter((project) => project.type === "game"),
    tools: displayedProjects.value.filter((project) => project.type === "tool"),
    apps: displayedProjects.value.filter((project) => project.type === "app"),
  }));

  const highlightedProjects = computed(() =>
    displayedProjects.value
      .filter((project) => project.highlightOrder !== null)
      .sort((first, second) => first.highlightOrder - second.highlightOrder),
  );

  const projectsBySlug = computed(() =>
    Object.fromEntries(
      displayedProjects.value.map((project) => [project.slug, project]),
    ),
  );

  function getProjectBySlug(slug) {
    return projectsBySlug.value[slug] ?? null;
  }

  return {
    projects,
    displayedProjects,
    projectsByType,
    highlightedProjects,
    getProjectBySlug,
  };
}
