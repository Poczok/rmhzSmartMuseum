import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { NgClass } from '@angular/common';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { InfoService } from '../info.service';

@Component({
    selector: 'app-room-detail',
    templateUrl: './room-detail.component.html',
    styleUrls: ['./room-detail.component.css'],
    standalone: true,
    imports: [TranslateModule, NgClass]
})
export class RoomDetailComponent implements OnInit, OnDestroy {

    audio = new Audio();
    audiostatus = false;
    currentlyPlaying = 0;
    activeRoute: any;
    activeRoute2: any;
    numbers: any;
    view = false;
    newArray: Array<number> = [];
    private destroy$ = new Subject<void>();

    // Audio progress bar properties
    currentTime = 0;
    duration = 0;
    progressPercentage = 0;

    constructor(public translate: TranslateService, public router: Router, private activatedRoute: ActivatedRoute, private infoService: InfoService) { }

    ngOnInit(): void {

        if (this.translate.currentLang == undefined) {
            this.translate.use('hu');
        }
        this.activeRoute = this.activatedRoute.snapshot.paramMap.get('roomId');

        this.activeRoute2 = this.activatedRoute.snapshot.paramMap.get('fileAmount');
        this.activatedRoute.paramMap
            .pipe(takeUntil(this.destroy$))
            .subscribe((params: ParamMap) => {
                // Stop audio when navigating between rooms (browser back/forward buttons)
                this.audio.pause();
                this.currentlyPlaying = 0;

                this.activeRoute = params.get('roomId');
                this.activeRoute2 = this.infoService.returnRoomSize(this.activeRoute);
                this.view = true;
                this.newArray = [];
                for (let i = 0; i < this.activeRoute2; i++) {
                    this.newArray.push(i + 1);
                }
            });

        // Set up audio event listeners for progress tracking
        this.audio.addEventListener('timeupdate', () => this.updateProgress());
        this.audio.addEventListener('loadedmetadata', () => this.onAudioLoaded());
    }

    ngOnDestroy(): void {
        this.audio.pause();
        this.currentlyPlaying = 0;
        this.destroy$.next();
        this.destroy$.complete();
    }

    public play(fileName: number) {
        this.audio.src = "../../assets/" + this.activeRoute + "-" + fileName + "-" + this.translate.currentLang + ".mp3";
        this.currentlyPlaying = fileName;
        this.audio.load()
        this.audio.play()

    }

    public pause() {
        if (!this.audio.paused) {
            this.audio.paused ? this.audio.play() : this.audio.pause();
        }
    }

    public resume() {
        this.audio.paused ? this.audio.play() : null;
    }

    public stop() {
        this.currentlyPlaying = 0;
        this.audio.pause();
    }

    public goBack() {
        this.audio.pause();
        this.router.navigate(['/main'])
    }

    public numSequence(n: number): Array<number> {
        return Array(n);
    }

    public returnUrlForPicture() {
        return "../../assets/img/room-" + this.activeRoute + ".jpg"
    }

    private updateProgress() {
        this.currentTime = this.audio.currentTime;
        if (this.duration > 0) {
            this.progressPercentage = (this.currentTime / this.duration) * 100;
        }
    }

    private onAudioLoaded() {
        this.duration = this.audio.duration;
    }

    public seek(event: MouseEvent) {
        const progressBar = event.currentTarget as HTMLElement;
        const clickPosition = event.offsetX;
        const barWidth = progressBar.offsetWidth;
        const seekPercentage = clickPosition / barWidth;
        this.audio.currentTime = seekPercentage * this.duration;
    }

    public formatTime(seconds: number): string {
        if (isNaN(seconds)) return '0:00';
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs.toString().padStart(2, '0')}`;
    }

    public navigateToNextRoom() {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
        this.newArray = [];
        this.audio.pause();
        this.currentlyPlaying = 0;
        this.router.navigate(['/detail/' + (+this.activeRoute + 1)]);
    }

    public navigateToExitPage() {
        this.audio.pause();
        this.currentlyPlaying = 0;
        this.router.navigate(['/end']);
    }

}