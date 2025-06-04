# sveltekit-mcp

A basic example of using SvelteKit with an MCP, based on [this starter](https://github.com/axel-rock/sveltekit-mcp-starter).

## Developing

```bash
nvm i && nvm use
npm run dev
docker compose up
```

http://localhost:5173

## Debug MCP

```
NODE_TLS_REJECT_UNAUTHORIZED=0 NODE_OPTIONS="--insecure-http-parser" npx @modelcontextprotocol/inspector
```

http://127.0.0.1:6274/

### Urls

- SSE http://localhost:5173/mcp/sse
- Streamable http://localhost:5173/mcp/mcp
