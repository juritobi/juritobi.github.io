<script setup>
import SectionLayout from "@/components/layouts/SectionLayout.vue";
import DetailLayout from "@/components/layouts/DetailLayout.vue";
</script>

<template>
  <DetailLayout
    p-title="Copperfield Engine"
    p-data="Katto"
    p-subtitle="Implementation details and decisions"
  >
    <p>
      Copperfield Engine is a 3D game engine created. It aims to offer the
      essential features for game development, with an easy-to-use API that
      follows a data-driven design with the use of ECS, The only libraries used
      are glfw, glew, imgui, tinyobjloader, StbImage and OpenAL. We have tried
      to keep them to a minimum, having our own math and collision library, as
      well as physics.
    </p>
  </DetailLayout>
  <SectionLayout p-title="Entity Component System" p-data="ECS">
    <p>
      ECS is an architecture that allows to update objects in a scene in an
      efficient and structured way. This is achieved by following a data-driven
      design, where components hold data and only data, while the systems
      operate on the components' data. This separates data from functionality,
      creating a structured and cache-friendly design since the components can
      be allocated contiguously in memory with an array or vector.
    </p>
    <h3>Efficient Component Management</h3>
    <p>
      In the first implementation I made, there was a vector for each type of
      component, and each vector had the same size as the total number of
      entities, so the vectors had empty slots when an entity didn't have that
      type of component. This is the most efficient way when a type of component
      is used by most of the entities, but if a component is only used by a few
      entities, the system will still need to go through all the empty slots and
      do nothing.
    </p>
    <p>
      A compact list holding only the existing components along with the entity
      they belong to is more efficient in most situations, but not in all
      situations. Using inheritance, I managed to make both types of containers
      work under the same rules. To achieve this, I also had to make use of
      templates that allowed the creation of classes that could hold a vector of
      any kind of component, and custom iterators for those classes, which
      allowed a standard way for the systems to go through all the components.
    </p>
    <h3>Simplifying Systems</h3>
    <p>
      With the component containers done, the users could already create their
      own custom systems, but to do so, they would have to retrieve all the list
      iterators and iterate through them while checking that all components
      existed and belonged to the same entity. I wanted a better solution for
      this since it was quite a large piece of code that users would probably be
      copying and pasting, which usually leads to bugs and tedious maintenance.
    </p>
    <p>
      I tried several options and hit several dead ends. In the end, I managed
      to create a templated class that on construction could receive any number
      of lists of any type. The class then had an internal function that would
      iterate through all the lists until an entity with all the components was
      found. That function could be used as a while loop condition. Lastly,
      there was another function that would use the iterators from the previous
      function and form a tuple with the components and return it.
    </p>
    <p>
      Doing just these two functions took me weeks, since I had never worked
      with parameter packs, custom iterators, and lambdas before. I
      underestimated how hard this would be, and the first times I tried, I had
      to give up and start over because I was trying to make the final solution
      directly, with no intermediate steps or simplifications. This was clearly
      a mistake to learn from.
    </p>
  </SectionLayout>
  <SectionLayout p-title="Physics" p-data="Physics">
    <p>
      The physics system I developed included collision detection between
      spheres, Axis Aligned Bounding Boxes (AABBs), and Oriented Bounding Boxes
      (OBBs). Besides detecting collisions, the collision functions also
      provided information about the collisions, such as penetration depth and
      contact points, which helped calculate the impulse to be applied after a
      collision occurred.
    </p>
    <p>
      The simulation was performed using Verlet integration, and to display
      movement smoothly, the renderer used interpolation between the last two
      frames of the simulation as the world position for each object.
    </p>
    <h3>The Blender Debugging Technique</h3>
    <p>
      For collision detection, I used unit testing. While creating the tests,
      calculating the expected results was sometimes time-consuming, and I might
      get it wrong. So, I came up with the idea of using Blender (a 3D modeling
      software). In Blender, I would draw boxes and extrude vertices from them
      to represent vectors. Then, I could measure the length of these vectors
      and find intersection positions. The precision wasn't perfect, but it was
      good enough to either confirm my calculations or validate the final code
      results.
    </p>
    <p>
      I didn't expect it, but using Blender turned out to be really helpful, not
      only for testing but also for understanding some geometry problems.
      Sometimes it's not easy to visualize the entire problem in your head or
      even on paper, and having a 3D representation of the problem proved to be
      very useful.
    </p>
    <h3>The Surprising First Attempt Success and Subsequent Setback</h3>
    <p>
      OBB-to-OBB collisions were the last thing I implemented. It was already
      clear which functions I needed to create and how to integrate them into
      the physics system. After developing and testing the basic collisions,
      which only returned true or false, I implemented the functions that
      provided collision information and integrated them directly without
      creating unit tests for them. Surprisingly, it worked on the first try. It
      compiled, and in a small test environment, it seemed to work as expected.
    </p>
    <p>
      I was right to be worried about it, since the next day, when I used it in
      a more open and randomized environment, it turned out that when the angle
      between the two objects was nearly 0, the objects would pass through each
      other. I could easily find the error, it was just a vector that needed to
      be normalized. This was yet another lesson in how important it is to
      properly test things, especially if they have never failed before.
    </p>
  </SectionLayout>
  <SectionLayout p-title="Input" p-data="Input">
    <p>
      I'm still writing this, but here is a title for some of the challenges I
      faced
    </p>
    <h3>Controller support</h3>
  </SectionLayout>
  <SectionLayout p-title="Rendering" p-data="Rendering">
    <p>
      I'm still writing this, but here is a title for some of the challenges I
      faced
    </p>
    <h3>Refactoring renderer, again, and again, and again</h3>
  </SectionLayout>
  <SectionLayout p-title="Asset Loading" p-data="Asset">
    <p>
      I'm still writing this, but here is a title for some of the challenges I
      faced
    </p>
    <h3>Asset storing and retrieving</h3>
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
