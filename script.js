function add(){
    var title = document.getElementById("title").value;
    var description = document.getElementById("description").value;
    if(!title||!description)return alert("Title and description . . .");
    var dir = document.getElementById("table");

    var note = document.createElement("div");
    note.innerHTML=`
    <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
          <div class="card-header aling-items-center d-flex">
            <button type="button" class="btn-close btn-close-white" aria-label="Close"></button>
          </div>
          <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${description}</p>
          </div>
        </div>    
    `;
    dir.appendChild(note)
}