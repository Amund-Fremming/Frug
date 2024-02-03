const GAME_URL_BASE = "http://localhost:5088/spike/games";

export const addDevice = async (deviceId: string) => {
  try {
    const response = await fetch(`${GAME_URL_BASE}/adddevice`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(deviceId),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`POST not working: ${error}`);
  }
};
