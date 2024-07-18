<script setup>
import SectionLayout from "@/components/layouts/SectionLayout.vue";
</script>

<template>
  <SectionLayout>
    <ul>
      <li>
        <p>
          <b>Crossbow Attack</b>: shoots 3 arrows with his crossbow. This is
          done using a custom Animation Notify when an arrow needs to be shot.
          The arrows are not instantiated, but retrieved from a pool, and move
          using a Projectile Move Component.<br />
        </p>
        <p>
          <b class="challenge">Challenges Faced</b>: At the beginning the arrows
          would just go through anything that wasn't the player, and get
          deactivated after some time, but by the end of the development we
          wanted the arrows stick on the surface for a while. Our producer
          propose to use OnCollision Event to detect collision against non
          player objects, but that didn't work, because for collision events to
          work, the physics need to be activated, which doesn't get along well
          with the Projectile Move Component (since there are two different
          components trying to move the same object), so I used and event on the
          Projectile Move Component that would trigger when the arrow stopped
          moving.
        </p>
      </li>
      <li>
        <p>
          <b>Melee Attack</b>: when the player gets near the boss he will start
          an animation that contains an Animation Notify State, which will
          activate and deactivate a Sphere component which will detect the
          played and damage him if he inside the area.
        </p>
        <p>
          <b class="challenge">Challenges Faced</b>: To detect the distance from
          the player to start the animation I was Using an "Is At Location"
          Decorator Node on the behaviour tree but at some point I needed this
          to abort the execution of lower priority nodes, but after trying to
          make a custom node that inherited the node I was using, I couldn't
          make it work because this node does not tick, is only executed when
          it's asked to. So I just ended up creating a new BlackBoard Variable
          that updates the player position every frame, and using it with the
          blackboard decorator node.
        </p>
      </li>
      <li>
        <p>
          <b>Charge Attack</b>: for this attack the boss would start an
          animation and after a few second he would launch in the player
          direction, if the player managed to dodge it he could hit a column
          that will stun him for a while, leaving a window of opportunity for
          the player to jump on him and deal damage.
        </p>
        <p>
          <b class="challenge">Challenges Faced</b>: It took me an
          embarrassingly long time to figure out how to chain all the animation
          sequences, it was my first time managing animations in unreal, the
          first thing I tried was to use an Animation Notify at the end of each
          Sequence but it was a nightmare to manage and the notifies didn't
          trigger instantly and it was clearly noticeable for fast movements.
          After that I tried to use animation composites but those didn't allow
          to loop a specific sequence, so I tried animation composites but these
          could be managed properly form the animation state machine. So Finally
          I discovered that I could get the sequence remaining time on the state
          machine and make a transition when that remaining time was nearly 0.
        </p>
      </li>
      <li>
        <p>
          <b>Wave Attack</b>: As the ranged attack, and Animation Notify is used
          to retrieve and activate a wave actor from a pool. This Wave actor is
          compose of 4 different splines that form a circle, these splines have
          a mesh attached to them. For the collision, since it only has to check
          collision with the player, I just used cube that rotates and moves
          with the wave.
        </p>
        <p>
          <b class="challenge">Challenges Faced</b>: The main challenge for this
          was figuring out how to make the visuals for it, we thought of making
          small meshes and spawn them while the wave was growing. We also
          scaling a plane with a ring texture on the ground. But in the end
          everything we thought of had a different problem, there didn't seem to
          be a way to do it without having visible seams or artifacts so, since
          we were on a tight schedule we opted for the simplest one, even if it
          also had its problems. The option we chose consisting of 4 scaling
          meshes, has the problem that when applying a texture to it, it will
          either be stretched or create visible seams.
        </p>
      </li>
      <li>
        <p>
          <b>Combined Attack</b>: Lastly there is a simpler attack which is just
          a mix between the ranged and wave attacks, I just had to ask the
          artist to split the animations so that I could combine them in a
          different way. With that I could chain several together and use the
          same animation notifies to spawn the needed actors.
        </p>
      </li>
    </ul>
    <h4 class="challenge">iteration process</h4>
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
      that, the code was still far from perfect but it was enough to make the
      changes designers proposed comfortably and without many new bugs.
    </p>

    <h3>Phases</h3>
    <p>
      on each phase the boss will make some attacks(ranged, wave and/or
      combined) and then charge, at any point (except when charging) if the
      player is near it will make a melee attack. for each phase the designers
      wanted to be able to change the attacks that he was able to perform as
      well as the rate and speed of them.
    </p>
  </SectionLayout>
</template>

<style scoped></style>
