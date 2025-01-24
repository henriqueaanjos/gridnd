var f = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var a = (t, e, o) => e in t ? f(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o, m = (t, e) => {
  for (var o in e || (e = {}))
    c.call(e, o) && a(t, o, e[o]);
  if (r)
    for (var o of r(e))
      R.call(e, o) && a(t, o, e[o]);
  return t;
}, p = (t, e) => i(t, s(e));
import n, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/Repeat.mjs";
const I = d((t, e) => /* @__PURE__ */ n.createElement(l, p(m({ ref: e }, t), { weights: w })));
I.displayName = "Repeat";
export {
  I as Repeat
};
