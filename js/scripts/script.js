import { getValue } from "./tasks/task1.js";
import { handleMove } from "./tasks/task2.js";
import { getDropdown } from "./tasks/task3.js";
import { lightTabel } from "./tasks/task4.js";
import { setClass } from "./tasks/task5.js";
import { verifyWidth } from "./tasks/task6.js";
import { getNumbers } from "./tasks/task7.js";

document.getElementById("btn").onclick = getValue;
handleMove();
getDropdown();
lightTabel();
setClass();
verifyWidth();
getNumbers();