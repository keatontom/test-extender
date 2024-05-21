import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    const bonjourCommand = 'test-extender.bonjour';

    context.subscriptions.push(vscode.commands.registerCommand(bonjourCommand, () => {
        vscode.window.showInformationMessage('Bonjour from test-extender!');
    }));

    let api = {
        bonjour() {
            return vscode.commands.executeCommand(bonjourCommand);
        }
    };

    return api;
    console.log("Hi");
}

export function deactivate() {}
