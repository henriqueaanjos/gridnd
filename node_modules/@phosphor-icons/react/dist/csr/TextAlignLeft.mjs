var i = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (t, e, o) => e in t ? i(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o, a = (t, e) => {
  for (var o in e || (e = {}))
    s.call(e, o) && m(t, o, e[o]);
  if (r)
    for (var o of r(e))
      c.call(e, o) && m(t, o, e[o]);
  return t;
}, f = (t, e) => n(t, p(e));
import l, { forwardRef as g } from "react";
import x from "../lib/IconBase.mjs";
import d from "../defs/TextAlignLeft.mjs";
const w = g((t, e) => /* @__PURE__ */ l.createElement(x, f(a({ ref: e }, t), { weights: d })));
w.displayName = "TextAlignLeft";
export {
  w as TextAlignLeft
};
