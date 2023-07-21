"use client";
import { createTask } from "@/actions/tasks";
import { useState } from "react";
const TaskForm = () => {
  return (
    <form
      action={createTask}
      className="flex gap-2 flex-col w-3/4 container mx-auto"
    >
      <input
        id="task-form"
        type="text"
        name="title"
        placeholder="Add a task"
        className="h-12 border border-slate-300 bg-transparent rounded-lg px-2 py-1 outline-none focus-within:border-slate-100"
        // value={title}
      />
      <div className="flex gap-1 justify-end">
        <button
          type="submit"
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
