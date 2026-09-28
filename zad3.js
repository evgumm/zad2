function printTaskOnPage(text, isDone) {
  console.log(text);

  const outputBlock = document.getElementById('output');
  const doneClass = isDone ? 'class="done"' : '';
  outputBlock.innerHTML += `<p ${doneClass}>${text}</p>`;
}
class Task {
  constructor(title) {
    this.title = title;
    this.done = false; 
  }

  complete() {
    this.done = true;
  }
  toString() {
    if (this.done) {
      return `[x] ${this.title}`;
    } else {
      return `[ ] ${this.title}`;
    }
  }
}
class TodoList {
  constructor() {
    this.tasks = []; 
  }

  add(title) {
    const newTask = new Task(title);
    this.tasks.push(newTask);
  }

  complete(index) {
    if (this.tasks[index]) {
      this.tasks[index].complete();
    }
  }

  print() {
    for (const task of this.tasks) {
      printTaskOnPage(task.toString(), task.done);
    }
  }
  countDone() {
    let count = 0;

    for (const task of this.tasks) {
      if (task.done === true) {
        count++;
      }
    }

    return count;
  }
}

const myTodoList = new TodoList();

myTodoList.add('Купить хлеб');
myTodoList.add('Сделать домашнее задание');
myTodoList.add('Помыть посуду');
myTodoList.add('Потренироваться');
myTodoList.complete(0);
myTodoList.complete(2);

myTodoList.print();

const totalDone = myTodoList.countDone();
console.log(`Выполнено задач: ${totalDone}`);
document.getElementById('counter').innerText = `Всего выполнено: ${totalDone}`;