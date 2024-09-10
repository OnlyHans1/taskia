class Task {

    constructor() {
        this.tasks = this.getTasks();
    }

    getTasks() {
        return JSON.parse(localStorage.getItem('tasks')) || [];
    }

    saveTasks(taskData) {
        const newTaskData = {
            id: Date.now(),
            isCompeled: false,
            ...taskData
        };

        this.tasks.push(newTaskData);
        localStorage.setItem('tasks', JSON.stringify(this.tasks));

        return {
            success: true,
        };
    }

    completeTask(taskId) {
        const index = this.tasks.findIndex(task => task.id === taskId)

        if (index !== -1) {
            this.tasks[index].isCompeled = true;
            this.updateLocalStorage();
        }
    }

    deleteTask(taskId) {
        const index = this.tasks.findIndex(task => task.id === taskId)

        if (index !== -1) {
            this.tasks.splice(index, 1);
            this.updateLocalStorage();
        }
    }    

    updateLocalStorage() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
}