import http.server
import socketserver
import os
import sys

os.chdir(os.path.dirname(os.path.abspath(__file__)))

class ReusableTCPServer(socketserver.TCPServer):
    allow_reuse_address = True

PORT = 4173

print(f"Starting Clear Lanka Travel server on http://127.0.0.1:{PORT}/")
sys.stdout.flush()

try:
    with ReusableTCPServer(('127.0.0.1', PORT), http.server.SimpleHTTPRequestHandler) as httpd:
        print(f"Clear Lanka Travel server running at http://127.0.0.1:{PORT}/")
        sys.stdout.flush()
        httpd.serve_forever()
except Exception as e:
    print(f"Failed to start on port {PORT}: {e}")
    sys.stdout.flush()
    # Try alternate port 8080
    ALT_PORT = 8080
    print(f"Attempting fallback to port {ALT_PORT}...")
    sys.stdout.flush()
    with ReusableTCPServer(('127.0.0.1', ALT_PORT), http.server.SimpleHTTPRequestHandler) as httpd:
        print(f"Clear Lanka Travel server running at http://127.0.0.1:{ALT_PORT}/")
        sys.stdout.flush()
        httpd.serve_forever()
