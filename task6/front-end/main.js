$(function() {
    $.ajax({
        type: "GET",
        url: "/api/hello",
        success: function (data) {
            $('#dynamic-content').text(data);
        }
    });
});
