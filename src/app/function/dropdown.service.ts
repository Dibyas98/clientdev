import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DropdownService {
  private activeDropdown: string | null = null; // Track active dropdown

  setActiveDropdown(id: string): void {
    this.activeDropdown = id;
  }

  getActiveDropdown(): string | null {
    return this.activeDropdown;
  }

  clearActiveDropdown(): void {
    this.activeDropdown = null;
  }
}
