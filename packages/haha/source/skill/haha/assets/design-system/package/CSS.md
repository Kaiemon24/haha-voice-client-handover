> Current candidate depth override: [SHADOW47.md](SHADOW47.md) and [shadow47.model.json](shadow47.model.json) supersede all earlier flat-carrier, zero pressed/disabled, print-removal and filled-data-shadow prescriptions in this retained source document. Preserve original facts and data geometry; only the responsible outer carrier receives depth.

# HAHA — Nguồn kiểu trình bày

| Need | Path | Rule |
|---|---|---|
| Bóng đổ và lớp hiển thị | [SHADOW.md](SHADOW.md) | Chọn vai trò, nền nhận bóng và trạng thái. |
| Quy tắc chính xác | [semantic241.json](semantic241.json) | Chỉ mô hình0.10-trial hiện tại; không kế thừa lời phê duyệt KAI. |
| Mẫu và chức năng | [REUSE.md](REUSE.md) | Đọc đúng mã, phụ thuộc và biến thể. |
| Kiểm hình và thao tác | [HTML](design-system.html) | Kiểm sáng/tối, rộng/hẹp và trạng thái thật. |

Be Vietnam Pro; đen–trắng/trung tính; khối đọc phẳng, nút hành động bóng2px và hộp nổi4px theo SHADOW.md. Các quy tắc chức năng dưới đây là mô hình hiện tại. Bản thử để phản hồi, productionAllowed=false.

## fonts

```json
{
  "display": "Be Vietnam Pro",
  "reading": "Be Vietnam Pro",
  "technical": "Be Vietnam Pro",
  "depthPolicy": {
    "schemaVersion": "brand-depth/v1",
    "brand": "HAHA",
    "version": "0.12-trial",
    "status": "proposed-implementation",
    "style": "restrained-monochrome-hard-offset",
    "reason": "Nét gọn, tương phản đen–trắng; chỉ nổi khi thể hiện thao tác hoặc lớp phủ.",
    "receivingSurfaces": {
      "light": {
        "ink": "#000000",
        "background": "#FFFFFF"
      },
      "dark": {
        "ink": "#FFFFFF",
        "background": "#080808"
      }
    },
    "levels": {
      "flat": {
        "x": 0,
        "y": 0,
        "blur": 0,
        "spread": 0,
        "opacity": 0
      },
      "control": {
        "x": 2,
        "y": 2,
        "blur": 0,
        "spread": 0,
        "opacity": 1
      },
      "hover": {
        "x": 3,
        "y": 3,
        "blur": 0,
        "spread": 0,
        "opacity": 1
      },
      "floating": {
        "x": 4,
        "y": 4,
        "blur": 0,
        "spread": 0,
        "opacity": 1
      }
    },
    "roles": [
      {
        "role": "reading/data/identity/media/static-selected",
        "level": "flat",
        "components": "card,rule,demo,label,chart,logo,image,slide,page,tab,nav,count,input"
      },
      {
        "role": "action",
        "level": "control",
        "components": "button,.button except tab and nav",
        "states": {
          "default": "control",
          "hover": "hover",
          "pressed": "flat",
          "focus": "control + independent2px outline",
          "disabled": "flat",
          "loading": "control"
        }
      },
      {
        "role": "floating",
        "level": "floating",
        "components": "dialog",
        "states": {
          "open": "floating",
          "closed": "not-rendered"
        }
      }
    ],
    "exceptions": [
      "Nền nhận bóng thuộc vùng đang đặt, không chỉ theo theme toàn trang.",
      "Hai phần liền nhau: một silhouette ngoài, đường nối trong vuông, một bóng nếu vai trò được nổi.",
      "Không đặt bóng trên dấu dữ liệu, trục, chữ, logo và ảnh.",
      "Print/forced-colors: bỏ bóng, giữ viền và vòng focus."
    ],
    "clearancePx": 16,
    "focus": {
      "width": 2,
      "offset": 4
    },
    "formats": {
      "Website/App": "action2/floating4, flat reading",
      "Slide/PDF": "flat content and data; explicitly layered callout only uses one neutral4px outer silhouette; verify exported pixels before release",
      "Design/Edit": "no shadow added to logo/portrait/photography; a purposeful graphic overlay may use one4px neutral silhouette; preserve captions/safe zones"
    }
  }
}
```

## colors

