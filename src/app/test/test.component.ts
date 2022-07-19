import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  audio = new Audio();
  audiostatus = false;
  resumeOrPause = 'Pause';
  currentlyPlaying = '';

  constructor() {}

  ngOnInit(): void {
     
  }

  public play(fileName: string) {
    
    this.audio.src = "../../assets/" + fileName + ".wav";
    this.currentlyPlaying = fileName;
    this.audio.load();
    this.audio.play();
    
  }

  public pause() {
    this.audio.paused ? this.audio.play() : this.audio.pause();
    this.audio.paused ? this.resumeOrPause = 'Resume' : this.resumeOrPause = 'Pause';
  }

  public stop() {
    this.currentlyPlaying = '';
    this.resumeOrPause = 'Pause';
    this.audio.pause();
  }
}