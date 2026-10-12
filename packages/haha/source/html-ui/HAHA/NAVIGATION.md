# HAHA — Sidebar navigation

| Need | Path | Rule |
|---|---|---|
| Main sections | [Hierarchy](#hierarchy) | Card and one shared outer shadow. |
| Brand values | [Tokens](#tokens) | Use sidebar-navigation.json; keep receiving-surface colors. |
| Validate | [Checks](#checks) | Check rendered navigation, not CSS alone. |

## Hierarchy
Main sections are bordered cards with bold labels. Nested sections stay inside the parent, use a bullet and20px additional indentation. Child links stay flat; one outer shadow per parent. Preserve section counts, anchors, expansion and current location.

## Tokens
Source: sidebar-navigation.json; renderer: sidebar297.css. Main card radius0px, hard shadow2px x/y, blur/spread0; children0px shadow. Light receiving surface: black outline/shadow; dark: white outline/shadow. This is an explicit sidebar-container role exception, not a shadow on icons, images, logos or labels. Use local surface themes rather than guessing from global mode.

## Checks
Check Overview, Library and Applications, long labels, narrow/wide, light/dark, keyboard focus, Enter expand/collapse, current section and independent scrolling. Leave a gutter for the full shadow/focus silhouette. Print/forced colors remove shadow but retain separation. Asset counts, rights and other design rules remain unchanged.
