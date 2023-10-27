interface JSONResponse {
    status: boolean;
    response: Record<string, string>[][];
}

interface ConvertedData {
    labels: string[];
    datasets: {
        label: string;
        data: string[];
        backgroundColor: string;
    }[];
}

export function convertJSONResponse(jsonResponse: JSONResponse): ConvertedData {
    const data: ConvertedData = {
        labels: [],
        datasets: [],
    };

    if (jsonResponse.status && jsonResponse.response.length > 0) {
        // Extract labels from the first array of objects
        const firstRow = jsonResponse.response[0];
        data.labels = Object.keys(firstRow[0]);

        // Convert each array of objects into a dataset
        jsonResponse.response.forEach((dataset, index) => {
            const datasetData = dataset.map((item) => Object.values(item).map((value) => value));
            data.datasets.push({
                label: `Dataset ${index + 1}`,
                data: datasetData.flat(),
                backgroundColor: "some color", // You can set a specific color here
            });
        });
    }

    return data;
}

const colors = {
    primary: "rgba(255, 99, 132, 0.5)",
    secondary: "rgba(54, 162, 235, 0.5)",
};

// Example usage:
const jsonResponse: JSONResponse = {
    "status": true,
    "response": [
        [
            {
                "Key1": "val1",
                "Key2": "val2",
            },
            {
                "Key1": "val3",
                "Key2": "val4",
            },
        ],
        [
            {
                "Key1": "val5",
                "Key2": "val6",
            },
            {
                "Key1": "val7",
                "Key2": "val8",
            },
        ],
    ],
};

const convertedData = convertJSONResponse(jsonResponse);
console.log(convertedData);
