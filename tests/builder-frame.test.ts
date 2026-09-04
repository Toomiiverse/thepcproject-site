import assert from 'node:assert/strict';
import { test } from 'node:test';
import { builderFrameSrc } from '../src/lib/builderFrame.ts';

const q = '?embed=1&poster=1';

test('shop origin :8090 points the iframe at the builder port', () => {
  assert.equal(
    builderFrameSrc({ protocol: 'http:', hostname: '192.168.50.200', port: '8090' }),
    `http://192.168.50.200:8091/${q}`,
  );
});

test('preview :8092 keeps the preview port on /builder/', () => {
  assert.equal(
    builderFrameSrc({ protocol: 'http:', hostname: '192.168.50.200', port: '8092' }),
    `http://192.168.50.200:8092/builder/${q}`,
  );
});

test('public https (no port) uses same-origin /builder/', () => {
  assert.equal(
    builderFrameSrc({ protocol: 'https:', hostname: 'www.thepcproject.com.au', port: '' }),
    `https://www.thepcproject.com.au/builder/${q}`,
  );
});
