import Entity from './Entity';

type ContentType = 'start' | 'end';
export type WriterFunction = (write: Writer) => void;

export default class Writer {
  protected content: string;
  protected indent: string;

  constructor (indent: string = '\t') {
    this.indent = indent;
  }

  add = (content: string | Entity, type: ContentType | null = null) => {
    let prefix = type === 'start' ? ('') : (type === 'end' ? '\n' : `\n${this.indent}`);
    this.content += `${prefix}${content.toString()}`;
  };

  clear = () => this.content = '';

  print () {
    return this.content;
  }
}