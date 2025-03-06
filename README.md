

# Must have

* `sudo apt install build-essential`
* [https://github.com/nik-kita/MyOS](https://github.com/nik-kita/MyOS)

## VsCode
```json
[
  {
    "key": "ctrl+shift+alt+b",
    "command": "workbench.action.debug.start"
  },
  {
    "key": "ctrl+shift+alt+b",
    "command": "workbench.action.debug.stop",
    "when": "inDebugMode"
  },
  {
    "key": "alt+right",
    "command": "editor.debug.action.goToNextBreakpoint",
    "when": "inDebugMode"
  },
  {
    "key": "alt+down",
    "command": "commandId",
    "when": "inDebugMode"
  },
  {
    "key": "ctrl+shift+[",
    "command": "editor.foldAll"
  },
  {
    "key": "ctrl+shift+b ctrl+j",
    "command": "workbench.action.moveSecondarySideBarToPanel",
    "when": "editorTextFocus"
  },
  {
    "key": "ctrl+shift+b ctrl+b",
    "command": "workbench.action.movePanelToSecondarySideBar",
    "when": "editorTextFocus"
  },
  {
    "key": "ctrl+shift+i",
    "command": "editor.action.formatDocument",
    "when": "editorTextFocus"
  },
  {
    "key": "ctrl+shift+alt+i",
    "command": "editor.action.fixAll",
    "when": "editorTextFocus"
  },
  {
    "key": "ctrl+alt+space",
    "command": "workbench.action.debug.continue",
    "when": "editorTextFocus"
  },
  {
    "key": "ctrl+alt+=",
    "command": "workbench.action.splitEditorRight",
    "when": "!panelVisible"
  },
  {
    "key": "alt+e",
    "command": "",
    "when": "editorTextFocus"
  },
  {
    "key": "ctrl+alt+-",
    "command": "workbench.action.splitEditorDown",
    "when": "!panelVisible"
  },
  /* SELECTION: expand/shrink */
  {
    "key": "alt+shift+i",
    "command": "editor.action.smartSelect.expand",
    "when": "editorTextFocus"
  },
  {
    "key": "alt+shift+u",
    "command": "cursorUndo",
    "when": "editorTextFocus"
  },
  /**
   *
   * PANEL (problems, output, terminal, debug console)
   *
   */
  // PANEL: switch tabs <=||=>
  {
    "key": "alt+l",
    "command": "workbench.action.nextPanelView",
    "when": "panelVisible"
  },
  {
    "key": "alt+h",
    "command": "workbench.action.previousPanelView",
    "when": "panelVisible"
  },
  /* LINES: up/down */
  {
    "key": "ctrl+shift+alt+k",
    "command": "editor.action.moveLinesUpAction",
    "when": "editorTextFocus"
  },
  {
    "key": "ctrl+shift+alt+j",
    "command": "editor.action.moveLinesDownAction",
    "when": "editorTextFocus"
  },
  /* SWITCH BETWEEN GROUPS */
  {
    "key": "ctrl+alt+h",
    "command": "workbench.action.navigateLeft"
  },
  {
    "key": "ctrl+alt+l",
    "command": "workbench.action.navigateRight"
  },
  {
    "key": "ctrl+alt+k",
    "command": "workbench.action.navigateUp"
  },
  {
    "key": "ctrl+alt+j",
    "command": "workbench.action.navigateDown"
  },
  /* SWITCH TABS IN GROUP */
  {
    "command": "workbench.action.nextEditorInGroup",
    "key": "alt+l",
    "when": "editorTextFocus && !panelVisible"
  },
  {
    "command": "workbench.action.previousEditorInGroup",
    "key": "alt+h",
    "when": "editorTextFocus && !panelVisible"
  },
  // EDITOR-TABS moving left/right
  {
    "key": "alt+shift+h",
    "command": "workbench.action.moveEditorLeftInGroup",
    "when": "editorTextFocus && !panelVisible"
  },
  {
    "key": "alt+shift+l",
    "command": "workbench.action.moveEditorRightInGroup",
    "when": "editorTextFocus && !panelVisible"
  },
  /* CURSOR HOME/END */
  {
    "key": "ctrl+shift+alt+h",
    "command": "cursorHome",
    "when": "editorTextFocus"
  },
  {
    "key": "ctrl+shift+alt+l",
    "command": "cursorEnd",
    "when": "editorTextFocus"
  },
  /** DISABLE: alt+number switch tabs commands */
  {
    "key": "alt+h",
    "command": "-testing.toggleTestingPeekHistory"
  },
  {
    "key": "alt+h",
    "command": "-editor.action.accessibilityHelpOpenHelpLink"
  },
  {
    "key": "alt+1",
    "command": "",
    "when": "editorTextFocus"
  },
  {
    "key": "alt+2",
    "command": "",
    "when": "editorTextFocus"
  },
  {
    "key": "alt+3",
    "command": "",
    "when": "editorTextFocus"
  },
  {
    "key": "alt+4",
    "command": "",
    "when": "editorTextFocus"
  },
  {
    "key": "alt+5",
    "command": "",
    "when": "editorTextFocus"
  },
  {
    "key": "alt+6",
    "command": "",
    "when": "editorTextFocus"
  },
  {
    "key": "alt+7",
    "command": "",
    "when": "editorTextFocus"
  },
  {
    "key": "alt+8",
    "command": "",
    "when": "editorTextFocus"
  },
  {
    "key": "alt+9",
    "command": "",
    "when": "editorTextFocus"
  },
  {
    "key": "alt+e",
    "command": "editor.action.marker.nextInFiles",
    "when": "editorFocus"
  },
  {
    "key": "f8",
    "command": "-editor.action.marker.nextInFiles",
    "when": "editorFocus"
  },
  {
    "key": "ctrl+shift+b",
    "command": "vs-browser.start"
  }
]
```
  
## Chrome
* [Shortkeys (Custom Keyboard Shortcuts) extension](https://chromewebstore.google.com/detail/shortkeys-custom-keyboard/logpjaacgmcbpdkdchjiaagddngobkck?hl=en-US&gl=US)
  ```json
   [{"key":"alt+l","action":"nexttab","id":"9f9d6386-04d2-4727-b444-be4b4fb33077","sites":"","sitesArray":[""]},{"key":"alt+h","action":"prevtab","id":"6b48a6db-ad56-4093-896e-0d5aedd02f3c","sites":"","sitesArray":[""]},{"key":"alt+j","action":"togglepin","id":"640eddff-5329-4064-b6c8-f5732338dccc","sites":"","sitesArray":[""]},{"key":"alt+k","action":"clonetab","id":"d0dc0779-3332-4301-bfdb-5903394afa81","sites":"","sitesArray":[""]},{"key":"alt+shift+l","action":"movetabright","id":"4c842293-12ad-4522-8347-20aeb9a0b4e1","sites":"","sitesArray":[""]},{"key":"alt+shift+h","action":"movetableft","id":"c135ad72-160d-4e3d-929c-aa35067c4df1","sites":"","sitesArray":[""]},{"key":"alt+shift+j","action":"movetabtonewwindow","id":"5276f25b-379d-4346-9715-b280464aa6fc","sites":"","sitesArray":[""]}]
  ```
