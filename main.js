// Uses jquery

$(document).ready(function(){
  
  $(".search").click(function(){
    var searchTerm = $("#searchBar").val();
    
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";
    $.ajax({
      type: "GET",
      url: url,
      async: false,
      dataType: "json",
      success: function(data){
        $(".output").html(" ");
        for ( var i=0 ; i < data[1].length ; i++){
        $(".output").prepend("<li><a href='" + data[3][i] + "' target='blank'><div class='result'>" + data[1][i] + "<br>" + data[2][i] + "</div></a></li>");}
        $("#searchBar").val(" ");
      },
      error: function(errorMessage){
        alert("Error");
      }
    });
  
    });
    $("#searchBar").keypress(function(e){
    if(e.which == 13){
      $(".search").click();
    }
  });

});
