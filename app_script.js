// document.addEventListener('DOMContentLoaded', function() {
//     var checkbox = document.querySelector('input[type="checkbox"]');
//     checkbox.addEventListener('change', function() {
//         if (checkbox.checked) {
//             // do this
//             console.log('Checked');
//         } else {
//             // do that
//             console.log('Not checked');
//         }
//     });
// });

$(document).ready(function() {

    // ---------SECTION TRANSITION ---------//
    $('#begin-show-btn').on('click', function() {
        $('#landing-page').css('display', 'none');
        $('#header').css('display', 'block');
        $('#home-page').css('display', 'block');
        $('#home-btn').parent().addClass('active');
    });
    $('#home-btn').on('click', function() {
        $('#home-page').css('display', 'block');
        $('#food-page').css('display', 'none');
        $('#drinks-page').css('display', 'none');
        $('#events-page').css('display', 'none');
        $('#home-btn').parent().addClass('active');
        $('#food-btn').parent().removeClass('active');
        $('#events-btn').parent().removeClass('active');
        $('#drinks-btn').parent().removeClass('active');
        $('#allergy-container').css('display', 'none');
    });
    $('#food-btn').on('click', function() {
        $('#home-page').css('display', 'none');
        $('#food-page').css('display', 'block');
        $('#drinks-page').css('display', 'none');
        $('#events-page').css('display', 'none');
        $('#allergy-container').css('display', 'block');
        $('#food-btn').parent().addClass('active');
        $('#home-btn').parent().removeClass('active');
        $('#events-btn').parent().removeClass('active');
        $('#drinks-btn').parent().removeClass('active');
    });
    $('#drinks-btn').on('click', function() {
        $('#home-page').css('display', 'none');
        $('#food-page').css('display', 'none');
        $('#drinks-page').css('display', 'block');
        $('#events-page').css('display', 'none');
        $('#allergy-container').css('display', 'block');
        $('#drinks-btn').parent().addClass('active');
        $('#home-btn').parent().removeClass('active');
        $('#food-btn').parent().removeClass('active');
        $('#events-btn').parent().removeClass('active');
    });
    $('#events-btn').on('click', function() {
        $('#home-page').css('display', 'none');
        $('#food-page').css('display', 'none');
        $('#drinks-page').css('display', 'none');
        $('#events-page').css('display', 'block');
        $('#allergy-container').css('display', 'none');
        $('#events-btn').parent().addClass('active');
        $('#home-btn').parent().removeClass('active');
        $('#food-btn').parent().removeClass('active');
        $('#drinks-btn').parent().removeClass('active');
    });

    // ---------HOME PAGE ---------//

    //call waiter
    $('.call-waiter-box').on('click', function() {
        $('#home-popup').css('display', 'block');
        $('.call-waiter-container').css('display', 'block');
    });
    $('.call-waiter-btn').on('click', function() {
        $('.call-waiter-container').css('display', 'none');
        $('.waiter-confirmation').css('display', 'block');
    });
    $('.close-popup-home').on('click', function() {
        $('#home-popup').css('display', 'none');
        $('.call-waiter-container').css('display', 'none');
        $('.waiter-confirmation').css('display', 'none');
        $('.become-member').css('display', 'none');
    });
    //become member
    $('.become-member-box').on('click', function() {
        $('#home-popup').css('display', 'block');
        $('.become-member').css('display', 'block');
    });
    $('form').on('submit', function(event) {
        $('.become-member').css('display', 'none');
        $('.submit-email').css('display', 'block');
    });
    //take-away
    $('.take-away-box').on('click', function() {
        $('#home-page').css('display', 'none');
        $('#food-page').css('display', 'block');
        $('#drinks-page').css('display', 'none');
        $('#events-page').css('display', 'none');
        $('#food-btn').parent().addClass('active');
        $('#home-btn').parent().removeClass('active');
        $('#events-btn').parent().removeClass('active');
        $('#drinks-btn').parent().removeClass('active');
        $('.takeaway-container').css('display', 'block');
    });
    //events

    $('.upcoming-events-box').on('click', function() {
        $('#home-page').css('display', 'none');
        $('#food-page').css('display', 'none');
        $('#drinks-page').css('display', 'none');
        $('#events-page').css('display', 'block');
        $('#food-btn').parent().removeClass('active');
        $('#home-btn').parent().removeClass('active');
        $('#events-btn').parent().addClass('active');
        $('#drinks-btn').parent().removeClass('active');
        $('.takeaway-container').css('display', 'none');
    });



    // ---------FOOD PAGE ---------//

    //alergy
    $("#glutenfree").change(function() {
        if ($(this).prop('checked')) {
            $('.food-item-container').css('display', 'none');
            $('.lowcarbs').css('display', 'none');
            $('.lowsugar').css('display', 'none');
            $('.glutenfree').css('display', 'block');
        } else if (($(this).prop('checked')) && ($('#lowsugar').prop('checked'))) {
            $('.food-item-container').css('display', 'none');
            $('.lowcarbs').css('display', 'none');
            $('.glutenfree').css('display', 'block');
            $('.lowsugar').css('display', 'block');
        } else if (($(this).prop('checked')) && ($('#lowcarbs').prop('checked'))) {
            $('.lowsugar').css('display', 'none');
            $('.glutenfree').css('display', 'block');
            $('.lowcarbs').css('display', 'block');
        } else if (($(this).prop('checked')) && ($('#lowsugar').prop('checked')) && ($('#lowcarbs').prop('checked'))) {
            $('.food-item-container').css('display', 'none');
            $('.glutenfree').css('display', 'block');
            $('.lowsugar').css('display', 'block');
            $('.lowcarbs').css('display', 'block');
        } else {
            $('.food-item-container').css('display', 'block');
        }
    });
    $("#lowsugar").change(function() {
        if ($(this).prop('checked')) {
            $('.food-item-container').css('display', 'none');
            $('.glutenfree').css('display', 'none');
            $('.lowcarbs').css('display', 'none');
            $('.lowsugar').css('display', 'block');
        } else if (($(this).prop('checked')) && ($('#lowcarbs').prop('checked'))) {
            $('.food-item-container').css('display', 'none');
            $('.glutenfree').css('display', 'none');
            $('.lowsugar').css('display', 'block');
            $('.lowcarbs').css('display', 'block');
        } else {
            $('.food-item-container').css('display', 'block');
        }
    });
    $("#lowcarbs").change(function() {
        if ($(this).prop('checked')) {
            $('.food-item-container').css('display', 'none');
            $('.glutenfree').css('display', 'none');
            $('.lowsugar').css('display', 'none');
            $('.lowcarbs').css('display', 'block');
        } else {
            $('.food-item-container').css('display', 'block');
        }
    });

    //click on customize food
    $('.customize-button').on('click', function() {
        $('.customize-popup').css('display', 'block');
        $('.customize-food-container').css('display', 'block');
    });
    // $('.submit-custom-btn').on('click', function() {
    //     $('.customize-food-container').css('display', 'none');
    //     $('.customize-confirmation').css('display', 'block');
    // });
    $('.close-custom-order').on('click', function() {
        $('.customize-popup').css('display', 'none');
        $('.customize-food-container').css('display', 'none');
        $('.customize-confirmation').css('display', 'none');
    });

    //add orders via plus
    //create an empty array and put all orders in it
    var orderList = new Array();
    var totalOrderPrice = 0;

    $(".add-btns").on('click', function() {
        $("#order-popup").css("display", "block");
        $("#order-popup").css("opacity", "1");
        $(this).siblings(".remove-btns").css("visibility", "visible");
        $(this).siblings(".remove-btns").css("opacity", "1");
        $(".item-quantity-big-container").css("opacity", "1");
        disappear($(".item-quantity-big-container"));

        //add number on top of image
        let selection = $(this).siblings(".food-name").children("h1").text();
        if (orderList.includes(selection)) {
            let internalCount = $(`.unit-name:contains(${selection})`).siblings(".unit-quantity").text();
            internalCount++;
            $(`.unit-name:contains(${selection})`).siblings(".unit-quantity").text(internalCount);
            $(this).siblings(".item-quantity-big-container").children("p").text(internalCount);
            orderList.push(selection);
        } else {
            $(this).siblings(".item-quantity-big-container").children("p").text(1);

            $(".food-list").append($('<li>')
                .addClass("list-item-food")
                .append($('<i>')
                    .addClass('fas fa-minus-circle')
                    .on("click", RemoveQuantity))
                .append($('<p>')
                    .addClass("unit-quantity")
                    .text('1'))
                .append($('<p>')
                    .addClass('unit-name')
                    .text($(this).siblings(".food-name").children("h1").text()))
                .append($('<p>')
                    .addClass("unit-price")
                    .text($(this).siblings(".food-price").children("h1").text())
                    .add("<span>&nbsp;Kr</span>"))
                .append($('<i>')
                    .addClass("fas fa-plus-circle")
                    .on("click", AddQuantity)));

            orderList.push(selection);
        }
        FinalPrice()
    });

    //add custom orders via customized button
    //create an empty array and put all orders in it

    $(".submit-custom-btn").on('click', function() {
        $('.customize-food-container').css('display', 'none');
        $('.customize-confirmation').css('display', 'block');

        $("#order-popup").css("display", "block");
        $("#order-popup").css("opacity", "1");
        let foodItemParent = $(this).parents('.customize-popup');
        foodItemParent.siblings(".remove-btns").css("visibility", "visible");
        foodItemParent.siblings(".remove-btns").css("opacity", "1");
        $(".item-quantity-big-container").css("opacity", "1");
        disappear($(".item-quantity-big-container"));

        //add number on top of image
        let selection = foodItemParent.siblings(".food-name").children("h1").text();
        if (orderList.includes(selection)) {
            let internalCount = $(`.unit-name:contains(${selection})`).siblings(".unit-quantity").text();
            internalCount++;
            $(`.unit-name:contains(${selection})`).siblings(".unit-quantity").text(internalCount);
            foodItemParent.siblings(".item-quantity-big-container").children("p").text(internalCount);
            orderList.push(selection);
        } else {
            foodItemParent.siblings(".item-quantity-big-container").children("p").text(1);

            $(".food-list").append($('<li>')
                .addClass("list-item-food")
                .append($('<i>')
                    .addClass('fas fa-minus-circle')
                    .on("click", RemoveQuantity))
                .append($('<p>')
                    .addClass("unit-quantity")
                    .text('1'))
                .append($('<p>')
                    .addClass('unit-name')
                    .text(foodItemParent.siblings(".food-name").children("h1").text()))
                .append($('<p>')
                    // .addClass('unit-name')
                    .text('custom order'))
                .append($('<p>')
                    .addClass("unit-price")
                    .text(foodItemParent.siblings(".food-price").children("h1").text())
                    .add("<span>&nbsp;Kr</span>"))
                .append($('<i>')
                    .addClass("fas fa-plus-circle")
                    .on("click", AddQuantity)));

            orderList.push(selection);
        }
        FinalPrice()
    });

    //click on remove in the food menu
    $(".remove-btns").on('click', function() {
        let selection = $(this).siblings(".food-name").children("h1").text();
        let internalCount = $(`.unit-name:contains(${selection})`).siblings(".unit-quantity").text();
        internalCount--;
        $(`.unit-name:contains(${selection})`).siblings(".unit-quantity").text(internalCount);
        $(this).siblings(".item-quantity-big-container").children("p").text(internalCount);
        $(".item-quantity-big-container").css("opacity", "1");
        disappear($(".item-quantity-big-container"));

        //remove item if quantity =0
        if (internalCount == 0) {
            $(`.unit-name:contains(${selection})`).parent().remove();
            $(this).css("visibility", "hidden");
            $(this).css("opacity", "0");
        }

        let index = orderList.indexOf(selection)
        if (index > -1) {
            orderList.splice(index, 1);
        }
        FinalPrice();
        isPopupEmpty();
    });


    //Add items inside the popup
    function AddQuantity() {
        let selection = $(this).siblings('.unit-name').text();
        let newCount = parseInt($(this).siblings(".unit-quantity").text()) + 1;
        $(this).siblings(".unit-quantity").text(newCount);
        orderList.push(selection);
        FinalPrice();
    };


    //remove items inside the popup
    function RemoveQuantity() {
        let selection = $(this).siblings('.unit-name').text();
        let newCount = parseInt($(this).siblings(".unit-quantity").text()) - 1;
        $(this).siblings(".unit-quantity").text(newCount);

        //remove outside minus button if quantity =0
        if (newCount == 0) {
            $(this).parent().remove();
            $(`.food-name,h1:contains(${selection})`).siblings(".remove-btns").css("visibility", "hidden");
            $(`.food-name,h1:contains(${selection})`).siblings(".remove-btns").css("opacity", "0");
        }
        let index = orderList.indexOf(selection);
        if (index > -1) {
            orderList.splice(index, 1);
        }
        FinalPrice();
        isPopupEmpty();
    };

    //hide popup if not list is there
    function isPopupEmpty() {
        if ($('.food-list').children().length == 0) {
            $("#order-popup").css("display", "none");
            $("#order-popup").css("opacity", "0");
        }
    }

    //define total bill price
    function FinalPrice() {
        let price = 0;
        $(".food-list").children().each(function() {
            let sameProductPrice = parseInt($(this).children('.unit-price').text()) * parseInt($(this).children('.unit-quantity').text());
            price = price + sameProductPrice;
        });
        totalOrderPrice = price;

        $('#PriceTotal').text(totalOrderPrice);
    }


    //define function for the number quantity animation
    function disappear(input) {
        setTimeout(function() {
            input.css("opacity", "0")
        }, 300);
    }


    $('#order-click').on('click', function() {
        slide($('.content-order'));

    });

    $('#allergy-container').on('click', function() {
        slide2($('.content-allergy'));
    });

    function slide2(content) {
        var wrapper = content.parent();
        var contentHeight = content.outerHeight(true); //to use when we want automatic height
        var wrapperHeight = wrapper.height();

        wrapper.toggleClass('open');
        if (wrapper.hasClass('open')) {
            $('.fa-arrow-circle-up').css('display', 'block');
            $('.fa-arrow-circle-down').css('display', 'none');
            setTimeout(function() {
                wrapper.addClass('transition').css('height', contentHeight); //repace 100vh with contentHeight
            }, 10);
        } else {
            $('.fa-arrow-circle-down').css('display', 'block');
            $('.fa-arrow-circle-up').css('display', 'none');
            setTimeout(function() {
                wrapper.css('height', wrapperHeight);
                setTimeout(function() {
                    wrapper.addClass('transition').css('height', 0);
                }, 10);
            }, 10);
        }
        wrapper.one('transitionEnd webkitTransitionEnd transitionend oTransitionEnd msTransitionEnd', function() {
            if (wrapper.hasClass('open')) {
                wrapper.removeClass('transition').css('height', contentHeight);
            }
        });
    }

    function slide(content) {
        var wrapper = content.parent();
        // var contentHeight = content.outerHeight(true);    //to use when we want automatic height
        var wrapperHeight = wrapper.height();

        wrapper.toggleClass('open');
        if (wrapper.hasClass('open')) {
            $('.fa-arrow-circle-up').css('display', 'block');
            $('.fa-arrow-circle-down').css('display', 'none');
            setTimeout(function() {
                wrapper.addClass('transition').css('height', '100vh'); //repace 100vh with contentHeight
            }, 10);
        } else {
            $('.fa-arrow-circle-down').css('display', 'block');
            $('.fa-arrow-circle-up').css('display', 'none');
            setTimeout(function() {
                wrapper.css('height', wrapperHeight);
                setTimeout(function() {
                    wrapper.addClass('transition').css('height', 0);
                }, 10);
            }, 10);
        }
        wrapper.one('transitionEnd webkitTransitionEnd transitionend oTransitionEnd msTransitionEnd', function() {
            if (wrapper.hasClass('open')) {
                wrapper.removeClass('transition').css('height', '100vh');
            }
        });
    }

    // ---------EVENT PAGE ---------//

    $('.click-event').on("click", function() {
        let eventName = $(this).children('.event-name').children('p').text();
        $('.event-detail').css('display', 'block');
        $(`#${eventName}`).css('display', 'block');

    })
    $('.close-event').on("click", function() {
        $(this).parent().css('display', 'none');
        $('.event-detail').css('display', 'none');
    })

});