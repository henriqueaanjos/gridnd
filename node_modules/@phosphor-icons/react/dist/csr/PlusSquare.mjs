var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var t = (r, e, o) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, m = (r, e) => {
  for (var o in e || (e = {}))
    c.call(e, o) && t(r, o, e[o]);
  if (a)
    for (var o of a(e))
      l.call(e, o) && t(r, o, e[o]);
  return r;
}, s = (r, e) => i(r, p(e));
import u, { forwardRef as n } from "react";
import d from "../lib/IconBase.mjs";
import q from "../defs/PlusSquare.mjs";
const w = n((r, e) => /* @__PURE__ */ u.createElement(d, s(m({ ref: e }, r), { weights: q })));
w.displayName = "PlusSquare";
export {
  w as PlusSquare
};
