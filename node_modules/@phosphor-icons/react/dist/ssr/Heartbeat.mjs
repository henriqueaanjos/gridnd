var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var o = (t, e, r) => e in t ? i(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, m = (t, e) => {
  for (var r in e || (e = {}))
    c.call(e, r) && o(t, r, e[r]);
  if (a)
    for (var r of a(e))
      R.call(e, r) && o(t, r, e[r]);
  return t;
}, f = (t, e) => p(t, s(e));
import b, { forwardRef as d } from "react";
import l from "../lib/SSRBase.mjs";
import n from "../defs/Heartbeat.mjs";
const w = d((t, e) => /* @__PURE__ */ b.createElement(l, f(m({ ref: e }, t), { weights: n })));
w.displayName = "Heartbeat";
export {
  w as Heartbeat
};
