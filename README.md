# append-search-params

A really lightweight wrapper to append searchParams to a URL by passing an object. 
Does not use any external packages, instead utilizes the modern URL object.

## Usage

```ts
import { appendSearchParams } from "append-search-params";

appendSearchParams("https://www.dannyvanholten.com", { query: "param "});
appendSearchParams(new Url("https://www.dannyvanholten.com?previous=param"), { query: "param "});
```
