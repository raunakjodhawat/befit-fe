
export default class SearchSocket {
    constructor(wsHost, url, path) {
        this.url = wsHost + url + path + "/search/ws";
        this.socket = new WebSocket(this.url);
        this.serverResponse = [{}];
        // Bind event handlers to the instance to maintain the correct context
        this.socket.onopen = this.onOpen.bind(this);
        this.socket.onclose = this.onClose.bind(this);
        this.socket.onmessage = this.onMessage.bind(this);
        this.socket.close = this.close.bind(this);
    }

        // Event handlers
        onOpen(event) {
            // Handle WebSocket connection open event
            console.log('WebSocket connection opened.');
        }
    
        onClose(event) {
            // Handle WebSocket connection close event
            console.log('WebSocket connection closed.');
        }
    
        onMessage(event) {
            // Handle WebSocket message event
            try {
                this.serverResponse = JSON.parse(event.data);
            } catch (e) {

            }
        }
    
        // Method to send messages through the WebSocket
        send(message) {
            this.socket.send(message);
        }
        close() {
            this.socket.close();
        }
}