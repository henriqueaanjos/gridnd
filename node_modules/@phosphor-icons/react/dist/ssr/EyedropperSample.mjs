var f = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var p = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var m = (r, e, o) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, a = (r, e) => {
  for (var o in e || (e = {}))
    d.call(e, o) && m(r, o, e[o]);
  if (p)
    for (var o of p(e))
      l.call(e, o) && m(r, o, e[o]);
  return r;
}, t = (r, e) => i(r, s(e));
import S, { forwardRef as c } from "react";
import y from "../lib/SSRBase.mjs";
import E from "../defs/EyedropperSample.mjs";
const R = c((r, e) => /* @__PURE__ */ S.createElement(y, t(a({ ref: e }, r), { weights: E })));
R.displayName = "EyedropperSample";
export {
  R as EyedropperSample
};
