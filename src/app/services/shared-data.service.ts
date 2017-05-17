import { Injectable } from '@angular/core';

@Injectable()
export class SharedDataService{
    private year: number;

    setYear(year): void {
        this.year = year;
    }

    getYear(): number {
        return this.year;
    }
}
