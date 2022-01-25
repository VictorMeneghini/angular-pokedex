import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-audio-button',
  templateUrl: './audio-button.component.html',
  styleUrls: ['./audio-button.component.scss']
})
export class AudioButtonComponent implements OnInit {
  public isPlaying:boolean = false;
  private audio:any = new Audio("../../../assets/sound/pokemon-theme.mp3");

  constructor() { }

  ngOnInit(): void {
  }

  public playSound() {
    this.audio.load();
    this.audio.play();
    this.isPlaying = true
  }

  public pauseSound() {
    this.audio.pause()
    this.isPlaying = false
  }

}
