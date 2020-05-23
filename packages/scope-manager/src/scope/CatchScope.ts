import { TSESTree } from '@typescript-eslint/typescript-estree';
import { Scope } from './Scope';
import { ScopeBase } from './ScopeBase';
import { ScopeType } from './ScopeType';
import { ScopeManager } from '../ScopeManager';

class CatchScope extends ScopeBase<
  ScopeType.catch,
  TSESTree.CatchClause,
  Scope
> {
  constructor(
    scopeManager: ScopeManager,
    upperScope: CatchScope['upper'],
    block: CatchScope['block'],
  ) {
    super(scopeManager, ScopeType.catch, upperScope, block, false);
  }
}

export { CatchScope };
