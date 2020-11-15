import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { ComponentScriptLoader } from '../../../core/elements/component-script-loader';

@Injectable()
export class ElementsLoader extends ComponentScriptLoader {
  constructor() {
    super(
      'counter-button',
      environment.microFrontends.elements.scriptName,
      environment.microFrontends.elements.domain
    );
  }
}
