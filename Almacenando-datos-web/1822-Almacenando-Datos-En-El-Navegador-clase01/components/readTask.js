import { createTask } from "./addTask.js";
import dateElement from "./dateElement.js";
import { uniquedates } from "../services/date.js";

export const displayTask = () => {
  const list = document.querySelector("[data-list]");

  const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
  const dates = uniquedates(taskList)

    dates.forEach((date) =>{
        const dateMoment = moment(date, "DD/MM/YYYY")
        list.appendChild(dateElement(date))
        taskList.forEach((task) => {
            const taskDate = moment(task.dateFormat, 'DD/MM/YYYY')
            const diff = dateMoment.diff(taskDate)
            if(diff==0)
            list.appendChild(createTask(task));
          });
    })

  
};
