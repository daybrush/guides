import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { NgxGuidesComponent } from 'projects/ngx-guides/src/public-api';
import Gesto from 'gesto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'ngx-guides-app';
  @ViewChild('guides1', { static: false }) guides1: NgxGuidesComponent;
  @ViewChild('guides2', { static: false }) guides2: NgxGuidesComponent;
  private gesto: Gesto;
  private scrollX = 0;
  private scrollY = 0;
  ngAfterViewInit() {
    window.addEventListener('resize', this.onResize);

    this.gesto = new Gesto(document.body, {
      drag: e => {
        this.scrollX -= e.deltaX;
        this.scrollY -= e.deltaY;

        this.guides1.scroll(this.scrollX);
        this.guides1.scrollGuides(this.scrollY);
        this.guides2.scroll(this.scrollY);
        this.guides2.scrollGuides(this.scrollX);
      },
    });

    this.onResize();
  }
  onResize = () => {
    this.guides1.resize();
    this.guides2.resize();
  }
  onRestore = () => {
    this.scrollX = 0;
    this.scrollY = 0;
    this.guides1.scroll(0);
    this.guides1.scrollGuides(0);
    this.guides2.scroll(0);
    this.guides2.scrollGuides(0);

  }
}
