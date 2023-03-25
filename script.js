var row=null;
function Submit() {
    var entered_data = retrieved_data();
    var read_data= readingdatafromlocalstorage(entered_data);
    if(entered_data==false){
        msg.innerHTML=`<h3 style="color:red">Please enter the data!</h3>`;
    }
    else{
   if(row==null){

    insert(read_data);
    msg.innerHTML=`<h3 style="color:green">DATA INSERTED</h3>`;
}
else{
update();
msg.innerHTML=`<h3 style="color:orange">DATA UPDATED </h3>`;

}
    }
    document.getElementById("form").reset();
}
// retrieving data from form
//CREATE
function  retrieved_data()
{
    var name1 = document.getElementById("name").value;
    var job1 =document.getElementById("job").value;
    var exp1 =document.getElementById("exp").value;
    var arr=[name1,job1,exp1];
    if(arr.includes("")){
        return false;
    }
    else{
return arr; 
    }
    
}
//READ
// data in local storage
function readingdatafromlocalstorage(entered_data)
{
    // storing data in local storage
     var n=localStorage.setItem("Name",entered_data[0]);
     var j=localStorage.setItem("Job",entered_data[1]);
     var e=localStorage.setItem("Exp",entered_data[2]);

     //getting values from local storage to the table
     n1=localStorage.getItem("Name",n);
     j1=localStorage.getItem("Job",n);
     e1=localStorage.getItem("Exp",n);
     var arr=[n1,j1,e1];
     return arr;
}
//Insert
    
    function insert(read_data){
        var row=table.insertRow();
        var cell1=row.insertCell(0);
        var cell2=row.insertCell(1);
        var cell3=row.insertCell(2);
        var cell4=row.insertCell(3);
        cell1.innerHTML=read_data[0];
        cell2.innerHTML=read_data[1];
        cell3.innerHTML=read_data[2];
        cell4.innerHTML="<button onclick = edit(this)>Edit</button><button  onclick = remove(this)>Delete</button>";
    } 

    //EDIT
    function edit(td)
    {
         row=td.parentElement.parentElement;
        document.getElementById("name").value=row.cells[0].innerHTML;
        document.getElementById("job").value=row.cells[1].innerHTML;
        document.getElementById("exp").value=row.cells[2].innerHTML;
        
        

    }
    //update
    function update(td){
        row.cells[0].innerHTML=document.getElementById("name").value;
        row.cells[1].innerHTML=document.getElementById("job").value;
        row.cells[2].innerHTML=document.getElementById("exp").value;
         row=null;
    }
    //Delete
    function remove(td)
    {  var ans=confirm("Are you sure you want to delete this record ? ")
     if (ans==true)   {
row=td.parentElement.parentElement;
        document.getElementById("table").deleteRow(row.rowIndex);
     }
    
    }