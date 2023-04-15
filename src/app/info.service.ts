import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class InfoService {

    room1 = [9, 4, 7, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];

    constructor() { }

    public returnRoomSize(roomNumber: number) {
        return this.room1[roomNumber - 1];
    }
}
