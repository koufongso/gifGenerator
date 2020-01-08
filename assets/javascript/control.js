var tagList = []; // store all the tag

$(document).on("click", ".btn-add", function (event) {
    event.preventDefault();
    var content = $('#tag-content').val();
    console.log(content);
    $('#tag-content').val("");
    tagList.push(content);
    // create and display the tag
    var newTag = $('<div>').addClass('tag');
    newTag.html(`<span class="btn-close">&#10005</span> <span class="tag-name">${content}</span>`);
    $('#display-tag').append(newTag);
});

var a;
$(document).on("click", ".btn-close", function () {
    tagList.splice(tagList.indexOf($(this).siblings().text()),1); // remove the tag from the array
    $(this).parent('.tag').remove();
});


$(document).on("click", ".tag-name", function () {
    var key = "JRvrNMtu2KeupmBlZMUIUYAwxz2ugM87";
    var content = $(this).text();
    var queryURL = `http://api.giphy.com/v1/gifs/search?q=${content}&api_key=${key}`
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        var data = response.data;
        console.log(data);
        for (var i = 0; i < data.length; i++) {
            var newDiv = $('<div>').addClass("gif").html(`<img src=${data[i].images.fixed_height.url}>`);
            $('#display-gif').prepend(newDiv);
        }

    });
});
