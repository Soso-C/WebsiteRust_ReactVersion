import axios from "axios";

// Get Server Info
export async function getServerx2() {
  const serverResponse = await axios.get(
    "https://api.battlemetrics.com/servers/14668224"
  );
  if (!serverResponse) return "sorry, couldn’t load server data";
  return serverResponse.data.data.attributes;
}

export async function getServerx10() {
  const serverResponse = await axios.get(
    "https://api.battlemetrics.com/servers/16151952"
  );
  if (!serverResponse) return "sorry, couldn’t load server data";
  return serverResponse.data.data.attributes;
}
