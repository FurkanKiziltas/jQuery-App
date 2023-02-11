$( function() {
  $( "#sortable" ).sortable();
} );

$(document).ready(function () {
  $("#input-outside").on("input", function () {
    $("body").css("background-color", $(this).val())
    $(".container h2").css("color", $(this).val());
  });
  $("#input-inside").on("input", function () {
    $(".container").css("background-color", $(this).val())
    ;
  });
}); 

$(document).ready(function() {
  const ranks = ["Iron", "Bronze", "Silver", "Gold", "Platinum", "Diamond", "Master", "Grandmaster", "Challenger"];
  
  $("#rankbutton").click(function() {
    $("#container1").show();
    $("#container1").css("background-color", "rgba(0, 0, 0, 0.5)");
    
    $("#container1 img").off().click(function() {
      const randomRank = ranks[Math.floor(Math.random() * ranks.length)];
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Seçtiğiniz Rank',
        text: randomRank,
        showConfirmButton: false,
        timer: 0
      });
    });
  });
}); 

$(document).ready(function() {
  $("#container1").click(function(e) {
    const container = $("img");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $("#container1").hide();
    }
  });
});

