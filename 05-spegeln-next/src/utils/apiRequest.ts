type HTTPMethod = 'GET' | 'POST' | 'PATCH' | 'DELETE' | 'PUT';

// Function overload for API requests that have no request body
function apiRequest<ReturnType>(
  method: HTTPMethod,
  url: string
): Promise<ReturnType>;

// Function overload for API requests that do have a request body
function apiRequest<ReturnType, DataType extends Record<string, unknown>>(
  method: HTTPMethod,
  url: string,
  data: DataType
): Promise<ReturnType>;

async function apiRequest<ReturnType, DataType>(
  method: HTTPMethod,
  url: string,
  data?: DataType
): Promise<ReturnType> {
  const headers = data
    ? {
        'Content-Type': 'application/json',
      }
    : undefined;

  const body = data ? JSON.stringify(data) : undefined;

  const response = await fetch(url, {
    method,
    headers,
    body,
  });

  const payload = await response.json();

  return payload as ReturnType;
}

export default apiRequest;
