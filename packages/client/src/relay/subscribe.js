import { Observable } from 'relay-runtime';
import { SubscriptionClient } from 'subscriptions-transport-ws';

export const WS_GRAPHQL_ENDPOINT = 'ws://localhost:4000/ws';

const client = new SubscriptionClient(WS_GRAPHQL_ENDPOINT, {
  reconnect: true,
});

const subscribe = (request, variables) => {
  const subscribeObservable = client.request({
    query: request.text,
    operationName: request.name,
    variables,
  });
  // Important: Convert subscriptions-transport-ws observable type to Relay's
  return Observable.from(subscribeObservable);
};

export default subscribe;
