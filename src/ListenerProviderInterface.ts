export interface ListenerProviderInterface {
  getListenersForEvent(event: object): Iterable<any>;
}
