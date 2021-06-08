import {
  Component, Input, AfterViewInit, ViewChild,
  ElementRef, OnChanges, SimpleChanges,
  OnDestroy, Output, EventEmitter
} from '@angular/core';
import Guides, { GuidesOptions, EVENTS, PROPERTIES, GuideOptions } from '@scena/guides';
import { IObject } from '@daybrush/utils';
import { NgxGuidesInterface } from './ngx-guides.interface';
import { NgxGuidesEvents } from './types';

@Component({
  selector: 'ngx-guides',
  template: `
    <div class="guides" #guidesRef></div>
  `,
  styles: []
})
export class NgxGuidesComponent extends NgxGuidesInterface implements Required<GuidesOptions>, NgxGuidesEvents, AfterViewInit, OnChanges, OnDestroy {
  @ViewChild('guidesRef', { static: false }) private guidesRef: ElementRef;
  @Input() public className: string;
  @Input() public type: 'horizontal' | 'vertical';
  @Input() public width: number;
  @Input() public height: number;
  @Input() public unit: number;
  @Input() public zoom: number;
  @Input() public direction: GuidesOptions['direction'];
  @Input() public snapThreshold: GuidesOptions['snapThreshold'];
  @Input() public snaps: GuidesOptions['snaps'];
  @Input() public style: IObject<any> = { width: '100%', height: '100%' };
  @Input() public backgroundColor: string;
  @Input() public lineColor: string;
  @Input() public textColor: string;
  @Input() public setGuides: (guides: number[]) => any;
  @Input() public rulerStyle: GuidesOptions['rulerStyle'];
  @Input() public cspNonce: GuidesOptions['cspNonce'];
  @Input() public displayDragPos: GuidesOptions['displayDragPos'];
  @Input() public dragPosFormat: GuidesOptions['dragPosFormat'];
  @Input() public textFormat: GuidesOptions['textFormat'];
  @Input() public showGuides: GuidesOptions['showGuides'];
  @Input() public defaultGuides: GuidesOptions['defaultGuides'];
  @Input() public digit: number;
  @Input() public textAlign: 'left' | 'center' | 'right';
  @Input() public mainLineSize: string | number;
  @Input() public longLineSize: string | number;
  @Input() public shortLineSize: string | number;
  @Input() public textOffset: number[];
  @Input() public negativeRuler: boolean;
  @Input() public scrollPos: number;
  @Input() public lockGuides: boolean | ('add' | 'change' | 'remove')[];
  @Input() public guideStyle: Record<string, any>;
  @Input() public dragGuideStyle: Record<string, any>;
  @Input() public portalContainer: HTMLElement;
  @Input() public font: string;
  @Input() public segment: number;
  @Output() public changeGuides: NgxGuidesEvents['changeGuides'];
  @Output() public dragStart: NgxGuidesEvents['dragStart'];
  // tslint:disable-next-line: no-output-native
  @Output() public drag: NgxGuidesEvents['drag'];
  @Output() public dragEnd: NgxGuidesEvents['dragEnd'];

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
        guides[name] = currentValue;
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
    this.guides = new Guides(el, options);
    this.setStyle();
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
