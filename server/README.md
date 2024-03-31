This API provides endpoints for retrieving global data on solar installations, categorized by region, installation type, panel type, type of installation, installer name, cost, capacity, energy produced, maintenance frequency, warranty years, and annual savings.

# Endpoints
# 1)
```bash
/api/global
```
This endpoint returns the total number of entries for each state.

Example request:
```bash
GET /api/global
```
Example response:

```JSON
{
  "status": true,
  "label": "Count -- Region",
  "response": [
    {
      "region": "Telangana",
      "regioncount": "520"
    },
    {
      "region": "Tamil Nadu",
      "regioncount": "491"
    },
  ]
}
```
# 2)
```bash
/api/global/:category
```
This endpoint returns the total number of entries for a specific category. The category can be one of the following:

- installationtype
- paneltype
- typeinstallation
- installername
Example request:
```bash
GET /api/global/installationtype
```
Example response:

```JSON
{
  "status": true,
  "response": [
    {
      "installationtype": "Residential",
      "categorycount": "1756"
    },
    {
      "installationtype": "Industrial",
      "categorycount": "1635"
    },
    {
      "installationtype": "Commercial",
      "categorycount": "1610"
    }
  ]
}
```

# 3)
```bash
/api/global/:category/:numeric
```
This endpoint returns the average value of a specific numeric type for a specific category. The numeric type can be one of the following:

- cost
- capacity
- energyproduced
- maintainancefrequency
- warrantyyears
- annualsavings
- Example request:
```bash
GET /api/global/installationtype/cost
```

Example response:

```JSON
{
  "status": true,
  "response": [
    {
      "installationtype": "Residential",
      "average": "28978.395785876993"
    },
    {
      "installationtype": "Industrial",
      "average": "98838.955351681957"
    },
    {
      "installationtype": "Commercial",
      "average": "65492.826086956522"
    }
  ]
}
```
# 4)
```bash
/api/:region/:category
```
This endpoint returns the total number of entries for a specific region and category. The category can be one of the following:

- installationtype
- paneltype
- typeinstallation
- installername
Example request:
```bash
GET /api/Karnataka/installationtype
```
Example response:

```JSON
{
  "status": true,
  "label": "Count by Region of respective category",
  "response": [
    {
      "installationtype": "Residential",
      "categorycount": "505"
    },
    {
      "installationtype": "Industrial",
      "categorycount": "89"
    },
    {
      "installationtype": "Commercial",
      "categorycount": "108"
    }
  ]
}
```

# 5)
```bash
/api/:region/:category/:numeric
```
This endpoint returns the average value of a specific numeric type for a specific category and region. The numeric type can be one of the following:

- cost
- capacity
- energyproduced
- maintainancefrequency
- warrantyyears
- annualsavings
- Example request:
```bash
GET /api/region/Karnataka/installationtype/annualsavings
```

Example response:

```JSON
{
  "status": true,
  "label": "Average annualsavings -- installationtype and Region: Karnataka",
  "response": [
    {
      "installationtype": "Residential",
      "average": "19243.766336633663"
    },
    {
      "installationtype": "Industrial",
      "average": "74485.000000000000"
    },
    {
      "installationtype": "Commercial",
      "average": "56224.518518518519"
    }
  ]
}
```
# 6)
```bash
GET /api/ml/optimization/:id
```
Utilizes machine learning to optimize independent variables for a specific user identified by :id.

Example input
```bash
GET /api/ml/optimization/45
```

```JSON
{
  {
  "status": true,
  "response": [
    {
      "id": 414,
      "installationid": "S007",
      "installationtype": "Residential",
      "paneltype": "Thin Film",
      "capacity": 14,
      "energyproduced": 1308,
      "maintenancefrequency": 6,
      "cost": 74449,
      "region": "Uttar Pradesh",
      "latitude": 10.8505,
      "longitude": 71.6446,
      "typeofinstallation": "Roof Mounted",
      "installername": "SunWave Ltd",
      "warrantyyears": 24,
      "annualsavings": 150000
    },
    {
      "id": 727,
      "installationid": "S006",
      "installationtype": "Residential",
      "paneltype": "Monocrystalline",
      "capacity": 100,
      "energyproduced": 1981,
      "maintenancefrequency": 6,
      "cost": 56000,
      "region": "Rajasthan",
      "latitude": 10.8505,
      "longitude": 79.0638,
      "typeofinstallation": "Ground Mounted",
      "installername": "GreenEnergy Co",
      "warrantyyears": 23,
      "annualsavings": 146722
    }
  ]
  }
}
```

# 7)
```bash
GET /api/ml/forecast?attributes=[2,0,5,600,12,50000,4,1,2,25]
```
Utilizes machine learning to predict annual savings based upon installation 
- installationtype
- paneltype
- typeinstallation
- installername
-  cost
- capacity
- maintainancefrequency
- warrantyyears

Example response:

```JSON
{
  "status": true,
  "response": {
  "response": 112276,
  "status": 200
  }
}
```
