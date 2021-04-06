import { makeObservable, observable } from 'mobx';

class TaskList
{
  tasks: string[];

  constructor(tasks: string[]) {
    this.tasks = tasks;
    
    makeObservable(this, {
      tasks: observable
    });
  }
};

export default TaskList;
