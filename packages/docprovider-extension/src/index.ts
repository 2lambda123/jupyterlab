// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
/**
 * @packageDocumentation
 * @module docprovider-extension
 */

import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';
import { URLExt } from '@jupyterlab/coreutils';
import {
  IDocumentProvider,
  IDocumentProviderFactory,
  ProviderMock,
  WebSocketProvider
} from '@jupyterlab/docprovider';
import { ServerConnection } from '@jupyterlab/services';
import { ITranslator, nullTranslator } from '@jupyterlab/translation';
import { DocumentChange, YDocument } from '@jupyterlab/shared-models';

/**
 * The default document provider plugin
 */
const docProviderPlugin: JupyterFrontEndPlugin<IDocumentProviderFactory> = {
  id: '@jupyterlab/docprovider-extension:plugin',
  provides: IDocumentProviderFactory,
  optional: [ITranslator],
  activate: (
    app: JupyterFrontEnd,
    translator: ITranslator | null
  ): IDocumentProviderFactory => {
    const trans = (translator || nullTranslator).load('jupyterlab');
    const server = ServerConnection.makeSettings();
    const url = URLExt.join(server.wsUrl, 'api/yjs');
    const factory = (
      options: IDocumentProviderFactory.IOptions<YDocument<DocumentChange>>
    ): IDocumentProvider => {
      return options.collaborative
        ? new WebSocketProvider({
            ...options,
            url,
            user: app.serviceManager.user,
            translator: trans
          })
        : new ProviderMock();
    };
    return factory;
  }
};

/**
 * Export the plugins as default.
 */
const plugins: JupyterFrontEndPlugin<any>[] = [docProviderPlugin];
export default plugins;
