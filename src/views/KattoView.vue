<script setup>
import MarkdownContent from "@/components/MarkdownContent.vue";
import DetailLayout from "@/components/layouts/DetailLayout.vue";
import SectionLayout from "@/components/layouts/SectionLayout.vue";
import kattoMarkdown from "@/content/views/katto.md?raw";
import { parseMarkdownSections } from "@/utils/markdown";

const kattoSections = parseMarkdownSections(kattoMarkdown);
</script>

<template>
  <DetailLayout
    title="Katto: Rising Tides"
    page="Katto"
    subtitle="Implementation details and decisions"
  >
    <MarkdownContent :source="kattoSections.intro" />
  </DetailLayout>

  <SectionLayout title="Final Boss" page="Final Boss">
    <div class="row">
      <div class="col-xl-6">
        <MarkdownContent :source="kattoSections['final-boss-left']" />
      </div>
      <img class="col-xl-6" src="/Boss.gif" alt="aaa" />
      <div>
        <MarkdownContent :source="kattoSections['final-boss-right']" />
      </div>
      <img class="col-xl-6" src="/PhaseBT.png" alt="aaa" />
      <div>
        <MarkdownContent :source="kattoSections['final-boss-wave']" />
      </div>
    </div>
  </SectionLayout>

  <SectionLayout title="Destructible objects" page="Destructibles">
    <div class="row">
      <div class="col-xl-6">
        <MarkdownContent :source="kattoSections['destructibles-left']" />
      </div>
      <img class="thin" src="/Destructibles.gif" alt="aaa" />
      <div>
        <MarkdownContent :source="kattoSections['destructibles-right']" />
      </div>
      <img class="" src="/destructible.png" alt="aaa" />
    </div>
  </SectionLayout>

  <SectionLayout title="Optimizations" page="Optimizations">
    <div class="row">
      <div>
        <MarkdownContent :source="kattoSections['optimizations-left']" />
      </div>
      <div class="col-xl-6">
        <MarkdownContent :source="kattoSections['optimizations-right']" />
      </div>
      <img class="col-xl-6 small toped" src="/Volumes.gif" alt="aaa" />
    </div>
  </SectionLayout>

  <SectionLayout title="Pickups and Coins" page="Pickups">
    <div class="row">
      <div class="col-xl-6">
        <MarkdownContent :source="kattoSections.pickups" />
      </div>
      <img class="col-xl-6 toped" src="/Coins.gif" alt="aaa" />
    </div>
  </SectionLayout>

  <SectionLayout title="NPC" page="NPC">
    <div class="row">
      <div class="col-xl-6">
        <MarkdownContent :source="kattoSections.npc" />
      </div>
      <img class="col-xl-6 small toped" src="/NPC.gif" alt="aaa" />
    </div>
  </SectionLayout>
</template>

<style scoped>
img {
  object-fit: contain;
}

.thin {
  max-height: 400px;
  width: 100%;
  object-fit: cover;
  object-position: 50% 25%;
}

.small {
  max-height: 350px;
}

.toped {
  align-self: start;
}
</style>
