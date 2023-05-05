$(document).ready(function () {
    $(".form-control").on("input", function () {
      var name = $("#name")
        .val()
        .toLowerCase()
        .replace(/\b(\w)/g, function (s) {
          return s.toUpperCase();
        });
      var affect = $("#affect").val();
      var anxiety = $("#anxiety").val();
      var depression = $("#depression").val();
      var text =
        name +
        " presents with " +
        affect +
        " affect. States anxiety is " +
        anxiety +
        "/10 and depression is " +
        depression +
        "/10. Patient denies SI/SH.";
      $("#situational-awareness").val(text);
    });
  });
  