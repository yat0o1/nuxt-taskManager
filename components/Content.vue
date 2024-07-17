<template>
        <div class="mt-16">
            <div class="flex justify-between py-2 rounded-t-lg px-4
            dark:text-secondaryTextDark text-primaryTextLight
            bg-white dark:bg-black transition-colors ease-linear duration-200">
                <p class="font-semibold">Tasks</p>
                <button class="border-2 border-lightGray px-2 dark:border-darkGray dark:text-secondaryTextDark text-primaryTextLight
                hover:bg-lightGray dark:hover:bg-darkGray transition-colors ease-linear duration-200" 
                @click="addTask"
                >Add</button>
            </div>
            <div class="p-4 rounded-b-lg flex flex-col gap-3
            bg-lightGray2 dark:bg-lightBlack transition-colors ease-linear duration-200">

                <NewTask :modalActive="modalActive" @close-modal="addTask" @new-task="addNewTask">
                    <input class="rounded-lg h-8 px-2 text-black w-3/5" name="taskName"
                    type="text" placeholder="New task title" v-model="newTaskTitle">
                </NewTask>

                <div v-for="(task, index) in tasks" :key="index"
                class="dark:text-secondaryTextDark text-primaryTextLight transition-colors ease-linear duration-200">
                    <p class="bg-lightGray dark:bg-darkGray transition-colors ease-linear duration-200
                    rounded-t-lg p-2 align-middle items-center font-semibold text-lg break-words"
                    >{{task.title}}</p>
                    <div class="bg-lightGray dark:bg-darkGray transition-colors ease-linear duration-200
                        rounded-b-lg p-2 align-middle flex items-center justify-between">
                        <p>{{task.status}}</p>
                        <div class="flex flex-col sm:flex-row gap-2
                        dark:text-secondaryTextDark text-primaryTextLight">
                            <span v-if="task.status == 'In progress'" class="mr-4 cursor-pointer
                            hover:text-white dark:hover:text-black transition-colors ease-linear duration-200"
                            @click="makeDone(index)">Mark as done</span>
                            <span class="cursor-pointer
                            hover:text-white dark:hover:text-black transition-colors ease-linear duration-200"
                            @click="deleteTask(index)">Delete</span>
                        </div>
                    </div>
                </div>      
            </div>
        </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import NewTask from './NewTask.vue';

const { $locally } = useNuxtApp();
const modalActive = ref(null);
const newTaskTitle = ref("");

const storedTasks = $locally.getItem('tasks');
const tasks = reactive(storedTasks ? JSON.parse(storedTasks) : []);

const addTask = () => {
    modalActive.value = !modalActive.value;
    newTaskTitle.value = '';
};

const addNewTask = () => {
    if(newTaskTitle.value.trim()){
        tasks.push({title: newTaskTitle.value , status: "In progress"})
        newTaskTitle.value = '';
        $locally.setItem('tasks', JSON.stringify(tasks));
    }
};
const makeDone = (i) => {
    tasks[i].status = "Done";
    $locally.setItem('tasks', JSON.stringify(tasks));
}

const deleteTask = (i) => {
    tasks.splice(i , 1);
    $locally.setItem('tasks', JSON.stringify(tasks));
}
</script>