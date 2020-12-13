$(document).ready(function () {
    var count = 0;
    var total = 0;
    var markup = "";

    var name = document.getElementById("unitName").textContent;
    var quantity = document.getElementById("unitQuantity").textContent;
    var price = document.getElementById("unitPrice").textContent;

    //Add items for the first time to make the popup appear
    $(".add-btns").on('click', function () {
        $("#order-popup").css("display", "block");
        $("#order-popup").css("opacity", "1");
        $(".remove-btns").css("visibility", "visible");
        $(".remove-btns").css("opacity", "1");

        count++;
        AddQuantity();

    });


    function AddQuantity() {
        total = total + parseFloat(price);
        var trId = 'tr_' + count;
        var _trId = "#" + trId;
        markup = "<tr><td>" + name + "</td><td>" + quantity + "</td><td>" + price + "</td>";
        //--->add and delete options > start
        markup += '<td>';
        markup += '<span  class="btn_delete" > <a href="#" class="btn btn-link " row_id="' + _trId + '" > remove</a> </span>';
        markup += '<span  class="btn_add" > <a href="#" class="btn btn-link " row_id="' + _trId + '" > add</a> </span>';
        markup += '<span  class="btn_edit" > <a href="#" class="btn btn-link " row_id="' + _trId + '" > customize</a> </span>';
        markup += '</td></tr>';
        //--->Add options > end
        $("table tbody").append(markup);
        $("#subtotal").text(total);
    }

    $(document).on('click', '.btn_delete', function (event) {
        $(this).parents("tr").remove();
        total = total - parseFloat(price);
        $("#subtotal").text(total);

    });
    $(document).on('click', '.btn_add', function (event) {

        $("table tbody").append(markup);
        total = total + parseFloat(price);
        $("#subtotal").text(total);
    });
   

    if (count == 0) {
        $("#order-popup").css("display", "none");
        $("#order-popup").css("opacity", "0");
        $(".remove-btns").css("visibility", "hidden");
        $(".remove-btns").css("opacity", "0");
    }

    //open the order popup
    $('.order-box').on('click', function () {
        slide($('.content'));
    });

    function slide(content) {
        var wrapper = content.parent();
        // var contentHeight = content.outerHeight(true);    //to use when we want automatic height
        var wrapperHeight = wrapper.height();

        wrapper.toggleClass('open');
        if (wrapper.hasClass('open')) {
            setTimeout(function () {
                wrapper.addClass('transition').css('height', '100vh'); //repace 100vh with contentHeight
            }, 10);
        } else {
            setTimeout(function () {
                wrapper.css('height', wrapperHeight);
                setTimeout(function () {
                    wrapper.addClass('transition').css('height', 0);
                }, 10);
            }, 10);
        }
        wrapper.one('transitionEnd webkitTransitionEnd transitionend oTransitionEnd msTransitionEnd', function () {
            if (wrapper.hasClass('open')) {
                wrapper.removeClass('transition').css('height', '100vh');
            }
        });
    }
});