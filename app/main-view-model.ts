import { Observable, Utils } from '@nativescript/core';

export class HelloWorldModel extends Observable {
    private _showCopyMessage: boolean = false;
    private _copyMessage: string = "Chave PIX copiada com sucesso!";
    private pixKey: string = "pes4850@gmail.com";

    constructor() {
        super();
    }

    get showCopyMessage(): boolean {
        return this._showCopyMessage;
    }

    get copyMessage(): string {
        return this._copyMessage;
    }

    onCopyPix() {
        Utils.copyToClipboard(this.pixKey);
        this._showCopyMessage = true;
        this.notifyPropertyChange('showCopyMessage', true);

        // Hide the message after 2 seconds
        setTimeout(() => {
            this._showCopyMessage = false;
            this.notifyPropertyChange('showCopyMessage', false);
        }, 2000);
    }
}