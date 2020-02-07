import VanillaGuides, { METHODS, GuidesInterface } from '@scena/guides';
import { withMethods, MethodInterface } from 'framework-utils';
import { NgxGuidesComponent } from './ngx-guides.component';

export class NgxGuidesInterface {
  @withMethods(METHODS as any)
  protected guides!: VanillaGuides;
}
export interface NgxGuidesInterface extends MethodInterface<GuidesInterface, VanillaGuides, NgxGuidesComponent> {}
