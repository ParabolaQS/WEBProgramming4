# Assignment 4: Dynamic Task Dashboard

A browser-based task dashboard built with vanilla JavaScript, HTML, and CSS..

## File organization

- `index.html` provides the page structure and loads the JavaScript module.
- `styles.css` styles the dashboard, task rows, buttons, and completed-task state.
- `taskManager.js` defines the immutable `Task` class and the `TaskManager` state operations.
- `api.js` simulates an asynchronous server request using a Promise and a 1500 ms `setTimeout`.
- `main.js` loads data, performs the required JSON stringify/parse round-trip, renders tasks, and handles Toggle and Delete events.

## How to run

Because the JavaScript files use ES modules, run the project through a local web server rather than opening `index.html` directly.

For example, from the `assignment4` directory, if Python 3 is installed:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your browser and click **Load Tasks**.

## Challenges and solutions

- **Asynchronous loading:** Used a Promise with `setTimeout` and `async/await` to simulate a delayed server response.
- **Immutable state updates:** Used array spread, `filter`, and `map` to replace the task array instead of mutating it. Toggling creates a new `Task` instance.
- **Read-only task IDs:** Defined `id` with `Object.defineProperty` as non-writable and non-configurable.
- **DOM updates and events:** Created elements with DOM methods and attached event listeners rather than using inline event attributes.
## Notes

- No external libraries or frameworks are used.
- The load operation reports failures in the status message and restores the Load Tasks button in a `finally` block.
# Web-programming-lab-4.
# Web-programming-lab-4.
# Web-programming-lab-4.
# Web-programming-lab-4.
# Web-programming-lab-4.
# Web-programming-lab-4.
# Web-programming-lab-4..
# Web-programming-lab-4..
# Web-programming-lab-4..
# WEBProgramming4
