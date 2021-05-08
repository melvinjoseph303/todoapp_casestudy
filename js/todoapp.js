 // api url
 const api_url =
 "https://jsonplaceholder.typicode.com/todos";
 
 // Defining async function
 async function getapi(url) {
 
 // Storing response
 const response = await fetch(url);
 
 // Storing data in form of JSON
 var data = await response.json();
 console.log(data);
 if (response) {
     hideloader();
 }
 show(data);
 }
 // Calling that async function
 getapi(api_url);
 
 // Function to hide the loader
 function hideloader() {
 document.getElementById('loading').style.display = 'none';
 }
 // Function to define innerHTML for HTML table
 function show(data) {
 let count = 0;
 let tab =
     `<thead>
     <tr>
     <th>UserId</th>
     <th>Id</th>
     <th>Title</th>
     <th>Completed</th>
     <th>Status</th>
     </tr>
     </thead>`;
 
 // Loop to access all rows
 //for (let r of data.list) {
 data.forEach(myFunc);
 function myFunc(r) {        
 //});
     tab += `<tbody>
 <tr>
 <td>${r.userId} </td>
 <td>${r.id}</td>
 <td>${r.title}</td>
 <td>${r.completed}</td>`
 
 if (r.completed == true) {
     console.log("r:"+r.completed);
     tab += `<td><input type="checkbox" id="status" class="chbox" checked="checked" disabled></td>`
 }
 else {
     tab += `<td><input type="checkbox" id="status" class="chbox"></td>`
     
 }  
 tab += `</tr></tbody>`;
 // if (r.completed == true) {
 //     // $("checkbox").css(checked,'checked');	
 //     // $("checkbox").css(disabled,true);
 //     document.getElementById("status").checked = true;
 //     document.getElementById("status").disabled = true;
 // }
 // else {
 //     `<td><input type="checkbox" id="status"></td>`
 // }    
 }
 
 //}
 // Setting innerHTML as tab variable
 document.getElementById("todos").innerHTML = tab;
 $(".chbox").click(function(){
    // var promise = new Promise(function(resolve,reject){
         if ($(this).prop("checked")) {
             // checked
             count = count + 1;
             console.log("checked");
             //document.getElementById("status").checked = true;
             $(this).attr("checked",true);
            // document.getElementById("status").disabled = true;
         }
         else {
             count = count - 1;
             console.log("unchecked");
             //document.getElementById("status").checked = false;
             $(this).attr("checked",false);
             //document.getElementById("status").disabled = false;
         }
         console.log("count:"+count);
         selectedtaskCount(count);
     });
     function selectedtaskCount(count){
         remainingtasks=5-count;
            //var promise = new Promise(function(resolve,reject){
            var promise = new Promise(function(resolve,reject) {   
                if(count == 5) {
                    resolve("Congrats You have completed five tasks");
                    //alert("Congrats You have completed five tasks");
                }
                else {
                    reject(`You have to complete ${remainingtasks} more tasks`);
                }
            });    
            promise
            .then(function(s){
                alert(s);
                //console.log(s);
            })
            .catch(function(e){
                console.log(e);
            })
            // .then(function(data){
            //     alert(data);
            //     //console.log(s);
            // })
        //});
    }
 
 }