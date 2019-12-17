$(document).ready(function () {

    var arr=new Array(Object);
    var k=0;


 $.getJSON("employees.json",function(data){
  var empdata='' ;
  $.each(data,function(key,value){
      empdata +="<tr><td>"+value.id+"</td>";
      empdata +="<td>"+value.name+"</td>";
      empdata +="<td>"+value.dob+"</td>";
      empdata += "<td> <i class='rmv  fa fa-trash'>delete</i></td></tr>";

           });
  $("#emp_table").append(empdata);

     });





    $("#datepicker").click(function(){
        $( "#datepicker" ).datepicker({
            dateFormat:"yy-mm-dd",
            changeMonth:true,
            changeYear:true,
            /*maxDate:'4Y'*/
           /* maxDate:' 4Y  4M 3D',
            minDate:'-2Y  -2M -3D'
*/
        });
    });



    //storing data
  $("#btn_fm").click(function () {
      arr[k] = {
          'id' : $('input[name=id]').val(),
          'name' : $('input[name=name]').val(),
          'dob' : $('input[name=dt]').val()

            };
              k++;

    //alert(arr[k-1].name);

  if(k!=null){
    $("#emp_table").append("<tr><td>"+arr[k-1].id+"</td>"
                           +"<td>"+arr[k-1].name+"</td>"
                           +"<td>"+arr[k-1].dob+"</td>"
                           +"<td> <i class='rmv  fa fa-trash'>delete</i></td></tr>"
                           );

   }

   });

    $(document).on('click', '.rmv', function () {
        $(this).parents('tr').remove();
    });

})