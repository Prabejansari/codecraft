const exhaustedKeys = new Set<number>();

const keys = JSON.parse(process.env.JDOODLE_KEYS || "[]");

export async function executeWithRotation(payload: object) {
    console.log(keys.length)

    for (let i = 0; i < keys.length; i++) {

        if (exhaustedKeys.has(i)) {
            console.log("API key exhausted!")
            continue;
        }

        const key = keys[i];

        const res = await fetch("https://api.jdoodle.com/v1/execute", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                clientId: key.id,
                clientSecret: key.secret,
                ...payload,
            }),
        });

        const data = await res.json();

        if (data?.error?.includes("limit")) {
            exhaustedKeys.add(i);
            console.log("API key exhausteds!")
            continue;
        }
        console.log(key)

        return data;
    }

    throw new Error("All JDoodle API keys exhausted");
}