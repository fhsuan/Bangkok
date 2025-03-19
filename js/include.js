/* menu */
$(document).ready(function () {

  $('.nav').bind('click', function () {
    $(".menu").toggleClass('open');
  });


  $(".menu").bind('click', function () {
    $(".menu").toggleClass('open');
    $(".hamburger").removeClass("active");
  });

  var toggles = document.querySelectorAll(".hamburger");

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

  function toggleHandler(toggle) {
    toggle.addEventListener("click", function (e) {
      e.preventDefault();
      (this.classList.contains("active") === true) ? this.classList.remove("active") : this.classList.add("active");
    });
  }

});

/* 收合 */
document.addEventListener("DOMContentLoaded", () => {
  const headers = document.querySelectorAll("h2.collapsible");

  headers.forEach(header => {
    header.addEventListener("click", () => {
      const targetId = header.getAttribute("data-target");
      const content = document.getElementById(targetId);
      const toggleStatus = header.querySelector(".toggle-status");

      const contentHeight = content.scrollHeight;
      if (content.classList.contains("expanded")) {
        content.classList.remove("expanded");
        content.style.setProperty('--max-height', '0px');
        toggleStatus.textContent = "看更多 ▼";
      } else {
        content.classList.add("expanded");
        content.style.setProperty('--max-height', `${contentHeight}px`);
        toggleStatus.textContent = "收合 ▲";
      }
    });

    // Initialize with content visible
    const targetId = header.getAttribute("data-target");
    const content = document.getElementById(targetId);
    const toggleStatus = header.querySelector(".toggle-status");
    const contentHeight = content.scrollHeight;
    content.style.setProperty('--max-height', `${contentHeight}px`);
    content.classList.add("expanded");
    toggleStatus.textContent = "收合 ▲";
  });
});

/* top */
$(document).ready(function () {
  $("#back-top").hide();

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#back-top').fadeIn();
    } else {
      $('#back-top').fadeOut();
    }
  });

  $('#back-top').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 800);
    return false;
  });
});

/* bar */
$('.bar').scrollFix();

/* section */
$(function () {

  $('#se1').click(function () {
    $('html,body').animate({ scrollTop: $('#se1_td').offset().top }, 800);
  });

  $('#se2').click(function () {
    $('html,body').animate({ scrollTop: $('#se2_td').offset().top }, 800);
  });

  $('#se3').click(function () {
    $('html,body').animate({ scrollTop: $('#se3_td').offset().top }, 800);
  });

  $('#se4').click(function () {
    $('html,body').animate({ scrollTop: $('#se4_td').offset().top }, 800);
  });

  $('#se5').click(function () {
    $('html,body').animate({ scrollTop: $('#se5_td').offset().top }, 800);
  });
});
