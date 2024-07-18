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
      The game was developed using Unreal Engine 5, and programmed with C++,
      there are a few small functions and classes that were done with blueprints
      that were mostly made by the end of the development when we needed to rush
      small details. We always had in mind that whatever we coded should be as
      usable as possible for our designers or artists.
    </p>
    <p>
      During the development, aside from my assigned programming tasks, I played
      a leader role, acting as a communication bridge between programmers and
      non programmers. I also frequently found myself helping artists importing
      and organizing assets on the engine, and with version control. As well as
      helping the programmers with referencing and using functions and classes
      done by others.
    </p>
  </DetailLayout>
  <SectionLayout p-title="Final Boss" p-data="Final Boss">
    <h3>Behaviour</h3>
    <p>
      The boss has 5 attacks: Shots with his crossbow, hits on the ground that
      generate waves, a combo that mixes both previous attacks, a tail swipe
      that hits if you are near, and a charge. This Charge is the main attack,
      in it the boss will launch towards the player, and in if the player avoids
      it he can crash with a pilar, which will stun him for a while, while stunt
      the player can jum on him to deal damage and make him get to the next
      phase.
    </p>
    <p>
      each phase modifies the attack that can be performed and sometimes the
      speed and size of them. The first phase is just a charge attack toward a
      pilar (used as a tutorial). the second only uses crossbow attacks, the
      third uses waves, the fourth combos and the last uses all of the attacks
      with slight variations.at any point a melee attack is done if the player
      is near.
    </p>
    <h3 class="pt-4">Challenges</h3>
    <h4 class="challenge pt-0">Deadline-Driven Refactoring</h4>
    <p>
      At the beginning all of the code for the boss, including internal
      variables and attacks were on the same class, which was fine at the
      beginning but most of the boss was done at the last month of the
      development.
    </p>
    <p>
      With the given time I needed to make an implementation fast so that the
      designers could test and propose improvements before it was too late. And
      so I did but soon, I was finding myself modifying a small detail and
      breaking something else that was unrelated. So as soon as I had a barely
      functional boss that the designers could test on, I started refactoring
      and moving the code for each attack to an independent component. After
      that, I had to quickly get back to improve the functionality the code was
      still far from perfect but it was enough to make the changes designers
      proposed comfortably and without many new bugs.
    </p>
    <h4 class="challenge">Node-Based Phase Management</h4>
    <p>
      initially there was a single phase, when the boss was hitted he would just
      lose health, the phases were introduced, again, at the last month, so I
      had to come up with a system that allowed the designers to modify several
      variables depending on the phase.
    </p>
    <p>
      The way I did it, was by setting the variables through the nodes of the
      behaviour tree instead of the character blueprint. Inside the behaviour
      tree I had one subtree for each phase, and the first node executed on each
      subtree was just to set variables. Aside from that node each attack node
      had some variables to modify the specific attack
    </p>
    <p>
      I'm happy with how the system ended but it did lack the ability to set
      some variables for all the phases, it sometimes happened that we wanted to
      change the charge speed for every phase and we had to modify the 5
      different nodes. I could have probably added a base node to set the
      variables, and only set the phase nodes if the value was modified or
      adding a tick to each variable to indicate it when the values should be
      overridden.
    </p>
    <h4 class="challenge">The Wave Dilemma</h4>
    <p>
      making this attack was pretty difficult, We came up with a good solution
      for the collision and logic, but for displaying it we couldn't find a
      solution that didn't show visible seams or artifacts along the wave.
    </p>
    <p>
      for the collisions I first thought of checking the distance between the
      player and the center of the wave, but that would be pretty hard to update
      and sync with the visible wave. But since the wave only needed to collide
      with the player, I could just have small box collider that moved along
      with the wave and rotated to be always in the player direction. And that
      worked like a charm.
    </p>
    <p>
      for the visuals we discussed several options with the artists, like having
      several small meshes spawn as the wave grows, which would make hard to
      hide the spawning meshes, another option was to have a growing texture on
      the ground, but the scaling of it would affect the width of the wave, and
      thus the gameplay. We couldn't come to and agreement at first, so I
      started with the most simple, functional solution which was using 4 meshed
      deformed by a spline forming a circle, this had the problem that applied
      textures, would either be stretched o create visible seams.
    </p>
    <p>
      In the end, the assets for the wave were getting constantly delayed and we
      didn't test many other solutions so this solution stayed, and there are
      visible seams on the wave.
    </p>
  </SectionLayout>

  <SectionLayout p-title="Destructible objects" p-data="Destuctibles">
    <h3>Behaviour</h3>
    <p>WIP</p>
    <h3>Challenges</h3>
    <h4 class="challenge">Chaos bug solving</h4>
    <p>WIP</p>
  </SectionLayout>

  <SectionLayout p-title="Optimizations" p-data="Optimizations">
    <h3>Loading and Unloading Levels</h3>
    <p>WIP</p>
    <h3>Optimizing Lumen</h3>
    <p>WIP</p>
  </SectionLayout>

  <SectionLayout p-title="Pickups and Coins" p-data="Pickups">
    <h3>Behaviour</h3>
    <p>WIP</p>
    <h3>Challenges</h3>
    <h4 class="challenge">Projectile Move Component vs physics</h4>
    <p>WIP</p>
    <h4 class="challenge">The unnoticed visual bug</h4>
    <p>WIP</p>
  </SectionLayout>
  <SectionLayout p-title="NPC" p-data="PickNPCups">
    <h3>Behaviour</h3>
    <p>WIP</p>
    <h3>Challenges</h3>
    <h4 class="challenge">Look at the player</h4>
    <p>WIP</p>
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
