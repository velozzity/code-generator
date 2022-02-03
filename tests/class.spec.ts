import { Class } from '../src/lib/Class';
import Writer from '../src/lib/Writer';
import { Utility } from '@velozzity/ts-helpers';

describe('Class Tests', () => {

  test('new class object can be used to generate class', () => {
    const name = Utility.randomHexString(5) as string;
    const class_ = new Class(name);
    class_.write((content: Writer) => {
      content.add('// class comment');
    });
    expect(class_.toString()).toBeTruthy();
    expect(class_.toString()).toContain('class');
    expect(class_.toString()).toContain(name);
  });

  test('class.create can be used to generate class', () => {
    const testText = Utility.randomHexString(25) as string;
    const name = Utility.randomHexString(5) as string;
    const class_ = Class.create(name, (content) => {
      content.add(testText);
    });
    expect(class_.toString()).toBeTruthy();
    expect(class_.toString()).toContain(testText);
  });
});