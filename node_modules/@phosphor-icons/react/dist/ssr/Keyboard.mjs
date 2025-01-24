var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (r, e, o) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, m = (r, e) => {
  for (var o in e || (e = {}))
    d.call(e, o) && t(r, o, e[o]);
  if (a)
    for (var o of a(e))
      c.call(e, o) && t(r, o, e[o]);
  return r;
}, f = (r, e) => p(r, s(e));
import y, { forwardRef as R } from "react";
import b from "../lib/SSRBase.mjs";
import l from "../defs/Keyboard.mjs";
const n = R((r, e) => /* @__PURE__ */ y.createElement(b, f(m({ ref: e }, r), { weights: l })));
n.displayName = "Keyboard";
export {
  n as Keyboard
};
