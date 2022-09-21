import VanillaGuides, { METHODS, GuidesInterface, GuidesOptions } from '@scena/guides';
import { withMethods, MethodInterface } from 'framework-utils';
import { NgxGuidesComponent } from './ngx-guides.component';
import { NgxGuidesEvents } from './types';

export class NgxGuidesInterface {
  @withMethods(METHODS as any)
  protected guides!: VanillaGuides;
}
export interface NgxGuidesInterface
extends MethodInterface<GuidesInterface, VanillaGuides, NgxGuidesComponent>,
Required<GuidesOptions>, NgxGuidesEvents {}
