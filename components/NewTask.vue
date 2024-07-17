<template>
    <Transition name="new">
        <div v-show="modalActive"
        class="bg-lightGray dark:bg-darkGray dark:text-secondaryTextDark text-primaryTextLight
        mb-2 p-2 flex flex-col gap-2 items-center rounded-lg
        transition-colors ease-linear duration-200">
            <slot />
            <div class="">
                <button class="bg-lightGray2 dark:bg-lightBlack p-1 rounded-md
                hover:bg-white dark:hover:bg-black transition-colors ease-linear duration-200"
                @click="$emit('new-task')">Done</button>
                <button class="bg-lightGray2 dark:bg-lightBlack p-1 rounded-md ml-4 outline-
                hover:bg-white dark:hover:bg-black transition-colors ease-linear duration-200"
                @click="$emit('close-modal')">Close</button>
            </div>
        </div>
    </Transition>

</template>

<script setup>
const emit = defineEmits(['close-modal', 'new-task']);

const props = defineProps({
  modalActive: {
    type: Boolean,
    default: false
  }
});

const emitNewTask = () => {
  emit('new-task');
};
</script>


<style>
.new-enter-active,
.new-leave-active {
  transition: all 0.5s cubic-bezier(0.52, 0.02, 0.19, 1.02)
  
}
.new-enter-from,
.new-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>