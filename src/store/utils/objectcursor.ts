import * as _ from 'lodash'

export namespace Cursor {

  /**
   * Class that wraps an object and allows to travers its children recursively
   **/
  export class ObjectCursor<RT> {
    private rootObject: RT
    private path: string = ''

    /**
     * default constructor
     * @param {RT} root traversing object
     */
    constructor(root: RT) {
      this.rootObject = root
    }

    /** move to child node
     * @param {K} name of the child node
     * @returns {ObjectCursorNode<RT, RT[K]>} traversable child node
     **/
    public to<K extends keyof RT>(childNode: K): ObjectCursorNode<RT, RT[K]> {
      let node = this.rootObject[childNode]
      this.appendToPath(childNode)
      return new ObjectCursorNode(this, node)
    }

    public appendToPath(subpath: string) {
      this.path += (this.path.length == 0 ? '' : '.') + subpath
    }

    public getPath(): string {
      return this.path
    }

    /**
     * @returns {RT} wrapped object
     */
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

    /** move to child node
     * @param {K} name of the child node
     * @returns {ObjectCursorNode<RT, N[K]>} traversable child node
     **/
    to<K extends keyof N>(key: K): ObjectCursorNode<RT, N[K]> {
      var branch = this.node[key]
      this.root.appendToPath(key)
      return new ObjectCursorNode(this.root, branch)
    }

    /**
     * sets the value of the node
     * @param {N} value
     * @returns {Cursor.ObjectCursorNode<RT, N>} this
     */
    set(value:N): ObjectCursorNode<RT, N> {
      _.set(this.root.getObject(), this.root.getPath(), value)
      return this;
    }

    /**
     * sets the value of the node
     * @param {function:(N) => N} injected function that creates the new value by knowing the old value (e.g. (oldValueArray) => [...oldValueArray, appendedValue]
     * @returns {Cursor.ObjectCursorNode<RT, N>} this
     */
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

  /** Same like {@link ObjectCursor} but works on a clone of the object */
  export class ClonedObjectCursor<T> extends ObjectCursor<T> {

    /**
     * default constructor that clones the object
     * @param {RT} root traversing object
     */
    constructor(root: T) {
      super(_.cloneDeep(root))
    }
  }
}
