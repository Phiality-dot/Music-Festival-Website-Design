document.addEventListener("DOMContentLoaded", function() {
const screenWidth = window.innerWidth;
document.body.style.backgroundSize = `${screenWidth}px 100%`;
})

window.addEventListener('resize', function() {
    // Update background image size on window resize
    const screenWidth = window.innerWidth;
    document.body.style.backgroundSize = `${screenWidth}px 100%`;
});
$(document).ready(function() {
    $(".button").on("click", function (e) {
      var useful = e.target.getAttribute("data-locs");
      console.log(useful);
      if(useful == "Sydney, S.A.S.H, CBD") {
        $(".map").attr("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d424146.1026265052!2d150.65179726680822!3d-33.847356727277045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae3bce118ac1%3A0xecc9ac6245c47ba0!2sS.A.S.H!5e0!3m2!1sen!2sau!4v1680773178963!5m2!1sen!2sau");
      } else if(useful == "Melbourne, New Guernica, CBD") {
        $(".map").attr("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5780.6734462437125!2d144.9609104333991!3d-37.815000551583395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b5a9822d55%3A0x8f95a91b794da756!2sNew%20Guernica!5e0!3m2!1sen!2sau!4v1680773134236!5m2!1sen!2sau");
      } else if(useful == "Fortitude Valley") {
        $(".map").attr("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14161.53696251576!2d153.03531199999998!3d-27.45729465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b9159f2422ef591%3A0x502a35af3de8950!2sFortitude%20Valley%20QLD%204006!5e0!3m2!1sen!2sau!4v1680771509589!5m2!1sen!2sau");
      }
    });
  });