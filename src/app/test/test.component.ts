import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { InfoService } from '../info.service';

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

    audio = new Audio();
    audiostatus = false;
    currentlyPlaying = 0;
    activeRoute: any;
    activeRoute2: any;
    numbers: any;
    view = false;
    newArray: Array<number> = [];

    constructor(public translate: TranslateService, public router: Router, private activatedRoute: ActivatedRoute, private infoService: InfoService) { }

    ngOnInit(): void {

        if (this.translate.currentLang == undefined) {
            this.translate.use('hu');
        }
        this.activeRoute = this.activatedRoute.snapshot.paramMap.get('roomId');

        this.activeRoute2 = this.activatedRoute.snapshot.paramMap.get('fileAmount');
        this.activatedRoute.paramMap
            .subscribe((params: ParamMap) => {
                this.activeRoute = params.get('roomId');
                this.activeRoute2 = this.infoService.returnRoomSize(this.activeRoute);
                this.view = true;
                for (let i = 0; i < this.activeRoute2; i++) {
                    this.newArray.push(i + 1);
                }
            });
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
        console.log("hello")
        return Array(n);
    }

    public returnUrlForPicture() {
        return "../../assets/img/room-" + this.activeRoute + ".jpg"
    }

    public navigateToNextRoom() {
        window.scroll({ 
            top: 0, 
            left: 0, 
            behavior: 'smooth' 
        });
        this.newArray = [];
        this.router.navigate(['/detail/' + (+this.activeRoute + 1)]);
    }

    public navigateToExitPage() {
        this.router.navigate(['/end']);
    }

}