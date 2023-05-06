const data = [{
  "dashboard_type": "",
  "dashboard_group": "Test Demo",
  "dashboard_name": "Dashboard 1",
  "dashboard_description": "Test Description",
  "dashboard_id": "1",
  "dashboard_role": "admin, user"
},
{
  "dashboard_type": "",
  "dashboard_group": "Test Demo",
  "dashboard_name": "Dashboard 2",
  "dashboard_description": "Test Description",
  "dashboard_id": "3",
  "dashboard_role": "systemadmin"
},
{
  "dashboard_type": "",
  "dashboard_group": "Page Builder Demo",
  "dashboard_name": "Dashboard 3",
  "dashboard_description": "Test Description",
  "dashboard_id": "3",
  "dashboard_role": "user"
},
{
  "dashboard_type": "",
  "dashboard_group": "Metabase",
  "dashboard_name": "Dashboard 4",
  "dashboard_description": "Test Description",
  "dashboard_id": "4",
  "dashboard_role": "admin"
}];




const cards = data.map(data => {
  return `
  <div class="card">
  <h1 ><i class="fa fa-star star" id="favourite" ></i>${data.dashboard_name}<i class="fa fa-bars"></i></h1>
  <div class="moreDetails">
  <p>Group:${data.dashboard_group}</p>
  </div>
  </div>
  `;
});


var cardsContainer = $('#cards-container');
cardsContainer.html(cards.join('\n'));






//add button



const addButton = $('#add-button');
const addForm = $('#add-form');
const closebutton = $('#closeButton');

addButton.on('click', () => {
  addForm.show();
});

closebutton.on('click', () => {
  addForm.hide();
});



addForm.on('submit', event => {
  event.preventDefault();

  const dashboardGroup = $("#selectGroup").find(":selected").val();
  var dashboardName = $('input[name="boardname"]').val();

  var newDetail = {  dashboardGroup, dashboardName };
  data.push(newDetail);

  const newCard = `
        <div class="card">
        <h1 ><i class="fa fa-star star" id="favourite" ></i>${newDetail.dashboardName}<i class="fa fa-bars"></i></h1>
        <div class="moreDetails">
  <p>Group:${newDetail.dashboardGroup}</p>
  </div>

        </div>
      `;

  cards.push(newCard);
  cardsContainer.html(cards.join('\n'));
  addForm.hide();

  const newCardElement = cardsContainer.children().last();
  newCardElement[0].scrollIntoView({ behavior: 'smooth' });
});

cardsContainer.on('click', '.star', function () {
  $(this).toggleClass('yellow');
});


//left panel action

//starred button
let starredOnly = false;

const starred = $('#starredSelect');
const showAllButton = $("#allSelect");
const recentlyAddedButton = $("#recentSelect");


cardsContainer.on('click', '.star', function () {
  const card = $(this).closest('.card');
  const isStarred = card.attr('data-starred') === 'true';

  if (isStarred) {
    card.attr('data-starred', 'false');
    $(this).removeClass('yellow');
  } else {
    card.attr('data-starred', 'true');
    $(this).addClass('yellow');
  }
});

starred.on('click', () => {
  $('.headTitle').html('Starred');
  starredOnly = !starredOnly;

  if (starredOnly) {
    cardsContainer.find('.card:not([data-starred="true"])').hide();
  } else {
    cardsContainer.find('.card').show();
  }
});

//recent button
recentlyAddedButton.click(function () {
  $('.headTitle').html('Recent');
  // Clear existing cards in container
  $("#cards-container").empty();

  // Add recent cards to container
  for (var i = cards.length - 1; i >= 0; i--) {
    $("#cards-container").append(cards[i]);
  }
});

//all button
showAllButton.click(function () {
  $('.headTitle').html('All');
  cardsContainer.html(cards.join('\n'));
});


//group buttons
$("#testDemo").click(() => {
  $('.headTitle').html('Test Demo');
  $('#cards-container').empty();

  for (var i = 0; i < data.length; i++) {
   
    if (data[i].dashboard_group=== 'Test Demo' || data[i].dashboardGroup === 'Test Demo' ) {
      if(data[i].dashboard_group=== 'Test Demo'){
      console.log(data[i].dashboard_name);
      
      var cad =
      `<div class="card">
      <h1 ><i class="fa fa-star star" id="favourite" ></i>${data[i].dashboard_name}<i class="fa fa-bars"></i></h1>
      </div>`}
    }
    cardsContainer.append(cad);
    if(data[i].dashboardGroup === 'Test Demo'){
      console.log(data[i].dashboardName )

      var cad =
      `<div class="card">
      <h1 ><i class="fa fa-star star" id="favourite" ></i>${data[i].dashboardName}<i class="fa fa-bars"></i></h1>
      </div>`}
    }
   cardsContainer.append(cad);
  }
);

$("#builderDemo").click(() => {
  $('.headTitle').html('Page Builder Demo');

  for (var i = 0; i < data.length; i++) {
   
    if (data[i].dashboard_group=== 'Page Builder Demo' || data[i].dashboardGroup === 'Page Builder Demo' ) {
      if(data[i].dashboard_group=== 'Page Builder Demo'){
      console.log(data[i].dashboard_name);
      
      var cad =
      `<div class="card">
      <h1 ><i class="fa fa-star star" id="favourite" ></i>${data[i].dashboard_name}<i class="fa fa-bars"></i></h1>
      </div>`}
    }
    cardsContainer.append(cad);

    if(data[i].dashboardGroup === 'Page Builder Demo'){
      console.log(data[i].dashboardName )

      var cad =
      `<div class="card">
      <h1 ><i class="fa fa-star star" id="favourite" ></i>${data[i].dashboardName}<i class="fa fa-bars"></i></h1>
      </div>`}
    }
   cardsContainer.append(cad);
  
});

$("#metaDemo").click(() => {
  $('.headTitle').html('MetaDemo');


  $('#cards-container').empty();

  for (var i = 0; i < data.length; i++) {
   
    if (data[i].dashboard_group=== 'Metabase' || data[i].dashboardGroup === 'Metabase' ) {
      if(data[i].dashboard_group=== 'Metabase'){
      console.log(data[i].dashboard_name);
      
      var cad =
      `<div class="card">
      <h1 ><i class="fa fa-star star" id="favourite" ></i>${data[i].dashboard_name}<i class="fa fa-bars"></i></h1>
      </div>`}
    }
    cardsContainer.append(cad);
    if(data[i].dashboardGroup === 'Metabase'){
      console.log(data[i].dashboardName )

      var cad =
      `<div class="card">
      <h1 ><i class="fa fa-star star" id="favourite" ></i>${data[i].dashboardName}<i class="fa fa-bars"></i></h1>
      </div>`}
    }
   cardsContainer.append(cad);
  
});




$("#SearchBox").on("keyup", function() {
  var value = $(this).val().toLowerCase();
  $("#cards-container .card").filter(function() {
    $(this).toggle($(this).find("h1").text().toLowerCase().indexOf(value) > -1);
  });
});