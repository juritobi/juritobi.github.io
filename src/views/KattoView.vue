<script setup>
import DetailLayout from "@/components/layouts/DetailLayout.vue";
import SectionLayout from "@/components/layouts/SectionLayout.vue";
import router from "@/router";
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
    <div class="row">
      <div class="col-xl-6">
        <h3>Behaviour</h3>
        <p>
          The boss has 5 attacks: shots with his crossbow, hits on the ground
          that generate waves, a combo that mixes the previous two attacks, a
          tail swipe that hits if you are near, and a charge. This charge is the
          main attack, in which the boss will launch towards the player. If the
          player avoids it, the boss can crash into a pillar, which will stun
          him for a while. While stunned, the player can jump on him to deal
          damage and advance to the next phase.
        </p>
        <p>
          Each phase modifies the attacks that can be performed and sometimes
          the speed and size of them. The first phase is just a charge attack
          towards a pillar (used as a tutorial). The second only uses crossbow
          attacks, the third uses waves, the fourth uses combos, and the last
          uses all of the attacks with slight variations. At any point, a melee
          attack is performed if the player is near.
        </p>
      </div>
      <img class="col-xl-6" src="/Boss.gif" alt="aaa" />
      <div>
        <h3 class="pt-4">Challenges</h3>
        <h4 class="challenge pt-0">Deadline-Driven Refactoring</h4>
        <p>
          At the beginning, all of the code for the boss, including internal
          variables and attacks, was in the same class. This was fine at the
          start, but most of the boss was completed in the last month of
          development.
        </p>
        <p>
          Given the time constraints, I needed to implement a solution quickly
          so that the designers could test and propose improvements before it
          was too late. but while doing so It was very common to add a simple
          feature and break something unrelated. As soon as I had a barely
          functional boss that the designers could test, I started refactoring
          and moving the code for each attack to an independent component. After
          that, I quickly returned to improving the functionality. the code was
          still far from perfect but it was enough to make the changes designers
          proposed comfortably and without introducing many new bugs.
        </p>
      </div>
      <div class="col-xl-6">
        <h4 class="challenge">Node-Based Phase Management</h4>
        <p>
          Initially, there was a single phase where the boss would simply lose
          health when hit. The phases were introduced, again, in the last month,
          so I had to come up with a system that allowed the designers to modify
          several variables depending on the phase.
        </p>
        <p>
          I achieved this by setting the variables through the nodes of the
          behavior tree instead of the character blueprint. Inside the behavior
          tree, I had one subtree for each phase, and the first node executed in
          each subtree was just to set variables. Aside from that node, each
          attack node had some variables to modify the specific attack.
        </p>
        <p>
          I'm happy with how the system turned out, but it did lack the ability
          to set some variables for all the phases. Sometimes we wanted to
          change the charge speed for every phase and had to modify the 5
          different nodes. I could have probably added a base node to set the
          variables and only set the phase nodes if the value was modified or
          added a tick to each variable to indicate when the values should be
          overridden.
        </p>
      </div>
      <img class="col-xl-6" src="/PhaseBT.png" alt="aaa" />
      <div>
        <h4 class="challenge">The Wave Dilemma</h4>
        <p>
          Making this attack was pretty difficult. We came up with a good
          solution for the collision and logic, but for displaying it, we
          couldn't find a solution that didn't show visible seams or artifacts
          along the wave.
        </p>
        <p>
          For the collisions, I first thought of checking the distance between
          the player and the center of the wave, but that would be pretty hard
          to update and sync with the visible wave. But I realized, that since
          the wave only needed to collide with the player, I could just have a
          small box collider that moved along with the wave and rotated to
          always face the player's direction. And that worked like a charm.
        </p>
        <p>
          For the visuals, we discussed several options with the artists, such
          as having several small meshes spawn as the wave grows, which would
          make it hard to hide the spawning meshes. Another option was to have a
          growing texture on the ground, but the scaling of it would affect the
          width of the wave and thus the gameplay. We couldn't come to an
          agreement at first, so I started with a simple and functional
          solution, which was using 4 meshes deformed by a spline forming a
          circle. This had the problem that applied textures would either be
          stretched or create visible seams.
        </p>
        <p>
          In the end, the assets for the wave were constantly delayed and we
          didn't test many other solutions, so this solution stayed, and we
          ended up with visible seams on the wave.
        </p>
      </div>
    </div>
  </SectionLayout>

  <SectionLayout p-title="Destructible objects" p-data="Destuctibles">
    <div class="row">
      <div class="">
        <h3>Behaviour</h3>
        <p>
          For the game, we needed to have objects that like boxes, vases and
          pillars, tht broke when the player or boss crashed with them. I was
          done using the Unreal Chaos Physics.
        </p>
      </div>
      <img class="thin" src="/Destructibles.gif" alt="aaa" />
      <div>
        <h3 class="pt-4">Challenges</h3>
        <h4 class="challenge">Deactivating Debris Collisions</h4>
        <p>
          We wanted the debris of these objects to ignore the collisions with
          the player, but the object should block the player while it wasn't
          broken. For some reason, Geometry Collections (the breakable objects)
          didn't allow changing the collision channel during runtime.
        </p>
        <p>
          To solve this issue, I created a class that included both the Geometry
          Collection and a static mesh. When the game started, the static mesh,
          which collides with the player, would be used. However, when the
          object needed to be destroyed, the static mesh would be deactivated,
          and the Geometry Collection, which doesn't collide with the player,
          would be made visible and broken.
        </p>
      </div>
      <img class="" src="/destructible.png" alt="aaa" />
      <div>
        <h4 class="challenge">The Elusive Build-Only Bug</h4>
        <p>
          The boxes needed to have physics enabled, and there wasn't a problem
          with it until, at some point, a month after it was done, we realized
          that only in builds, the boxes would stay floating, and the physics
          wouldn't activate until something touched them.
        </p>
        <p>
          This was a very difficult and tedious problem to solve. In previous
          instances of mysterious bugs that started occurring suddenly only in
          builds, I tried to debug a build or use version control to identify
          which commit introduced the bug. However, in this case, that didn't
          work. The debugging showed that the physics were indeed activated, and
          the bug was introduced too long ago to be traced. I blindly started
          making small changes that might have had a slight possibility of
          fixing the issue, but none of them worked. In the end, after going
          through the Unreal forums, I found that there seemed to be a bug in
          the version we were working on. Manually executing a command to
          disable physics sleep when the game started solved the issue.
        </p>
      </div>
    </div>
  </SectionLayout>

  <SectionLayout p-title="Optimizations" p-data="Optimizations">
    <div class="row">
      <div>
        <h4 class="challenge">Loading and Unloading Levels</h4>
        <p>
          We were using world composition in Unreal, but there were reasons why
          we didn't want to use level streaming to unload complete sections of
          the maps. First, our maps had several places where the final part of
          the level could be seen from the beginning. Aside from that, we also
          had problems with objects using physics and checkpoints. For physics,
          if the ground or boxes disappeared, they would have to be
          repositioned. The checkpoints were problematic because they were just
          used to teleport the player, and if the ground at the teleport
          location wasn't loaded, the character would fall into the void.
        </p>
      </div>
      <div class="col-xl-6">
        <p>
          Because of all these reasons, we created our own loading and unloading
          system that only included the consuming elements in the game, like
          coins, enemies, particles, and similar items. The first attempt we
          tried was to have a load and unload trigger for each sub-level, but
          that still had some of the same problems we were trying to avoid. It
          was also really hard to set up and very prone to bugs.
        </p>
        <p>
          After 4 hours of trying to set up that system on the first level, I
          came up with a different method. Instead of using triggers, we used a
          large volume and loaded and unloaded elements when entering or exiting
          the volume. Additionally, instead of the volume having references to
          all the objects it had to activate and deactivate, the objects held a
          reference to the volume. This way, we could force the system to be
          used by the designers and artists, helping to avoid bugs. This method
          solved all the problems we had. It still wasn't easy to set up, but it
          was much easier than the previous approach.
        </p>
      </div>
      <img class="col-xl-6 small toped" src="/Volumes.gif" alt="aaa" />
      <div>
        <h4 class="challenge">Optimizing Lumen</h4>
        <p>
          Towards the end of development, we started testing the game on
          different computers, and it only worked properly on very high-end PCs.
          So, I was in charge of fixing it. The initial analysis showed that our
          main problem was with the GPU thread, specifically related to Lumen
          and anti-aliasing. We also had a lot of draw calls and many tris to
          render. We asked the artists to create more instances, adjust the
          meshes' Level of Detail, and reduce texture resolutions, hoping that
          would mitigate the issue. In the end, we used Nanite, but even though
          we had drastically reduced the draw calls and tris, it didn't improve
          performance because those changes didn't address the bottleneck.
        </p>
        <p>
          To fix this, I started looking into which Lumen options could be
          modified without affecting the game's visual quality. There wasn't
          much, but I found that we could use Screen Space Reflections instead
          of Lumen Reflections. This change made a noticeable visual difference
          but significantly improved performance. After discussing with the
          artists, we agreed that Screen Space Reflections suited our visual
          style better, so there was no downside to disabling Lumen reflections.
          Aside from that, there wasn't much more to do, so the only option left
          was to use the scalability settings.
        </p>
        <p>
          We already had a settings menu, but it was created in the early stages
          and didn't include options for global illumination, shadows, and
          resolution scale, which were the most relevant settings. After adding
          these options, setting them to medium made the game look poor, as it
          completely deactivated Lumen. So, I created custom scalability
          settings to try to retain essential features like shadows, Lumen, and
          anti-aliasing even on low settings while reducing other parameters to
          still improve performance.
        </p>
      </div>
    </div>
  </SectionLayout>

  <SectionLayout p-title="Pickups and Coins" p-data="Pickups">
    <div class="row">
      <div class="col-xl-6">
        <h3>Behaviour</h3>
        <p>
          Every enemy or character can drop coins or a power-up. These are
          thrown in a circle and will bounce using physics, similar to Sonic 3D
          games. The coins also have an area where they are pulled towards the
          player. There is a special kind of flying enemy, when they are killed,
          after of dropping the coins, these are pulled towards the player, no
          matter how far they are.
        </p>
        <h4 class="challenge">Projectile Move Component vs Physics</h4>
        <p>
          When implementing the coin drop, I initially used physics, but I
          couldn't achieve consistent results with it. Even when applying the
          same force to all the coins, they wouldn't cover the same distance and
          would bounce slightly differently from one another. To fix this, I
          tested using a Projectile Movement Component, which is a simplified
          physics system, and that worked perfectly.
        </p>
        <p>
          I was concerned that the Projectile Movement Component might make it
          difficult to achieve other effects, so I kept the physics-based coins
          for a while. And in fact, there was a problem with the pool system
          that made me consider returning to using physics.
        </p>
        <p>
          I'm still not sure why, but deactivating the component would sometimes
          cause it to lose the reference to the object it should be moving.
          Knowing that, resetting the reference fixed the problem, finding the
          issue took quite a while, as it didn't crash the game and seemingly at
          random, most coins would just stop moving.
        </p>
      </div>
      <img class="col-xl-6 toped" src="/Coins.gif" alt="aaa" />
    </div>
  </SectionLayout>
  <SectionLayout p-title="NPC" p-data="PickNPCups">
    <div class="row">
      <div class="col-xl-6">
        <p>
          The NPC is caged in each level, and the player has to push a button to
          open the cage. Then, when near him, a dialogue will start, and he will
          drop some coins. The only difficulties encountered were with the
          animations, as the character had to look at the player while
          performing some of them.
        </p>
        <p>
          To make the NPC look at the player, using only the neck bone for
          movement looked unnatural. So, I also rotated a spine bone to aim
          halfway. With these two rotation points, the animation looked much
          more natural. I also had to create a transition for the rotation to
          prevent it from snapping when switching to an animation where the NPC
          didn't need to look at the player.
        </p>
      </div>
      <img class="col-xl-6 small toped" src="/NPC.gif" alt="aaa" />
    </div>
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
