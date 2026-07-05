import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import rawExperience from "@/assets/db.json";

const ROLE_STYLES = {
  Studies: {
    color: "#ff9704",
    markerClass: "markerTop",
    yPos: "-55px",
  },
  "Game Development": {
    color: "#dd3d01",
    markerClass: "markerTop",
    yPos: "-75px",
  },
  "Web Development": {
    color: "#56c2f3",
    markerClass: "markerBot",
    yPos: "20px",
  },
  default: {
    color: "#c2e34e",
    markerClass: "markerBot",
    yPos: "50px",
  },
};

const GROUPS = [
  {
    id: "GameDev",
    title: "Game Development",
    icon: "gamepad",
    color: "#dd3d01",
  },
  {
    id: "Studies",
    title: "Studies",
    icon: "graduation-cap",
    color: "#ff9704",
  },
  {
    id: "Web",
    title: "Web Development",
    icon: ["fab", "html5"],
    color: "#56c2f3",
  },
  {
    id: "Other",
    title: "Other",
    icon: "pencil",
    color: "#c2e34e",
  },
];

function getRoleStyle(role) {
  return ROLE_STYLES[role] ?? ROLE_STYLES.default;
}

function getExperienceGroupItems(groupTitle) {
  if (groupTitle !== "Other") {
    return rawExperience.filter((item) => item.Role === groupTitle);
  }

  return rawExperience.filter(
    (item) =>
      item.Role !== "Game Development" &&
      item.Role !== "Studies" &&
      item.Role !== "Web Development",
  );
}

export function useExperienceData(containerRef) {
  const firstDate = rawExperience.reduce((earliest, item) => {
    const currentStart = new Date(item.start);
    return currentStart < earliest ? currentStart : earliest;
  }, new Date(rawExperience[0]?.start));
  const finalYear = new Date().getFullYear() + 1;
  const containerWidth = ref(900);

  const years = computed(() => finalYear - firstDate.getFullYear());
  const monthSize = computed(() => containerWidth.value / years.value / 12);
  const yearSize = computed(() => containerWidth.value / years.value);

  function measureContainer() {
    const width = containerRef?.value?.clientWidth;

    if (width) {
      containerWidth.value = width;
    }
  }

  const timelineItems = computed(() =>
    rawExperience.map((item) => {
      const end = item.end ? new Date(item.end) : new Date();
      const start = new Date(item.start);
      const style = getRoleStyle(item.Role);
      const lengthInMonths =
        (end.getFullYear() - start.getFullYear()) * 12 -
        start.getMonth() +
        end.getMonth();

      return {
        ...item,
        length: lengthInMonths * monthSize.value,
        tlStart:
          ((start.getFullYear() - firstDate.getFullYear()) * 12 +
            start.getMonth()) *
          monthSize.value,
        ...style,
      };
    }),
  );

  const experienceGroups = computed(() =>
    GROUPS.map((group) => ({
      ...group,
      items: getExperienceGroupItems(group.title),
    })),
  );

  onMounted(() => {
    measureContainer();
    window.addEventListener("resize", measureContainer);
  });

  onBeforeUnmount(() => {
    window.removeEventListener("resize", measureContainer);
  });

  return {
    firstDate,
    years,
    monthSize,
    yearSize,
    timelineItems,
    experienceGroups,
    measureContainer,
  };
}
