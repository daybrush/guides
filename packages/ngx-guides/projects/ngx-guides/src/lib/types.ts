import { EventEmitter } from '@angular/core';
import { GuidesEvents } from '@scena/guides';

export type NgxGuidesEvents = {
  [key in keyof GuidesEvents]: EventEmitter<GuidesEvents[key]>
};
