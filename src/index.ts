const appendSearchParams = (url: string | URL, searchParams?: Record<string, string>) => {
  const urlObject = url instanceof URL ? url : new URL(url);

  Object.entries(searchParams || {})
    .forEach(([key, value]) => urlObject.searchParams.append(key, value));

  return urlObject.toString();
};

export { appendSearchParams };
