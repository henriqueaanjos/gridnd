var s = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, w = Object.prototype.propertyIsEnumerable;
var p = (r, e, o) => e in r ? s(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, t = (r, e) => {
  for (var o in e || (e = {}))
    c.call(e, o) && p(r, o, e[o]);
  if (a)
    for (var o of a(e))
      w.call(e, o) && p(r, o, e[o]);
  return r;
}, m = (r, e) => f(r, i(e));
import n, { forwardRef as N } from "react";
import d from "../lib/IconBase.mjs";
import l from "../defs/Newspaper.mjs";
const I = N((r, e) => /* @__PURE__ */ n.createElement(d, m(t({ ref: e }, r), { weights: l })));
I.displayName = "Newspaper";
export {
  I as Newspaper
};
