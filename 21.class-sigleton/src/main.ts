class Singleton {
  static instance: Singleton;

  private constructor() {}

  static getInstance() {
    if (this.instance) return this.instance;
    this.instance = new Singleton();
    return this.instance;
  }
}

let singleton = Singleton.getInstance;

// const Singleton1 = new Singleton();
// const Singleton2 = new Singleton();
