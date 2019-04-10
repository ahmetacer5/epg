export class Units {
  static zeroPointPixel = 120;
  static totalPixelOfOneHour = 280;

  public static convertMinuteToPixel(minute: number) {
    minute = Number(minute.toFixed(0));
    return (minute * Units.totalPixelOfOneHour) / 60;
  }

  public static scrollTo(element, to, duration) {
    if (duration <= 0) {
      return;
    }
    const difference = to - element.scrollLeft;
    const perTick = difference / duration * 10;

    setTimeout(() => {
      element.scrollLeft = element.scrollLeft + perTick;
      if (element.scrollLeft === to) {
        return;
      }
      Units.scrollTo(element, to, duration - 10);
    }, 10);
  }
}
