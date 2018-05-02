$(document).ready(function() {
  $("#fullpage").fullpage({
    verticalCentered: false,
    navigation: true,
    slidesNavigation: true,
    scrollOverflow: true,

    responsiveSlides: true,

    scrollingSpeed: 1200,

    onLeave: function(index, nextIndex, direction) {},
    afterLoad: function(anchorLink, index) {},
    afterRender: function() {},
    afterResize: function() {},
    afterResponsive: function(isResponsive) {},
    afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex) {
      // NANOGALLERY2
      $("#my_nanogallery2").nanogallery2({
        thumbnailHeight: 100,
        thumbnailWidth: 200,
        thumbnailGutterWidth: 25,
        thumbnailGutterHeight: 25,
        thumbnailBorderHorizontal: 0,
        thumbnailBorderVertical: 0,
        galleryMaxRows: 1,
        galleryDisplayMode: "fullContent",
        galleryDisplayMode: "pagination",
        gallerySorting: "random",
        thumbnailHoverEffect2: "imageScaleIn80|imageGrayOn",
        itemsBaseURL: "img/gallery/",
        galleryMosaic: [
          { c: 1, r: 1, w: 2, h: 1.5 },
          { c: 1, r: 2.5, w: 2, h: 1.5 },
          { c: 3, r: 1, w: 1, h: 1 },
          { c: 3, r: 2, w: 1, h: 2 },
          { c: 1, r: 4, w: 1.5, h: 1.5 },
          { c: 2.5, r: 4, w: 1.5, h: 1.5 }
        ],

        items: [
          { src: "img_01.jpg", srct: "img_01.jpg" },
          { src: "img_02.jpg", srct: "img_02.jpg" },
          { src: "img_03.jpg", srct: "img_03.jpg" },
          { src: "img_04.jpg", srct: "img_04.jpg" },
          { src: "img_05.jpg", srct: "img_05.jpg" },
          { src: "img_06.jpg", srct: "img_06.jpg" },
          { src: "img_07.jpg", srct: "img_07.jpg" },
          { src: "img_08.jpg", srct: "img_08.jpg" },
          { src: "img_09.jpg", srct: "img_09.jpg" },
          { src: "img_10.jpg", srct: "img_10.jpg" },
          { src: "img_11.jpg", srct: "img_11.jpg" },
          { src: "img_12.jpg", srct: "img_12.jpg" },
          { src: "img_13.jpg", srct: "img_13.jpg" },
          { src: "img_14.jpg", srct: "img_14.jpg" },
          { src: "img_15.jpg", srct: "img_15.jpg" },
          { src: "img_16.jpg", srct: "img_16.jpg" },
          { src: "img_17.jpg", srct: "img_17.jpg" }
        ]
      });
    },
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
});
