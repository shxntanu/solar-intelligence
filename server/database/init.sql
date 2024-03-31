CREATE TABLE EV (
  UserID INTEGER,
  UserType VARCHAR(50),
  EV_Model VARCHAR(50),
  BatteryCapacity INTEGER,
  ChargePreference VARCHAR(50),
  DailyDrivingDistance INTEGER,
  PreferredChargingTime VARCHAR(20),
  PaymentMethod VARCHAR(50),
  Bank VARCHAR(50),
  State VARCHAR(50),
  City VARCHAR(50)
);


CREATE TABLE solar (
  id SERIAL PRIMARY KEY,
  InstallationID VARCHAR(20),
  InstallationType VARCHAR(50),
  PanelType VARCHAR(50),
  Capacity INTEGER,
  EnergyProduced INTEGER,
  MaintenanceFrequency INTEGER,
  Cost INTEGER,
  Region VARCHAR(50),
  Latitude DOUBLE PRECISION,
  Longitude DOUBLE PRECISION,
  TypeOfInstallation VARCHAR(50),
  InstallerName VARCHAR(50),
  WarrantyYears INTEGER,
  AnnualSavings INTEGER
);