var __evaluatePureFunction = this.__evaluatePureFunction || (f => f());
var obj =
  global.__abstract && global.__makePartial && global.__makeSimple
    ? __makeSimple(__makePartial(__abstract({ foo: __abstract("number") }, "({foo:1})")))
    : { foo: 1 };
var copyOfObj;
var y;

__evaluatePureFunction(() => {
  copyOfObj = {};
  y = 0;
  Object.assign(copyOfObj, obj);
  Object.defineProperty(copyOfObj, "foo", {
    enumerable: true,
    set() {
      y = 42;
    },
  });
});

inspect = function() {
  return JSON.stringify(y);
};
