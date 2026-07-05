import { computed } from "vue";
import rawPortfolio from "@/assets/portfolio.json";

function normalizeProject(project) {
  const display = project.display === true || project.display === "1";
  const highlight = project.highlight === true || project.highlight === "1";

  return {
    ...project,
    releaseYear: new Date(project.releaseDate).getFullYear(),
    display,
    highlight,
  };
}

export function usePortfolioData() {
  const projects = computed(() => rawPortfolio.map(normalizeProject));
  const displayedProjects = computed(() =>
    projects.value.filter((project) => project.display),
  );

  const projectsByType = computed(() => ({
    games: displayedProjects.value.filter((project) => project.type === "0"),
    tools: displayedProjects.value.filter((project) => project.type === "1"),
    apps: displayedProjects.value.filter((project) => project.type === "2"),
  }));

  const projectMap = computed(() =>
    Object.fromEntries(displayedProjects.value.map((project) => [project.id, project])),
  );

  function getProjectById(id) {
    return projectMap.value[id] ?? null;
  }

  return {
    projects,
    displayedProjects,
    projectsByType,
    getProjectById,
  };
}
