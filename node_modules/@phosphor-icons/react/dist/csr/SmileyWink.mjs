var f = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var i = (m, e, o) => e in m ? f(m, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : m[e] = o, t = (m, e) => {
  for (var o in e || (e = {}))
    s.call(e, o) && i(m, o, e[o]);
  if (r)
    for (var o of r(e))
      c.call(e, o) && i(m, o, e[o]);
  return m;
}, a = (m, e) => n(m, p(e));
import l, { forwardRef as y } from "react";
import d from "../lib/IconBase.mjs";
import k from "../defs/SmileyWink.mjs";
const w = y((m, e) => /* @__PURE__ */ l.createElement(d, a(t({ ref: e }, m), { weights: k })));
w.displayName = "SmileyWink";
export {
  w as SmileyWink
};
