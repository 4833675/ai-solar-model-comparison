const worker = {
  async fetch(request: Request): Promise<Response> {
    if (request.method === "GET" || request.method === "HEAD") {
      return new Response("Not Found", { status: 404 });
    }

    return new Response("Method Not Allowed", {
      status: 405,
      headers: { Allow: "GET, HEAD" },
    });
  },
};

export default worker;
