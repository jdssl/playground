'use strict';

class FluentAPI {
  #content
  constructor(content) {
    this.#content = content
  }

  sayHi() {
    this.#content = `Hi ${this.#content}`
    return this
  }

  build() {
    return this.#content
  }
}

const fluent = new FluentAPI('Jonatan').sayHi().build()
console.log(fluent)
