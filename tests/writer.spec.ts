import Writer from '../bin/lib/Writer';
import { Class } from '../bin/lib/Class';
import { randomHexString } from '@velozzity/ts-helpers/dist/Utility';

describe('Writer Tests', ()=>{

  test('writer can be updated by entity', () => {
    const wr = new Writer();
    const testText = randomHexString(25) as string;
    wr.add(Class.create('Test', (class_)=>{
      class_.add(testText);
    }))
    expect(wr.toString()).toBeTruthy();
    expect(wr.toString()).toContain('Test');
    expect(wr.toString()).toContain('class');
    expect(wr.toString()).toContain(testText);
  });

  test('writer can be updated by string', () => {
    const wr = new Writer();
    const testText = randomHexString(25) as string;
    wr.add(testText);
    expect(wr.toString()).toBeTruthy();
    expect(wr.toString()).toContain(testText);
  });

  test('writer can be cleared', () => {
    const wr = new Writer();
    const testText = randomHexString(25) as string;
    wr.add(testText);
    expect(wr.toString()).toBeTruthy();
    expect(wr.toString()).toContain(testText);
    wr.clear();
    expect(wr.toString()).toBe("");
  })
})