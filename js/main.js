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
    thumbnailHeight: 135,
    thumbnailWidth: 225,
    thumbnailGutterWidth: 25,
    thumbnailGutterHeight: 25,
    thumbnailBorderHorizontal: 0,
    thumbnailBorderVertical: 0,
    galleryMaxRows: 1,
    galleryDisplayMode: "rows",
    galleryDisplayMode: "pagination",
    itemsBaseURL: "../img/gallery/",
    galleryMosaic: [
      { c: 1, r: 1, w: 2, h: 1.5 },
      { c: 3, r: 1, w: 1, h: 1 },
      { c: 1, r: 2.5, w: 2, h: 1.5 },
      { c: 3, r: 2, w: 1, h: 2 },
      { c: 1, r: 4, w: 1.5, h: 1.5 },
      { c: 2.5, r: 4, w: 1.5, h: 1.5 }
    ],

    items: [
      { src: "img_01.jpg", srct: "img_01.jpg", title: "Title Image 1" },
      { src: "img_02.jpg", srct: "img_02.jpg", title: "Title Image 2" },
      { src: "img_03.jpg", srct: "img_03.jpg", title: "Title Image 3" },
      { src: "img_04.jpg", srct: "img_04.jpg", title: "Title Image 4" },
      { src: "img_05.jpg", srct: "img_05.jpg", title: "Title Image 5" },
      { src: "img_06.jpg", srct: "img_06.jpg", title: "Title Image 6" },
      { src: "img_07.jpg", srct: "img_07.jpg", title: "Title Image 7" },
      { src: "img_08.jpg", srct: "img_08.jpg", title: "Title Image 8" },
    ]
  });
});
