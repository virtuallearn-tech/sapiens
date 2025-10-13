export function toggleFullscreen(element: string) {
  const elem = document.querySelector(element)!;

  if (!document.fullscreenElement) {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if ((elem as any).webkitRequestFullscreen) { // Safari
      (elem as any).webkitRequestFullscreen();
    } else if ((elem as any).msRequestFullscreen) { // IE/Edge antigo
      (elem as any).msRequestFullscreen();
    }
  } else {
    // Sair do fullscreen
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if ((document as any).webkitExitFullscreen) {
      (document as any).webkitExitFullscreen();
    } else if ((document as any).msExitFullscreen) {
      (document as any).msExitFullscreen();
    }
  }

}