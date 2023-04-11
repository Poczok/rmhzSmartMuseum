import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

    audio = new Audio();
    audiostatus = false;
    resumeOrPause = 'Pause';
    currentlyPlaying = 0;
    activeRoute: any;
    activeRoute2: any;
    numbers: any;
    view = false;
    newArray: Array<number> = [];

    constructor(public translate: TranslateService, public router: Router, private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
        this.translate.use('hu');
        this.activeRoute = this.activatedRoute.snapshot.paramMap.get('roomId');

        this.activeRoute2 = this.activatedRoute.snapshot.paramMap.get('fileAmount');
        this.activatedRoute.paramMap
            .subscribe((params: ParamMap) => {
                this.activeRoute = params.get('roomId');
                this.activeRoute2 = params.get('fileAmount');
                this.view = true;
                for (let i = 0; i < this.activeRoute2; i++) {
                    this.newArray.push(i + 1);
                }
            });
    }

    public play(fileName: number) {

        this.audio.src = "../../assets/" + fileName + ".wav";
        this.currentlyPlaying = fileName;
        this.audio.load()
        this.audio.play()

    }

    public pause() {
        this.audio.paused ? this.audio.play() : this.audio.pause();
        this.audio.paused ? this.resumeOrPause = 'Resume' : this.resumeOrPause = 'Pause';
    }

    public stop() {
        this.currentlyPlaying = 0;
        this.resumeOrPause = 'Pause';
        this.audio.pause();
    }

    public goBack() {
        this.router.navigate(['/main'])
    }

    public numSequence(n: number): Array<number> {
        console.log("hello")
        return Array(n);
    }
}