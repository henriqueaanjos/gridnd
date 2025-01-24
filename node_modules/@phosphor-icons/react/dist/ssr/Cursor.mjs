var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var m = (o, r, e) => r in o ? f(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, a = (o, r) => {
  for (var e in r || (r = {}))
    c.call(r, e) && m(o, e, r[e]);
  if (t)
    for (var e of t(r))
      R.call(r, e) && m(o, e, r[e]);
  return o;
}, s = (o, r) => i(o, p(r));
import d, { forwardRef as l } from "react";
import n from "../lib/SSRBase.mjs";
import u from "../defs/Cursor.mjs";
const w = l((o, r) => /* @__PURE__ */ d.createElement(n, s(a({ ref: r }, o), { weights: u })));
w.displayName = "Cursor";
export {
  w as Cursor
};
