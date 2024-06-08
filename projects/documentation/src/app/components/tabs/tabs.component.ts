import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [],
  templateUrl: './tabs.component.html',
  styles: ``
})
export class TabsComponent {
  @Input() tabs: string[] = [];
  @Output() activeTabChange = new EventEmitter<string>();

  private _activeTab!: string;

  ngOnChanges() {
    if(this.tabs.length > 0 && !this._activeTab) {
      this._activeTab = this.tabs[0];
    }
  }

  get activeTab(): string {
    return this._activeTab;
  }

  set activeTab(value: string) {
    this._activeTab = value;
    this.activeTabChange.emit(this._activeTab);
  }

  setActiveTab(tabName: string) {
    this.activeTab = tabName;
  }
}
