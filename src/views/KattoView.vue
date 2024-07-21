<script setup>
import DetailLayout from "@/components/layouts/DetailLayout.vue";
import SectionLayout from "@/components/layouts/SectionLayout.vue";
</script>

<template>
  <DetailLayout
    p-title="Katto: Rising Tides"
    p-data="Katto"
    p-subtitle="Implementation details and decisions"
  >
    <p>
      The game was developed using Unreal Engine 5 and programmed with C++.
      There are a few small functions and classes that were done with
      blueprints, which were mostly made towards the end of development when we
      needed to rush small details. We always kept in mind that whatever we
      coded should be as usable as possible for our designers and artists.
    </p>
    <p>
      During the development, aside from my assigned programming tasks, I played
      a leadership role, acting as a communication bridge between programmers
      and non-programmers. I also frequently found myself helping artists import
      and organize assets in the engine and with version control. Additionally,
      I assisted programmers with referencing and using functions and classes
      created by others.
    </p>
  </DetailLayout>
  <SectionLayout p-title="Final Boss" p-data="Final Boss">
    <h3>Behaviour</h3>
    <p>
      The boss has 5 attacks: shots with his crossbow, hits on the ground that
      generate waves, a combo that mixes the previous two attacks, a tail swipe
      that hits if you are near, and a charge. This charge is the main attack,
      in which the boss will launch towards the player. If the player avoids it,
      the boss can crash into a pillar, which will stun him for a while. While
      stunned, the player can jump on him to deal damage and advance to the next
      phase.
    </p>
    <p>
      Each phase modifies the attacks that can be performed and sometimes the
      speed and size of them. The first phase is just a charge attack towards a
      pillar (used as a tutorial). The second only uses crossbow attacks, the
      third uses waves, the fourth uses combos, and the last uses all of the
      attacks with slight variations. At any point, a melee attack is performed
      if the player is near.
    </p>
    <h3 class="pt-4">Challenges</h3>
    <h4 class="challenge pt-0">Deadline-Driven Refactoring</h4>
    <p>
      At the beginning, all of the code for the boss, including internal
      variables and attacks, was in the same class. This was fine at the start,
      but most of the boss was completed in the last month of development.
    </p>
    <p>
      Given the time constraints, I needed to implement a solution quickly so
      that the designers could test and propose improvements before it was too
      late. but while doing so It was very common to add a simple feature and
      break something unrelated. As soon as I had a barely functional boss that
      the designers could test, I started refactoring and moving the code for
      each attack to an independent component. After that, I quickly returned to
      improving the functionality. the code was still far from perfect but it
      was enough to make the changes designers proposed comfortably and without
      introducing many new bugs.
    </p>
    <h4 class="challenge">Node-Based Phase Management</h4>
    <p>
      Initially, there was a single phase where the boss would simply lose
      health when hit. The phases were introduced, again, in the last month, so
      I had to come up with a system that allowed the designers to modify
      several variables depending on the phase.
    </p>
    <p>
      I achieved this by setting the variables through the nodes of the behavior
      tree instead of the character blueprint. Inside the behavior tree, I had
      one subtree for each phase, and the first node executed in each subtree
      was just to set variables. Aside from that node, each attack node had some
      variables to modify the specific attack.
    </p>
    <p>
      I'm happy with how the system turned out, but it did lack the ability to
      set some variables for all the phases. Sometimes we wanted to change the
      charge speed for every phase and had to modify the 5 different nodes. I
      could have probably added a base node to set the variables and only set
      the phase nodes if the value was modified or added a tick to each variable
      to indicate when the values should be overridden.
    </p>
    <h4 class="challenge">The Wave Dilemma</h4>
    <p>
      Making this attack was pretty difficult. We came up with a good solution
      for the collision and logic, but for displaying it, we couldn't find a
      solution that didn't show visible seams or artifacts along the wave.
    </p>
    <p>
      For the collisions, I first thought of checking the distance between the
      player and the center of the wave, but that would be pretty hard to update
      and sync with the visible wave. But I realized, that since the wave only
      needed to collide with the player, I could just have a small box collider
      that moved along with the wave and rotated to always face the player's
      direction. And that worked like a charm.
    </p>
    <p>
      For the visuals, we discussed several options with the artists, such as
      having several small meshes spawn as the wave grows, which would make it
      hard to hide the spawning meshes. Another option was to have a growing
      texture on the ground, but the scaling of it would affect the width of the
      wave and thus the gameplay. We couldn't come to an agreement at first, so
      I started with a simple and functional solution, which was using 4 meshes
      deformed by a spline forming a circle. This had the problem that applied
      textures would either be stretched or create visible seams.
    </p>
    <p>
      In the end, the assets for the wave were constantly delayed and we didn't
      test many other solutions, so this solution stayed, and we ended up with
      visible seams on the wave.
    </p>
  </SectionLayout>

  <SectionLayout p-title="Destructible objects" p-data="Destuctibles">
    <p>
      I'm still writing this, but here is a title for some of the challenges I
      faced
    </p>
    <h4 class="challenge">Circumventing Chaos Bugs</h4>
    <!--    <h3>Behaviour</h3>-->
    <!--    <p>WIP</p>-->
    <!--    <h3>Challenges</h3>-->
    <!--    <h4 class="challenge">Chaos bug solving</h4>-->
    <!--    <p>WIP</p>-->
  </SectionLayout>

  <SectionLayout p-title="Optimizations" p-data="Optimizations">
    <p>
      I'm still writing this, but here is a title for some of the challenges I
      faced
    </p>
    <h4 class="challenge">Loading and Unloading Levels</h4>
    <h4 class="challenge">Optimizing Lumen</h4>
    <!--    <h3>Loading and Unloading Levels</h3>-->
    <!--    <p>WIP</p>-->
    <!--    <h3>Optimizing Lumen</h3>-->
    <!--    <p>WIP</p>-->
  </SectionLayout>

  <SectionLayout p-title="Pickups and Coins" p-data="Pickups">
    <p>
      I'm still writing this, but here is a title for some of the challenges I
      faced
    </p>
    <h4 class="challenge">Projectile Move Component vs physics</h4>
    <h4 class="challenge">The unnoticed visual bug</h4>
    <!--    <h3>Behaviour</h3>-->
    <!--    <p>WIP</p>-->
    <!--    <h3>Challenges</h3>-->
    <!--    <h4 class="challenge">Projectile Move Component vs physics</h4>-->
    <!--    <p>WIP</p>-->
    <!--    <h4 class="challenge">The unnoticed visual bug</h4>-->
    <!--    <p>WIP</p>-->
  </SectionLayout>
  <SectionLayout p-title="NPC" p-data="PickNPCups">
    <p>
      I'm still writing this, but here is a title for some of the challenges I
      faced
    </p>
    <h4 class="challenge">Turn the body to face the player</h4>
    <!--    <h3>Behaviour</h3>-->
    <!--    <p>WIP</p>-->
    <!--    <h3>Challenges</h3>-->
    <!--    <h4 class="challenge">Look at the player</h4>-->
    <!--    <p>WIP</p>-->
  </SectionLayout>
</template>

<style scoped>
p {
  margin: 0 0 0.8rem 0;
}
li {
  list-style: disc;
  padding-bottom: 0.8rem;
}
.challenge {
  position: relative;
  width: fit-content;
  padding-top: 1rem;
}
.challenge::after {
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
