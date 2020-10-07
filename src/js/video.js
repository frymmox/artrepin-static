(function() {
  if (document.querySelectorAll(".video-box--vimeo"))
  document.querySelectorAll(".video-box--vimeo").forEach((el) => {
    el.addEventListener("click", (e) => {
      const video = el.children[1].children[0]
      let player = new Vimeo.Player(video)
      e.preventDefault()
      el.children[0].style.display = 'none'
      player.play()
      console.log(el.children[1].children[0])
    });
  });
})();