```json
{
  "paper": "#FFFFFF",
  "panel": "#FFFFFF",
  "ink": "#000000",
  "support": "#000000",
  "fire": "#595959",
  "muted": "#E8E8E8",
  "dark": "#080808",
  "darkPanel": "#171717",
  "darkInk": "#FFFFFF",
  "darkSupport": "#BDBDBD",
  "depthPolicy": {
    "schemaVersion": "brand-depth/v1",
    "brand": "HAHA",
    "version": "0.12-trial",
    "status": "proposed-implementation",
    "style": "restrained-monochrome-hard-offset",
    "reason": "Nét gọn, tương phản đen–trắng; chỉ nổi khi thể hiện thao tác hoặc lớp phủ.",
    "receivingSurfaces": {
      "light": {
        "ink": "#000000",
        "background": "#FFFFFF"
      },
      "dark": {
        "ink": "#FFFFFF",
        "background": "#080808"
      }
    },
    "levels": {
      "flat": {
        "x": 0,
        "y": 0,
        "blur": 0,
        "spread": 0,
        "opacity": 0
      },
      "control": {
        "x": 2,
        "y": 2,
        "blur": 0,
        "spread": 0,
        "opacity": 1
      },
      "hover": {
        "x": 3,
        "y": 3,
        "blur": 0,
        "spread": 0,
        "opacity": 1
      },
      "floating": {
        "x": 4,
        "y": 4,
        "blur": 0,
        "spread": 0,
        "opacity": 1
      }
    },
    "roles": [
      {
        "role": "reading/data/identity/media/static-selected",
        "level": "flat",
        "components": "card,rule,demo,label,chart,logo,image,slide,page,tab,nav,count,input"
      },
      {
        "role": "action",
        "level": "control",
        "components": "button,.button except tab and nav",
        "states": {
          "default": "control",
          "hover": "hover",
          "pressed": "flat",
          "focus": "control + independent2px outline",
          "disabled": "flat",
          "loading": "control"
        }
      },
      {
        "role": "floating",
        "level": "floating",
        "components": "dialog",
        "states": {
          "open": "floating",
          "closed": "not-rendered"
        }
      }
    ],
    "exceptions": [
      "Nền nhận bóng thuộc vùng đang đặt, không chỉ theo theme toàn trang.",
      "Hai phần liền nhau: một silhouette ngoài, đường nối trong vuông, một bóng nếu vai trò được nổi.",
      "Không đặt bóng trên dấu dữ liệu, trục, chữ, logo và ảnh.",
      "Print/forced-colors: bỏ bóng, giữ viền và vòng focus."
    ],
    "clearancePx": 16,
    "focus": {
      "width": 2,
      "offset": 4
    },
    "formats": {
      "Website/App": "action2/floating4, flat reading",
      "Slide/PDF": "flat content and data; explicitly layered callout only uses one neutral4px outer silhouette; verify exported pixels before release",
      "Design/Edit": "no shadow added to logo/portrait/photography; a purposeful graphic overlay may use one4px neutral silhouette; preserve captions/safe zones"
    }
  }
}
```

## shapes

```json
{
  "radius": 4,
  "surfaceShadow": 0,
  "controlShadow": 0,
  "dataRadius": 2,
  "dataShadow": 0,
  "scope": "Full local HAHA adaptation:194library functions,27slides,7PDF templates/native draft PDF,2websites,2apps; logo/design/edit extensions separate trial. No active/shared-default/brand admission.",
  "depthPolicy": {
    "schemaVersion": "brand-depth/v1",
    "brand": "HAHA",
    "version": "0.12-trial",
    "status": "proposed-implementation",
    "style": "restrained-monochrome-hard-offset",
    "reason": "Nét gọn, tương phản đen–trắng; chỉ nổi khi thể hiện thao tác hoặc lớp phủ.",
    "receivingSurfaces": {
      "light": {
        "ink": "#000000",
        "background": "#FFFFFF"
      },
      "dark": {
        "ink": "#FFFFFF",
        "background": "#080808"
      }
    },
    "levels": {
      "flat": {
        "x": 0,
        "y": 0,
        "blur": 0,
        "spread": 0,
        "opacity": 0
      },
      "control": {
        "x": 2,
        "y": 2,
        "blur": 0,
        "spread": 0,
        "opacity": 1
      },
      "hover": {
        "x": 3,
        "y": 3,
        "blur": 0,
        "spread": 0,
        "opacity": 1
      },
      "floating": {
        "x": 4,
        "y": 4,
        "blur": 0,
        "spread": 0,
        "opacity": 1
      }
    },
    "roles": [
      {
        "role": "reading/data/identity/media/static-selected",
        "level": "flat",
        "components": "card,rule,demo,label,chart,logo,image,slide,page,tab,nav,count,input"
      },
      {
        "role": "action",
        "level": "control",
        "components": "button,.button except tab and nav",
        "states": {
          "default": "control",
          "hover": "hover",
          "pressed": "flat",
          "focus": "control + independent2px outline",
          "disabled": "flat",
          "loading": "control"
        }
      },
      {
        "role": "floating",
        "level": "floating",
        "components": "dialog",
        "states": {
          "open": "floating",
          "closed": "not-rendered"
        }
      }
    ],
    "exceptions": [
      "Nền nhận bóng thuộc vùng đang đặt, không chỉ theo theme toàn trang.",
      "Hai phần liền nhau: một silhouette ngoài, đường nối trong vuông, một bóng nếu vai trò được nổi.",
      "Không đặt bóng trên dấu dữ liệu, trục, chữ, logo và ảnh.",
      "Print/forced-colors: bỏ bóng, giữ viền và vòng focus."
    ],
    "clearancePx": 16,
    "focus": {
      "width": 2,
      "offset": 4
    },
    "formats": {
      "Website/App": "action2/floating4, flat reading",
      "Slide/PDF": "flat content and data; explicitly layered callout only uses one neutral4px outer silhouette; verify exported pixels before release",
      "Design/Edit": "no shadow added to logo/portrait/photography; a purposeful graphic overlay may use one4px neutral silhouette; preserve captions/safe zones"
    }
  }
}
```

