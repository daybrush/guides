import {
  Component, AfterViewInit, ViewChild,
  ElementRef, OnChanges, SimpleChanges,
  OnDestroy, EventEmitter
} from '@angular/core';
import Guides, { EVENTS, PROPERTIES, GuideOptions } from '@scena/guides';
import { NgxGuidesInterface } from './ngx-guides.interface';
import { ANGULAR_GUIDES_INPUTS, ANGULAR_GUIDES_OUTPUTS } from './consts';

@Component({
  selector: 'ngx-guides',
  template: `
    <div class="guides" #guidesRef></div>
  `,
  styles: [],
  inputs: ANGULAR_GUIDES_INPUTS,
  outputs: ANGULAR_GUIDES_OUTPUTS,
})
export class NgxGuidesComponent extends NgxGuidesInterface implements AfterViewInit, OnChanges, OnDestroy {
  @ViewChild('guidesRef', { static: false }) private guidesRef!: ElementRef;
  constructor() {
    super();
    EVENTS.forEach(name => {
      (this as any)[name] = new EventEmitter();
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    const guides = this.guides;

    if (!guides) {
      return;
    }
    for (const name in changes) {
      const { previousValue, currentValue } = changes[name];

      if (previousValue === currentValue) {
        continue;
      }
      if (name === 'style') {
        this.setStyle();
      } else {
        (guides as any)[name] = currentValue;
      }
    }
  }
  ngAfterViewInit() {
    const el = this.guidesRef.nativeElement;
    const options: GuideOptions = {};

    PROPERTIES.forEach(name => {
      if (name === "style") {
        return;
      }
      if (name in this) {
        (options as any)[name] = this[name];
      }
    });

    options.warpSelf = true;
    const guides = new Guides(el, options);

    this.guides = guides;
    this.setStyle();

    EVENTS.forEach(name => {
      guides.on(name as any, e => {
        (this as any)[name].emit(e as any);
      });
    });
  }
  ngOnDestroy() {
    this.guides.destroy();
  }
  setStyle() {
    const el = this.guidesRef.nativeElement;
    const elStyle = el.style;
    const style = this.style;

    for (const name in style) {
      if (elStyle[name] === style[name]) {
        continue;
      }
      elStyle[name] = style[name];
    }
  }
}
