import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('extension.showSuggestions', () => {
		const editor = vscode.window.activeTextEditor;
		if (!editor) {
			vscode.window.showErrorMessage('No active text editor.');
			return;
		}
		const document = editor.document;
		const selection = editor.selection;
		const line = selection.active.line;
		const message = document.lineAt(line).text.trim(); // Use the current line of the active editor as the error message
		const file = document.fileName; // Use the name of the currently active file as the filename
		const lineNumber = (selection.active.line + 1).toString(); // Use the line number of the current selection
		const suggestions: string[] = [];

    if (message.startsWith('invalid syntax')) {
      suggestions.push(`Fix syntax error in ${file} at line ${lineNumber}`);
    } else if (message.startsWith("name '")) {
      const variableName = message.substring(6, message.length - 1);
      suggestions.push(`Define variable '${variableName}' before use in ${file} at line ${lineNumber}`);
    } else if (message.startsWith('expected an indented block')) {
      suggestions.push(`Indent code correctly in ${file} at line ${lineNumber}`);
    } else if (message.startsWith("'int' object is not iterable")) {
      suggestions.push(`Iterate over a list or string in ${file} at line ${lineNumber}`);
    } else if (message.startsWith("key '")) {
      const keyName = message.substring(5, message.length - 1);
      suggestions.push(`Check if key '${keyName}' exists before accessing it in ${file} at line ${lineNumber}`);
    } else if (message.startsWith("invalid literal for int()")) {
      const value = message.substring(message.indexOf('\'') + 1, message.lastIndexOf('\''));
      suggestions.push(`Pass a valid integer to int() function instead of '${value}' in ${file} at line ${lineNumber}`);
    } else if (message.startsWith("list index out of range")) {
      suggestions.push(`Check list bounds before accessing it in ${file} at line ${lineNumber}`);
    } else if (message.startsWith("'str' object has no attribute 'append'")) {
      suggestions.push(`Use a method that exists for strings in ${file} at line ${lineNumber}`);
    } else if (message.startsWith("[Errno 2] No such file or directory")) {
      const fileName = message.substring(message.indexOf('\'') + 1, message.lastIndexOf('\''));
      suggestions.push(`Check if file '${fileName}' exists in the correct directory in ${file} at line ${lineNumber}`);
    } else if (message.startsWith("No module named '")) {
      const moduleName = message.substring(16, message.length - 1);
      suggestions.push(`Install module '${moduleName}' in your Python environment in ${file} at line ${lineNumber}`);
    }
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
