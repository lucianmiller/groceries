$(document).ready(function() {
  $("form#form").submit(function(event) {
    const blanks = ["item1", "item2", "item3", "item4"];

    blanks.forEach(function(blank) {
      let userInput = $("input#" + blank).val();
      $("#groceries").append("<li>" + userInput + "</li>");
    });

    $("#list").show();
    $("#form").hide();

    event.preventDefault();
  });
});