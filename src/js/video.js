(function() {
  const video = document.querySelector('.js-vmeo-video')
  const container = document.querySelector('.video-box')
  const preview = document.querySelector('.video-box__preview')
  const player = new Vimeo.Player(video)

  container.addEventListener('click', () => {
    preview.style.display = 'none'
    player.play()
  })
})();
