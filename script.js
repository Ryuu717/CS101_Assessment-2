// Carousel (JQuery)////////////////////////////////////////////////////////////////////////////
let current_slide = 0;


$("#left").on("click", function(){
  current_slide--;
  if(current_slide < 0){
      current_slide = $(".slide").length -1;
  }
  $("#carousel").css({ transform: `translateX(${-current_slide * $(".slide")[0].offsetWidth}px)`});
});

$("#right").on("click", function(){
  current_slide++;
  if(current_slide > $(".slide").length -1){
      current_slide = 0;
  }
  $("#carousel").css({ transform: `translateX(${-current_slide * $(".slide")[0].offsetWidth}px)`});
});


// Modal rev.3 (JQuery) ///////////////////////////////////////////////////////
$("#hamburger").on("click", function(){
  $("#backdrop").show();
  $(".close").show();
  $("#content-list-overlay").show();
  $("#login-overlay").hide();
  $("#signup-overlay").hide();
  $(".itemDetail-1-overlay").hide();
  $(".itemDetail-2-overlay").hide();
  $("#contact-overlay").hide();
  $("#cart-overlay").hide();
});

$(".login").on("click", function(){
  $("#backdrop").show();
  $(".close").show();
  $("#content-list-overlay").hide();
  $("#login-overlay").show();
  $("#signup-overlay").hide();
  $(".itemDetail-1-overlay").hide();
  $(".itemDetail-2-overlay").hide();
  $("#contact-overlay").hide();
  $("#cart-overlay").hide();
});
  
$("#signup").on("click", function(){
  $("#backdrop").show();
  $(".close").show();
  $("#content-list-overlay").hide();
  $("#login-overlay").hide();
  $("#signup-overlay").show();
  $(".itemDetail-1-overlay").hide();
  $(".itemDetail-2-overlay").hide();
  $("#contact-overlay").hide();
  $("#cart-overlay").hide();
});

$(".contact").on("click", function(){
  $("#backdrop").show();
  $(".close").show();
  $("#content-list-overlay").hide();
  $("#login-overlay").hide();
  $("#signup-overlay").hide();
  $(".itemDetail-1-overlay").hide();
  $(".itemDetail-2-overlay").hide();
  $("#contact-overlay").show();
  $("#cart-overlay").hide();
});

$(".itemDetail-1").on("click", function(){
  $("#backdrop").show();
  $(".close").show();
  $("#content-list-overlay").hide();
  $("#login-overlay").hide();
  $("#signup-overlay").hide();
  $(".itemDetail-1-overlay").show();
  $("#contact-overlay").hide();
  $("#cart-overlay").hide();
});

$(".itemDetail-2").on("click", function(){
  $("#backdrop").show();
  $(".close").show();
  $("#content-list-overlay").hide();
  $("#login-overlay").hide();
  $("#signup-overlay").hide();
  $(".itemDetail-2-overlay").show();
  $("#contact-overlay").hide();
  $("#cart-overlay").hide();
});

$(".cart").on("click", function(){
  $("#backdrop").show();
  $(".close").show();
  $("#content-list-overlay").hide();
  $("#login-overlay").hide();
  $("#signup-overlay").hide();
  $(".itemDetail-1-overlay").hide();
  $(".itemDetail-2-overlay").hide();
  $("#contact-overlay").hide();
  $("#cart-overlay").show();
});

$(".close").on("click", function(){
  $("#backdrop").hide();
  $(".close").hide();
  $("#content-list-overlay").hide();
  $("#login-overlay").hide();
  $("#signup-overlay").hide();
  $(".itemDetail-1-overlay").hide();
  $(".itemDetail-2-overlay").hide();
  $("#contact-overlay").hide();
  $("#cart-overlay").hide();
});



// counter rev.2 (JQuery) ///////////////////////////////////////////////////////////////////////////////
var item_1_count_value = 0;
var item_2_count_value = 0;
var item_1_subtotal = 0;
var item_2_subtotal = 0;
var total_price = 0;


// item-1 ////////////////////////////////////////////////
// minus-button
$(".item-1-minus-btn").on("click", function(){
  item_1_count_value -= 1;
  if(item_1_count_value < 0){
    item_1_count_value = 0;
  }
  item_1_subtotal = (Number($("#item-1-price").text())*item_1_count_value).toFixed(2);
  total_price = (Number(item_1_subtotal) + Number(item_2_subtotal)).toFixed(2);

  $(".item-1-counter").html(item_1_count_value);
  $("#cart-item-1-subtotal").html("$" + item_1_subtotal);
  $("#total-price").html("$" + total_price);
});

