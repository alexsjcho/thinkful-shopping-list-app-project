"use strict";

//Add Items - Submit Event Handler
$(function() {
  $("#js-shopping-list-form").submit(event => {
    event.preventDefault();
    const newItem = $("#shopping-list-entry").val();
    $(".shopping-list").append(
      $(` <li>
    <span class="shopping-item">${newItem}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`)
    );
  });
});

// Check Functions - .closest() to parent element ('shopping-list)
$(".shopping-list").on("click", ".shopping-item-toggle", function(event) {
  $(this)
    .closest("li")
    .find(".shopping-item")
    .toggleClass("shopping-item__checked");
});

// Delete/Remove Functions - use .toggleClass()
$(".shopping-list").on("click", ".shopping-item-delete", function(event) {
  $(this)
    .closest("li")
    .remove();
});
