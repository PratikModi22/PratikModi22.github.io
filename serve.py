import http.server
import socketserver
import webbrowser
import os
import sys

PORT = 3000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class PortfolioHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        # Enable CORS and caching headers if needed
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-cache')
        super().end_headers()

    extensions_map = http.server.SimpleHTTPRequestHandler.extensions_map.copy()
    extensions_map.update({
        '.wasm': 'application/wasm',
        '.glb': 'model/gltf-binary',
        '.gltf': 'model/gltf+json',
        '.webp': 'image/webp',
        '.js': 'application/javascript',
        '.mjs': 'application/javascript',
        '.css': 'text/css',
        '.ico': 'image/x-icon',
        '.svg': 'image/svg+xml'
    })

def main():
    os.chdir(DIRECTORY)
    port = PORT
    for attempt in range(5):
        try:
            with socketserver.TCPServer(("", port), PortfolioHTTPRequestHandler) as httpd:
                url = f"http://localhost:{port}"
                print(f"==================================================")
                print(f"  Pratik Modi's 3D Portfolio Server Running!      ")
                print(f"  URL: {url}                                      ")
                print(f"  Root Directory: {DIRECTORY}                     ")
                print(f"  Press Ctrl+C to stop the server                 ")
                print(f"==================================================")
                sys.stdout.flush()
                try:
                    httpd.serve_forever()
                except KeyboardInterrupt:
                    print("\nServer stopped.")
                    break
        except OSError:
            port += 1

if __name__ == "__main__":
    main()
