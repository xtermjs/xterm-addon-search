/**
 * Copyright (c) 2017 The xterm.js authors. All rights reserved.
 * @license MIT
 */

import { Terminal, ILinkMatcherOptions, IDisposable } from 'xterm';

// TODO: This is temporary, link to xterm when the new version is published
export interface ITerminalAddon extends IDisposable {
  activate(terminal: Terminal): void;
}

export interface ISearchOptions {
  regex?: boolean;
  wholeWord?: boolean;
  caseSensitive?: boolean;
  /**
   * Use this when you want the selection to expand if it still matches as the
   * user types. Note that this only affects findNext.
   */
  incremental?: boolean;
}

export class SearchAddon implements ITerminalAddon {
  public activate(terminal: Terminal): void;
  public dispose(): void;
  public findNext(term: string, searchOptions?: ISearchOptions): boolean;
  public findPrevious(term: string, searchOptions?: ISearchOptions): boolean;
}
