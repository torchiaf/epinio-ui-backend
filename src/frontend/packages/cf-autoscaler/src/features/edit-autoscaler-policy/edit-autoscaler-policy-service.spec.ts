import { inject, TestBed } from '@angular/core/testing';

import { ApplicationsModule } from '../../../../cloud-foundry/src/features/applications/applications.module';
import { EntityServiceFactory } from '../../../../store/src/entity-service-factory.service';
import { createEmptyStoreModule } from '@stratos/store/testing';
import { EditAutoscalerPolicyService } from './edit-autoscaler-policy-service';

describe('EditAutoscalerPolicyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        EditAutoscalerPolicyService,
        EntityServiceFactory,
      ],
      imports: [
        ApplicationsModule,
        createEmptyStoreModule(),
      ]
    });
  });

  it('should be created', inject([EditAutoscalerPolicyService], (service: EditAutoscalerPolicyService) => {
    expect(service).toBeTruthy();
  }));

  afterAll(() => { });
});
