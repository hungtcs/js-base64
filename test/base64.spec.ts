import { assert } from 'chai';
import { decode, encode } from '../src/base64'

describe('BAse64', () => {

  it('encode english', () => {
    assert.strictEqual(encode('hello'), 'aGVsbG8=');
  });

  it('decode english', () => {
    assert.strictEqual(decode('aGVsbG8='), 'hello');
  });

  it('encode chinese', () => {
    assert.strictEqual(encode('你好'), '5L2g5aW9');
  });

  it('decode chinese', () => {
    assert.strictEqual(decode('5L2g5aW9'), '你好');
  });

  it('encode and decode', () => {
    assert.strictEqual(decode(encode('你好')), '你好');
  });

});
