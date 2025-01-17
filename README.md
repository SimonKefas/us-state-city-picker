# US City & State Picker

This script provides an **autocomplete** feature for U.S. city names (with a “ghost text” suggestion) and an accompanying **state selection** dropdown. It supports **multiple forms** on a single page.

---

## 1. Include the Script

Include the script in your HTML. For example:

```html
<script src="https://cdn.jsdelivr.net/gh/SimonKefas/us-state-city-picker@latest/script.js"></script>
```

> **Tip:** Place it **below** your form markup, or place it in the `<head>` and ensure your script runs after the DOM is ready.

---

## 2. Basic HTML Structure

For **each form** where you want the city + state picker:

1. Create a container with the class `.form-block`.
2. Inside it, have:
   - An `<input>` for the **city** (with class `.city-input`).
   - A “ghost field” `<div>` (with class `.ghost-field`) for showing the faint autocomplete suggestion.
   - A `<select>` for the **state** (with class `.state-select`).

**Example:**

```html
<div class="form-block" id="form1">
  <label>City:</label>
  <input type="text" class="city-input" />
  <div class="ghost-field"></div>

  <label>State:</label>
  <select class="state-select"></select>
</div>

<!-- Form 2 -->
<div class="form-block" id="form2">
  <label>City:</label>
  <input type="text" class="city-input" />
  <div class="ghost-field"></div>

  <label>State:</label>
  <select class="state-select"></select>
</div>
```

You can repeat this structure for as many forms as you like.

---

## 3. Basic CSS (Recommended)

For the **ghost text** to align nicely behind the `<input>`, you can use something like:

```css
.form-block {
  position: relative; /* allows positioning ghost text in the same container */
  margin-bottom: 1.5rem;
}

.city-input {
  /* Match width / padding, etc., so the ghost text aligns correctly */
  width: 200px;
  position: relative;
}

.ghost-field {
  position: absolute;
  pointer-events: none;
  color: rgba(0, 0, 0, 0.3); /* faint text color */
  top: 26px; /* adjust to match your input's positioning */
  left: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 200px; /* match input width */
}
```

Feel free to adjust these styles so that the **ghost text** sits perfectly behind your input text.

---

## 4. How It Works

Once the script runs, it:
1. **Scans** the page for all elements with the class `.form-block`.
2. Inside each `.form-block`, it looks for:
   - A city `<input>` (`.city-input`)
   - A ghost `<div>` (`.ghost-field`)
   - A state `<select>` (`.state-select`)
3. It **attaches** the logic that:
   - Autocompletes the city input using a large built-in **U.S. city dataset**.
   - Dynamically filters the **state** dropdown to show only relevant states for the typed city.
   - Supports tab-completion using the faint “ghost text” suggestion.

**Typing** in the city field will show you a faint suggestion behind your typed text. Pressing **Tab** auto-fills the rest of the city name. The **State** dropdown narrows down to relevant states for that city (or reverts to all states if no matches).

---

## 5. Customization

- If you want to **change** the classes or IDs used in your HTML, ensure you do the same modifications in the script or in any initialization logic.
- You can tweak the **ghost text** color, position, or styling in your CSS.
- You can remove or modify the logic for auto-selecting a state when there’s only one possible match.

---

## 6. Summary

1. **Add** the `<script>` tag from this repository or from a local copy.
2. **Create** one or more `.form-block` sections, each containing:
   - **`.city-input`** (city `<input>`)
   - **`.ghost-field`** (invisible overlay for suggestions)
   - **`.state-select`** (dropdown of states)
3. (Optional) Add some **styling** to position `.ghost-field` behind the text input.
4. That’s it—**no extra calls** needed. The script automatically finds all matching elements on the page.

For questions or more details, please refer to the code comments in **script.js** or [file an issue on the GitHub repository](https://github.com/SimonKefas/us-state-city-picker). Enjoy your new city+state autocomplete!