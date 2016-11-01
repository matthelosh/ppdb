$('document').ready(()=> {
  // Form Siswa Baru
  $('#isKps').click(function(){
    if($("#nokarsos").attr("disabled")){
      $("#nokarsos").removeAttr("disabled")

    }else if (!$("#nokarsos").attr("disabled")){
      $("#nokarsos").attr("disabled");
    }
  });


});
