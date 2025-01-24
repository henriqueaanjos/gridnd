var i = Object.defineProperty, f = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var p = (r, e, o) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, t = (r, e) => {
  for (var o in e || (e = {}))
    l.call(e, o) && p(r, o, e[o]);
  if (m)
    for (var o of m(e))
      S.call(e, o) && p(r, o, e[o]);
  return r;
}, a = (r, e) => f(r, s(e));
import c, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import n from "../defs/DropSimple.mjs";
const w = R((r, e) => /* @__PURE__ */ c.createElement(d, a(t({ ref: e }, r), { weights: n })));
w.displayName = "DropSimple";
export {
  w as DropSimple
};
