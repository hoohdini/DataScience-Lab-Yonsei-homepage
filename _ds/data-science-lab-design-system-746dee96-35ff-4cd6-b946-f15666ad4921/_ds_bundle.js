/* @ds-bundle: {"format":4,"namespace":"DataScienceLabDesignSystem_746dee","components":[{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/display/Badge.jsx":"1b5a2efada56","components/display/Card.jsx":"3e17c3ea6e86","components/display/Tag.jsx":"985cb5a1bb4e","components/feedback/Dialog.jsx":"f248006ff67b","components/feedback/Toast.jsx":"e1d8c6f997e5","components/feedback/Tooltip.jsx":"e2a5d4401a39","components/forms/Button.jsx":"c14366391b2f","components/forms/Checkbox.jsx":"c60262f6ca00","components/forms/IconButton.jsx":"1cda16626db4","components/forms/Input.jsx":"aae09473e8d7","components/forms/Radio.jsx":"3f8c43e49939","components/forms/Select.jsx":"7cc4ddf70e1f","components/forms/Switch.jsx":"d65fca8b2510","components/navigation/Tabs.jsx":"fea65c13023c"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DataScienceLabDesignSystem_746dee = window.DataScienceLabDesignSystem_746dee || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/display/Badge.jsx
try { (() => {
const badgeTones = {
  brand: {
    bg: 'var(--dsl-blue-50)',
    fg: 'var(--dsl-blue-700)'
  },
  neutral: {
    bg: 'var(--dsl-gray-100)',
    fg: 'var(--dsl-gray-600)'
  },
  success: {
    bg: 'var(--dsl-success-bg)',
    fg: 'var(--dsl-success)'
  },
  warning: {
    bg: 'var(--dsl-warning-bg)',
    fg: 'var(--dsl-warning)'
  },
  danger: {
    bg: 'var(--dsl-danger-bg)',
    fg: 'var(--dsl-danger)'
  }
};
function Badge({
  tone = 'brand',
  solid = false,
  children,
  style
}) {
  const t = badgeTones[tone] || badgeTones.brand;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      padding: '2px 9px',
      borderRadius: 'var(--radius-sm)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-semibold)',
      background: solid ? tone === 'brand' ? 'var(--accent)' : t.fg : t.bg,
      color: solid ? '#fff' : t.fg,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function Card({
  title,
  subtitle,
  footer,
  padding = 'md',
  hoverable = false,
  children,
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const pad = {
    sm: 12,
    md: 20,
    lg: 28
  }[padding] || 20;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      padding: pad,
      boxSizing: 'border-box',
      fontFamily: 'var(--font-sans)',
      boxShadow: hoverable && hover ? 'var(--shadow-md)' : 'var(--shadow-sm)',
      cursor: onClick ? 'pointer' : undefined,
      transition: 'box-shadow var(--duration-base) var(--ease-out)',
      ...style
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: subtitle ? 4 : children ? 12 : 0,
      fontSize: 'var(--text-md)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-strong)'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: children ? 12 : 0,
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, subtitle), children, footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      paddingTop: 12,
      borderTop: '1px solid var(--border-default)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, footer));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/Tag.jsx
try { (() => {
function Tag({
  selected = false,
  removable = false,
  onRemove,
  onClick,
  children,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '4px 12px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-medium)',
      background: selected ? 'var(--accent)' : hover && onClick ? 'var(--dsl-gray-100)' : 'var(--surface-card)',
      color: selected ? '#fff' : 'var(--text-body)',
      border: `1px solid ${selected ? 'var(--accent)' : 'var(--border-strong)'}`,
      cursor: onClick ? 'pointer' : 'default',
      transition: 'background var(--duration-fast) var(--ease-out)',
      ...style
    }
  }, children, removable && /*#__PURE__*/React.createElement("svg", {
    onClick: e => {
      e.stopPropagation();
      onRemove && onRemove();
    },
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    style: {
      cursor: 'pointer',
      opacity: 0.7
    }
  }, /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  })));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open = false,
  title,
  onClose,
  footer,
  children,
  width = 440,
  style
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      background: 'rgba(28, 44, 80, 0.4)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    role: "dialog",
    "aria-modal": "true",
    style: {
      width,
      maxWidth: 'calc(100vw - 48px)',
      boxSizing: 'border-box',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-overlay)',
      padding: 24,
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-lg)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-strong)'
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "\uB2EB\uAE30",
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      color: 'var(--text-muted)',
      padding: 4,
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-base)',
      color: 'var(--text-body)',
      lineHeight: 'var(--leading-normal)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22,
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 8
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const toastTones = {
  info: {
    fg: 'var(--dsl-info)',
    bg: 'var(--dsl-info-bg)'
  },
  success: {
    fg: 'var(--dsl-success)',
    bg: 'var(--dsl-success-bg)'
  },
  warning: {
    fg: 'var(--dsl-warning)',
    bg: 'var(--dsl-warning-bg)'
  },
  danger: {
    fg: 'var(--dsl-danger)',
    bg: 'var(--dsl-danger-bg)'
  }
};
const toastIcons = {
  info: /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }),
  success: /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }),
  warning: /*#__PURE__*/React.createElement("path", {
    d: "M12 2 L22 20 H2 Z"
  }),
  danger: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  }))
};
function Toast({
  tone = 'info',
  title,
  description,
  onDismiss,
  style
}) {
  const t = toastTones[tone] || toastTones.info;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 10,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-lg)',
      padding: '12px 14px',
      fontFamily: 'var(--font-sans)',
      maxWidth: 380,
      boxSizing: 'border-box',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 26,
      flexShrink: 0,
      borderRadius: '50%',
      background: t.bg,
      color: t.fg,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, toastIcons[tone] || toastIcons.info)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-strong)'
    }
  }, title), description && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, description)), onDismiss && /*#__PURE__*/React.createElement("button", {
    onClick: onDismiss,
    "aria-label": "\uB2EB\uAE30",
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      color: 'var(--text-faint)',
      padding: 2,
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  }))));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  content,
  side = 'top',
  children,
  style
}) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: {
      bottom: '100%',
      left: '50%',
      transform: 'translate(-50%, -6px)'
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: 'translate(-50%, 6px)'
    },
    left: {
      right: '100%',
      top: '50%',
      transform: 'translate(-6px, -50%)'
    },
    right: {
      left: '100%',
      top: '50%',
      transform: 'translate(6px, -50%)'
    }
  }[side];
  return /*#__PURE__*/React.createElement("span", {
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    }
  }, children, show && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      zIndex: 50,
      whiteSpace: 'nowrap',
      background: 'var(--dsl-blue-900)',
      color: '#fff',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-medium)',
      padding: '5px 10px',
      borderRadius: 'var(--radius-sm)',
      boxShadow: 'var(--shadow-md)',
      pointerEvents: 'none',
      ...pos
    }
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
const btnSizes = {
  sm: {
    padding: '6px 12px',
    fontSize: 13,
    height: 32
  },
  md: {
    padding: '8px 16px',
    fontSize: 14,
    height: 38
  },
  lg: {
    padding: '10px 22px',
    fontSize: 15,
    height: 44
  }
};
const btnVariants = {
  primary: {
    base: {
      background: 'var(--accent)',
      color: 'var(--text-on-primary)',
      border: '1px solid transparent'
    },
    hover: {
      background: 'var(--accent-hover)'
    },
    active: {
      background: 'var(--accent-active)'
    }
  },
  secondary: {
    base: {
      background: 'var(--surface-card)',
      color: 'var(--text-brand)',
      border: '1px solid var(--border-brand)'
    },
    hover: {
      background: 'var(--dsl-blue-50)'
    },
    active: {
      background: 'var(--dsl-blue-100)'
    }
  },
  ghost: {
    base: {
      background: 'transparent',
      color: 'var(--text-body)',
      border: '1px solid transparent'
    },
    hover: {
      background: 'var(--dsl-gray-100)'
    },
    active: {
      background: 'var(--dsl-gray-200)'
    }
  },
  danger: {
    base: {
      background: 'var(--dsl-danger)',
      color: 'var(--text-on-primary)',
      border: '1px solid transparent'
    },
    hover: {
      background: '#a93f3f'
    },
    active: {
      background: '#913636'
    }
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  children,
  onClick,
  style
}) {
  const [state, setState] = React.useState('base');
  const v = btnVariants[variant] || btnVariants.primary;
  const s = btnSizes[size] || btnSizes.md;
  const stateStyle = state === 'base' ? {} : v[state] || {};
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    disabled: disabled,
    onMouseEnter: () => setState('hover'),
    onMouseLeave: () => setState('base'),
    onMouseDown: () => setState('active'),
    onMouseUp: () => setState('hover'),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-medium)',
      borderRadius: 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'background var(--duration-fast) var(--ease-out)',
      width: fullWidth ? '100%' : undefined,
      opacity: disabled ? 0.45 : 1,
      ...s,
      ...v.base,
      ...(!disabled ? stateStyle : {}),
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked = false,
  onChange,
  disabled = false,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      cursor: disabled ? 'not-allowed' : 'pointer',
      fontFamily: 'var(--font-sans)',
      opacity: disabled ? 0.45 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 18,
      height: 18,
      flexShrink: 0,
      borderRadius: 5,
      boxSizing: 'border-box',
      border: `1.5px solid ${checked ? 'var(--accent)' : 'var(--border-strong)'}`,
      background: checked ? 'var(--accent)' : 'var(--surface-card)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background var(--duration-fast) var(--ease-out), border-color var(--duration-fast) var(--ease-out)'
    }
  }, checked && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }))), label && /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
