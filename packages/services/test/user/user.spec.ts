// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { JupyterServer } from '@jupyterlab/testutils';
import { ServerConnection, UserManager } from '../../src';

const server = new JupyterServer();

beforeAll(async () => {
  await server.start();
});

afterAll(async () => {
  await server.shutdown();
});

describe('user', () => {
  describe('UserManager', () => {
    let manager: UserManager;

    beforeAll(() => {
      manager = new UserManager({
        serverSettings: ServerConnection.makeSettings({ appUrl: 'lab' })
      });
    });

    describe('#constructor()', () => {
      it('should accept no options', () => {
        const manager = new UserManager();
        expect(manager).toBeInstanceOf(UserManager);
      });

      it('should accept options', () => {
        const manager = new UserManager({
          serverSettings: ServerConnection.makeSettings()
        });
        expect(manager).toBeInstanceOf(UserManager);
      });
    });

    it('Should have identity', () => {
      expect(manager.identity).not.toBeNull();
    });
  });
});
