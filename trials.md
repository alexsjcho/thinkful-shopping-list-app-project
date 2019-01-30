<!-- $(function() {
  $(".js-shopping-list-form").submit(event => {
    event.preventDefault();
    //Empty the search query item
    $(".js-shopping-list-form").empty();
  });
});

//Add Item functionality
function addItem(event) {
  event.preventDefault();
  const newItem = [];
  $("submit").click(function() {
    newItem.push($(`
    <li>
          <span class="shopping-item">a</span>
          <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
              <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
              <span class="button-label">delete</span>
            </button>
          </div>
        </li>`;));

  const newItem = $("#shopping-list-entry").val();
  $("#shopping-list-entry").append(
    $(
      <li>
        <span class="shopping-item">$(newItem)</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>
    )
  );


} -->
