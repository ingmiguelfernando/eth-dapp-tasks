const TasksContract = artifacts.require("TasksContract");

contract("TasksContract", () => {
  before(async () => {
    this.tasksContract = await TasksContract.deployed();
  });

  it("migrate was deployed successfully", async () => {
    const address = await this.tasksContract.address;
    assert.notEqual(address, 0x0);
    assert.notEqual(address, "");
    assert.notEqual(address, null);
    assert.notEqual(address, undefined);
  });

  it("genesis task created successfully", async () => {
    const tasks = await this.tasksContract.taskCounter();
    assert.equal(tasks.toNumber(), 1);
  });

  it("get tasks lists", async () => {
    const tasks = await this.tasksContract.tasks(0);
    assert.equal(tasks.title, "Task 1");
    assert.equal(tasks.description, "Task 1 Genesis");
    assert.equal(tasks.done, false);
  });

  it("task created successfully", async () => {
    await this.tasksContract.createTask("Task 2", "Task numer 2");
    const taskCounter = await this.tasksContract.taskCounter();
    const createdTask = await this.tasksContract.tasks(1);
    assert.equal(taskCounter.toNumber(), 2);
    assert.equal(createdTask.title, "Task 2");
  });

  it("toogle done", async () => {
    await this.tasksContract.toogleDone(1);
    const task = await this.tasksContract.tasks(1);
    assert.equal(task.done, true);
  });

  it("emit working well", async () => {
    const result = await this.tasksContract.createTask("a", "b");
    const { title, description } = result.logs[0].args;
    assert.equal(title, "a");
    assert.equal(description, "b");
  });
});