// plus-button
$(".item-1-plus-btn").on("click", function(){
  item_1_count_value += 1;
  item_1_subtotal = (Number($("#item-1-price").text())*item_1_count_value).toFixed(2);
  total_price = (Number(item_1_subtotal) + Number(item_2_subtotal)).toFixed(2);

  $(".item-1-counter").html(item_1_count_value);
  $("#cart-item-1-subtotal").html("$" + item_1_subtotal);
  $("#total-price").html("$" + total_price);
});

// Cart add button
$("#item-1-cart-add").on("click", function(){
  if (item_1_count_value > 0) {
    $("#cart-status-red").show();
    $("#cart-status-white").show();
    $(".itemDetail-1-overlay").hide();
    $("#backdrop").hide();
    $(".close").hide();

    $("#cart-item-1").show();
    $("#no-items").hide();
    $("#cart-item-1-name").html($("#item-1-name").text());
    $("#cart-item-1-price").html("$" + $("#item-1-price").text());
    $("#cart-item-1-count").html(item_1_count_value);
    $("#cart-item-1").css("display", "flex");
    // $(".justify-content-end").css("justify-content", "end");

    item_1_subtotal = (Number($("#item-1-price").text())*item_1_count_value).toFixed(2);
    alert("Added " + item_1_count_value + " items to your cart!\n" + "Subtotal = $ "  + item_1_subtotal);
  }});



// item-2 ////////////////////////////////////////////////
// minus-button
$(".item-2-minus-btn").on("click", function(){
  item_2_count_value -= 1;
  if(item_2_count_value < 0){
    item_2_count_value = 0;
  }
  item_2_subtotal = (Number($("#item-2-price").text())*item_2_count_value).toFixed(2);
  total_price = (Number(item_1_subtotal) + Number(item_2_subtotal)).toFixed(2);

  $(".item-2-counter").html(item_2_count_value);
  $("#cart-item-2-subtotal").html("$" + item_2_subtotal);
  $("#total-price").html("$" + total_price);
});

// plus-button
$(".item-2-plus-btn").on("click", function(){
  item_2_count_value += 1;
  item_2_subtotal = (Number($("#item-2-price").text())*item_2_count_value).toFixed(2);
  total_price = (Number(item_1_subtotal) + Number(item_2_subtotal)).toFixed(2);

  $(".item-2-counter").html(item_2_count_value);
  $("#cart-item-2-subtotal").html("$" + item_2_subtotal);
  $("#total-price").html("$" + total_price);
});


// Cart add button
$("#item-2-cart-add").on("click", function(){
  if (item_2_count_value > 0) {
    $("#cart-status-red").show();
    $("#cart-status-white").show();
    $(".itemDetail-2-overlay").hide();
    $("#backdrop").hide();
    $(".close").hide();

    $("#cart-item-2").show();
    $("#no-items").hide();
    $("#cart-item-2-name").html($("#item-2-name").text());
    $("#cart-item-2-price").html("$" + $("#item-2-price").text());
    $("#cart-item-2-count").html(item_2_count_value);
    $("#cart-item-2").css("display", "flex");
    $(".justify-content-end").css("justify-content", "end");

    item_2_subtotal = (Number($("#item-2-price").text())*item_2_count_value).toFixed(2);
    alert("Added " + item_2_count_value + " items to your cart!\n" + "Subtotal = $ "  + item_2_subtotal);
  }});


// Proceed to payment
$("#proceed-to-payment").on("click", function(){
  if(total_price > 0){
    alert("Thank you!\nThis is the end of the project");
  } else {
    alert("There is no items");
  }});

// Keep shopping
$("#keep-shopping").on("click", function(){
  $("#backdrop").hide();
  $(".close").hide();
  $("#content-list-overlay").hide();
  $("#login-overlay").hide();
  $("#signup-overlay").hide();
  $(".itemDetail-1-overlay").hide();
  $(".itemDetail-2-overlay").hide();
  $("#contact-overlay").hide();
  $("#cart-overlay").hide();
});





// Animation ///////////////////////////////////////////////////////////////////////////////
$(function() {
  const image = document.querySelectorAll(".img-wrap-1");

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add("confetti-animation");
      } else {
        entry.target.classList.remove("confetti-animation");
      }
    });
  });

  Array.prototype.forEach.call(image, function(img) {
    observer.observe(img);
  });
});

$(function() {
  const image = document.querySelectorAll(".img-wrap-2");

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add("smile-box-animation");
      } else {
        entry.target.classList.remove("smile-box-animation");
      }
    });
  });

  Array.prototype.forEach.call(image, function(img) {
    observer.observe(img);
  });
});

$(function() {
  const image = document.querySelectorAll(".img-wrap-3");

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add("arch-animation");
      } else {
        entry.target.classList.remove("arch-animation");
      }
    });
  });

  Array.prototype.forEach.call(image, function(img) {
    observer.observe(img);
  });
});
