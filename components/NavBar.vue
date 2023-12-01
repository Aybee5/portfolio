<template>
  <nav ref="navbar" class="bg-primary text-white navbar z-10">
    <div class="md:w-4/5 flex flex-wrap items-center justify-between mx-auto p-4">
      <div class="flex items-center gap-4">
        <a href="mailto:ibrahimabdul050@gmail.com">
          <div class="flex items-center gap-0.5">
            <Icon name="material-symbols:mail-outline-rounded" />
            <span class="md:hidden">Email</span>
            <span class="hidden md:block">ibrahimabdul050@gmail.com</span>
          </div>
        </a>
        <a href="tel:+2348139349336">
          <div class="flex items-center gap-0.5">
            <Icon name="material-symbols:phone-enabled-outline" />
            <span class="md:hidden">Call</span>
            <span class="hidden md:block">+2348139349336</span>
          </div>
        </a>
        <a
          href="https://blog.aybee.codes"
          target="_blank"
          class="flex items-center gap-0.5"
        >
          <Icon name="material-symbols:edit-document-outline" />
          <span>Blog</span>
        </a>
      </div>
      <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <a
          class="py-2 px-4 rounded-md hover:bg-opacity-80 bg-tertiary text-white font-medium -ml-2 inline-flex"
          href="https://docs.google.com/document/d/16YKdLbOiIF89sVYVPnr2BYmiiC7u537mf7rGsMgI4Vg/edit?usp=sharing"
          target="_blank"
          >View Resume</a
        >
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const navbar = ref<HTMLElement>();
onMounted(() => {
  let prevScrollPos = window.pageYOffset;
  window.addEventListener("scroll", () => {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
      navbar.value!.style.top = "0";
    } else {
      navbar.value!.style.top = "-75px";
    }
    prevScrollPos = currentScrollPos;
  });
});
</script>

<style scoped>
.navbar {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 4px;
  position: fixed;
  top: 0;
  transition: top 0.3s ease-in-out;
  width: 100%;
}
</style>
