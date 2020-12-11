$(document).ready(function() {
    var count = 0;

    //Add items for the first time to make the popup appear
    $(".add-btns").on('click', function() {
        $("#order-popup").css("display", "block");
        $("#order-popup").css("opacity", "1");
        $(".remove-btns").css("visibility", "visible");
        $(".remove-btns").css("opacity", "1");
        count++;

        // document.write($(this).parent());

        $(".food-list").append($('<li>')
            .addClass("list-item-food")
            .append($('<i>')
                .addClass('fas fa-minus-circle')
                .on("click", RemoveQuantity))
            .append($('<p>')
                .addClass("unit-quantity")
                .text('1'))
            .append($('<p>')
                .addClass('unit-name'))
            .append($('<p>')
                .addClass("unit-price"))
            .append($('<i>')
                .addClass("fas fa-plus-circle")
                .on("click", AddQuantity)));
    });

    //Add items inside the popup --> this should  be working, not sure why it is not
    function AddQuantity() {
        var newCount = parseInt($('.unit-quantity').text()) + 1;
        $('.unit-quantity').text(newCount);
    };

    function RemoveQuantity() {
        var newCount = parseInt($('.unit-quantity').text()) - 1;
        $('.unit-quantity').text(newCount);
    };

    if (count == 0) {
        $("#order-popup").css("display", "none");
        $("#order-popup").css("opacity", "0");
        $(".remove-btns").css("visibility", "hidden");
        $(".remove-btns").css("opacity", "0");
    }

    //open the order popup
    $('.order-box').on('click', function() {
        slide($('.content'));
    });

    function slide(content) {
        var wrapper = content.parent();
        // var contentHeight = content.outerHeight(true);    //to use when we want automatic height
        var wrapperHeight = wrapper.height();

        wrapper.toggleClass('open');
        if (wrapper.hasClass('open')) {
            setTimeout(function() {
                wrapper.addClass('transition').css('height', '100vh'); //repace 100vh with contentHeight
            }, 10);
        } else {
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
});