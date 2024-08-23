import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkeletonCodeService {
  public codeExamples = {
  codeUseTs: `
  import { SkeletonElement } from 'ngx-angular-ui';

  @Component({
    standalone: true,
    imports: [SkeletonElement],
  })
  `,
  codeUseHtml: `
  <div uiSkeleton class="w-[250px] h-[125px] rounded-xl"></div>
  `,
  code1: `
  import { SkeletonElement } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [SkeletonElement],
    template: \`
      <div class="flex items-center space-x-4">
        <div uiSkeleton class="w-12 h-12 rounded-full"></div>
        <div class="flex flex-col space-y-2">
          <div uiSkeleton class="w-[250px] h-4 rounded-md"></div>
          <div uiSkeleton class="w-[200px] h-4 rounded-md"></div>
        </div>
      </div>
    \`
  })
  `,
  code2: `
  import { SkeletonElement } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [SkeletonElement],
    template: \`
      <div class="flex flex-col space-y-3">
        <div uiSkeleton class="w-[250px] h-[125px] rounded-xl"></div>
        <div class="flex flex-col space-y-2">
          <div uiSkeleton class="w-[250px] h-4 rounded-md"></div>
          <div uiSkeleton class="w-[200px] h-4 rounded-md"></div>
        </div>
      </div>
    \`
  })
  `,
  };

  getExamples() {
    return this.codeExamples;
  }
}

