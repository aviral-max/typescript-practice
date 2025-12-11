abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}
  abstract getSepia(): void;
  getReelTime(): number {
    //some complex calculation
    return 8;
  }
}

// const aviral = new TakePhoto("test", "test"); // Error: Cannot create an instance of an abstract class

class Instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burstMode: number
  ) {
    super(cameraMode, filter); // calling the constructor of the abstract class as the values in TakePhoto are required
  }

  getSepia(): void {
      console.log("Sepia");
      
  }
}

const aviral = new Instagram("test", "test", 3);
aviral.getReelTime(); // works fine as it is implemented in the abstract class
