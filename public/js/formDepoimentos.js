$("#formDepoimentos").validate({
 rules: {
     inputOpnion: {
         required: true,
     },
     nome: {
         required: true,
         maxlength: 100,
         minlength: 5,
         minWords: 2
     },
     profissao: {
         required: true,
     },
     mensagem: {
         required: true,
     },
 },
 errorElement: 'div',
 errorPlacement: function(error, element) {
     var placement = $(element).data('error');
     if (placement) {
         $(placement).append(error)
     } else {
         error.insertAfter(element);
     }
 }
});