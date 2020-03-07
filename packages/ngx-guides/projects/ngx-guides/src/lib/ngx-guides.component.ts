import { Component, OnInit, Input, AfterViewInit, ViewChild, ElementRef, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import Guides, { GuidesOptions } from '@scena/guides';
import { IObject } from '@daybrush/utils';
import { NgxGuidesInterface } from './ngx-guides.interface';

@Component({
  selector: 'ngx-guides',
  template: `
    <div class="guides" #guidesRef></div>
  `,
  styles: []
})
export class NgxGuidesComponent extends NgxGuidesInterface implements GuidesOptions, AfterViewInit, OnChanges, OnDestroy {
  @ViewChild('guidesRef', { static: false }) private guidesRef: ElementRef;
  @Input() public className?: string;
  @Input() public type?: 'horizontal' | 'vertical';
  @Input() public width?: number;
  @Input() public height?: number;
  @Input() public unit?: number;
  @Input() public zoom?: number;
  @Input() public direction?: GuidesOptions['direction'];
  @Input() public snapThreshold?: GuidesOptions['snapThreshold'];
  @Input() public snaps?: GuidesOptions['snaps'];
  @Input() public style: IObject<any> = { width: '100%', height: '100%' };
  @Input() public backgroundColor?: string;
  @Input() public lineColor?: string;
  @Input() public textColor?: string;
  @Input() public setGuides?: (guides: number[]) => any;
  @Input() public rulerStyle?: IObject<any>;

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
    this.guides = new Guides(el, {
      className: this.className,
      type: this.type,
      width: this.width,
      height: this.height,
      unit: this.unit,
      zoom: this.zoom,
      setGuides: this.setGuides,
      rulerStyle: this.rulerStyle,
      backgroundColor: this.backgroundColor,
    });
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
