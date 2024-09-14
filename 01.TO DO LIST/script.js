document.querySelector("#push").addEventListener('click',()=>
{
    if(document.querySelector("#newtask input").value.length==0)
    {
        alert("Please Enter a task")
    }
    else
    {   
        // Adding Task
        document.querySelector("#tasks").innerHTML+=`
        <div class="task">
        <span id="taskname">
        ${document.querySelector('#newtask input').value}</span>
        <button class="delete">
        <i class="fa-solid fa-trash-can"></i></button>
        </div>`;

        // Deleting Task
        var deleting=document.querySelectorAll(".delete");
        for(let i=0;i<deleting.length;i++)
        {
            deleting[i].onclick=function()
            {
                this.parentNode.remove();
            }
        }
        var tasks=document.querySelectorAll('.task')
        for(let i=0;i<tasks.length;i++)
        {
            tasks[i].onclick=function()
            {
                this.classList.toggle("completed");
            }
        }
        // Clearing the Input
        document.querySelector("#newtask input").value="";

    }
})