## spacing

```json
{
  "groupGap": 24,
  "cardShadow": 0,
  "minimumPaintedClearance": 16,
  "wideInset": 32,
  "narrowInset": 16,
  "cardInset": 24,
  "guideSectionGap": 32,
  "shapeCaptionGap": 24,
  "depthPolicy": {
    "schemaVersion": "brand-depth/v1",
    "brand": "HAHA",
    "version": "0.12-trial",
    "status": "proposed-implementation",
    "style": "restrained-monochrome-hard-offset",
    "reason": "Nét gọn, tương phản đen–trắng; chỉ nổi khi thể hiện thao tác hoặc lớp phủ.",
    "receivingSurfaces": {
      "light": {
        "ink": "#000000",
        "background": "#FFFFFF"
      },
      "dark": {
        "ink": "#FFFFFF",
        "background": "#080808"
      }
    },
    "levels": {
      "flat": {
        "x": 0,
        "y": 0,
        "blur": 0,
        "spread": 0,
        "opacity": 0
      },
      "control": {
        "x": 2,
        "y": 2,
        "blur": 0,
        "spread": 0,
        "opacity": 1
      },
      "hover": {
        "x": 3,
        "y": 3,
        "blur": 0,
        "spread": 0,
        "opacity": 1
      },
      "floating": {
        "x": 4,
        "y": 4,
        "blur": 0,
        "spread": 0,
        "opacity": 1
      }
    },
    "roles": [
      {
        "role": "reading/data/identity/media/static-selected",
        "level": "flat",
        "components": "card,rule,demo,label,chart,logo,image,slide,page,tab,nav,count,input"
      },
      {
        "role": "action",
        "level": "control",
        "components": "button,.button except tab and nav",
        "states": {
          "default": "control",
          "hover": "hover",
          "pressed": "flat",
          "focus": "control + independent2px outline",
          "disabled": "flat",
          "loading": "control"
        }
      },
      {
        "role": "floating",
        "level": "floating",
        "components": "dialog",
        "states": {
          "open": "floating",
          "closed": "not-rendered"
        }
      }
    ],
    "exceptions": [
      "Nền nhận bóng thuộc vùng đang đặt, không chỉ theo theme toàn trang.",
      "Hai phần liền nhau: một silhouette ngoài, đường nối trong vuông, một bóng nếu vai trò được nổi.",
      "Không đặt bóng trên dấu dữ liệu, trục, chữ, logo và ảnh.",
      "Print/forced-colors: bỏ bóng, giữ viền và vòng focus."
    ],
    "clearancePx": 16,
    "focus": {
      "width": 2,
      "offset": 4
    },
    "formats": {
      "Website/App": "action2/floating4, flat reading",
      "Slide/PDF": "flat content and data; explicitly layered callout only uses one neutral4px outer silhouette; verify exported pixels before release",
      "Design/Edit": "no shadow added to logo/portrait/photography; a purposeful graphic overlay may use one4px neutral silhouette; preserve captions/safe zones"
    }
  }
}
```


## Bóng đổ theo chức năng

Đọc [SHADOW.md](SHADOW.md) trước khi dựng. Khối đọc và dữ liệu phẳng; nút hành động 2px, hộp nổi 4px. Màu bóng theo nền nhận bóng, kiểm lại ở trạng thái và kích thước đầu ra thật.


## Effective local depth316

The earlier CSS block is the base layer; current depth is semantic241.json.depthPolicy and SHADOW.md. The last loaded shadow310.css overrides depth and receiving-surface colors. Verify computed styles in the actual output; do not copy a base shadow token as the current policy.
