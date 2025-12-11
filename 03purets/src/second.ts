interface TakePhoto {
  cameraMode: string;
  filter: string;
  burstMode: number;
}

class Instagram implements TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burstMode: number
  ) {}
}

interface Story {
    createStory(): void;
}

class Youtube implements TakePhoto, Story{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burstMode: number,
        public videoLength: number
    ){}

    createStory(): void {
        console.log("Story created");
        
    }
}
