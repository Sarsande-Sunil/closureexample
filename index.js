function debounce(func, timeout = 3000) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

function saveInput() {
  console.log("whatever time to click me I am  executed only after 3s");
}

const processChanges = debounce(() => saveInput());

// dbouncing only happen with its specified time if we calling function or clicking
// button conytinue but function only call when specified time
// complete 
