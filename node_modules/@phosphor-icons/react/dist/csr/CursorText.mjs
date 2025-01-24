var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var m = (e, r, o) => r in e ? f(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, a = (e, r) => {
  for (var o in r || (r = {}))
    c.call(r, o) && m(e, o, r[o]);
  if (t)
    for (var o of t(r))
      n.call(r, o) && m(e, o, r[o]);
  return e;
}, s = (e, r) => i(e, p(r));
import x, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import u from "../defs/CursorText.mjs";
const w = d((e, r) => /* @__PURE__ */ x.createElement(l, s(a({ ref: r }, e), { weights: u })));
w.displayName = "CursorText";
export {
  w as CursorText
};
