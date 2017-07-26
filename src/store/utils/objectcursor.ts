import * as _ from 'lodash'

export namespace Cursor {

  export class ObjectCursor<RT> {
    private rootObject: RT
    private path: string = ''

    constructor(root: RT) {
      this.rootObject = root
    }

    public to<K extends keyof RT>(key: K): ObjectCursorNode<RT, RT[K]> {
      let node = this.rootObject[key]
      this.appendToPath(key)
      return new ObjectCursorNode(this, node)
    }

    public appendToPath(subpath: string) {
      this.path += (this.path.length == 0 ? '' : '.') + subpath
    }

    public getPath(): string {
      return this.path
    }

    public getObject(): RT {
      return this.rootObject
    }
  }

  // RT --> RootType
  // N --> Node Type
  class ObjectCursorNode<RT, N> {
    private root: ObjectCursor<RT>
    private node: N;

    constructor(root: ObjectCursor<RT>, node: N) {
      this.root = root
      this.node = node
    }

    to<K extends keyof N>(key: K): ObjectCursorNode<RT, N[K]> {
      var branch = this.node[key]
      this.root.appendToPath(key)
      return new ObjectCursorNode(this.root, branch)
    }

    /* type safe setter */
    set(value:N): ObjectCursorNode<RT, N> {
      _.set(this.root.getObject(), this.root.getPath(), value)
      return this;
    }

    setByFunction(setFunction:(N) => N): ObjectCursorNode<RT, N> {
      let currentvalue = _.get(this.root.getObject(), this.root.getPath());
      let value = setFunction(currentvalue);
      _.set(this.root.getObject(), this.root.getPath(), value)
      return this;
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
