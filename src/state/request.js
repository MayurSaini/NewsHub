export const request = async (url, method, body, headers) => {
    try {
      const response = await fetch(url, {
        method: method,
        headers: headers,
        body: body,
    });
    const result = await response.json();
    return result;
    } catch (error) {
      console.log(error)
    }

};