function IconButton({
  variant = 'ghost',
  size = 'md',
  disabled = false,
  label,
  children,
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const dims = {
    sm: 28,
    md: 36,
    lg: 44
  }[size] || 36;
  const variants = {
    primary: {
      background: hover ? 'var(--accent-hover)' : 'var(--accent)',
      color: 'var(--text-on-primary)',
      border: '1px solid transparent'
    },
    secondary: {
      background: hover ? 'var(--dsl-blue-50)' : 'var(--surface-card)',
      color: 'var(--text-brand)',
      border: '1px solid var(--border-brand)'
    },
    ghost: {
      background: hover ? 'var(--dsl-gray-100)' : 'transparent',
      color: 'var(--text-muted)',
      border: '1px solid transparent'
    }
  };
  const v = variants[variant] || variants.ghost;
  return /*#__PURE__*/React.createElement("button", {
    "aria-label": label,
    title: label,
    onClick: onClick,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: dims,
      height: dims,
      borderRadius: 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'background var(--duration-fast) var(--ease-out)',
      ...v,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  helper,
  error,
  disabled = false,
  style
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-strong)',
      marginBottom: 6
    }
  }, label), /*#__PURE__*/React.createElement("input", {
    type: type,
    placeholder: placeholder,
    value: value,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.value),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      boxSizing: 'border-box',
      height: 40,
      padding: '0 12px',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-strong)',
      background: disabled ? 'var(--dsl-gray-100)' : 'var(--surface-card)',
      border: `1px solid ${error ? 'var(--dsl-danger)' : focus ? 'var(--dsl-blue-500)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-md)',
      outline: 'none',
      boxShadow: focus ? 'var(--focus-ring)' : 'none',
      transition: 'box-shadow var(--duration-fast) var(--ease-out), border-color var(--duration-fast) var(--ease-out)'
    }
  }), (error || helper) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 'var(--text-xs)',
      marginTop: 5,
      color: error ? 'var(--dsl-danger)' : 'var(--text-muted)'
    }
  }, error || helper));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  checked = false,
  onChange,
  disabled = false,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    onClick: () => !disabled && onChange && onChange(),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      cursor: disabled ? 'not-allowed' : 'pointer',
      fontFamily: 'var(--font-sans)',
      opacity: disabled ? 0.45 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      flexShrink: 0,
      borderRadius: '50%',
      boxSizing: 'border-box',
      border: `1.5px solid ${checked ? 'var(--accent)' : 'var(--border-strong)'}`,
      background: 'var(--surface-card)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'border-color var(--duration-fast) var(--ease-out)'
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: '50%',
      background: 'var(--accent)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)'
    }
  }, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  options = [],
  value,
  onChange,
  placeholder,
  disabled = false,
  style
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-strong)',
      marginBottom: 6
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", {
    value: value ?? '',
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.value),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      height: 40,
      padding: '0 32px 0 12px',
      appearance: 'none',
      WebkitAppearance: 'none',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      color: value ? 'var(--text-strong)' : 'var(--text-faint)',
      background: disabled ? 'var(--dsl-gray-100)' : 'var(--surface-card)',
      border: `1px solid ${focus ? 'var(--dsl-blue-500)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-md)',
      outline: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      boxShadow: focus ? 'var(--focus-ring)' : 'none'
    }
  }, placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options.map(o => {
    const opt = typeof o === 'string' ? {
      value: o,
      label: o
    } : o;
    return /*#__PURE__*/React.createElement("option", {
      key: opt.value,
      value: opt.value
    }, opt.label);
  })), /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--text-muted)",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      position: 'absolute',
      right: 10,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "6 9 12 15 18 9"
  }))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  label,
  checked = false,
  onChange,
  disabled = false,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      fontFamily: 'var(--font-sans)',
      opacity: disabled ? 0.45 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 38,
      height: 22,
      borderRadius: 'var(--radius-pill)',
      boxSizing: 'border-box',
      padding: 2,
      background: checked ? 'var(--accent)' : 'var(--dsl-gray-300)',
      transition: 'background var(--duration-base) var(--ease-out)',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: 'var(--shadow-sm)',
      transform: checked ? 'translateX(16px)' : 'translateX(0)',
      transition: 'transform var(--duration-base) var(--ease-out)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  items = [],
  value,
  onChange,
  style
}) {
  const [hoverIdx, setHoverIdx] = React.useState(-1);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      borderBottom: '1px solid var(--border-default)',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, items.map((item, i) => {
    const t = typeof item === 'string' ? {
      value: item,
      label: item
    } : item;
    const active = t.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: t.value,
      onClick: () => onChange && onChange(t.value),
      onMouseEnter: () => setHoverIdx(i),
      onMouseLeave: () => setHoverIdx(-1),
      style: {
        padding: '10px 14px',
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-sm)',
        fontWeight: active ? 'var(--weight-semibold)' : 'var(--weight-regular)',
        color: active ? 'var(--text-brand)' : hoverIdx === i ? 'var(--text-strong)' : 'var(--text-muted)',
        borderBottom: `2px solid ${active ? 'var(--accent)' : 'transparent'}`,
        marginBottom: -1,
        transition: 'color var(--duration-fast) var(--ease-out)'
      }
    }, t.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
