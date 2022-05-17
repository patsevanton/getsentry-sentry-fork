import {MetricRule} from './metricRule';

export function Incident(params = {}) {
  return {
    id: '321',
    identifier: '123',
    organizationId: '3',
    dateClosed: '2016-04-19T19:44:05.963Z',
    dateStarted: '2016-04-05T19:44:05.963Z',
    dateDetected: '2016-04-05T19:44:05.963Z',
    dateCreated: '2016-04-05T19:44:05.963Z',
    title: 'Too many Chrome errors',
    status: 0,
    projects: [],
    isSubscribed: true,
    alertRule: MetricRule(params.alertRule),
    activities: [
      {
        id: '78',
        incidentIdentifier: '50729',
        user: null,
        type: 2,
        value: '2',
        previousValue: '20',
        comment: null,
        dateCreated: '2022-03-27T00:38:00Z',
      },
      {
        id: '33',
        incidentIdentifier: '50729',
        user: null,
        type: 2,
        value: '20',
        previousValue: '1',
        comment: null,
        dateCreated: '2022-03-26T13:03:00Z',
      },
      {
        id: '32',
        incidentIdentifier: '50729',
        user: null,
        type: 1,
        value: null,
        previousValue: null,
        comment: null,
        dateCreated: '2022-03-26T13:02:00Z',
      },
      {
        id: '31',
        incidentIdentifier: '50729',
        user: null,
        type: 4,
        value: null,
        previousValue: null,
        comment: null,
        dateCreated: '2022-03-26T12:00:00Z',
      },
    ],
    ...params,
  };
}
