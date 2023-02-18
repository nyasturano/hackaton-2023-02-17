import { useCallback } from "react";

export const useHttp = () => {
  
  const request = useCallback(async (url, method = 'GET', body = null, headers) => {
    headers  = {...headers, 'Content-Type': 'application/json;charset=utf-8', "Accept": "application/json"}
    try {
    
      const response = await fetch(url, { method, body, headers});
      if (!response.ok) {
        throw new Error(`Could not fetch ${url}, status: ${response.status}`);
      }
      
      const data = await response.json();
      return data;
    
    } catch(e) {
      throw e;
    }
  }, []);
  
  return {request};
}