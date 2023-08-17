class SmartBaseScreen {
  static smBaseWidth = 0; // Width of Image
  static smBaseHeight = 0; // Height of Image

  static smPercentWidth = 0; // calculate width % of screen device's width
  static smPercentHeight = 0; // calculate width % of screen device's height

  static smFontSize = 0; // Scale fontSize adapt for each screen

  static basePadding = 0; //default padding

  // Intialize set up for each variable
  static baseSetup() {
    if (SmartBaseScreen.smPercentWidth == 0) {
      let sWidth = window.innerWidth;
      let sHeight = window.innerHeight;

      // window.addEventListener("resize", () => {
      //   sWidth = window.innerWidth;
      //   sHeight = window.innerHeight;
      //   SmartBaseScreen.smBaseWidth = sWidth / 1920;
      //   SmartBaseScreen.smBaseHeight = sHeight / 1080;
      //   SmartBaseScreen.smFontSize = sWidth / 1920;
      // });

      SmartBaseScreen.smPercentWidth = sWidth / 100;
      SmartBaseScreen.smPercentHeight = sHeight / 100;

      SmartBaseScreen.smBaseWidth = sWidth / 1920;
      SmartBaseScreen.smBaseHeight = sHeight / 1080;
      SmartBaseScreen.smFontSize = sWidth / 1920;

      SmartBaseScreen.basePadding = SmartBaseScreen.smPercentWidth * 4;
    }
  }
}

export default SmartBaseScreen;
