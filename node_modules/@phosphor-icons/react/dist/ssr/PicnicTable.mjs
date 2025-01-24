var c = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var i = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var o = (r, e, a) => e in r ? c(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, t = (r, e) => {
  for (var a in e || (e = {}))
    s.call(e, a) && o(r, a, e[a]);
  if (i)
    for (var a of i(e))
      l.call(e, a) && o(r, a, e[a]);
  return r;
}, m = (r, e) => f(r, p(e));
import n, { forwardRef as R } from "react";
import b from "../lib/SSRBase.mjs";
import d from "../defs/PicnicTable.mjs";
const w = R((r, e) => /* @__PURE__ */ n.createElement(b, m(t({ ref: e }, r), { weights: d })));
w.displayName = "PicnicTable";
export {
  w as PicnicTable
};
