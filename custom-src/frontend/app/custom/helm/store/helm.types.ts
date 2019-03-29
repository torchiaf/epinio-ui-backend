import { Injectable } from '@angular/core';

export interface MonocularRepository {
  name: string;
  url: string;
  created: string;
  syncInterval: number;
  lastSync: number;
  status: string;
}

export interface MonocularChart {
  id: string;
  name: string;
  attributes: {
    description: string;
    home: string;
    icon: string;
    keywords: string[];
    repo: {
      name: string;
      url: string;
    };
  };
  relationships: {
    latestChartVerson: {
      data: {
        version: string
      }
    }
  };
}

export interface HelmRelease {
  guid: string;
  name: string;
  namespace: string;
  version: string;
  status: string;
  lastDeployed: Date;
  info: {
    status: {
      notes: string;
    }
  };
  config: {
    raw: string;
  };
}

export interface HelmReleaseStatus {
  endpointGuid?: string;
  releaseTitle?: string;
  data: {
    'v1/Pod': {
      [key: string]: {
        age: string;
        name: string;
        ready: string;
        restarts: string;
        status: string;
      }
    }
    [dataKey: string]: any
  };
  fields: string[];
  pods: any;
}

export interface HelmReleasePod {
  endpointGuid?: string;
  releaseTitle?: string;
  name: string;
  ready: string;
  status: string;
  restarts: string;
  age: string;
}

export interface HelmVersion {
  endpointId: string;
  Version?: {
    git_commit: string;
    git_tree_state: string;
    sem_ver: string;
  };
}

export enum HelmStatus {
  Unknown = 0,
  Deployed = 1,
  Deleted = 2,
  Superseded = 3,
  Failed = 4,
  Deleting = 5,
  Pending_Install = 6,
  Pending_Upgrade = 7,
  Pending_Rollback = 8
}

@Injectable()
export class HelmReleaseGuid {
  guid: string;
}

