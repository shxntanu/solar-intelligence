import axios, { AxiosResponse } from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const {
            installationType,
            panelType,
            capacity,
            maintenanceFreq,
            cost,
            region,
            typeofinstallation,
            installerName,
            warrantyYears,
        } = req.body;

        const response: AxiosResponse = await axios.get(
            `https://mindspark-23-ml.onrender.com/ml/forecast?attributes=[${installationType},${panelType},${capacity},${maintenanceFreq},${cost},5,${typeofinstallation},${installerName},${warrantyYears}]`
        );

        const data = response.data;
        res.status(200).json(data);
    } catch (error) {
        console.error("Error proxying request:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
