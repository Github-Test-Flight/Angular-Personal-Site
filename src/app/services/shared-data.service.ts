import { Injectable } from '@angular/core';

@Injectable()
export class SharedDataService{
    private year: number;

    // Sets the current year
    setYear(year): void {
        this.year = year;
    }

    // Gets the current year
    getYear(): number {
        return this.year;
    }
}
