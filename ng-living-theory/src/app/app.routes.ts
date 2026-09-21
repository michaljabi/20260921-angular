import { Routes } from '@angular/router';
import { HelloComponent } from './hello.component';
import { SampleComponent } from './a-basics/sample/sample.component';
import { ADataBindingConceptComponent } from './a-basics/a-data-binding-concept.component';
import { AStyleIsHermeticComponent } from './a-basics/a-style-is-hermetic.component';
import { BasicDirectivesComponent } from './a-basics/basic-directives.component';
import { ForOfLoopComponent } from './a-basics/for-of-loop.component';
import { MethodsComponent } from './a-basics/methods.component';
import { ParentToChildComponent } from './b-component-relations/parent-to-child.component';
import { CommunicateWithLongDistanceComponent } from './b-dependency-injection/communicate-with-long-distance.component';
import { BuildInPipesComponent } from './c-pipes/build-in-pipes.component';
import { TemplateLocalReferencesComponent } from './c-template-refs/template-local-references.component';
import { TemplateLocalRefsWithLogicComponent } from './c-template-refs/template-local-refs-with-logic.component';
import { TemplateDrivenFormComponent } from './d-forms/template-driven-form.component';
import { ReactiveDrivenFormComponent } from './d-forms/reactive-driven-form.component';
import { LifecyclePresentationComponent } from './e-lifecycle/lifecycle-presentation.component';
import { TestMyBehaviourComponent } from './f-testing/test-my-behaviour.component';
import { DataFromServerSideComponent } from './b-dependency-injection/data-from-server-side/data-from-server-side.component';
import { AllInOneComponent } from './a-all-in-one/all-in-one.component';
import { SignalDrivenFormComponent } from './d-forms/signal-driven-form.component';

export const routes: Routes = [
  { path: '', component: HelloComponent },
  // 0:
  { path: 'all-in-one', component: AllInOneComponent },
  // A:
  { path: 'sample', component: SampleComponent },
  { path: 'data-binding', component: ADataBindingConceptComponent },
  { path: 'hermetic-style', component: AStyleIsHermeticComponent },
  { path: 'basic-directives', component: BasicDirectivesComponent },
  { path: 'for-of-loop', component: ForOfLoopComponent },
  { path: 'methods', component: MethodsComponent },
  // B:
  { path: 'parent-child', component: ParentToChildComponent },
  { path: 'long-distance', component: CommunicateWithLongDistanceComponent },
  { path: 'server-side', component: DataFromServerSideComponent },
  // C:
  { path: 'pipes', component: BuildInPipesComponent },
  { path: 'template-ref', component: TemplateLocalReferencesComponent },
  {
    path: 'template-ref-in-logic',
    component: TemplateLocalRefsWithLogicComponent,
  },
  // D:
  { path: 'forms', component: TemplateDrivenFormComponent },
  { path: 'reactive-forms', component: ReactiveDrivenFormComponent },
  { path: 'signal-forms', component: SignalDrivenFormComponent },
  // E:
  { path: 'lifecycle', component: LifecyclePresentationComponent },
  // F:
  { path: 'to-test', component: TestMyBehaviourComponent },
  // G:
  {
    path: 'signals-basics',
    loadComponent: () =>
      import('./g-signals/components/signals-basics').then((m) => m.SignalsBasics),
  },
  {
    path: 'signal-computed',
    loadComponent: () =>
      import('./g-signals/components/signal-computed').then((m) => m.SignalComputed),
  },
  {
    path: 'signal-effect',
    loadComponent: () => import('./g-signals/components/signal-effect').then((m) => m.SignalEffect),
  },
  {
    path: 'signal-store',
    loadComponent: () =>
      import('./g-signals/components/signal-communication-for-long-distance').then(
        (m) => m.SignalCommunicationForLongDistance,
      ),
  },
];
