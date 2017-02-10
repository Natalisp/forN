
$(function() {
  // var data = {
  //               "Jan":{profits:100000,inventory:4000},
  //               "Feb":{profits:120000,inventory:4500},
  //               "Mar":{profits:150000,inventory:4700},
  //               "Apr":{profits:90000,inventory:3200},
  //               "May":{profits:75000,inventory:3000},
  //               "Jun":{profits:87000,inventory:2000},
  //               "Jul":{profits:190000,inventory:500}
  //              };

  // displayData(data);
  // animate();
  getData();

  function getData() {
    $.ajax({
      type: 'GET',
      url: window.location.href + "/" + "data",
      success: function(resp) {
        displayData(resp);
        animate();
       changeChart(resp)
      }
    })
  }

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
  for (var i=0; i < data.length; i++){
    var inventory = data[i]["inventory"];
    var inv_calc = (data[i]["inventory"])/100;
    var month = data[i]["month"];

    $('.data').append("<li><span>"+month+"</span></li>");
    $('.bars').append("<li><div data-percentage='"+inv_calc+"' class='bar'></div></li>");

  };
}

function changeData(data){
  $('.bars').html('');
  $('.data').html('');
  for (var i=0; i < data.length; i++){
    var profits = data[i]["profits"];
    var prof_calc = (data[i]["profits"])/2000;
        month = data[i]["month"];

    $('.data').append("<li><span>"+month+"</span></li>");
    $('.bars').append("<li><div data-percentage='"+prof_calc+"' class='bar'></div></li>");

  };
}

function animate(){
  $('.bar').css('width','0px');
  $(".bars .bar").delay(1000).each(function(i){
    var percentage = $(this).data('percentage');

    $(this).delay(i+"00").animate({'width': percentage + '%'}, 700);

  });

}
