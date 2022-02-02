import { BlockEntity } from './Entity';
import Writer, { WriterFunction } from './Writer';

export class Class extends BlockEntity {
  protected name: string;
  protected content: Writer;

  constructor (name: string) {
    super(name);
  }

  write (write: (Writer) => void) {
    this.writeStart(this.name);
    this.writeContent(write);
    this.writeEnd();
  }

  protected writeContent (writer: (Writer) => void) {
    writer(this.content);
  }

  protected writeEnd () {
    this.content.add('}', 'end');
  }

  protected writeStart (name: string) {
    this.content.clear();
    this.content.add(`class ${name} {`, 'start');
  }

  static create (name: string, writeFn: WriterFunction): Class {
    return BlockEntity._create<Class>(Class, name, writeFn);
  }
}