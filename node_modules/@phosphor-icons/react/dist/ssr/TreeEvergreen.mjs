var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (r, e, o) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, a = (r, e) => {
  for (var o in e || (e = {}))
    n.call(e, o) && m(r, o, e[o]);
  if (t)
    for (var o of t(e))
      c.call(e, o) && m(r, o, e[o]);
  return r;
}, f = (r, e) => p(r, s(e));
import g, { forwardRef as E } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/TreeEvergreen.mjs";
const l = E((r, e) => /* @__PURE__ */ g.createElement(R, f(a({ ref: e }, r), { weights: d })));
l.displayName = "TreeEvergreen";
export {
  l as TreeEvergreen
};
