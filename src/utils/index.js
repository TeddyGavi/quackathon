export async function getImages(offset, callback) {
  try {
    const response = await fetch(
      `https://api.api-ninjas.com/v1/cats?max_weight=200&offset=${offset}`,
      {
        method: "GET",
        headers: {
          "X-Api-Key": `${process.env.REACT_APP_API_NINJA}`,
        },
        contentType: "application/json",
      }
    );
    const catJSON = await response.json();

    callback(catJSON);
  } catch (err) {
    console.error(err);
  }
}
