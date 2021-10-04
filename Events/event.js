$(function() {
//   $('img').error(function () {
//     $("img").attr("src", "img/error.png");
//   });

    // $('img').error(function(){
    //      var imagem = $(this).attr("src");
    //      alert('Imagem' +imagem+ 'Indisponivel!');
    //      $('img').attr("src","img/error.png");
    //  });
     
//   $('img').width($(window).width()).height($(window).height());
//   $(window).resize(function(){
//       $('img').width($(window).width()).height($(window).height());
//   })

  $('body').css("height", "5000px");

  $(window).scroll(function(){
      var topo = $(window).scrollTop();
      if(topo>50){
          $('img').fadeOut('1000');
      }else{
          $('img').fadeIn('1000');
      }
  });
});
