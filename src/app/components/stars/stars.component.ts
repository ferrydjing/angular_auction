import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit, OnChanges {
  public stars: boolean[];

  @Input()
  private readonly = true;

  @Input()
  private rating: number;

  @Output()
  private ratingChange: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.stars = [];
    for (let i = 1; i < 6; i++) {
      this.stars.push(i > this.rating);
    }
  }
  starClick(index) {
    if (!this.readonly) {
      this.rating = index + 1;
      this.ratingChange.emit(this.rating);
    }
  }
}
