// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

contract TasksContract {
    uint256 public taskCounter = 0;

    constructor() {
        createTask("Task 1", "Task 1 Genesis");
    }

    event TaskCreated(
        uint256 id,
        string title,
        string description,
        bool done,
        uint256 createdAt
    );

    event TaskToggleDone(uint256 id, bool done, uint256 updatedAt);

    struct Task {
        uint256 id;
        string title;
        string description;
        bool done;
        uint256 createdAt;
    }

    mapping(uint256 => Task) public tasks;

    function createTask(string memory _title, string memory _description)
        public
    {
        uint256 timestamp = block.timestamp;
        tasks[taskCounter] = Task(
            taskCounter,
            _title,
            _description,
            false,
            timestamp
        );
        emit TaskCreated(taskCounter, _title, _description, false, timestamp);
        taskCounter++;
    }

    function toogleDone(uint256 _id) public {
        tasks[_id].done = !tasks[_id].done;
        emit TaskToggleDone(_id, tasks[_id].done, block.timestamp);
    }
}
