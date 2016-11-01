$('document').ready(()=> {
  // Form Siswa Baru
  $('#isKps').click(function(){
    $("#nokarsos").toggleDisabled();
  });

  (function($) {
    $.fn.toggleDisabled = function() {
      return this.each(function(){
        this.disabled = !this.disabled;
      });
    };
  })(jQuery);

});
