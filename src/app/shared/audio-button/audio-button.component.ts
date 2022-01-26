import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-audio-button',
  templateUrl: './audio-button.component.html',
  styleUrls: ['./audio-button.component.scss']
})
export class AudioButtonComponent implements OnInit {
  public isPlaying:boolean = false;
  private audio:any = new Audio("../../../assets/sound/pokemon-theme.mp3");
  public imageButtonPath:string = "../../../assets/icons/sound-play.svg"

  constructor() { }

  ngOnInit(): void {
    this.audio.volume = 0.08
    this.imageButtonPath = "./../../assets/icons/sound-play.svg"
  }

  public handleButtonClick() {
    if(this.isPlaying) {
      this.pauseSound()
    } else {
      this.playSound()
    }
  }

  private playSound() {
    this.audio.play();
    this.isPlaying = true
    this.imageButtonPath = "./../../assets/icons/sound-pause.svg"
  }

  private pauseSound() {
    console.log(this.audio.duration)
    this.audio.pause()
    this.imageButtonPath = "./../../assets/icons/sound-play.svg"
    this.isPlaying = false
  }


}
