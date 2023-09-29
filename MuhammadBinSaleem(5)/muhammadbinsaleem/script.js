function addlist()
{
    var tasks=document.getElementById("tasks");

    var main_task=document.getElementById('taskinput');
    
    var pera=document.createElement("div")
   
    if(main_task.value!="")
    {
    var task=document.createElement("div");
    task.classList.add('task');

    var p=document.createElement("p");
    p.classList.add('task-para');
    p.textContent=main_task.value;
    main_task.value="";

    var donebutton=document.createElement("button");
    donebutton.classList.add('done');
    donebutton.textContent="✅";

    var deletebutton=document.createElement("button");
    deletebutton.classList.add('delete');
    deletebutton.textContent="🗑️";
    
    pera.append(p);
    task.append(pera);
    task.append(donebutton);
    task.append(deletebutton);
    tasks.append(task);
    
 
    var doneButton=document.getElementsByClassName("done");
    var taskz=document.getElementsByClassName("task");

    var removeButtons = document.querySelectorAll(".delete");
    for (var i = 0; i < removeButtons.length; i++) {
      removeButtons[i].addEventListener("click", function () {
        this.closest('.task').remove();
      });
    }
    var doneButtons = document.querySelectorAll(".done");
    for (var i = 0; i < doneButtons.length; i++) {
      doneButtons[i].addEventListener("click", function () {
        const taskElement = this.closest('.task');
        const pElement = taskElement.querySelector('.task-para');
        taskElement.style.backgroundColor = 'green';
        pElement.style.textDecoration = 'line-through';
      });
    }

    }
    else
    {
        alert("Enter Task first");
    }

}