$(function () {
  // your code here

  // Exercise 1
  $(".accordion-header").click(function () {
    if ($(this).next().is(":visible")) {
      $(".accordion-content").slideUp();
    } else {
      $(".accordion-content").slideUp();
      $(this).next().slideDown();
    }
  });

  // Exercise 2
  $("button").click(function () {
    $.ajax({
      url: "https://dummyjson.com/todos",
      type: "GET",
      success: function (response) {
        let todos = response.todos;
        let ul = $("ul");
        todos.forEach((todo) => {
          var li = $("<li></li>").text(todo.todo);
          ul.append(li);
        });
      },
      error: function (error) {
        console.log(error);
      },
    });
  });
});
