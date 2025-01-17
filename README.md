# City Autocomplete with Dynamic State Select

This project demonstrates a **ghost-autocomplete** feature for a City input field, combined with a **dynamic State** dropdown. 

**Key Features:**
1. **Ghost Autocomplete**: As the user types in a City, the **rest** of the text is displayed in a faint color within the same input box.
2. **Dynamic State Select**:
   - As soon as the user types in the City, the **State** dropdown is filtered to show **only** states that contain a matching city.
   - If **no** matching state is found, **all** states are displayed.
   - If exactly **one** possible matching state is found for a typed city, the code **auto-selects** it.

## Table of Contents

1. [Getting Started](#getting-started)
2. [How It Works](#how-it-works)
3. [Folder Structure](#folder-structure)
4. [Customization Tips](#customization-tips)
5. [License](#license)

---

## Getting Started

1. Add the script to your before body tag. You could either use a specific version of the solution or use @latest (instead of 1.1.1)

```
<script src="https://cdn.jsdelivr.net/gh/SimonKefas/us-state-city-picker@v1.1.1/script.js"></script>
```

2. Add base elements:
```
<div style="position: relative;">
   <input id="ghostInput" class="ghost-input-styles form-input-styles"/>
   <div id="city-input" class="form-input-styles" autocomplete="off"></div>
</div>
<input id="state-select" class="absolute-full-styles form-input-styles"/>
```
The ghost-input-styles should have position absolute with top, left, right and bottom set to 0. Also the same text styles as the input.

3. Add required ID's to your elements: (as shown over ☝)
   - a `city-input` to the input where the user is going to type a city.
   - a `state-select` to the select input, from where the user is going to select a state, after city is typed
   - a `ghostInput` to the element which is going to stand on top of the city input (for the autocomplete illusion)

---

## How It Works

### 1. Ghost Autocomplete

- In the HTML, there is a **“wrapper” div** (`.autocomplete-wrapper`) containing two elements:
  1. A `<div class="ghost-input">` for **faint** suggestion text.
  2. The **real** `<input>` typed by the user (on top).

- Every keystroke triggers logic to:
  1. **Find** a matching city that starts with the typed text.
  2. **Split** the match into two parts:
     - Already typed portion (rendered as `color: transparent` in `.ghost-input`)
     - Remaining suggested portion (rendered as faint text, e.g. `color: #ccc`).
  3. This visually appears as “ghosted” text in the same input box.

### 2. Dynamic State Select

- The **State** dropdown is a standard `<select>` element.
- On every keystroke:
  1. All states whose **cities** begin with the typed substring are collected into a new array.
  2. The `<select>` is **repopulated** with only those states (sorted alphabetically, if desired).
  3. If **none** are found, it **reverts** to showing all states.

- When the user **hits Tab** to autocomplete:
  1. The remainder of the city is appended to the real input.
  2. The ghost text is cleared.
  3. We further refine the `<select>` to highlight or select the specific state(s) that match the newly completed city.

---

## Customization Tips

1. **Styling**:
   - Adjust the `.ghost-input` and `.real-input` CSS to fit your design.  
   - Ensure you match font-size, font-family, and padding so both the ghost text and the real text line up neatly.

2. **Autocomplete Logic**:
   - The code currently **autocompletes** on **Tab**.  
   - You can change this to **Enter**, **Right Arrow**, or some other key by editing the `keydown` event listener.

3. **Filtering States**:
   - Currently, if no city matches, the dropdown reverts to **all** states.  
   - To change this behavior (e.g. to hide the dropdown or disable it if no match), modify the logic in the `input` event.

4. **Data Source**:
   - The `stateCityList` object can contain **all** US states and their cities (or any custom set of data).  
   - Simply add or remove states/cities as needed.

---

## License

This code snippet is provided **as is** for demonstration purposes. You may use it, modify it, and distribute it freely in your own projects. If you share your modifications, consider giving credit to the original authors or repository. 