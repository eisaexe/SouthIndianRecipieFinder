$(document).ready(function() {
  const hamburger = $('.hamburger');
  const menubar = $('.menu-bar');

  hamburger.on('click', function() {
    menubar.toggleClass('active');
  });

  $('#search').on('keyup', function() {
    const searchBox = $(this).val().toUpperCase();
    const foods = $('.card-shadow');
    const foodNames = $('#food-list h3');
    let found = false;

    foodNames.each(function(index) {
      const textValue = $(this).text().toUpperCase();
      if (textValue.indexOf(searchBox) > -1) {
        $(foods[index]).show();
        found = true;
      } else {
        $(foods[index]).hide();
      }
    });

    $('#none').toggle(!found);
  });

  $('.fa-times').on('click', function() {
    $('#search').val('');
    $('#food-list .card-shadow').show();
    $('#none').hide();
  });

  $('.get-recipe').on('click', function() {
    const recipe = $(this).data('recipe');
    $('.meal-detail').hide(); // Hide all details first
    if (recipe === 'sisig') {
      $('#meal-detail').show();
    } else if (recipe === 'adobo') {
      $('#second-meal-detail').show();
    } else if (recipe === 'newMeal1') {
      $('#new-meal-detail1').show();
    } else if (recipe === 'newMeal2') {
      $('#new-meal-detail2').show();
    } else if (recipe === 'newMeal3') {
      $('#new-meal-detail3').show();
    } else if (recipe === 'newMeal4') {
      $('#new-meal-detail4').show();
    } else if (recipe === 'newMeal5') {
      $('#new-meal-detail5').show();
    }
  });

  $('.recipe-close-btn').on('click', function() {
    $('#meal-detail, #second-meal-detail, #new-meal-detail1, #new-meal-detail2, #new-meal-detail3, #new-meal-detail4, #new-meal-detail5').hide();
  });
});
