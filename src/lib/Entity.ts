import Writer, { WriterFunction } from './Writer';

export default abstract class Entity {
  protected name: string;
  protected content: Writer;

  protected constructor (name: string) {
    this.name = name;
    this.content = new Writer();
  }

  protected abstract writeStart (name: string);

  protected abstract writeEnd ();

  protected abstract writeContent (write: WriterFunction);

  abstract write (write: WriterFunction);

  static _create<T extends Entity> (eConstructor: new (name: string) => T, name: string, writerFn: WriterFunction): T {
    const _ent = new (eConstructor)(name);
    _ent.write(writerFn);
    return _ent;
  };

  toString () {
    return this.content.print();
  }
}