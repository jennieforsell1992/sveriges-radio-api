import { IProgramResponse } from "../models/IProgramResponse";

export async function getPodcasts(): Promise<IProgramResponse> {
  return await fetch(
    "https://api.sr.se/api/v2/programs/index?programcategoryid=133&format=json&pagination=false&indent=true&filter=program.archived&filterValue=false"
  )
    .then((result) => result.json())
    .then((data) => data)
    .catch((error) => {
      console.error("nått blev fel:", error);
      return null;
    });
}

export default getPodcasts;
