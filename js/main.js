$(document).ready(function() {
  $("#fullpage").fullpage({
    verticalCentered: false,
    navigation: true,
    slidesNavigation: true,
    scrollOverflow: true,
    onLeave: function(index, nextIndex, direction) {},
    afterLoad: function(anchorLink, index) {},
    afterRender: function() {},
    afterResize: function() {},
    afterResponsive: function(isResponsive) {},
    afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex) {},
    onSlideLeave: function(
      anchorLink,
      index,
      slideIndex,
      direction,
      nextSlideIndex
    ) {},
    anchors: ["firstPage", "secondPage", "thirdPage"]
  });

  // FOOTER YEAR
  $("#year").text(new Date().getFullYear());

  $("#my_nanogallery2").nanogallery2({
    thumbnailHeight: 150,
    thumbnailWidth: 150,
    itemsBaseURL: "http://nanogallery2.nanostudio.org/samples/",

    items: [
      { src: "img_01.jpg", srct: "img_01t.jpg", title: "Title Image 1" },
      { src: "img_02.jpg", srct: "img_02t.jpg", title: "Title Image 2" },
      { src: "img_03.jpg", srct: "img_03t.jpg", title: "Title Image 3" }
    ]
  });
});
