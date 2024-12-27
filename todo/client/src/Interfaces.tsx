export interface ITask {
    taskName: string;
    deadline: Number
}//ITask = interface of task

export interface Props {
    item: ITask // if item?:  ITask, it means that the property is optional
    completeTask(taskToDelete: string): void//this is a function that is defined in app.tsx
}

