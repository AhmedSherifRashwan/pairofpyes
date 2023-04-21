# pairofpyes README
This is a Visual Studio Code extension that helps Python developers handle errors more efficiently. When an error occurs in the Python code, this extension provides suggestions to fix the error based on the error message.

## Features

- Provides suggestions to fix common syntax and runtime errors in Python code.
- Uses the current line of the active editor as the error message, the name of the currently active file as the filename, and the line number of the current selection as the line number.
- Supports the following types of errors:
  - Invalid syntax
  - Name error
  - Indentation error
  - TypeError
  - KeyError
  - ValueError
  - IndexError
  - AttributeError
  - FileNotFound error
  - ModuleNotFound error

## Usage

To activate the error handler, run the `extension.showSuggestions` command (default shortcut key: Ctrl+Shift+P or Cmd+Shift+P on Mac) with the cursor on the line with the error.

## Installation

You can install this extension from the Visual Studio Code Marketplace.

## Credits
This extension was developed by Ahmed Rashwan (rsasec0x01).