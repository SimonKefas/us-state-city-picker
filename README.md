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

1. **Clone** or **download** this repository.
2. Open `index.html` (or similarly named file) in your favorite web browser.
3. Start typing a city in the **“City”** input to see the **ghost** suggestion text appear.
4. Observe the **State** `<select>` dynamically updating to show relevant states containing the partial typed city.

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

## Folder Structure

```
your-project/
├─ index.html     <- Main HTML file with the solution
├─ README.md      <- This README
└─ (any CSS/JS files if separated)
```

- **index.html**: Contains the complete solution: 
  - The `<style>` block for positioning and coloring the ghost text.
  - The `<script>` that:
    - Holds the `stateCityList`.
    - Flattens city data into an array of `{ city, state }`.
    - Wires up event listeners (`input`, `keydown`) to handle typing and tab behavior.

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