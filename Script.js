function sConsole() {
    var data = document.getElementById("my_name");
    var file = document.getElementById("my_mobile");
    var form = document.getElementById("my_email");
    var date = document.getElementById("d_Day");
    var month = document.getElementById("m_Month");
    var year = document.getElementById("y_Year");
   var table = document.getElementById("Cle_ar");


    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);

    document.getElementById("add").value= '';
    
    row.insertCell(0).innerHTML="";
    row.insertCell(1).innerHTML= data.value;
    row.insertCell(2).innerHTML= file.value;
    row.insertCell(3).innerHTML= form.value;
    row.insertCell(4).innerHTML= date.value+ "/" + month.value + "/"+ year.value;
    row.insertCell(5).innerHTML= '<input id="saveBtn-1" type="button" value = "Edit" onClick="Javacsript:editRow(this)">'   +   '<input type="button" id="Edit-1" value = "Delete" onClick="Javacsript:deleteRow(this)">';

    document.getElementById("re_set").reset();
    }

function editRow(event){

var id = document.getElementById("Cle_ar");
var i;
for(i = 1; i < id.rows.length; i++)
{
id.rows[i].onclick = function ()
{
    let dateArray = this.cells[4].innerHTML.split("/")
    document.getElementById("my_name").value = this.cells[1].innerHTML;
    document.getElementById("my_mobile").value = this.cells[2].innerHTML;
    document.getElementById("my_email").value = this.cells[3].innerHTML;
    document.getElementById("d_Day").value = dateArray[0];
    document.getElementById("m_Month").value = dateArray[1];
    document.getElementById("y_Year").value = dateArray[2];
   };
}
    }

function show() { 
    var mydata = document.getElementById("re_set").value ="";
    var id = document.getElementById("Cle_ar"); 
    var i ;
    for(i = 1; i < id.rows.length; i++){
    id.rows[i].onclick = function ()
    {
        let dayArrays = this.cells[4].innerHTML.split("/")
   document.getElementById("hid_Na").value = this.cells[1].innerHTML;
   document.getElementById("hid_Mo").value = this.cells[2].innerHTML;
   document.getElementById("hid_Em").value = this.cells[3].innerHTML;
   document.getElementById("d_Day").value = dayArrays[0];
    document.getElementById("m_Month").value = dayArrays[1];
    document.getElementById("y_Year").value = dayArrays[2];
    };
  }
}

function deleteRow(obj){

    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("Cle_ar");
    table.deleteRow(index);
}

function load() {
    
    console.log("Page load finished");
 
}

      function rConsole() {
      document.getElementById("re_set").reset();
      
      }   