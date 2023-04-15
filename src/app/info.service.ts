import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class InfoService {

    room1 = [9, 4, 7, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];

    constructor() { }

    public returnRoomSize(roomNumber: number) {
        console.log(roomNumber + " www" + this.room1[roomNumber])
        return this.room1[roomNumber - 1];
    }
}
