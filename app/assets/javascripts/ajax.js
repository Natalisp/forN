function loadData() {
  $.get("/data")
  .done(function(data) {
    D = JSON.parse(data);
    console.log(data)
  });
}


$(function() {
  var data = {
                "Jan":{profits:100000,inventory:4000},
                "Feb":{profits:120000,inventory:4500},
                "Mar":{profits:150000,inventory:4700},
                "Apr":{profits:90000,inventory:3200},
                "May":{profits:75000,inventory:3000},
                "Jun":{profits:87000,inventory:2000},
                "Jul":{profits:190000,inventory:500}
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
    var inv_calc = (data[key].inventory)/100;

    $('.data').append("<li><span>"+key+"</span></li>");
    $('.bars').append("<li><div data-percentage='"+inv_calc+"' class='bar'>"+inventory+"</div></li>");

  };
}

function changeData(data){
  console.log(data)
  $('.bars').html('');
  $('.data').html('');
  for (var key in data){
    var profits = data[key].profits;
    var prof_calc = (data[key].inventory)/100;

    $('.data').append("<li><span>"+key+"</span></li>");
    $('.bars').append("<li><div data-percentage='"+prof_calc+"' class='bar'>"+profits+"</div></li>");

  };
}


function animate(){
  $('.bar').css('width','0px');
  $(".bars .bar").delay(1000).each(function(i){
    var percentage = $(this).data('percentage');

    $(this).delay(i+"00").animate({'width': percentage + '%'}, 700);

  });


}
