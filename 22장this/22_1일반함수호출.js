function foo() {
  console.log("foo this ", this); //window
  function bar() {
    console.log("Bar this :", this); // window
  }
  bar();
}
foo();
