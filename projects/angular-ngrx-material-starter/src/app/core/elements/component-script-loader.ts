import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export abstract class ComponentScriptLoader {
  private readonly _isLoading$ = new BehaviorSubject<boolean>(true);
  readonly isLoading$ = this._isLoading$.asObservable();

  constructor(
    @Inject(String) private readonly elementName: string,
    @Inject(String) private readonly scriptName: string,
    @Inject(String) private readonly domain: string
  ) {
    if (!!customElements.get(this.elementName)) {
      this._isLoading$.next(false);
    }
  }

  loadScript() {
    const isFound = false;
    const scripts = document.getElementsByTagName('script');
    for (let i = 0; i < scripts.length; ++i) {
      if (
        scripts[i].getAttribute('src') != null &&
        scripts[i].getAttribute('src').includes(this.scriptName)
      ) {
        scripts[i].parentElement.removeChild(scripts[i]);

        break;
      }
    }

    if (!isFound) {
      const script = this.createScriptNode(this.scriptName);
      this.addNodeToHead(script);
    }
  }

  private createScriptNode(scriptName: string): HTMLScriptElement {
    const node = document.createElement('script');
    node.src = `${this.domain}${scriptName}`;
    node.type = 'text/javascript';
    node.async = false;
    node.charset = 'utf-8';

    node.onerror = () => {
      this._isLoading$.next(false);

      throw new Error(`Could not load script for ${this.elementName}`);
    };

    node.onload = () => {
      this._isLoading$.next(false);
    };
    return node;
  }

  private addNodeToHead(node: HTMLElement) {
    document.getElementsByTagName('head')[0].appendChild(node);
  }
}
