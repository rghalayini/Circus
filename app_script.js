//remove buttons appear/disappear
// .remove - btns {
//         display: none;
//     }
//pull up banner appears\\


//collapse
// var coll = document.getElementsByClassName("collapsible");
// var i;

// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var content = this.nextElementSibling;
//     if (content.style.display === "block") {
//       content.style.display = "none";
//     } else {
//       content.style.display = "block";
//     }
//   });
// }

$(document).ready(function() {
    $('article').on('click', function() {
        slide($('.content', this));
    });

    function slide(content) {
        var wrapper = content.parent();
        var contentHeight = content.outerHeight(true);
        var wrapperHeight = wrapper.height();

        wrapper.toggleClass('open');
        if (wrapper.hasClass('open')) {
            setTimeout(function() {
                wrapper.addClass('transition').css('height', contentHeight);
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
                wrapper.removeClass('transition').css('height', 'auto');
            }
        });
    }
});