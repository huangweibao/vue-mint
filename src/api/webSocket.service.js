import {Observable} from "rxjs";
let ws;
connect = (url) => {
  ws = new WebSocket(url);
return new Observable(
  observer => {
    ws.onmessage = (event) => observer.next(event.data);
    ws.onerror = (event) => observer.error(event);
    ws.onclose = (event) => observer.complete();
  }
)
}

send = (message) => {
  ws.send(message);
  return new Observable(
    observer => {
      ws.onmessage = (event) => observer.next(event.data);
      ws.onerror = (event) => observer.error(event);
      ws.onclose = (event) => observer.complete();
    }
  )
}
