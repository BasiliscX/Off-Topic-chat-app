import { expect } from 'chai';
import { sendMessageService as createMessage } from '../../../src/features/sendmessage/sendmessage.service.js';
import sinon from 'sinon';
import prisma from '../../../src/prisma/prismaClient.js';

describe('createMessage', function() {
  this.timeout(5000);

  let createStub;

  beforeEach(() => {
    createStub = sinon.stub(prisma.message, 'create').resolves({ id: 1, content: 'Hola mundo' });
  });

  afterEach(() => {
    createStub.restore();
  });

  it('should throw an error if the content is empty', async () => {
    try {
      await createMessage('');
    } catch (error) {
      expect(error.message).to.equal('Content is required');
    }
  });
});
