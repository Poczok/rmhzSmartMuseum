import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class InfoService {

    room1 = [9, 9, 9, 10, 11, 10, 16, 9, 10, 16, 11, 30, 16, 12];

    constructor() { }

    public returnRoomSize(roomNumber: number) {
        return this.room1[roomNumber - 1];
    }
}
