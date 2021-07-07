export interface HttpResponse<T> extends Response {
  parsedBody?: T;
}

export interface GenericProps {
  error?: string;
}

export default async function request<T>(
  request: RequestInfo,
  option: RequestInit
): Promise<HttpResponse<T>> {
  const response: HttpResponse<T & GenericProps> = await fetch(request, option);
  try {
    response.parsedBody = await response.json();
  } catch (ex) {}

  if (!response.ok) {
    throw new Error();
  }
  return response;
}
