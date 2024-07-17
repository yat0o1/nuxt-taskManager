<template>
    <div class="px-10 font-rubik sm:px-20 min-h-screen
    dark:bg-darkGray bg-lightGray transition-colors ease-linear duration-200">
        <Header />
        <client-only>
          <Content />
        </client-only>
    </div>
</template>

<script setup>
useHead({
  title: 'Task Manager',
  meta: [
    { name: 'description', content: 'Task manager application' }
  ],
})
</script>