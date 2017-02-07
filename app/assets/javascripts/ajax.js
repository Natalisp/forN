function loadData() {
  $.get("/data")
  .done(function(data) {
    D = JSON.parse(data);
    console.log(data)
  });
}


$(function() {
  var data = {
                "Jan":{profits:50,inventory:10},
                "Feb":{profits:70,inventory:20},
               };



  displayData(data);
  animate();
  changeChart(data)

function changeChart(data) {
  $('select').change(function(){
     if($('select option:selected').text() == "Profits"){
       changeData(data);
       animate();
     }
     else{
       displayData(data);
       animate();
     }
  });
}




  $('input:button').click(function(){
    var name = $('#txtSkill').val(),
        perc = $('#txtPerc').val();

    if(name && perc){
      data[name] = {profits:perc};
      displayData(data);
      animate();

      var newheight = $('.chart').outerHeight() + 50;
      $('.chart').css('height',newheight);
    }else{
      animate();
    }
    $('input:text').val('');
  });
});


function displayData(data){
  $('.bars').html('');
  $('.data').html('');
  for (var key in data){
    var inventory = data[key].inventory;

    $('.data').append("<li><span>"+key+"</span></li>");
    $('.bars').append("<li><div data-percentage='"+data[key].inventory+"' class='bar'>"+inventory+"</div></li>");

  };
}

function changeData(data){
  console.log(data)
  $('.bars').html('');
  $('.data').html('');
  for (var key in data){
    var profits = data[key].profits;

    $('.data').append("<li><span>"+key+"</span></li>");
    $('.bars').append("<li><div data-percentage='"+data[key].profits+"' class='bar'>"+profits+"</div></li>");

  };
}


function animate(){
  $('.bar').css('width','0px');
  $(".bars .bar").delay(1000).each(function(i){
    var percentage = $(this).data('percentage');

    $(this).delay(i+"00").animate({'width': percentage + '%'}, 700);

  });


}
