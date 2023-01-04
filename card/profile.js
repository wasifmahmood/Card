var userObj = null;
async function apiCall() {
  let response = await fetch(" https://api.github.com/users");
  let value = await response.json();

  console.log(value);

    let response2 = await fetch("https://jsonplaceholder.typicode.com/posts");
  let value2 = await response2.json();

  console.log(value2)
  userObj = value;
  for(var i=0; i<value.length;i++){
  document.getElementById("parentuser").innerHTML +=`

  <div class="col-md-4"> 
    <div class="card" style="text-align: center; margin-top: 10%;">
      <div class="card-up" style="background-image: linear-gradient(to left, rgb(236, 230, 230) , rgb(127, 16, 231)); ">
        <img id="img" src=${value[i].avatar_url} class="rounded-circle " style="width: 120px; text-align: center;margin-top: 60px;border: 3px solid #72276E;;"></div>
      <div style="margin-top: 30%;"> 
        <h3 id="name" >${value[i].login}</h3>
     
      </div>
      <div style="margin-top: 10%;">
        <button type="button" onclick="">View Profile</button>
      </div>
    </div>

  </div>`
  }

  for(var i=0; i<value2.length;i++){
    document.getElementById("parentpost").innerHTML +=`
  
    <div class="col-md-4"> 
      <div class="card" style="text-align: center; margin-top: 10%;">
        <div class="card-up" style="background-image: linear-gradient(to left, rgb(236, 230, 230) , rgb(127, 16, 231)); ">
          <img id="img" src="" class="rounded-circle " style="width: 120px; text-align: center;margin-top: 60px;border: 3px solid #72276E;;"></div>
        <div style="margin-top: 30%;"> 
          <h3 id="name" >${value2[i].userId}</h3>
        
        </div>
        <div style="margin-top: 10%;">
          <button type="button" onclick="openProfile()">View Profile</button>
        </div>
      </div>
  
    </div>`
    }
    Buttonuser();
  
}

function Buttonuser(){
document.getElementById("parentuser").classList.remove('visually-hidden')
document.getElementById("parentpost").classList.add('visually-hidden')

document.getElementById("buttonuser").classList.add('active')
document.getElementById("buttonpost").classList.remove('active')
}
function Buttonpost(){
document.getElementById("parentuser").classList.add('visually-hidden')
document.getElementById("parentpost").classList.remove('visually-hidden')


document.getElementById("buttonpost").classList.add('active')
document.getElementById("buttonuser").classList.remove('active')
}
