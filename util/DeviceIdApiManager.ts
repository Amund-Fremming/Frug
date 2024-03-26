import { URL_BASE } from "./URL_BASE";

const GAME_URL_BASE = `${URL_BASE}/spike/games`;

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

export const doesDeviceExist = async (deviceId: string) => {
  try {
    const response = await fetch(
      `${GAME_URL_BASE}/deviceexists/?deviceId=${encodeURIComponent(deviceId)}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`POST? not working: ${error}`);
  }
};
