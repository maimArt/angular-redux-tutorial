import * as _ from 'lodash'

export namespace Cursor {

  export class ObjectCursor<T> {
    private rootObject: T
    private path: string = ''

    constructor(root: T) {
      this.rootObject = root
    }

    public to<K extends keyof T>(key: K): CursorNode<T, T[K]> {
      let node = this.rootObject[key]
      this.appendToPath(key)
      return new CursorNode(this, node)
    }

    public appendToPath(subpath: string) {
      this.path += (this.path.length == 0 ? '' : '.') + subpath
    }

    public getPath(): string {
      return this.path
    }

    public getObject(): T {
      return this.rootObject
    }
  }

  class CursorNode<T, N> {
    private root: ObjectCursor<T>
    private node: N;

    constructor(root: ObjectCursor<T>, node: N) {
      this.root = root
      this.node = node
    }

    to<K extends keyof N>(key: K): CursorNode<T, N[K]> {
      var branch = this.node[key]
      this.root.appendToPath(key)
      return new CursorNode(this.root, branch)
    }

    set<K extends keyof N>(value): CursorNode<T, N> {
      _.set(this.root.getObject(), this.root.getPath(), value)
      return this
    }

    getObject() {
      return this.root.getObject()
    }
  }

  export class ClonedObjectCursor<T> extends ObjectCursor<T> {
    constructor(root: T) {
      super(_.cloneDeep(root))
    }
  }
}
