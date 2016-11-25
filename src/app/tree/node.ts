import {isNull} from 'util';
export class Node {
  private _children: Node[] = [];
  private _hanging: boolean = false;

  constructor(private _id: number, private _parent: Node, private _mi: number, private _level: number) {
    if (!isNull(_parent)) {
      _parent.appendChild(this);
    }
  }

  appendChild(node: Node): void {
    this._children.push(node);
  }

  get id(): number {
    return this._id;
  }

  get parent(): Node {
    return this._parent;
  }

  get children(): Node[] {
    return this._children;
  }

  get mi(): number {
    return this._mi;
  }

  get childCount(): number { // real child count for Node
    return this._children.length;
  }

  get level(): number {
    return this._level;
  }

  get hasChild(): boolean {
    return this._children.length > 0;
  }

  set hanging(value: boolean) {
    this._hanging = value;
  }

  get hanging(): boolean {
    return this._hanging;
  }

  get stringIdentifier(): string {
    const parentId = this._parent ? this._parent.id : 0;
    return `${this._id}-${parentId}`;
  }
}

