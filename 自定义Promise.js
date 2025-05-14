class MyPromise {
  constructor(executor) {
    this.state = "pending";
    this.value = undefined;
    this.reason = undefined;
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = (value) => {
      if (this.state === "pending") {
        this.state = "fulfilled";
        this.value = value;
        this.onFulfilledCallbacks.forEach((fn) => fn());
      }
    };

    const reject = (reason) => {
      if (this.state === "pending") {
        this.state = "rejected";
        this.reason = reason;
        this.onRejectedCallbacks.forEach((fn) => fn());
      }
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      if (this.state === "fulfilled") {
        try {
          const result = onFulfilled ? onFulfilled(this.value) : this.value;
          resolve(result);
        } catch (error) {
          reject(error);
        }
      } else if (this.state === "rejected") {
        try {
          const result = onRejected ? onRejected(this.reason) : this.reason;
          resolve(result);
        } catch (error) {
          reject(error);
        }
      } else {
        this.onFulfilledCallbacks.push(() => {
          try {
            const result = onFulfilled ? onFulfilled(this.value) : this.value;
            resolve(result);
          } catch (error) {
            reject(error);
          }
        });

        this.onRejectedCallbacks.push(() => {
          try {
            const result = onRejected ? onRejected(this.reason) : this.reason;
            resolve(result);
          } catch (error) {
            reject(error);
          }
        });
      }
    });
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }
}

// 使用自定义Promise
const myPromise = new MyPromise((resolve, reject) => {
  setTimeout(() => resolve("自定义Promise成功"), 1000);
});

myPromise
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
