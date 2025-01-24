var f = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var p = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (r, e, o) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, a = (r, e) => {
  for (var o in e || (e = {}))
    c.call(e, o) && m(r, o, e[o]);
  if (p)
    for (var o of p(e))
      d.call(e, o) && m(r, o, e[o]);
  return r;
}, t = (r, e) => i(r, s(e));
import l, { forwardRef as n } from "react";
import y from "../lib/IconBase.mjs";
import E from "../defs/EyedropperSample.mjs";
const w = n((r, e) => /* @__PURE__ */ l.createElement(y, t(a({ ref: e }, r), { weights: E })));
w.displayName = "EyedropperSample";
export {
  w as EyedropperSample
};
