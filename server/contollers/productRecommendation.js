const solar_panels = require("../datasets/solar_panel");
const inverters = require("../datasets/invertor");
const schemes = require("../datasets/schemes");
const MSEM = require("../datasets/MSEM");

const calculateEnergyProduced = (panelCapacity) => {
  // Example calculation of energy produced using panel capacity, sunshine hours, and efficiency
  const sunshineHours = 5.5; // Example average daily sunshine hours
  const efficiency = 0.15; // Example efficiency of solar panels (15%)
  return panelCapacity * sunshineHours * efficiency;
};

const calculateCO2Offset = (energyProduced) => {
  // Example calculation of CO2 offset using energy produced and CO2 emission factor
  const co2EmissionFactor = 0.7; // Example CO2 emission factor (0.7 kg CO2/kWh)
  return energyProduced * co2EmissionFactor;
};

const calculateTreesAdded = (co2Offset) => {
  // Example calculation of trees added using CO2 offset and CO2 absorbed per tree
  const co2AbsorbedPerTree = 21.77; // Example CO2 absorbed per tree per year (21.77 kg CO2/tree/year)
  return Math.round(co2Offset / co2AbsorbedPerTree); // Rounded to nearest whole number
};

const anualSaving = (capacity, avgEnergyCostKwh) => {
  return (avgEnergyCostKwh * capacity * 5.5 * 365) / 1000;
};

const integrate = (req, res) => {
  const { customer_id, state } = req.body;

  const sanctioned_kw = MSEM.find(
    (msem) => msem.customer_number === customer_id
  ).santioned_kw;

  const avgEnergyCostKwh = MSEM.find(
    (msem) => msem.customer_number === customer_id
  ).energyCost;

  const combinations = calculateCombinations(sanctioned_kw);
  const energyProduced = calculateEnergyProduced(sanctioned_kw);
  const co2Offset = calculateCO2Offset(energyProduced);
  const treesAdded = calculateTreesAdded(co2Offset);

  const anualSavingAmount = anualSaving(sanctioned_kw, avgEnergyCostKwh);
  const lifeTimeSavingAmount = anualSavingAmount * 25;

  const stateData = schemes.states[state];
  res.status(200).json({
    combinations,
    stateData,
    treesAdded,
    anualSavingAmount,
    lifeTimeSavingAmount,
    avgEnergyCostKwh,
  });
};
const calculateCombinations = (required_power) => {
  const combinations = [];

  for (const panel of solar_panels) {
    for (const inverter of inverters) {
      const no_panels = Math.ceil(required_power / panel["Watt"]) + 1;
      const total_cost = panel["price"] * no_panels + inverter["price"];
      if (required_power <= inverter["Watt"]) {
        combinations.push({ panel, no_panels, inverter, total_cost });
      }
    }
  }

  combinations.sort((a, b) => a.total_cost - b.total_cost);

  let result = combinations.slice(0, 3);
  return result;
};

module.exports = { integrate };
