import { makeObservable, observable } from 'mobx';

class TaskList 
{
  tasks: string[] = ['Tasks', 'from', 'mobx'];

  constructor() {
    makeObservable(this, {
      tasks: observable
    });
  }
};

export default TaskList;
