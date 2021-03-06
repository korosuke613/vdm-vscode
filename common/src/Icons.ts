import * as path from 'path'
import { ExtensionContext, ThemeIcon, Uri } from 'vscode';

export class Icons {
    constructor(private context: ExtensionContext){}

    getIcon(icon: string): string | Uri | { light: string | Uri; dark: string | Uri } | ThemeIcon {
        return {
            light: this.context.asAbsolutePath(
                path.join("resources", "icons", icon)
            ),
            dark: this.context.asAbsolutePath(
                path.join("resources", "icons", icon)
            )
        };
    }
}
