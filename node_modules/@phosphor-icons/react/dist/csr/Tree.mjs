var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var m = (r, e, o) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, a = (r, e) => {
  for (var o in e || (e = {}))
    c.call(e, o) && m(r, o, e[o]);
  if (t)
    for (var o of t(e))
      n.call(e, o) && m(r, o, e[o]);
  return r;
}, f = (r, e) => p(r, s(e));
import d, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import I from "../defs/Tree.mjs";
const R = l((r, e) => /* @__PURE__ */ d.createElement(w, f(a({ ref: e }, r), { weights: I })));
R.displayName = "Tree";
export {
  R as Tree
};
