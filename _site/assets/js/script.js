$(document).ready(function(){function t(t){t.parent().addClass("input-filled")}function n(t){0===t.val().length&&t.parent().removeClass("input-filled")}function e(){b.addClass("footer-form-response"),b.html('<span class="loader"></span>')}function s(){b.html('<p class="footer-form-thanks">Thank you for registering.</p>')}function o(){h.toggleClass("is-active"),f.toggleClass("is-open"),h.attr("aria-expanded",function(t,n){return"true"==n?"false":"true"})}function i(){f.removeClass("is-open"),h.removeClass("is-active"),h.attr("aria-expanded","false")}function a(t){$("html,body").animate({scrollTop:$(t).offset().top},700),scrolled=!0}function r(){d.slick({centerMode:!0,slidesToShow:3,variableWidth:!0,initialSlide:1,infinite:!1,appendArrows:$(".slick-feature-buttons"),prevArrow:'<button type="button" class="slick-arrow-prev"><span class="sr-only">Prev</span></button>',nextArrow:'<button type="button" class="slick-arrow-next"><span class="sr-only">Next</span></button>',responsive:[{breakpoint:1200,settings:{centerMode:!1,initialSlide:0,slidesToShow:2}},{breakpoint:768,settings:{centerMode:!1,initialSlide:1,slidesToShow:1,variableWidth:!1}}]})}var l=$("body"),c=$(window),u=$(".input-field"),d=$(".slick"),f=$(".js-nav"),p=$(".js-nav-link"),v=992,h=$(".js-burger"),b=$("#signup");l.removeClass("no-js"),u.val(""),c.on("resize load",function(){c.width()>=v&&i()}),u.on("focus",function(){t($(this))}),u.on("focusout",function(){n($(this))}),h.on("click",function(){o()}),p.on("click",function(t){t.preventDefault();var n=$(this).attr("href");c.width()<v&&o(),a(n)}),b.on("submit",function(t){t.preventDefault(),e(),$.ajax({type:"POST",url:b.attr("action"),data:JSON.stringify({data:u.val()}),success:s,error:s,dataType:"application/json"})}),r()});